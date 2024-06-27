import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView, ScrollView } from "@gluestack-ui/themed";
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

const ThesisLogsPage = ({ navigation }) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box width={"$100%"} flex={3 / 4} alignItems='center' paddingTop={20}>
					<VStack width={"$100%"} space='xl' alignItems='center'>
						<Input width={"$90%"} variant='underlined' size='md' isDisabled={false} isInvalid={false} isReadOnly={false}>
							<InputField placeholder='Guide' />
						</Input>
						<Input width={"$90%"} variant='underlined' size='md' isDisabled={false} isInvalid={false} isReadOnly={false}>
							<InputField placeholder='Enter Title' />
						</Input>
						<HStack width={"$90%"} justifyContent='space-between' alignItems='space-between'>
							<Input width={"$60%"} variant='underlined' size='md' isDisabled={false} isInvalid={false} isReadOnly={false}>
								<InputField placeholder='Add data variable' />
							</Input>
							<Button size='xs' height={50} variant='secondary' width={"$30%"} alignItems='center'>
								<ButtonText size='xs' familyFont='Inter_Regular'>
									Add Another
								</ButtonText>
							</Button>
						</HStack>
					</VStack>
				</Box>
				<Box paddingBottom={30} flex={1 / 4} alignItems='center'>
					<Button height={50} backgroundColor='#DE2323' width={"$90%"} size='lg' variant='primary'>
						<ButtonText color='#FFFFFF' fontFamily='Inter_Bold' textAlign='center'>
							Buy Plan For Result
						</ButtonText>
					</Button>
				</Box>
			</Box>
		</KeyboardAvoidingView>
	);
};

export default ThesisLogsPage;
