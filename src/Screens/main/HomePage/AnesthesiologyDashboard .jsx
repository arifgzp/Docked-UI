import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
	StatusBar,
	Input,
	HStack,
	VStack,
	FormControlLabel,
	FormControl,
	FormControlLabelText,
	InputField,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Platform, useWindowDimensions, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Image } from "@gluestack-ui/themed";
import { ImageAssets } from "../../../../assets/Assets";
import appStoreInstance from "../../../stores/AppStore";
import { ButtonIcon } from "@gluestack-ui/themed";
import CircularProgress from "react-native-circular-progress-indicator";
import { Card } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { observer } from "mobx-react";
import NetworkUtils from "../../../utils/NetworkUtils";
import { useQuery } from "../../../models";
import DynamicBarGraph from "../../../components/DynamicBarGraph";
import {
	requestAggerateCaseLogDataOfDailyForAnesthesia,
	requestAggerateCaseLogDataOfMonthlyForAnesthesia,
	requestAggerateCaseLogDataOfWeeklyForAnesthesia,
	requestASAGradeDailyDataFromBigQuery,
	requestASAGradeDataFromBigQuery,
	requestASAGradeMonthlyDataFromBigQuery,
	requestASAGradeWeeklyDataFromBigQuery,
	requestConductDataFromBigQuery,
	requestInterventionsDailyDataFromBigQuery,
	requestInterventionsMonthlyDataFromBigQuery,
	requestInterventionsWeeklyDataFromBigQuery,
	requestProceduresDailyDataFromBigQuery,
	requestProceduresMonthlyDataFromBigQuery,
	requestProceduresWeeklyDataFromBigQuery,
	requestReginoalTechniquesDailyDataFromBigQuery,
	requestReginoalTechniquesMonthlyDataFromBigQuery,
	requestReginoalTechniquesWeeklyDataFromBigQuery,
	requestTypesOfAnesthesiaDataFromBigQuery,
} from "../../../components/BigQueryFunctions/UserDashboardAnalyticalQueries";
import Loader from "../../../components/Loader";
import IsReadyLoader from "../../../components/IsReadyLoader";
import useIsReady from "../../../hooks/useIsReady";
import { toJS } from "mobx";
import ApprovalListInTheDashboard from "../../../components/ApprovalListInTheDashboard";

function filterCouductData(arr) {
	arr.forEach((item) => {
		if (item.table_name === "Total" && item.conduct === "Performed") {
			appStoreInstance.setPerformedAnalyticsCount(item.count);
		} else if (item.table_name === "Total" && item.conduct === "Observed") {
			appStoreInstance.setObservedAnalyticsCount(item.count);
		} else if (item.table_name === "Total" && item.conduct === "Assisted") {
			appStoreInstance.setAssistedAnalyticsCount(item.count);
		}
	});
}

function transformBigQueryDataIntoGraphFormat(dailyData, monthlyData, weeklyData) {
	const currentDate = new Date();
	const currentDay = currentDate.getDay();
	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	// Reorder days so that the current day is last
	const orderedDays = [...daysOfWeek.slice(currentDay + 1), ...daysOfWeek.slice(0, currentDay + 1)];

	// Transform daily data (last 7 days)
	const dailyLabels = orderedDays;
	const dailyDurations = dailyLabels.map((day) => {
		const entry = dailyData?.find((d) => d.period === day);
		return entry ? entry.total_count : 0;
	});

	// Transform weekly data (last 4 weeks)
	let weeklyLabels = [];
	let weeklyDurations = [];
	if (weeklyData && Array.isArray(weeklyData) && weeklyData.length > 0) {
		const sortedWeeklyData = weeklyData.sort((a, b) => new Date(a.first_entry) - new Date(b.first_entry)).slice(-4);
		weeklyLabels = sortedWeeklyData.map((d) => {
			const weekNumber = d.period.split("-")[0].slice(2);
			return `Week-${weekNumber}`;
		});
		weeklyDurations = sortedWeeklyData.map((d) => d.total_count);
	}

	// Transform monthly data (last 6 months)
	let monthlyLabels = [];
	let monthlyDurations = [];
	if (monthlyData && Array.isArray(monthlyData) && monthlyData.length > 0) {
		const sortedMonthlyData = monthlyData.sort((a, b) => new Date(a.first_entry) - new Date(b.first_entry)).slice(-6);
		monthlyLabels = sortedMonthlyData.map((d) => d.period.split(" ")[0]);
		monthlyDurations = sortedMonthlyData.map((d) => d.total_count);
	}

	return {
		title: "Cases Logged",
		periods: {
			Daily: {
				labels: dailyLabels,
				durations: dailyDurations,
			},
			Weekly: {
				labels: weeklyLabels,
				durations: weeklyDurations,
			},
			Monthly: {
				labels: monthlyLabels,
				durations: monthlyDurations,
			},
		},
	};
}
const AnesthesiologyDashboard = ({ navigation }) => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [aggerateDailyCaseLogData, setAggerateDailyCaseLogData] = useState([]);
	const [aggerateWeeklyCaseLogData, setAggerateWeeklyCaseLogData] = useState([]);
	const [aggerateMonthlyCaseLogData, setAggerateMonthlyCaseLogData] = useState([]);
	const [showCongrats, setShowCongrats] = useState(true);

	const [asaGradeDailyData, setASAGradeDailyData] = useState([]);
	const [asaGradeWeeklyData, setASAGradeWeeklyData] = useState([]);
	const [asaGradeMonthlyData, setASAGradeMonthlyData] = useState([]);
	const [selectedPeriod, setSelectedPeriod] = useState("Daily");
	const [asaGradeData, setAsaGradeData] = useState([]);

	const [regionalTechniquesDailyData, setRegionalTechniquesDailyData] = useState(null);
	const [regionalTechniquesWeeklyData, setRegionalTechniquesWeeklyData] = useState(null);
	const [regionalTechniquesMonthlyData, setRegionalTechniquesMonthlyData] = useState(null);

	const [interventionsDailyData, setInterventionsDailyData] = useState(null);
	const [interventionsWeeklyData, setInterventionsWeeklyData] = useState(null);
	const [interventionsMonthlyData, setInterventionsMonthlyData] = useState(null);

	const [proceduresDailyData, setProceduresDailyData] = useState(null);
	const [proceduresWeeklyData, setProceduresWeeklyData] = useState(null);
	const [proceduresMonthlyData, setProceduresMonthlyData] = useState(null);

	const conducts = [
		{ title: "Observed", value: appStoreInstance.ObservedAnalyticsCount || 0 },
		{ title: "Assisted", value: appStoreInstance.AssistedAnalyticsCount || 0 },
		{ title: "Performed", value: appStoreInstance.PerformedAnalyticsCount || 0 },
	];

	const ASATimePeriods = ["Daily", "Weekly", "Monthly"];

	const anaesthesiaTypes = [
		{ title: "General Anesthesia", count: appStoreInstance.GeneralAnesthesiaAnalyticsCount || 0 },
		{ title: "Regional Anesthesia", count: appStoreInstance.RegionalAnesthesiaAnalyticsCount || 0 },
		{ title: "TIVA", count: appStoreInstance.TIVAAnalyticsCount || 0 },
		{ title: "Monitored Anesthesia Care", count: appStoreInstance.MontioredAnesthesiaCareAnalyticsCount || 0 },
	];

	const top3TimePeriods = ["Daily", "Weekly", "Monthly"];
	const [selectedTop3Period, setSelectedTop3Period] = useState("Daily");
	const getRegionalTechniquesData = () => {
		switch (selectedTop3Period) {
			case "Daily":
				return regionalTechniquesDailyData || [];
			case "Weekly":
				return regionalTechniquesWeeklyData || [];
			case "Monthly":
				return regionalTechniquesMonthlyData || [];
			default:
				return [];
		}
	};

	const getInterventionData = () => {
		switch (selectedTop3Period) {
			case "Daily":
				return interventionsDailyData || [];
			case "Weekly":
				return interventionsWeeklyData || [];
			case "Monthly":
				return interventionsMonthlyData || [];
			default:
				return [];
		}
	};

	const getProceduresData = () => {
		switch (selectedTop3Period) {
			case "Daily":
				return proceduresDailyData || [];
			case "Weekly":
				return proceduresWeeklyData || [];
			case "Monthly":
				return proceduresMonthlyData || [];
			default:
				return [];
		}
	};

	const [activeIndex, setActiveIndex] = useState(0);

	const scrollViewRef = useRef(null);

	const renderCardForRegionalTechniqueCards = (item, index) => (
		<Box key={index} bg='white' borderRadius='$sm' p='$3' flex={1} mr='$2' mb='$2' alignItems='center' justifyContent='space-between'>
			<Text fontSize={12} fontWeight='bold' textAlign='center' mb='$2'>
				{item.result}
			</Text>
			<Text fontSize={16} fontWeight='bold' color='#006466'>
				{item.count}
			</Text>
		</Box>
	);

	const renderCardForIntervention = (item, index) => (
		<Box key={index} bg='white' borderRadius='$sm' p='$3' flex={1} mr='$2' mb='$2' alignItems='center' justifyContent='space-between'>
			<Text fontSize={12} fontWeight='bold' textAlign='center' mb='$2'>
				{item.intervention}
			</Text>
			<Text fontSize={16} fontWeight='bold' color='#006466'>
				{item.intervention_count}
			</Text>
		</Box>
	);

	const renderCardForProcedures = (item, index) => (
		<Box key={index} bg='white' borderRadius='$sm' p='$3' flex={1} mr='$2' mb='$2' alignItems='center' justifyContent='space-between'>
			<Text fontSize={12} fontWeight='bold' textAlign='center' mb='$2'>
				{item.procedure}
			</Text>
			<Text fontSize={16} fontWeight='bold' color='#006466'>
				{item.procedure_count}
			</Text>
		</Box>
	);

	const handleScroll = (event) => {
		const contentOffsetX = event.nativeEvent.contentOffset.x;
		const index = Math.round(contentOffsetX / 70); // Adjust 130 based on your card width + margin
		setActiveIndex(index);
	};

	const scrollToIndex = (index) => {
		scrollViewRef.current?.scrollTo({ x: index * 60, animated: true });
	};

	useEffect(() => {
		if (!appStoreInstance.ImagePath) {
			const fetchUserProfile = async () => {
				try {
					const userQuery = store.fetchUserById(appStoreInstance.UserName);
					setQuery(userQuery);
					const finishFetchingUserProfile = await userQuery;
					if (finishFetchingUserProfile) {
						const fetchProfileData = finishFetchingUserProfile.queryUser[0];

						appStoreInstance.setSuperSpecialty(fetchProfileData.superSpecialty);
						appStoreInstance.setSubSpecialty(fetchProfileData.subSpecialty);
						appStoreInstance.setDesignation(fetchProfileData.designation);
						appStoreInstance.setDesignationOthers(fetchProfileData.designationOthers);
						appStoreInstance.setWorkPlace(fetchProfileData.workPlace);
						appStoreInstance.setCity(fetchProfileData.city);
						appStoreInstance.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
						appStoreInstance.setYearOfRegistration(fetchProfileData.yearOfRegistration);
						appStoreInstance.setMedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
						appStoreInstance.setImagePath(fetchProfileData.imagePath);
					}
				} catch (error) {
					console.log(error);
				}
			};
			if (isFocused) {
				fetchUserProfile();
			}
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const conductData = requestConductDataFromBigQuery();

				const conductResponse = await appStoreInstance.requestDataFromBigQuery(conductData);
				if (conductResponse && conductResponse.data) {
					const responseData = conductResponse.data;
					filterCouductData(responseData);
				}
			} catch (error) {
				console.error("Error fetching data from BigQuery:", error);
			}
		};

		if (isFocused) {
			fetchData();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchTypeOfAnesthesiaData = async () => {
			try {
				const typeOfAnaesthesiaData = requestTypesOfAnesthesiaDataFromBigQuery();

				const typeOfAnaesthesiaResponse = await appStoreInstance.requestDataFromBigQuery(typeOfAnaesthesiaData);
				if (typeOfAnaesthesiaResponse && typeOfAnaesthesiaResponse.data) {
					const typeOfAnaesthesiaDataData = typeOfAnaesthesiaResponse.data;

					typeOfAnaesthesiaDataData.forEach((item) => {
						switch (item.type) {
							case "Monitored Anesthesia Care":
								appStoreInstance.setMontioredAnesthesiaCareAnalyticsCount(item.count);
								break;
							case "TIVA":
								appStoreInstance.setTIVAAnalyticsCount(item.count);
								break;
							case "General Anesthesia":
								appStoreInstance.setGeneralAnesthesiaAnalyticsCount(item.count);
								break;
							case "Regional":
								appStoreInstance.setRegionalAnesthesiaAnalyticsCount(item.count);
								break;
							default:
								console.log(`Unknown type: ${item.type}`);
						}
					});
				}
			} catch (error) {
				console.error("Error fetching data from BigQuery:", error);
			}
		};

		if (isFocused) {
			fetchTypeOfAnesthesiaData();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchDataForAggereateCaseLogData = async () => {
			try {
				const aggerateCaseLogDataForDaily = requestAggerateCaseLogDataOfDailyForAnesthesia();
				const aggerateCaseLogDataForDailyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateCaseLogDataForDaily);
				if (aggerateCaseLogDataForDailyResponse) {
					const aggerateCaseLogDataForDailyResponseData = aggerateCaseLogDataForDailyResponse.data;
					setAggerateDailyCaseLogData(aggerateCaseLogDataForDailyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};
		const fetchDataForAggereateCaseLogDataWeek = async () => {
			try {
				const aggerateCaseLogDataForWeekly = requestAggerateCaseLogDataOfWeeklyForAnesthesia();
				const aggerateCaseLogDataForWeeklyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateCaseLogDataForWeekly);
				if (aggerateCaseLogDataForWeeklyResponse) {
					const aggerateCaseLogDataForWeeklyResponseData = aggerateCaseLogDataForWeeklyResponse.data;
					setAggerateWeeklyCaseLogData(aggerateCaseLogDataForWeeklyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};
		const fetchDataForAggereateCaseLogDataMonth = async () => {
			try {
				const aggerateCaseLogDataForMonthly = requestAggerateCaseLogDataOfMonthlyForAnesthesia();
				const aggerateCaseLogDataForMonthlyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateCaseLogDataForMonthly);
				if (aggerateCaseLogDataForMonthlyResponse) {
					const aggerateCaseLogDataForMonthlyResponseData = aggerateCaseLogDataForMonthlyResponse.data;
					setAggerateMonthlyCaseLogData(aggerateCaseLogDataForMonthlyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};
		if (isFocused) {
			fetchDataForAggereateCaseLogData();
			fetchDataForAggereateCaseLogDataWeek();
			fetchDataForAggereateCaseLogDataMonth();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchDataForASAGradeDaily = async () => {
			try {
				const asaGradeDailyQuery = requestASAGradeDailyDataFromBigQuery();
				const asaGradeDailyResponse = await appStoreInstance.requestDataFromBigQuery(asaGradeDailyQuery);
				if (asaGradeDailyResponse) {
					const asaGradeDailyResponseData = asaGradeDailyResponse.data;
					setASAGradeDailyData(asaGradeDailyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForASAGradeWeekly = async () => {
			try {
				const asaGradeWeeklyQuery = requestASAGradeWeeklyDataFromBigQuery();
				const asaGradeWeeklyResponse = await appStoreInstance.requestDataFromBigQuery(asaGradeWeeklyQuery);
				if (asaGradeWeeklyResponse) {
					const asaGradeWeeklyResponseData = asaGradeWeeklyResponse.data;
					setASAGradeWeeklyData(asaGradeWeeklyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForASAGradeMonthly = async () => {
			try {
				const asaGradeMonthlyQuery = requestASAGradeMonthlyDataFromBigQuery();
				const asaGradeMonthlyResponse = await appStoreInstance.requestDataFromBigQuery(asaGradeMonthlyQuery);
				if (asaGradeMonthlyResponse) {
					const asaGradeMonthlyResponseData = asaGradeMonthlyResponse.data;
					setASAGradeMonthlyData(asaGradeMonthlyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		if (isFocused) {
			fetchDataForASAGradeDaily();
			fetchDataForASAGradeWeekly();
			fetchDataForASAGradeMonthly();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchDataForRegionalTechniquesDaily = async () => {
			try {
				const regionalTechniquesDailyQuery = requestReginoalTechniquesDailyDataFromBigQuery();
				const regionalTechniquesDailyResponse = await appStoreInstance.requestDataFromBigQuery(regionalTechniquesDailyQuery);
				if (regionalTechniquesDailyResponse) {
					const regionalTechniquesDailyResponseData = regionalTechniquesDailyResponse.data;
					setRegionalTechniquesDailyData(regionalTechniquesDailyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForRegionalTechniquesWeekly = async () => {
			try {
				const regionalTechniquesWeeklyQuery = requestReginoalTechniquesWeeklyDataFromBigQuery();
				const regionalTechniquesWeeklyResponse = await appStoreInstance.requestDataFromBigQuery(regionalTechniquesWeeklyQuery);
				if (regionalTechniquesWeeklyResponse) {
					const regionalTechniquesWeeklyResponseData = regionalTechniquesWeeklyResponse.data;
					setRegionalTechniquesWeeklyData(regionalTechniquesWeeklyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForRegionalTechniquesMonthly = async () => {
			try {
				const regionalTechniquesMonthlyQuery = requestReginoalTechniquesMonthlyDataFromBigQuery();
				const regionalTechniquesMonthlyResponse = await appStoreInstance.requestDataFromBigQuery(regionalTechniquesMonthlyQuery);
				if (regionalTechniquesMonthlyResponse) {
					const regionalTechniquesMonthlyResponseData = regionalTechniquesMonthlyResponse.data;
					setRegionalTechniquesMonthlyData(regionalTechniquesMonthlyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		if (isFocused) {
			fetchDataForRegionalTechniquesDaily();
			fetchDataForRegionalTechniquesWeekly();
			fetchDataForRegionalTechniquesMonthly();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchDataForInterventionsDaily = async () => {
			try {
				const interventionsDailyQuery = requestInterventionsDailyDataFromBigQuery();
				const interventionsDailyResponse = await appStoreInstance.requestDataFromBigQuery(interventionsDailyQuery);
				if (interventionsDailyResponse) {
					const interventionsDailyResponseData = interventionsDailyResponse.data;
					setInterventionsDailyData(interventionsDailyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForInterventionsWeekly = async () => {
			try {
				const interventionsWeeklyQuery = requestInterventionsWeeklyDataFromBigQuery();
				const interventionsWeeklyResponse = await appStoreInstance.requestDataFromBigQuery(interventionsWeeklyQuery);
				if (interventionsWeeklyResponse) {
					const interventionsWeeklyResponseData = interventionsWeeklyResponse.data;
					setInterventionsWeeklyData(interventionsWeeklyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForInterventionsMonthly = async () => {
			try {
				const interventionsMonthlyQuery = requestInterventionsMonthlyDataFromBigQuery();
				const interventionsMonthlyResponse = await appStoreInstance.requestDataFromBigQuery(interventionsMonthlyQuery);
				if (interventionsMonthlyResponse) {
					const interventionsMonthlyResponseData = interventionsMonthlyResponse.data;
					setInterventionsMonthlyData(interventionsMonthlyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		if (isFocused) {
			fetchDataForInterventionsDaily();
			fetchDataForInterventionsWeekly();
			fetchDataForInterventionsMonthly();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchDataForProceduresDaily = async () => {
			try {
				const proceduresDailyQuery = requestProceduresDailyDataFromBigQuery();
				const proceduresDailyResponse = await appStoreInstance.requestDataFromBigQuery(proceduresDailyQuery);
				if (proceduresDailyResponse) {
					const proceduresDailyResponseData = proceduresDailyResponse.data;
					setProceduresDailyData(proceduresDailyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForProceduresWeekly = async () => {
			try {
				const proceduresWeeklyQuery = requestProceduresWeeklyDataFromBigQuery();
				const proceduresWeeklyResponse = await appStoreInstance.requestDataFromBigQuery(proceduresWeeklyQuery);
				if (proceduresWeeklyResponse) {
					const proceduresWeeklyResponseData = proceduresWeeklyResponse.data;
					setProceduresWeeklyData(proceduresWeeklyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForProceduresMonthly = async () => {
			try {
				const proceduresMonthlyQuery = requestProceduresMonthlyDataFromBigQuery();
				const proceduresMonthlyResponse = await appStoreInstance.requestDataFromBigQuery(proceduresMonthlyQuery);
				if (proceduresMonthlyResponse) {
					const proceduresMonthlyResponseData = proceduresMonthlyResponse.data;
					setProceduresMonthlyData(proceduresMonthlyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		if (isFocused) {
			fetchDataForProceduresDaily();
			fetchDataForProceduresWeekly();
			fetchDataForProceduresMonthly();
		}
	}, [isFocused]);

	useEffect(() => {
		const setDefaultASAGradeData = () => [
			{ grade: "I", value: "0" },
			{ grade: "II", value: "0" },
			{ grade: "III", value: "0" },
			{ grade: "IV", value: "0" },
			{ grade: "V", value: "0" },
		];

		const getASAGradeData = (data) => {
			if (!data || !Array.isArray(data) || data.length === 0) {
				return setDefaultASAGradeData();
			}
			return [
				{ grade: "I", value: data[0].asa_grade_i_count || "0" },
				{ grade: "II", value: data[0].asa_grade_ii_count || "0" },
				{ grade: "III", value: data[0].asa_grade_iii_count || "0" },
				{ grade: "IV", value: data[0].asa_grade_iv_count || "0" },
				{ grade: "V", value: data[0].asa_grade_v_count || "0" },
			];
		};

		if (selectedPeriod === "Daily") {
			setAsaGradeData(getASAGradeData(asaGradeDailyData));
		} else if (selectedPeriod === "Weekly") {
			setAsaGradeData(getASAGradeData(asaGradeWeeklyData));
		} else if (selectedPeriod === "Monthly") {
			setAsaGradeData(getASAGradeData(asaGradeMonthlyData));
		} else {
			setAsaGradeData(setDefaultASAGradeData());
		}
	}, [selectedPeriod, asaGradeDailyData, asaGradeWeeklyData, asaGradeMonthlyData]);

	useEffect(() => {
		const fetchCaseLogsForApproval = async () => {
			// Return early if not faculty
			if (appStoreInstance.UserRole !== "FACULTY") {
				return;
			}

			try {
				store.clearCaseLogList();
				const query = store.fetchCaseLogsForFacultyLeftForApproval(appStoreInstance.UserName, appStoreInstance.UserId);
				setQuery(query);

				const finishFetchingCaseLogsForApproval = await query;
				if (finishFetchingCaseLogsForApproval) {
					console.log("finishFetchingCaseLogsForApproval: ", finishFetchingCaseLogsForApproval);
					const fetchProfileData = finishFetchingCaseLogsForApproval.queryUser[0];
					// Do something with fetchProfileData if needed
				}
			} catch (error) {
				console.error("Error fetching case logs:", error);
			}
		};

		if (isFocused) {
			fetchCaseLogsForApproval();
		}
	}, [isFocused, appStoreInstance.UserRole, appStoreInstance.UserName, appStoreInstance.UserId, store]);

	const casesLoggedData = transformBigQueryDataIntoGraphFormat(
		aggerateDailyCaseLogData || [],
		aggerateMonthlyCaseLogData || [],
		aggerateWeeklyCaseLogData || []
	);

	const requrl = NetworkUtils.getServerURL();
	const url = `${requrl}/download/profilePhoto:${appStoreInstance.ImagePath}`;

	if (!isReady) {
		return (
			<Box pt={20}>
				<IsReadyLoader />
			</Box>
		);
	}

	let cardDetails = [];
	cardDetails.push(...store.CaseLogsList);

	console.log("what is cardDetails for caseloglists", cardDetails);

	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "height" : "height"}
				style={{ flex: 1, zIndex: 999 }}
				keyboardShouldPersistTaps='handled'>
				<Box h='$full' backgroundColor='$primaryBackground' pt='$8'>
					<ScrollView>
						<Box bg='#E6E3DB' elevation={4} p={10}>
							<HStack justifyContent='space-between' alignItems='center'>
								<VStack>
									<Text fontFamily='Inter_Bold' color='#000' size='xl'>
										Hello Dr. {appStoreInstance.Name ? appStoreInstance.Name : "User"}
									</Text>
									<Text>
										{appStoreInstance.UserBroadSpecialty === "OralMedicineAndRadiology"
											? "Oral Medicine & Radiology"
											: appStoreInstance.UserBroadSpecialty}
									</Text>
								</VStack>
								<Pressable onPress={() => navigation.navigate("ProfilePage")}>
									<Image
										borderRadius='$full'
										width={35}
										height={35}
										source={appStoreInstance.ImagePath !== null ? { uri: url } : ImageAssets.profileIcon}
										alt='Docked-Logo'
									/>
								</Pressable>
							</HStack>
						</Box>
						{appStoreInstance.CaseLogNumbers &&
							showCongrats && // Add this condition
							(appStoreInstance.CaseLogNumbers === 10 ||
								appStoreInstance.CaseLogNumbers === 50 ||
								(appStoreInstance.CaseLogNumbers >= 100 && appStoreInstance.CaseLogNumbers % 100 === 0)) && (
								<Box
									bg='#E6E3DB'
									borderRadius='$xl'
									p='$4'
									mx='$4'
									my='$2'
									borderWidth={1}
									borderColor='#367B71'
									shadowColor='$gray300'
									shadowOffset={{ width: 0, height: 2 }}
									shadowOpacity={0.25}
									shadowRadius={3.84}
									elevation={5}>
									<VStack space='sm'>
										<HStack justifyContent='space-between' alignItems='center'>
											<Text color='$black' fontWeight='$bold' size={14}>
												Congratulations !!!!
											</Text>
											<Pressable onPress={() => setShowCongrats(false)}>
												<Text color='$gray700' size={14} fontWeight='$bold'>
													✕
												</Text>
											</Pressable>
										</HStack>

										<Text color='$gray700' size='sm'>
											You have made a total of {appStoreInstance.CaseLogNumbers} case logs now!
										</Text>

										<Button
											alignSelf='flex-start'
											variant='solid'
											borderWidth={1}
											borderColor='$black'
											bg='#367B71'
											borderRadius='$3xl'
											size='sm'
											mt='$1'
											px='$6'>
											<ButtonText color='$white' fontWeight='$light'>
												Keep logging
											</ButtonText>
										</Button>
									</VStack>
								</Box>
							)}

						{appStoreInstance.UserRole === "FACULTY" && cardDetails.length > 0 && <ApprovalListInTheDashboard card={cardDetails} />}

						<Box p='$4'>
							<VStack space='xl'>
								<HStack gap={48} justifyContent='center'>
									{conducts.map((item, index) => (
										<VStack key={index} alignItems='center'>
											<Text fontSize={12} fontWeight='$bold' color='#333' mb='$2'>
												{item.title}
											</Text>
											<Box
												borderRadius='$full'
												justifyContent='center'
												alignItems='center'
												borderWidth={8}
												borderColor='#D9D9D9'
												width={60}
												height={60}>
												<CircularProgress
													value={item.value}
													maxValue={item.value}
													radius={25}
													duration={0.5}
													progressValueColor='#000'
													activeStrokeColor='#367B71'
													inActiveStrokeColor='#367B71'
													inActiveStrokeWidth={4}
													activeStrokeWidth={4}
													progressValueStyle={{ fontWeight: "bold", fontSize: 16 }}
													valueSuffix={""}
													clockwise={false}
												/>
											</Box>
										</VStack>
									))}
								</HStack>
								<VStack>
									<ScrollView horizontal showsHorizontalScrollIndicator={false} ref={scrollViewRef} onScroll={handleScroll} scrollEventThrottle={16}>
										<HStack space='md' pb='$1'>
											{anaesthesiaTypes.length > 0 ? (
												anaesthesiaTypes.map((item, index) => (
													<Box
														bg='#E6E3DB'
														elevation={4}
														justifyContent='space-between'
														key={index}
														borderColor='#367B71'
														borderWidth={1}
														p='$3'
														borderRadius={16}
														width={107}>
														<Text fontSize={12} textAlign='center' fontWeight='$bold' color='#333'>
															{item?.title}
														</Text>
														<Center>
															<Text fontSize={16} fontWeight='bold' color='#006466'>
																{item.count ?? 0}
															</Text>
														</Center>
													</Box>
												))
											) : (
												<Box>
													<Text>Type of Anesthesia Not found</Text>
												</Box>
											)}
										</HStack>
									</ScrollView>
									<HStack justifyContent='center' mt='$2'>
										{anaesthesiaTypes.map((_, index) => (
											<Pressable key={index} onPress={() => scrollToIndex(index)}>
												<View
													style={{
														width: index === activeIndex ? 20 : 8,
														height: 8,
														borderRadius: 4,
														backgroundColor: index === activeIndex ? "#006466" : "#979797",
														marginHorizontal: 4,
													}}
												/>
											</Pressable>
										))}
									</HStack>
								</VStack>
							</VStack>
						</Box>
						<DynamicBarGraph data={casesLoggedData} />
						<Box bg='#1E1E1E' p='$6'>
							<VStack space='md'>
								<HStack justifyContent='space-between' alignItems='center'>
									<Text color='white' fontSize={12} fontWeight='bold'>
										ASA Grades
									</Text>
									<HStack space='sm'>
										{ASATimePeriods.map((period) => (
											<Pressable
												key={period}
												onPress={() => setSelectedPeriod(period)}
												style={{
													backgroundColor: selectedPeriod === period ? "#006466" : "transparent",
													borderColor: selectedPeriod === period ? "#006466" : "white",
													borderWidth: 1,
													borderRadius: 20,
													paddingHorizontal: 12,
													paddingVertical: 4,
												}}>
												<Text color='white' fontSize='$xs'>
													{period}
												</Text>
											</Pressable>
										))}
									</HStack>
								</HStack>
								<VStack space='md'>
									<HStack justifyContent='space-between' px='$4'>
										{asaGradeData.map((item) => (
											<Text key={item.grade} color='white' fontSize={12}>
												{item.grade}
											</Text>
										))}
									</HStack>
									<View style={{ height: 2, backgroundColor: "#E6E3DB80", marginVertical: 2 }} />
									<HStack justifyContent='space-between'>
										{asaGradeData.map((item) => (
											<View
												key={item.grade}
												style={{
													width: 40,
													height: 40,
													borderRadius: 25,
													backgroundColor: "white",
													justifyContent: "center",
													alignItems: "center",
												}}>
												<Text color='#CC3F0C' fontSize='$lg' fontWeight='bold'>
													{item.value}
												</Text>
											</View>
										))}
									</HStack>
								</VStack>
							</VStack>
						</Box>

						<Box p='$4' borderRadius='$lg'>
							<VStack space='md'>
								<HStack justifyContent='space-between' alignItems='center'>
									<Text fontSize={16} fontWeight='bold'>
										Top 3
									</Text>
									<HStack space='xs'>
										{top3TimePeriods.map((period) => (
											<Pressable
												key={period}
												onPress={() => setSelectedTop3Period(period)}
												style={{
													backgroundColor: selectedTop3Period === period ? "#006466" : "transparent",
													borderColor: "#006466",
													borderWidth: 1,
													borderRadius: 20,
													paddingHorizontal: 12,
													paddingVertical: 4,
												}}>
												<Text color={selectedTop3Period === period ? "white" : "#006466"} fontSize='$xs'>
													{period}
												</Text>
											</Pressable>
										))}
									</HStack>
								</HStack>
								<VStack space='md'>
									<VStack>
										<Text fontSize={12} color='#979797' mb='$2'>
											Regional techniques
										</Text>
										<View style={{ height: 1, backgroundColor: "#666", marginBottom: 8 }} />
										<HStack flexWrap='wrap' justifyContent='space-between'>
											{getRegionalTechniquesData().length > 0 ? (
												getRegionalTechniquesData().map((item, index) => renderCardForRegionalTechniqueCards(item, index))
											) : (
												<Text>No data available for this period</Text>
											)}
										</HStack>
									</VStack>

									<VStack>
										<Text fontSize={12} color='#979797' mb='$2'>
											Chronic Pain log
										</Text>
										<View style={{ height: 1, backgroundColor: "#666", marginBottom: 8 }} />
										<HStack flexWrap='wrap' justifyContent='space-between'>
											{getInterventionData().length > 0 ? (
												getInterventionData().map((item, index) => renderCardForIntervention(item, index))
											) : (
												<Text>No data available for this period</Text>
											)}
										</HStack>
									</VStack>

									<VStack>
										<Text fontSize={12} color='#979797' mb='$2'>
											Critical Care Procedures
										</Text>
										<View style={{ height: 1, backgroundColor: "#666", marginBottom: 8 }} />
										<HStack flexWrap='wrap' justifyContent='space-between'>
											{getProceduresData().length > 0 ? (
												getProceduresData().map((item, index) => renderCardForProcedures(item, index))
											) : (
												<Text>No data available for this period</Text>
											)}
										</HStack>
									</VStack>
								</VStack>
							</VStack>
						</Box>
					</ScrollView>
				</Box>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(AnesthesiologyDashboard);
