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
	SearchIcon,
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
import { rotationForAnesthesiology, rotationForORM, rotationForOrthopaedics } from "../../../data/entity/RotationConfig";
import { designation } from "../../../data/entity/DesignationConfig";
import { Spinner } from "@gluestack-ui/themed";
import NewFacultyForm from "../../../components/NewFacultyForm";
import appStoreInstance from "../../../stores/AppStore";

const LogProfileEditForFormStack = ({ navigation, route }) => {
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

	const facultyForm = useForm({
		defaultValues: {
			userName: "",
			firstName: "",
			lastName: "",
			designation: "",
			otherDesignation: "",
			phoneNumber: "",
		},
		mode: "onChange",
	});

	const {
		control: facultyControl,
		handleSubmit: handleFacultySubmit,
		formState: { errors: facultyErrors },
		watch: watchFaculty,
		reset: resetFacultyForm,
	} = facultyForm;

	const isReady = useIsReady();
	const [showModal, setShowModal] = useState(false);
	const [modalView, setModalView] = useState("");
	const ref = useRef(null);
	const isFocused = useIsFocused();

	const [showSearchModal, setShowSearchModal] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const isValidPhoneNumber = (number) => {
		return /^\d{10}$/.test(number);
	};
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
	const currentSpecialty = appStoreInstance.UserBroadSpecialty;
	const logProfile = appStoreInstance.UserLogProfile;
	const handleSearchQueryChange = (text) => {
		const numbers = text.replace(/[^0-9]/g, "");
		console.log("numbers", numbers);
		setSearchQuery(numbers);
		if (numbers.length === 10) {
			handleFacultySearch(numbers);
		} else {
			setSearchResults([]);
		}
	};

	const clearSearch = () => {
		setSearchQuery("");
		setSearchResults([]);
	};

	const handleCancelNewFaculty = () => {
		setIsCreatingNewFaculty(false);
		setNewFacultyData({
			firstName: "",
			lastName: "",
			designation: "",
			otherDesignation: "",
			phoneNumber: "",
			password: "00000000",
		});
		setNewFacultyErrors({});
	};

	const [isCreatingNewFaculty, setIsCreatingNewFaculty] = useState(false);
	const [newFacultyData, setNewFacultyData] = useState({
		firstName: "",
		lastName: "",
		designation: "",
		otherDesignation: "",
		phoneNumber: "",
		password: "00000000", // Default password for new users
	});
	const [newFacultyErrors, setNewFacultyErrors] = useState({});

	const validateNewFacultyData = () => {
		const errors = {};
		if (!newFacultyData.firstName.trim()) errors.firstName = "First name is required";
		if (!newFacultyData.lastName.trim()) errors.lastName = "Last name is required";
		if (!newFacultyData.designation) errors.designation = "Designation is required";
		if (newFacultyData.designation === "Others" && !newFacultyData.otherDesignation.trim()) {
			errors.otherDesignation = "Other designation is required";
		}
		if (!newFacultyData.phoneNumber || !isValidPhoneNumber(newFacultyData.phoneNumber)) {
			errors.phoneNumber = "Valid phone number is required";
		}
		return errors;
	};

	const handleCreateNewFaculty = async (formData) => {
		console.log("data for handleCreateNewFaculty", formData);
		try {
			const registerResponse = await appStoreInstance.register({
				name: `${formData.firstName} ${formData.lastName}`,
				userName: formData.userName, // This is the email address
				password: "00000000",
				phoneNumber: formData.phoneNumber,
				specialReferenceIdForFaculty: formData.phoneNumber,
				userStatus: "VERIFICATION_REQUIRED",
				broadSpecialty: appStoreInstance.UserBroadSpecialty,
				role: "FACULTY",
				workPlace: appStoreInstance.Workplace || "Workplace",
				designation: formData.designation || "FACULTY",
				otherDesignation: formData.designation === "Others" ? formData.otherDesignation : undefined,
				city: appStoreInstance.City,
			});

			if (registerResponse.status === "SUCCESS") {
				const newUser = registerResponse.data.addUser.user[0];
				newUser.phoneNumber = formData.phoneNumber;
				newUser.designation = formData.designation || "FACULTY";
				const newFaculty = {
					user: newUser,
					createdOn: new Date().toISOString(),
					updatedOn: new Date().toISOString(),
				};

				setFacultyList([...facultyList, newFaculty]);
				setShowSearchModal(false);
				resetFacultyForm();

				toast.show({
					placement: "top",
					render: ({ id }) => (
						<Toast nativeID={`toast-${id}`} action='success' variant='accent'>
							<VStack space='xs'>
								<ToastTitle>Success</ToastTitle>
								<ToastDescription>New faculty created successfully</ToastDescription>
							</VStack>
						</Toast>
					),
				});
			} else {
				throw new Error(registerResponse.data.reason || "Failed to create new faculty");
			}
		} catch (error) {
			toast.show({
				placement: "top",
				render: ({ id }) => (
					<Toast nativeID={`toast-${id}`} action='error' variant='accent'>
						<VStack space='xs'>
							<ToastTitle>Error</ToastTitle>
							<ToastDescription>{error.message}</ToastDescription>
						</VStack>
					</Toast>
				),
			});
		} finally {
			setShowSearchModal(false);
		}
	};

	const handleSetDate = (date, key) => {
		if (date instanceof Date && !isNaN(date)) {
			setValue(key, date);
		} else {
			console.error("Invalid date value");
		}
	};

	const handleFacultySearch = async (searchNumber) => {
		console.log("what is number here", searchNumber);
		setIsSearching(true);
		try {
			const searchQuery = store.searchFaculty({
				searchString: searchNumber,
			});
			setQuery(searchQuery);
			const results = await searchQuery;
			if (results && results.queryUser) {
				console.log("results for search", results, results.queryUser);
				setSearchResults(
					results.queryUser.map((faculty) => {
						console.log("faculty object", faculty);
						return faculty;
					})
				);
			}
		} catch (error) {
			console.error("Faculty search error:", error);
			toast.show({
				placement: "top",
				render: ({ id }) => {
					const toastId = "toast-" + id;
					return (
						<Toast nativeID={toastId} action='error' variant='accent'>
							<VStack space='xs' mx='$4'>
								<ToastTitle>Error</ToastTitle>
								<ToastDescription>Failed to search faculty</ToastDescription>
							</VStack>
						</Toast>
					);
				},
			});
		} finally {
			setIsSearching(false);
		}
	};

	const handleAddFaculty = () => {
		setShowSearchModal(true);
	};

	const handleSelectFaculty = (selectedUser) => {
		console.log("this is the  selected User", selectedUser);
		const newFaculty = {
			user: selectedUser, // This will be used to reference the user
			createdOn: new Date().toISOString(),
			updatedOn: new Date().toISOString(),
		};

		setFacultyList([...facultyList, newFaculty]);
		setShowSearchModal(false);
		setSearchQuery("");
		setSearchResults([]);
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
			return;
		}
		console.log("what is facultyList on saving", facultyList);
		// Transform facultyList to include user objects
		const transformedFacultyList = facultyList.map((faculty) => {
			console.log("transformedFacultyList", faculty);
			console.log("faculty id here", faculty.user.id);
			if (faculty.user.specialReferenceIdForFaculty) {
				console.log("what is faculty when saving transformedFacultyList", faculty);
				// If faculty was selected from search (existing user)
				return {
					user: { id: faculty.user.id },
					createdOn: faculty.createdOn || new Date().toISOString(),
					updatedOn: faculty.updatedOn || new Date().toISOString(),
				};
			} else {
				// For newly created faculty
				return {
					user: { id: faculty.user.id },
					createdOn: faculty.createdOn || new Date().toISOString(),
					updatedOn: faculty.updatedOn || new Date().toISOString(),
				};
			}
		});

		const rotationData = [
			{
				department: watch("department"),
				to: watch("to"),
				from: watch("from"),
				createdOn: new Date().toISOString(),
				updatedOn: new Date().toISOString(),
			},
		];

		// Transform hospitalList to include timestamps
		const transformedHospitalList = hospitalList.map((hospital) => ({
			...hospital,
			createdOn: hospital.createdOn || new Date().toISOString(),
			updatedOn: new Date().toISOString(),
		}));

		let data;
		if (rotationData[0].department !== null && rotationData[0].from !== null && rotationData[0].to !== null) {
			data = {
				faculties: transformedFacultyList,
				rotations: rotationData,
				hospitals: transformedHospitalList,
			};
		} else {
			data = {
				faculties: transformedFacultyList,
				hospitals: transformedHospitalList,
			};
		}

		console.log("final data when saving the log profile", data);

		try {
			const query = store.updateUserLogProfile(appStoreInstance.UserId, {
				set: { logProfile: data },
			});
			setQuery(query);
			const finishUpdatingLogProfile = await query;
			if (finishUpdatingLogProfile) {
				navigation.goBack();
			}
		} catch (error) {
			console.log(error);
			toast.show({
				placement: "top",
				render: ({ id }) => {
					const toastId = "toast-" + id;
					return (
						<Toast nativeID={toastId} action='error' variant='accent'>
							<VStack space='xs' mx='$4'>
								<ToastTitle>Error</ToastTitle>
								<ToastDescription>Failed to update log profile</ToastDescription>
							</VStack>
						</Toast>
					);
				},
			});
		}
	};

	const handleFormChanges = useCallback(
		(field) => (text) => {
			setNewFacultyData((prev) => ({
				...prev,
				[field]: field === "phoneNumber" ? text.replace(/[^0-9]/g, "") : text,
			}));
		},
		[]
	);

	useEffect(() => {
		const fetchLogProfile = async () => {
			try {
				const query = store.fetchUserLogProfile(appStoreInstance.UserName);
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
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (isFocused) {
			fetchLogProfile();
		} else {
			appStoreInstance.setButtonPressed(false);
		}
	}, [isFocused]);

	useFocusEffect(
		useCallback(() => {
			// Code to run when the screen is focused
			console.log("Screen is focused on Log Profile");
			console.log("AppStore.ButtonPressed after Log Profile is in FOCUSSSS", appStoreInstance.ButtonPressed);
			console.log("caseLogFormToGet when in focus", caseLogFormToGet);
			return () => {
				appStoreInstance.setButtonPressed(false);
				console.log("AppStore.ButtonPressed after Log Profile is out of focus", appStoreInstance.ButtonPressed);
				if (caseLogFormToGet === "") {
					console.log("this line should appear", caseLogFormToGet);
				}
			};
		}, [caseLogFormToGet])
	);

	const FacultyListItem = ({ faculty, index }) => {
		return (
			<VStack w='$100%' key={index} space='sm'>
				<Text fontFamily='Inter_SemiBold' fontSize={14} alignSelf='flex-start' color='#0F0F10'>
					Faculty {index + 1}
				</Text>
				<Box rounded='$lg' borderWidth='$1' p='$4' borderColor='$coolGray200'>
					<HStack justifyContent='space-between' w='$100%'>
						<VStack space='xs'>
							<Text fontFamily='Inter_SemiBold' fontSize={14} color='#0F0F10'>
								Dr. {faculty?.user?.name}
							</Text>
							<Text size='xs' color='#4D5356'>
								{faculty?.user?.designation === "Others" ? faculty?.user?.otherDesignation : faculty?.user?.designation}
							</Text>
							<HStack space='sm' alignItems='center'>
								<Icon as={PhoneIcon} size='sm' color='$coolGray600' />
								<Text size='xs'>+91 {faculty?.user?.phoneNumber}</Text>
							</HStack>
						</VStack>
					</HStack>
				</Box>
			</VStack>
		);
	};

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1, zIndex: 999 }}
			keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$secondaryBackground' justifyContent='center' alignItems='center'>
					<ScrollView width={"$100%"} keyboardShouldPersistTaps='handled' keyboardDismissMode='none'>
						<Box width={"$100%"} flex={3 / 4} alignItems='center' paddingTop={20} paddingBottom={20}>
							<VStack space='lg' width={"$100%"} p='$3' alignItems='center'>
								{/* Hospitals Section */}
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
										hospitalList.map((hospital, index) => (
											<VStack key={index} space='sm'>
												<Text fontFamily='Inter_SemiBold' fontSize={14} color='#0F0F10'>
													Hospital - {index + 1}
												</Text>
												<Input size='sm' variant='outline'>
													<InputField
														value={hospital.name}
														onChangeText={(newValue) => handleHospitalChange(index, newValue)}
														placeholder='Hospital'
													/>
													{hospital.name && (
														<InputSlot pr='$3' onPress={() => handleClearHospital(index)}>
															<InputIcon as={CloseIcon} />
														</InputSlot>
													)}
												</Input>
											</VStack>
										))
									)}
								</Box>

								{/* Add Hospital Button */}
								<Button onPress={handleAddHospital} ref={ref} alignSelf='flex-start' size='sm' variant='link'>
									<HStack space='sm' alignItems='center'>
										<ButtonIcon as={Ionicons} name='add-circle' color='#367B71' />
										<ButtonText color='#000'>Add a new Hospital</ButtonText>
									</HStack>
								</Button>

								<Divider />

								{/* Faculties Section */}
								<Box w='$100%'>
									<Text size='sm' alignSelf='flex-start' fontFamily='Inter_Bold'>
										Faculties
									</Text>
								</Box>
								{facultyList.length === 0 ? (
									<Box rounded='$xl' borderWidth='$1' p='$2' borderStyle='$dashed'>
										<Text>No Records Found</Text>
									</Box>
								) : (
									facultyList.map((faculty, index) => <FacultyListItem key={index} faculty={faculty} index={index} />)
								)}

								{/* Add Faculty Button */}
								<Button onPress={handleAddFaculty} ref={ref} alignSelf='flex-start' size='sm' variant='link'>
									<HStack space='sm' alignItems='center'>
										<ButtonIcon as={Ionicons} name='add-circle' color='#367B71' />
										<ButtonText color='#000'>Add a new Faculty</ButtonText>
									</HStack>
								</Button>

								<Divider />
								{/* Rotation Section (if not Orthodontics) */}
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
																				: appStoreInstance.UserBroadSpecialty === "OralMedicineAndRadiology"
																				? rotationForORM.map((rotation, index) => {
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

					{/* Save Button */}
					<Box width='$100%' flex={1 / 4} pt={10} p={14} paddingBottom={"$20%"}>
						<Button onPress={handleSubmit(handleOnSave)} variant='primary'>
							<ButtonText>Save</ButtonText>
						</Button>
					</Box>
				</Box>
				{/* Faculty Search/Create Modal */}
				<Modal isOpen={showSearchModal} onClose={() => setShowSearchModal(false)}>
					<ModalBackdrop />
					<ModalContent maxWidth='$96'>
						<ModalHeader>
							<Heading size='lg'>Add Faculty</Heading>
							<ModalCloseButton>
								<Icon as={CloseIcon} />
							</ModalCloseButton>
						</ModalHeader>
						<ModalBody>
							<ScrollView keyboardShouldPersistTaps='handled' keyboardDismissMode='none'>
								<VStack space='md'>
									{/* Search Section */}
									<VStack space='xs'>
										<Text size='sm' color='$coolGray600'>
											Search Existing Faculty
										</Text>
										<HStack space='md' alignItems='center'>
											<Select w='$25%' isReadOnly selectedValue='+91'>
												<SelectTrigger>
													<SelectInput placeholder='+91' />
												</SelectTrigger>
											</Select>
											<Input flex={1} isDisabled={isSearching}>
												<InputField
													placeholder='Enter phone number'
													value={searchQuery}
													keyboardType='numeric'
													maxLength={10}
													onChangeText={handleSearchQueryChange}
												/>
												{searchQuery && (
													<InputSlot pr='$3' onPress={clearSearch}>
														<InputIcon as={CloseIcon} />
													</InputSlot>
												)}
											</Input>
										</HStack>
									</VStack>

									{/* Search Results */}
									{isSearching ? (
										<Center p='$4'>
											<Spinner size='large' />
										</Center>
									) : (
										<ScrollView maxHeight='$64'>
											<VStack space='sm'>
												{searchResults.length > 0 ? (
													searchResults.map((faculty, index) => (
														<Button key={index} variant='outline' onPress={() => handleSelectFaculty(faculty)}>
															<VStack space='xs' alignItems='flex-start' width='$full'>
																<Text fontWeight='$bold'>Dr. {faculty.name}</Text>
																<HStack space='md' justifyContent='space-between' width='$full'>
																	<Text size='sm' color='$coolGray600'>
																		{faculty.designation}
																	</Text>
																	<Text size='sm' color='$coolGray600'>
																		+91 {faculty.phoneNumber}
																	</Text>
																</HStack>
															</VStack>
														</Button>
													))
												) : searchQuery.length === 10 ? (
													<VStack space='lg' alignItems='center'>
														<Text textAlign='center' color='$coolGray600'>
															No faculty found with this phone number
														</Text>
														<Button variant='outline' onPress={() => setIsCreatingNewFaculty(true)}>
															<ButtonText>Create New Faculty</ButtonText>
														</Button>
													</VStack>
												) : null}
											</VStack>
										</ScrollView>
									)}

									{/* New Faculty Form */}
									{isCreatingNewFaculty && (
										<>
											<Divider />
											<Text size='lg' fontWeight='$bold'>
												Create New Faculty
											</Text>
											<NewFacultyForm control={facultyControl} errors={facultyErrors} watch={watchFaculty} />
										</>
									)}
								</VStack>
							</ScrollView>
						</ModalBody>
						<ModalFooter>
							<HStack space='md' justifyContent='flex-end'>
								<Button
									size='sm'
									variant='secondary'
									onPress={() => {
										resetFacultyForm();
										setShowSearchModal(false);
									}}>
									<ButtonText>Cancel</ButtonText>
								</Button>
								{isCreatingNewFaculty && (
									<Button variant='solid' onPress={handleFacultySubmit(handleCreateNewFaculty)} isDisabled={isSearching}>
										<ButtonText>Create Faculty</ButtonText>
									</Button>
								)}
							</HStack>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(LogProfileEditForFormStack);
