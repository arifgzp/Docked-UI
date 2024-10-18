import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Box, Text, HStack, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { View, Platform, useWindowDimensions, Pressable } from "react-native";
import { ScrollView, Image } from "@gluestack-ui/themed";
import { ImageAssets } from "../../../../assets/Assets";
import appStoreInstance from "../../../stores/AppStore";
import CircularProgress from "react-native-circular-progress-indicator";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { observer } from "mobx-react";
import NetworkUtils from "../../../utils/NetworkUtils";
import { useQuery } from "../../../models";
import DynamicBarGraph from "../../../components/DynamicBarGraph";
import {
	requestAggerateCaseLogDataOfDailyForOrthopaedics,
	requestAggerateCaseLogDataOfMonthlyForOrthopaedics,
	requestAggerateCaseLogDataOfWeeklyForOrthopaedics,
	requestAggerateProcedureDurationDataOfMonthlyForOrthopaedics,
	requestAggerateProcedureDurationDataOfWeeklyForOrthopaedics,
	requestAggerateProcedureLogDataOfDailyForOrthopaedics,
	requestAggerateProcedureLogDataOfMonthlyForOrthopaedics,
	requestAggerateProcedureLogDataOfWeeklyForOrthopaedics,
	requestAggerateTotalHoursOfSurgeryForOrthopaedics,
	requestAggeratProcedureDurationDataOfDailyForOrthopaedics,
	requestOrthopaedicsConductDataFromBigQuery,
} from "../../../components/BigQueryFunctions/UserDashboardAnalyticalQueries";
import Loader from "../../../components/Loader";

function processConductData(data) {
	data.forEach((item) => {
		switch (item.conduct) {
			case "Assisted":
				appStoreInstance.setAssistedAnalyticsCount(item.count);
				break;
			case "Observed":
				appStoreInstance.setObservedAnalyticsCount(item.count);
				break;
			case "Performed":
				appStoreInstance.setPerformedAnalyticsCount(item.count);
				break;
			default:
				console.warn(`Unknown conduct type: ${item.conduct}`);
		}
	});
}

function transformBigQueriesDataForGraphs(daily, weekly, monthly, title) {
	const graphData = {
		title: title,
		periods: {
			Daily: { labels: [], durations: [] },
			Weekly: { labels: [], durations: [] },
			Monthly: { labels: [], durations: [] },
		},
	};

	const reverseArrays = (obj) => {
		obj.labels = obj.labels.reverse();
		obj.durations = obj.durations.reverse();
	};

	// Check if daily data exists and has at least 7 items
	if (Array.isArray(daily) && daily.length >= 7) {
		daily.slice(-7).forEach((item) => {
			const dayOfWeek = item.date_label.split(" ")[1];
			graphData.periods.Daily.labels.push(dayOfWeek);
			graphData.periods.Daily.durations.push(item.count ?? item.total_hours);
		});
		reverseArrays(graphData.periods.Daily);
	}

	// Check if weekly data exists and has at least 4 items
	if (Array.isArray(weekly) && weekly.length >= 4) {
		weekly.slice(-4).forEach((item) => {
			graphData.periods.Weekly.labels.push(`Week ${item.date_label.split("-")[0].substring(2)}`);
			graphData.periods.Weekly.durations.push(item.count ?? item.total_hours);
		});
		reverseArrays(graphData.periods.Weekly);
	}

	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	// Check if monthly data exists and has at least 6 items
	if (Array.isArray(monthly) && monthly.length >= 6) {
		monthly.slice(-6).forEach((item) => {
			const [month, year] = item.date_label.split("-");
			const monthIndex = parseInt(month) - 1;
			graphData.periods.Monthly.labels.push(`${monthNames[monthIndex]}`);
			graphData.periods.Monthly.durations.push(item.count ?? item.total_hours);
		});
		reverseArrays(graphData.periods.Monthly);
	}

	return graphData;
}

const OrthopaedicsDashboard = ({ navigation }) => {
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [aggerateDailyCaseLogData, setAggerateDailyCaseLogData] = useState([]);
	const [aggerateWeeklyCaseLogData, setAggerateWeeklyCaseLogData] = useState([]);
	const [aggerateMonthlyCaseLogData, setAggerateMonthlyCaseLogData] = useState([]);

	const [aggerateDailyProcedureLogData, setAggerateDailyProcedureLogData] = useState([]);
	const [aggerateWeeklyProcedureLogData, setAggerateWeeklyProcedureLogData] = useState([]);
	const [aggerateMonthlyProcedureLogData, setAggerateMonthlyProcedureLogData] = useState([]);
	const [totalHoursOfSurgeries, setTotalHoursOfSurgeries] = useState("0 hours");

	const [procedureDurationDailyData, setProcedureDurationDailyData] = useState(null);
	const [procedureDurationWeeklyData, setProcedureDurationWeeklyData] = useState(null);
	const [procedureDurationMonthlyData, setProcedureDurationMonthlyData] = useState(null);

	const conducts = [
		{ title: "Observed", value: appStoreInstance.ObservedAnalyticsCount || 0 },
		{ title: "Assisted", value: appStoreInstance.AssistedAnalyticsCount || 0 },
		{ title: "Performed", value: appStoreInstance.PerformedAnalyticsCount || 0 },
	];

	// New Hours of Surgeries Data
	const hoursOfSurgeriesData = {
		title: "Duration (hrs)",
		periods: {
			Daily: {
				labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				durations: [5.5, 7, 6.5, 8, 4.5, 3, 0],
			},
			Weekly: {
				labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
				durations: [34.5, 38, 29.5, 32],
			},
			Monthly: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				durations: [120, 115, 130, 125, 110, 140, 135, 120, 130, 145, 125, 105],
			},
		},
	};

	// New Procedures Log Data
	const proceduresLogData = {
		title: "Procedures (n)",
		periods: {
			Daily: {
				labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				durations: [3, 5, 4, 6, 2, 1, 0],
			},
			Weekly: {
				labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
				durations: [21, 25, 18, 23],
			},
			Monthly: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				durations: [80, 75, 90, 85, 70, 95, 88, 82, 92, 98, 85, 72],
			},
		},
	};

	useEffect(() => {
		if (!appStoreInstance.ImagePath && isFocused) {
			const fetchUserProfile = async () => {
				try {
					const userQuery = store.fetchUserById(appStoreInstance.UserName);
					setQuery(userQuery);
					const finishFetchingUserProfile = await userQuery;
					if (finishFetchingUserProfile) {
						const fetchProfileData = finishFetchingUserProfile.queryUser[0];
						console.log("user data in dashboard", fetchProfileData);
						// Update appStoreInstance with fetched data
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
			fetchUserProfile();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const conductData = requestOrthopaedicsConductDataFromBigQuery();
				console.log("Conduct data query:", conductData);

				const conductResponse = await appStoreInstance.requestDataFromBigQuery(conductData);
				const responseData = conductResponse.data;
				console.log("Conduct data response:", responseData);
				processConductData(responseData);
			} catch (error) {
				console.error("Error fetching data from BigQuery:", error);
			}
		};

		if (isFocused) {
			fetchData();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchTotalHoursData = async () => {
			try {
				const totalHoursData = requestAggerateTotalHoursOfSurgeryForOrthopaedics();
				console.log("Total hours data query:", totalHoursData);

				const totalHoursDataResponse = await appStoreInstance.requestDataFromBigQuery(totalHoursData);
				const responseData = totalHoursDataResponse.data;
				console.log("Total hours data response:", responseData[0]);
				if (responseData[0].total_duration) {
					setTotalHoursOfSurgeries(responseData[0].total_duration);
				}
			} catch (error) {
				console.error("Error fetching data from BigQuery:", error);
			}
		};

		if (isFocused) {
			fetchTotalHoursData();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchDataForAggereateCaseLogData = async () => {
			try {
				const aggerateCaseLogDataForDaily = requestAggerateCaseLogDataOfDailyForOrthopaedics();
				console.log("Aggerate data query", aggerateCaseLogDataForDaily);
				const aggerateCaseLogDataForDailyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateCaseLogDataForDaily);
				const aggerateCaseLogDataForDailyResponseData = aggerateCaseLogDataForDailyResponse.data;
				console.log("aggerateCaseLogDataForDailyResponseData", aggerateCaseLogDataForDailyResponseData);
				setAggerateDailyCaseLogData(aggerateCaseLogDataForDailyResponseData);
			} catch (error) {
				console.log("error", error);
			}
		};
		const fetchDataForAggereateCaseLogDataWeek = async () => {
			try {
				const aggerateCaseLogDataForWeekly = requestAggerateCaseLogDataOfWeeklyForOrthopaedics();
				console.log("Aggerate data query", aggerateCaseLogDataForWeekly);
				const aggerateCaseLogDataForWeeklyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateCaseLogDataForWeekly);
				const aggerateCaseLogDataForWeeklyResponseData = aggerateCaseLogDataForWeeklyResponse.data;
				console.log("aggerateCaseLogDataForWeeklyResponseData", aggerateCaseLogDataForWeeklyResponseData);
				setAggerateWeeklyCaseLogData(aggerateCaseLogDataForWeeklyResponseData);
			} catch (error) {
				console.log("error", error);
			}
		};
		const fetchDataForAggereateCaseLogDataMonth = async () => {
			try {
				const aggerateCaseLogDataForMonthly = requestAggerateCaseLogDataOfMonthlyForOrthopaedics();
				console.log("Aggerate data query", aggerateCaseLogDataForMonthly);
				const aggerateCaseLogDataForMonthlyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateCaseLogDataForMonthly);
				const aggerateCaseLogDataForMonthlyResponseData = aggerateCaseLogDataForMonthlyResponse.data;
				console.log("aggerateCaseLogDataForMonthlyResponseData", aggerateCaseLogDataForMonthlyResponseData);
				setAggerateMonthlyCaseLogData(aggerateCaseLogDataForMonthlyResponseData);
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

	const casesGraphData = transformBigQueriesDataForGraphs(
		aggerateDailyCaseLogData,
		aggerateWeeklyCaseLogData,
		aggerateMonthlyCaseLogData,
		"Cases Logged"
	);

	console.log("casesGraphData", casesGraphData);

	useEffect(() => {
		const fetchDataForAggerateProcedureLogData = async () => {
			try {
				const aggerateProcedureLogDataForDaily = requestAggerateProcedureLogDataOfDailyForOrthopaedics();
				console.log("Aggerate data query", aggerateProcedureLogDataForDaily);
				const aggerateProcedureLogDataForDailyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateProcedureLogDataForDaily);
				const aggerateProcedureLogDataForDailyResponseData = aggerateProcedureLogDataForDailyResponse.data;
				console.log("aggerateProcedureLogDataForDailyResponseData", aggerateProcedureLogDataForDailyResponseData);
				setAggerateDailyProcedureLogData(aggerateProcedureLogDataForDailyResponseData);
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForAggerateProcedureLogDataWeek = async () => {
			try {
				const aggerateProcedureLogDataForWeekly = requestAggerateProcedureLogDataOfWeeklyForOrthopaedics();
				console.log("Aggerate data query", aggerateProcedureLogDataForWeekly);
				const aggerateProcedureLogDataForWeeklyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateProcedureLogDataForWeekly);
				const aggerateProcedureLogDataForWeeklyResponseData = aggerateProcedureLogDataForWeeklyResponse.data;
				console.log("aggerateProcedureLogDataForWeeklyResponseData", aggerateProcedureLogDataForWeeklyResponseData);
				setAggerateWeeklyProcedureLogData(aggerateProcedureLogDataForWeeklyResponseData);
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForAggerateProcedureLogDataMonth = async () => {
			try {
				const aggerateProcedureLogDataForMonthly = requestAggerateProcedureLogDataOfMonthlyForOrthopaedics();
				console.log("Aggerate data query", aggerateProcedureLogDataForMonthly);
				const aggerateProcedureLogDataForMonthlyResponse = await appStoreInstance.requestDataFromBigQuery(aggerateProcedureLogDataForMonthly);
				const aggerateProcedureLogDataForMonthlyResponseData = aggerateProcedureLogDataForMonthlyResponse.data;
				console.log("aggerateProcedureLogDataForMonthlyResponseData", aggerateProcedureLogDataForMonthlyResponseData);
				setAggerateMonthlyProcedureLogData(aggerateProcedureLogDataForMonthlyResponseData);
			} catch (error) {
				console.log("error", error);
			}
		};

		if (isFocused) {
			fetchDataForAggerateProcedureLogData();
			fetchDataForAggerateProcedureLogDataWeek();
			fetchDataForAggerateProcedureLogDataMonth();
		}
	}, [isFocused]);

	const procedureLogGraphData = transformBigQueriesDataForGraphs(
		aggerateDailyProcedureLogData,
		aggerateWeeklyProcedureLogData,
		aggerateMonthlyProcedureLogData,
		"Procedures (n)"
	);

	useEffect(() => {
		const fetchDataForProcedureDurationDaily = async () => {
			try {
				const procedureDurationDailyQuery = requestAggeratProcedureDurationDataOfDailyForOrthopaedics();
				console.log("Procedure Duration Daily query", procedureDurationDailyQuery);
				const procedureDurationDailyResponse = await appStoreInstance.requestDataFromBigQuery(procedureDurationDailyQuery);
				if (procedureDurationDailyResponse) {
					const procedureDurationDailyResponseData = procedureDurationDailyResponse.data;
					console.log("procedureDurationDailyResponseData", procedureDurationDailyResponseData);
					setProcedureDurationDailyData(procedureDurationDailyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForProcedureDurationWeekly = async () => {
			try {
				const procedureDurationWeeklyQuery = requestAggerateProcedureDurationDataOfWeeklyForOrthopaedics();
				console.log("Procedure Duration Weekly query", procedureDurationWeeklyQuery);
				const procedureDurationWeeklyResponse = await appStoreInstance.requestDataFromBigQuery(procedureDurationWeeklyQuery);
				if (procedureDurationWeeklyResponse) {
					const procedureDurationWeeklyResponseData = procedureDurationWeeklyResponse.data;
					console.log("procedureDurationWeeklyResponseData", procedureDurationWeeklyResponseData);
					setProcedureDurationWeeklyData(procedureDurationWeeklyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		const fetchDataForProcedureDurationMonthly = async () => {
			try {
				const procedureDurationMonthlyQuery = requestAggerateProcedureDurationDataOfMonthlyForOrthopaedics();
				console.log("Procedure Duration Monthly query", procedureDurationMonthlyQuery);
				const procedureDurationMonthlyResponse = await appStoreInstance.requestDataFromBigQuery(procedureDurationMonthlyQuery);
				if (procedureDurationMonthlyResponse) {
					const procedureDurationMonthlyResponseData = procedureDurationMonthlyResponse.data;
					console.log("procedureDurationMonthlyResponseData", procedureDurationMonthlyResponseData);
					setProcedureDurationMonthlyData(procedureDurationMonthlyResponseData);
				}
			} catch (error) {
				console.log("error", error);
			}
		};

		if (isFocused) {
			fetchDataForProcedureDurationDaily();
			fetchDataForProcedureDurationWeekly();
			fetchDataForProcedureDurationMonthly();
		}
	}, [isFocused]);

	const procedureDurationGraphData = transformBigQueriesDataForGraphs(
		procedureDurationDailyData,
		procedureDurationWeeklyData,
		procedureDurationMonthlyData,
		"Durations"
	);

	console.log("procedureLogGraphData", procedureLogGraphData);
	// const casesLoggedData = transformBigQueryDataIntoGraphFormat(aggerateDailyCaseLogData, aggerateMonthlyCaseLogData, aggerateWeeklyCaseLogData);
	// console.log("graph data for orthopasdices", casesLoggedData);

	const requrl = NetworkUtils.getServerURL();
	const url = `${requrl}/download/profilePhoto:${appStoreInstance.ImagePath}`;

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

						<VStack space='xs'>
							<Box pt='$4' px='$4'>
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
									<Box borderColor='#367B71' bg='#E6E3DB' elevation={4} borderWidth={1} p='$4' borderRadius='$lg' mb='$4'>
										<HStack justifyContent='space-around' alignItems='center'>
											<Text style={{ fontSize: 12, fontWeight: "bold" }} color='#000' fontFamily='Inter_Bold'>
												Total hours of surgeries performed:
											</Text>
											<Text color='#367B71' style={{ fontSize: 16, fontWeight: "bold" }}>
												{totalHoursOfSurgeries}
											</Text>
										</HStack>
									</Box>
								</VStack>
							</Box>
							<DynamicBarGraph data={procedureDurationGraphData} />
							<DynamicBarGraph data={procedureLogGraphData} />
							<DynamicBarGraph data={casesGraphData} />
						</VStack>
					</ScrollView>
				</Box>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(OrthopaedicsDashboard);
