import { ScrollView } from "@gluestack-ui/themed";
import { Box, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import Loader from "../Loader";
import appStoreInstance from "../../stores/AppStore";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import { Image } from "@gluestack-ui/themed";
import { useState } from "react";

const ProfilePicture = ({ image, setImage }) => {
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets);
		}
	};
	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Box flex={1} justifyContent='center'>
					<VStack space='4xl' justifyContent='center'>
						<Box alignItems='center'>{image ? <Image source={{ uri: image[0].uri }} /> : <Ionicons name='person' size={120} color='#DDE1E6' />}</Box>
						<Box justifycontent='center' alignItems='center'>
							<Button isDisabled={true} size='lg' variant='secondary'>
								<ButtonText fontFamily='Inter_Regular' textAlign='center'>
									Take A Photo
								</ButtonText>
							</Button>
						</Box>
						<Box justifycontent='center' alignItems='center'>
							<Button onPress={pickImage} size='lg' variant='secondary'>
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
