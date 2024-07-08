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
	ButtonIcon,
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
import { useEffect, useState } from "react";
import { Actionsheet } from "@gluestack-ui/themed";
import { ActionsheetBackdrop } from "@gluestack-ui/themed";
import { ActionsheetContent } from "@gluestack-ui/themed";
import { ActionsheetDragIndicatorWrapper } from "@gluestack-ui/themed";
import { ActionsheetDragIndicator } from "@gluestack-ui/themed";
import { CalendarDaysIcon } from "@gluestack-ui/themed";
import { InputSlot } from "@gluestack-ui/themed";
import { InputIcon } from "@gluestack-ui/themed";
import { format, parseISO } from "date-fns";
import { observer } from "mobx-react";
import { useQuery } from "../../../../models";
import AppStore from "../../../../stores/AppStore";

const CaselogDropDownOptions = ({ navigation, control, formState, setValue, readOnly, prefilledData, formFields, readOnlyFaculty, caseLogData }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [open, setOpen] = useState(false);
	const [showActionSheet, setShowActionsheet] = useState(false);
	const [date, setDate] = useState(caseLogData?.date ? new Date(caseLogData.date) : new Date());

	const handleCloseDateModal = () => {
		setShowActionsheet(false);
	};

	const handelSetDate = (date) => {
		setValue("date", date);
	};
	const currentSpecialty = AppStore.UserBroadSpecialty;
	/*useEffect(() => {
		//TODO: This is a hack to set the default value of faculty in the form
		if (!caseLogData) {
			const defaultFaculty = prefilledData?.faculty?.[0]?.name;
			setValue("faculty", defaultFaculty);
		}
	}, []);*/

	console.log("data for edit", caseLogData);
	console.log("prefilledData Mudit test", prefilledData);
	const rotationForEdit = caseLogData?.rotation;
	const rotations = prefilledData?.rotations;
	const hospital = caseLogData?.hospital ?? prefilledData?.hospital;
	const activeRotation = rotations ? rotations[rotations.length - 1] : null;
	console.log("activeRotation", activeRotation);
	const activeRotationFrom = activeRotation ? format(parseISO(activeRotation?.from), "dd MMM yyyy") : null;
	const activeRotationTo = activeRotation ? format(parseISO(activeRotation?.to), "dd MMM yyyy") : null;
	const activeRotationText = activeRotation ? `${activeRotation.department}` : "No Rotation";
	return (
		<VStack gap='$2'>
			{currentSpecialty === "Anaesthesiology" ? (
				<VStack pl='$5' pr='$5' width={"$100%"} gap='$2'>
					<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
						Rotation
					</Text>
					<Input variant='outline' size='sm' isDisabled={true}>
						<InputField value={rotationForEdit ?? activeRotationText} />
					</Input>
				</VStack>
			) : (
				<Box></Box>
			)}
			<VStack pl='$5' pr='$5' width={"$100%"} gap='$2'>
				<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
					Hospital
				</Text>
				<Input variant='outline' size='sm' isDisabled={true}>
					<InputField value={hospital} />
				</Input>
			</VStack>
			<VStack width={"$100%"} pl='$5' pr='$5' gap='$2'>
				<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
					Date
				</Text>
				<Button onPress={() => setOpen(true)} justifyContent='space-between' variant='date'>
					<ButtonText>{format(new Date(date), "dd / MM / yyyy")}</ButtonText>
					<ButtonIcon as={Ionicons} size={20} name='calendar' color='#367B71' />
				</Button>
			</VStack>
			<VStack width={"$100%"} pl='$5' pr='$5' gap='$2'>
				<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
					Faculty
				</Text>
				<Box>
					<Controller
						control={control}
						key='faculty'
						name='faculty'
						render={({ field: { onChange, onBlur, value } }) => {
							console.log("Faculty >> Select value >> ", value);
							return (
								<Select
									onBlur={onBlur}
									isDisabled={readOnlyFaculty}
									isReadOnly={readOnlyFaculty}
									onValueChange={onChange}
									selectedValue={caseLogData?.faculty || value}>
									<SelectTrigger variant='outline' size='sm'>
										<SelectInput placeholder={`Faculty`} />
										<SelectIcon mr='$3'>{!readOnly && <Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent>
											<Text padding={10} size='xl'>
												Faculties
											</Text>
											<Divider borderWidth={0.1} />
											{prefilledData?.faculty.map((item) => {
												console.log("Faculty >> SelectItem >> ", item);
												return <SelectItem key={item?.id} label={item?.name} value={item?.name} />;
											})}
										</SelectContent>
									</SelectPortal>
								</Select>
							);
						}}
					/>
				</Box>
			</VStack>
			<HStack width={"$100%"} pl='$5' pr='$5' gap='$2' flexWrap='wrap' justifyContent='space-between'>
				{formFields.map((field, index) => {
					if (field.type === "select-single") {
						return (
							<VStack width={field.width ?? "$100%"} gap='$2'>
								<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
									{field.name}
								</Text>
								<Box>
									<Controller
										control={control}
										key={field.uid}
										name={field.uid}
										rules={{
											required: false,
										}}
										render={({ field: { onChange, onBlur, value } }) => {
											return (
												<Select onBlur={onBlur} isReadOnly={readOnly} onValueChange={onChange} selectedValue={value}>
													<SelectTrigger variant='outline' size='sm'>
														<SelectInput placeholder={field.name} />
														<SelectIcon mr='$3'>{!readOnly && <Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
													</SelectTrigger>
													<SelectPortal>
														<SelectBackdrop />
														<SelectContent>
															<Text padding={10} size='xl'>
																{field.name}
															</Text>
															<Divider borderWidth={0.1} />
															{field.options.map((option, index) => {
																return <SelectItem key={option.value} label={option.label} value={option.value} />;
															})}
														</SelectContent>
													</SelectPortal>
												</Select>
											);
										}}
									/>
								</Box>
							</VStack>
						);
					} else if (field.type === "text" || field.type === "number") {
						return (
							<VStack width={field.width ?? "$100%"} gap='$2'>
								<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
									{field.name}
								</Text>
								<Box alignItems='center'>
									<Controller
										control={control}
										key={field.uid}
										name={field.uid}
										rules={{
											required: false,
										}}
										render={({ field: { onChange, onBlur, value } }) => {
											return (
												<Input variant='outline' size='sm'>
													<InputField
														keyboardType={field.type === "number" ? "number-pad" : "default"}
														onChangeText={onChange}
														value={value}
														placeholder={field.name}
													/>
												</Input>
											);
										}}
									/>
								</Box>
							</VStack>
						);
					}
				})}
			</HStack>
			<DatePicker
				modal
				open={open}
				theme='light'
				date={date}
				onConfirm={(date) => {
					setDate(date);
					setOpen(false);
					handelSetDate(date);
				}}
				onCancel={() => {
					setOpen(false);
				}}
				mode='date'
				title='Select Date'
				dividerColor='#367B71'
			/>
		</VStack>
	);
};

export default observer(CaselogDropDownOptions);
