import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
	StatusBar,
	Input,
	HStack,
	VStack,
	FormControlLabel,
	FormControl,
	FormControlLabelText,
	InputField,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "../../src/models";

const HomeScreenPage = ({ navigation }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const testFetch = async () => {
		try {
			const query = store.fetchAnaesthesiaCaseLog();
			setQuery(query);
			const data = query;
			console.log("data", data);
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box flex={1 / 4} paddingLeft={20} paddingRight={20} paddingTop={30}>
					<VStack space='lg'>
						<Box width='$full' elevation={"$4"}>
							<HStack space='md' alignItems='center' justifyContent='space-between'>
								<HStack space='md'>
									<Ionicons name='person-circle-outline' size={50} color='grey' />
									<VStack>
										<Text bold size='lg'>
											Dr Dixit
										</Text>
										<Text size='sm'>Dean</Text>
									</VStack>
								</HStack>
								<HStack space='lg'>
									<Ionicons name='notifications-outline' size={24} color='black' />
									<Ionicons name='settings-outline' size={24} color='black' />
								</HStack>
							</HStack>
						</Box>
					</VStack>
				</Box>
				<Box flex={3 / 4} alignItems='center'>
					<VStack space='sm'>
						<Box bgColor='grey' borderRadius={10} borderColor='$black' width={"$full"}></Box>
					</VStack>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default HomeScreenPage;
