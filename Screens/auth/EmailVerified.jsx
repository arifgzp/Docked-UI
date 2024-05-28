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

const EmailNotVerifiedPage = ({ navigation }) => {
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
								<Ionicons name='checkmark-circle' size={70} color='#40E0D0' />
								<Text bold textAlign='center' size='lg'>
									Email Verified
								</Text>
								<Text width={"$80%"} textAlign='center' size='sm'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt{" "}
								</Text>
							</VStack>
						</Box>
					</VStack>
				</Box>
				<Box flex={1 / 4} justifyContent='center'>
					<Box justifycontent='center' alignItems='center'>
						<Button onPress={() => navigation.navigate("Welcome Page")} variant='primary' size='lg'>
							<ButtonText textAlign='center'>Continue</ButtonText>
						</Button>
					</Box>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default EmailNotVerifiedPage;
