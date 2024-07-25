import { Box, HStack, VStack, Button, ButtonText, KeyboardAvoidingView, Divider } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState, useCallback, useRef } from "react";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";
import { useQuery } from "../../../../models";
import { formatRFC3339 } from "date-fns";
import { useRoute } from "@react-navigation/native";
import Loader from "../../../../components/Loader";
import { Text } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";

import useIsReady from "../../../../hooks/useIsReady";
import { toJS } from "mobx";
import IsReadyLoader from "../../../../components/IsReadyLoader";
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
import { Textarea } from "@gluestack-ui/themed";
import { TextareaInput } from "@gluestack-ui/themed";
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

const CaseLogEditScreen = ({ navigation }) => {
	const isReady = useIsReady();
	const routes = useRoute();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [caseLogPrefilledData, setCaseLogPreFilledData] = useState();
	const [caseLogData, setCaseLogData] = useState({});
	const [buttonPressed, setButtonPressed] = useState(false);
	const buttonPressedRef = useRef();
	const { control, formState, reset, watch, handleSubmit, setValue, getValues } = useForm({
		defaultValues: {
			hospital: "",
			faculty: "",
			date: new Date(),
			remarks: "",
		},
	});
	const { isDirty } = formState;

	function findMissingValues(dbData, uiData) {
		let missingValues = {};

		// Iterate over each key in dbData
		Object.keys(dbData).forEach((key) => {
			const dbValue = dbData[key];
			const uiValue = uiData[key];

			// Check if the value is an array of strings
			if (Array.isArray(dbValue) && dbValue.every((item) => typeof item === "string")) {
				// Find missing values that are in dbData but not in uiData
				const missing = dbValue.filter((item) => !uiValue.includes(item));

				// If there are missing values, add them to the result
				if (missing.length > 0) {
					missingValues[key] = missing;
				}
			}
		});

		return missingValues;
	}

	const handleOnUpdateClick = async (formData) => {
		if (!isDirty) {
			console.log("No changes detected, save operation aborted.");
			navigation.goBack();
		}
		setButtonPressed(true);
		console.log("this is the update query", formData);
		delete formData.id;
		delete formData.__typename;
		formData.updatedOn = formatRFC3339(new Date());
		formData.faculty = caseLogData.faculty;

		let queryToRun;

		switch (routes.params.caseType) {
			case "CaseLog":
				queryToRun = "updateAnaesthesiaCaseLog";
				break;
			case "ChronicPain":
				queryToRun = "updateAnaesthesiaChronicPainLog";
				break;
			case "CriticalCareCaseLog":
				queryToRun = "updateAnaesthesiaCriticalCareCaseLog";
				break;
			case "OrthopaedicsCaseLog":
				queryToRun = "updateOrthopaedicsCaseLog";
				break;
			case "OrthopaedicsProcedureLog":
				queryToRun = "updateOrthopaedicsProcedureLog";
				break;
			case "OrthodonticsClinicalCaseLog":
				queryToRun = "updateOrthodonticsClinicalCaseLog";
				break;
			case "OrthodonticsPreClinical":
				queryToRun = "updateOrthodonticsPreClinical";
				break;
			default:
				throw new Error("Invalid case log type");
		}
		console.log("form Data For Update", formData);
		const dataToBeDeleted = findMissingValues(caseLogData, formData);
		console.log("dataToBeDeleted", dataToBeDeleted);
		try {
			const query = store[queryToRun](routes.params.id, { set: formData, remove: dataToBeDeleted });
			setQuery(query);
			const data = await query;
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnAutoUpdateClick = async (formData) => {
		console.log("this is the update query", formData);
		delete formData.id;
		delete formData.__typename;
		formData.updatedOn = formatRFC3339(new Date());
		formData.faculty = caseLogData.faculty;

		let queryToRun;

		switch (routes.params.caseType) {
			case "CaseLog":
				queryToRun = "updateAnaesthesiaCaseLog";
				break;
			case "ChronicPain":
				queryToRun = "updateAnaesthesiaChronicPainLog";
				break;
			case "CriticalCareCaseLog":
				queryToRun = "updateAnaesthesiaCriticalCareCaseLog";
				break;
			case "OrthopaedicsCaseLog":
				queryToRun = "updateOrthopaedicsCaseLog";
				break;
			case "OrthopaedicsProcedureLog":
				queryToRun = "updateOrthopaedicsProcedureLog";
				break;
			case "OrthodonticsClinicalCaseLog":
				queryToRun = "updateOrthodonticsClinicalCaseLog";
				break;
			case "OrthodonticsPreClinical":
				queryToRun = "updateOrthodonticsPreClinical";
				break;
			default:
				throw new Error("Invalid case log type");
		}
		console.log("form Data For Update", formData);
		const dataToBeDeleted = findMissingValues(caseLogData, formData);
		console.log("dataToBeDeleted", dataToBeDeleted);
		try {
			const query = store[queryToRun](routes.params.id, { set: formData, remove: dataToBeDeleted });
			setQuery(query);
			const data = await query;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (buttonPressed === true) {
			navigation.goBack();
			buttonPressedRef.current = buttonPressed;
		}
	}, [buttonPressed]);

	useEffect(() => {
		const fetchData = () => {
			console.log(store.getAnaesthesiaCaseLogById(routes.params.id));
			let caseLogData = {};

			switch (routes.params.caseType) {
				case "CaseLog":
					caseLogData = store.getAnaesthesiaCaseLogById(routes.params.id)[0];
					break;

				case "ChronicPain":
					caseLogData = store.getAnaesthesiaChronicPainLogById(routes.params.id)[0];
					break;

				case "CriticalCareCaseLog":
					caseLogData = store.getAnaesthesiaCriticalCareCaseLogById(routes.params.id)[0];
					break;

				case "OrthopaedicsCaseLog":
					caseLogData = store.getOrthopaedicsCaseLogById(routes.params.id)[0];
					break;

				case "OrthopaedicsProcedureLog":
					caseLogData = store.getOrthopaedicsProcedureLogById(routes.params.id)[0];
					break;

				case "OrthodonticsClinicalCaseLog":
					caseLogData = store.getOrthodonticsClinicalCaseLogById(routes.params.id)[0];
					break;

				case "OrthodonticsPreClinical":
					caseLogData = store.getOrthodonticsPreClinicalById(routes.params.id)[0];
					break;
			}
			reset({ ...caseLogData });
			setCaseLogData(caseLogData);
		};

		fetchData();
	}, [routes.params.caseType]);

	useEffect(() => {
		const fetchLogProfilePrefilledData = async () => {
			try {
				const caseLogData = caseLogData;
				console.log("caseLogData", caseLogData);
				const logProfileData = toJS(appStoreInstance.UserLogProfile);
				console.log("logProfileData", logProfileData);
				if (logProfileData) {
					const facultiesList = logProfileData.faculties;
					const rotationsList = logProfileData.rotations;
					const hospitalData = logProfileData.hospitals;
					console.log("facultiesListfromappStoreInstance", facultiesList);
					console.log("rotationsListfromappStoreInstance", rotationsList);
					console.log("hospitalDatafromappStoreInstance", hospitalData);
					console.log("rotations[0].departmentfromappStoreInstance", rotationsList[0].department);
					setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
					setValue("faculty", facultiesList);
					setValue("rotation", rotationsList[0].department);
				} else {
					const query = store.fetchUserLogProfile(appStoreInstance.UserName);
					setQuery(query);
					const finishFetchingLogProfile = await query;
					console.log("finishFetchingLogProfile", finishFetchingLogProfile);
					if (finishFetchingLogProfile) {
						console.log("finishFetchingLogProfile.data.queryUser[0]", finishFetchingLogProfile.queryUser[0]);
						const userDataForLogProfile = finishFetchingLogProfile.queryUser[0].logProfile;
						appStoreInstance.setLogProfile(userDataForLogProfile);
						const userData = toJS(finishFetchingLogProfile.queryUser[0]);
						const facultiesList = userData.logProfile.faculties;
						const rotationsList = userData.logProfile.rotations;
						const hospitalData = userData.logProfile.hospitals;
						console.log("facultiesList", facultiesList);
						console.log("rotationsList", rotationsList);
						console.log("hospitalData", hospitalData);
						console.log("rotations[0].department", rotationsList[0].department);
						setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
						setValue("rotation", rotationsList[0].department);
					}
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (isFocused) {
			fetchLogProfilePrefilledData();
		}
	}, [isFocused]);

	useFocusEffect(
		useCallback(() => {
			// Code to run when the screen is focused
			console.log("Screen is focused");

			return () => {
				if (!buttonPressedRef.current) {
					console.log("buttonPressed", buttonPressed);
					if (appStoreInstance.IsformDirty === false) {
						console.log("No changes detected, save operation aborted.");
						return;
					} else if (appStoreInstance.IsformDirty === true) {
						handleSubmit((data) => handleOnAutoUpdateClick(data))();
						appStoreInstance.setIsFormDirty(false);
					}
				} else {
					console.log("Screen is unfocused");
				}
			};
		}, [])
	);

	useEffect(() => {
		console.log("isDirty side effect", isDirty);
		appStoreInstance.setIsFormDirty(isDirty);
	}, [isDirty]);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$secondaryBackground'>
					<>
						<ScrollView>
							<Box paddingTop={10} justifyContent='center' alignItems='center' gap='$6'>
								<Box width={"$100%"}>
									<CaselogDropDownOptions
										formFields={getCaseLogFields(routes.params.caseType)}
										prefilledData={caseLogPrefilledData}
										control={control}
										readOnly={false}
										caseLogData={caseLogData}
										setValue={setValue}
										formState={formState}
										readOnlyFaculty={true}
										watch={watch}
									/>
								</Box>
								<Divider />
								<Box justifyContent='center' alignItems='center'>
									<Box width={"$100%"}>
										<SpecialCaseLogSelectOptions
											control={control}
											setValue={setValue}
											getValues={getValues}
											formState={formState}
											caseLogData={caseLogData}
											specialCaseLogsOption={getSpecialCaseLogOptions(routes.params.caseType)}
											refernceToGetSpecialOptions={routes.params.caseType}
										/>
									</Box>
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
							<Button onPress={handleSubmit(handleOnUpdateClick)} variant='primary'>
								<ButtonText>Update Log</ButtonText>
							</Button>
						</Box>
					</>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(CaseLogEditScreen);
