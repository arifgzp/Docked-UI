import React, { useState } from "react";
import {
	Box,
	Text,
	Input,
	VStack,
	HStack,
	FormControl,
	InputField,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
	ButtonIcon,
	KeyboardAvoidingView,
	ScrollView,
	Image,
	InputIcon,
	InputSlot,
} from "@gluestack-ui/themed";
import { Platform } from "react-native";

import { Eye, EyeOff } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "../../models";
import AppStore from "../../stores/AppStore";
import Loader from "../../components/Loader";
import { observer } from "mobx-react";
import { ImageAssets } from "../../../assets/Assets";
import appStoreInstance from "../../stores/AppStore";

const LoginPage = ({ navigation }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [loginPressed, setLoginPressed] = useState(false);

	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const handleChangeEmail = (text) => {
		setFormData({ ...formData, email: text });
	};

	const handleChangePassword = (text) => {
		setFormData({ ...formData, password: text });
	};

	const handleShowPasswordState = () => {
		setPasswordVisible((showState) => {
			return !showState;
		});
	};

	const handleLogin = async () => {
		setLoginPressed(true);
		if (!formData.email && !formData.password) {
			setEmailError("Email is required");
			setPasswordError("Password is required");
		}
		if (!formData.email) {
			setEmailError("Email is required");
			return;
		} else {
			setEmailError("");
		}

		if (!formData.password) {
			setPasswordError("Password is required");
			return;
		} else {
			setPasswordError("");
		}

		try {
			const response = await AppStore.SignIn({ userName: formData.email, password: formData.password });

			if (response) {
				console.log("login response", response);
				AppStore.setUserName(formData.email);
				AppStore.setUserPassword(formData.password);
				switch (response.userStatus) {
					case "REGISTERED":
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
							AppStore.setDesignationOthers(fetchProfileData.designationOthers);
							AppStore.setWorkPlace(fetchProfileData.workPlace);
							AppStore.setCity(fetchProfileData.city);
							AppStore.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
							AppStore.setYearOfRegistration(fetchProfileData.yearOfRegistration);
							AppStore.setMedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
						}

						const logQuery = store.fetchUserLogProfile(response.userName);
						setQuery(logQuery);

						const finishFetchingLogProfile = await logQuery;
						console.log("finishFetchingLogProfile", finishFetchingLogProfile);

						if (finishFetchingLogProfile) {
							console.log("finishFetchingLogProfile.data.queryUser[0]", finishFetchingLogProfile.queryUser[0].logProfile);
							const userLogProfileData = finishFetchingLogProfile.queryUser[0].logProfile;
							console.log("userLogProfileData", userLogProfileData);
							AppStore.setLogProfile(userLogProfileData);
						}
						console.log("Unknown:", response.userStatus);
						break;

					case "WIZARD_PENDING":
						console.log("Unknown:", response.userStatus);
						navigation.navigate("Profile Setup Page");
						break;

					case "VERIFICATION_REQUIRED":
						console.log("Unknown:", response.userStatus);
						navigation.navigate("Enter Email OTP Page");
						break;

					default:
						console.log("Unknown user status:", response.userStatus);
				}
			} else {
				// If credentials don't match, display error message
				setEmailError("Please Enter valid Email Address");
				setPasswordError("Please Enter the Correct Password");
			}
		} catch (error) {
			console.error("Login error:", error);
			setEmailError("An error occurred during login. Please try again.");
			setPasswordError("An error occurred during login. Please try again.");
		}

		// Bypassing the login for development purposes
		// navigation.navigate("Main Page");
	};

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, zIndex: 999 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
					<Box flex={1} backgroundColor='$primaryBackground'>
						<Image w='$100%' h='$100%' position='absolute' top={0} source={ImageAssets.loginBG} alt='Docked-Logo' />
						<Box height='$35%'>
							<Image width={140} height={100} source={ImageAssets.logo} alt='Docked-Logo' />
						</Box>
						<Box height='$65%'>
							<Box p='$5'>
								<VStack space='2xl'>
									<Box>
										<Text fontFamily='Inter_Bold' fontSize='$2xl' color='#FFFFFC'>
											Welcome Back
										</Text>
									</Box>
									<VStack space='sm'>
										<Box>
											<FormControl size='sm' isDisabled={false} isInvalid={loginPressed && !!emailError} isReadOnly={false} isRequired={false}>
												<Text pb='$1' color='#515151' fontSize='$xs'>
													Email Address
												</Text>
												<Input bg='#FFFFFC' variant='outline'>
													<InputField
														type='text'
														onChangeText={handleChangeEmail}
														value={formData.email}
														placeholder='Email Address'
														onFocus={() => setEmailError("")}
													/>
												</Input>
												{loginPressed && emailError && (
													<FormControlError>
														<FormControlErrorIcon as={AlertCircleIcon} />
														<FormControlErrorText>{emailError}</FormControlErrorText>
													</FormControlError>
												)}
											</FormControl>
										</Box>
										<Box>
											<FormControl size='sm' isDisabled={false} isInvalid={loginPressed && !!passwordError} isReadOnly={false} isRequired={false}>
												<Text pb='$1' color='#515151' fontSize='$xs'>
													Password
												</Text>
												<Input bg='#FFFFFC' variant='outline'>
													<InputField
														onChangeText={handleChangePassword}
														value={formData.password}
														type={passwordVisible ? "text" : "password"}
														placeholder='Password'
														onFocus={() => setPasswordError("")}
													/>
													<InputSlot pr='$3' onPress={handleShowPasswordState}>
														<InputIcon as={passwordVisible ? Eye : EyeOff} color='#E6E3DB' />
													</InputSlot>
												</Input>

												{loginPressed && passwordError && (
													<FormControlError>
														<FormControlErrorIcon as={AlertCircleIcon} />
														<FormControlErrorText>{passwordError}</FormControlErrorText>
													</FormControlError>
												)}
											</FormControl>
											<Box justifycontent='flex-end' alignItems='flex-end'>
												<Button variant='link' size='sm' onPress={() => navigation.navigate("Forgot Password Page")}>
													<ButtonText color='#367B71'>Forgot Password?</ButtonText>
												</Button>
											</Box>
										</Box>
									</VStack>
								</VStack>
							</Box>
							<Box w='$100%' p='$5'>
								<VStack w='$100%' space='sm'>
									<Box>
										<Button onPress={handleLogin} variant='primary'>
											<ButtonText>Member Login</ButtonText>
										</Button>
									</Box>
									<HStack w='$100%' space='sm' justifyContent='center' alignItems='center'>
										<Text>New to Docked?</Text>
										<Box>
											<Button variant='link' size='sm' onPress={() => navigation.navigate("Register Mobile Number Page")}>
												<ButtonText color='#367B71'>Sign Up</ButtonText>
											</Button>
										</Box>
									</HStack>
								</VStack>
							</Box>
						</Box>
					</Box>
				</ScrollView>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(LoginPage);
