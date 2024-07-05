import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import SetupProfile from "../../components/SetupProfile/SetupProfile";
import Loader from "../../components/Loader";
import appStoreInstance from "../../stores/AppStore";
import createProfileConfig from "../../data/entity/CreateProfileconfig";
import { Box } from "@gluestack-ui/themed";

const DockedProfile = ({ route }) => {
	const { enteredMail, enteredPassword } = route.params;
	const navigation = useNavigation();

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "height" : "height"}
				style={{ flex: 1, zIndex: 999 }}
				keyboardShouldPersistTaps='handled'>
				<Box h='$full'>
					<SetupProfile enteredMail={enteredMail} enteredPassword={enteredPassword} config={createProfileConfig} navigation={navigation} />
				</Box>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(DockedProfile);
