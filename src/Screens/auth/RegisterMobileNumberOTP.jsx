import { ButtonIcon, HStack, KeyboardAvoidingView } from "@gluestack-ui/themed";
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
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Ionicons } from "@expo/vector-icons";

const RegisterMobileNumberOTPPage = ({ navigation, route }) => {
	const { enteredNumber } = route.params;
	const [verifyPressed, setVerifyPressed] = useState(false);
	const [OTPError, setOTPError] = useState("");
	const [otpInput, setOTPInput] = useState("");

	const handleVerify = () => {
		setVerifyPressed(true);

		if (!otpInput) {
			setOTPError("Please Enter OTP");
		} else if (otpInput === "0000") {
			navigation.navigate("Register Page", { enteredNumber: enteredNumber });
		} else {
			setOTPError("Invalid OTP");
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1, zIndex: 999 }}
			keyboardShouldPersistTaps='handled'>
			<Box h='$full' width='$full' flex={1} backgroundColor='$primaryBackground'>
				<Box height='$90%' p='$5' width='$full'>
					<VStack width='$full' space='xl' justifyContent='center' alignItems='center'>
						<Box width='$full' alignSelf='flex-start'>
							<VStack space='md'>
								<Text fontFamily='Inter_Bold' size='2xl'>
									Verify Your Phone Number
								</Text>
								<Text size='sm'>
									OTP sent successfully to <Text bold>{enteredNumber}</Text>
								</Text>
							</VStack>
						</Box>
						<Box alignSelf='flex-start' width='$80%'>
							<FormControl
								width='$full'
								size='md'
								isDisabled={false}
								isInvalid={verifyPressed && OTPError}
								isReadOnly={false}
								isRequired={false}
								gap='$4'>
								<OtpInput
									bg='$yellow'
									width={"$60%"}
									numberOfDigits={4}
									focusColor={OTPError ? "#CC3F0C" : "#BFBDB9"}
									focusStickBlinkingDuration={500}
									onTextChange={(text) => setOTPInput(text)}
									textInputProps={{
										accessibilityLabel: "One-Time Password",
									}}
									theme={{
										pinCodeContainerStyle: [styles.pinCodeContainer, OTPError && styles.pinCodeContainerError],
										pinCodeTextStyle: styles.pinCodeText,
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
						<HStack w='$100%' space='sm' alignSelf='flex-start' alignItems='center'>
							<Text size='sm'>Didn’t Receive OTP?</Text>
							<Box>
								<Button variant='link' size='sm'>
									<ButtonText color='#367B71'>Resend OTP</ButtonText>
								</Button>
							</Box>
						</HStack>
					</VStack>
				</Box>
				<Box justifyContent='center' height='$10%' p='$5'>
					<HStack width='$full' justifyContent='space-between'>
						<Button onPress={() => navigation.goBack()} height={50} justifyContent='flex-start' alignItems='flex-start' variant='link'>
							<ButtonIcon as={Ionicons} size={50} name='arrow-back-circle-outline' color='#367B71' />
						</Button>
						<Box justifyContent='center' alignItems='center'>
							<Button onPress={handleVerify} variant='primary' size='lg'>
								<ButtonText textAlign='center'>Verify</ButtonText>
							</Button>
						</Box>
					</HStack>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	pinCodeContainer: {
		borderColor: "#BFBDB9", // Default border color
		borderWidth: 1,
		borderRadius: 10,
	},
	pinCodeContainerError: {
		borderColor: "#CC3F0C", // Error border color
	},
	pinCodeText: {
		fontSize: 18,
		color: "#000", // Adjust the text color if needed
	},
});

export default RegisterMobileNumberOTPPage;
