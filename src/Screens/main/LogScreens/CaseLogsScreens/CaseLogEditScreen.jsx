import { Box, HStack, VStack, Button, ButtonText, KeyboardAvoidingView, Divider } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";
import { useQuery } from "../../../../models";
import { formatRFC3339 } from "date-fns";
import { useRoute } from "@react-navigation/native";
import Loader from "../../../../components/Loader";
import { Text } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { useIsFocused } from "@react-navigation/native";

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
		case "OrthodonticsClinicalCaseLog":
			return OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions;
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
		case "OrthodonticsClinicalCaseLog":
			return specialOrthodonticsClinicalCaseLog;
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
	const { control, formState, reset, watch, handleSubmit, setValue, getValues } = useForm({
		defaultValues: {
			hospital: "",
			faculty: "",
			date: new Date(),
		},
	});

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
		console.log("this is the update query");
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
			case "OrthodonticsClinicalCaseLog":
				queryToRun = "updateOrthodonticsClinicalCaseLog";
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
			if (data) {
				setTimeout(() => {
					navigation.goBack();
				}, 1000);
			}
		} catch (error) {
			console.log(error);
		}
	};

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

				case "OrthodonticsClinicalCaseLog":
					caseLogData = store.getOrthodonticsClinicalCaseLogById(routes.params.id)[0];
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
				const logProfileData = toJS(AppStore.UserLogProfile);
				console.log("logProfileData", logProfileData);
				if (logProfileData) {
					const facultiesList = logProfileData.faculties;
					const rotationsList = logProfileData.rotations;
					const hospitalData = logProfileData.hospital;
					console.log("facultiesListfromAPPSTORE", facultiesList);
					console.log("rotationsListfromAPPSTORE", rotationsList);
					console.log("hospitalDatafromAPPSTORE", hospitalData);
					console.log("rotations[0].departmentfromAPPSTORE", rotationsList[0].department);
					setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
					setValue("hospital", hospitalData);
					setValue("faculty", facultiesList);
					setValue("rotation", rotationsList[0].department);
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
						const hospitalData = userData.logProfile.hospital;
						console.log("facultiesList", facultiesList);
						console.log("rotationsList", rotationsList);
						console.log("hospitalData", hospitalData);
						console.log("rotations[0].department", rotationsList[0].department);
						setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
						setValue("hospital", hospitalData);
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

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$secondaryBackground'>
					<>
						<ScrollView>
							<Box paddingTop={10} justifyContent='center' alignItems='center'>
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
									/>
									<Divider />
								</Box>
							</Box>

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
						</ScrollView>
						{/* <Box mt='$3' paddingBottom={"$22%"} width={"$100%"} justifyContent='center' alignItems='center'>
							<Button width={"$50%"} height={50} onPress={handleSubmit(handleOnUpdateClick)} size='lg' variant='secondary' borderRadius={10}>
								<ButtonText color='#1E1E1E' fontFamily='Inter_SemiBold' textAlign='center'>
									Update Log
								</ButtonText>
							</Button>
						</Box> */}
						<Box p={20} paddingBottom={"$20%"} paddingTop={5} width={"$100%"}>
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
