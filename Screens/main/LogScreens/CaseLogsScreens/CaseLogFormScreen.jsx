import { Box, HStack, VStack, Button, ButtonText, KeyboardAvoidingView, Divider } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";
import { useQuery } from "../../../../src/models";
import { formatRFC3339 } from "date-fns";
import Loader from "../../../../components/Loader";
import { observer } from "mobx-react";
import appStoreInstance from "../../../../src/stores/AppStore";
import AppStore from "../../../../src/stores/AppStore";
import { toJS } from "mobx";
import { Text } from "@gluestack-ui/themed";

const specialCaseLogsOption = [
	{ id: "comorbidity", name: "Comorbidity" },
	{ id: "typeOfAnaesthesia", name: "Type of Anesthesia" },
	{ id: "airManagement", name: "Airway Management" },
	{ id: "regionalTechniques", name: "Regional Techniques" },
	{ id: "interventionalProcedures", name: "Interventional Procedures" },
	{ id: "monitoring", name: "Monitoring" },
	{ id: "complications", name: "Complications" },
];

const CaseLogFormScreen = ({ navigation }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const { control, formState, reset, watch, handleSubmit, setValue } = useForm({
		defaultValues: {
			date: new Date(),
		},
	});

	const [caseLogPrefilledData, setCaseLogPreFilledData] = useState();

	const onSubmitData = async (data) => {
		console.log("Case Log Form Data", data);
	};

	useEffect(() => {
		const fetchLogProfilePrefilledData = async () => {
			try {
				console.log("AppStore.UserId", AppStore.UserName);
				const query = store.fetchUserLogProfile(AppStore.UserName);
				setQuery(query);
				const finishFetchingLogProfile = await query;
				console.log("finishFetchingLogProfile", finishFetchingLogProfile);
				if (finishFetchingLogProfile) {
					console.log("finishFetchingLogProfile.data.queryUser[0]", finishFetchingLogProfile.queryUser[0]);
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
					setValue("faculty", faculty);
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
	}, []);

	console.log("Mudit is papa=>", caseLogPrefilledData);

	const handleSaveClick = async (formData) => {
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.date = formatRFC3339(formData.date);
		try {
			const query = store.addAnaesthesiaCaseLog(formData);
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

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} w='$100%' backgroundColor='$primaryBackground'>
					{caseLogPrefilledData && (
						<ScrollView>
							<Box paddingTop={10} justifyContent='center' alignItems='center'>
								<Box width={"$100%"}>
									<CaselogDropDownOptions prefilledData={caseLogPrefilledData} control={control} setValue={setValue} formState={formState} />
									<Divider />
								</Box>
								<Box justifyContent='center' alignItems='center'>
									<Box width={"$100%"}>
										<SpecialCaseLogSelectOptions
											control={control}
											setValue={setValue}
											formState={formState}
											specialCaseLogsOption={specialCaseLogsOption}
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
					)}
					{!caseLogPrefilledData && (
						<Box flex={1 / 1} height={"$100%"} justifyContent='center' alignItems='center'>
							<VStack width={"$100%"} alignItems='center' space='lg' mb='$20'>
								<Text>Please create your log profile before filing a case</Text>
								<Box width={"$100%"} alignItems='center'>
									<Button
										onPress={() => navigation.navigate("MainLogScreen", { screen: "LogProfilePage" })}
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
