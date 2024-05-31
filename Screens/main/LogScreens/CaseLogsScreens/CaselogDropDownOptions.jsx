import { CheckIcon, CheckboxGroup, CheckboxIndicator, Divider, KeyboardAvoidingView } from "@gluestack-ui/themed";
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
import { Keyboard } from "react-native";
import { ChevronDown } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { useState } from "react";
import { Actionsheet } from "@gluestack-ui/themed";
import { ActionsheetBackdrop } from "@gluestack-ui/themed";
import { ActionsheetContent } from "@gluestack-ui/themed";
import { ActionsheetDragIndicatorWrapper } from "@gluestack-ui/themed";
import { ActionsheetDragIndicator } from "@gluestack-ui/themed";
import { CalendarDaysIcon } from "@gluestack-ui/themed";
import { InputSlot } from "@gluestack-ui/themed";
import { InputIcon } from "@gluestack-ui/themed";
import { format } from "date-fns";
const CaselogDropDownOptions = ({ navigation, control, formState, setValue, readOnly }) => {
	const [open, setOpen] = useState(false);
	const [showActionSheet, setShowActionsheet] = useState(false);
	const [date, setDate] = useState(new Date());
	const handleCloseDateModal = () => {
		setShowActionsheet(false);
	};

	const handelSetDate = (date) => {
		setValue("date", date);
	};

	return (
		<VStack space='lg'>
			<Box width={"$100%"}>
				<Box alignItems='center' paddingBottom={10}>
					<Controller
						control={control}
						key={"hospital"}
						name={"hospital"}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<Select width={"$90%"} onBlur={onBlur} isReadOnly={readOnly} onValueChange={onChange} selectedValue={value}>
									<SelectTrigger variant='underlined' size='md'>
										<SelectInput placeholder='Hospital' />
										<SelectIcon mr='$3'>{!readOnly && <Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent>
											<Text padding={10} size='xl'>
												Hospital
											</Text>
											<Divider borderWidth={0.1} />
											<SelectItem label='Apollo Hospitals' value='APOLLOHOSPITALS' />
											<SelectItem label='Fortis Healthcare' value='FORTISHEALTHCARE' />
											<SelectItem label='Narayana Health' value='NARAYANAHEALTH' />
											<SelectItem label='Manipal Hospitals' value='MANIPALHOSPITALS' />
											<SelectItem label='Max Healthcare' value='MAXHEALTHCARE' />
											<SelectItem label='Christian Medical College (CMC), Vellore' value='CMCVELLORE' />
											<SelectItem label='Tata Memorial Hospital' value='TATAMEMORIALHOSPITAL' />
										</SelectContent>
									</SelectPortal>
								</Select>
							);
						}}
					/>
				</Box>
				<Box alignItems='center'>
					<Box width={"$80%"}>{formState.errors.hospital && <Text color='#DE2E2E'>This is required.</Text>}</Box>
				</Box>
			</Box>
			<Box width={"$100%"}>
				<Box alignItems='center' paddingBottom={10}>
					<Controller
						key={"faculty"}
						control={control}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<Select width={"$90%"} isReadOnly={readOnly} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
									<SelectTrigger variant='underlined' size='md'>
										<SelectInput placeholder='Faculty' />
										<SelectIcon mr='$3'>{!readOnly && <Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent>
											<Text padding={10} size='xl'>
												Faculty
											</Text>
											<Divider borderWidth={0.1} />
											<SelectItem label='Dr. Ravi Gupta - Nephrology' value='DR_RAVI_GUPTA_NEPHROLOGY' />
											<SelectItem label='Dr. Mudit Dixit - Cardiology' value='DR_MUDIT_DIXIT_CARDIOLOGY' />
											<SelectItem label='Dr. Priya Singh - Dermatology' value='DR_PRIYA_SINGH_DERMATOLOGY' />
											<SelectItem label='Dr. Suresh Kumar - Gastroenterology' value='DR_SURESH_KUMAR_GASTROENTEROLOGY' />
											<SelectItem label='Dr. Meera Joshi - Neurology' value='DR_MEERA_JOSHI_NEUROLOGY' />
											<SelectItem label='Dr. Arjun Patel - Oncology' value='DR_ARJUN_PATEL_ONCOLOGY' />
											<SelectItem label='Dr. Kavita Menon - Pediatrics' value='DR_KAVITA_MENON_PEDIATRICS' />
											<SelectItem label='Dr. Vikram Desai - Psychiatry' value='DR_VIKRAM_DESAI_PSYCHIATRY' />
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
			<Button disabled={readOnly} justifyContent='flex-start' alignItems='flex-start' variant='link' width='$90%' onPress={() => setOpen(true)}>
				<ButtonText paddingLeft={15} fontFamily='Inter'>
					Date - {date.toDateString()}
				</ButtonText>
			</Button>
			<DatePicker
				modal
				open={open}
				theme='light'
				date={date}
				// onDateChange={(date) => {
				// 	//setDate(date);
				// 	handelSetDate(date);
				// }}
				onConfirm={(date) => {
					setOpen(false);
					handelSetDate(date);
				}}
				onCancel={() => {
					setOpen(false);
				}}
				mode='date'
			/>
			{/* <Box width={"$100%"}>
				<Box alignItems='center' paddingBottom={10}>
					<Controller
						control={control}
						key={"date"}
						name={"date"}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<Input
									isReadOnly={readOnly}
									onFocus={() => {
										Keyboard.dismiss();
										setShowActionsheet(true);
									}}
									variant='outline'>
									<InputSlot pl='$3'>
										<InputIcon as={CalendarDaysIcon} />
									</InputSlot>
									<InputField value={format(value, "MM/dd/yyyy")} placeholder='Enter Text here' />
								</Input>
							);
						}}
					/>
				</Box>
				<Box alignItems='center'>
					<Box width={"$80%"}>{formState.errors.faculty && <Text color='#DE2E2E'>This is required.</Text>}</Box>
				</Box>
			</Box>

			<Actionsheet isOpen={showActionSheet} onClose={handleCloseDateModal} zIndex={999}>
				<ActionsheetBackdrop />
				<ActionsheetContent zIndex={999}>
					<ActionsheetDragIndicatorWrapper>
						<ActionsheetDragIndicator />
					</ActionsheetDragIndicatorWrapper>
					<Button onPress={() => setOpen(true)}>
						<Button Text>Date</Button>
					</Button>
					<DatePicker
						modal
						open={open}
						theme='light'
						date={date}
						// onDateChange={(date) => {
						// 	//setDate(date);
						// 	handelSetDate(date);
						// }}
						onConfirm={(date) => {
							setOpen(false);
							handelSetDate(date);
						}}
						onCancel={() => {
							setOpen(false);
						}}
						mode='date'
					/>
				</ActionsheetContent>
			</Actionsheet> */}
		</VStack>
	);
};

export default CaselogDropDownOptions;
