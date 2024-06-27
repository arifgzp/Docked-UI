import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Box, Text, HStack, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfilePicturePage = ({ navigation }) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground' justifyContent='space-between' flexDirection='column'>
				<Box flex={3 / 4} paddingLeft={20} paddingRight={20} paddingTop={30}>
					<VStack space='4xl'>
						<Text bold size='lg'>
							Set Profile Picture
						</Text>
						<VStack justifyContent='center' alignItems='center' space='lg'>
							<Ionicons name='person-circle-outline' size={150} color='grey' />
							<Button bgColor='white' variant='outline' borderRadius={10} action='secondary'>
								<ButtonText color='$black'>Take a photo</ButtonText>
							</Button>
							<Button bgColor='white' variant='outline' borderRadius={10} action='secondary'>
								<ButtonText color='$black'>Browse gallery</ButtonText>
							</Button>
						</VStack>
					</VStack>
				</Box>
				<Box flex={1 / 4} justifyContent='center'>
					<Box justifycontent='center' alignItems='center'>
						<Button variant='primary' size='lg'>
							<ButtonText textAlign='center'>Next</ButtonText>
						</Button>
					</Box>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default ProfilePicturePage;
