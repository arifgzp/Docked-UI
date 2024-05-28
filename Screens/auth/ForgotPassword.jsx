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
			navigation.navigate("Main Page");
		} else {
			// If credentials don't match, display error message
			setEmailError("Please enter valid email");
		}
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box flex={3 / 4}>
					<VStack space='4xl'>
						<Box paddingLeft={20} paddingRight={20} paddingTop={30}>
							<VStack space='md'>
								<Text bold size='2xl'>
									Reset Password
								</Text>
								<Text size='sm'>To be docked as member, provide your email id to receive an OTP.</Text>
							</VStack>
						</Box>
						<Box>
							<FormControl size='md' isDisabled={false} isInvalid={sendOTPPressed && !!emailError} isReadOnly={false} isRequired={false} gap={"$2"}>
								<Box justifycontent='center' alignItems='center'>
									<Input width={"$80%"} variant='underlined'>
										<InputField type='text' onChangeText={handleChangeEmail} value={formData.email} placeholder='Email' />
									</Input>
									{sendOTPPressed && emailError && (
										<FormControlError width={"$80%"}>
											<FormControlErrorIcon as={AlertCircleIcon} />
											<FormControlErrorText>{emailError}</FormControlErrorText>
										</FormControlError>
									)}
								</Box>
							</FormControl>
						</Box>
						<Box justifycontent='center' alignItems='center'>
							<Button onPress={handleSendOTP} size='lg' variant='primary'>
								<ButtonText>Send OTP</ButtonText>
							</Button>
						</Box>
					</VStack>
				</Box>
				<Box flex={1 / 4} justifyContent='center'>
					<VStack space='sm'>
						<Text textAlign='center' bold fontFamily='Inter'>
							Already A Member?
						</Text>
						<Box justifycontent='center' alignItems='center'>
							<Button onPress={() => navigation.navigate("Login Page")} variant='secondary' size='lg'>
								<ButtonText textAlign='center'>Member Login</ButtonText>
							</Button>
						</Box>
					</VStack>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default ForgotPasswordPage;
