import { CheckIcon, CheckboxGroup, CheckboxIndicator } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
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
	LinearGradient,
	InputSlot,
	InputIcon,
} from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import FormValidation from "../../utils/FormValidation";
import appStoreInstance from "../../stores/AppStore";
import { observer } from "mobx-react";
import Loader from "../../components/Loader";

const ResetPasswordScreen = ({ navigation, route }) => {
	const { enteredMail } = route.params;
	const [formData, setFormData] = useState({ otp: "", email: "", password: "", reEnterPassword: "" });
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [resetPasswordVisible, setResetPasswordVisible] = useState(false);
	const [joinPressed, setJoinPressed] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [resetPasswordError, setResetPasswordError] = useState("");
	const [otpError, setOTPError] = useState("");
	const [nameError, setNameError] = useState("");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handelOtpWrongError = () => {
		setOTPError("OTP is invalid");
	};

	const handelResetPasswordClick = async () => {
		setJoinPressed(true);
		let isFormValid = true;
		if (!FormValidation.validateEmail(enteredMail)) {
			return;
		}
		if (!formData.password) {
			setPasswordError("please enter a new password");
			isFormValid = false;
		} else if (formData.password.length < 8) {
			setPasswordError("password shouldn't be less than 8 characters");
			isFormValid = false;
		}

		if (!formData.reEnterPassword) {
			setResetPasswordError("please enter re-enter your new password");
			isFormValid = false;
		}

		if (formData.reEnterPassword != formData.password) {
			setPasswordError("Entered password does not match");
			setResetPasswordError("Entered password does not match");
			isFormValid = false;
		}
		if (formData.otp == "") {
			setOTPError("Please enter OTP");
			isFormValid = false;
		}
		if (isFormValid) {
			try {
				let data = {
					User: {
						userName: enteredMail,
						password: formData.password,
						resetPasswordCode: formData.otp,
					},
				};
				appStoreInstance.executePasswordReset(data, navigation, handelOtpWrongError);
			} catch (error) {
				if (error == "InvalidOTPException") {
					setOTPError("Invalid OTP");
				}
			}
		}
	};

	const handleChangePassword = (text) => {
		setFormData({ ...formData, password: text });
	};

	const handleChangeReEnterPassword = (text) => {
		setFormData({ ...formData, reEnterPassword: text });
	};

	const handleChangeOTP = (text) => {
		setFormData({ ...formData, otp: text });
	};

	const handleShowPasswordState = () => {
		setPasswordVisible((showState) => {
			return !showState;
		});
	};

	const handleShowResetPasswordState = () => {
		setResetPasswordVisible((showState) => {
			return !showState;
		});
	};

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "height" : "height"}
				style={{ flex: 1, zIndex: 999 }}
				keyboardShouldPersistTaps='handled'>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Box w='$100%' flex={1} backgroundColor='$primaryBackground'>
						<Box w='$100%' flex={3 / 4} p='$5'>
							<VStack space='3xl'>
								<Box pb='$5'>
									<Text size='sm'>
										An OTP (One-Time Password) has been sent to your registered email to initiate the password reset process. Please check your inbox
										and use the provided OTP to reset your password.
									</Text>
								</Box>
								<Box gap='$2'>
									<Text size='xs'>New Password</Text>
									<FormControl size='md' isDisabled={false} isInvalid={joinPressed && passwordError} isReadOnly={false} isRequired={false}>
										<Box>
											<Input variant='outline'>
												<InputField
													onChangeText={handleChangePassword}
													value={formData.password}
													type={passwordVisible ? "text" : "password"}
													placeholder='New Password'
													onFocus={() => setPasswordError("")}
												/>
												<InputSlot pr='$3' onPress={handleShowPasswordState}>
													<InputIcon as={passwordVisible ? Eye : EyeOff} color='#1E1E1E' />
												</InputSlot>
											</Input>
											{joinPressed && passwordError && (
												<FormControlError>
													<FormControlErrorIcon as={AlertCircleIcon} />
													<FormControlErrorText>{passwordError}</FormControlErrorText>
												</FormControlError>
											)}
										</Box>
									</FormControl>
								</Box>
								<Box gap='$2'>
									<Text size='xs'>Re-enter New Password</Text>
									<FormControl size='md' isDisabled={false} isInvalid={joinPressed && resetPasswordError} isReadOnly={false} isRequired={false}>
										<Box>
											<Input variant='outline'>
												<InputField
													onChangeText={handleChangeReEnterPassword}
													value={formData.reEnterPassword}
													type={resetPasswordVisible ? "text" : "password"}
													placeholder='Re-enter New Password'
													onFocus={() => setResetPasswordError("")}
												/>
												<InputSlot pr='$3' onPress={handleShowResetPasswordState}>
													<InputIcon as={resetPasswordVisible ? Eye : EyeOff} color='#1E1E1E' />
												</InputSlot>
											</Input>
											{joinPressed && resetPasswordError && (
												<FormControlError>
													<FormControlErrorIcon as={AlertCircleIcon} />
													<FormControlErrorText>{resetPasswordError}</FormControlErrorText>
												</FormControlError>
											)}
										</Box>
									</FormControl>
								</Box>
								<Box gap='$2'>
									<Text size='xs'>Enter OTP</Text>
									<FormControl size='md' isDisabled={false} isInvalid={joinPressed && otpError} isReadOnly={false} isRequired={false}>
										<Box>
											<Input>
												<InputField
													inputMode='numeric'
													onChangeText={handleChangeOTP}
													value={formData.otp}
													type={"text"}
													placeholder='Enter 4 digit OTP'
													onFocus={() => setOTPError("")}
												/>
											</Input>
											{joinPressed && otpError && (
												<FormControlError>
													<FormControlErrorIcon as={AlertCircleIcon} />
													<FormControlErrorText>{otpError}</FormControlErrorText>
												</FormControlError>
											)}
										</Box>
									</FormControl>
								</Box>
								<Box w='$100%'>
									<Button w='$100%' onPress={handelResetPasswordClick} variant='primary'>
										<ButtonText>Reset</ButtonText>
									</Button>
								</Box>
							</VStack>
						</Box>
						<Box flex={1 / 4} paddingBottom={20} justifyContent='center'>
							<HStack w='$100%' space='sm' justifyContent='center' alignItems='center'>
								<Text>Already a member?</Text>
								<Box>
									<Button variant='link' size='sm' onPress={() => navigation.navigate("Login Page")}>
										<ButtonText color='#367B71'>Member Login</ButtonText>
									</Button>
								</Box>
							</HStack>
						</Box>
					</Box>
				</ScrollView>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(ResetPasswordScreen);
