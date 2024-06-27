import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView, TextareaInput } from "@gluestack-ui/themed";
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
import { Textarea } from "@gluestack-ui/themed";
import { SelectScrollView } from "@gluestack-ui/themed";

const SpecialCaseDetails = ({ navigation }) => {
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
				<ScrollView>
					<Box paddingTop={10} paddingBottom={30} width={"$100%"} justifyContent='center' alignItems='center'>
						<Box width={"$90%"} height={30} borderRadius={10} backgroundColor='#FFFFFF' justifyContent='center' alignItems='center'>
							<Text>Spl. case details</Text>
						</Box>
					</Box>
					<Box width={"$100%"} alignItems='center' paddingBottom={30}>
						<VStack space='lg' width={"$90%"}>
							<FormControl>
								<FormControlLabel>
									<FormControlLabelText>Add details</FormControlLabelText>
								</FormControlLabel>
								<Textarea>
									<TextareaInput placeholder='Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. ' />
								</Textarea>
							</FormControl>
							<FormControl>
								<FormControlLabel>
									<FormControlLabelText>Add sub details</FormControlLabelText>
								</FormControlLabel>
								<Textarea>
									<TextareaInput placeholder='Rhoncus morbi et augue nec, in id ullamcorper at sit.' />
								</Textarea>
							</FormControl>
						</VStack>
					</Box>
					<Box paddingBottom={"$30%"} width={"$100%"} alignItems='center'>
						<VStack width={"$100%"} space='xl' alignItems='center'>
							<HStack width={"$90%"} space='xl' alignItems='center'>
								<Button size='xs' height={50} variant='secondary' width={"$30%"} alignItems='center'>
									<ButtonText>Attach picture</ButtonText>
								</Button>
								<Button height={50} variant='secondary' width={"$30%"} alignItems='center'>
									<ButtonText size='xs'>Attach document</ButtonText>
								</Button>
								<Button size='xs' height={50} variant='secondary' width={"$30%"} alignItems='center'>
									<ButtonText>Attach video</ButtonText>
								</Button>
							</HStack>
							<VStack width={"$100%"} space='xl' alignItems='center'>
								<Button height={50} size='lg' variant='secondary'>
									<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
										Create case summary
									</ButtonText>
								</Button>
								<Button height={50} size='lg' variant='primary'>
									<ButtonText color='#1E1E1E' fontFamily='Inter_Bold' textAlign='center'>
										Save
									</ButtonText>
								</Button>
							</VStack>
						</VStack>
					</Box>
				</ScrollView>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default SpecialCaseDetails;
