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
			workPlace: "",
			city: "",
			medicalCouncilName: "",
			medicalRegistrationNumber: "",
			yearOfRegistration: new Date(),
		},
	});
	const CurrentStepComponent = currentConfig ? currentConfig.content.component : null;

	const handleOnClick = async (data) => {
		if (currentStep === config.length) {
			console.log("Finsished", data);
			try {
				setIsLoading(true);
				const query = store.updateUser(appStoreInstance.UserId, { set: { userStatus: "REGISTERED" } });
				AppStore.setBroadSpecialty(data.broadSpecialty);
				console.log("Current Data 2", query);
				setQuery(query);
				const finishWizardProcessData = await query;
				if (finishWizardProcessData) {
					const response = await AppStore.SignIn({ userName: enteredMail, password: enteredPassword });

					if (response) {
						console.log("login response", response);
						if (response.userStatus === "REGISTERED") {
							navigation.navigate("Main Landing Page", { UserSpecialty: response.broadSpecialty });
							AppStore.setBroadSpecialty(response.broadSpecialty);
							AppStore.setUserId(response.id);

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
								AppStore.setWorkPlace(fetchProfileData.workPlace);
								AppStore.setCity(fetchProfileData.city);
								AppStore.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
								AppStore.setYearOfRegistration(fetchProfileData.yearOfRegistration);
								AppStore.setmedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
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
						} else if (response.userStatus === "WIZARD_PENDING") {
							navigation.navigate("Profile Setup Page");
						} else if (response.userStatus === "VERIFICATION_REQUIRED") {
							navigation.navigate("Enter Email OTP Page");
						}
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
			console.log("Current Data 1");
			try {
				setIsLoading(true);
				const query = store.updateUser(AppStore.UserId, { set: data });
				console.log("Current Data 2", query);
				setQuery(query);
				const responseData = await query;
				if (responseData) {
					onCancel();
				}
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
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
		// appStoreInstance.UploadImage(image);
		// console.log("image", image, typeof image);
	};
	const onSubmitData = async (data) => {
		console.log(data);
	};

	const handleSkip = async (data) => {
		console.log("data when skipping the create profile", data);
		try {
			setIsLoading(true);
			const query = store.updateUser(AppStore.UserId, { set: { userStatus: "REGISTERED" } });
			AppStore.setBroadSpecialty(data.broadSpecialty);
			console.log("Current Data 2", query);
			setQuery(query);
			const finishWizardProcessData = await query;
			if (finishWizardProcessData) {
				const response = await AppStore.SignIn({ userName: enteredMail, password: enteredPassword });

				if (response) {
					console.log("login response", response);
					if (response.userStatus === "REGISTERED") {
						navigation.navigate("Main Landing Page", { UserSpecialty: response.broadSpecialty });
						AppStore.setBroadSpecialty(response.broadSpecialty);
						AppStore.setUserId(response.id);

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
							AppStore.setWorkPlace(fetchProfileData.workPlace);
							AppStore.setCity(fetchProfileData.city);
							AppStore.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
							AppStore.setYearOfRegistration(fetchProfileData.yearOfRegistration);
							AppStore.setmedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
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
					} else if (response.userStatus === "WIZARD_PENDING") {
						navigation.navigate("Profile Setup Page");
					} else if (response.userStatus === "VERIFICATION_REQUIRED") {
						navigation.navigate("Enter Email OTP Page");
					}
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
				<Box flex={1} h='$full' backgroundColor='$primaryBackground'>
					<VStack flex={1} h='$full' space='lg' justifyContent='space-between'>
						<ScrollView>
							<Box p='$5'>
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
									<Text size='xl'>{currentStepLabel}</Text>
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
										/>
									</ScrollView>
								)}
							</Box>
						</ScrollView>
						<Box pb='$10' pr='$5' pl='$5'>
							<HStack width='$full' justifyContent={currentStepLabel !== "Your Expertise" ? "space-between" : "flex-end"} alignItems='center'>
								{currentStepLabel !== "Your Expertise" && (
									<Button
										onPress={() => setCurrentStep(currentStep - 1)}
										height={50}
										justifyContent='flex-start'
										alignItems='flex-start'
										variant='link'>
										<ButtonIcon as={Ionicons} size={50} name='arrow-back-circle-outline' color='#367B71' />
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
