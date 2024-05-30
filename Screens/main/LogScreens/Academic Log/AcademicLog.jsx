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

const AcademicLogPage = ({ navigation }) => {
	const academicLogButtons = ["Academic works", "Admin Work", "Publications"];

	const handleButtonPress = (button) => {
		switch (button) {
			case "Case Log":
				navigation.navigate("RootLogBook", { screen: "CaseLogFormScreen" });
				console.log("Navigating to Case Log");
				break;
			case "Academic Log":
				navigation.navigate("RootLogBook", { screen: "AcademicLog" });
				console.log("Navigating to Case Log2");
				break;
			case "Thesis Log":
				navigation.navigate("RootLogBook", { screen: "ThesisLogs" });
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
				<Box width={"$100%"} flex={1} paddingTop={30}>
					<ScrollView>
						<VStack space='2xl' alignItems='center'>
							{academicLogButtons.map((button, index) => (
								<Button key={index} size='lg' variant='logs'>
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

export default AcademicLogPage;
