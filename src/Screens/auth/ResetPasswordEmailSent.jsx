import {
	Box,
	Text,
	VStack,
	FormControl,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
	KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Platform } from "react-native";
import { OtpInput } from "react-native-otp-entry";

const ResetPasswordEmailSent = ({ navigation, route }) => {
	const { enteredMail } = route.params;
	const [verifyPressed, setVerifyPressed] = useState(false);
	const [OTPError, setOTPError] = useState("");
	const [otpInput, setOTPInput] = useState("");

	const handleVerify = () => {
		setVerifyPressed(true);

		if (!otpInput) {
			setOTPError("Please Enter OTP");
		} else if (otpInput === "1234") {
			navigation.navigate("ResetPasswordScreen");
		} else {
			setOTPError("Invalid OTP");
		}
	};
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box paddingLeft={20} paddingRight={20} paddingTop={30} paddingBottom={100}>
					<VStack space='xl'>
						<Box>
							<VStack space='md'>
								<Text fontFamily='Inter_Bold' size='lg'>
									Verify Your Email ID{" "}
								</Text>
								<Text size='sm'>
									OTP sent successfully to <Text bold>{enteredMail}</Text>
								</Text>
							</VStack>
						</Box>
						<Box>
							<FormControl size='md' isDisabled={false} isInvalid={verifyPressed && OTPError} isReadOnly={false} isRequired={false}>
								{/* <HStack justifyContent='center' space='xl'>
									<Input maximun borderRadius={10} width={"$15%"}>
										<InputField textAlign='center' placeholder='1' />
									</Input>
									<Input borderRadius={10} width={"$15%"}>
										<InputField textAlign='center' placeholder='2' />
									</Input>
									<Input borderRadius={10} width={"$15%"}>
										<InputField textAlign='center' placeholder='3' />
									</Input>
									<Input borderRadius={10} width={"$15%"}>
										<InputField textAlign='center' placeholder='4' />
									</Input>
								</HStack> */}
								<OtpInput
									width={"$50%"}
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
				<Box>
					<VStack>
						<Box justifyContent='center' alignItems='center'>
							<Button onPress={handleVerify} variant='primary' size='lg'>
								<ButtonText textAlign='center' fontFamily='Inter_Bold'>
									Verify Now
								</ButtonText>
							</Button>
						</Box>
						<Button
							onPress={() => {
								navigation.goBack();
							}}
							variant='link'>
							<ButtonText underline>Change Email ID</ButtonText>
						</Button>
					</VStack>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default ResetPasswordEmailSent;
