import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import {
	Box,
	Text,
	Input,
	VStack,
	FormControlLabel,
	FormControl,
	FormControlLabelText,
	InputField,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
	LinearGradient,
} from "@gluestack-ui/themed";
import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { useState } from "react";
import { HStack } from "@gluestack-ui/themed";

const ForgotPasswordPage = ({ navigation }) => {
	const [sendOTPPressed, setsendOTPPressed] = useState(false);
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [emailError, setEmailError] = useState("");
	const handleChangeEmail = (text) => {
		setFormData({ ...formData, email: text });
	};
	const handleSendOTP = () => {
		setsendOTPPressed(true);

		if (!formData.email) {
			setEmailError("Email is required");
			return;
		} else {
			setEmailError("");
		}

		// Check if email and password match predefined credentials
		if (formData.email === "docked@gmail.com") {
			// If credentials match, navigate to Main Page
			navigation.navigate("ResetPasswordEmailSentPage", { enteredMail: formData.email });
		} else {
			// If credentials don't match, display error message
			setEmailError("Please enter valid email");
		}
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box flex={3 / 4}>
					<VStack space='4xl'>
						<Box paddingLeft={20} paddingRight={20} paddingTop={30}>
							<VStack space='md'>
								<Text bold size='2xl'>
									Reset Password
								</Text>
								<Text size='sm'>To reset your password, please provide your email id to receive an OTP.</Text>
							</VStack>
						</Box>
						<Box>
							<FormControl
								px='$5'
								size='md'
								isDisabled={false}
								isInvalid={sendOTPPressed && !!emailError}
								isReadOnly={false}
								isRequired={false}
								gap={"$2"}>
								<Box justifycontent='center' alignItems='center'>
									<Text alignSelf='flex-start' pb='$1' color='#515151' fontSize='$xs'>
										Email Address
									</Text>
									<Input bg='#FFFFFC' variant='outline'>
										<InputField type='text' onChangeText={handleChangeEmail} value={formData.email} placeholder='Email' />
									</Input>
									{sendOTPPressed && emailError && (
										<FormControlError alignSelf='flex-start'>
											<FormControlErrorIcon as={AlertCircleIcon} />
											<FormControlErrorText>{emailError}</FormControlErrorText>
										</FormControlError>
									)}
								</Box>
							</FormControl>
						</Box>
						<Box px='$5'>
							<Button onPress={handleSendOTP} size='lg' variant='primary'>
								<ButtonText>Send OTP</ButtonText>
							</Button>
						</Box>
					</VStack>
				</Box>
				<Box flex={1 / 4} justifyContent='center'>
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
		</KeyboardAvoidingView>
	);
};

export default ForgotPasswordPage;
