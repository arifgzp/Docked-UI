import { CheckIcon, CheckboxGroup, CheckboxIndicator } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
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
	LinearGradient,
	InputSlot,
	InputIcon,
} from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";

const ResetPasswordScreen = ({ navigation }) => {
	const [formData, setFormData] = useState({ name: "", email: "", password: "", reEnterPassword: "" });
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [joinPressed, setJoinPressed] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [nameError, setNameError] = useState("");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleResetingPassword = () => {
		setJoinPressed(true);

		// Check if password and re-entered password fields are empty first
		if (!formData.password) {
			setPasswordError("Password is required");
			return;
		}

		if (!formData.reEnterPassword) {
			setPasswordError("Password is required");
			return;
		}

		// Check if the passwords match
		if (formData.password !== formData.reEnterPassword) {
			setPasswordError("Entered passwords do not match");
			return;
		}

		// Clear any password error and navigate
		setPasswordError("");
		navigation.navigate("PasswordResetSuccessfully", { enteredMail: formData.email });
	};

	const handleChangeName = (text) => {
		setFormData({ ...formData, name: text });
	};

	const handleChangeEmail = (text) => {
		setFormData({ ...formData, email: text });
	};

	const handleChangePassword = (text) => {
		setFormData({ ...formData, password: text });
	};

	const handleChangeReEnterPassword = (text) => {
		setFormData({ ...formData, reEnterPassword: text });
	};

	const handleShowPasswordState = () => {
		setPasswordVisible((showState) => {
			return !showState;
		});
	};
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Box flex={1} backgroundColor='$primaryBackground'>
					<Box paddingLeft={20} justifyContent='center' flex={1 / 4}>
						<Text size='xl' fontFamily='Inter_Bold'>
							Reset Password
						</Text>
					</Box>
					<Box flex={3 / 4} justifyContent='center'>
						<VStack space='3xl'>
							<Box>
								<FormControl size='md' isDisabled={false} isInvalid={joinPressed && passwordError} isReadOnly={false} isRequired={false}>
									<Box justifycontent='center' alignItems='center'>
										<Input width={"$80%"} variant='underlined'>
											<InputField
												onChangeText={handleChangePassword}
												value={formData.password}
												type={passwordVisible ? "text" : "password"}
												placeholder='Password'
											/>
											<InputSlot pr='$3' onPress={handleShowPasswordState}>
												<InputIcon as={passwordVisible ? Eye : EyeOff} color='#1E1E1E' />
											</InputSlot>
										</Input>
										{joinPressed && passwordError && (
											<FormControlError width={"$80%"}>
												<FormControlErrorIcon as={AlertCircleIcon} />
												<FormControlErrorText>{passwordError}</FormControlErrorText>
											</FormControlError>
										)}
									</Box>
								</FormControl>
							</Box>
							<Box>
								<FormControl size='md' isDisabled={false} isInvalid={joinPressed && passwordError} isReadOnly={false} isRequired={false}>
									<Box justifycontent='center' alignItems='center'>
										<Input width={"$80%"} variant='underlined'>
											<InputField
												onChangeText={handleChangeReEnterPassword}
												value={formData.reEnterPassword}
												type={passwordVisible ? "text" : "password"}
												placeholder='Re-enter Password'
											/>
											<InputSlot pr='$3' onPress={handleShowPasswordState}>
												<InputIcon as={passwordVisible ? Eye : EyeOff} color='#1E1E1E' />
											</InputSlot>
										</Input>
										{joinPressed && passwordError && (
											<FormControlError width={"$80%"}>
												<FormControlErrorIcon as={AlertCircleIcon} />
												<FormControlErrorText>{passwordError}</FormControlErrorText>
											</FormControlError>
										)}
									</Box>
								</FormControl>
							</Box>
							<Box justifycontent='center' alignItems='center'>
								<Button onPress={handleResetingPassword} variant='primary' size='lg'>
									<ButtonText>Reset Password</ButtonText>
								</Button>
							</Box>
						</VStack>
					</Box>
					<Box flex={1 / 4} paddingBottom={20} justifyContent='center'>
						<VStack space='sm'>
							<Text textAlign='center' bold fontFamily='Inter'>
								Already A Member?
							</Text>
							<Box justifycontent='center' alignItems='center'>
								<Button onPress={() => navigation.navigate("Login Page")} variant='secondary' size='lg'>
									<ButtonText textAlign='center'>Member Login</ButtonText>
								</Button>
							</Box>
						</VStack>
					</Box>
				</Box>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default ResetPasswordScreen;
