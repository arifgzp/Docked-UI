import { ButtonIcon, CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import { Box, Center, GluestackUIProvider, Text, StatusBar, Input, HStack, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ChevronDown, ChevronRight, CircleX, Scroll } from "lucide-react-native";
import { ScrollView } from "@gluestack-ui/themed";

const ViewLogsPage = ({ navigation }) => {
	const logEntries = ["Case Log - Entry 1", "Case Log - Entry 2", "Case Log - Entry 3", "Case Log - Entry 4"];

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView>
					<VStack width={"$100%"} alignItems='center' paddingTop={20} paddingBottom={"$30%"} space='2xl'>
						{logEntries.map((entry, index) => (
							<Button key={index} size='lg' justifyContent='space-between' variant='logEntry'>
								<ButtonText>{entry}</ButtonText>
								<ButtonIcon as={ChevronRight} size={20} name='arrow-forward-outline' color='#666666' />
							</Button>
						))}
					</VStack>
				</ScrollView>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default ViewLogsPage;
