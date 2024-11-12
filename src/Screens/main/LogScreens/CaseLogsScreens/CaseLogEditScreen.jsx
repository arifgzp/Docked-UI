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
import { Keyboard } from "react-native";
import {
	OralMedicineAndRadiologyConfigTextAndSingleSelectOption,
	OralMedicineAndRadiologySpecialOptions,
} from "../../../../data/entity/OralMedicineAndRadiology/OralMedicineAndRadiologyConfig";
import {
	OralRadiologyConfigTextAndSingleSelectOption,
	OralRadiologySpecialOptions,
} from "../../../../data/entity/OralMedicineAndRadiology/OralRadiologyConfig";
import { err } from "react-native-svg";

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

const CaseLogEditScreen = ({ navigation }) => {
	const isReady = useIsReady();
	const routes = useRoute();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [caseLogData, setCaseLogData] = useState({});
	const [buttonPressed, setButtonPressed] = useState(false);
	const buttonPressedRef = useRef();
	const { control, formState, reset, watch, handleSubmit, setValue, getValues } = useForm({
		defaultValues: {
			hospital: "",
			approver: "",
			date: new Date(),
			remarks: "",
		},
	});
	const [openSelectField, setOpenSelectField] = useState(null);
	const allFields = ["hospital", "date", "approver", ...getCaseLogFields(routes.params.logType).map((field) => field.uid), "outcomeOther"];
	const scrollViewRef = useRef(null);
	const inputRefs = useRef({});
	const [caseData, setCaseData] = useState();

	const scrollToInput = (inputName) => {
		if (inputRefs.current[inputName]) {
			inputRefs.current[inputName].measureLayout(scrollViewRef.current, (x, y) => {
				scrollViewRef.current.scrollTo({ y: y - 100, animated: true });
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
				...getCaseLogFields(routes.params.logType)
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
	useEffect(() => {
		console.log("isDirty side effect", isDirty);
		appStoreInstance.setIsFormDirty(isDirty);
	}, [isDirty]);

	const handleOnUpdateClick = async (formData) => {
		console.log("what is caseLogData", caseData[0], caseLogData);
		if (!appStoreInstance.IsformDirty) {
			console.log("No changes detected, save operation aborted.");
			navigation.goBack();
			appStoreInstance.setIsFormDirty(false);
		}
		setButtonPressed(true);
		console.log("this is the auto update query >>>>>>>>", formData);
		let data = {};
		delete formData.id;
		delete formData.__typename;
		data.complete = true;
		data.updatedOn = formatRFC3339(new Date());
		if (formData.approver.id) {
			data.approver = { id: formData.approver.id };
			delete formData.approver;
			delete formData.faculty;
		}

		if (formData.rotation) {
			data.rotation = formData.rotation;
			delete formData.rotation;
		}

		if (formData.hospital) {
			data.hospital = formData.hospital;
			delete formData.hospital;
		}

		formData.updatedOn = formatRFC3339(new Date());
		let queryToRun;

		switch (routes.params.logType) {
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
			case "OralMedicineCaseLog":
				queryToRun = "updateOralMedicineCaseLog";
				break;
			case "OralRadiology":
				queryToRun = "updateOralRadiology";
				break;
			default:
				throw new Error("Invalid case log type");
		}
		console.log("form Data For Update", data);
		let dataToBeDeleted = findMissingValues(caseLogData, formData);
		console.log("dataToBeDeleted", dataToBeDeleted);
		try {
			const query = store[queryToRun](routes.params.logTypeID, { set: formData, remove: dataToBeDeleted });
			setQuery(query);
			const dataQuery = await query;
			if (dataQuery) {
				const caseQuery = store.updateCaseLog(routes.params.id, { set: data });
				setQuery(caseQuery);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnAutoUpdateClick = async (formData) => {
		console.log("this is the update query", formData);
		let data = {};
		delete formData.id;
		delete formData.__typename;
		data.complete = true;
		data.updatedOn = formatRFC3339(new Date());
		if (formData.approver.id) {
			data.approver = { id: formData.approver.id };
			delete formData.approver;
			delete formData.faculty;
		}

		if (formData.rotation) {
			data.rotation = formData.rotation;
			delete formData.rotation;
		}

		if (formData.hospital) {
			data.hospital = formData.hospital;
			delete formData.hospital;
		}

		formData.updatedOn = formatRFC3339(new Date());
		let queryToRun;

		switch (routes.params.logType) {
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
			case "OralMedicineCaseLog":
				queryToRun = "updateOralMedicineCaseLog";
				break;
			case "OralRadiology":
				queryToRun = "updateOralRadiology";
				break;
			default:
				throw new Error("Invalid case log type");
		}
		console.log("form Data For Update", data);
		let dataToBeDeleted = findMissingValues(caseLogData, formData);
		console.log("dataToBeDeleted", dataToBeDeleted);
		try {
			const query = store[queryToRun](routes.params.logTypeID, { set: formData, remove: dataToBeDeleted });
			setQuery(query);
			const dataQuery = await query;
			if (dataQuery) {
				const caseQuery = store.updateCaseLog(routes.params.id, { set: data });
				setQuery(caseQuery);
			}
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
			let data = store.getCaseLogsById(routes.params.id);
			setCaseData(data);
			let caseLogData = {};

			switch (routes.params.logType) {
				case "CaseLog":
					caseLogData = store.getAnaesthesiaCaseLogById(routes.params.logTypeID)[0];
					break;

				case "ChronicPain":
					caseLogData = store.getAnaesthesiaChronicPainLogById(routes.params.logTypeID)[0];
					break;

				case "CriticalCareCaseLog":
					caseLogData = store.getAnaesthesiaCriticalCareCaseLogById(routes.params.logTypeID)[0];
					break;

				case "OrthopaedicsCaseLog":
					caseLogData = store.getOrthopaedicsCaseLogById(routes.params.logTypeID)[0];
					break;

				case "OrthopaedicsProcedureLog":
					caseLogData = store.getOrthopaedicsProcedureLogById(routes.params.logTypeID)[0];
					break;

				case "OrthodonticsClinicalCaseLog":
					caseLogData = store.getOrthodonticsClinicalCaseLogById(routes.params.logTypeID)[0];
					break;

				case "OrthodonticsPreClinical":
					caseLogData = store.getOrthodonticsPreClinicalById(routes.params.logTypeID)[0];
					break;
				case "OralMedicineCaseLog":
					caseLogData = store.getOralMedicineCaseLogsById(routes.params.logTypeID)[0];
					break;
				case "OralRadiology":
					caseLogData = store.getOralRadiologiesById(routes.params.logTypeID)[0];
					break;
			}

			const approverData = { approver: data[0]?.approver } || {};
			console.log("approverData", approverData);
			const hospitalData = { hospital: data[0]?.hospital };
			const rotationData = { rotation: data[0]?.rotation };
			console.log("necessary logs for hospital and oration", hospitalData, rotationData);
			const formData = {
				...caseLogData,
				...approverData,
				...hospitalData,
				...rotationData,
			};
			console.log("what is data as well here?", data);
			console.log("what  form Data", formData);
			reset(formData);
			console.log("Formsatate", formState);
			console.log("what is caseLogData.hospital", caseLogData.hospital);
			setValue("hospital", data.hospital);
			setValue("rotation", data.rotation);
			setCaseLogData(caseLogData);
		};

		fetchData();
	}, [routes.params.logType]);

	useEffect(() => {
		const fetchLogProfilePrefilledData = async () => {
			try {
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
					setValue("rotation", rotationsList[0].department);
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
	let logprofileData = {};

	console.log("what is log profile", store.LogProfileList[0]);
	logprofileData.faculty = store.LogProfileList[0].faculties;
	logprofileData.hospital = store.LogProfileList[0].hospitals;
	logprofileData.rotation = store.LogProfileList[0].rotations;
	console.log("what is case log data here????", caseLogData, caseData, "and what is caseLogPrefilledData", logprofileData);
	console.log("Formsatate outside ", formState);
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$secondaryBackground'>
					<>
						<ScrollView ref={scrollViewRef} keyboardShouldPersistTaps='handled'>
							<Box paddingTop={10} justifyContent='center' alignItems='center' gap='$6'>
								<Box width={"$100%"}>
									<CaselogDropDownOptions
										formFields={getCaseLogFields(routes.params.logType)}
										prefilledData={logprofileData}
										control={control}
										readOnly={false}
										caseLogData={caseLogData}
										setValue={setValue}
										formState={formState}
										readOnlyapprover={false}
										watch={watch}
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
								<Box justifyContent='center' alignItems='center'>
									<Box width={"$100%"}>
										<SpecialCaseLogSelectOptions
											control={control}
											setValue={setValue}
											getValues={getValues}
											formState={formState}
											caseLogData={caseLogData}
											specialOptions={getSpecialCaseLogOptions(routes.params.logType)}
											refernceToGetSpecialOptions={routes.params.logType}
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
														<TextareaInput w='$100%' onChangeText={onChange} value={value} />
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
