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
	SelectScrollView,
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
import { StyleSheet, View } from "react-native";
import { ChevronDown } from "lucide-react-native";
import { ImageAssets } from "../../../assets/Assets";
import { SelectDragIndicatorWrapper } from "@gluestack-ui/themed";
import { SelectDragIndicator } from "@gluestack-ui/themed";

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
			<Box justifyContent='space-between' flex={1} backgroundColor='$primaryBackground'>
				<Box width='$100%' height='$80%' p='$5' pt='$16'>
					<VStack width='$100%' space='4xl'>
						<Box>
							<VStack space='sm'>
								<Text color='#000' fontFamily='Inter_Bold' fontSize={24}>
									Enter Your Phone Number
								</Text>
								<Text fontFamily='Inter' size='sm'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
								</Text>
							</VStack>
						</Box>
						<VStack w='$full'>
							<HStack justifyContent='space-between' w='$full'>
								<Select w='$25%' isReadOnly selectedValue='+91'>
									<SelectTrigger variant='outline'>
										<SelectInput placeholder={`+91`} />
										<SelectIcon mr='$3'>
											<Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />
										</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent p='$0'>
											<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
												Phone Number
											</Text>
											<Divider borderWidth={0.1} />
											<SelectScrollView>
												<SelectItem key='+91' label='+91' value='+91' />;
											</SelectScrollView>
										</SelectContent>
										<SelectDragIndicatorWrapper>
											<SelectDragIndicator />
										</SelectDragIndicatorWrapper>
									</SelectPortal>
								</Select>
								<FormControl
									w='$70%'
									size='md'
									isDisabled={false}
									isInvalid={sendOTPPressed && errorMessage}
									isReadOnly={false}
									isRequired={false}
									gap={"$4"}>
									<Box alignItems='center'>
										<Input variant='outline'>
											<InputField
												inputMode='numeric'
												onChangeText={handleChangeNumberInput}
												value={numberInput} // Add this line to control the input value
												fontFamily='Inter'
												placeholder='Phone Number'
												onFocus={() => setErrorMessage("")}
											/>
										</Input>
										{sendOTPPressed && errorMessage && (
											<FormControlError alignSelf='flex-start'>
												<FormControlErrorIcon size='xs' color='#CC3F0C' as={AlertCircleIcon} />
												<FormControlErrorText size='xs' color='#CC3F0C'>
													{errorMessage}
												</FormControlErrorText>
											</FormControlError>
										)}
									</Box>
								</FormControl>
							</HStack>
						</VStack>
					</VStack>
				</Box>
				<Box pt='$0' justifyContent='center' p='$5'>
					<VStack space='4xl'>
						<Box>
							<Button onPress={handleSendOTP} variant='primary' size='lg'>
								<ButtonText fontSize={16}>Next</ButtonText>
							</Button>
						</Box>
					</VStack>
				</Box>
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
