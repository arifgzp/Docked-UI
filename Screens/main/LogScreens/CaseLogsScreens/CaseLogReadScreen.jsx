import { Box, HStack, VStack, Button, ButtonText, KeyboardAvoidingView, Divider } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";
import { useQuery } from "../../../../src/models";
import { formatRFC3339 } from "date-fns";
import { useRoute } from "@react-navigation/native";
import Loader from "../../../../components/Loader";
import { Text } from "@gluestack-ui/themed";
import { observer } from "mobx-react";

const specialCaseLogsOption = [
	{ id: "comorbidity", name: "Comorbidity" },
	{ id: "typeOfAnaesthesia", name: "Type of Anesthesia" },
	{ id: "airManagement", name: "Airway Management" },
	{ id: "regionalTechniques", name: "Regional Techniques" },
	{ id: "interventionalProcedures", name: "Interventional Procedures" },
	{ id: "monitoring", name: "Monitoring" },
	{ id: "complications", name: "Complications" },
];

const parserForConvertingIntoTreeFormData = (input, key) => {
	const result = {};

	input?.forEach((item) => {
		const parts = item.split("/");
		const mainKey = parts.slice(0, -1).join("/");
		const value = parts[parts.length - 1];

		if (mainKey in result) {
			if (Array.isArray(result[mainKey])) {
				result[mainKey].push(value);
			} else {
				result[mainKey] = [result[mainKey], value];
			}
		} else {
			result[mainKey] = value;
		}
	});

	// Convert single values to arrays where needed
	for (const key in result) {
		if (key.includes(key) && !Array.isArray(result[key])) {
			result[key] = [result[key]];
		}
	}

	return result;
};

const CaseLogReadScreen = ({ navigation }) => {
	const routes = useRoute();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [loading, setLoading] = useState(false);
	const [caseLogPrefilledData, setCaseLogPreFilledData] = useState();
	const { control, formState, reset, watch, handleSubmit, setValue } = useForm({
		defaultValues: {
			hospital: "",
			faculty: "",
			date: new Date(),
		},
	});
	const typeOfAnaesthesia = parserForConvertingIntoTreeFormData(watch("typeOfAnaesthesia"), "typeOfAnaesthesia");
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
		console.log(store.getAnaesthesiaCaseLogById(routes.params.id));
		reset({
			...store.getAnaesthesiaCaseLogById(routes.params.id)[0],
		});
	}, []);

	useEffect(() => {
		console.log(store.getAnaesthesiaCaseLogById(routes.params.id));
		reset({
			...store.getAnaesthesiaCaseLogById(routes.params.id)[0],
		});
	}, []);

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
	}, []);

	const handleOnUpdateClick = async (formData) => {
		delete formData.id;
		delete formData.__typename;
		formData.updatedOn = formatRFC3339(new Date());
		try {
			const query = store.updateAnaesthesiaCaseLog(routes.params.id, { set: formData });
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

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader apiLoadingInfo={loading} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$primaryBackground'>
					<ScrollView>
						<Box paddingTop={10} justifyContent='center' alignItems='center'>
							<Box width={"$100%"}>
								<CaselogDropDownOptions
									prefilledData={caseLogPrefilledData}
									control={control}
									readOnly={false}
									setValue={setValue}
									formState={formState}
								/>
								<Divider />
							</Box>
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
						<Box mt='$5' mb={"$20%"} width={"$100%"} justifyContent='center' alignItems='center'>
							<Button width={"$50%"} height={50} onPress={handleSubmit(handleOnUpdateClick)} size='lg' variant='secondary' borderRadius={10}>
								<ButtonText color='#1E1E1E' fontFamily='Inter_SemiBold' textAlign='center'>
									Update Log
								</ButtonText>
							</Button>
						</Box>
					</ScrollView>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(CaseLogReadScreen);
