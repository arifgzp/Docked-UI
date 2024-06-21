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
import {
	caseLogConfigTextAndSingleSelectOptions,
	specialAnesthesiaCaseLogsOption,
} from "../../../../config/entity/AnesthesiaCaseLogConfigs/CaseLogFormConfig";
import {
	ChornicPainCaseLogConfigTextAndSingleSelectOptions,
	specialAnesthesiaChronicPainOptions,
} from "../../../../config/entity/AnesthesiaCaseLogConfigs/ChronicPainLogConfig";
import {
	CriticalCareCaseLogConfigTextAndSingleSelectOptions,
	specialAnesthesiaCriticalCareCaseLogOptions,
} from "../../../../config/entity/AnesthesiaCaseLogConfigs/CriticalCareCaseLogConfig";
import {
	OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions,
	specialOrthodonticsClinicalCaseLog,
} from "../../../../config/entity/OrthodonticCaseLogConfigs/OrthodonticsClinicalCaseLogConfig";
import {
	OrthopaedicsCaseLogConfigTextAndSingleSelectOptions,
	specialOrthopaedicsCaseLogsOption,
} from "../../../../config/entity/OrthopaedicsCaseLogConfigs/OrthopaedicsCaseLogConfig";
import { useQuery } from "../../../../src/models";
import AppStore from "../../../../src/stores/AppStore";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";

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
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const { caseLogFormToGet } = route.params;
	const { control, formState, reset, watch, handleSubmit, setValue, getValues } = useForm({
		defaultValues: {
			faculty: "",
			date: new Date(),
		},
	});
	const toast = useToast();
	const [caseLogPrefilledData, setCaseLogPreFilledData] = useState();

	const handleSaveClick = async (formData) => {
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
				}, 1000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (isFocused) {
			const fetchLogProfilePrefilledData = async () => {
				try {
					const query = store.fetchUserLogProfile(AppStore.UserName);
					setQuery(query);
					const finishFetchingLogProfile = await query;
					if (finishFetchingLogProfile) {
						const userData = toJS(finishFetchingLogProfile.queryUser[0]);
						const facultiesList = userData.logProfile.faculties;
						const rotationsList = userData.logProfile.rotations;
						const hospitalData = userData.logProfile.hospital;
						setCaseLogPreFilledData({ hospital: hospitalData, faculty: facultiesList, rotations: rotationsList });
						setValue("hospital", hospitalData);
						setValue("faculty", facultiesList);
						setValue("rotation", rotationsList[0].department);
					}
				} catch (error) {
					console.log(error);
				}
			};
			fetchLogProfilePrefilledData();
			reset({
				date: new Date("2024-07-30T15:01:00.000Z"),
			});
		}
	}, [isFocused]);

	console.log("!!!!!!!!!!!!!!! Route Change DETECTED Rendering with caseLogFormToGet", caseLogFormToGet);

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} w='$100%' backgroundColor='$primaryBackground'>
					{caseLogPrefilledData ? (
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
								<Box paddingBottom={"$30%"} paddingTop={10} width={"$100%"}>
									<VStack space='lg'>
										<Box paddingLeft={15} width={"$100%"}>
											<Button size='sm' variant='secondary' borderRadius={10}>
												<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
													Add to spl. log
												</ButtonText>
											</Button>
										</Box>
										<HStack>
											<Box width={"$50%"} alignItems='center'>
												<Button width={"$85%"} height={50} onPress={handleSubmit(handleSaveClick)} size='lg' variant='secondary' borderRadius={10}>
													<ButtonText color='#1E1E1E' fontFamily='Inter_SemiBold' textAlign='center'>
														Save
													</ButtonText>
												</Button>
											</Box>
											<Box width={"$50%"} alignItems='center'>
												<Button width={"$85%"} height={50} size='lg' variant='secondary' borderRadius={10}>
													<ButtonText color='#1E1E1E' fontFamily='Inter_SemiBold' textAlign='center'>
														View Logs
													</ButtonText>
												</Button>
											</Box>
										</HStack>
										<Box alignItems='center' width={"$100%"}>
											<Button width={"$90%"} borderRadius={10} height={50} size='lg' variant='primary'>
												<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
													Submit for approval
												</ButtonText>
											</Button>
										</Box>
									</VStack>
								</Box>
							</Box>
						</ScrollView>
					) : (
						<Box flex={1 / 1} height={"$100%"} justifyContent='center' alignItems='center'>
							<VStack width={"$100%"} alignItems='center' space='lg' mb='$20'>
								<Text>Please create your log profile before filing a case</Text>
								<Box width={"$100%"} alignItems='center'>
									<Button
										onPress={() => navigation.navigate("MainLogScreen", { screen: "LogProfilePage", params: { caseLogFormToGet: caseLogFormToGet } })}
										width={"$85%"}
										height={50}
										size='lg'
										variant='secondary'
										borderRadius={10}>
										<ButtonText color='#1E1E1E' fontFamily='Inter_SemiBold' textAlign='center'>
											Create Log Profile
										</ButtonText>
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
