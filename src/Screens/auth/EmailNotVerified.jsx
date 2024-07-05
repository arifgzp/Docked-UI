import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Box, Text, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BackHandler } from "react-native";
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
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Box flex={1} backgroundColor='$white'>
				<Box flex={3 / 4} paddingLeft={20} paddingRight={20} paddingTop={30} justifyContent='center'>
					<VStack space='lg'>
						<Box>
							<VStack space='md' alignItems='center' justifyContent='center'>
								<Ionicons name='alert-outline' size={50} color='black' />
								<Text bold textAlign='center' size='lg'>
									Email Not Verified!
								</Text>
								<Text textAlign='center' size='sm'>
									Please check your mail at your registered email account and verify now.
								</Text>
							</VStack>
						</Box>
					</VStack>
				</Box>
				<Box flex={1 / 4} justifyContent='center' alignItems='center'>
					<VStack space='sm' width={"$full"} padding={20}>
						<Button bgColor='$borderDark300' onPress={() => navigation.navigate("Email Verified Page")} borderRadius={10} action='secondary'>
							<ButtonText color='$black'>Continue </ButtonText>
						</Button>
						<Box flexDirection='row' justifyContent='center'>
							<Button onPress={() => navigation.navigate("Forgot Password Page")} variant='link'>
								<ButtonText underline color='$black'>
									Resend Email
								</ButtonText>
							</Button>
						</Box>
					</VStack>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default EmailNotVerifiedPage;
