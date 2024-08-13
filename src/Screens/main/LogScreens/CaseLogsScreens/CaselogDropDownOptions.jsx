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
import appStoreInstance from "../../../../stores/AppStore";

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
	// inputRefs,
	// scrollToInput,
}) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [open, setOpen] = useState(false);
	const [showActionSheet, setShowActionsheet] = useState(false);
	const [date, setDate] = useState(caseLogData?.date ? format(new Date(caseLogData.date), "dd / MM / yyyy") : "--/--/--");
	const [dateForModal, setDateForModal] = useState(caseLogData?.date ? new Date(caseLogData?.date) : new Date());

	const handelSetDate = (date) => {
		setValue("date", date);
		appStoreInstance.setIsFormDirty(true);
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
								<Select
									// ref={inputRefs.hospital}
									// onFocus={() => scrollToInput(inputRefs.hospital)}
									onBlur={onBlur}
									isDisabled={readOnlyFaculty}
									isReadOnly={readOnlyFaculty}
									onValueChange={onChange}
									selectedValue={caseLogData?.hospital || value}>
									<SelectTrigger variant='outline' size='sm'>
										<SelectInput />
										<SelectIcon mr='$3'>{!readOnly && <Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent p='$0'>
											<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
												Hospitals
											</Text>
											<Divider borderWidth={0.1} />
											<SelectScrollView>
												{prefilledData?.hospital.map((item, index) => {
													return <SelectItem bg={index % 2 === 0 ? "$warmGray100" : "#FFF"} key={item?.id} label={item?.name} value={item?.name} />;
												})}
											</SelectScrollView>
											<SelectDragIndicatorWrapper>
												<SelectDragIndicator />
											</SelectDragIndicatorWrapper>
										</SelectContent>
									</SelectPortal>
								</Select>
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
								<Select
									// ref={inputRefs.faculty}
									// onFocus={() => scrollToInput(inputRefs.faculty)}
									onBlur={onBlur}
									isDisabled={readOnlyFaculty}
									isReadOnly={readOnlyFaculty}
									onValueChange={onChange}
									selectedValue={caseLogData?.faculty || value}>
									<SelectTrigger variant='outline' size='sm'>
										<SelectInput />
										<SelectIcon mr='$3'>{!readOnly && <Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent p='$0'>
											<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
												Faculties
											</Text>
											<Divider borderWidth={0.1} />
											<SelectScrollView>
												{prefilledData?.faculty.map((item, index) => {
													return (
														<SelectItem
															bg={index % 2 === 0 ? "$warmGray100" : "#FFF"}
															key={item?.id}
															label={`${item?.firstName || ""} ${item?.lastName || ""}`}
															value={`${item?.firstName || ""} ${item?.lastName || ""}`}
														/>
													);
												})}
											</SelectScrollView>
											<SelectDragIndicatorWrapper>
												<SelectDragIndicator />
											</SelectDragIndicatorWrapper>
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
												<Select
													// ref={inputRefs[field.uid]}
													// onFocus={() => scrollToInput(inputRefs[field.uid])}
													w='$100%'
													onBlur={onBlur}
													isReadOnly={readOnly}
													onValueChange={onChange}
													selectedValue={value}>
													<SelectTrigger variant='outline' size='sm'>
														<SelectInput />
														<SelectIcon mr='$3'>{!readOnly && <Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
													</SelectTrigger>
													<SelectPortal>
														<SelectBackdrop />
														<SelectContent p='$0'>
															<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
																{field.name}
															</Text>
															<Divider borderWidth={0.1} />
															<SelectScrollView>
																{field.options.map((option, index) => {
																	return (
																		<SelectItem
																			bg={index % 2 === 0 ? "$warmGray100" : "#FFF"}
																			key={option.value}
																			label={option.label}
																			value={option.value}
																		/>
																	);
																})}
															</SelectScrollView>
															<SelectDragIndicatorWrapper>
																<SelectDragIndicator />
															</SelectDragIndicatorWrapper>
														</SelectContent>
													</SelectPortal>
												</Select>
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
															<InputField onChangeText={onChange} value={value} />
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
													<InputField keyboardType={field.type === "number" ? "number-pad" : "default"} onChangeText={onChange} value={value} />
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
				onConfirm={(dateForModal) => {
					setDate(format(new Date(dateForModal), "dd / MM / yyyy"));
					setDateForModal(dateForModal);
					setOpen(false);
					handelSetDate(dateForModal);
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
