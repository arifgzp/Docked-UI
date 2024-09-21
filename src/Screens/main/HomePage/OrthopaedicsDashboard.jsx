import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Box, Text, HStack, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { View, Platform, useWindowDimensions, Pressable } from "react-native";
import { ScrollView, Image } from "@gluestack-ui/themed";
import { ImageAssets } from "../../../../assets/Assets";
import appStoreInstance from "../../../stores/AppStore";
import CircularProgress from "react-native-circular-progress-indicator";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { observer } from "mobx-react";
import NetworkUtils from "../../../utils/NetworkUtils";
import { useQuery } from "../../../models";
import DynamicBarGraph from "../../../components/DynamicBarGraph";

const OrthopaedicsDashboard = ({ navigation }) => {
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const mockData = {
		progressData: [
			{ title: "Observed", value: 30 },
			{ title: "Assisted", value: 170 },
			{ title: "Performed", value: 30 },
		],
	};

	// Existing Cases Logged Data
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

	// New Hours of Surgeries Data
	const hoursOfSurgeriesData = {
		title: "Duration (hrs)",
		periods: {
			Weekly: {
				labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				durations: [5.5, 7, 6.5, 8, 4.5, 3, 0],
			},
			Monthly: {
				labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
				durations: [34.5, 38, 29.5, 32],
			},
			Yearly: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				durations: [120, 115, 130, 125, 110, 140, 135, 120, 130, 145, 125, 105],
			},
		},
	};

	// New Procedures Log Data
	const proceduresLogData = {
		title: "Procedures (n)",
		periods: {
			Weekly: {
				labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				durations: [3, 5, 4, 6, 2, 1, 0],
			},
			Monthly: {
				labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
				durations: [21, 25, 18, 23],
			},
			Yearly: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				durations: [80, 75, 90, 85, 70, 95, 88, 82, 92, 98, 85, 72],
			},
		},
	};

	useEffect(() => {
		if (!appStoreInstance.ImagePath && isFocused) {
			const fetchUserProfile = async () => {
				try {
					const userQuery = store.fetchUserById(appStoreInstance.UserName);
					setQuery(userQuery);
					const finishFetchingUserProfile = await userQuery;
					if (finishFetchingUserProfile) {
						const fetchProfileData = finishFetchingUserProfile.queryUser[0];
						console.log("user data in dashboard", fetchProfileData);
						// Update appStoreInstance with fetched data
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
			fetchUserProfile();
		}
	}, [isFocused]);

	const requrl = NetworkUtils.getServerURL();
	const url = `${requrl}/download/profilePhoto:${appStoreInstance.ImagePath}`;

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
					<VStack space='xs'>
						<Box pt='$4' px='$4'>
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
												width={65}
												height={65}>
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
								<Box borderColor='#367B71' borderWidth={1.1} p='$4' borderRadius='$lg' mb='$4'>
									<HStack justifyContent='space-around' alignItems='center'>
										<Text style={{ fontSize: 12, fontWeight: "bold" }} color='#000' fontFamily='Inter_Bold'>
											Total hours of surgeries performed:
										</Text>
										<Text color='#367B71' style={{ fontSize: 16, fontWeight: "bold" }}>
											225 hours
										</Text>
									</HStack>
								</Box>
							</VStack>
						</Box>
						<DynamicBarGraph data={hoursOfSurgeriesData} />
						<DynamicBarGraph data={proceduresLogData} />
						<DynamicBarGraph data={casesLoggedData} />
					</VStack>
				</ScrollView>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default observer(OrthopaedicsDashboard);
