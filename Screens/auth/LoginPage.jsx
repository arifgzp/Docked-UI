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
import { ImageAssets } from "../../assets/Assets";
import { useQuery } from "../../src/models";
import AppStore from "../../src/stores/AppStore";
import Loader from "../../components/Loader";
import appStoreInstance from "../../src/stores/AppStore";
import { observer } from "mobx-react";

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
		const response = await AppStore.SignIn({ userName: formData.email, password: formData.password });
		if (response) {
			if (response.userStatus === "REGISTERED") {
				navigation.navigate("Main Page", { UserSpecialty: response.broadSpecilty });
				AppStore.setBroadSpecialty(response.broadSpecialty);
				AppStore.setUserId(response.id);
				const broadSpecialty = AppStore.UserBroadSpecialty;
				console.log("broadSpecialty", broadSpecialty);
			} else if (response.userStatus === "WIZARD_PENDING") {
				navigation.navigate("Profile Setup Page");
			} else {
				navigation.navigate("Enter Email OTP Page");
			}
		} else {
			// If credentials don't match, display error message
			setEmailError("Please enter valid credentials");
			setPasswordError("Please enter valid credentials");
		}
		//bypassing the login for development purposes
		//navigation.navigate("Main Page");
	};

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, zIndex: 999 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Box flex={1} backgroundColor='$primaryBackground'>
						<Box flex={1 / 4} justifyContent='flex-end' alignItems='center'>
							<Image width={200} height={75} source={ImageAssets.logo} alt='Docked-Logo' />
						</Box>
						<Box flex={2 / 4}>
							<VStack space='4xl'>
								<Box>
									<FormControl size='md' isDisabled={false} isInvalid={loginPressed && !!emailError} isReadOnly={false} isRequired={false} gap={"$2"}>
										<Box justifycontent='center' alignItems='center'>
											<Input width={"$80%"} variant='underlined'>
												<InputField type='text' onChangeText={handleChangeEmail} value={formData.email} placeholder='Email' />
											</Input>

											{loginPressed && emailError && (
												<FormControlError width={"$80%"}>
													<FormControlErrorIcon as={AlertCircleIcon} />
													<FormControlErrorText>{emailError}</FormControlErrorText>
												</FormControlError>
											)}
										</Box>
									</FormControl>
								</Box>
								<Box>
									<FormControl
										size='md'
										isDisabled={false}
										isInvalid={loginPressed && !!passwordError}
										isReadOnly={false}
										isRequired={false}
										gap={"$4"}>
										<Box justifycontent='center' alignItems='center'>
											<Input width={"$80%"} variant='underlined'>
												<InputField
													onChangeText={handleChangePassword}
													value={formData.password}
													type={passwordVisible ? "text" : "password"}
													placeholder='Password'
												/>
												<InputSlot pr='$3' onPress={handleShowPasswordState}>
													<InputIcon as={passwordVisible ? Eye : EyeOff} color='#1E1E1E' />
												</InputSlot>
											</Input>

											{loginPressed && passwordError && (
												<FormControlError width={"$80%"}>
													<FormControlErrorIcon as={AlertCircleIcon} />
													<FormControlErrorText>{passwordError}</FormControlErrorText>
												</FormControlError>
											)}
										</Box>
									</FormControl>
								</Box>
								<Box>
									<VStack space='lg'>
										<Box justifycontent='center' alignItems='center'>
											<Button onPress={handleLogin} borderRadius={10} variant='primary' size='lg'>
												<HStack justifyContent='center' alignItems='center' space='sm'>
													<ButtonText>Member Login</ButtonText>
													<ButtonIcon as={Ionicons} size={25} name='arrow-forward-outline' color='#1E1E1E' />
												</HStack>
											</Button>
										</Box>
										<Box justifycontent='center' alignItems='center'>
											<Button variant='link' size='sm' onPress={() => navigation.navigate("Forgot Password Page")}>
												<ButtonText underline>Reset Password</ButtonText>
											</Button>
										</Box>
									</VStack>
								</Box>
							</VStack>
						</Box>
						<Box flex={1 / 4} justifyContent='center'>
							<VStack space='sm'>
								<Text textAlign='center' bold fontFamily='Inter'>
									Create Member Account
								</Text>
								<Box justifycontent='center' alignItems='center'>
									<Button onPress={() => navigation.navigate("Register Mobile Number Page")} size='lg' variant='secondary'>
										<ButtonText fontFamily='Inter_Bold' textAlign='center'>
											Join
										</ButtonText>
									</Button>
								</Box>
							</VStack>
						</Box>
					</Box>
				</ScrollView>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(LoginPage);
