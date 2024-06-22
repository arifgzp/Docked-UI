import { HStack, KeyboardAvoidingView } from "@gluestack-ui/themed";
import {
	Box,
	Text,
	Input,
	VStack,
	FormControl,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Platform } from "react-native";
import { OtpInput } from "react-native-otp-entry";

const RegisterMobileNumberOTPPage = ({ navigation, route }) => {
	const { enteredNumber } = route.params;
	const [verifyPressed, setVerifyPressed] = useState(false);
	const [OTPError, setOTPError] = useState("");
	const [otpInput, setOTPInput] = useState("");

	const handleVerify = () => {
		setVerifyPressed(true);

		if (!otpInput) {
			setOTPError("Please Enter OTP");
		} else if (otpInput === "1234") {
			navigation.navigate("Register Page", { enteredNumber: enteredNumber });
		} else {
			setOTPError("Invalid OTP");
		}
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box flex={1 / 4} paddingLeft={20} paddingRight={20} paddingTop={30} paddingBottom={100}>
					<VStack space='xl'>
						<Box>
							<VStack space='md'>
								<Text fontFamily='Inter_Bold' size='2xl'>
									Enter OTP
								</Text>
								<Text size='sm'>
									OTP sent successfully to <Text bold>{enteredNumber}</Text>
								</Text>
							</VStack>
						</Box>
						<Box>
							<FormControl size='md' isDisabled={false} isInvalid={verifyPressed && OTPError} isReadOnly={false} isRequired={false}>
								<OtpInput
									width={"$80%"}
									numberOfDigits={4}
									focusColor='#40E0D0'
									focusStickBlinkingDuration={500}
									onTextChange={(text) => setOTPInput(text)}
									onFilled={(text) => console.log(`OTP is ${text}`)}
									textInputProps={{
										accessibilityLabel: "One-Time Password",
									}}
								/>
								{verifyPressed && OTPError && (
									<FormControlError>
										<FormControlErrorIcon as={AlertCircleIcon} />
										<FormControlErrorText>{OTPError}</FormControlErrorText>
									</FormControlError>
								)}
							</FormControl>
						</Box>
					</VStack>
				</Box>
				<Box flex={3 / 4} position='fixed'>
					<VStack>
						<Box justifyContent='center' alignItems='center'>
							<Button onPress={handleVerify} variant='primary' size='lg'>
								<ButtonText textAlign='center' fontFamily='Inter_Bold'>
									Verify
								</ButtonText>
							</Button>
						</Box>
						<Button variant='link'>
							<ButtonText
								onPress={() => {
									navigation.navigate("Register Mobile Number Page");
								}}
								underline>
								Change Mobile Number
							</ButtonText>
						</Button>
					</VStack>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default RegisterMobileNumberOTPPage;
