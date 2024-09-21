import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
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
import { View, Platform, useWindowDimensions, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Image } from "@gluestack-ui/themed";
import { ImageAssets } from "../../../../assets/Assets";
import appStoreInstance from "../../../stores/AppStore";
import { ButtonIcon } from "@gluestack-ui/themed";
import CircularProgress from "react-native-circular-progress-indicator";
import { Card } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useEffect, useRef, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { observer } from "mobx-react";
import NetworkUtils from "../../../utils/NetworkUtils";
import { useQuery } from "../../../models";
import DynamicBarGraph from "../../../components/DynamicBarGraph";

const AnesthesiologyDashboard = ({ navigation }) => {
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const mockData = {
		progressData: [
			{ title: "Observed", value: 30 },
			{ title: "Assisted", value: 170 },
			{ title: "Performed", value: 30 },
		],
		anaesthesiaTypes: [
			{ title: "General Anaesthesia", count: 35 },
			{ title: "Regional Anaesthesia", count: 12 },
			{ title: "Local Anaesthesia", count: 67 },
			{ title: "Anaesthesia", count: 55 },
		],
	};

	const timePeriods = ["Yearly", "Monthly", "Weekly"];
	const grades = [
		{ grade: "I", value: "45" },
		{ grade: "II", value: "01" },
		{ grade: "III", value: "0" },
		{ grade: "IV", value: "12" },
		{ grade: "V", value: "30" },
	];

	const top3TimePeriods = ["Yearly", "Monthly", "Weekly"];
	const regionalTechniques = [
		{ title: "Interscalene", value: "05" },
		{ title: "Popliteal and saphenous", value: "02" },
		{ title: "Erector Spinae Plane", value: "01" },
	];
	const chronicPainLog = [
		{ title: "Stellate Ganglion Block", value: "05" },
		{ title: "Superior Hypogastric Plexus Block", value: "02" },
		{ title: "Acromio-Clavicular joint injection", value: "01" },
	];

	const CriticalCareProcedures = [
		{ title: "Arterial Lines", value: "25" },
		{ title: "Central Venous Lines", value: "18" },
	];

	const weeklyData = {
		labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		durations: [10, 14, 17.5, 13, 8.5, 13, 8],
		highlight: 2, // Wednesday
		maxValue: 24,
	};

	const monthlyData = {
		labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
		durations: [45, 52, 49, 53],
		highlight: 1, // Week 2
		maxValue: 60,
	};

	const yearlyData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		durations: [200, 180, 220, 205, 195, 230, 210, 200, 215, 225, 205, 190],
		highlight: 5, // June
		maxValue: 240,
	};

	const casesLoggedData = {
		title: "Cases Logged",
		periods: {
			Weekly: {
				labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				durations: [10, 14, 17.5, 13, 8.5, 13, 8],
			},
			Monthly: {
				labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
				durations: [45, 52, 49, 53],
			},
			Yearly: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				durations: [200, 180, 220, 205, 195, 230, 210, 200, 215, 225, 205, 190],
			},
		},
	};

	const [activeIndex, setActiveIndex] = useState(0);

	const scrollViewRef = useRef(null);

	const renderCard = (item) => (
		<Box bg='white' borderRadius='$sm' p='$3' flex={1} mr='$2' mb='$2' alignItems='center' justifyContent='space-between'>
			<Text fontSize={12} fontWeight='bold' textAlign='center' mb='$2'>
				{item.title}
			</Text>
			<Text fontSize={16} fontWeight='bold' color='#006466'>
				{item.value}
			</Text>
		</Box>
	);

	const handleScroll = (event) => {
		const contentOffsetX = event.nativeEvent.contentOffset.x;
		const index = Math.round(contentOffsetX / 70); // Adjust 130 based on your card width + margin
		setActiveIndex(index);
	};

	const scrollToIndex = (index) => {
		scrollViewRef.current?.scrollTo({ x: index * 60, animated: true });
	};

	useEffect(() => {
		if (!appStoreInstance.ImagePath) {
			const fetchUserProfile = async () => {
				try {
					const userQuery = store.fetchUserById(appStoreInstance.UserName);
					setQuery(userQuery);
					const finishFetchingUserProfile = await userQuery;
					if (finishFetchingUserProfile) {
						const fetchProfileData = finishFetchingUserProfile.queryUser[0];
						console.log("user data in dashboard", fetchProfileData);
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
					}
				} catch (error) {
					console.log(error);
				}
			};
			if (isFocused) {
				fetchUserProfile();
			}
		}
	}, [isFocused]);
	const requrl = NetworkUtils.getServerURL();
	const url = `${requrl}/download/profilePhoto:${appStoreInstance.ImagePath}`;

	const [selectedPeriod, setSelectedPeriod] = useState("Weekly");
	const [selectedTop3Period, setSelectedTop3Period] = useState("Weekly");

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Box h='$full' backgroundColor='$primaryBackground' pt='$8'>
				<ScrollView>
					<Box p={10}>
						<HStack justifyContent='space-between' alignItems='center'>
							<VStack>
								<Text fontFamily='Inter_Bold' color='#000' size='xl'>
									Hello Dr. {appStoreInstance.Name ? appStoreInstance.Name : "User"}
								</Text>
								<Text>
									{appStoreInstance.UserBroadSpecialty === "OralMedicineAndRadiology"
										? "Oral Medicine & Radiology"
										: appStoreInstance.UserBroadSpecialty}
								</Text>
							</VStack>
							<Pressable onPress={() => navigation.navigate("ProfilePage")}>
								<Image
									borderRadius='$full'
									width={35}
									height={35}
									source={appStoreInstance.ImagePath !== null ? { uri: url } : ImageAssets.profileIcon}
									alt='Docked-Logo'
								/>
							</Pressable>
						</HStack>
					</Box>
					<Box h={3} width={"$full"} backgroundColor='#367B71'></Box>

					<Box p='$4'>
						<VStack space='xl'>
							<HStack gap={48} justifyContent='center'>
								{mockData.progressData.map((item, index) => (
									<VStack key={index} alignItems='center'>
										<Text fontSize={12} fontWeight='$bold' color='#333' mb='$2'>
											{item.title}
										</Text>
										<Box
											borderRadius='$full'
											justifyContent='center'
											alignItems='center'
											borderWidth={8}
											borderColor='#D9D9D9'
											width={60}
											height={60}>
											<CircularProgress
												value={item.value}
												maxValue={item.value}
												radius={25}
												duration={0.5}
												progressValueColor='#000'
												activeStrokeColor='#367B71'
												inActiveStrokeColor='#367B71'
												inActiveStrokeWidth={4}
												activeStrokeWidth={4}
												progressValueStyle={{ fontWeight: "bold", fontSize: 16 }}
												valueSuffix={""}
												clockwise={false}
											/>
										</Box>
									</VStack>
								))}
							</HStack>
							<VStack>
								<ScrollView horizontal showsHorizontalScrollIndicator={false} ref={scrollViewRef} onScroll={handleScroll} scrollEventThrottle={16}>
									<HStack space='md'>
										{mockData.anaesthesiaTypes.map((item, index) => (
											<Box key={index} borderColor='#367B71' borderWidth={1} p='$3' borderRadius={16} width={107}>
												<VStack space='sm' flex={1} justifyContent='space-between'>
													<Text fontSize={12} textAlign='center' fontWeight='$bold' color='#333'>
														{item.title}
													</Text>
													<Center>
														<Text fontSize={16} fontWeight='bold' color='#006466'>
															{item.count ?? ""}
														</Text>
													</Center>
												</VStack>
											</Box>
										))}
									</HStack>
								</ScrollView>

								<HStack justifyContent='center' mt='$2'>
									{mockData.anaesthesiaTypes.map((_, index) => (
										<Pressable key={index} onPress={() => scrollToIndex(index)}>
											<View
												style={{
													width: index === activeIndex ? 20 : 8,
													height: 8,
													borderRadius: 4,
													backgroundColor: index === activeIndex ? "#006466" : "#979797",
													marginHorizontal: 4,
												}}
											/>
										</Pressable>
									))}
								</HStack>
							</VStack>
						</VStack>
					</Box>
					<DynamicBarGraph data={casesLoggedData} />
					<Box bg='#1E1E1E' p='$6'>
						<VStack space='md'>
							<HStack justifyContent='space-between' alignItems='center'>
								<Text color='white' fontSize={12} fontWeight='bold'>
									ASA Grades
								</Text>
								<HStack space='sm'>
									{timePeriods.map((period) => (
										<Pressable
											key={period}
											onPress={() => setSelectedPeriod(period)}
											style={{
												backgroundColor: selectedPeriod === period ? "#006466" : "transparent",
												borderColor: selectedPeriod === period ? "#006466" : "white",
												borderWidth: 1,
												borderRadius: 20,
												paddingHorizontal: 12,
												paddingVertical: 4,
											}}>
											<Text color='white' fontSize='$xs'>
												{period}
											</Text>
										</Pressable>
									))}
								</HStack>
							</HStack>
							<VStack space='md'>
								<HStack justifyContent='space-between'>
									{grades.map((item) => (
										<Text key={item.grade} color='white' fontSize={12}>
											{item.grade}
										</Text>
									))}
								</HStack>
								<View style={{ height: 1, backgroundColor: "white", marginVertical: 2 }} />
								<HStack justifyContent='space-between'>
									{grades.map((item) => (
										<View
											key={item.grade}
											style={{
												width: 50,
												height: 50,
												borderRadius: 25,
												backgroundColor: "white",
												justifyContent: "center",
												alignItems: "center",
											}}>
											<Text color='#CC3F0C' fontSize='$lg' fontWeight='bold'>
												{item.value}
											</Text>
										</View>
									))}
								</HStack>
							</VStack>
						</VStack>
					</Box>

					<Box p='$4' borderRadius='$lg'>
						<VStack space='md'>
							<HStack justifyContent='space-between' alignItems='center'>
								<Text fontSize={16} fontWeight='bold'>
									Top 3
								</Text>
								<HStack space='xs'>
									{top3TimePeriods.map((period) => (
										<Pressable
											key={period}
											onPress={() => setSelectedTop3Period(period)}
											style={{
												backgroundColor: selectedTop3Period === period ? "#006466" : "transparent",
												borderColor: "#006466",
												borderWidth: 1,
												borderRadius: 20,
												paddingHorizontal: 12,
												paddingVertical: 4,
											}}>
											<Text color={selectedTop3Period === period ? "white" : "#006466"} fontSize='$xs'>
												{period}
											</Text>
										</Pressable>
									))}
								</HStack>
							</HStack>

							<VStack space='md'>
								<VStack>
									<Text fontSize={12} color='#979797' mb='$2'>
										Regional techniques
									</Text>
									<View style={{ height: 1, backgroundColor: "#666", marginBottom: 8 }} />
									<HStack flexWrap='wrap' justifyContent='space-between'>
										{regionalTechniques.map((item, index) => renderCard(item))}
									</HStack>
								</VStack>

								<VStack>
									<Text fontSize={12} color='#979797' mb='$2'>
										Chronic Pain log
									</Text>
									<View style={{ height: 1, backgroundColor: "#666", marginBottom: 8 }} />
									<HStack flexWrap='wrap' justifyContent='space-between'>
										{chronicPainLog.map((item, index) => renderCard(item))}
									</HStack>
								</VStack>

								<VStack>
									<Text fontSize={12} color='#979797' mb='$2'>
										Critical Care Procedures
									</Text>
									<View style={{ height: 1, backgroundColor: "#666", marginBottom: 8 }} />
									<HStack flexWrap='wrap' justifyContent='space-between'>
										{CriticalCareProcedures.map((item, index) => renderCard(item))}
									</HStack>
								</VStack>
							</VStack>
						</VStack>
					</Box>
				</ScrollView>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default observer(AnesthesiologyDashboard);
