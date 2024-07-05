import {
	Divider,
	HStack,
	Image,
	InputField,
	KeyboardAvoidingView,
	Select,
	SelectBackdrop,
	SelectContent,
	SelectIcon,
	SelectInput,
	SelectItem,
	SelectPortal,
	SelectTrigger,
} from "@gluestack-ui/themed";
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
	Icon,
} from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { StyleSheet, View } from "react-native";
import { ChevronDown } from "lucide-react-native";
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
			setErrorMessage("Entered number cannot be LESS than 10-digit");
			return;
		} else if (numberInput.length > 10) {
			setErrorMessage("Entered number cannot be MORE than 10-digit");
			return;
		} else {
			setErrorMessage("");
		}

		navigation.navigate("Register Mobile Number OTP Page", { enteredNumber: numberInput });
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
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
							<Box width='$100%' alignItems='center'>
								{/* <PhoneInput
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
								/> */}
								<Text pb='$1' size='sm' alignSelf='flex-start'>
									Phone Number
								</Text>
								<HStack justifyContent='space-between' w='$full'>
									<Select w='$25%' isReadOnly selectedValue='+91'>
										<SelectTrigger variant='outline'>
											<SelectInput placeholder={`+91`} />
											<SelectIcon mr='$3'>
												<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
											</SelectIcon>
										</SelectTrigger>
										<SelectPortal>
											<SelectBackdrop />
											<SelectContent>
												<Text padding={10} size='xl'>
													Phone Number
												</Text>
												<Divider borderWidth={0.1} />
												<SelectItem key='+91' label='+91' value='+91' />;
											</SelectContent>
										</SelectPortal>
									</Select>
									<Input w='$70%' variant='outline'>
										<InputField
											inputMode='numeric'
											onChangeText={handleChangeNumberInput}
											value={numberInput} // Add this line to control the input value
											fontFamily='Inter'
											placeholder='Phone Number'
										/>
									</Input>
								</HStack>
								{sendOTPPressed && errorMessage && (
									<FormControlError alignSelf='flex-start'>
										<FormControlErrorIcon size='xs' as={AlertCircleIcon} />
										<FormControlErrorText size='xs'>{errorMessage}</FormControlErrorText>
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
		backgroundColor: "#000000",
	},
	phoneInput: {
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
