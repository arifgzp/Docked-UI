import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Box, Text, HStack, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { View, Platform, useWindowDimensions, Pressable } from "react-native";
import { ScrollView, Image } from "@gluestack-ui/themed";
import { ImageAssets } from "../../../../assets/Assets";
import appStoreInstance from "../../../stores/AppStore";
import CircularProgress from "react-native-circular-progress-indicator";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { observer } from "mobx-react";
import NetworkUtils from "../../../utils/NetworkUtils";
import { useQuery } from "../../../models";
import DynamicBarGraph from "../../../components/DynamicBarGraph";
import Loader from "../../../components/Loader";

const ORMDashboard = ({ navigation }) => {
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
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
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "height" : "height"}
				style={{ flex: 1, zIndex: 999 }}
				keyboardShouldPersistTaps='handled'>
				<Box h='$full' backgroundColor='$primaryBackground' pt='$8'>
					<ScrollView>
						<Box bg='#E6E3DB' elevation={4} p={10}>
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

						<VStack pt='$4' space='xs'>
							<Box alignItems='center' justifyContent='center'>
								<Text>Dashboad Not Yet Available</Text>
							</Box>
						</VStack>
					</ScrollView>
				</Box>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(ORMDashboard);
