import { Box, Text, VStack, Button, ButtonText, HStack, ScrollView, ButtonIcon, KeyboardAvoidingView } from "@gluestack-ui/themed";
import React, { lazy, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BackHandler, Platform } from "react-native";
import { UserStatus, useQuery } from "../../models";
import Loader from "../Loader";
import { observer } from "mobx-react";
import { Ionicons } from "@expo/vector-icons";
import appStoreInstance from "../../stores/AppStore";
import AppStore from "../../stores/AppStore";
const SetupProfile = ({ config, navigation, enteredMail, enteredPassword }) => {
	const [image, setImage] = useState(null);
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [currentStep, setCurrentStep] = useState(1);
	const [startingStep, setStartingStep] = useState(1);
	const currentConfig = config[currentStep - 1];
	const [isLoading, setIsLoading] = useState(false);

	const formFields = currentConfig?.content?.config?.fields || [];
	const currentStepLabel = currentConfig?.label || "";

	const { control, handleSubmit, formState, reset, watch, setValue } = useForm({
		defaultValues: {
			broadSpecialty: "",
			superSpecialty: "",
			subSpecialty: "",
			designation: "",
			designationOthers: "",
			workPlace: "",
			city: "",
			medicalCouncilName: "",
			medicalRegistrationNumber: "",
			yearOfRegistration: new Date(),
		},
	});
	const CurrentStepComponent = currentConfig ? currentConfig.content.component : null;

	function removeBeforeLastSlash(str) {
		// Find the position of the last slash
		const lastSlashIndex = str.lastIndexOf("/");

		// If there is no slash in the string, return the original string
		if (lastSlashIndex === -1) {
			return str;
		}

		// Return the substring after the last slash
		return str.substring(lastSlashIndex + 1);
	}

	const handleOnClick = async (data) => {
		if (currentStep === config.length) {
			console.log("Finsished", data);
			if (image) {
				const file = image[0];
				const fileExtenstion = removeBeforeLastSlash(file.mimeType);
				const filePath = `${appStoreInstance.UserId}/${appStoreInstance.UserId}.${fileExtenstion}`;
				appStoreInstance.UploadImage(image);
				data.imagePath = filePath;
			}
			data.userStatus = "REGISTERED";
			try {
				setIsLoading(true);
				const query = store.updateUser(appStoreInstance.UserId, { set: data });
				AppStore.setBroadSpecialty(data.broadSpecialty);
				AppStore.setImagePath(data.imagePath);
				console.log("Current Data 2", query);
				setQuery(query);
				const finishWizardProcessData = await query;
				if (finishWizardProcessData) {
					console.log("finishWizardProcessData FADTEWS AHSJKBFBJKB", finishWizardProcessData);
					const finishWizardData = finishWizardProcessData.updateUser.user[0];
					console.log("finishWizardProcessData FADTEWS", finishWizardProcessData.updateUser.user[0]);
					navigation.navigate("Main Landing Page", { UserSpecialty: finishWizardProcessData.updateUser.user[0].broadSpecialty });
					AppStore.setBroadSpecialty(finishWizardProcessData.updateUser.user[0].broadSpecialty);
					AppStore.setUserId(finishWizardProcessData.updateUser.user[0].id);
					AppStore.setName(finishWizardProcessData.updateUser.user[0].name);

					const userQuery = store.fetchUserById(appStoreInstance.UserName);
					setQuery(userQuery);
					const finishFetchingUserProfile = await userQuery;
					if (finishFetchingUserProfile) {
						console.log("finishFetchingUserProfile", finishFetchingUserProfile);
						const fetchProfileData = finishFetchingUserProfile.queryUser[0];
						console.log("finishFetchingUserProfile     CITY", fetchProfileData.city);
						AppStore.setSuperSpecialty(fetchProfileData.superSpecialty);
						AppStore.setSubSpecialty(fetchProfileData.subSpecialty);
						AppStore.setDesignation(fetchProfileData.designation);
						AppStore.setDesignationOthers(fetchProfileData.designationOthers);
						AppStore.setWorkPlace(fetchProfileData.workPlace);
						AppStore.setCity(fetchProfileData.city);
						AppStore.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
						AppStore.setYearOfRegistration(fetchProfileData.yearOfRegistration);
						AppStore.setMedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
						AppStore.setImagePath(fetchProfileData.imagePath);
						AppStore.setButtonPressed(false);
					}

					const query = store.fetchUserLogProfile(response.userName);
					setQuery(query);

					const finishFetchingLogProfile = await query;
					console.log("finishFetchingLogProfile", finishFetchingLogProfile);

					if (finishFetchingLogProfile) {
						console.log("finishFetchingLogProfile.data.queryUser[0]", finishFetchingLogProfile.queryUser[0].logProfile);
						const userLogProfileData = finishFetchingLogProfile.queryUser[0].logProfile;
						console.log("userLogProfileData", userLogProfileData);
						AppStore.setLogProfile(userLogProfileData);
					}
					// appStoreInstance.SignOut();
					// navigation.navigate("Login Page");
				}
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		} else if (startingStep === currentStep) {
			console.log("Current Data for not uploading users", data);
			// try {
			// 	const query = store.updateUser(AppStore.UserId, { set: data });
			// 	console.log("Current Data 2", data);
			// 	setQuery(query);
			// 	const responseData = await query;
			// } catch (error) {
			// 	console.log(error);
			// } finally {
			// 	setIsLoading(false);
			// }
			setStartingStep(startingStep + 1);
			setCurrentStep(currentStep + 1);
			console.log("Current Data", data);
		} else if (currentStep < config.length) {
			console.log("Current Data 3", data);
			setCurrentStep(currentStep + 1);
		} else if (currentStep > config.length) {
			console.log("Current Data 4", data);
			console.log("Finished");
		}
		//
		// console.log("image", image, typeof image);
	};

	const handleSkip = async (data) => {
		console.log("data when skipping the create profile", data);
		data.userStatus = "REGISTERED";
		try {
			setIsLoading(true);
			const query = store.updateUser(AppStore.UserId, { set: data });
			AppStore.setBroadSpecialty(data.broadSpecialty);
			console.log("Current Data 2", query);
			setQuery(query);
			const finishWizardProcessData = await query;
			if (finishWizardProcessData) {
				console.log("finishWizardProcessData FADTEWS AHSJKBFBJKB", finishWizardProcessData);
				const finishWizardData = finishWizardProcessData.updateUser.user[0];
				console.log("finishWizardProcessData FADTEWS", finishWizardProcessData.updateUser.user[0]);
				navigation.navigate("Main Landing Page", { UserSpecialty: finishWizardProcessData.updateUser.user[0].broadSpecialty });
				AppStore.setBroadSpecialty(finishWizardProcessData.updateUser.user[0].broadSpecialty);
				AppStore.setUserId(finishWizardProcessData.updateUser.user[0].id);
				AppStore.setName(finishWizardProcessData.updateUser.user[0].name);

				const userQuery = store.fetchUserById(appStoreInstance.UserName);
				setQuery(userQuery);
				const finishFetchingUserProfile = await userQuery;
				if (finishFetchingUserProfile) {
					console.log("finishFetchingUserProfile", finishFetchingUserProfile);
					const fetchProfileData = finishFetchingUserProfile.queryUser[0];
					console.log("finishFetchingUserProfile     CITY", fetchProfileData.city);
					AppStore.setSuperSpecialty(fetchProfileData.superSpecialty);
					AppStore.setSubSpecialty(fetchProfileData.subSpecialty);
					AppStore.setDesignation(fetchProfileData.designation);
					AppStore.setDesignationOthers(fetchProfileData.designationOthers);
					AppStore.setWorkPlace(fetchProfileData.workPlace);
					AppStore.setCity(fetchProfileData.city);
					AppStore.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
					AppStore.setYearOfRegistration(fetchProfileData.yearOfRegistration);
					AppStore.setMedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
					AppStore.setImagePath(fetchProfileData.imagePath);
					AppStore.setButtonPressed(false);
				}

				const query = store.fetchUserLogProfile(response.userName);
				setQuery(query);

				const finishFetchingLogProfile = await query;
				console.log("finishFetchingLogProfile", finishFetchingLogProfile);

				if (finishFetchingLogProfile) {
					console.log("finishFetchingLogProfile.data.queryUser[0]", finishFetchingLogProfile.queryUser[0].logProfile);
					const userLogProfileData = finishFetchingLogProfile.queryUser[0].logProfile;
					console.log("userLogProfileData", userLogProfileData);
					AppStore.setLogProfile(userLogProfileData);
				}
				// appStoreInstance.SignOut();
				// navigation.navigate("Login Page");
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const onStepClick = (index) => {
		setCurrentStep(index + 1);
	};

	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
			if (currentStep > 1) {
				setCurrentStep(currentStep - 1);
				return true; // Prevent default behavior (exit app)
			} else if (currentStep === 1) {
				return true; // Prevent going back at all when on step 1
			}
			return false; // Allow default behavior (exit app)
		});

		return () => backHandler.remove(); // Cleanup the event listener on unmount
	}, [currentStep]);

	return (
		<Loader apiLoadingInfo={isLoading}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "height" : "height"}
				style={{ flex: 1, zIndex: 999 }}
				keyboardShouldPersistTaps='handled'>
				<Box pt='$12' flex={1} h='$full' backgroundColor='$primaryBackground'>
					<VStack flex={1} h='$full' space='lg' justifyContent='space-between'>
						<ScrollView>
							<Box p='$5' pt='$0'>
								<VStack paddingTop={35} space='md'>
									<HStack alignItems='center' justifyContent='space-between'>
										<Text bold italic color='#CC3F0C'>
											Before you start...
										</Text>
										{startingStep > 1 ? (
											<Box justifycontent='center' alignItems='center'>
												<Button width={"$40%"} onPress={handleSubmit(handleSkip)} size='sm' variant='link'>
													<ButtonText underline fontFamily='Inter_Bold' textAlign='center'>
														Skip
													</ButtonText>
												</Button>
											</Box>
										) : null}
									</HStack>
									<HStack>
										<Text color='#000' bold size='2xl'>
											Let’s customise your dashboard
										</Text>
									</HStack>
									{/* <HStack space='2xl'>
							{config.map((step, index) => {
								const isDisabled = index < startingStep ? false : true;
								return (
									<Button
										onPress={onStepClick.bind(null, index)}
										key={index}
										disabled={isDisabled}
										width={"$15%"}
										height={10}
										variant={isDisabled ? "disable" : "primary"}></Button>
								);
							})}
						</HStack> */}
									{/* <Text fontSize={14}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </Text> */}
									{/* <Text fontSize={14}>{currentStepLabel}</Text> */}
								</VStack>
							</Box>
							<Box width={"$100%"} justifyContent='center'>
								{CurrentStepComponent && (
									<ScrollView>
										<CurrentStepComponent
											image={image}
											setImage={setImage}
											reset={reset}
											control={control}
											formState={formState}
											formFields={formFields}
											setValue={setValue}
											watch={watch}
										/>
									</ScrollView>
								)}
							</Box>
						</ScrollView>
						<Box pb='$10' pr='$5' pl='$5'>
							<HStack width='$full' justifyContent={currentStepLabel !== "Your Expertise" ? "space-between" : "flex-end"} alignItems='center'>
								{currentStepLabel !== "Your Expertise" && (
									<Button
										borderWidth={1}
										borderRadius={"$full"}
										borderColor='rgba(54, 123, 113, 0.5)'
										onPress={() => setCurrentStep(currentStep - 1)}
										height={40}
										width={40}
										justifyContent='center'
										variant='link'>
										<ButtonIcon as={Ionicons} size={25} name='arrow-back-outline' color='#367B71' />
									</Button>
								)}
								<Box justifycontent='center' alignItems='center'>
									<Button onPress={handleSubmit(handleOnClick)} size='lg' variant='primary'>
										<ButtonText textAlign='center'>{currentStep === config.length ? "Finish" : "Next"}</ButtonText>
									</Button>
								</Box>
							</HStack>
						</Box>
					</VStack>
				</Box>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(SetupProfile);
