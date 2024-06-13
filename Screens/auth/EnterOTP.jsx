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
	Toast,
	useToast,
	ToastTitle,
	ToastDescription,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Platform } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import AppStore from "../../src/stores/AppStore";
import appStoreInstance from "../../src/stores/AppStore";
import Loader from "../../components/Loader";
import { observer } from "mobx-react";

const EnterOTPPage = ({ navigation, route }) => {
	const { enteredMail, enteredNumber } = route.params;
	const [verifyPressed, setVerifyPressed] = useState(false);
	const [OTPError, setOTPError] = useState("");
	const [otpInput, setOTPInput] = useState("");
	const toast = useToast();

	const handleVerify = async () => {
		setVerifyPressed(true);

		if (!otpInput) {
			setOTPError("Please Enter OTP");
		}
		const response = await AppStore.VerifyAccount({
			userName: enteredMail,
			newUserVerificationCode: otpInput,
			userStatus: "WIZARD_PENDING",
		});

		console.log("response for OTP", response);
		switch (response) {
			case "FAILED":
				setOTPError("Please Enter Valid OTP");
				break;

			case "SUCCESS":
				navigation.navigate("Email Verified Page");
				break;

			case "ERROR":
				toast.show({
					placement: "top",
					render: ({ id }) => {
						const toastId = "toast-" + id;
						return (
							<Toast nativeID={toastId} action='error' variant='accent'>
								<VStack space='xs' mx='$4'>
									<ToastTitle>Something Went Wrong</ToastTitle>
									<ToastDescription>"We're sorry, but we're having trouble processing your request. Please try again later.</ToastDescription>
								</VStack>
							</Toast>
						);
					},
				});
				break;

			default:
				break;
		}
	};
	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
				<Box flex={1} backgroundColor='$primaryBackground'>
					<Box flex={1 / 4} paddingLeft={20} paddingRight={20} paddingTop={30} paddingBottom={100}>
						<VStack space='xl'>
							<Box>
								<VStack space='md'>
									<Text fontFamily='Inter_Bold' size='xl'>
										Member Onboarding
									</Text>
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
					<Box flex={3 / 4} position='fixed'>
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
									navigation.navigate("Register Page", { enteredNumber: enteredNumber });
								}}
								variant='link'>
								<ButtonText underline>Change Email ID</ButtonText>
							</Button>
						</VStack>
					</Box>
				</Box>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(EnterOTPPage);
