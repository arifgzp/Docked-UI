import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import DatePicker from "react-native-date-picker";
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
import {
	Select,
	SelectTrigger,
	SelectInput,
	SelectIcon,
	SelectPortal,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicatorWrapper,
	SelectDragIndicator,
	SelectItem,
	Icon,
} from "@gluestack-ui/themed";

import { ChevronDown } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { useState } from "react";

const CaselogDropDownOptions = ({ navigation, control, formState }) => {
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	return (
		<VStack space='lg'>
			<HStack space='sm' justifyContent='center'>
				<Box width={"$50%"}>
					<Box alignItems='center' paddingBottom={10}>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, onBlur, value } }) => {
								console.log("Your Expertise: ", value);
								return (
									<Select width={"$80%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
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
				<Box width={"$50%"}>
					<Box alignItems='center' paddingBottom={10}>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, onBlur, value } }) => {
								console.log("Your Expertise: ", value);
								return (
									<Select width={"$80%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
										<SelectTrigger variant='underlined' size='md'>
											<SelectInput placeholder='Faculty' />
											<SelectIcon mr='$3'>
												<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
											</SelectIcon>
										</SelectTrigger>
										<SelectPortal>
											<SelectBackdrop />
											<SelectContent>
												<SelectItem label='MBBS' value='MBBS' />
											</SelectContent>
										</SelectPortal>
									</Select>
								);
							}}
							name='faculty'
						/>
					</Box>
					<Box alignItems='center'>
						<Box width={"$80%"}>{formState.errors.faculty && <Text color='#DE2E2E'>This is required.</Text>}</Box>
					</Box>
				</Box>
			</HStack>
			<Box width={"$100%"}>
				<Box alignItems='center' paddingBottom={10}>
					<Controller
						control={control}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							console.log("Your Expertise: ", value);
							return (
								<Input
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									width={"$90%"}
									variant='underlined'
									size='md'
									isDisabled={false}
									isInvalid={false}
									isReadOnly={false}>
									<InputField placeholder='Date   --/--/--' />
								</Input>
								// <Button onPress={() => setOpen(true)}>
								// 	<ButtonText>Date</ButtonText>
								// 	<DatePicker
								// 		modal
								// 		onBlur={onBlur}
								// 		onValueChange={onChange}
								// 		selectedValue={value}
								// 		open={open}
								// 		date={date}
								// 		maximumDate={new Date()}
								// 		onDateChange={(date) => setDate(date)}
								// 		onCancel={() => {
								// 			setOpen(false);
								// 		}}
								// 	/>
								// </Button>
							);
						}}
						name='faculty'
					/>
				</Box>
				<Box alignItems='center'>
					<Box width={"$80%"}>{formState.errors.faculty && <Text color='#DE2E2E'>This is required.</Text>}</Box>
				</Box>
			</Box>
		</VStack>
	);
};

export default CaselogDropDownOptions;
