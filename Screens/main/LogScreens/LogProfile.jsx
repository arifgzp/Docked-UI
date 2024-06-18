import {
	CheckIcon,
	CheckboxGroup,
	CheckboxIndicator,
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
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { SelectIcon } from "@gluestack-ui/themed";
import DatePicker from "react-native-date-picker";
import { ChevronDown } from "lucide-react-native";
import { SelectBackdrop } from "@gluestack-ui/themed";
import { SelectItem, SelectContent } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import { format } from "date-fns";
import appStoreInstance from "../../../src/stores/AppStore";
import AppStore from "../../../src/stores/AppStore";
import { useQuery } from "../../../src/models";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import Loader from "../../../components/Loader";

const LogProfilePage = ({ navigation }) => {
	const { control, handleSubmit, formState, reset, watch, setValue } = useForm({
		defaultValues: {
			hospital: "",
			faculties: [],
			rotations: [],
			facultyName: "",
			facultyDesignation: "",
			department: "",
			facultyPhoneNumber: "",
			from: new Date(),
			to: new Date(),
		},
	});

	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [currentKey, setCurrentKey] = useState(null);

	const [fromOpen, setFromOpen] = useState(false);
	const [toOpen, setToOpen] = useState(false);
	const [showActionSheet, setShowActionsheet] = useState(false);
	const [fromDate, setFromDate] = useState(new Date());
	const [toDate, setToDate] = useState(new Date());

	const [facultyList, setFacultyList] = useState([]);
	const [rotationList, setRotationList] = useState([]);

	const handleCloseDateModal = () => {
		setShowActionsheet(false);
	};

	const handleSetDate = (date, key) => {
		if (!isNaN(new Date(date).getTime())) {
			setValue(key, date);
		} else {
			console.error("Invalid date value");
		}
	};

	const handleSaveFaculty = () => {
		const newFaculty = {
			name: watch("facultyName"),
			designation: watch("facultyDesignation"),
			phoneNumber: watch("facultyPhoneNumber"),
		};
		setFacultyList([...facultyList, newFaculty]);
	};

	const handleSaveRotation = () => {
		const newRotation = {
			department: watch("department"),
			from: watch("from"),
			to: watch("to"),
		};
		setRotationList([...rotationList, newRotation]);
		reset({
			department: null,
			from: new Date(),
			to: new Date(),
		});
		setFromDate(new Date());
		setToDate(new Date());
	};

	const handleOnSave = async () => {
		const data = { faculties: facultyList, rotations: rotationList, hospital: watch("hospital") };
		try {
			const query = store.updateUserLogProfile(AppStore.UserId, { set: { logProfile: data } });
			setQuery(query);
			const finishUpdatingLogProfile = await query;
			if (finishUpdatingLogProfile) {
				navigation.goBack();
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
					const userData = toJS(finishFetchingLogProfile.queryUser[0]);
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
					setFacultyList(facultiesList);
					setRotationList(rotationsList);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchLogProfile();
	}, []);

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$primaryBackground' justifyContent='center' alignItems='center'>
					<ScrollView width={"$100%"}>
						<Box width={"$100%"} flex={3 / 4} alignItems='center' paddingTop={20} paddingBottom={20}>
							<VStack space='lg' width={"$100%"} alignItems='center'>
								<Box width={"$90%"}>
									<Box alignItems='center' paddingBottom={10}>
										<Controller
											control={control}
											rules={{
												required: true,
											}}
											key='hospital'
											name='hospital'
											render={({ field: { onChange, onBlur, value } }) => {
												return (
													<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
														<SelectTrigger variant='underlined' size='md'>
															<SelectInput placeholder='Hospital' />
															<SelectIcon mr='$3'>
																<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
															</SelectIcon>
														</SelectTrigger>
														<SelectPortal>
															<SelectBackdrop />
															<SelectContent>
																<SelectItem label='JJ' value='JJ' />
															</SelectContent>
														</SelectPortal>
													</Select>
												);
											}}
										/>
									</Box>
									<Box alignItems='center'>
										<Box width={"$80%"}>{formState.errors.hospital && <Text color='#DE2E2E'>This is required.</Text>}</Box>
									</Box>
								</Box>
								<Box width={"$90%"}>
									<Text alignSelf='flex-start' fontFamily='Inter_Bold'>
										Faculty list
									</Text>
								</Box>
								<Box width={"$90%"}>
									<Box alignItems='center' paddingBottom={10}>
										<Controller
											control={control}
											rules={{
												required: true,
											}}
											key='facultyName'
											name='facultyName'
											render={({ field: { onChange, onBlur, value } }) => {
												return (
													<Input width={"$100%"} variant='underlined' size='md' isDisabled={false} isInvalid={false} isReadOnly={false}>
														<InputField onChangeText={onChange} value={value} placeholder='Faculty name' />
													</Input>
												);
											}}
										/>
									</Box>
									<Box alignItems='center'>
										<Box width={"$80%"}>{formState.errors.facultyName && <Text color='#DE2E2E'>This is required.</Text>}</Box>
									</Box>
								</Box>
								<Box width={"$90%"}>
									<Box alignItems='center' paddingBottom={10}>
										<Controller
											control={control}
											rules={{
												required: true,
											}}
											name='facultyDesignation'
											key='facultyDesignation'
											render={({ field: { onChange, onBlur, value } }) => {
												return (
													<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
														<SelectTrigger variant='underlined' size='md'>
															<SelectInput placeholder='Designation' />
															<SelectIcon mr='$3'>
																<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
															</SelectIcon>
														</SelectTrigger>
														<SelectPortal>
															<SelectBackdrop />
															<SelectContent>
																<SelectItem label='Designation' value='Designation' />
															</SelectContent>
														</SelectPortal>
													</Select>
												);
											}}
										/>
									</Box>
									<Box alignItems='center'>
										<Box width={"$80%"}>{formState.errors.hospital && <Text color='#DE2E2E'>This is required.</Text>}</Box>
									</Box>
								</Box>
								<Box width={"$90%"}>
									<Box alignItems='center' paddingBottom={10}>
										<Controller
											control={control}
											rules={{
												required: true,
											}}
											key='phoneNumber'
											name='phoneNumber'
											render={({ field: { onChange, onBlur, value } }) => {
												return (
													<Input width={"$100%"} variant='underlined' size='md' isDisabled={false} isInvalid={false} isReadOnly={false}>
														<InputField onChangeText={onChange} value={value} placeholder='Phone Number' />
													</Input>
												);
											}}
										/>
									</Box>
									<Box alignItems='center'>
										<Box width={"$80%"}>{formState.errors.phoneNumber && <Text color='#DE2E2E'>This is required.</Text>}</Box>
									</Box>
								</Box>
								<Box width={"$90%"}>
									<Button onPress={handleSaveFaculty} alignSelf='flex-start' width={"$50%"} height={50} size='sm' variant='secondary'>
										<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
											Save to list
										</ButtonText>
									</Button>
								</Box>
								<VStack space='lg' width={"$90%"} alignItems='center'>
									{facultyList.map((faculty, index) => {
										return (
											<HStack key={index} alignItems='center' space='lg' width={"$100%"}>
												<Text width={"$10%"}>{index + 1}.</Text>
												<Text width={"$20%"}>{faculty.name}</Text>
												<Text width={"$20%"}>{faculty.designation}</Text>
												<Button width={"$30%"} height={50} size='sm' variant='secondary'>
													<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
														Verify
													</ButtonText>
												</Button>
											</HStack>
										);
									})}
								</VStack>
								<Box width={"$90%"}>
									<Text size='xs' alignSelf='flex-start'>
										Faculty will shortly receive a verification link
									</Text>
								</Box>
								<Box width={"$90%"}>
									<Text alignSelf='flex-start' fontFamily='Inter_Bold'>
										Rotation
									</Text>
								</Box>
								<Box width={"$90%"}>
									<Box alignItems='center' paddingBottom={10}>
										<Controller
											control={control}
											rules={{
												required: true,
											}}
											name='department'
											key='department'
											render={({ field: { onChange, onBlur, value } }) => {
												return (
													<Select width={"$100%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
														<SelectTrigger variant='underlined' size='md'>
															<SelectInput placeholder='Department' />
															<SelectIcon mr='$3'>
																<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
															</SelectIcon>
														</SelectTrigger>
														<SelectPortal>
															<SelectBackdrop />
															<SelectContent>
																<SelectItem label='Department' value='Department' />
																<SelectItem label='Department-1' value='Department-1' />
																<SelectItem label='Department-2' value='Department-3' />
															</SelectContent>
														</SelectPortal>
													</Select>
												);
											}}
										/>
									</Box>
									<Box alignItems='center'>
										<Box width={"$80%"}>{formState.errors.department && <Text color='#DE2E2E'>This is required.</Text>}</Box>
									</Box>
								</Box>
								<HStack width={"$90%"} justifyContent='space-between'>
									<Button
										width={"$50%"}
										justifyContent='flex-start'
										alignItems='flex-start'
										variant='link'
										onPress={() => {
											setCurrentKey("from");
											setFromOpen(true);
										}}>
										<ButtonText fontFamily='Inter'>From - {format(new Date(fromDate), "do MMM yyyy")}</ButtonText>
									</Button>
									<Button
										width={"$50%"}
										justifyContent='flex-start'
										alignItems='flex-start'
										variant='link'
										onPress={() => {
											setCurrentKey("to");
											setToOpen(true);
										}}>
										<ButtonText fontFamily='Inter'>To - {format(new Date(toDate), "do MMM yyyy")}</ButtonText>
									</Button>
									<DatePicker
										modal
										open={fromOpen}
										theme='light'
										date={fromDate}
										// onDateChange={(date) => {
										// 	//setDate(date);
										// 	handelSetDate(date);
										// }}
										onConfirm={(date) => {
											setFromDate(date);
											setFromOpen(false);
											handleSetDate(date, currentKey);
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
										date={toDate}
										// onDateChange={(date) => {
										// 	//setDate(date);
										// 	handelSetDate(date);
										// }}
										onConfirm={(date) => {
											setToDate(date);
											setToOpen(false);
											handleSetDate(date, currentKey);
										}}
										onCancel={() => {
											setToOpen(false);
										}}
										mode='date'
									/>
								</HStack>
								<Box width={"$90%"}>
									<Button onPress={handleSaveRotation} alignSelf='flex-start' width={"$50%"} height={50} size='sm' variant='secondary'>
										<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
											Save to list
										</ButtonText>
									</Button>
								</Box>
								<VStack space='lg' width={"$90%"} alignItems='center'>
									{rotationList.map((rotation, index) => {
										console.log("rotation", rotation);
										return (
											<HStack key={index} alignItems='center' space='lg' width={"$100%"}>
												<Text width={"$10%"}>{index + 1}.</Text>
												<Text width={"$25%"}>{rotation.department}</Text>
												<Text width={"$25%"}>{format(new Date(rotation?.from), "do MMM yyyy")}</Text>
												<Text width={"$25%"}>{format(new Date(rotation?.to), "do MMM yyyy")}</Text>
											</HStack>
										);
									})}
								</VStack>
							</VStack>
						</Box>
						<Box flex={1 / 4} width={"$100%"} alignItems='center' paddingBottom={"$30%"}>
							<Button onPress={handleOnSave} height={50} size='lg' variant='primary'>
								<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
									Save
								</ButtonText>
							</Button>
						</Box>
					</ScrollView>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(LogProfilePage);
