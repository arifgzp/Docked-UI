import {
	Box,
	Text,
	VStack,
	HStack,
	FormControl,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonIcon,
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
import { observer } from "mobx-react";
import Loader from "../../components/Loader";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import appStoreInstance from "../../stores/AppStore";
import { useNavigation } from "@react-navigation/native";

const EnterOTPPage = ({ route }) => {
	const navigation = useNavigation();
	let params = null;
	if (route?.params) {
		params = route.params;
	}
	const [verifyPressed, setVerifyPressed] = useState(false);
	const [OTPError, setOTPError] = useState("");
	const [otpInput, setOTPInput] = useState("");
	const toast = useToast();
	const mail = appStoreInstance.UserName;
	const password = appStoreInstance.UserPassword;

	const resendOTP = async () => {
		const response = await appStoreInstance.SendVerificationCode({ Email: params === null ? mail : params.enteredMail });
	};

	const handleVerify = async () => {
		setVerifyPressed(true);

		if (!otpInput) {
			setOTPError("Please Enter OTP");
		} else {
			const response = await appStoreInstance.VerifyAccount({
				userName: params === null ? mail : params.enteredMail,
				newUserVerificationCode: otpInput,
				userStatus: "WIZARD_PENDING",
			});

			console.log("response for OTP", response);
			switch (response) {
				case "FAILED":
					setOTPError("Please Enter Valid OTP");
					break;

				case "SUCCESS":
					console.log("reach successsssss", response);
					appStoreInstance.setUserPassword(params === null ? password : params.enteredPassword);
					appStoreInstance.setUserName(params === null ? mail : params.enteredMail);
					navigation.navigate("Email Verified Page", {
						enteredPassword: params === null ? password : params.enteredPassword,
						enteredMail: params === null ? mail : params.enteredMail,
					});
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
		}
	};
	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ flex: 1, zIndex: 999 }}
				keyboardShouldPersistTaps='handled'>
				<Box justifyContent='space-between' h='$full' width='$full' flex={1} backgroundColor='$primaryBackground' pt='$16'>
					<Box p='$5' width='$full' pt='$0'>
						<VStack width='$full' space='xl' justifyContent='center' alignItems='center'>
							<Box width='$full' alignSelf='flex-start'>
								<VStack space='md'>
									<Text color='#000' fontFamily='Inter_Bold' size='2xl'>
										Verify Your Email Address
									</Text>
									<Text size='sm'>
										OTP sent successfully to <Text bold>{mail ? mail : params.enteredMail}</Text>
									</Text>
								</VStack>
							</Box>
							<Box width='$85%'>
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
							<HStack w='$85%' space='sm' alignSelf='flex-start' alignItems='center'>
								<Text size='sm'>Didn’t Receive OTP?</Text>
								<Box>
									<Button variant='link' size='sm' onPress={resendOTP}>
										<ButtonText color='#367B71'>Resend OTP</ButtonText>
									</Button>
								</Box>
							</HStack>
						</VStack>
					</Box>
					<Box justifyContent='center' p='$5'>
						<HStack width='$full' justifyContent='space-between' alignItems='center'>
							<Button
								borderWidth={1}
								borderRadius={"$full"}
								borderColor='rgba(54, 123, 113, 0.5)'
								onPress={() => {
									navigation.goBack();
									navigation.goBack();
								}}
								height={40}
								width={40}
								justifyContent='center'
								variant='link'>
								<ButtonIcon as={Ionicons} size={25} name='arrow-back-outline' color='#367B71' />
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
		</Loader>
	);
};

const styles = StyleSheet.create({
	pinCodeContainer: {
		borderColor: "#BFBDB9", // Default border color
		borderWidth: 1,
		borderRadius: 10,
		height: 55,
		width: 50,
	},
	pinCodeContainerError: {
		borderColor: "#CC3F0C", // Error border color
	},
	pinCodeText: {
		fontSize: 18,
		color: "#000", // Adjust the text color if needed
	},
});

export default observer(EnterOTPPage);
