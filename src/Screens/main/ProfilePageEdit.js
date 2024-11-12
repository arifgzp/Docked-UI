import { CheckIcon, CheckboxGroup, CheckboxIndicator, InputIcon, KeyboardAvoidingView, SelectDragIndicatorWrapper } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import { ChevronDown } from "lucide-react-native";
import DatePicker from "react-native-date-picker";
import {
	Box,
	Icon,
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
import { ImageAssets } from "../../../assets/Assets";
import { Image } from "@gluestack-ui/themed";
import appStoreInstance from "../../stores/AppStore";
import { Divider } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectItem } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { ButtonIcon } from "@gluestack-ui/themed";
import { useQuery } from "../../models";
import Loader from "../../components/Loader";
import { observer } from "mobx-react";
import { useIsFocused } from "@react-navigation/native";
import { SelectScrollView } from "@gluestack-ui/themed";
import { SelectDragIndicator } from "@gluestack-ui/themed";
import { InputSlot } from "@gluestack-ui/themed";

const designation = [
	{ label: "Head of Department", value: "Head of Department" },
	{ label: "Professor", value: "Professor" },
	{ label: "Additional Professor", value: "Additional Professor" },
	{ label: "Associate Professor", value: "Associate Professor" },
	{ label: "Assistant Professor", value: "Assistant Professor" },
	{ label: "Reader", value: "Reader" },
	{ label: "Senior Lecturer", value: "Senior Lecturer" },
	{ label: "Lecturer", value: "Lecturer" },
	{ label: "Senior Consultant", value: "Senior Consultant" },
	{ label: "Junior Consultant", value: "Junior Consultant" },
	{ label: "Tutor", value: "Tutor" },
	{ label: "Senior Resident", value: "Senior Resident" },
	{ label: "Junior Resident", value: "Junior Resident" },
	{ label: "Others", value: "Others" },
];

const city = [
	{ label: "Mumbai", value: "Mumbai" },
	{ label: "Delhi", value: "Delhi" },
	{ label: "Bangalore", value: "Bangalore" },
	{ label: "Chennai", value: "Chennai" },
	{ label: "Hyderabad", value: "Hyderabad" },
];

const medicalCouncilName = [
	{ label: "IIT", value: "IIT" },
	{ label: "AIIMS", value: "AIIMS" },
	{ label: "JIPMER", value: "JIPMER" },
	{ label: "AFMC", value: "AFMC" },
	{ label: "CMC", value: "CMC" },
];
const medicalRegistrationNumber = [
	{ label: "MD2523", value: "MD2523" },
	{ label: "MD2524", value: "MD2524" },
	{ label: "MD2525", value: "MD2525" },
	{ label: "MD2526", value: "MD2526" },
	{ label: "MD2527", value: "MD2527" },
];

const specialtyList = {
	Anaesthesiology: {
		SuperSpeciality: [
			{
				label: "Critical Care Anesthesiology",
				value: "Critical Care Anesthesiology",
			},
			{
				label: "Pediatric Anesthesiology",
				value: "Pediatric Anesthesiology",
			},
			{
				label: "Cardiac Anaesthesiology",
				value: "Cardiac Anaesthesiology",
			},
			{
				label: "Neuro-anaesthesiology",
				value: "Neuro-anaesthesiology",
			},
			{
				label: "Transplant Anaesthesia",
				value: "Transplant Anaesthesia",
			},
			{
				label: "Obstetric Anaesthesiology",
				value: "Obstetric Anaesthesiology",
			},
			{
				label: "Pain Medicine",
				value: "Pain Medicine",
			},
			{
				label: "Regional Anaesthesia",
				value: "Regional Anaesthesia",
			},
		],
		SubSpeciality: [],
	},
	Orthodontics: {
		SuperSpeciality: [],
		SubSpeciality: [],
	},
	Orthopaedics: {
		SuperSpeciality: [
			{
				label: "Podiatry",
				value: "Podiatry",
			},
			{
				label: "Hand Surgery",
				value: "Hand Surgery",
			},
			{
				label: "Paediatric Orthopaedics",
				value: "Paediatric Orthopaedics",
			},
			{
				label: "Spine Surgery",
				value: "Spine Surgery",
			},
			{
				label: "Orthopaedic Oncology",
				value: "Orthopaedic Oncology",
			},
			{
				label: "Trauma Surgery",
				value: "Trauma Surgery",
			},
			{
				label: "Shoulder & Elbow Surgery",
				value: "Shoulder & Elbow Surgery",
			},
			{
				label: "Hip & Knee Surgery",
				value: "Hip & Knee Surgery",
			},
			{
				label: "Joint Replacement",
				value: "Joint Replacement",
			},
			{
				label: "Sports",
				value: "Sports",
			},
		],
		SubSpeciality: [],
	},
	OralMedicineAndRadiology: {
		SuperSpeciality: [],
		SubSpeciality: [],
	},
};

const ProfilePageEdit = ({ navigation }) => {
	const { control, handleSubmit, formState, reset, watch, setValue } = useForm({
		defaultValues: {
			superSpecialty: "",
			subSpecialty: "",
			designation: "",
			designationOthers: "",
			workPlace: "",
			city: "",
			medicalCouncilName: "",
			yearOfRegistration: new Date(),
			medicalRegistrationNumber: "",
		},
	});
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(
		appStoreInstance.YearOfRegistration ? format(new Date(appStoreInstance.YearOfRegistration), "dd / MM / yyyy") : "--/--/--"
	);
	const [dateForModal, setDateForModal] = useState(appStoreInstance.YearOfRegistration ? new Date(appStoreInstance.YearOfRegistration) : new Date());
	const handelSetDate = (date) => {
		setValue("yearOfRegistration", date);
	};

	const handleClearDesignationOthersInputField = () => {
		setValue("designationOthers", "");
	};

	const handleClearWorkPlaceInputField = () => {
		setValue("workPlace", "");
	};

	const handleClearCityInputField = () => {
		setValue("city", "");
	};

	const handleClearMedicalCouncilNameInputField = () => {
		setValue("medicalCouncilName", "");
	};

	const handleClearMedicalRegistrationNumberInputField = () => {
		setValue("medicalRegistrationNumber", "");
	};

	const isFocused = useIsFocused();
	const currentSpecialty = appStoreInstance.UserBroadSpecialty;

	const handleOnSave = async (data) => {
		console.log("Finsished", data);
		data.broadSpecialty = appStoreInstance.UserBroadSpecialty;
		try {
			const query = store.updateUser(appStoreInstance.UserId, { set: data });
			console.log("Current Data", query);
			setQuery(query);
			const finishWizardProcessData = await query;
			if (finishWizardProcessData) {
				console.log("finishWizardProcessData", finishWizardProcessData);
				const userProfileData = finishWizardProcessData.updateUser.user[0];
				console.log("userProfileData", userProfileData);
				appStoreInstance.setSuperSpecialty(userProfileData.superSpecialty);
				appStoreInstance.setSubSpecialty(userProfileData.subSpecialty);
				appStoreInstance.setDesignation(userProfileData.designation);
				appStoreInstance.setDesignationOthers(userProfileData.designationOthers);
				appStoreInstance.setWorkPlace(userProfileData.workPlace);
				appStoreInstance.setCity(userProfileData.city);
				appStoreInstance.setMedicalCouncilName(userProfileData.medicalCouncilName);
				appStoreInstance.setYearOfRegistration(userProfileData.yearOfRegistration);
				appStoreInstance.setMedicalRegistrationNumber(userProfileData.medicalRegistrationNumber);
				navigation.goBack();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const fetchUserProfile = async () => {
			try {
				const query = store.fetchUserById(appStoreInstance.UserName);
				setQuery(query);
				const finishFetchingUserProfile = await query;
				if (finishFetchingUserProfile) {
					console.log("finishFetchingUserProfile", finishFetchingUserProfile);
					const fetchProfileData = finishFetchingUserProfile.queryUser[0];
					console.log("finishFetchingUserProfile  FOR PROFILE PAGE   superSpecialty", fetchProfileData.superSpecialty);
					appStoreInstance.setSuperSpecialty(fetchProfileData.superSpecialty);
					appStoreInstance.setSubSpecialty(fetchProfileData.subSpecialty);
					appStoreInstance.setDesignation(fetchProfileData.designation);
					appStoreInstance.setDesignationOthers(fetchProfileData.designationOthers);
					appStoreInstance.setWorkPlace(fetchProfileData.workPlace);
					appStoreInstance.setCity(fetchProfileData.city);
					appStoreInstance.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
					appStoreInstance.setYearOfRegistration(fetchProfileData.yearOfRegistration);
					appStoreInstance.setMedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
					appStoreInstance.setImagePath(fetchProfileData.imagePath);
					reset({
						superSpecialty: fetchProfileData.superSpecialty,
						subSpecialty: fetchProfileData.subSpecialty,
						designation: fetchProfileData.designation,
						designationOthers: fetchProfileData.designationOthers,
						workPlace: fetchProfileData.workPlace,
						city: fetchProfileData.city,
						medicalCouncilName: fetchProfileData.medicalCouncilName,
						yearOfRegistration: fetchProfileData.yearOfRegistration,
						medicalRegistrationNumber: fetchProfileData.medicalRegistrationNumber,
					});
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (isFocused) {
			fetchUserProfile();
		}
	}, [isFocused]);

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader apiLoadingInfo={appStoreInstance.isLoading} queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box h='$full' p={10} pl={15} flex={1} backgroundColor='$secondaryBackground'>
					<ScrollView keyboardShouldPersistTaps='handled'>
						<VStack mb={"$20%"} space='xl'>
							<Box>
								<VStack space='md'>
									<Text fontFamily='Inter_Bold' color='#000' size='sm	'>
										Your Expertise
									</Text>
									<VStack>
										<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
											Broad Speciality
										</Text>
										<Text size='xs'>{appStoreInstance.UserBroadSpecialty ? appStoreInstance.UserBroadSpecialty : "—"}</Text>
									</VStack>
									<HStack w='$100%'>
										<VStack w='$50%'>
											<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
												Super Speciality
											</Text>
											<Box w='$90%'>
												<Controller
													control={control}
													key='superSpecialty'
													name='superSpecialty'
													rules={{
														required: false,
													}}
													render={({ field: { onChange, onBlur, value } }) => {
														let options = specialtyList[appStoreInstance.UserBroadSpecialty].SuperSpeciality;
														return (
															<Select
																isDisabled={currentSpecialty === "Orthodontics" ? true : false}
																onBlur={onBlur}
																onValueChange={onChange}
																selectedValue={value}>
																<SelectTrigger variant='outline' size='sm'>
																	<SelectInput placeholder='Super Specialty' />
																	<SelectIcon mr='$3'>{<Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
																</SelectTrigger>
																<SelectPortal>
																	<SelectBackdrop />
																	<SelectContent p='$0'>
																		<Text fontFamily='Inter_SemiBold' padding={10} size='lg'>
																			Super Specialty
																		</Text>
																		<Divider borderWidth={0.1} />
																		<SelectScrollView>
																			{options.map((option, index) => {
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
											<Box alignItems='center'>
												<Box>{formState.errors.superSpecialty && <Text color='#DE2E2E'>This is required.</Text>}</Box>
											</Box>
										</VStack>
										<VStack w='$50%'>
											<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
												Sub Speciality
											</Text>
											<Box w='$90%'>
												<Controller
													control={control}
													key='subSpecialty'
													name='subSpecialty'
													rules={{
														required: false,
													}}
													render={({ field: { onChange, onBlur, value } }) => {
														let options = specialtyList[appStoreInstance.UserBroadSpecialty].SubSpeciality;

														return (
															<Select isDisabled={true} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
																<SelectTrigger variant='outline' size='sm'>
																	<SelectInput placeholder='Sub Specialty' />
																	<SelectIcon mr='$3'>{<Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
																</SelectTrigger>
																<SelectPortal>
																	<SelectBackdrop />
																	<SelectContent>
																		<Text fontFamily='Inter_SemiBold' padding={10} size='lg'>
																			Sub Specialty
																		</Text>
																		<Divider borderWidth={0.1} />
																		{options.map((option, index) => {
																			return (
																				<SelectItem
																					bg={index % 2 === 0 ? "$warmGray100" : "#FFF"}
																					key={option.value}
																					label={option.label}
																					value={option.value}
																				/>
																			);
																		})}
																	</SelectContent>
																</SelectPortal>
															</Select>
														);
													}}
												/>
											</Box>
											<Box alignItems='center'>
												<Box>{formState.errors.subSpecialty && <Text color='#DE2E2E'>This is required.</Text>}</Box>
											</Box>
										</VStack>
									</HStack>
								</VStack>
							</Box>
							<Divider />
							<Box>
								<VStack space='md'>
									<Text fontFamily='Inter_Bold' color='#000' size='sm	'>
										Work
									</Text>
									<VStack>
										<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
											Designation
										</Text>
										<Box w='$95%'>
											<Controller
												control={control}
												key='designation'
												name='designation'
												rules={{
													required: false,
												}}
												render={({ field: { onChange, onBlur, value } }) => {
													let options = designation;

													return (
														<Select onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
															<SelectTrigger variant='outline' size='sm'>
																<SelectInput placeholder='Designation' />
																<SelectIcon mr='$3'>{<Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
															</SelectTrigger>
															<SelectPortal>
																<SelectBackdrop />
																<SelectContent p='$0'>
																	<Text fontFamily='Inter_SemiBold' padding={10} size='lg'>
																		Designation
																	</Text>
																	<Divider borderWidth={0.1} />
																	<SelectScrollView>
																		{designation.map((option, index) => {
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
										<Box alignItems='center'>
											<Box>{formState.errors.designation && <Text color='#DE2E2E'>This is required.</Text>}</Box>
										</Box>
									</VStack>
									{watch("designation") === "Others" && (
										<Box width={"$95%"}>
											<Text size='xs'>Please specify your other Designation</Text>
											<Box>
												<Controller
													control={control}
													key={"designationOthers"}
													name={"designationOthers"}
													rules={{
														required: false,
													}}
													render={({ field: { onChange, onBlur, value } }) => {
														return (
															<Input size='sm' variant='outline'>
																<InputField onChangeText={onChange} value={value} placeholder={"Other designation"} />
																{watch("designationOthers") !== "" && (
																	<InputSlot pr='$3' onPress={handleClearDesignationOthersInputField}>
																		<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																	</InputSlot>
																)}
															</Input>
														);
													}}
												/>
											</Box>
										</Box>
									)}
									<HStack w='$100%'>
										<VStack w='$50%'>
											<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
												Workplace
											</Text>
											<Box w='$90%'>
												<Controller
													control={control}
													key='workPlace'
													name='workPlace'
													rules={{
														required: false,
													}}
													render={({ field: { onChange, onBlur, value } }) => {
														return (
															<Input variant='outline' size='sm'>
																<InputField onChangeText={onChange} value={value} placeholder='Work Place' />
																{watch("workPlace") !== "" && (
																	<InputSlot pr='$3' onPress={handleClearWorkPlaceInputField}>
																		<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																	</InputSlot>
																)}
															</Input>
														);
													}}
												/>
											</Box>
											<Box alignItems='center'>
												<Box>{formState.errors.workPlace && <Text color='#DE2E2E'>This is required.</Text>}</Box>
											</Box>
										</VStack>
										<VStack w='$50%'>
											<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
												City
											</Text>
											<Box w='$90%'>
												<Controller
													control={control}
													key='city'
													name='city'
													rules={{
														required: false,
													}}
													render={({ field: { onChange, onBlur, value } }) => {
														let options = city;
														return (
															<Input variant='outline' size='sm'>
																<InputField onChangeText={onChange} value={value} placeholder='City' />
																{watch("city") !== "" && (
																	<InputSlot pr='$3' onPress={handleClearCityInputField}>
																		<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																	</InputSlot>
																)}
															</Input>
														);
													}}
												/>
											</Box>
											<Box alignItems='center'>
												<Box>{formState.errors.city && <Text color='#DE2E2E'>This is required.</Text>}</Box>
											</Box>
										</VStack>
									</HStack>
								</VStack>
							</Box>
							<Divider />
							<Box>
								<VStack space='md'>
									<HStack alignItems='center' justifyContent='space-between'>
										<Text fontFamily='Inter_Bold' color='#000' size='sm	'>
											Medical Documentation
										</Text>
										<Button size='sm' variant='link'>
											<ButtonText color='#CC3F0C' underline>
												Get it Verified
											</ButtonText>
										</Button>
									</HStack>
									<VStack>
										<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
											Medical Council Name
										</Text>
										<Box w='$95%'>
											<Controller
												control={control}
												key='medicalCouncilName'
												name='medicalCouncilName'
												rules={{
													required: false,
												}}
												render={({ field: { onChange, onBlur, value } }) => {
													let options = medicalCouncilName;
													return (
														<Input variant='outline' size='sm'>
															<InputField onChangeText={onChange} value={value} placeholder='Medical Council Name' />
															{watch("medicalCouncilName") !== "" && (
																<InputSlot pr='$3' onPress={handleClearMedicalCouncilNameInputField}>
																	<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																</InputSlot>
															)}
														</Input>
													);
												}}
											/>
										</Box>
										<Box alignItems='center'>
											<Box>{formState.errors.medicalCouncilName && <Text color='#DE2E2E'>This is required.</Text>}</Box>
										</Box>
									</VStack>
									<VStack>
										<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
											Year of Registration
										</Text>
										<Button w='$95%' onPress={() => setOpen(true)} justifyContent='space-between' variant='date'>
											<ButtonText>Year - {date}</ButtonText>
											<ButtonIcon as={Ionicons} size={20} name='calendar' color='#367B71' />
										</Button>
									</VStack>
									<VStack>
										<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
											Medical Registration Number
										</Text>
										<Box w='$95%'>
											<Controller
												control={control}
												key='medicalRegistrationNumber'
												name='medicalRegistrationNumber'
												rules={{
													required: false,
												}}
												render={({ field: { onChange, onBlur, value } }) => {
													let options = medicalRegistrationNumber;
													return (
														<Input variant='outline' size='sm'>
															<InputField onChangeText={onChange} value={value} placeholder='Medical Registration Number' />
															{watch("medicalRegistrationNumber") !== "" && (
																<InputSlot pr='$3' onPress={handleClearMedicalRegistrationNumberInputField}>
																	<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																</InputSlot>
															)}
														</Input>
													);
												}}
											/>
										</Box>
										<Box alignItems='center'>
											<Box>{formState.errors.medicalRegistrationNumber && <Text color='#DE2E2E'>This is required.</Text>}</Box>
										</Box>
									</VStack>
								</VStack>
							</Box>
							<Divider />
							<Box>
								<Button onPress={handleSubmit(handleOnSave)} size='sm' variant='primary'>
									<ButtonText pr={2} pl={2}>
										Save
									</ButtonText>
								</Button>
							</Box>
						</VStack>
					</ScrollView>
					<DatePicker
						modal
						open={open}
						theme='light'
						date={dateForModal}
						onConfirm={(dateForModal) => {
							setDate(format(new Date(dateForModal), "dd / MM / yyyy"));
							setOpen(false);
							handelSetDate(dateForModal);
						}}
						onCancel={() => {
							setOpen(false);
						}}
						mode='date'
					/>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(ProfilePageEdit);
