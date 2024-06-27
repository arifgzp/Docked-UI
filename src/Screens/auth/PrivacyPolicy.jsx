import { Button, ButtonText, KeyboardAvoidingView, ScrollView } from "@gluestack-ui/themed";
import { Box, Text, HStack, VStack } from "@gluestack-ui/themed";
import { NavigationHelpersContext } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";

const PrivacyPolicyPage = ({ navigation }) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground' padding={10}>
				<Box flex={1} backgroundColor='$white' softShadow='1' borderRadius={10} height={"$full"} width={"$full"}>
					<VStack flex={1} space='lg' alignItems='center' padding={10}>
						<Box flex={4 / 4}>
							<ScrollView width={"$full"} height={"$full"}>
								<VStack space='lg' padding={10}>
									<Text bold>Privacy Policy</Text>
									<Text>
										Our app respects your privacy and is committed to protecting your personal information. We collect minimal data necessary for app
										functionality and do not share it with third parties. Any information collected is used solely for improving the user experience
										within the app. We do not store any personally identifiable information unless explicitly provided by you. By using our app, you
										consent to the collection and use of information as described in this policy.
									</Text>
									<Text bold>Terms & Conditions</Text>
									<Text>
										Our app respects your privacy and is committed to protecting your personal information. We collect minimal data necessary for app
										functionality and do not share it with third parties. Any information collected is used solely for improving the user experience
										within the app. We do not store any personally identifiable information unless explicitly provided by you. By using our app, you
										consent to the collection and use of information as described in this policy.
									</Text>
								</VStack>
							</ScrollView>
						</Box>
					</VStack>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default PrivacyPolicyPage;
