import { ScrollView } from "@gluestack-ui/themed";
import { Box, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import Loader from "../Loader";
import appStoreInstance from "../../src/stores/AppStore";

const ProfilePicture = () => {
	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
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
		</Loader>
	);
};

export default observer(ProfilePicture);
