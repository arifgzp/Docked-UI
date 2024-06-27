import { Box, Text, HStack, VStack, Button, ButtonText, LinearGradient, KeyboardAvoidingView, Image } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { BackHandler } from "react-native";
import { useEffect } from "react";
import { ImageAssets } from "../../../assets/Assets";

const WelcomeScreenPage = ({ navigation }) => {
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
				<Box flex={1 / 4} paddingLeft={20} paddingRight={20} paddingTop={50}>
					<VStack space='lg'>
						<Box width='$full' elevation={"$4"}>
							<HStack space='md' alignItems='center' justifyContent='space-between'>
								<HStack space='md'>
									<VStack space='lg'>
										<Text fontFamily='Inter_Bold' size='2xl'>
											Welcome
										</Text>
										<Text size='lg'>You are now docked</Text>
										<Text size='md'>Let’s build your docked profile and share your expertise with the docked community.</Text>
									</VStack>
								</HStack>
							</HStack>
						</Box>
					</VStack>
				</Box>
				<Box flex={2 / 4}>
					<Image width={"$100%"} height={"$100%"} source={ImageAssets.image} alt='Docked-Logo' />
				</Box>
				<Box flex={1 / 4} justifyContent='center'>
					<Box justifycontent='center' alignItems='center'>
						<Button onPress={() => navigation.navigate("Profile Setup Page")} variant='primary' size='lg'>
							<ButtonText textAlign='center'>Create Member Profile</ButtonText>
						</Button>
					</Box>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default WelcomeScreenPage;
