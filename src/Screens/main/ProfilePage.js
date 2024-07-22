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
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ImageAssets } from "../../../assets/Assets";
import { Image } from "@gluestack-ui/themed";
import appStoreInstance from "../../stores/AppStore";
import { Divider } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useQuery } from "../../models";
import Loader from "../../components/Loader";
import { format } from "date-fns";

const ProfilePage = ({ navigation }) => {
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const handleLogout = () => {
		// Implement your logout logic here
		console.log("User logged out");
		// For example, you might want to navigate to a login screen or clear user data
		//props.navigation.navigate("Login Page"); // Assuming you have a LoginScreen in your navigator
		appStoreInstance.SignOut();
	};

	useEffect(() => {
		if (!appStoreInstance.SuperSpecialty) {
			console.log("appStoreInstance.UserName", appStoreInstance.UserName);
			const fetchUserProfile = async () => {
				try {
					const userQuery = store.fetchUserById(appStoreInstance.UserName);
					setQuery(userQuery);
					const finishFetchingUserProfile = await userQuery;
					if (finishFetchingUserProfile) {
						console.log("finishFetchingUserProfile", finishFetchingUserProfile);
						const fetchProfileData = finishFetchingUserProfile.queryUser[0];
						console.log("finishFetchingUserProfile  FOR PROFILE PAGE   CITY", fetchProfileData.city);
						appStoreInstance.setSuperSpecialty(fetchProfileData.superSpecialty);
						appStoreInstance.setSubSpecialty(fetchProfileData.subSpecialty);
						appStoreInstance.setDesignation(fetchProfileData.designation);
						appStoreInstance.setDesignationOthers(fetchProfileData.designationOthers);
						appStoreInstance.setWorkPlace(fetchProfileData.workPlace);
						appStoreInstance.setCity(fetchProfileData.city);
						appStoreInstance.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
						appStoreInstance.setYearOfRegistration(fetchProfileData.yearOfRegistration);
						appStoreInstance.setMedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
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

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading} queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "height" : "height"}
				style={{ flex: 1, zIndex: 999 }}
				keyboardShouldPersistTaps='handled'>
				<Box h='$full' p={10} pl={15} flex={1} backgroundColor='$secondaryBackground'>
					<ScrollView>
						<VStack mb={"$20%"} space='xl'>
							<Box mt={10}>
								<HStack space='2xl' alignItems='center'>
									<Image width={50} height={50} source={ImageAssets.profileIcon} alt='Docked-Logo' />
									<VStack>
										<Text fontFamily='Inter_Bold' color='#000' size='xl'>
											{appStoreInstance.Name}
										</Text>
										<Text>{appStoreInstance.UserBroadSpecialty}</Text>
									</VStack>
								</HStack>
							</Box>
							<Divider />
							<Box>
								<VStack space='md'>
									<Text fontFamily='Inter_Bold' color='#000' size='sm	'>
										Your Expertise
									</Text>
									<VStack>
										<Text fontFamily='Inter_Medium' color='#000' size='sm'>
											Broad Speciality
										</Text>
										<Text size='xs'>{appStoreInstance.UserBroadSpecialty ? appStoreInstance.UserBroadSpecialty : "—"}</Text>
									</VStack>
									<HStack w='$100%'>
										<VStack w='$50%'>
											<Text fontFamily='Inter_Medium' color='#000' size='sm'>
												Super Speciality
											</Text>
											<Text size='xs'>{appStoreInstance.SuperSpecialty ? appStoreInstance.SuperSpecialty : "—"}</Text>
										</VStack>
										<VStack w='$50%'>
											<Text fontFamily='Inter_Medium' color='#000' size='sm'>
												Sub Speciality
											</Text>
											<Text size='xs'>{appStoreInstance.SubSpecialty ? appStoreInstance.SubSpecialty : "—"}</Text>
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
										<Text fontFamily='Inter_Medium' color='#000' size='sm'>
											Designation
										</Text>
										<Text size='xs'>
											{appStoreInstance.Designation
												? appStoreInstance.Designation === "Others"
													? appStoreInstance.DesignationOthers
													: appStoreInstance.Designation
												: "—"}
										</Text>
									</VStack>
									<HStack w='$100%'>
										<VStack w='$50%'>
											<Text fontFamily='Inter_Medium' color='#000' size='sm'>
												Workplace
											</Text>
											<Text size='xs'>{appStoreInstance.Workplace ? appStoreInstance.Workplace : "—"}</Text>
										</VStack>
										<VStack w='$50%'>
											<Text fontFamily='Inter_Medium' color='#000' size='sm'>
												City
											</Text>
											<Text size='xs'>{appStoreInstance.City ? appStoreInstance.City : "—"}</Text>
										</VStack>
									</HStack>
								</VStack>
							</Box>
							<Divider />
							<Box>
								<VStack space='md'>
									<HStack justifyContent='space-between'>
										<Text fontFamily='Inter_Bold' color='#000' size='sm	'>
											Medical Documentation
										</Text>
										<HStack space='xs' alignItems='center'>
											<Box width={15} height={15} borderRadius='$full' backgroundColor='#CC3F0C'></Box>
											<Text color='#CC3F0C' size='xs'>
												To be Verified
											</Text>
										</HStack>
									</HStack>
									<VStack>
										<Text fontFamily='Inter_Medium' color='#000' size='sm'>
											Medical Council Name
										</Text>
										<Text size='xs'>{appStoreInstance.MedicalCouncilName ? appStoreInstance.MedicalCouncilName : "—"}</Text>
									</VStack>
									<VStack>
										<Text fontFamily='Inter_Medium' color='#000' size='sm'>
											Year of Registration
										</Text>
										<Text size='xs'>
											{appStoreInstance.YearOfRegistration ? format(new Date(appStoreInstance.YearOfRegistration), "d/M/yyyy") : "—"}
										</Text>
									</VStack>
									<VStack>
										<Text fontFamily='Inter_Medium' color='#000' size='sm'>
											Medical Registration Number
										</Text>
										<Text size='xs'>{appStoreInstance.MedicalRegistrationNumber ? appStoreInstance.MedicalRegistrationNumber : "—"}</Text>
									</VStack>
								</VStack>
							</Box>
							<Divider />
							<Box>
								<Button onPress={handleLogout} size='sm' variant='secondary'>
									<ButtonText pr={2} pl={2}>
										Logout
									</ButtonText>
								</Button>
							</Box>
						</VStack>
					</ScrollView>
				</Box>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(ProfilePage);
