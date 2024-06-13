import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import SetupProfile from "../../components/SetupProfile/SetupProfile";
import createProfileConfig from "../../config/entity/CreateProfileconfig";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import Loader from "../../components/Loader";
import appStoreInstance from "../../src/stores/AppStore";

const DockedProfile = () => {
	const navigation = useNavigation();

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
				<SetupProfile config={createProfileConfig} navigation={navigation} />
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(DockedProfile);
