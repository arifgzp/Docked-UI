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

const SettingsScreenPage = ({ navigation }) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box flex={1 / 4} paddingLeft={20} paddingRight={20} paddingTop={30}>
					<VStack space='lg'>
						<Box width='$full' elevation={"$4"}>
							<HStack space='md' alignItems='center' justifyContent='space-between'>
								<HStack space='md' alignItems='center'>
									<Ionicons name='person-circle-outline' size={50} color='grey' />
									<Text bold size='lg'>
										Profile
									</Text>
								</HStack>
								<HStack space='lg'>
									<Ionicons onPress={() => navigation.navigate("Login Page")} name='log-out-outline' size={24} color='black' />
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

export default SettingsScreenPage;
