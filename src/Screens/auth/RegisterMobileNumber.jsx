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
import { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, View } from "react-native";
import { ImageAssets } from "../../../assets/Assets";

const RegisterMobileNumberPage = ({ navigation }) => {
	const [numberInput, setNumberInput] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [sendOTPPressed, setSendOTPPressed] = useState(false);
	const phoneInput = useRef(null);

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
		} else if (numberInput.length < 10) {
			setErrorMessage("Entered cannot be LESS than 10-digit");
			return;
		} else if (numberInput.length > 10) {
			setErrorMessage("Entered cannot be MORE than 10-digit");
			return;
		} else {
			setErrorMessage("");
		}

		navigation.navigate("Register Mobile Number OTP Page", { enteredNumber: numberInput });
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box width='$100%' height='$80%' p='$5' pt=''>
					<VStack width='$100%' space='lg'>
						<Box>
							<VStack space='sm'>
								<Text fontFamily='Inter_Bold' size='2xl'>
									Enter Your Phone Number
								</Text>
								<Text fontFamily='Inter' size='sm'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								</Text>
							</VStack>
						</Box>
						<FormControl
							width='$100%'
							size='md'
							isDisabled={false}
							isInvalid={sendOTPPressed && errorMessage}
							isReadOnly={false}
							isRequired={false}
							gap={"$4"}>
							<Box width='$100%'>
								<PhoneInput
									ref={phoneInput}
									defaultValue={numberInput}
									defaultCode='IN'
									layout='second'
									onChangeText={handleChangeNumberInput}
									value={numberInput}
									withDarkTheme
									withShadow
									autoFocus
									style={styles.phoneInput}
									textContainerStyle={styles.textContainer}
									textInputStyle={styles.textInput}
									flagButtonStyle={styles.flag}
									codeTextStyle={styles.codeText}
								/>
								{/* <Input variant='outline'>
									<InputField
										inputMode='numeric'
										onChangeText={handleChangeNumberInput}
										value={numberInput} // Add this line to control the input value
										fontFamily='Inter'
										placeholder='Phone Number'
									/>
								</Input> */}

								{sendOTPPressed && errorMessage && (
									<FormControlError>
										<FormControlErrorIcon as={AlertCircleIcon} />
										<FormControlErrorText>{errorMessage}</FormControlErrorText>
									</FormControlError>
								)}
							</Box>
						</FormControl>
					</VStack>
				</Box>
				<Box justifyContent='center' p='$5'>
					<VStack space='4xl'>
						<Box>
							<Button onPress={handleSendOTP} variant='primary' size='lg'>
								<ButtonText>Next</ButtonText>
							</Button>
						</Box>
					</VStack>
				</Box>
				{/* <Box justifyContent='center'>
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
				</Box> */}
			</Box>
		</KeyboardAvoidingView>
	);
};

export default RegisterMobileNumberPage;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#000000",
	},
	phoneInput: {
		width: "100%",
		height: 50,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		paddingHorizontal: 10,
		backgroundColor: "#fff",
	},
	textContainer: {
		backgroundColor: "#eee",
	},
	textInput: {
		fontSize: 16,
		color: "#000000",
	},
	flag: {
		marginLeft: 10,
	},
	codeText: {
		fontSize: 16,
		color: "#000000",
	},
});
