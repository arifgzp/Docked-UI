import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { ButtonText, HStack, Modal, ModalBackdrop, ModalBody, ModalCloseButton, ModalContent, ModalHeader, StatusBar } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "../src/models";
import appStoreInstance from "../src/stores/AppStore";

import LoginPage from "../src/Screens/auth/LoginPage";
import RegisterPage from "../src/Screens/auth/RegisterPage";
import RegisterMobileNumberPage from "../src/Screens/auth/RegisterMobileNumber";
import RegisterMobileNumberOTPPage from "../src/Screens/auth/RegisterMobileNumberOTP";
import ForgotPasswordPage from "../src/Screens/auth/ForgotPassword";
import PrivacyPolicyPage from "../src/Screens/auth/PrivacyPolicy";
import EmailSentPage from "../src/Screens/auth/EmailSent";
import EmailNotVerifiedPage from "../src/Screens/auth/EmailNotVerified";
import EmailVerifiedPage from "../src/Screens/auth/EmailVerified";
import WelcomeScreenPage from "../src/Screens/auth/WelcomeScreen";
import ProfilePicturePage from "../src/Screens/auth/ProfilePicture";
import EnterOTP from "../src/Screens/auth/EnterOTP";
import ResetPasswordEmailSent from "../src/Screens/auth/ResetPasswordEmailSent";
import ResetPasswordScreen from "../src/Screens/auth/ResetPasswordScreen";
import PasswordResetSuccessfully from "../src/Screens/auth/PasswordResetSuccessfully";
import DockedProfile from "../src/Screens/auth/DockedProfile";
import NotificationsScreen from "../src/Screens/main/NotificationsScreen";
import SetupProfile from "../src/components/SetupProfile/SetupProfile";
import LandingScreen from "../src/Screens/main/LandingScreen";
import { Box } from "@gluestack-ui/themed";
import { Text } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";

const Stack = createNativeStackNavigator();

const createAuthStack = () => (
	<Stack.Navigator initialRouteName='Login Page' screenOptions={{ gestureEnabled: false }}>
		<Stack.Screen name='Login Page' component={LoginPage} options={{ title: "Login", headerShown: false }} />
		<Stack.Screen name='Register Page' component={RegisterPage} options={{ headerShown: false }} />
		<Stack.Screen name='Register Mobile Number Page' component={RegisterMobileNumberPage} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Register Mobile Number OTP Page' component={RegisterMobileNumberOTPPage} options={{ headerShown: false }} />
		<Stack.Screen name='Forgot Password Page' component={ForgotPasswordPage} options={{ title: "", headerStyle: { backgroundColor: "#E6E3DB" } }} />
		<Stack.Screen name='Privacy Policy Page' component={PrivacyPolicyPage} options={{ title: "", headerStyle: { backgroundColor: "#E6E3DB" } }} />
		<Stack.Screen name='Email Sent Page' component={EmailSentPage} options={{ headerShown: false, gestureEnabled: false }} />
		<Stack.Screen name='Email Not Verified Page' component={EmailNotVerifiedPage} options={{ headerShown: false, headerLeft: null }} />
		<Stack.Screen name='Email Verified Page' component={EmailVerifiedPage} options={{ headerShown: false, headerLeft: null }} />
		<Stack.Screen name='Welcome Page' component={WelcomeScreenPage} options={{ headerShown: false }} />
		<Stack.Screen name='Profile Picture Page' component={ProfilePicturePage} options={{ headerShown: false }} />
		<Stack.Screen name='Main Landing Page' component={LandingScreen} options={{ title: "Main Landing Page", headerShown: false }} />
		<Stack.Screen name='Enter Email OTP Page' component={EnterOTP} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='ResetPasswordEmailSentPage' component={ResetPasswordEmailSent} options={{ title: "", headerShown: false }} />
		<Stack.Screen
			name='ResetPasswordScreen'
			component={ResetPasswordScreen}
			options={{ title: "Reset Password", headerShown: true, headerStyle: { backgroundColor: "#E6E3DB" } }}
		/>
		<Stack.Screen name='PasswordResetSuccessfully' component={PasswordResetSuccessfully} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Profile Setup Page' component={DockedProfile} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Setup ProfilePage' component={SetupProfile} options={{ title: "", headerShown: false }} />
		<Stack.Screen
			name='NotificationsScreen'
			component={NotificationsScreen}
			options={{ title: "Notifications", headerStyle: { backgroundColor: "#E8EEF3" }, headerTitleAlign: "center" }}
		/>
	</Stack.Navigator>
);

const createVerificationPendingStack = () => (
	<Stack.Navigator initialRouteName='Enter Email OTP Page' screenOptions={{ gestureEnabled: false }}>
		<Stack.Screen name='Login Page' component={LoginPage} options={{ title: "Login", headerShown: false }} />
		<Stack.Screen name='Register Page' component={RegisterPage} options={{ headerShown: false }} />
		<Stack.Screen name='Register Mobile Number Page' component={RegisterMobileNumberPage} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Register Mobile Number OTP Page' component={RegisterMobileNumberOTPPage} options={{ headerShown: false }} />
		<Stack.Screen name='Forgot Password Page' component={ForgotPasswordPage} options={{ title: "", headerStyle: { backgroundColor: "#E6E3DB" } }} />
		<Stack.Screen name='Privacy Policy Page' component={PrivacyPolicyPage} options={{ title: "", headerStyle: { backgroundColor: "#E6E3DB" } }} />
		<Stack.Screen name='Email Sent Page' component={EmailSentPage} options={{ headerShown: false, gestureEnabled: false }} />
		<Stack.Screen name='Email Not Verified Page' component={EmailNotVerifiedPage} options={{ headerShown: false, headerLeft: null }} />
		<Stack.Screen name='Email Verified Page' component={EmailVerifiedPage} options={{ headerShown: false, headerLeft: null }} />
		<Stack.Screen name='Welcome Page' component={WelcomeScreenPage} options={{ headerShown: false }} />
		<Stack.Screen name='Profile Picture Page' component={ProfilePicturePage} options={{ headerShown: false }} />
		<Stack.Screen name='Main Landing Page' component={LandingScreen} options={{ title: "Main Landing Page", headerShown: false }} />
		<Stack.Screen name='Enter Email OTP Page' component={EnterOTP} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='ResetPasswordEmailSentPage' component={ResetPasswordEmailSent} options={{ title: "", headerShown: false }} />
		<Stack.Screen
			name='ResetPasswordScreen'
			component={ResetPasswordScreen}
			options={{ title: "Reset Password", headerShown: true, headerStyle: { backgroundColor: "#E6E3DB" } }}
		/>
		<Stack.Screen name='PasswordResetSuccessfully' component={PasswordResetSuccessfully} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Profile Setup Page' component={DockedProfile} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Setup ProfilePage' component={SetupProfile} options={{ title: "", headerShown: false }} />
		<Stack.Screen
			name='NotificationsScreen'
			component={NotificationsScreen}
			options={{ title: "Notifications", headerStyle: { backgroundColor: "#E8EEF3" }, headerTitleAlign: "center" }}
		/>
	</Stack.Navigator>
);

const createMainLandinggStack = () => (
	<Stack.Navigator initialRouteName='Main Landing Page' screenOptions={{ gestureEnabled: false }}>
		<Stack.Screen name='Login Page' component={LoginPage} options={{ title: "Login", headerShown: false }} />
		<Stack.Screen name='Register Page' component={RegisterPage} options={{ headerShown: false }} />
		<Stack.Screen name='Register Mobile Number Page' component={RegisterMobileNumberPage} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Register Mobile Number OTP Page' component={RegisterMobileNumberOTPPage} options={{ headerShown: false }} />
		<Stack.Screen name='Forgot Password Page' component={ForgotPasswordPage} options={{ title: "", headerStyle: { backgroundColor: "#E6E3DB" } }} />
		<Stack.Screen name='Privacy Policy Page' component={PrivacyPolicyPage} options={{ title: "", headerStyle: { backgroundColor: "#E6E3DB" } }} />
		<Stack.Screen name='Email Sent Page' component={EmailSentPage} options={{ headerShown: false, gestureEnabled: false }} />
		<Stack.Screen name='Email Not Verified Page' component={EmailNotVerifiedPage} options={{ headerShown: false, headerLeft: null }} />
		<Stack.Screen name='Email Verified Page' component={EmailVerifiedPage} options={{ headerShown: false, headerLeft: null }} />
		<Stack.Screen name='Welcome Page' component={WelcomeScreenPage} options={{ headerShown: false }} />
		<Stack.Screen name='Profile Picture Page' component={ProfilePicturePage} options={{ headerShown: false }} />
		<Stack.Screen name='Main Landing Page' component={LandingScreen} options={{ title: "Main Landing Page", headerShown: false }} />
		<Stack.Screen name='Enter Email OTP Page' component={EnterOTP} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='ResetPasswordEmailSentPage' component={ResetPasswordEmailSent} options={{ title: "", headerShown: false }} />
		<Stack.Screen
			name='ResetPasswordScreen'
			component={ResetPasswordScreen}
			options={{ title: "Reset Password", headerShown: true, headerStyle: { backgroundColor: "#E6E3DB" } }}
		/>
		<Stack.Screen name='PasswordResetSuccessfully' component={PasswordResetSuccessfully} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Profile Setup Page' component={DockedProfile} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Setup ProfilePage' component={SetupProfile} options={{ title: "", headerShown: false }} />
		<Stack.Screen
			name='NotificationsScreen'
			component={NotificationsScreen}
			options={{ title: "Notifications", headerStyle: { backgroundColor: "#E8EEF3" }, headerTitleAlign: "center" }}
		/>
	</Stack.Navigator>
);

const createWizardPendingStack = () => (
	<Stack.Navigator initialRouteName='Profile Setup Page' screenOptions={{ gestureEnabled: false }}>
		<Stack.Screen name='Login Page' component={LoginPage} options={{ title: "Login", headerShown: false }} />
		<Stack.Screen name='Register Page' component={RegisterPage} options={{ headerShown: false }} />
		<Stack.Screen name='Register Mobile Number Page' component={RegisterMobileNumberPage} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Register Mobile Number OTP Page' component={RegisterMobileNumberOTPPage} options={{ headerShown: false }} />
		<Stack.Screen name='Forgot Password Page' component={ForgotPasswordPage} options={{ title: "", headerStyle: { backgroundColor: "#E6E3DB" } }} />
		<Stack.Screen name='Privacy Policy Page' component={PrivacyPolicyPage} options={{ title: "", headerStyle: { backgroundColor: "#E6E3DB" } }} />
		<Stack.Screen name='Email Sent Page' component={EmailSentPage} options={{ headerShown: false, gestureEnabled: false }} />
		<Stack.Screen name='Email Not Verified Page' component={EmailNotVerifiedPage} options={{ headerShown: false, headerLeft: null }} />
		<Stack.Screen name='Email Verified Page' component={EmailVerifiedPage} options={{ headerShown: false, headerLeft: null }} />
		<Stack.Screen name='Welcome Page' component={WelcomeScreenPage} options={{ headerShown: false }} />
		<Stack.Screen name='Profile Picture Page' component={ProfilePicturePage} options={{ headerShown: false }} />
		<Stack.Screen name='Main Landing Page' component={LandingScreen} options={{ title: "Main Landing Page", headerShown: false }} />
		<Stack.Screen name='Enter Email OTP Page' component={EnterOTP} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='ResetPasswordEmailSentPage' component={ResetPasswordEmailSent} options={{ title: "", headerShown: false }} />
		<Stack.Screen
			name='ResetPasswordScreen'
			component={ResetPasswordScreen}
			options={{ title: "Reset Password", headerShown: true, headerStyle: { backgroundColor: "#E6E3DB" } }}
		/>
		<Stack.Screen name='PasswordResetSuccessfully' component={PasswordResetSuccessfully} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Profile Setup Page' component={DockedProfile} options={{ title: "", headerShown: false }} />
		<Stack.Screen name='Setup ProfilePage' component={SetupProfile} options={{ title: "", headerShown: false }} />
		<Stack.Screen
			name='NotificationsScreen'
			component={NotificationsScreen}
			options={{ title: "Notifications", headerStyle: { backgroundColor: "#E8EEF3" }, headerTitleAlign: "center" }}
		/>
	</Stack.Navigator>
);

const AppWrapper = () => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [navKey, setNavKey] = useState(0); // To force re-creation of the stack navigator
	const [showCongratulationModal, setShowCongratulationModal] = useState(false);
	const [showInfoModal, setShowInfoModal] = useState(false);
	const congratulationRef = useRef(null);
	const infoRef = useRef(null);

	useEffect(() => {
		// Whenever `isUserSignedIn` or `UserStatus` changes, update the `navKey`
		setNavKey((prevKey) => prevKey + 1);
	}, [appStoreInstance.isUserSignedIn, appStoreInstance.UserStatus]);

	useEffect(() => {
		if (appStoreInstance.isUserSignedIn) {
			const fetchUserProfile = async () => {
				try {
					const userQuery = store.fetchUserById(appStoreInstance.UserName);
					setQuery(userQuery);
					const finishFetchingUserProfile = await userQuery;
					if (finishFetchingUserProfile) {
						const fetchProfileData = finishFetchingUserProfile.queryUser[0];
						console.log("finishFetchingUserProfile.queryUser[0]", finishFetchingUserProfile.queryUser[0]);
						appStoreInstance.setSuperSpecialty(fetchProfileData.superSpecialty);
						appStoreInstance.setSubSpecialty(fetchProfileData.subSpecialty);
						appStoreInstance.setDesignation(fetchProfileData.designation);
						appStoreInstance.setDesignationOthers(fetchProfileData.designationOthers);
						appStoreInstance.setWorkPlace(fetchProfileData.workPlace);
						appStoreInstance.setCity(fetchProfileData.city);
						appStoreInstance.setMedicalCouncilName(fetchProfileData.medicalCouncilName);
						appStoreInstance.setYearOfRegistration(fetchProfileData.yearOfRegistration);
						appStoreInstance.setMedicalRegistrationNumber(fetchProfileData.medicalRegistrationNumber);
						appStoreInstance.setImagePath(fetchProfileData.imagePath);
						appStoreInstance.setUserStatus(fetchProfileData.userStatus);
						appStoreInstance.setCaseLogNumbers(fetchProfileData.targetedCaseLogNumber);
						appStoreInstance.setLastCaseLogged(fetchProfileData.dateOfBirth);
					}
				} catch (error) {
					console.log(error);
				}
			};
			fetchUserProfile();
		}
	}, [appStoreInstance.isUserSignedIn]);

	const renderStack = () => {
		if (appStoreInstance.isUserSignedIn) {
			switch (appStoreInstance.UserStatus) {
				case "REGISTERED":
					return createMainLandinggStack();
				case "VERIFICATION_REQUIRED":
					return createVerificationPendingStack();
				case "WIZARD_PENDING":
					return createWizardPendingStack();
				default:
					return createAuthStack();
			}
		} else if (appStoreInstance.isUserSignedIn === false) {
			return createAuthStack();
		}
	};

	useEffect(() => {
		console.log("the latest number of Case Log Numbers", appStoreInstance.CaseLogNumbers);
		if (appStoreInstance.CaseLogNumbers && appStoreInstance.CaseLogNumbers % 2 === 0) {
			setShowCongratulationModal(true);
		}
	}, [appStoreInstance.CaseLogNumbers]);

	useEffect(() => {
		console.log("the latest Last Logged Date", appStoreInstance.LastCaseLogged);
		// if (appStoreInstance.LastCaseLogged && appStoreInstance.LastCaseLogged % 2 === 0) {
		// 	setShowCongratulationModal(true);
		// }
	}, [appStoreInstance.LastCaseLogged]);

	console.log("appStoreInstance.CaseLogNumbers", appStoreInstance.CaseLogNumbers);

	console.log("appStoreInstance.isUserSignedIn, appStoreInstance.UserStatus", appStoreInstance.isUserSignedIn, appStoreInstance.UserStatus);
	return (
		<>
			<StatusBar translucent backgroundColor='$transparent' barStyle='dark-content' />
			<NavigationContainer key={navKey}>{renderStack()}</NavigationContainer>
			{/* <HStack space='md' justifyContent='center' p='$4'>
				<Button onPress={openCongratulationModal} ref={congratulationRef}>
					<ButtonText>Congratulations</ButtonText>
				</Button>
				<Button onPress={openInfoModal} ref={infoRef} variant='outline'>
					<ButtonText>Information</ButtonText>
				</Button>
			</HStack> */}

			{/* Congratulation Modal */}
			<Modal isOpen={showCongratulationModal} onClose={() => setShowCongratulationModal(false)} finalFocusRef={congratulationRef} size='lg'>
				<ModalBackdrop />
				<ModalContent>
					<ModalHeader>
						<Heading size='xl' color='$357A71'>
							Congratulations!
						</Heading>
						<ModalCloseButton>
							<Icon as={CloseIcon} size='sm' color='$gray400' />
						</ModalCloseButton>
					</ModalHeader>
					<ModalBody>
						<Box bg='$green100' p='$4' borderRadius='$lg'>
							<Text size='md' color='$green800'>
								You have made this number of logs. Keep Logging{" "}
							</Text>
						</Box>
					</ModalBody>
					<ModalFooter>
						<Button onPress={() => setShowCongratulationModal(false)} variant='primary'>
							<ButtonText>Keep Logging</ButtonText>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			{/* Information Modal */}
			<Modal isOpen={showInfoModal} onClose={() => setShowInfoModal(false)} finalFocusRef={infoRef} size='lg'>
				<ModalBackdrop />
				<ModalContent>
					<ModalHeader>
						<Heading size='xl' color='#CC3F0C'>
							Not Logged In!
						</Heading>
						<ModalCloseButton>
							<Icon as={CloseIcon} size='sm' color='$gray400' />
						</ModalCloseButton>
					</ModalHeader>
					<ModalBody>
						<Box p='$4' borderRadius='$lg'>
							<Text size='md' color='#CC3F0C'>
								You haven't logged in for more than 48 hours now!
							</Text>
						</Box>
					</ModalBody>
					<ModalFooter>
						<Button onPress={() => setShowInfoModal(false)} variant='primary'>
							<ButtonText>Create a log now</ButtonText>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default observer(AppWrapper);
