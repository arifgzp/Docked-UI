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
	InputIcon,
	InputSlot,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState, useRef, useCallback } from "react";
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
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
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
			hospitals: [],
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

	const {
		control: controlForHospital,
		handleSubmit: handleSubmitForHospital,
		formState: { errors: errorsForHospital },
		reset: resetForHospital,
		watch: watchForHospital,
		setValue: setValueForHospital,
	} = useForm({
		defaultValues: {},
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
	const [hospitalList, setHospitalList] = useState([]);
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

	const handleAddFaculty = () => {
		const newFacultyEntry = {
			firstName: "",
			lastName: "",
			designation: "",
			otherDesignation: "",
			phoneNumber: "", // You can modify this as per your requirement
		};
		setFacultyList([...facultyList, newFacultyEntry]);
		// setModalView("faculty");
		// setShowModal(true);
	};

	const handleFacultyFirstNameChange = (index, newValue) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].firstName = newValue;
		setFacultyList(updatedFacultyList);
	};

	const handleClearFacultyFirstNameChange = (index) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].firstName = "";
		setFacultyList(updatedFacultyList);
	};

	const handleFacultyLastNameChange = (index, newValue) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].lastName = newValue;
		setFacultyList(updatedFacultyList);
	};

	const handleClearFacultyLastNameChange = (index) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].lastName = "";
		setFacultyList(updatedFacultyList);
	};

	const handleFacultyDesignationChange = (index, newValue) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].designation = newValue;
		setFacultyList(updatedFacultyList);
	};

	const handleFacultyOtherDesignationChange = (index, newValue) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].otherDesignation = newValue;
		setFacultyList(updatedFacultyList);
	};

	const handleClearFacultyOtherDesignationChange = (index) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].otherDesignation = "";
		setFacultyList(updatedFacultyList);
	};

	const handleFacultyPhoneNumberChange = (index, newValue) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].phoneNumber = newValue;
		setFacultyList(updatedFacultyList);
	};

	const handleClearFacultyPhoneNumberChange = (index) => {
		const updatedFacultyList = [...facultyList];
		updatedFacultyList[index].phoneNumber = "";
		setFacultyList(updatedFacultyList);
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
			from: watch("from"),
			to: watch("to"),
			department: watch("department"),
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
			from: watch("from"),
			to: watch("to"),
			department: watch("department"),
		});
	};

	const handleAddHospital = () => {
		const newHospitalEntry = {
			name: "", // You can modify this as per your requirement
		};
		setHospitalList([...hospitalList, newHospitalEntry]);
	};

	const handleHospitalChange = (index, newValue) => {
		const updatedHospitalList = [...hospitalList];
		updatedHospitalList[index].name = newValue;
		setHospitalList(updatedHospitalList);
	};

	const handleClearHospital = (index) => {
		const updatedHospitalList = [...hospitalList];
		updatedHospitalList[index].name = "";
		setHospitalList(updatedHospitalList);
	};

	const handleOnSave = async () => {
		// Check if rotationList or facultyList is empty
		if (facultyList.length === 0 || hospitalList.length === 0) {
			// Raise an error indicating rotation or faculty cannot be empty
			toast.show({
				placement: "top",
				render: ({ id }) => {
					const toastId = "toast-" + id;
					return (
						<Toast nativeID={toastId} action='warning' variant='accent'>
							<VStack space='xs' mx='$4'>
								<ToastTitle>Alert</ToastTitle>
								<ToastDescription>Faculty or Hospital cannot be empty.</ToastDescription>
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
		console.log("hospitalLists", hospitalList);
		let data;
		if (rotationData[0].department !== null && rotationData[0].from !== null && rotationData[0].to !== null) {
			console.log("data when there is rotation.....", rotationData);
			data = { faculties: facultyList, rotations: rotationData, hospitals: hospitalList };
		} else {
			console.log("data when there is no ROTATION.....", rotationData);
			data = { faculties: facultyList, hospitals: hospitalList };
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
					const hospitalList = userData.logProfile.hospitals.map((hospital) => {
						delete hospital.id;
						delete hospital.__typename;
						return hospital;
					});
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
					setHospitalList(hospitalList);
					setToDate(userData.logProfile.rotations[0]?.to ? format(new Date(userData.logProfile.rotations[0]?.to), "dd / MM / yyyy") : "--/--/--");
					setValue("from", userData.logProfile.rotations[0]?.from ? userData.logProfile.rotations[0]?.from : null);
					setValue("to", userData.logProfile.rotations[0]?.to ? userData.logProfile.rotations[0]?.to : null);
					AppStore.setLogProfile(finishFetchingLogProfile.queryUser.user[0].logProfile);
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (isFocused) {
			fetchLogProfile();
		} else {
			AppStore.setButtonPressed(false);
		}
	}, [isFocused]);

	useFocusEffect(
		useCallback(() => {
			// Code to run when the screen is focused
			console.log("Screen is focused on Log Profile");
			console.log("AppStore.ButtonPressed after Log Profile is in FOCUSSSS", AppStore.ButtonPressed);
			console.log("caseLogFormToGet when in focus", caseLogFormToGet);
			return () => {
				AppStore.setButtonPressed(false);
				console.log("AppStore.ButtonPressed after Log Profile is out of focus", AppStore.ButtonPressed);
				if (caseLogFormToGet === "") {
					console.log("this line should appear", caseLogFormToGet);
					navigation.goBack();
				}
			};
		}, [caseLogFormToGet])
	);

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
									<Text size='sm' alignSelf='flex-start' fontFamily='Inter_Bold'>
										Hospital
									</Text>
								</Box>
								<Box w='$100%' gap='$2'>
									{hospitalList.length === 0 ? (
										<Box rounded='$xl' borderWidth='$1' p='$2' borderStyle='$dashed'>
											<Text>No Records Found</Text>
										</Box>
									) : (
										hospitalList.map((hospital, index) => {
											return (
												<VStack key={index} space='sm'>
													<Text fontFamily='Inter_SemiBold' fontSize={14} alignSelf='flex-start' color='#0F0F10'>
														Hospital - {index + 1}
													</Text>
													<Input size='sm' variant='outline'>
														<InputField
															type='text'
															value={hospital.name}
															onChangeText={(newValue) => handleHospitalChange(index, newValue)}
															placeholder={`Hospital`}
														/>
														{hospital.name !== "" && (
															<InputSlot pr='$3' onPress={(newValue) => handleClearHospital(index)}>
																<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
															</InputSlot>
														)}
													</Input>
												</VStack>
											);
										})
									)}
									{/* <VStack space='md' alignItems='center' paddingBottom={10}>
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
									</Box> */}
								</Box>
								<Button onPress={handleAddHospital} ref={ref} alignSelf='flex-start' size='sm' variant='link'>
									<HStack space='sm' alignItems='center'>
										<ButtonIcon pl={5} as={Ionicons} size={15} name='add-circle' color='#367B71' />
										<ButtonText color='#000'>Add a new Hospital</ButtonText>
									</HStack>
								</Button>
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
																						<Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />
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
											<VStack w='$100%' key={index} space='sm'>
												<Text fontFamily='Inter_SemiBold' fontSize={14} alignSelf='flex-start' color='#0F0F10'>
													Faculty {index + 1}
												</Text>
												<HStack justifyContent='space-between' w='$100%'>
													<VStack w='$48%'>
														<Text pb='$1' fontSize={12} color='rgba(81, 81, 81, 0.7)'>
															First Name
														</Text>
														<Input size='sm' variant='outline'>
															<InputField
																type='text'
																value={faculty.firstName}
																onChangeText={(newValue) => handleFacultyFirstNameChange(index, newValue)}
																placeholder={`First Name`}
															/>
															{faculty.firstName !== "" && (
																<InputSlot pr='$3' onPress={(newValue) => handleClearFacultyFirstNameChange(index)}>
																	<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																</InputSlot>
															)}
														</Input>
													</VStack>
													<VStack w='$48%'>
														<Text pb='$1' fontSize={12} color='rgba(81, 81, 81, 0.7)'>
															Last Name
														</Text>
														<Input size='sm' variant='outline'>
															<InputField
																type='text'
																value={faculty.lastName}
																onChangeText={(newValue) => handleFacultyLastNameChange(index, newValue)}
																placeholder={`Last Name`}
															/>
															{faculty.lastName !== "" && (
																<InputSlot pr='$3' onPress={(newValue) => handleClearFacultyLastNameChange(index)}>
																	<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																</InputSlot>
															)}
														</Input>
													</VStack>
												</HStack>
												<VStack>
													<Text pb='$1' fontSize={12} color='rgba(81, 81, 81, 0.7)'>
														Designation
													</Text>
													<Select
														width={"$100%"}
														onValueChange={(newValue) => handleFacultyDesignationChange(index, newValue)}
														selectedValue={faculty.designation}>
														<SelectTrigger variant='outline' size='sm'>
															<SelectInput placeholder='Designation' />
															<SelectIcon mr='$3'>
																<Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />
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
												</VStack>
												{faculty.designation === "Others" && (
													<VStack>
														<Text pb='$1' fontSize={12} color='rgba(81, 81, 81, 0.7)'>
															Other Designation
														</Text>
														<Input size='sm' variant='outline'>
															<InputField
																type='text'
																value={faculty.otherDesignation}
																onChangeText={(newValue) => handleFacultyOtherDesignationChange(index, newValue)}
																placeholder={`Other Designation`}
															/>
															{faculty.otherDesignation !== "" && (
																<InputSlot pr='$3' onPress={(newValue) => handleClearFacultyOtherDesignationChange(index)}>
																	<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																</InputSlot>
															)}
														</Input>
													</VStack>
												)}
												<VStack>
													<Text pb='$1' fontSize={12} color='rgba(81, 81, 81, 0.7)'>
														Mobile Number
													</Text>
													<HStack w='$100%' justifyContent='space-between'>
														<Select w='$25%' isReadOnly selectedValue='+91'>
															<SelectTrigger variant='outline' size='sm'>
																<SelectInput placeholder={`+91`} />
																<SelectIcon mr='$3'>
																	<Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />
																</SelectIcon>
															</SelectTrigger>
															<SelectPortal>
																<SelectBackdrop />
																<SelectContent p='$0'>
																	<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
																		Phone Number
																	</Text>
																	<Divider borderWidth={0.1} />
																	<SelectScrollView>
																		<SelectItem key='+91' label='+91' value='+91' />;
																	</SelectScrollView>
																</SelectContent>
																<SelectDragIndicatorWrapper>
																	<SelectDragIndicator />
																</SelectDragIndicatorWrapper>
															</SelectPortal>
														</Select>
														<Input w='$70%' size='sm' variant='outline'>
															<InputField
																type='text'
																inputMode='numeric'
																value={faculty.phoneNumber}
																onChangeText={(newValue) => handleFacultyPhoneNumberChange(index, newValue)}
																placeholder={`Mobile Number`}
															/>
															{faculty.phoneNumber !== "" && (
																<InputSlot pr='$3' onPress={(newValue) => handleClearFacultyPhoneNumberChange(index)}>
																	<InputIcon size={20} as={Ionicons} name='close-circle' color='#E6E3DB' />
																</InputSlot>
															)}
														</Input>
													</HStack>
												</VStack>
											</VStack>
										);
									})
								)}
								<Button onPress={handleAddFaculty} ref={ref} alignSelf='flex-start' size='sm' variant='link'>
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
					<Box width='$100%' flex={1 / 4} pt={10} p={14} paddingBottom={"$20%"}>
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
