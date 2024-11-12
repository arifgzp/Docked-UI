import {
	Box,
	Button,
	ButtonText,
	Divider,
	HStack,
	KeyboardAvoidingView,
	ScrollView,
	Text,
	VStack,
	Toast,
	useToast,
	ToastTitle,
	ToastDescription,
	TextareaInput,
} from "@gluestack-ui/themed";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import { formatRFC3339 } from "date-fns";
import { set, toJS } from "mobx";
import { observer } from "mobx-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { Platform } from "react-native";
import Loader from "../../../../components/Loader";
import { useQuery } from "../../../../models";
import AppStore from "../../../../stores/AppStore";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";
import useIsReady from "../../../../hooks/useIsReady";
import {
	caseLogConfigTextAndSingleSelectOptions,
	specialAnesthesiaCaseLogsOption,
} from "../../../../data/entity/AnesthesiaCaseLogConfigs/CaseLogFormConfig";
import {
	ChornicPainCaseLogConfigTextAndSingleSelectOptions,
	specialAnesthesiaChronicPainOptions,
} from "../../../../data/entity/AnesthesiaCaseLogConfigs/ChronicPainLogConfig";
import {
	CriticalCareCaseLogConfigTextAndSingleSelectOptions,
	specialAnesthesiaCriticalCareCaseLogOptions,
} from "../../../../data/entity/AnesthesiaCaseLogConfigs/CriticalCareCaseLogConfig";
import {
	OrthopaedicsCaseLogConfigTextAndSingleSelectOptions,
	specialOrthopaedicsCaseLogsOption,
} from "../../../../data/entity/OrthopaedicsCaseLogConfigs/OrthopaedicsCaseLogConfig";
import {
	OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions,
	specialOrthodonticsClinicalCaseLog,
} from "../../../../data/entity/OrthodonticCaseLogConfigs/OrthodonticsClinicalCaseLogConfig";
import IsReadyLoader from "../../../../components/IsReadyLoader";
import { Textarea } from "@gluestack-ui/themed";
import { Controller } from "react-hook-form";
import {
	OrthopaedicsProcedureLogConfigTextAndSingleSelectOptions,
	specialOrthopaedicsProcedureLogOption,
} from "../../../../data/entity/OrthopaedicsCaseLogConfigs/OrthopeadicProcedureLogConfig";
import {
	OrthodonticsPreClinicalTextAndSingleSelectOptions,
	specialOrthodonticsPreClinical,
} from "../../../../data/entity/OrthodonticCaseLogConfigs/OrthodonticsPreClinicalConfig";
import appStoreInstance from "../../../../stores/AppStore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Keyboard } from "react-native";
import {
	OralMedicineAndRadiologyConfigTextAndSingleSelectOption,
	OralMedicineAndRadiologySpecialOptions,
} from "../../../../data/entity/OralMedicineAndRadiology/OralMedicineAndRadiologyConfig";
import {
	OralRadiologyConfigTextAndSingleSelectOption,
	OralRadiologySpecialOptions,
} from "../../../../data/entity/OralMedicineAndRadiology/OralRadiologyConfig";
import {
	sendCaseLogDataToBigQueryForAdminAnalytics,
	sendFeatureUsageDataToBigQueryForAdminAnalytics,
} from "../../../../components/BigQueryFunctions/AdminDashboardAnalyticalQueries";
import { sendCaseLogDataToBigQueryForUserDashboard } from "../../../../components/BigQueryFunctions/UserDashboardAnalyticalQueries";
import { CommonActions } from "@react-navigation/native";

const getCaseLogFields = (key) => {
	switch (key) {
		case "CaseLog":
			return caseLogConfigTextAndSingleSelectOptions;
		case "ChronicPain":
			return ChornicPainCaseLogConfigTextAndSingleSelectOptions;
		case "CriticalCareCaseLog":
			return CriticalCareCaseLogConfigTextAndSingleSelectOptions;
		case "OrthopaedicsCaseLog":
			return OrthopaedicsCaseLogConfigTextAndSingleSelectOptions;
		case "OrthopaedicsProcedureLog":
			return OrthopaedicsProcedureLogConfigTextAndSingleSelectOptions;
		case "OrthodonticsClinicalCaseLog":
			return OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions;
		case "OrthodonticsPreClinical":
			return OrthodonticsPreClinicalTextAndSingleSelectOptions;
		case "OralMedicineCaseLog":
			return OralMedicineAndRadiologyConfigTextAndSingleSelectOption;
		case "OralRadiology":
			return OralRadiologyConfigTextAndSingleSelectOption;
		default:
			return [];
	}
};

const getSpecialCaseLogOptions = (key) => {
	switch (key) {
		case "CaseLog":
			return specialAnesthesiaCaseLogsOption;
		case "ChronicPain":
			return specialAnesthesiaChronicPainOptions;
		case "CriticalCareCaseLog":
			return specialAnesthesiaCriticalCareCaseLogOptions;
		case "OrthopaedicsCaseLog":
			return specialOrthopaedicsCaseLogsOption;
		case "OrthopaedicsProcedureLog":
			return specialOrthopaedicsProcedureLogOption;
		case "OrthodonticsClinicalCaseLog":
			return specialOrthodonticsClinicalCaseLog;
		case "OrthodonticsPreClinical":
			return specialOrthodonticsPreClinical;
		case "OralMedicineCaseLog":
			return OralMedicineAndRadiologySpecialOptions;
		case "OralRadiology":
			return OralRadiologySpecialOptions;
		default:
			return [];
	}
};

const CaseLogFormScreen = ({ navigation, route }) => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const startTime = new Date().toISOString();

	const { caseLogFormToGet } = route.params;
	const { control, formState, reset, watch, handleSubmit, setValue, getValues } = useForm({
		defaultValues: {
			hospital: null,
			faculty: null,
			date: new Date(),
			remarks: "",
		},
	});
	const [openSelectField, setOpenSelectField] = useState(null);
	const [key, setKey] = useState(0);
	const { isDirty } = formState;
	const toast = useToast();
	const caseLogPrefilledRef = useRef();
	const [buttonPressed, setButtonPressed] = useState({ active: false, screenName: "" });
	const buttonPressedRef = useRef();
	const allFields = ["hospital", "date", "approver", ...getCaseLogFields(caseLogFormToGet).map((field) => field.uid), "outcomeOther"];

	const scrollViewRef = useRef(null);
	const inputRefs = useRef({});

	const scrollToInput = (inputName) => {
		if (inputRefs.current[inputName]) {
			inputRefs.current[inputName].measureLayout(scrollViewRef.current, (x, y) => {
				scrollViewRef.current.scrollTo({ y: y - 150, animated: true });
			});
		}
	};

	const handleNext = (currentFieldName) => {
		const currentIndex = allFields.findIndex((field) => field === currentFieldName);
		if (currentIndex < allFields.length - 1) {
			const nextField = allFields[currentIndex + 1];

			if (currentFieldName === "outcome" && watch("outcome") === "Others") {
				// Delay focus to allow rendering of 'outcomeOther' field
				setTimeout(() => {
					scrollToInput("outcomeOther");
					focusOnField("outcomeOther");
				}, 100);
			} else if (currentFieldName === "outcomeOther") {
				const fieldAfterOutcome = allFields[allFields.indexOf("outcome") + 1];
				scrollToInput(fieldAfterOutcome);
				focusOnField(fieldAfterOutcome);
			} else {
				scrollToInput(nextField);
				focusOnField(nextField);
			}
		} else {
			setOpenSelectField(null);
			Keyboard.dismiss();
		}
	};

	const focusOnField = (fieldName) => {
		if (
			[
				"hospital",
				"approver",
				...getCaseLogFields(caseLogFormToGet)
					.filter((f) => f.type === "select-single")
					.map((f) => f.uid),
			].includes(fieldName)
		) {
			setOpenSelectField(fieldName);
		} else if (fieldName === "date") {
			// Do nothing for date, as it's handled separately
		} else if (inputRefs.current[fieldName]) {
			inputRefs.current[fieldName].focus();
		}
	};

	const handleSaveClick = async (formData) => {
		setButtonPressed({ active: true, screenName: "RootLogBook" });
		let data = {};

		buttonPressedRef.current = { active: true, screenName: "RootLogBook" };
		console.log("FormData for Case Logs to be manual saving added", formData);
		console.log("caseLogFromToGet", caseLogFormToGet);
		data.complete = true;
		data.createdOn = data.updatedOn = formatRFC3339(new Date());
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.date = formatRFC3339(formData.date);
		data.logType = caseLogFormToGet;
		data.caseLogStatus = "CREATED";

		if (formData.approver?.id) {
			data.approver = { id: formData.approver.id };
		}

		if (formData.rotation) {
			data.rotation = formData.rotation;
		}

		if (formData.hospital) {
			data.hospital = formData.hospital;
		}

		delete formData.approver;
		delete formData.rotation;
		delete formData.hospital;

		data.createdBy = { id: AppStore.UserId };

		console.log("whole case log then type", data, formData);

		let queryToRun;
		let caseLogToUpdate;

		switch (caseLogFormToGet) {
			case "CaseLog":
				queryToRun = "updateUserAnaesthesiaCaseLog";
				caseLogToUpdate = "anaesthesiaCaseLog";
				break;
			case "ChronicPain":
				queryToRun = "updateUserAnaesthesiaChronicPainLog";
				caseLogToUpdate = "anaesthesiaChronicPainLog";
				break;
			case "CriticalCareCaseLog":
				queryToRun = "updateUserAnaesthesiaCritcalCareCaseLog";
				caseLogToUpdate = "anaesthesiaCriticalCareCaseLog";
				break;
			case "OrthopaedicsCaseLog":
				queryToRun = "updateUserOrthopaedicsCaseLog";
				caseLogToUpdate = "orthopaedicsCaseLog";
				break;
			case "OrthopaedicsProcedureLog":
				queryToRun = "updateUserOrthopaedicsProcedureLog";
				caseLogToUpdate = "orthopaedicsProcedureLog";
				break;
			case "OrthodonticsClinicalCaseLog":
				queryToRun = "updateUserOrthodonticsClinicalCaseLog";
				caseLogToUpdate = "orthodonticsClinicalCaseLog";
				break;
			case "OrthodonticsPreClinical":
				queryToRun = "updateUserOrthodonticsPreClinical";
				caseLogToUpdate = "orthodonticsPreClinical";
				break;
			case "OralMedicineCaseLog":
				queryToRun = "updateUserOralMedicineCaseLog";
				caseLogToUpdate = "oralMedicineCaseLog";
				break;
			case "OralRadiology":
				queryToRun = "updateUserOralRadiology";
				caseLogToUpdate = "oralRadiology";
				break;
			default:
				throw new Error("Invalid case log type");
		}

		data[caseLogToUpdate] = formData;

		console.log("what is data? data.caseLogToUpdatedata.caseLogToUpdate", data);

		console.log("queryToRun", queryToRun);
		console.log("caseLogToUpdate", caseLogToUpdate);

		try {
			const query = store[queryToRun](AppStore.UserId, { set: { caseLogs: data } });
			setQuery(query);
			const queryData = await query;
			if (queryData) {
				console.log("data after making a case log", queryData);
				let dataOfLog;
				switch (caseLogFormToGet) {
					case "CaseLog":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].anaesthesiaCaseLog;
						break;
					case "ChronicPain":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].anaesthesiaChronicPainLog;
						break;
					case "CriticalCareCaseLog":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].anaesthesiaCriticalCareCaseLog;
						break;
					case "OrthopaedicsCaseLog":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].orthopaedicsCaseLog;
						break;
					case "OrthopaedicsProcedureLog":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].orthopaedicsProcedureLog;
						break;
					default:
						break;
				}
				console.log("what is the dataogLog", dataOfLog);

				let caseLogDataForPushNotification = {
					userId: appStoreInstance.UserId,
					userName: appStoreInstance.UserName,
					event: "CASE_LOG_CREATE",
					name: appStoreInstance.Name,
					token: appStoreInstance.NotificationToken,
				};

				appStoreInstance.createLastCaseLogCreatedSchedule(caseLogDataForPushNotification);

				const analyticsDataForAdminDashboard = sendCaseLogDataToBigQueryForAdminAnalytics(dataOfLog, startTime, new Date().toISOString());
				console.log("analyticsDataForAdminDashboard", analyticsDataForAdminDashboard);
				appStoreInstance.sendDataToBigQuery(analyticsDataForAdminDashboard);

				const analyticsDataForUserDashobard = sendCaseLogDataToBigQueryForUserDashboard(caseLogFormToGet, dataOfLog);
				console.log("analyticsDataForUserDashobard", analyticsDataForUserDashobard);
				appStoreInstance.sendDataToBigQuery(analyticsDataForUserDashobard);

				const appFeatureUsageForAdminDashboard = sendFeatureUsageDataToBigQueryForAdminAnalytics("Case Log", startTime, new Date().toISOString());
				console.log("appFeatureUsageForAdminDashboard", appFeatureUsageForAdminDashboard);
				appStoreInstance.sendDataToBigQuery(appFeatureUsageForAdminDashboard);

				const updateUserQuery = store.updateUser(AppStore.UserId, {
					set: { numberOfCaseLogsCreated: appStoreInstance.CaseLogNumbers + 1, lastDateOfCaseLogCreation: formatRFC3339(new Date()) },
				});
				setQuery(updateUserQuery);
				const updateUser = await updateUserQuery;
				if (updateUser) {
					appStoreInstance.setCaseLogNumbers(appStoreInstance.CaseLogNumbers + 1);
					appStoreInstance.setLastCaseLogged(formatRFC3339(new Date()));
				}
			}
			reset();
		} catch (error) {
			console.log(error);
		}
	};

	const handleAutoSave = async (formData) => {
		let data = {};
		console.log("FormData for Case Logs to be manual saving added", formData);
		console.log("caseLogFromToGet", caseLogFormToGet);
		data.complete = true;
		data.createdOn = data.updatedOn = formatRFC3339(new Date());
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.date = formatRFC3339(formData.date);
		data.logType = caseLogFormToGet;
		data.caseLogStatus = "CREATED";

		if (formData.approver?.id) {
			data.approver = { id: formData.approver.id };
		}

		if (formData.rotation) {
			data.rotation = formData.rotation;
		}

		if (formData.hospital) {
			data.hospital = formData.hospital;
		}

		delete formData.approver;
		delete formData.rotation;
		delete formData.hospital;

		data.createdBy = { id: AppStore.UserId };

		console.log("whole case log then type", data, formData);

		let queryToRun;
		let caseLogToUpdate;

		switch (caseLogFormToGet) {
			case "CaseLog":
				queryToRun = "updateUserAnaesthesiaCaseLog";
				caseLogToUpdate = "anaesthesiaCaseLog";
				break;
			case "ChronicPain":
				queryToRun = "updateUserAnaesthesiaChronicPainLog";
				caseLogToUpdate = "anaesthesiaChronicPainLog";
				break;
			case "CriticalCareCaseLog":
				queryToRun = "updateUserAnaesthesiaCritcalCareCaseLog";
				caseLogToUpdate = "anaesthesiaCriticalCareCaseLog";
				break;
			case "OrthopaedicsCaseLog":
				queryToRun = "updateUserOrthopaedicsCaseLog";
				caseLogToUpdate = "orthopaedicsCaseLog";
				break;
			case "OrthopaedicsProcedureLog":
				queryToRun = "updateUserOrthopaedicsProcedureLog";
				caseLogToUpdate = "orthopaedicsProcedureLog";
				break;
			case "OrthodonticsClinicalCaseLog":
				queryToRun = "updateUserOrthodonticsClinicalCaseLog";
				caseLogToUpdate = "orthodonticsClinicalCaseLog";
				break;
			case "OrthodonticsPreClinical":
				queryToRun = "updateUserOrthodonticsPreClinical";
				caseLogToUpdate = "orthodonticsPreClinical";
				break;
			case "OralMedicineCaseLog":
				queryToRun = "updateUserOralMedicineCaseLog";
				caseLogToUpdate = "oralMedicineCaseLog";
				break;
			case "OralRadiology":
				queryToRun = "updateUserOralRadiology";
				caseLogToUpdate = "oralRadiology";
				break;
			default:
				throw new Error("Invalid case log type");
		}

		data[caseLogToUpdate] = formData;

		console.log("queryToRun", queryToRun);
		console.log("caseLogToUpdate", caseLogToUpdate);

		console.log("what is data? data.caseLogToUpdatedata.caseLogToUpdate", data);

		try {
			const query = store[queryToRun](AppStore.UserId, { set: { caseLogs: data } });
			setQuery(query);
			const queryData = await query;
			if (queryData) {
				console.log("data after making a case log", queryData);
				let dataOfLog;
				switch (caseLogFormToGet) {
					case "CaseLog":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].anaesthesiaCaseLog;
						break;
					case "ChronicPain":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].anaesthesiaChronicPainLog;
						break;
					case "CriticalCareCaseLog":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].anaesthesiaCriticalCareCaseLog;
						break;
					case "OrthopaedicsCaseLog":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].orthopaedicsCaseLog;
						break;
					case "OrthopaedicsProcedureLog":
						dataOfLog = queryData.updateUser.user[0].caseLogs[queryData.updateUser.user[0].caseLogs.length - 1].orthopaedicsProcedureLog;
						break;
					default:
						break;
				}
				console.log("what is the dataogLog", dataOfLog);

				let caseLogDataForPushNotification = {
					userId: appStoreInstance.UserId,
					userName: appStoreInstance.UserName,
					event: "CASE_LOG_CREATE",
					name: appStoreInstance.Name,
					token: appStoreInstance.NotificationToken,
				};

				appStoreInstance.createLastCaseLogCreatedSchedule(caseLogDataForPushNotification);

				const analyticsDataForAdminDashboard = sendCaseLogDataToBigQueryForAdminAnalytics(dataOfLog, startTime, new Date().toISOString());
				console.log("analyticsDataForAdminDashboard", analyticsDataForAdminDashboard);
				appStoreInstance.sendDataToBigQuery(analyticsDataForAdminDashboard);

				const analyticsDataForUserDashobard = sendCaseLogDataToBigQueryForUserDashboard(caseLogFormToGet, dataOfLog);
				console.log("analyticsDataForUserDashobard", analyticsDataForUserDashobard);
				appStoreInstance.sendDataToBigQuery(analyticsDataForUserDashobard);

				const appFeatureUsageForAdminDashboard = sendFeatureUsageDataToBigQueryForAdminAnalytics("Case Log", startTime, new Date().toISOString());
				console.log("appFeatureUsageForAdminDashboard", appFeatureUsageForAdminDashboard);
				appStoreInstance.sendDataToBigQuery(appFeatureUsageForAdminDashboard);

				const updateUserQuery = store.updateUser(AppStore.UserId, {
					set: { targetedCaseLogNumber: appStoreInstance.CaseLogNumbers + 1, dateOfBirth: formatRFC3339(new Date()) },
				});
				setQuery(updateUserQuery);
				const updateUser = await updateUserQuery;
				if (updateUser) {
					appStoreInstance.setCaseLogNumbers(appStoreInstance.CaseLogNumbers + 1);
					appStoreInstance.setLastCaseLogged(formatRFC3339(new Date()));
				}
			}
			reset();
		} catch (error) {
			console.log(error);
		}
	};

	const handleNavigateToLogProfile = () => {
		setButtonPressed({ active: true, screenName: "LogProfilePage" });
	};

	useEffect(() => {
		buttonPressedRef.current = { active: false, screenName: "" };
		reset({
			approver: null,
			date: new Date(),
		});
	}, []);

	useEffect(() => {
		const fetchLogProfilePrefilledData = async () => {
			try {
				const query = store.fetchUserLogProfile(AppStore.UserName);
				setQuery(query);
				const finishFetchingLogProfile = await query;
				console.log("finishFetchingLogProfile", finishFetchingLogProfile);
				if (finishFetchingLogProfile) {
					console.log("finishFetchingLogProfile.data.queryUser[0]", finishFetchingLogProfile.queryUser[0]);
					const userDataForLogProfile = finishFetchingLogProfile.queryUser[0].logProfile;
					AppStore.setLogProfile(userDataForLogProfile);
					const userData = toJS(finishFetchingLogProfile.queryUser[0]);
					const facultiesList = userData.logProfile.faculties;
					const rotationsList = userData.logProfile.rotations;
					const hospitalData = userData.logProfile.hospitals;
					console.log("facultiesList", facultiesList);
					console.log("rotationsList", rotationsList);
					console.log("hospitalData", hospitalData);
					console.log("rotations[0].department", rotationsList[0]?.department);
					caseLogPrefilledRef.current = { hospital: hospitalData, faculty: facultiesList, rotations: rotationsList };
					setValue("rotation", rotationsList[0]?.department);
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (isFocused) {
			fetchLogProfilePrefilledData();
		}
	}, [isFocused]);

	useEffect(() => {
		if (buttonPressed.active === true) {
			console.log("RAAAAANNNN FIRSSSSSTTTTT");
			console.log("buttonPressed.active ran first", buttonPressed.active);
			if (buttonPressed.screenName === "RootLogBook") {
				navigation.navigate("Logbook", { screen: "RootLogBook", params: { initialTabIndex: 0 } });
				buttonPressedRef.current = buttonPressed;
			}
			if (buttonPressed.screenName === "LogProfilePage") {
				navigation.navigate("LogProfileEditForFormStack", { caseLogFormToGet: caseLogFormToGet });
			}
		}

		return () => {
			console.log("when is this occuring");
			console.log("buttonPressed.screenName is wahat", buttonPressedRef.current);
			if (buttonPressedRef.current.active == true && buttonPressedRef.current.screenName == "RootLogBook") {
				console.log("is this pressed or not?");
				navigation.dispatch((state) => {
					// Remove the current screen from the stack
					const routes = state.routes.filter((r) => r.key !== route.key);

					return CommonActions.reset({
						...state,
						routes,
						index: routes.length - 1,
					});
				});
			}
		};
	}, [buttonPressed, navigation, route.key, caseLogFormToGet]);
	useEffect(() => {
		console.log("THIS SHOULD WORK BROOOOO!!!!", key);
		reset();
		setKey((prev) => prev + 1);
	}, [caseLogFormToGet]);

	useFocusEffect(
		useCallback(() => {
			// Code to run when the screen is focused
			console.log("Screen is focused in case log form screen");
			reset();

			console.log("isDirty", isDirty);
			return () => {
				console.log("RAAAAANNNN SECONDDDDDDDD", buttonPressedRef.current);
				console.log("buttonPressedToNavigateToLogProfile should be false", appStoreInstance.ButtonPressed);
				if (buttonPressedRef.current.active === false && (appStoreInstance.ButtonPressed === false || appStoreInstance.ButtonPressed === null)) {
					console.log("buttonPressed", buttonPressedRef.current.active);
					console.log("caseLogPrefilledData === undefined inside the loss of focus", caseLogPrefilledRef);
					if (!caseLogPrefilledRef.current) {
						return;
					} else {
						console.log("appStoreInstance.IsformDirty", appStoreInstance.IsformDirty);
						if (appStoreInstance.IsformDirty === false) {
							console.log("No changes detected, save operation aborted.");
							return;
						} else if (appStoreInstance.IsformDirty === true) {
							handleSubmit((data) => handleAutoSave(data))();
							appStoreInstance.setIsFormDirty(false);
						}
					}
				} else {
					console.log("caseLogFormToGet when out form changes", caseLogFormToGet);
				}
				buttonPressedRef.current = { active: false, screenName: "" };
				// Code to run when the screen is unfocused
			};
		}, [caseLogFormToGet])
	);

	useEffect(() => {
		console.log("isDirty side effect", isDirty);
		appStoreInstance.setIsFormDirty(isDirty);
	}, [isDirty]);

	console.log("!!!!!!!!!!!!!!! Route Change DETECTED Rendering with caseLogFormToGet", caseLogFormToGet);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	let logprofileData = {};

	console.log("what is log profile", store.LogProfileList);
	logprofileData.faculty = store.LogProfileList[store.LogProfileList.length - 1]?.faculties || null;
	logprofileData.hospital = store.LogProfileList[store.LogProfileList.length - 1]?.hospitals || null;
	logprofileData.rotation = store.LogProfileList[store.LogProfileList.length - 1]?.rotations || null;

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} w='$100%' backgroundColor='$secondaryBackground'>
					{store.LogProfileList.length > 0 ? (
						<>
							<ScrollView ref={scrollViewRef} keyboardShouldPersistTaps='handled'>
								<Box paddingTop={10} justifyContent='center' alignItems='center' gap='$6'>
									<Box width={"$100%"}>
										<CaselogDropDownOptions
											formFields={getCaseLogFields(caseLogFormToGet)}
											prefilledData={logprofileData}
											control={control}
											setValue={setValue}
											formState={formState}
											watch={watch}
											readOnlyFaculty={false}
											inputRefs={inputRefs}
											scrollToInput={scrollToInput}
											handleNext={handleNext}
											openSelectField={openSelectField}
											setOpenSelectField={setOpenSelectField}
											focusOnField={focusOnField}
											allFields={allFields}
										/>
									</Box>
									<Divider />
									<Box width={"$100%"}>
										<SpecialCaseLogSelectOptions
											control={control}
											setValue={setValue}
											getValues={getValues}
											formState={formState}
											caseLogData={{}}
											specialOptions={getSpecialCaseLogOptions(caseLogFormToGet)}
											refernceToGetSpecialOptions={caseLogFormToGet}
										/>
									</Box>
									<Divider />
									<VStack width={"$100%"} px='$5' space='sm' pb='$3'>
										<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
											Remarks
										</Text>
										<Box w='$100%'>
											<Controller
												control={control}
												key='remarks'
												name='remarks'
												rules={{
													required: false,
												}}
												render={({ field: { onChange, onBlur, value } }) => {
													return (
														<Textarea w='$100%' size='sm' isReadOnly={false} isInvalid={false} isDisabled={false}>
															<TextareaInput w='$100%' placeholder='Your remarks goes here...' onChangeText={onChange} value={value} />
														</Textarea>
													);
												}}
											/>
										</Box>
									</VStack>
								</Box>
							</ScrollView>
							<Box p={20} pb={"$10%"} paddingTop={5} width={"$100%"}>
								<Button onPress={handleSubmit(handleSaveClick)} variant='primary'>
									<ButtonText>Save</ButtonText>
								</Button>
							</Box>
						</>
					) : (
						<Box p='$10' flex={1 / 1} height={"$100%"} justifyContent='center' alignItems='center'>
							<VStack width={"$100%"} space='lg'>
								<Text textAlign='center' bold>
									Please create your log profile before filing a case
								</Text>

								<Box>
									<Button onPress={handleNavigateToLogProfile} variant='primary'>
										<ButtonText>Create Log Profile</ButtonText>
									</Button>
								</Box>
							</VStack>
						</Box>
					)}
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(CaseLogFormScreen);
