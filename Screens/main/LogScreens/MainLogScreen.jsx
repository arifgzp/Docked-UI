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
import { ScrollView } from "@gluestack-ui/themed";

const MainLogScreen = ({ navigation }) => {
	const logButtons = ["Case Log", "Academic Log", "Thesis Log", "Spl. cases Log", "Custom Log 1", "Custom log 2"];

	const handleButtonPress = (button) => {
		switch (button) {
			case "Case Log":
				navigation.navigate("RootLogBook", { screen: "CaseLogFormScreen" });
				console.log("Navigating to Case Log");
				break;
			case "Academic Log":
				console.log("Navigating to Case Log2");
				break;
			case "Thesis Log":
				console.log("Navigating to Case Log3");
				break;
			case "Spl. cases Log":
				console.log("Navigating to Case Log4");
				break;
			case "Custom Log 1":
				console.log("Navigating to Case Log5");
				break;
			case "Custom log 2":
				console.log("Navigating to Case Log6");
				break;
			default:
				console.log("Navigating to Case Log7");
		}
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box paddingRight={10} flex={0.7 / 4} justifyContent='center'>
					<VStack space='lg' alignItems='flex-end'>
						<Button variant='tertiary' size='xs'>
							<ButtonText>Log Profile</ButtonText>
						</Button>
						<Button variant='tertiary' size='xs'>
							<ButtonText>View Logs</ButtonText>
						</Button>
					</VStack>
				</Box>

				<Box width={"$100%"} flex={3.3 / 4} justifyContent='flex-start'>
					<ScrollView>
						<VStack space='2xl' alignItems='center'>
							{logButtons.map((button, index) => (
								<Button onPress={() => handleButtonPress(button)} key={index} size='lg' variant='logs'>
									<ButtonText>{button}</ButtonText>
								</Button>
							))}
						</VStack>
					</ScrollView>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default MainLogScreen;
