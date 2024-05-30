import {
	CheckIcon,
	CheckboxGroup,
	CheckboxIndicator,
	KeyboardAvoidingView,
	Select,
	SelectInput,
	SelectPortal,
	SelectTrigger,
} from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
	StatusBar,
	Input,
	HStack,
	VStack,
	FormControlLabel,
	FormControl,
	FormControlLabelText,
	InputField,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { SelectIcon } from "@gluestack-ui/themed";

import { ChevronDown } from "lucide-react-native";
import { SelectBackdrop } from "@gluestack-ui/themed";
import { SelectItem, SelectContent } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";

const LogProfilePage = ({ navigation }) => {
	const { control, handleSubmit, formState, reset, watch } = useForm({
		defaultValues: {
			hospital: "",
			faculty: "",
			date: "",
			designation: "",
			department: "",
			city: "",
			medicalCouncilName: "",
			yearOfRegistration: "",
			medicalRegistrationNumber: "",
		},
	});

	const listOfVerification = [
		{ doctorName: "Dr. Nasser", type: "Resident" },
		{ doctorName: "Dr. Sneha", type: "HOD" },
	];

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground' justifyContent='center' alignItems='center'>
				<ScrollView width={"$100%"}>
					<Box width={"$100%"} flex={3 / 4} alignItems='center' paddingTop={20} paddingBottom={20}>
						<VStack space='lg' width={"$100%"} alignItems='center'>
							<Box width={"$90%"}>
								<Box alignItems='center' paddingBottom={10}>
									<Controller
										control={control}
										rules={{
											required: true,
										}}
										render={({ field: { onChange, onBlur, value } }) => {
											return (
												<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
													<SelectTrigger variant='underlined' size='md'>
														<SelectInput placeholder='Hospital' />
														<SelectIcon mr='$3'>
															<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
														</SelectIcon>
													</SelectTrigger>
													<SelectPortal>
														<SelectBackdrop />
														<SelectContent>
															<SelectItem label='JJ' value='JJ' />
														</SelectContent>
													</SelectPortal>
												</Select>
											);
										}}
										name='hospital'
									/>
								</Box>
								<Box alignItems='center'>
									<Box width={"$80%"}>{formState.errors.hospital && <Text color='#DE2E2E'>This is required.</Text>}</Box>
								</Box>
							</Box>
							<Box width={"$90%"}>
								<Text alignSelf='flex-start' fontFamily='Inter_Bold'>
									Faculty list
								</Text>
							</Box>
							<Input width={"$90%"} variant='underlined' size='md' isDisabled={false} isInvalid={false} isReadOnly={false}>
								<InputField placeholder='Faculty name' />
							</Input>
							<Box width={"$90%"}>
								<Box alignItems='center' paddingBottom={10}>
									<Controller
										control={control}
										rules={{
											required: true,
										}}
										render={({ field: { onChange, onBlur, value } }) => {
											return (
												<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
													<SelectTrigger variant='underlined' size='md'>
														<SelectInput placeholder='Designation' />
														<SelectIcon mr='$3'>
															<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
														</SelectIcon>
													</SelectTrigger>
													<SelectPortal>
														<SelectBackdrop />
														<SelectContent>
															<SelectItem label='Designation' value='Designation' />
														</SelectContent>
													</SelectPortal>
												</Select>
											);
										}}
										name='designation'
									/>
								</Box>
								<Box alignItems='center'>
									<Box width={"$80%"}>{formState.errors.hospital && <Text color='#DE2E2E'>This is required.</Text>}</Box>
								</Box>
							</Box>
							<Box width={"$90%"}>
								<Button alignSelf='flex-start' width={"$50%"} height={50} size='sm' variant='secondary'>
									<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
										Save to list
									</ButtonText>
								</Button>
							</Box>
							<VStack space='lg' width={"$90%"} alignItems='center'>
								{listOfVerification.map((verification, index) => (
									<HStack key={index} alignItems='center' space='lg' width={"$100%"}>
										<Text width={"$10%"}>{index + 1}.</Text>
										<Text width={"$20%"}>{verification.doctorName}</Text>
										<Text width={"$20%"}>{verification.type}</Text>
										<Button width={"$30%"} height={50} size='sm' variant='secondary'>
											<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
												Verify
											</ButtonText>
										</Button>
									</HStack>
								))}
							</VStack>
							<Box width={"$90%"}>
								<Text size='xs' alignSelf='flex-start'>
									Faculty will shortly receive a verification link
								</Text>
							</Box>
							<Box width={"$90%"}>
								<Text alignSelf='flex-start' fontFamily='Inter_Bold'>
									Rotation
								</Text>
							</Box>
							<Box width={"$90%"}>
								<Box alignItems='center' paddingBottom={10}>
									<Controller
										control={control}
										rules={{
											required: true,
										}}
										render={({ field: { onChange, onBlur, value } }) => {
											return (
												<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
													<SelectTrigger variant='underlined' size='md'>
														<SelectInput placeholder='Department' />
														<SelectIcon mr='$3'>
															<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
														</SelectIcon>
													</SelectTrigger>
													<SelectPortal>
														<SelectBackdrop />
														<SelectContent>
															<SelectItem label='Department' value='Department' />
														</SelectContent>
													</SelectPortal>
												</Select>
											);
										}}
										name='department'
									/>
								</Box>
								<Box alignItems='center'>
									<Box width={"$80%"}>{formState.errors.hospital && <Text color='#DE2E2E'>This is required.</Text>}</Box>
								</Box>
							</Box>
							<Input width={"$90%"} variant='underlined' size='md' isDisabled={false} isInvalid={false} isReadOnly={false}>
								<InputField placeholder='Date   --/--/--' />
							</Input>
						</VStack>
					</Box>
					<Box flex={1 / 4} width={"$100%"} alignItems='center' paddingBottom={"$30%"}>
						<Button height={50} size='lg' variant='primary'>
							<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
								Save
							</ButtonText>
						</Button>
					</Box>
				</ScrollView>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default LogProfilePage;
