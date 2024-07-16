import { Actionsheet, CheckIcon, CheckboxGroup, CheckboxIndicator } from "@gluestack-ui/themed";
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
	Toast,
	useToast,
	ToastTitle,
	ToastDescription,
} from "@gluestack-ui/themed";
import { Platform, Linking, TouchableOpacity } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import appStoreInstance from "../../stores/AppStore";
import AppStore from "../../stores/AppStore";
import Loader from "../../components/Loader";
import { observer } from "mobx-react";
import { ImageAssets } from "../../../assets/Assets";
import { Image } from "@gluestack-ui/themed";
import { Link } from "@react-navigation/native";
import { ActionsheetBackdrop } from "@gluestack-ui/themed";
import { ActionsheetContent } from "@gluestack-ui/themed";
import { Divider } from "@gluestack-ui/themed";

const RegisterPage = ({ navigation, route }) => {
	const [showActionsheet, setShowActionsheet] = useState(false);
	const { enteredNumber } = route.params;
	const [isChecked, setIsChecked] = useState(true);
	const toggleCheckbox = () => {
		setIsChecked(!isChecked);
	};

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		reEnterPassword: "",
	});
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [resetPasswordVisible, setResetPasswordVisible] = useState(false);
	const [joinPressed, setJoinPressed] = useState(false);
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [resestPasswordError, setResetPasswordError] = useState("");
	const [nameError, setNameError] = useState("");
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const invalidStartingCharsRegex = /^[!#$%&'*+/=?^_`{|}~-]/;
	const consecutiveSpecialCharsRegex = /[!#$%&'*+/=?^_`{|}~-]{2,}/;
	const toast = useToast();

	const handleJoining = async () => {
		setJoinPressed(true);

		try {
			if (!formData.name) {
				setNameError("Name is required");
				return;
			} else {
				setNameError("");
			}

			if (!formData.email) {
				setEmailError("Email is required");
				return;
			}

			if (formData.email.startsWith(".") || formData.email.endsWith(".")) {
				setEmailError("Email address cannot start or end with a dot");
				return;
			}

			if (invalidStartingCharsRegex.test(formData.email)) {
				setEmailError("Email address cannot start with a special character");
				return;
			}

			if (consecutiveSpecialCharsRegex.test(formData.email)) {
				setEmailError("Email address cannot contain consecutive special characters");
				return;
			}

			if (!emailRegex.test(formData.email)) {
				setEmailError("Invalid email address");
				return;
			} else {
				setEmailError("");
			}

			if (!formData.reEnterPassword && !formData.password) {
				setResetPasswordError("Password confirmation is required");
				setPasswordError("Password is required");
				return;
			} else {
				setResetPasswordError("");
				setPasswordError("");
			}

			if (!formData.password) {
				setPasswordError("Password is required");
				return;
			} else if (formData.password.length < 6) {
				setPasswordError("Password must be at least 6 characters");
				return;
			} else {
				setPasswordError("");
			}

			if (!formData.reEnterPassword) {
				setResetPasswordError("Password confirmation is required");
				return;
			} else {
				setResetPasswordError("");
			}

			if (formData.password !== formData.reEnterPassword) {
				setPasswordError("Entered password do not match");
				setResetPasswordError("Entered password do not match");
				return;
			}

			const response = await AppStore.register({
				name: formData.name,
				userName: formData.email,
				password: formData.password,
				phoneNumber: enteredNumber,
				userStatus: "VERIFICATION_REQUIRED",
			});

			switch (response.status) {
				case "SUCCESS":
					console.log("USER>ID", response);
					console.log("USER>ID", response.data.addUser.user[0].id);
					AppStore.setUserId(response.data.addUser.user[0].id);
					console.log("APPSTORE USER>ID", AppStore.UserId);
					const signInResponse = await AppStore.SignIn(
						{
							userName: formData.email,
							password: formData.password,
						},
						true
					);
					if (signInResponse) {
						navigation.navigate("Email Sent Page", { enteredMail: formData.email, enteredNumber: enteredNumber, enteredPassword: formData.password });
					}
					break;

				case "FAILED":
					setEmailError(response.data.reason);
					break;

				case "ERROR":
					toast.show({
						placement: "top",
						duration: 10000,
						render: ({ id }) => {
							const toastId = "toast-" + id;
							return (
								<Toast nativeID={toastId} action='error' variant='accent' p='$3' px='$4'>
									<VStack space='xs' mx='$4'>
										<ToastTitle>Something Went Wrong</ToastTitle>
										<ToastDescription>{response.data.reason}</ToastDescription>
									</VStack>
								</Toast>
							);
						},
					});
					break;

				default:
					break;
			}
		} catch (error) {
			console.error("An error occurred during the registration process:", error);
			toast.show({
				placement: "top",
				duration: 10000,
				render: ({ id }) => {
					const toastId = "toast-" + id;
					return (
						<Toast nativeID={toastId} action='error' variant='accent' p='$3' px='$4'>
							<VStack space='xs' mx='$4'>
								<ToastTitle>Something Went Wrong</ToastTitle>
								<ToastDescription>{error.message}</ToastDescription>
							</VStack>
						</Toast>
					);
				},
			});
		}
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

	const handleShowResetPasswordState = () => {
		setResetPasswordVisible((showState) => {
			return !showState;
		});
	};

	const privacyPolicySheet = () => {
		setShowActionsheet(!showActionsheet);
	};

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
					<Box flex={1} backgroundColor='$primaryBackground'>
						<Image w='$100%' h='$100%' position='absolute' top={0} source={ImageAssets.registerBG} alt='Docked-Logo' />
						<Box height='$10%'>
							<Image width={140} height={100} source={ImageAssets.logo} alt='Docked-Logo' />
						</Box>
						<Box h='$100%' p='$5'>
							<VStack space='xl'>
								<Text bold size='xl' color='#FFFFFC'>
									Create an Account
								</Text>
								<Box>
									<FormControl size='md' isDisabled={false} isInvalid={joinPressed && nameError} isReadOnly={false} isRequired={false}>
										<Text pb='$1' color='#515151' fontSize='$xs'>
											Name
										</Text>
										<Input bg='#FFFFFC' variant='outline'>
											<InputField
												onChangeText={handleChangeName}
												value={formData.name}
												placeholder='Name'
												autoCapitalize='words'
												onFocus={() => setNameError("")}
											/>
										</Input>
										{joinPressed && nameError && (
											<FormControlError>
												<FormControlErrorIcon as={AlertCircleIcon} />
												<FormControlErrorText>{nameError}</FormControlErrorText>
											</FormControlError>
										)}
									</FormControl>
								</Box>
								<Box>
									<FormControl isInvalid={joinPressed && emailError} size='md' isDisabled={false} isReadOnly={false} isRequired={false}>
										<Text pb='$1' color='#515151' fontSize='$xs'>
											Email Address
										</Text>
										<Input bg='#FFFFFC' variant='outline'>
											<InputField
												onChangeText={handleChangeEmail}
												value={formData.email}
												placeholder='Email'
												autoCapitalize='none'
												onFocus={() => setEmailError("")}
											/>
										</Input>
										{joinPressed && emailError && (
											<FormControlError>
												<FormControlErrorIcon as={AlertCircleIcon} />
												<FormControlErrorText>{emailError}</FormControlErrorText>
											</FormControlError>
										)}
									</FormControl>
								</Box>
								<Box>
									<FormControl size='md' isDisabled={false} isInvalid={joinPressed && passwordError} isReadOnly={false} isRequired={false}>
										<Text pb='$1' color='#515151' fontSize='$xs'>
											Password
										</Text>
										<Input bg='#FFFFFC' variant='outline'>
											<InputField
												onChangeText={handleChangePassword}
												value={formData.password}
												type={passwordVisible ? "text" : "password"}
												placeholder='Password'
												onFocus={() => setPasswordError("")}
											/>
											<InputSlot pr='$3' onPress={handleShowPasswordState}>
												<InputIcon as={passwordVisible ? Eye : EyeOff} color='#E6E3DB' />
											</InputSlot>
										</Input>
										{joinPressed && passwordError && (
											<FormControlError>
												<FormControlErrorIcon as={AlertCircleIcon} />
												<FormControlErrorText>{passwordError}</FormControlErrorText>
											</FormControlError>
										)}
									</FormControl>
								</Box>
								<Box>
									<FormControl size='md' isDisabled={false} isInvalid={joinPressed && resestPasswordError} isReadOnly={false} isRequired={false}>
										<Text pb='$1' color='#515151' fontSize='$xs'>
											Re-enter Password
										</Text>
										<Input bg='#FFFFFC' variant='outline'>
											<InputField
												onChangeText={handleChangeReEnterPassword}
												value={formData.reEnterPassword}
												type={resetPasswordVisible ? "text" : "password"}
												placeholder='Re-enter Password'
												onFocus={() => setResetPasswordError("")}
											/>
											<InputSlot pr='$3' onPress={handleShowResetPasswordState}>
												<InputIcon as={resetPasswordVisible ? Eye : EyeOff} color='#E6E3DB' />
											</InputSlot>
										</Input>
										{joinPressed && resestPasswordError && (
											<FormControlError>
												<FormControlErrorIcon as={AlertCircleIcon} />
												<FormControlErrorText>{resestPasswordError}</FormControlErrorText>
											</FormControlError>
										)}
									</FormControl>
								</Box>
								<Box>
									<VStack space='xs' justifycontent='center' alignItems='center'>
										<HStack>
											<Checkbox
												aria-label='privacy-policy'
												value={isChecked}
												onChange={toggleCheckbox}
												size='md'
												isInvalid={false}
												isDisabled={false}>
												<CheckboxIndicator borderColor='#979797' mr='$2'>
													<CheckboxIcon as={CheckIcon} />
												</CheckboxIndicator>
											</Checkbox>
											<Text size='xs'>
												To join as a member, you agree to docked's{" "}
												<Link to='/#' onPress={privacyPolicySheet}>
													<Text size='xs' underline>
														Terms & Conditions of Use
													</Text>
												</Link>
											</Text>
										</HStack>
										<Text size='xs'>
											To learn more about how docked collects, uses, share and protects your personal data, please see{" "}
											<Link to='/#' onPress={privacyPolicySheet}>
												<Text size='xs' underline>
													docked's Privacy Policy.
												</Text>
											</Link>
										</Text>
									</VStack>
								</Box>
							</VStack>
							<Box w='$100%' p='$5'>
								<VStack w='$100%' space='sm'>
									<Box>
										<Button isDisabled={isChecked} onPress={handleJoining} variant='primary'>
											<ButtonText>Let’s get you Docked</ButtonText>
										</Button>
									</Box>
									<HStack w='$100%' space='sm' justifyContent='center' alignItems='center'>
										<Text>Already a member?</Text>
										<Box>
											<Button variant='link' size='sm' onPress={() => navigation.navigate("Login Page")}>
												<ButtonText color='#367B71'>Member Login</ButtonText>
											</Button>
										</Box>
									</HStack>
								</VStack>
							</Box>
						</Box>
					</Box>
					<Actionsheet px='$2' isOpen={showActionsheet} onClose={privacyPolicySheet} zIndex={999}>
						<ActionsheetBackdrop />
						<ActionsheetContent alignItems='flex-start' h='$72' zIndex={999}>
							<VStack>
								<Text size='xs' bold></Text>
								<VStack space='lg' padding={10}>
									<Text color='#21272A' size='md' bold>
										Privacy Policy
									</Text>
									<Text size='xs'>
										Our app respects your privacy and is committed to protecting your personal information. We collect minimal data necessary for app
										functionality and do not share it with third parties. Any information collected is used solely for improving the user experience
										within the app. We do not store any personally identifiable information unless explicitly provided by you. By using our app, you
										consent to the collection and use of information as described in this policy.
									</Text>
									<Text color='#21272A' size='md' bold>
										Terms & Conditions
									</Text>
									<Text size='xs'>
										Our app respects your privacy and is committed to protecting your personal information. We collect minimal data necessary for app
										functionality and do not share it with third parties. Any information collected is used solely for improving the user experience
										within the app. We do not store any personally identifiable information unless explicitly provided by you. By using our app, you
										consent to the collection and use of information as described in this policy.
									</Text>
								</VStack>
							</VStack>
						</ActionsheetContent>
					</Actionsheet>
				</ScrollView>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(RegisterPage);
