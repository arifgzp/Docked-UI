import { Box, HStack, VStack, Button, ButtonText, KeyboardAvoidingView, Divider } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";

const CaseLogFormScreen = ({ navigation }) => {
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);

	const { control, handleSubmit, formState, reset, watch } = useForm({
		defaultValues: {
			hospital: "",
			faculty: "",
			date: "",
			designation: "",
			workPlace: "",
			city: "",
			medicalCouncilName: "",
			yearOfRegistration: "",
			medicalRegistrationNumber: "",
		},
	});

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<ScrollView>
					<Box paddingTop={10} justifyContent='center' alignItems='center' flex={1 / 4}>
						<Box width={"$100%"}>
							<CaselogDropDownOptions control={control} formState={formState} />
							<Divider />
						</Box>
					</Box>
					<Box justifyContent='center' alignItems='center' flex={2 / 4}>
						<Box width={"$100%"}>
							<SpecialCaseLogSelectOptions control={control} formState={formState} />
						</Box>
					</Box>
					<Box paddingBottom={"$30%"} paddingTop={10} flex={1 / 4} width={"$100%"}>
						<VStack space='lg'>
							<Box paddingLeft={15} width={"$100%"}>
								<Button size='sm' variant='secondary' borderRadius={50}>
									<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
										Add to spl. log
									</ButtonText>
								</Button>
							</Box>
							<HStack>
								<Box width={"$50%"} alignItems='center'>
									<Button width={"$85%"} height={50} size='lg' variant='secondary' borderRadius={50}>
										<ButtonText color='#1E1E1E' fontFamily='Inter_SemiBold' textAlign='center'>
											Save
										</ButtonText>
									</Button>
								</Box>
								<Box width={"$50%"} alignItems='center'>
									<Button width={"$85%"} height={50} size='lg' variant='secondary' borderRadius={50}>
										<ButtonText color='#1E1E1E' fontFamily='Inter_SemiBold' textAlign='center'>
											View Logs
										</ButtonText>
									</Button>
								</Box>
							</HStack>
							<Box alignItems='center' width={"$100%"}>
								<Button width={"$90%"} borderRadius={50} height={50} size='lg' variant='primary'>
									<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
										Submit for approval
									</ButtonText>
								</Button>
							</Box>
						</VStack>
					</Box>
				</ScrollView>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default CaseLogFormScreen;
