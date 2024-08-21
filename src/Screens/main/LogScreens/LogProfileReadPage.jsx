import {
	CheckIcon,
	CheckboxGroup,
	CheckboxIndicator,
	Divider,
	KeyboardAvoidingView,
	Select,
	SelectInput,
	SelectPortal,
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
import { useIsFocused } from "@react-navigation/native";

const LogProfileReadPage = ({ navigation, route }) => {
	const isFocused = useIsFocused();
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
		},
	});

	const isReady = useIsReady();
	const [showModal, setShowModal] = useState(false);
	const [modalView, setModalView] = useState("");
	const ref = useRef(null);
	const {
		control: controlForRotations,
		handleSubmit: handleSubmitForRotations,
		formState: { errors: errorsForRotations },
		reset: resetForRotations,
		watch: watchForRotations,
		setValue: setValueForRotations,
	} = useForm({
		defaultValues: {
			department: "",
			from: new Date(),
			to: new Date(),
		},
	});

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
			facultyPhoneNumber: "",
		},
	});

	const toast = useToast();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [currentKey, setCurrentKey] = useState(null);
	const [fromOpen, setFromOpen] = useState(false);
	const [toOpen, setToOpen] = useState(false);
	const [fromDate, setFromDate] = useState(new Date());
	const [toDate, setToDate] = useState(new Date());
	const [hospitalList, setHospitalList] = useState([]);
	const [facultyList, setFacultyList] = useState([]);
	const [rotationList, setRotationList] = useState([]);
	const currentSpecialty = AppStore.UserBroadSpecialty;

	const handleSetDate = (date, key) => {
		if (date instanceof Date && !isNaN(date)) {
			setValueForRotations(key, date);
		} else {
			console.error("Invalid date value");
		}
	};

	const handleOpenFaculty = () => {
		setModalView("faculty");
		setShowModal(true);
	};

	const handleOpenRotation = () => {
		setModalView("rotation");
		setShowModal(true);
	};
	const handleSaveFaculty = () => {
		const newFaculty = {
			name: watchForFaculty("facultyName"),
			designation: watchForFaculty("facultyDesignation"),
			phoneNumber: watchForFaculty("facultyPhoneNumber"),
		};
		setFacultyList([...facultyList, newFaculty]);
		resetForFaculty({
			facultyName: null,
			facultyDesignation: null,
			facultyPhoneNumber: null,
			from: new Date(),
			to: new Date(),
		});
		resetForRotations({
			from: new Date(),
			to: new Date(),
		});
		setFromDate(new Date());
		setToDate(new Date());
		setShowModal(false);
	};

	const handleSaveRotation = () => {
		const newRotation = {
			department: watchForRotations("department"),
			from: watchForRotations("from"),
			to: watchForRotations("to"),
		};
		setRotationList([...rotationList, newRotation]);
		resetForRotations({
			department: null,
			from: new Date(),
			to: new Date(),
		});
		setFromDate(new Date());
		setToDate(new Date());
		setShowModal(false);
	};

	useEffect(() => {
		const fetchLogProfile = async () => {
			try {
				const logProfileData = toJS(AppStore.UserLogProfile);
				console.log("logProfileData", logProfileData);
				if (logProfileData) {
					const hospitalList = logProfileData.hospitals.map((hospital) => {
						delete hospital.id;
						delete hospital.__typename;
						return hospital;
					});
					const facultiesList = logProfileData.faculties.map((faculty) => {
						delete faculty.id;
						delete faculty.__typename;
						return faculty;
					});
					const rotationsList = logProfileData.rotations.map((rotation) => {
						delete rotation.id;
						delete rotation.__typename;
						return rotation;
					});
					reset({
						hospital: logProfileData.hospital,
						department: logProfileData.rotations[0]?.department ? logProfileData.rotations[0]?.department : null,
						rotations: logProfileData.rotations[0],
					});
					setHospitalList(hospitalList);
					setFacultyList(facultiesList);
					setRotationList(rotationsList);
				} else {
					const query = store.fetchUserLogProfile(AppStore.UserName);
					setQuery(query);
					const finishFetchingLogProfile = await query;
					if (finishFetchingLogProfile) {
						const userData = toJS(finishFetchingLogProfile.queryUser[0]);
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
							from: new Date(userData.logProfile.rotations[0]?.from || new Date()),
							to: new Date(userData.logProfile.rotations[0]?.to || new Date()),
						});
						console.log("facultiesList", facultiesList);
						setHospitalList(hospitalList);
						setFacultyList(facultiesList);
						setRotationList(rotationsList);
					}
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (isFocused) {
			fetchLogProfile();
		}
	}, [isFocused]);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$secondaryBackground' justifyContent='center' alignItems='center'>
					<ScrollView pb='$15%' width={"$100%"}>
						<Box width={"$100%"} flex={3 / 4} alignItems='center' paddingTop={20} paddingBottom={20}>
							<VStack space='lg' width={"$100%"} p='$3' alignItems='center'>
								<Box w='$100%'>
									<VStack space='xl'>
										<Text bold fontSize={14} alignSelf='flex-start' color='#0F0F10'>
											Hospital
										</Text>
										{hospitalList.length === 0 ? (
											<Box rounded='$xl' borderWidth='$1' p='$2' borderStyle='$dashed'>
												<Text>No Records Found</Text>
											</Box>
										) : (
											hospitalList.map((hospital, index) => {
												return (
													<VStack>
														<Text bold size='sm' alignSelf='flex-start' color='#0F0F10'>
															Hospital - {index + 1}
														</Text>
														<Text size='xs' color='#4D5356'>
															{hospital.name}
														</Text>
													</VStack>
												);
											})
										)}
									</VStack>
								</Box>
								<Divider />
								<Box w='$100%'>
									<Text bold fontSize={14} alignSelf='flex-start' color='#0F0F10'>
										Faculty
									</Text>
								</Box>
								{facultyList.length === 0 ? (
									<Box rounded='$xl' borderWidth='$1' p='$2' borderStyle='$dashed'>
										<Text>No Records Found</Text>
									</Box>
								) : (
									facultyList.map((faculty, index) => {
										console.log("faculty to be console", faculty);
										return (
											<HStack key={index} justifyContent='space-between' width={"$100%"}>
												<VStack>
													<VStack>
														<Text fontFamily='Inter_SemiBold' fontSize={14} alignSelf='flex-start' color='#0F0F10'>
															Dr. {faculty.firstName} {faculty.lastName}
														</Text>
														<Text size='xs' color='#4D5356'>
															{faculty.designation === "Others" ? faculty.otherDesignation : faculty.designation}
														</Text>
													</VStack>
													<HStack py='$1'>
														<Text size='xs'>+91 {faculty.phoneNumber}</Text>
													</HStack>
												</VStack>
												<HStack space='xs' alignItems='center' alignSelf='flex-start'>
													<Box width={15} height={15} borderRadius='$full' backgroundColor='#CC3F0C'></Box>
													<Text color='#CC3F0C' size='xs'>
														To be Verified
													</Text>
												</HStack>
											</HStack>
										);
									})
								)}
								<Divider />
								{currentSpecialty === "Orthodontics" ? (
									<Box></Box>
								) : (
									<Box w='$100%'>
										<Box w='$100%'>
											<Text color='#0F0F10' size='sm' alignSelf='flex-start' fontFamily='Inter_Bold' pb='$2'>
												Rotation
											</Text>
										</Box>
										{rotationList.length === 0 ? (
											<Box rounded='$xl' borderWidth='$1' p='$2' borderStyle='$dashed'>
												<Text>No Records Found</Text>
											</Box>
										) : (
											rotationList.map((rotation, index) => {
												console.log("rotation", rotation);
												return (
													<VStack key={index} space='sm' width={"$100%"}>
														<Text fontFamily='Inter_SemiBold' fontSize={14} alignSelf='flex-start' color='#0F0F10'>
															{rotation.department ? rotation.department : "--"}
														</Text>
														<HStack space='lg'>
															<Text fontSize='$xs'>
																<Text bold size='xs' color='#4D5356'>
																	From:
																</Text>
																{rotation.from ? format(new Date(rotation?.from), "d/M/yyyy") : "--"}
															</Text>
															<Text fontSize='$xs'>
																<Text bold size='xs' color='#4D5356'>
																	To:
																</Text>
																{rotation.to ? format(new Date(rotation?.to), "d/M/yyyy") : "--"}
															</Text>
														</HStack>
													</VStack>
												);
											})
										)}
									</Box>
								)}
							</VStack>
						</Box>
						{currentSpecialty === "Orthodontics" ? <Box></Box> : <Divider />}
					</ScrollView>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(LogProfileReadPage);
