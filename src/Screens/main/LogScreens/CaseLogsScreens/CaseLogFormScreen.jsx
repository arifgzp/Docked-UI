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
} from "@gluestack-ui/themed";
import { useIsFocused } from "@react-navigation/native";
import { formatRFC3339 } from "date-fns";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
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

const CaseLogFormScreen = ({ navigation, route }) => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const { caseLogFormToGet } = route.params;
	const { control, formState, reset, watch, handleSubmit, setValue, getValues } = useForm({
		defaultValues: {
			faculty: null,
			date: new Date(),
		},
	});
	const toast = useToast();
	const [caseLogPrefilledData, setCaseLogPreFilledData] = useState();

	const handleSaveClick = async (formData) => {
		console.log("errors for the form", formState.errors);
		if (typeof formData.faculty !== "string" || formData.faculty.trim() === "") {
			// Raise an error indicating rotation or faculty cannot be empty
			toast.show({
				placement: "top",
				render: ({ id }) => {
					const toastId = "toast-" + id;
					return (
						<Toast nativeID={toastId} action='warning' variant='accent'>
							<VStack space='xs' mx='$4'>
								<ToastTitle>Alert</ToastTitle>
								<ToastDescription>Please Select A Faculty!</ToastDescription>
							</VStack>
						</Toast>
					);
				},
			});
			return; // Exit function early
		}
		console.log("FormData for Case Logs", formData);
		console.log("caseLogFromToGet", caseLogFormToGet);
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.date = formatRFC3339(formData.date);
		formData.caseType = caseLogFormToGet;
		let queryToRun;
		let caseLogToUpdate;

		switch (caseLogFormToGet) {
			case "CaseLog":
				console.log("is this working for switch", caseLogFormToGet);
				queryToRun = "updateUserAnaesthesiaCaseLog";
				caseLogToUpdate = "anaesthesiaCaseLog";
				break;
			case "ChronicPain":
				console.log("is this working for switch", caseLogFormToGet);
				queryToRun = "updateUserAnaesthesiaChronicPainLog";
				caseLogToUpdate = "anaesthesiaChronicPainLog";
				break;
			case "CriticalCareCaseLog":
				console.log("is this working for switch", caseLogFormToGet);
				queryToRun = "updateUserAnaesthesiaCritcalCareCaseLog";
				caseLogToUpdate = "anaesthesiaCriticalCareCaseLog";
				break;
			case "OrthopaedicsCaseLog":
				console.log("is this working for switch", caseLogFormToGet);
				queryToRun = "updateUserOrthopaedicsCaseLog";
				caseLogToUpdate = "orthopaedicsCaseLog";
				break;
			case "OrthodonticsClinicalCaseLog":
				console.log("is this working for switch", caseLogFormToGet);
				queryToRun = "updateUserOrthodonticsClinicalCaseLog";
				caseLogToUpdate = "orthodonticsClinicalCaseLog";
				break;
			default:
				throw new Error("Invalid case log type");
		}

		console.log("queryToRun", queryToRun);
		console.log("caseLogToUpdate", caseLogToUpdate);

		try {
			const query = store[queryToRun](AppStore.UserId, { set: { [caseLogToUpdate]: formData } });
			setQuery(query);
			const data = await query;
			if (data) {
				setTimeout(() => {
					navigation.navigate("RootLogBook");
					reset();
				}, 1000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		reset();
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
					console.log("rotations[0].departmentfromAPPSTORE", rotationsList[0]?.department);
					setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
					setValue("hospital", hospitalData);
					setValue("faculty", facultiesList);
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
						const hospitalData = userData.logProfile.hospital;
						console.log("facultiesList", facultiesList);
						console.log("rotationsList", rotationsList);
						console.log("hospitalData", hospitalData);
						console.log("rotations[0].department", rotationsList[0]?.department);
						setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
						setValue("hospital", hospitalData);
						setValue("faculty", facultiesList);
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
	}, [isFocused]);

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
								<Box paddingTop={10} justifyContent='center' alignItems='center'>
									<Box width={"$100%"}>
										<CaselogDropDownOptions
											formFields={getCaseLogFields(caseLogFormToGet)}
											prefilledData={caseLogPrefilledData}
											control={control}
											setValue={setValue}
											formState={formState}
											readOnlyFaculty={false}
										/>
										<Divider />
									</Box>
									<Box justifyContent='center' alignItems='center'>
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
									</Box>
								</Box>
							</ScrollView>
							<Box p={20} paddingBottom={"$20%"} paddingTop={5} width={"$100%"}>
								<Button onPress={handleSubmit(handleSaveClick)} variant='primary'>
									<ButtonText>Save</ButtonText>
								</Button>
							</Box>
						</>
					) : (
						<Box p='$10' flex={1 / 1} height={"$100%"} justifyContent='center' alignItems='center'>
							<VStack width={"$100%"} space='lg' mb='$20'>
								<Text textAlign='center' bold>
									Please create your log profile before filing a case
								</Text>
								<Box>
									<Button onPress={() => navigation.navigate("LogProfilePage", { caseLogFormToGet: caseLogFormToGet })} variant='primary'>
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
