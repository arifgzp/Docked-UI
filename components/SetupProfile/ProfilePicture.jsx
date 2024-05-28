import { ScrollView } from "@gluestack-ui/themed";
import { Box, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";

const ProfilePicture = () => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<Box flex={1} justifyContent='center'>
				<VStack space='4xl' justifyContent='center'>
					<Box alignItems='center'>
						<Ionicons name='person' size={120} color='#DDE1E6' />
					</Box>
					<Box justifycontent='center' alignItems='center'>
						<Button size='lg' variant='secondary'>
							<ButtonText fontFamily='Inter_Regular' textAlign='center'>
								Take A Photo
							</ButtonText>
						</Button>
					</Box>
					<Box justifycontent='center' alignItems='center'>
						<Button size='lg' variant='secondary'>
							<ButtonText fontFamily='Inter_Regular' textAlign='center'>
								Browse Gallery
							</ButtonText>
						</Button>
					</Box>
				</VStack>
			</Box>
		</ScrollView>
	);
};

export default ProfilePicture;
