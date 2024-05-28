import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import SetupProfile from "../../components/SetupProfile/SetupProfile";
import createProfileConfig from "../../config/entity/CreateProfileconfig";
import { useNavigation } from "@react-navigation/native";

const DockedProfile = () => {
	const navigation = useNavigation();

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<SetupProfile config={createProfileConfig} navigation={navigation} />
		</KeyboardAvoidingView>
	);
};

export default DockedProfile;
