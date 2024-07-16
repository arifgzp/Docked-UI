import {
	CheckIcon,
	CheckboxGroup,
	CheckboxIndicator,
	Divider,
	KeyboardAvoidingView,
	Select,
	SelectDragIndicator,
	SelectInput,
	SelectPortal,
	SelectScrollView,
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
	Toast,
	useToast,
	ToastTitle,
	ToastDescription,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { SelectIcon } from "@gluestack-ui/themed";
import DatePicker from "react-native-date-picker";
import { ChevronDown } from "lucide-react-native";
import { SelectBackdrop } from "@gluestack-ui/themed";
import { SelectItem, SelectContent } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import { format } from "date-fns";
import appStoreInstance from "../../../stores/AppStore";
import AppStore from "../../../stores/AppStore";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import Loader from "../../../components/Loader";
import { ButtonIcon } from "@gluestack-ui/themed";
import { Modal } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";
import { ModalContent } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { ModalCloseButton } from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";
import { ModalBody } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import { PhoneIcon } from "@gluestack-ui/themed";
import IsReadyLoader from "../../../components/IsReadyLoader";
import { useQuery } from "../../../models";
import useIsReady from "../../../hooks/useIsReady";
import { SelectDragIndicatorWrapper } from "@gluestack-ui/themed";
import { useIsFocused } from "@react-navigation/native";
import { rotationForAnesthesiology, rotationForOrthopaedics } from "../../../data/entity/RotationConfig";
import { designation } from "../../../data/entity/DesignationConfig";

const LogProfilePage = ({ navigation, route }) => {
	const { caseLogFormToGet } = route.params;
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
		setValue,
	} = useForm({
		defaultValues: {
			hospital: "",
			faculties: [],
			rotations: [],
			department: null,
			from: null,
			to: null,
		},
	});
	const isReady = useIsReady();
	const [showModal, setShowModal] = useState(false);
	const [modalView, setModalView] = useState("");
	const ref = useRef(null);
	const isFocused = useIsFocused();

	const {
		control: controlForFaculty,
		handleSubmit: handleSubmitForFaculty,
		formState: { errors: errorsForFaculty },
		reset: resetForFaculty,
		watch: watchForFaculty,
		setValue: setValueForFaculty,
	} = useForm({
		defaultValues: {
			facultyName: "",
			facultyDesignation: "",
			otherDesignation: "",
			facultyPhoneNumber: "",
		},
	});

	const toast = useToast();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [currentKey, setCurrentKey] = useState(null);
	const [fromOpen, setFromOpen] = useState(false);
	const [toOpen, setToOpen] = useState(false);
	const [fromDate, setFromDate] = useState("--/--/--");
	const [toDate, setToDate] = useState("--/--/--");
	const [facultyList, setFacultyList] = useState([]);
	const [editFacultyIndex, setEditFacultyIndex] = useState(null);
	const currentSpecialty = AppStore.UserBroadSpecialty;
	const logProfile = AppStore.UserLogProfile;

	const handleSetDate = (date, key) => {
		if (date instanceof Date && !isNaN(date)) {
			setValue(key, date);
		} else {
			console.error("Invalid date value");
		}
	};

	const handleOpenFaculty = () => {
		setModalView("faculty");
		setShowModal(true);
	};

	const handleEditFaculty = (faculty, index) => {
		console.log(faculty);
		setValueForFaculty("facultyName", faculty.name);
		setValueForFaculty("facultyDesignation", faculty.designation);
		setValueForFaculty("otherDesignation", faculty.otherDesignation);
		setValueForFaculty("facultyPhoneNumber", faculty.phoneNumber);
		setEditFacultyIndex(index);
		setModalView("faculty edit");
		setShowModal(true);
	};

	const handleSaveFaculty = () => {
		const newFaculty = {
			name: watchForFaculty("facultyName"),
			designation: watchForFaculty("facultyDesignation"),
			otherDesignation: watchForFaculty("otherDesignation"),
			phoneNumber: watchForFaculty("facultyPhoneNumber"),
		};
		setFacultyList([...facultyList, newFaculty]);
		setShowModal(false);
		resetForFaculty({
			facultyName: null,
			facultyDesignation: null,
			otherDesignation: null,
			facultyPhoneNumber: null,
		});
		reset({
			hospital: watch("hospital"),
			from: watch("from"),
			to: watch("to"),
		});
	};

	const handleUpdateFaculty = () => {
		const newFacultyList = [...facultyList];
		newFacultyList[editFacultyIndex] = {
			name: watchForFaculty("facultyName"),
			designation: watchForFaculty("facultyDesignation"),
			otherDesignation: watchForFaculty("otherDesignation"),
			phoneNumber: watchForFaculty("facultyPhoneNumber"),
		};
		setFacultyList(newFacultyList);
		setShowModal(false);
		resetForFaculty({
			facultyName: null,
			facultyDesignation: null,
			otherDesignation: null,
			facultyPhoneNumber: null,
		});
		reset({
			hospital: watch("hospital"),
			from: watch("from"),
			to: watch("to"),
		});
	};

	const handleOnSave = async () => {
		// Check if rotationList or facultyList is empty
		if (facultyList.length === 0) {
			// Raise an error indicating rotation or faculty cannot be empty
			toast.show({
				placement: "top",
				render: ({ id }) => {
					const toastId = "toast-" + id;
					return (
						<Toast nativeID={toastId} action='warning' variant='accent'>
							<VStack space='xs' mx='$4'>
								<ToastTitle>Alert</ToastTitle>
								<ToastDescription>Faculty cannot be empty.</ToastDescription>
							</VStack>
						</Toast>
					);
				},
			});
			return; // Exit function early
		}
		const rotationData = [
			{
				department: watch("department"),
				to: watch("to"),
				from: watch("from"),
			},
		];
		console.log("rotationData", rotationData);
		console.log("faculties", facultyList);
		let data;
		if (rotationData[0].department !== null && rotationData[0].from !== null && rotationData[0].to !== null) {
			console.log("data when there is rotation.....", rotationData);
			data = { faculties: facultyList, rotations: rotationData, hospital: watch("hospital") };
		} else {
			console.log("data when there is no ROTATION.....", rotationData);
			data = { faculties: facultyList, hospital: watch("hospital") };
		}

		console.log("caseLogFormToGet", caseLogFormToGet);
		try {
			const query = store.updateUserLogProfile(AppStore.UserId, {
				set: { logProfile: data },
			});
			setQuery(query);
			const finishUpdatingLogProfile = await query;
			if (finishUpdatingLogProfile) {
				console.log("finishUpdatingLogProfile for logprofile", finishUpdatingLogProfile);
				console.log("finishUpdatingLogProfile.updateUser.user[0].logProfile", finishUpdatingLogProfile.updateUser.user[0].logProfile);
				AppStore.setLogProfile(finishUpdatingLogProfile.updateUser.user[0].logProfile);

				console.log("Log Profile Navigating to ", caseLogFormToGet);
				if (caseLogFormToGet) {
					navigation.navigate("Plus", {
						screen: "CaseLogFormScreen",
						params: { caseLogFormToGet: caseLogFormToGet },
					});
				} else {
					navigation.goBack();
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const fetchLogProfile = async () => {
			try {
				const query = store.fetchUserLogProfile(AppStore.UserName);
				setQuery(query);
				const finishFetchingLogProfile = await query;
				if (finishFetchingLogProfile) {
					console.log("finishFetchingLogProfile", finishFetchingLogProfile);
					const userData = toJS(finishFetchingLogProfile.queryUser[0]);
					console.log("userData", userData);
					const facultiesList = userData.logProfile.faculties.map((faculty) => {
						delete faculty.id;
						delete faculty.__typename;
						return faculty;
					});
					const rotationsList = userData.logProfile.rotations.map((rotation) => {
						delete rotation.id;
						delete rotation.__typename;
						return rotation;
					});
					reset({
						hospital: userData.logProfile.hospital,
						department: userData.logProfile.rotations[0]?.department ? userData.logProfile.rotations[0]?.department : null,
						rotations: userData.logProfile.rotations[0],
					});
					setFacultyList(facultiesList);
					setFromDate(
						userData.logProfile.rotations[0]?.from ? format(new Date(userData.logProfile.rotations[0]?.from), "dd / MM / yyyy") : "--/--/--"
					);
					setToDate(userData.logProfile.rotations[0]?.to ? format(new Date(userData.logProfile.rotations[0]?.to), "dd / MM / yyyy") : "--/--/--");
					setValue("from", userData.logProfile.rotations[0]?.from ? userData.logProfile.rotations[0]?.from : null);
					setValue("to", userData.logProfile.rotations[0]?.to ? userData.logProfile.rotations[0]?.to : null);
					AppStore.setLogProfile(finishFetchingLogProfile.queryUser.user[0].logProfile);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchLogProfile();
	}, []);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$secondaryBackground' justifyContent='center' alignItems='center'>
					<ScrollView width={"$100%"}>
						<Box width={"$100%"} flex={3 / 4} alignItems='center' paddingTop={20} paddingBottom={20}>
							<VStack space='lg' width={"$100%"} p='$3' alignItems='center'>
								<Box w='$100%'>
									<VStack space='md' alignItems='center' paddingBottom={10}>
										<Text size='sm' alignSelf='flex-start' color='rgba(81, 81, 81, 0.7)'>
											Hospital <Text color='#DE2E2E'>*</Text>
										</Text>
										<Controller
											control={control}
											rules={{
												required: true,
											}}
											key='hospital'
											name='hospital'
											render={({ field: { onChange, onBlur, value } }) => {
												return (
													<Input variant='outline' size='sm'>
														<InputField onChangeText={onChange} value={value} placeholder='Hospital' />
													</Input>
												);
											}}
										/>
									</VStack>
									<Box alignItems='center'>
										<Box width={"$100%"}>{errors.hospital && <Text color='#DE2E2E'>This is required.</Text>}</Box>
									</Box>
								</Box>
								<Divider />
								<Box w='$100%'>
									<Text size='sm' alignSelf='flex-start' fontFamily='Inter_Bold'>
										Faculties
									</Text>
								</Box>
								<Box w='$100%'>
									<Modal
										isOpen={showModal}
										onClose={() => {
											setShowModal(false);
											resetForFaculty({
												facultyName: null,
												facultyDesignation: null,
												facultyPhoneNumber: null,
											});
										}}
										finalFocusRef={ref}>
										<ModalBackdrop />
										<ModalContent>
											{modalView === "faculty" ? (
												<Box>
													<HStack p='$3' justifyContent='space-between'>
														<Heading size='lg'>Create Faculty</Heading>
														<ModalCloseButton>
															<Icon as={CloseIcon} />
														</ModalCloseButton>
													</HStack>
													<Divider />
													<Box gap='$2' px='$3' pt='$3' pb='$6'>
														<Box gap='$1'>
															<Box>
																<Text size='xs'>Faculty name</Text>
															</Box>
															<Box>
																<Controller
																	control={controlForFaculty}
																	rules={{
																		required: true,
																	}}
																	key='facultyName'
																	name='facultyName'
																	render={({ field: { onChange, onBlur, value } }) => {
																		return (
																			<Input width={"$100%"} variant='outline' size='sm' isDisabled={false} isInvalid={false} isReadOnly={false}>
																				<InputField onChangeText={onChange} value={value} placeholder='Faculty name' />
																			</Input>
																		);
																	}}
																/>
															</Box>
															<Box>
																<Box width='$100%'>{errorsForFaculty.facultyName && <Text color='#DE2E2E'>This is required.</Text>}</Box>
															</Box>
														</Box>
														<Box gap='$1'>
															<Box>
																<Text size='xs'>Designation</Text>
															</Box>
															<Box alignItems='center'>
																<Controller
																	control={controlForFaculty}
																	rules={{
																		required: true,
																	}}
																	name='facultyDesignation'
																	key='facultyDesignation'
																	render={({ field: { onChange, onBlur, value } }) => {
																		return (
																			<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
																				<SelectTrigger variant='outline' size='sm'>
																					<SelectInput placeholder='Designation' />
																					<SelectIcon mr='$3'>
																						<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
																					</SelectIcon>
																				</SelectTrigger>
																				<SelectPortal>
																					<SelectBackdrop />
																					<SelectContent p='$0'>
																						<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
																							Designation
																						</Text>
																						<Divider borderWidth={0.1} />
																						<SelectScrollView>
																							{designation.map((option, index) => {
																								return (
																									<SelectItem
																										bg={index % 2 === 0 ? "$warmGray100" : "#FFF"}
																										key={index}
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
																<Box width={"$100%"}>{errorsForFaculty.facultyDesignation && <Text color='#DE2E2E'>This is required.</Text>}</Box>
															</Box>
														</Box>
														{watchForFaculty("facultyDesignation") === "Others" && (
															<Box gap='$1'>
																<Box>
																	<Text size='xs'>Please specify your other Designation</Text>
																</Box>
																<Box alignItems='center'>
																	<Controller
																		control={controlForFaculty}
																		key={"otherDesignation"}
																		name={"otherDesignation"}
																		rules={{
																			required: false,
																		}}
																		render={({ field: { onChange, onBlur, value } }) => {
																			return (
																				<Input borderColor='rgba(77, 83, 86, 0.4)' variant='outline' size='sm'>
																					<InputField onChangeText={onChange} value={value} placeholder={"Other designation"} />
																				</Input>
																			);
																		}}
																	/>
																</Box>
																<Box alignItems='center'>
																	<Box width={"$100%"}>{errorsForFaculty.otherDesignation && <Text color='#DE2E2E'>This is required.</Text>}</Box>
																</Box>
															</Box>
														)}
														<Box gap='$1'>
															<Box>
																<Text size='xs'>Phone Number</Text>
															</Box>
															<Box alignItems='center'>
																<Controller
																	control={controlForFaculty}
																	rules={{
																		required: true,
																	}}
																	key='facultyPhoneNumber'
																	name='facultyPhoneNumber'
																	render={({ field: { onChange, onBlur, value } }) => {
																		return (
																			<Input width={"$100%"} variant='outline' size='sm' isDisabled={false} isInvalid={false} isReadOnly={false}>
																				<InputField inputMode='numeric' onChangeText={onChange} value={value} placeholder='Phone Number' />
																			</Input>
																		);
																	}}
																/>
															</Box>
															<Box alignItems='center'>
																<Box width={"$100%"}>{errorsForFaculty.facultyPhoneNumber && <Text color='#DE2E2E'>This is required.</Text>}</Box>
															</Box>
														</Box>
													</Box>
													<Divider />
													<HStack p='$3' justifyContent='$space-between'>
														<Button
															size='sm'
															w='$45%'
															variant='secondary'
															onPress={() => {
																setShowModal(false);
																resetForFaculty({
																	facultyName: null,
																	facultyDesignation: null,
																	facultyPhoneNumber: null,
																	from: new Date(),
																	to: new Date(),
																});
															}}>
															<ButtonText>Cancel</ButtonText>
														</Button>
														<Button w='$50%' size='sm' variant='primary' action='positive' onPress={handleSubmitForFaculty(handleSaveFaculty)}>
															<ButtonText>Save Faculty</ButtonText>
														</Button>
													</HStack>
												</Box>
											) : (
												<Box>
													<HStack p='$3' justifyContent='space-between'>
														<Heading size='lg'>Edit Faculty</Heading>
														<ModalCloseButton>
															<Icon as={CloseIcon} />
														</ModalCloseButton>
													</HStack>
													<Divider />
													<Box gap='$2' px='$3' pt='$3' pb='$6'>
														<Box gap='$1'>
															<Box>
																<Text size='xs'>Faculty Name</Text>
															</Box>
															<Box>
																<Controller
																	control={controlForFaculty}
																	rules={{
																		required: true,
																	}}
																	key='facultyName'
																	name='facultyName'
																	render={({ field: { onChange, onBlur, value } }) => {
																		return (
																			<Input width={"$100%"} variant='outline' size='sm' isDisabled={false} isInvalid={false} isReadOnly={false}>
																				<InputField onChangeText={onChange} value={value} placeholder='Faculty name' />
																			</Input>
																		);
																	}}
																/>
															</Box>
															<Box>
																<Box width='$100%'>{errorsForFaculty.facultyName && <Text color='#DE2E2E'>This is required.</Text>}</Box>
															</Box>
														</Box>
														<Box gap='$1'>
															<Box>
																<Text size='xs'>Designation</Text>
															</Box>
															<Box alignItems='center'>
																<Controller
																	control={controlForFaculty}
																	rules={{
																		required: true,
																	}}
																	name='facultyDesignation'
																	key='facultyDesignation'
																	render={({ field: { onChange, onBlur, value } }) => {
																		return (
																			<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
																				<SelectTrigger variant='outline' size='sm'>
																					<SelectInput placeholder='Designation' />
																					<SelectIcon mr='$3'>
																						<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
																					</SelectIcon>
																				</SelectTrigger>
																				<SelectPortal>
																					<SelectBackdrop />
																					<SelectContent p='$0'>
																						<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
																							Designation
																						</Text>
																						<Divider borderWidth={0.1} />
																						<SelectScrollView>
																							{designation.map((option, index) => {
																								return (
																									<SelectItem
																										bg={index % 2 === 0 ? "$warmGray100" : "#FFF"}
																										key={index}
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
																<Box width={"$100%"}>{errorsForFaculty.facultyDesignation && <Text color='#DE2E2E'>This is required.</Text>}</Box>
															</Box>
														</Box>
														{watchForFaculty("facultyDesignation") === "Others" && (
															<Box gap='$1'>
																<Box>
																	<Text size='xs'>Please specify your other Designation</Text>
																</Box>
																<Box alignItems='center'>
																	<Controller
																		control={controlForFaculty}
																		key={"otherDesignation"}
																		name={"otherDesignation"}
																		rules={{
																			required: false,
																		}}
																		render={({ field: { onChange, onBlur, value } }) => {
																			return (
																				<Input variant='outline' size='sm'>
																					<InputField onChangeText={onChange} value={value} placeholder={"Other designation"} />
																				</Input>
																			);
																		}}
																	/>
																</Box>
																<Box alignItems='center'>
																	<Box width={"$100%"}>{errorsForFaculty.otherDesignation && <Text color='#DE2E2E'>This is required.</Text>}</Box>
																</Box>
															</Box>
														)}
														<Box gap='$1'>
															<Box>
																<Text size='xs'>Phone Number</Text>
															</Box>
															<Box alignItems='center'>
																<Controller
																	control={controlForFaculty}
																	rules={{
																		required: true,
																	}}
																	key='facultyPhoneNumber'
																	name='facultyPhoneNumber'
																	render={({ field: { onChange, onBlur, value } }) => {
																		return (
																			<Input width={"$100%"} variant='outline' size='sm' isDisabled={false} isInvalid={false} isReadOnly={false}>
																				<InputField inputMode='numeric' onChangeText={onChange} value={value} placeholder='Phone Number' />
																			</Input>
																		);
																	}}
																/>
															</Box>
															<Box alignItems='center'>
																<Box width={"$100%"}>{errorsForFaculty.facultyPhoneNumber && <Text color='#DE2E2E'>This is required.</Text>}</Box>
															</Box>
														</Box>
													</Box>
													<Divider />
													<HStack p='$3' justifyContent='$space-between'>
														<Button
															size='sm'
															w='$45%'
															variant='secondary'
															onPress={() => {
																setShowModal(false);
																resetForFaculty({
																	facultyName: null,
																	facultyDesignation: null,
																	facultyPhoneNumber: null,
																});
															}}>
															<ButtonText>Cancel</ButtonText>
														</Button>
														<Button w='$50%' size='sm' variant='primary' action='positive' onPress={handleSubmitForFaculty(handleUpdateFaculty)}>
															<ButtonText fontSize={12}>Update Faculty</ButtonText>
														</Button>
													</HStack>
												</Box>
											)}
										</ModalContent>
									</Modal>
								</Box>
								{facultyList.length === 0 ? (
									<Box rounded='$xl' borderWidth='$1' p='$2' borderStyle='$dashed'>
										<Text>No Records Found</Text>
									</Box>
								) : (
									facultyList.map((faculty, index) => {
										return (
											<HStack key={index} justifyContent='space-between' width={"$100%"}>
												<VStack space='sm'>
													<Text fontFamily='Inter_SemiBold' fontSize={14} alignSelf='flex-start' color='#0F0F10'>
														Faculty {index + 1}
													</Text>
													<VStack>
														<Text fontFamily='Inter_SemiBold' fontSize={14} alignSelf='flex-start' color='#0F0F10'>
															{faculty.name}
														</Text>
														<Text size='xs' color='#4D5356'>
															{faculty.designation === "Others" ? faculty.otherDesignation : faculty.designation}
														</Text>
													</VStack>
													<HStack py='$1'>
														<Icon as={PhoneIcon} mr='$1' w='$4' h='$4' />
														<Text fontSize='$xs'>{faculty.phoneNumber}</Text>
													</HStack>
												</VStack>
												<Button onPress={() => handleEditFaculty(faculty, index)} ref={ref} size='sm' variant='secondary'>
													<ButtonText fontSize={10}>Edit Faculty</ButtonText>
												</Button>
											</HStack>
										);
									})
								)}
								<Button onPress={handleOpenFaculty} ref={ref} alignSelf='flex-start' size='sm' variant='link'>
									<HStack space='sm' alignItems='center'>
										<ButtonIcon pl={5} as={Ionicons} size={15} name='add-circle' color='#367B71' />
										<ButtonText color='#000'>Add a new Faculty</ButtonText>
									</HStack>
								</Button>
								<Divider />
								{currentSpecialty === "Orthodontics" ? (
									<Box></Box>
								) : (
									<Box w='$100%'>
										<Box w='$100%' pb='$3'>
											<Text size='sm' alignSelf='flex-start' fontFamily='Inter_Bold'>
												Rotation
											</Text>
										</Box>
										<Box>
											<Text size='xs' alignSelf='flex-start' color='rgba(81, 81, 81, 0.7)'>
												Department
											</Text>
											<Box alignItems='center' paddingBottom={10}>
												<Controller
													control={control}
													rules={{
														required: false,
													}}
													name='department'
													key='department'
													render={({ field: { onChange, onBlur, value } }) => {
														return (
															<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
																<SelectTrigger variant='outline' size='sm'>
																	<SelectInput placeholder='Department' />
																	<SelectIcon mr='$3'>
																		<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
																	</SelectIcon>
																</SelectTrigger>
																<SelectPortal>
																	<SelectBackdrop />
																	<SelectContent p='$0'>
																		<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
																			Department
																		</Text>
																		<Divider borderWidth={0.1} />
																		<SelectScrollView p='$0'>
																			{appStoreInstance.UserBroadSpecialty === "Orthopaedics"
																				? rotationForOrthopaedics.map((rotation, index) => {
																						return (
																							<SelectItem
																								bg={index % 2 === 0 ? "$warmGray100" : "#FFF"}
																								key={index}
																								label={rotation.label}
																								value={rotation.value}
																							/>
																						);
																				  })
																				: rotationForAnesthesiology.map((rotation, index) => {
																						return (
																							<SelectItem
																								bg={index % 2 === 0 ? "$warmGray100" : "#FFF"}
																								key={index}
																								label={rotation.label}
																								value={rotation.value}
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
												<Box width={"$100%"}>{errors.department && <Text color='#DE2E2E'>This is required.</Text>}</Box>
											</Box>
											<HStack width={"$100%"} space='md'>
												<VStack width={"$48%"}>
													<Text size='xs' alignSelf='flex-start' color='rgba(81, 81, 81, 0.7)'>
														From
													</Text>
													<Button
														bg='$transparent'
														justifyContent='space-between'
														variant='date'
														onPress={() => {
															setCurrentKey("from");
															setFromOpen(true);
														}}>
														<ButtonText fontFamily='Inter'>{fromDate}</ButtonText>
														<ButtonIcon as={Ionicons} size={20} name='calendar-outline' color='#367B71' />
													</Button>
												</VStack>
												<VStack width={"$48%"}>
													<Text size='xs' alignSelf='flex-start' color='rgba(81, 81, 81, 0.7)'>
														To
													</Text>
													<Button
														bg='$transparent'
														justifyContent='space-between'
														variant='date'
														onPress={() => {
															setCurrentKey("to");
															setToOpen(true);
														}}>
														<ButtonText fontFamily='Inter'>{toDate}</ButtonText>
														<ButtonIcon as={Ionicons} size={20} name='calendar-outline' color='#367B71' />
													</Button>
												</VStack>
												<DatePicker
													modal
													open={fromOpen}
													theme='light'
													date={!(fromDate instanceof Date) ? new Date() : fromDate}
													// onDateChange={(date) => {
													// 	//setDate(date);
													// 	handelSetDate(date);
													// }}
													onConfirm={(fromDate) => {
														setFromDate(format(new Date(fromDate), "dd / MM / yyyy"));
														setFromOpen(false);
														handleSetDate(fromDate, currentKey);
													}}
													onCancel={() => {
														setFromOpen(false);
													}}
													mode='date'
												/>
												<DatePicker
													modal
													open={toOpen}
													theme='light'
													date={!(toDate instanceof Date) ? new Date() : toDate}
													// onDateChange={(date) => {
													// 	//setDate(date);
													// 	handelSetDate(date);
													// }}
													onConfirm={(toDate) => {
														setToDate(format(new Date(toDate), "dd / MM / yyyy"));
														setToOpen(false);
														handleSetDate(toDate, currentKey);
													}}
													onCancel={() => {
														setToOpen(false);
													}}
													mode='date'
												/>
											</HStack>
										</Box>
									</Box>
								)}
							</VStack>
						</Box>
						{currentSpecialty === "Anaesthesiology" ? <Divider /> : <Box></Box>}
					</ScrollView>
					<Box width='$100%' flex={1 / 4} pt={10} p={14} paddingBottom={"$30%"}>
						<Button onPress={handleSubmit(handleOnSave)} variant='primary'>
							<ButtonText>Save</ButtonText>
						</Button>
					</Box>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(LogProfilePage);
