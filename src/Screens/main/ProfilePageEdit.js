import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
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

const designation = [
	{ label: "Doctor", value: "Doctor" },
	{ label: "Consultant", value: "Consultant" },
	{ label: "Surgeon", value: "Surgeon" },
	{ label: "Resident", value: "Resident" },
	{ label: "Specialist", value: "Specialist" },
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
				value: "CriticalCareAnesthesiology",
			},
			{
				label: "Pediatric Anesthesiology",
				value: "PediatricAnesthesiology",
			},
			{
				label: "Cardiac Anaesthesiology",
				value: "CardiacAnaesthesiology",
			},
			{
				label: "Neuro-anaesthesiology",
				value: "Neuro-anaesthesiology",
			},
			{
				label: "Transplant Anaesthesia",
				value: "TransplantAnaesthesia",
			},
			{
				label: "Obstetric Anaesthesiology",
				value: "ObstetricAnaesthesiology",
			},
			{
				label: "Pain Medicine",
				value: "PainMedicine",
			},
			{
				label: "Regional Anaesthesia",
				value: "RegionalAnaesthesia",
			},
		],
		SubSpeciality: [],
	},
	Orthodontics: {
		SuperSpeciality: [
			{
				label: "Craniofacial Orthodontics",
				value: "CraniofacialOrthodontics",
			},
			{
				label: "Surgical Orthodontics",
				value: "SurgicalOrthodontics",
			},
			{
				label: "Adult Orthodontics",
				value: "AdultOrthodontics",
			},
			{
				label: "Pediatric Orthodontics",
				value: "PediatricOrthodontics",
			},
			{
				label: "Lingual Orthodontics",
				value: "LingualOrthodontics",
			},
			{
				label: "Clear Aligner Therapy",
				value: "ClearAlignerTherapy",
			},
		],
		SubSpeciality: [],
	},
	Orthopaedics: {
		SuperSpeciality: [
			{
				label: "Joint Replacement Surgery",
				value: "JointReplacementSurgery",
			},
			{
				label: "Sports Medicine",
				value: "SportsMedicine",
			},
			{
				label: "Spine Surgery",
				value: "SpineSurgery",
			},
			{
				label: "Pediatric Orthopaedics",
				value: "PediatricOrthopaedics",
			},
			{
				label: "Orthopaedic Oncology",
				value: "OrthopaedicOncology",
			},
			{
				label: "Trauma Surgery",
				value: "TraumaSurgery",
			},
			{
				label: "Hand Surgery",
				value: "HandSurgery",
			},
		],
		SubSpeciality: [],
	},
};

const ProfilePageEdit = ({ navigation }) => {
	const { control, handleSubmit, formState, reset, watch, setValue } = useForm({
		defaultValues: {
			superSpecialty: "",
			subSpecialty: "",
			designation: "",
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
	const [date, setDate] = useState(appStoreInstance.YearOfRegistration ? new Date(appStoreInstance.YearOfRegistration) : new Date());
	const handelSetDate = (date) => {
		setValue("yearOfRegistration", date);
	};
	const isFocused = useIsFocused();

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
				appStoreInstance.setWorkPlace(userProfileData.workPlace);
				appStoreInstance.setCity(userProfileData.city);
				appStoreInstance.setMedicalCouncilName(userProfileData.medicalCouncilName);
				appStoreInstance.setYearOfRegistration(userProfileData.yearOfRegistration);
				appStoreInstance.setmedicalRegistrationNumber(userProfileData.medicalRegistrationNumber);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!appStoreInstance.SuperSpecialty) {
			console.log("appStoreInstance.UserName", appStoreInstance.UserName);
			const fetchUserProfile = async () => {
				try {
					const query = store.fetchUserById(appStoreInstance.UserName);
					setQuery(query);
					const finishFetchingUserProfile = await query;
					if (finishFetchingUserProfile) {
						console.log("finishFetchingUserProfile", finishFetchingUserProfile);
						const fetchProfileData = finishFetchingUserProfile.queryUser[0];
						console.log("finishFetchingUserProfile  FOR PROFILE PAGE   CITY", fetchProfileData.city);
						appStoreInstance.setSuperSpecialty(fetchProfileData.superSpecialty);
						appStoreInstance.setSubSpecialty(fetchProfileData.subSpecialty);
						appStoreInstance.setDesignation(fetchProfileData.designation);
						appStoreInstance.setWorkPlace(fetchProfileData.workPlace);
						appStoreInstance.setCity(fetchProfileData.city);
						appStoreInstance.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
						appStoreInstance.setYearOfRegistration(fetchProfileData.yearOfRegistration);
						appStoreInstance.setmedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
						setValue("superSpecialty", appStoreInstance.SuperSpecialty);
						setValue("subSpecialty", appStoreInstance.SubSpecialty);
						setValue("designation", appStoreInstance.Designation);
						setValue("workPlace", appStoreInstance.Workplace);
						setValue("city", appStoreInstance.City);
						setValue("medicalCouncilName", appStoreInstance.MedicalCouncilName);
						setValue("yearOfRegistration", appStoreInstance.YearOfRegistration);
						setValue("medicalRegistrationNumber", appStoreInstance.MedicalRegistrationNumber);
					}
				} catch (error) {
					console.log(error);
				}
			};
			if (isFocused) {
				fetchUserProfile();
			}
		} else {
			setValue("superSpecialty", appStoreInstance.SuperSpecialty);
			setValue("subSpecialty", appStoreInstance.SubSpecialty);
			setValue("designation", appStoreInstance.Designation);
			setValue("workPlace", appStoreInstance.Workplace);
			setValue("city", appStoreInstance.City);
			setValue("medicalCouncilName", appStoreInstance.MedicalCouncilName);
			setValue("yearOfRegistration", appStoreInstance.YearOfRegistration);
			setValue("medicalRegistrationNumber", appStoreInstance.MedicalRegistrationNumber);
		}
	}, [isFocused]);

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader apiLoadingInfo={appStoreInstance.isLoading} queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box h='$full' p={10} pl={15} flex={1} backgroundColor='$secondaryBackground'>
					<ScrollView>
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
															<Select onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
																<SelectTrigger variant='outline' size='sm'>
																	<SelectInput placeholder='Super Specialty' />
																	<SelectIcon mr='$3'>{<Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
																</SelectTrigger>
																<SelectPortal>
																	<SelectBackdrop />
																	<SelectContent>
																		<Text padding={10} size='xl'>
																			Super Specialty
																		</Text>
																		<Divider borderWidth={0.1} />
																		{options.map((option, index) => {
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
															<Select onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
																<SelectTrigger variant='outline' size='sm'>
																	<SelectInput placeholder='Sub Specialty' />
																	<SelectIcon mr='$3'>{<Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
																</SelectTrigger>
																<SelectPortal>
																	<SelectBackdrop />
																	<SelectContent>
																		<Text padding={10} size='xl'>
																			Sub Specialty
																		</Text>
																		<Divider borderWidth={0.1} />
																		{options.map((option, index) => {
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
																<SelectIcon mr='$3'>{<Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
															</SelectTrigger>
															<SelectPortal>
																<SelectBackdrop />
																<SelectContent>
																	<Text padding={10} size='xl'>
																		Designation
																	</Text>
																	<Divider borderWidth={0.1} />
																	{designation.map((option, index) => {
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
											<Box>{formState.errors.designation && <Text color='#DE2E2E'>This is required.</Text>}</Box>
										</Box>
									</VStack>
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
															<Select onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
																<SelectTrigger variant='outline' size='sm'>
																	<SelectInput placeholder='City' />
																	<SelectIcon mr='$3'>{<Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
																</SelectTrigger>
																<SelectPortal>
																	<SelectBackdrop />
																	<SelectContent>
																		<Text padding={10} size='xl'>
																			City
																		</Text>
																		<Divider borderWidth={0.1} />
																		{options.map((option, index) => {
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
														<Select onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
															<SelectTrigger variant='outline' size='sm'>
																<SelectInput placeholder='Medical Council Name' />
																<SelectIcon mr='$3'>{<Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
															</SelectTrigger>
															<SelectPortal>
																<SelectBackdrop />
																<SelectContent>
																	<Text padding={10} size='xl'>
																		Medical Council Name
																	</Text>
																	<Divider borderWidth={0.1} />
																	{options.map((option, index) => {
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
											<Box>{formState.errors.medicalCouncilName && <Text color='#DE2E2E'>This is required.</Text>}</Box>
										</Box>
									</VStack>
									<VStack>
										<Text color='rgba(81, 81, 81, 0.7)' size='xs'>
											Year of Registration
										</Text>
										<Button w='$95%' onPress={() => setOpen(true)} justifyContent='space-between' variant='date'>
											<ButtonText>Year - {format(new Date(date), "d/MM/yyyy")}</ButtonText>
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
														<Select onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
															<SelectTrigger variant='outline' size='sm'>
																<SelectInput placeholder='Medical Registration Number' />
																<SelectIcon mr='$3'>{<Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
															</SelectTrigger>
															<SelectPortal>
																<SelectBackdrop />
																<SelectContent>
																	<Text padding={10} size='xl'>
																		Medical Registration Number
																	</Text>
																	<Divider borderWidth={0.1} />
																	{options.map((option, index) => {
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
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(ProfilePageEdit);