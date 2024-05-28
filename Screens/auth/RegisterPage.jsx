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

const RegisterPage = ({ navigation }) => {
	const [formData, setFormData] = useState({ name: "", email: "", password: "", reEnterPassword: "" });
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [joinPressed, setJoinPressed] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [nameError, setNameError] = useState("");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleJoining = () => {
		setJoinPressed(true);

		if (!formData.name) {
			setNameError("Name is required");
		} else {
			setNameError("");
		}

		if (!formData.email) {
			setEmailError("Email is required");
			return;
		}

		if (!emailRegex.test(formData.email)) {
			setEmailError("Invalid email address");
			return;
		} else {
			setEmailError("");
		}

		if (!formData.password) {
			setPasswordError("Password is required");
			return;
		} else {
			setPasswordError("");
		}

		if (!formData.reEnterPassword) {
			setPasswordError("Password is required");
			return;
		} else {
			setPasswordError("");
		}

		if (formData.password !== formData.reEnterPassword) {
			setPasswordError("Entered password do not match");
		}

		navigation.navigate("Email Sent Page", { enteredMail: formData.email });
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
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Box flex={1} backgroundColor='$primaryBackground'>
					<Box flex={3 / 4}>
						<VStack space='3xl'>
							<Text bold size='xl' paddingTop={20} paddingLeft={20}>
								Member Onboarding
							</Text>
							<Box>
								<FormControl size='md' isDisabled={false} isInvalid={joinPressed && nameError} isReadOnly={false} isRequired={false}>
									<Box justifycontent='center' alignItems='center'>
										<Input width={"$80%"} variant='underlined'>
											<InputField onChangeText={handleChangeName} value={formData.name} placeholder='Name' />
										</Input>
										{joinPressed && nameError && (
											<FormControlError width={"$80%"}>
												<FormControlErrorIcon as={AlertCircleIcon} />
												<FormControlErrorText>{nameError}</FormControlErrorText>
											</FormControlError>
										)}
									</Box>
								</FormControl>
							</Box>
							<Box>
								<FormControl isInvalid={joinPressed && emailError} size='md' isDisabled={false} isReadOnly={false} isRequired={false}>
									<Box justifycontent='center' alignItems='center'>
										<Input width={"$80%"} variant='underlined'>
											<InputField onChangeText={handleChangeEmail} value={formData.email} placeholder='Email' />
										</Input>
										{joinPressed && emailError && (
											<FormControlError width={"$80%"}>
												<FormControlErrorIcon as={AlertCircleIcon} />
												<FormControlErrorText>{emailError}</FormControlErrorText>
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
								<Button onPress={handleJoining} variant='primary' size='lg'>
									<ButtonText>Join As Member</ButtonText>
								</Button>
							</Box>
							<Box>
								<VStack space='lg' justifycontent='center' alignItems='center'>
									<Text width={"$80%"} size='xs' textAlign='center'>
										By joining as a member, you agree to Docked's{" "}
										<Button variant='link' size='sm' onPress={() => navigation.navigate("Privacy Policy Page")}>
											<ButtonText underline>Terms & Conditions of Use.</ButtonText>
										</Button>
									</Text>
									<Text width={"$80%"} size='xs' textAlign='center'>
										To learn more about how Docked collects, uses, share and protects your personal data, please see{" "}
										<Button variant='link' size='sm' onPress={() => navigation.navigate("Privacy Policy Page")}>
											<ButtonText underline>Docked's Privacy Policy.</ButtonText>
										</Button>
									</Text>
								</VStack>
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

export default RegisterPage;
