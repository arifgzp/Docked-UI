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
import { toJS } from "mobx";
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
		default:
			return [];
	}
};

const CaseLogFormScreen = ({ navigation, route }) => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const { caseLogFormToGet } = route.params;
	const { control, formState, reset, watch, handleSubmit, setValue, getValues } = useForm({
		defaultValues: {
			hospital: null,
			faculty: null,
			date: new Date(),
			remarks: "",
		},
	});
	const toast = useToast();
	const [caseLogPrefilledData, setCaseLogPreFilledData] = useState();
	const caseLogPrefilledRef = useRef();
	const [buttonPressed, setButtonPressed] = useState({ active: false, screenName: "" });
	const buttonPressedRef = useRef();
	const handleSaveClick = async (formData) => {
		setButtonPressed({ active: true, screenName: "RootLogBook" });
		console.log("FormData for Case Logs to be manual saving added", formData);
		console.log("caseLogFromToGet", caseLogFormToGet);
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.date = formatRFC3339(formData.date);
		formData.caseType = caseLogFormToGet;
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
			default:
				throw new Error("Invalid case log type");
		}

		console.log("queryToRun", queryToRun);
		console.log("caseLogToUpdate", caseLogToUpdate);

		try {
			const query = store[queryToRun](AppStore.UserId, { set: { [caseLogToUpdate]: formData } });
			setQuery(query);
			await query;
			//navigation.navigate("RootLogBook");

			// ours
			// navigation.navigate("Logbook", { screen: "RootLogBook" });
			reset();
		} catch (error) {
			console.log(error);
		}
	};

	const handleAutoSave = async (formData) => {
		console.log("FormData for Case Logs to be from auto saving added", formData);
		console.log("caseLogFromToGet", caseLogFormToGet);
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.date = formatRFC3339(formData.date);
		formData.caseType = caseLogFormToGet;
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
			default:
				throw new Error("Invalid case log type");
		}

		console.log("queryToRun", queryToRun);
		console.log("caseLogToUpdate", caseLogToUpdate);

		try {
			const query = store[queryToRun](AppStore.UserId, { set: { [caseLogToUpdate]: formData } });
			setQuery(query);
			await query;
			//navigation.navigate("RootLogBook");
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
			faculty: null,
			date: new Date(),
		});
	}, []);

	useEffect(() => {
		const fetchLogProfilePrefilledData = async () => {
			try {
				const logProfileData = toJS(AppStore.UserLogProfile);
				console.log("logProfileData", logProfileData);
				if (logProfileData) {
					const facultiesList = logProfileData.faculties;
					const rotationsList = logProfileData.rotations;
					const hospitalData = logProfileData.hospitals;
					console.log("facultiesListfromAPPSTORE", facultiesList);
					console.log("rotationsListfromAPPSTORE", rotationsList);
					console.log("hospitalDatafromAPPSTORE", hospitalData);
					console.log("rotations[0].departmentfromAPPSTORE", rotationsList[0]?.department);
					setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
					caseLogPrefilledRef.current = { hospital: hospitalData, faculty: facultiesList, rotations: rotationsList };
					setValue("rotation", rotationsList[0]?.department);
				} else {
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
						setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
						caseLogPrefilledRef.current = { hospital: hospitalData, faculty: facultiesList, rotations: rotationsList };
						setValue("rotation", rotationsList[0]?.department);
					}
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (isFocused) {
			fetchLogProfilePrefilledData();
		}
		return () => {
			setCaseLogPreFilledData(null);
		};
	}, [isFocused]);

	useEffect(() => {
		if (buttonPressed.active === true) {
			console.log("RAAAAANNNN FIRSSSSSTTTTT");
			console.log("buttonPressed.active ran first", buttonPressed.active);
			if (buttonPressed.screenName === "RootLogBook") {
				navigation.navigate("Logbook", { screen: "RootLogBook" });
				buttonPressedRef.current = buttonPressed;
			}
			if (buttonPressed.screenName === "LogProfilePage") {
				navigation.navigate("Logbook", { screen: "LogProfilePage", params: { caseLogFormToGet: caseLogFormToGet } });
				buttonPressedRef.current = buttonPressed;
			}
		}
	}, [buttonPressed]);

	useFocusEffect(
		useCallback(() => {
			// Code to run when the screen is focused
			console.log("Screen is focused in case log form screen");

			return () => {
				console.log("RAAAAANNNN SECONDDDDDDDD", buttonPressedRef.current);
				console.log("buttonPressedToNavigateToLogProfile should be false", appStoreInstance.ButtonPressed);
				if (buttonPressedRef.current.active === false && (appStoreInstance.ButtonPressed === false || appStoreInstance.ButtonPressed === null)) {
					console.log("buttonPressed", buttonPressedRef.current.active);
					console.log("caseLogPrefilledData === undefined inside the loss of focus", caseLogPrefilledRef);
					if (!caseLogPrefilledRef.current) {
						return;
					} else {
						handleSubmit((data) => handleAutoSave(data))();
					}
				} else {
					console.log("caseLogFormToGet when out form changes", caseLogFormToGet);
				}
				buttonPressedRef.current = { active: false, screenName: "" };
				// Code to run when the screen is unfocused
			};
		}, [caseLogFormToGet])
	);

	console.log("!!!!!!!!!!!!!!! Route Change DETECTED Rendering with caseLogFormToGet", caseLogFormToGet);
	console.log("caseLogPrefilledData for test", caseLogPrefilledData);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} w='$100%' backgroundColor='$secondaryBackground'>
					{caseLogPrefilledData ? (
						<>
							<ScrollView>
								<Box paddingTop={10} justifyContent='center' alignItems='center' gap='$6'>
									<Box width={"$100%"}>
										<CaselogDropDownOptions
											formFields={getCaseLogFields(caseLogFormToGet)}
											prefilledData={caseLogPrefilledData}
											control={control}
											setValue={setValue}
											formState={formState}
											watch={watch}
											readOnlyFaculty={false}
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
											specialCaseLogsOption={getSpecialCaseLogOptions(caseLogFormToGet)}
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
