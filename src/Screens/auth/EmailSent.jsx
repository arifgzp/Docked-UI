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
} from "@gluestack-ui/themed";
import { BackHandler } from "react-native";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

const EmailSentPage = ({ navigation, route }) => {
	const { enteredMail, enteredNumber, enteredPassword } = route.params;
	useEffect(() => {
		const backAction = () => {
			// Prevent default behavior (navigating back)
			return true;
		};

		// Add event listener for hardware back button press
		const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

		// Remove event listener when component unmounts
		return () => backHandler.remove();
	}, []);

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Box flex={1} backgroundColor='$primaryBackground' pt='$16'>
				<Box flex={1 / 4}>
					<Text color='#000' bold size='2xl' paddingLeft={20}>
						Member Onboarding
					</Text>
				</Box>
				<Box flex={2 / 4} justifyContent='center'>
					<VStack space='lg'>
						<Box>
							<VStack space='md' alignItems='center' justifyContent='center'>
								<Ionicons name='mail-unread-outline' size={70} color='black' />
								<Text bold textAlign='center' size='lg'>
									Email Sent!
								</Text>
								<Text width={"$80%"} textAlign='center' size='sm'>
									An OTP has been sent to your registered mail. Please verify your email on the next page.
								</Text>
							</VStack>
						</Box>
					</VStack>
				</Box>
				<Box width='$full' flex={1 / 4} justifyContent='center'>
					<Box width='$full' justifycontent='center' alignItems='center'>
						<Button
							w='$90%'
							onPress={() =>
								navigation.navigate("Enter Email OTP Page", {
									enteredMail: enteredMail,
									enteredNumber: enteredNumber,
									enteredPassword: enteredPassword,
								})
							}
							variant='primary'
							size='lg'>
							<ButtonText textAlign='center'>Continue</ButtonText>
						</Button>
					</Box>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default EmailSentPage;
