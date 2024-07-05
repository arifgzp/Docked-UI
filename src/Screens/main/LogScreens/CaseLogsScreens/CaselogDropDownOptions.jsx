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

	useEffect(() => {
		//TODO: This is a hack to set the default value of faculty in the form
		if (!caseLogData) {
			const defaultFaculty = prefilledData?.faculty?.[0]?.name;
			setValue("faculty", defaultFaculty);
		}
	}, []);

	console.log("data for edit", caseLogData);
	//console.log("prefilledData Mudit test", prefilledData);
	const rotations = prefilledData?.rotations;
	const hospital = prefilledData?.hospital ?? caseLogData?.hospital;
	const activeRotation = rotations ? rotations[rotations.length - 1] : null;
	const activeRotationFrom = activeRotation ? format(parseISO(activeRotation?.from), "dd MMM yyyy") : null;
	const activeRotationTo = activeRotation ? format(parseISO(activeRotation?.to), "dd MMM yyyy") : null;
	const activeRotationText = activeRotation ? `${activeRotation.department}   (  ${activeRotationFrom}  -  ${activeRotationTo}  )` : "No Rotation";
	return (
		<VStack space='sm'>
			<VStack>
				<Box pl='$5' width={"$80%"}>
					<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
						Rotation
					</Text>
				</Box>
				<Box pl='$5' width={"$80%"}>
					<Text size='sm'>{activeRotationText}</Text>
				</Box>
			</VStack>
			<VStack>
				<Box pl='$5' width={"$80%"}>
					<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
						Hospital
					</Text>
				</Box>
				<Box pl='$5' width={"$80%"}>
					<Text size='sm'>{hospital}</Text>
				</Box>
			</VStack>
			<Box width={"$100%"} pl='$5' pr='$5'>
				<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
					Date
				</Text>
				<Button onPress={() => setOpen(true)} justifyContent='space-between' variant='date'>
					<ButtonText>Date - {format(new Date(date), "d/MM/yyyy")}</ButtonText>
					<ButtonIcon as={Ionicons} size={20} name='calendar' color='#367B71' />
				</Button>
			</Box>
			<Box width={"$100%"} pl='$5' pr='$5'>
				<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
					Faculty <Text color='#DE2E2E'>*</Text>
				</Text>
				<Box paddingBottom={10}>
					<Controller
						control={control}
						key='faculty'
						name='faculty'
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<Select onBlur={onBlur} isReadOnly={readOnlyFaculty} onValueChange={onChange} selectedValue={caseLogData?.faculty || value}>
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
												return <SelectItem key={item?.name} label={item?.name} value={item?.name} />;
											})}
										</SelectContent>
									</SelectPortal>
								</Select>
							);
						}}
					/>
				</Box>
				<Box alignItems='center'>
					<Box>{formState.errors.faculty && <Text color='#DE2E2E'>This is required.</Text>}</Box>
				</Box>
			</Box>
			{formFields.map((field, index) => {
				if (field.type === "select-single") {
					return (
						<Box width={"$100%"} pl='$5' pr='$5'>
							<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
								{field.name}
							</Text>
							<Box paddingBottom={10}>
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
							<Box alignItems='center'>
								<Box>{formState.errors[field.uid] && <Text color='#DE2E2E'>This is required.</Text>}</Box>
							</Box>
						</Box>
					);
				} else if (field.type === "text") {
					return (
						<Box pl='$5' pr='$5' width={"$100%"}>
							<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
								{field.name}
							</Text>
							<Box alignItems='center' paddingBottom={10}>
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
												<InputField onChangeText={onChange} value={value} placeholder={field.name} />
											</Input>
										);
									}}
								/>
							</Box>
							<Box alignItems='center'>
								<Box>{formState.errors[field.uid] && <Text color='#DE2E2E'>This is required.</Text>}</Box>
							</Box>
						</Box>
					);
				}
			})}
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
			/>
		</VStack>
	);
};

export default observer(CaselogDropDownOptions);
