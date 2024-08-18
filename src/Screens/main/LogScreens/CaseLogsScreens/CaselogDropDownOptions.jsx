import { CheckIcon, CheckboxGroup, CheckboxIndicator, Divider, KeyboardAvoidingView, SelectScrollView } from "@gluestack-ui/themed";
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
import { useCallback, useEffect, useRef, useState } from "react";
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
import appStoreInstance from "../../../../stores/AppStore";
import CustomSelect from "../../../../components/CustomSelect";

const CaselogDropDownOptions = ({
	navigation,
	watch,
	control,
	formState,
	setValue,
	readOnly,
	prefilledData,
	formFields,
	readOnlyFaculty,
	caseLogData,
	inputRefs,
	scrollToInput,
	handleNext,
	openSelectField,
	setOpenSelectField,
	focusOnField,
	allFields,
}) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [open, setOpen] = useState(false);
	const [showActionSheet, setShowActionsheet] = useState(false);
	const [date, setDate] = useState(caseLogData?.date ? format(new Date(caseLogData.date), "dd / MM / yyyy") : "--/--/--");
	const [dateForModal, setDateForModal] = useState(caseLogData?.date ? new Date(caseLogData?.date) : new Date());
	const handleSelectPress = useCallback(
		(fieldUid) => {
			// Open the Select first
			setTimeout(() => {
				// Scroll to input after a delay to ensure the dropdown is visible
				scrollToInput(fieldUid);
			}, 100);
		},
		[scrollToInput]
	);

	const handelSetDate = (date) => {
		setValue("date", date);
		appStoreInstance.setIsFormDirty(true);
	};

	const handleHospitalSelect = (value) => {
		setValue("hospital", value);
		// Instead of calling handleNext, we'll open the date picker directly
		setOpen(true);
	};

	const handleDateSelect = (date) => {
		setDate(format(new Date(date), "dd / MM / yyyy"));
		setDateForModal(date);
		setOpen(false);
		handelSetDate(date);
		handleNext("date");
	};

	const handleFacultySelect = (value) => {
		setValue("faculty", value);
		handleNext("faculty");
	};

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === "outcome" && value.outcome === "Others") {
				// Delay to allow rendering of 'outcomeOther' field
				setTimeout(() => {
					scrollToInput("outcomeOther");
					focusOnField("outcomeOther");
				}, 100);
			}
		});
		return () => subscription.unsubscribe();
	}, [watch, scrollToInput, focusOnField]);

	const currentSpecialty = AppStore.UserBroadSpecialty;
	console.log("data for edit", caseLogData);
	console.log("prefilledData Mudit test", prefilledData);
	const rotationForEdit = caseLogData?.rotation;
	const rotations = prefilledData?.rotations;
	const hospital = caseLogData?.hospital ?? prefilledData?.hospital;
	const activeRotation = rotations ? rotations[rotations.length - 1] : null;
	console.log("activeRotation", activeRotation);
	const activeRotationFrom = activeRotation?.from ? format(parseISO(activeRotation.from), "dd MMM yyyy") : null;
	const activeRotationTo = activeRotation?.to ? format(parseISO(activeRotation.to), "dd MMM yyyy") : null;
	const activeRotationText = activeRotation?.department ? `${activeRotation.department}` : "No Rotation";
	return (
		<VStack gap='$2'>
			{currentSpecialty === "Orthodontics" ? (
				<Box></Box>
			) : (
				<VStack pl='$5' pr='$5' width={"$100%"} gap='$2'>
					<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
						Rotation
					</Text>
					<Input variant='outline' size='sm' isDisabled={true}>
						<InputField value={rotationForEdit ?? activeRotationText} />
					</Input>
				</VStack>
			)}
			<VStack pl='$5' pr='$5' width={"$100%"} gap='$2'>
				<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
					Hospital
				</Text>
				<Box>
					<Controller
						control={control}
						key='hospital'
						name='hospital'
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<CustomSelect
									field={{
										name: "Hospital",
										uid: "hospital",
										options: prefilledData?.hospital.map((item) => ({ label: item.name, value: item.name })),
									}}
									value={value}
									onChange={handleHospitalSelect}
									isOpen={openSelectField === "hospital"}
									onOpen={() => setOpenSelectField("hospital")}
									onClose={() => setOpenSelectField(null)}
									onSelect={() => {}} // This is handled by handleHospitalSelect
								/>
							);
						}}
					/>
				</Box>
			</VStack>
			<VStack width={"$100%"} pl='$5' pr='$5' gap='$2'>
				<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
					Date
				</Text>
				<Button onPress={() => setOpen(true)} justifyContent='space-between' variant='date'>
					<ButtonText>{date}</ButtonText>
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
							return (
								<CustomSelect
									field={{
										name: "Faculty",
										uid: "faculty",
										options: prefilledData?.faculty.map((item) => ({
											label: `${item?.firstName || ""} ${item?.lastName || ""}`,
											value: `${item?.firstName || ""} ${item?.lastName || ""}`,
										})),
									}}
									value={value}
									onChange={handleFacultySelect}
									isOpen={openSelectField === "faculty"}
									onOpen={() => setOpenSelectField("faculty")}
									onClose={() => setOpenSelectField(null)}
									onSelect={() => {}} // This is handled by handleFacultySelect
								/>
							);
						}}
					/>
				</Box>
			</VStack>
			<HStack width={"$100%"} pl='$5' pr='$5' gap='$2' flexWrap='wrap' justifyContent='space-between'>
				{formFields.map((field, index) => {
					if (field.type === "select-single") {
						return (
							<VStack key={field.uid} width={field.width ?? "$100%"} gap='$2'>
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
												<CustomSelect
													field={field}
													value={value}
													onChange={onChange}
													isOpen={openSelectField === field.uid}
													onOpen={() => setOpenSelectField(field.uid)}
													onClose={() => setOpenSelectField(null)}
													onSelect={handleNext}
												/>
											);
										}}
									/>
								</Box>
								{field.outcome && watch("outcome") === "Others" && (
									<VStack width='$100%' pt='$2' gap='$2'>
										<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
											Other Outcome
										</Text>
										<Box alignItems='center'>
											<Controller
												control={control}
												key='outcomeOther'
												name='outcomeOther'
												rules={{
													required: false,
												}}
												render={({ field: { onChange, onBlur, value } }) => {
													return (
														<Input variant='outline' size='sm'>
															<InputField
																ref={(el) => (inputRefs.current["outcomeOther"] = el)}
																onFocus={() => scrollToInput("outcomeOther")}
																onChangeText={onChange}
																value={value}
																onSubmitEditing={() => handleNext("outcomeOther")}
																returnKeyType='next'
																blurOnSubmit={false}
															/>
														</Input>
													);
												}}
											/>
										</Box>
									</VStack>
								)}
							</VStack>
						);
					} else if (field.type === "text" || field.type === "number") {
						return (
							<VStack key={field.uid} justifyContent='flex-end' width={field.width ?? "$100%"} gap='$2'>
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
														ref={(el) => (inputRefs.current[field.uid] = el)}
														onFocus={() => scrollToInput(field.uid)}
														keyboardType={field.type === "number" ? "number-pad" : "default"}
														onChangeText={onChange}
														value={value}
														onSubmitEditing={() => handleNext(field.uid)}
														returnKeyType='next'
														blurOnSubmit={false}
													/>
													{field.unit && (
														<InputSlot pr='$3'>
															<Text size='xs'>{field.unit}</Text>
														</InputSlot>
													)}
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
				date={dateForModal}
				onConfirm={handleDateSelect}
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
