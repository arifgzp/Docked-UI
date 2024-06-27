import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import SetupProfile from "../../components/SetupProfile/SetupProfile";
import Loader from "../../components/Loader";
import appStoreInstance from "../../stores/AppStore";
import createProfileConfig from "../../data/entity/CreateProfileconfig";

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
