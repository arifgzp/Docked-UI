import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "@gluestack-ui/themed";
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
import MainPage from "../src/components/MainPage";
import appStoreInstance from "../src/stores/AppStore";
import LandingScreen from "../src/Screens/main/LandingScreen";

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
	return (
		<>
			<StatusBar translucent backgroundColor='$transparent' barStyle='dark-content' />
			<NavigationContainer>
				{appStoreInstance.isUserSignedIn ? (
					<LandingScreen />
				) : (
					<Stack.Navigator
						initialRouteName={"Login Page"}
						screenOptions={{
							gestureEnabled: false,
						}}>
						<Stack.Screen
							name='Login Page'
							component={LoginPage}
							options={{
								title: "Login",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Register Page'
							component={RegisterPage}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen name='Register Mobile Number Page' component={RegisterMobileNumberPage} options={{ title: "", headerShown: false }} />
						<Stack.Screen
							name='Register Mobile Number OTP Page'
							component={RegisterMobileNumberOTPPage}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Forgot Password Page'
							component={ForgotPasswordPage}
							options={{
								title: "",
								headerStyle: { backgroundColor: "#E6E3DB" },
							}}
						/>
						<Stack.Screen
							name='Privacy Policy Page'
							component={PrivacyPolicyPage}
							options={{
								title: "",
								headerStyle: { backgroundColor: "#E6E3DB" },
							}}
						/>
						<Stack.Screen
							name='Email Sent Page'
							component={EmailSentPage}
							options={{
								headerShown: false,
								gestureEnabled: false,
							}}
						/>
						<Stack.Screen
							name='Email Not Verified Page'
							component={EmailNotVerifiedPage}
							options={{
								headerShown: false,
								headerLeft: null,
							}}
						/>
						<Stack.Screen
							name='Email Verified Page'
							component={EmailVerifiedPage}
							options={{
								headerShown: false,
								headerLeft: null,
							}}
						/>
						<Stack.Screen
							name='Welcome Page'
							component={WelcomeScreenPage}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Profile Picture Page'
							component={ProfilePicturePage}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Main Landing Page'
							component={LandingScreen}
							options={{
								title: "Main Landing Page",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Enter Email OTP Page'
							component={EnterOTP}
							options={{
								title: "",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='ResetPasswordEmailSentPage'
							component={ResetPasswordEmailSent}
							options={{
								title: "",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='ResetPasswordScreen'
							component={ResetPasswordScreen}
							options={{
								title: "Reset Password",
								headerShown: true,
								headerStyle: { backgroundColor: "#E6E3DB" },
							}}
						/>
						<Stack.Screen
							name='PasswordResetSuccessfully'
							component={PasswordResetSuccessfully}
							options={{
								title: "",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Profile Setup Page'
							component={DockedProfile}
							options={{
								title: "",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='Setup ProfilePage'
							component={SetupProfile}
							options={{
								title: "",
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name='NotificationsScreen'
							component={NotificationsScreen}
							options={{
								title: "Notifications",
								headerStyle: { backgroundColor: "#E8EEF3" },
								headerTitleAlign: "center",
							}}
						/>
					</Stack.Navigator>
				)}
			</NavigationContainer>
		</>
	);
};

export default AppWrapper;
