import { Image, InputField, KeyboardAvoidingView } from "@gluestack-ui/themed";
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
import { Platform } from "react-native";
import { useState } from "react";
import { ImageAssets } from "../../assets/Assets";

const RegisterMobileNumberPage = ({ navigation }) => {
	const [numberInput, setNumberInput] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [sendOTPPressed, setSendOTPPressed] = useState(false);

	const handleChangeNumberInput = (text) => {
		// Filter out non-numeric characters
		const numericText = text.replace(/[^0-9]/g, "");
		setNumberInput(numericText);
	};

	const handleSendOTP = () => {
		setSendOTPPressed(true);

		if (!numberInput) {
			setErrorMessage("Number is required");
			return;
		} else if (numberInput.length !== 10) {
			setErrorMessage("Please enter a valid 10-digit number");
			return;
		} else {
			setErrorMessage("");
		}

		navigation.navigate("Register Mobile Number OTP Page", { enteredNumber: numberInput });
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box justifyContent='flex-end' flex={1 / 4} paddingLeft={20} paddingRight={20} paddingTop={30}>
					<VStack space='lg'>
						<Box>
							<VStack alignItems='center' space='sm'>
								<Text fontFamily='Inter' size='2xl'>
									Let's get you
								</Text>
								<Image width={200} height={75} source={ImageAssets.logo} alt='Docked-Logo' />
							</VStack>
						</Box>
					</VStack>
				</Box>
				<Box flex={2 / 4} justifyContent='center'>
					<VStack space='4xl'>
						<Text textAlign='center' fontFamily='Inter' size='sm'>
							Please Provide Your Mobile Number
						</Text>
						<FormControl size='md' isDisabled={false} isInvalid={sendOTPPressed && errorMessage} isReadOnly={false} isRequired={false} gap={"$4"}>
							<Box justifycontent='center' alignItems='center'>
								<Input width={"$80%"} variant='underlined'>
									<InputField
										inputMode='numeric'
										onChangeText={handleChangeNumberInput}
										value={numberInput} // Add this line to control the input value
										fontFamily='Inter'
										placeholder='Enter Your Phone Number'
									/>
								</Input>
								{sendOTPPressed && errorMessage && (
									<FormControlError width={"$80%"}>
										<FormControlErrorIcon as={AlertCircleIcon} />
										<FormControlErrorText>{errorMessage}</FormControlErrorText>
									</FormControlError>
								)}
							</Box>
						</FormControl>
						<Box justifycontent='center' alignItems='center'>
							<Button onPress={handleSendOTP} variant='primary' size='lg'>
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

export default RegisterMobileNumberPage;
