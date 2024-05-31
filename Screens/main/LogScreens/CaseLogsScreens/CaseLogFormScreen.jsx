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

const specialCaseLogsOption = [
	{ id: "typeOfAnaesthesia", name: "Type of Anesthesia" },
	{ id: "airManagement", name: "Airway Management" },
];

const CaseLogFormScreen = ({ navigation }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const { control, formState, reset, watch, handleSubmit, setValue } = useForm({
		defaultValues: {
			date: new Date(),
		},
	});

	useEffect(() => {
		reset({
			date: new Date("2024-07-30T15:01:00.000Z"),
		});
	}, []);

	const handleSaveClick = async (formData) => {
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.date = formatRFC3339(formData.date);
		try {
			const query = store.addAnaesthesiaCaseLog(formData);
			setQuery(query);
			const data = await query;
			if (data) {
				setTimeout(() => {
					navigation.navigate("Logbook");
				}, 2000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} w='$100' backgroundColor='$primaryBackground'>
					<ScrollView>
						<Box paddingTop={10} justifyContent='center' alignItems='center'>
							<Box width={"$100%"}>
								<CaselogDropDownOptions control={control} setValue={setValue} formState={formState} />
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
					</ScrollView>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default CaseLogFormScreen;
