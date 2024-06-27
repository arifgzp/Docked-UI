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
	const { enteredMail, enteredNumber } = route.params;
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
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box flex={1 / 4}>
					<Text bold size='xl' paddingTop={20} paddingLeft={20}>
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
									An Email has been to your registered mail. Please verify your email now.
								</Text>
							</VStack>
						</Box>
					</VStack>
				</Box>
				<Box flex={1 / 4} justifyContent='center'>
					<Box justifycontent='center' alignItems='center'>
						<Button
							onPress={() => navigation.navigate("Enter Email OTP Page", { enteredMail: enteredMail, enteredNumber: enteredNumber })}
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
