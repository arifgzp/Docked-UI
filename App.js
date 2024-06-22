import { config } from "./config/gluestack-ui.config";
import LoginPage from "./Screens/auth/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "./Screens/auth/RegisterPage";
import ForgotPasswordPage from "./Screens/auth/ForgotPassword";
import MainPage from "./components/MainPage";
import PrivacyPolicyPage from "./Screens/auth/PrivacyPolicy";
import EmailSentPage from "./Screens/auth/EmailSent";
import EmailNotVerifiedPage from "./Screens/auth/EmailNotVerified";
import EmailVerifiedPage from "./Screens/auth/EmailVerified";
import WelcomeScreenPage from "./Screens/auth/WelcomeScreen";
import ProfilePicturePage from "./Screens/auth/ProfilePicture";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "@gluestack-ui/themed";
import RegisterMobileNumberPage from "./Screens/auth/RegisterMobileNumber";
import RegisterMobileNumberOTPPage from "./Screens/auth/RegisterMobileNumberOTP";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import EnterOTPPage from "./Screens/auth/EnterOTP";
import SplashScreenPage from "./Screens/SplashScreen";
import SetupProfile from "./components/SetupProfile/SetupProfile";
import DockedProfile from "./Screens/auth/DockedProfile";
import NotificationsScreen from "./Screens/main/NotificationsScreen";
import { StoreContext } from "./src/models";
import rootStore from "./src/stores/MobXRootStore";
import ResetPasswordEmailSent from "./Screens/auth/ResetPasswordEmailSent";
import ResetPasswordScreen from "./Screens/auth/ResetPasswordScreen";
import PasswordResetSuccessfully from "./Screens/auth/PasswordResetSuccessfully";
import { LogBox } from "react-native";
import { useEffect } from "react";
import appStoreInstance from "./src/stores/AppStore";
import { observer } from "mobx-react";
import { enableFreeze, enableScreens } from "react-native-screens";
LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs();

enableScreens(true);

const Stack = createNativeStackNavigator();

function App() {
	const [fontsLoaded] = useFonts({
		Inter: require("./assets/fonts/Inter.ttf"),
		Inter_Regular: require("./assets/fonts/Inter-Regular.ttf"),
		Inter_Bold: require("./assets/fonts/Inter-Bold.ttf"),
		Inter_SemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
	});

	SplashScreen.preventAutoHideAsync().catch(() => {
		/* reloading the app might trigger some race conditions, ignore them */
	});

	useEffect(() => {
		const runPreChecks = async () => {
			await appStoreInstance.validateUserToken();
			SplashScreen.hideAsync();
		};

		if (fontsLoaded) {
			runPreChecks();
		}
	}, [fontsLoaded]);

	const isUserSignedIn = appStoreInstance.isUserSignedIn;
	console.log("isUserSignedIn >> ", isUserSignedIn);
	return (
		<StoreContext.Provider value={rootStore}>
			<GluestackUIProvider config={config}>
				<NavigationContainer>
					{appStoreInstance.isUserSignedIn ? (
						<MainPage />
					) : (
						<Stack.Navigator
							initialRouteName={"Login Page"}
							screenOptions={{
								animation: "slide_from_right", // Define the animation type
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
									title: "",
									headerStyle: { backgroundColor: "#E8EEF3" },
								}}
							/>
							<Stack.Screen
								name='Forgot Password Page'
								component={ForgotPasswordPage}
								options={{
									title: "",
									headerStyle: { backgroundColor: "#E8EEF3" },
								}}
							/>
							<Stack.Screen
								name='Privacy Policy Page'
								component={PrivacyPolicyPage}
								options={{
									title: "",
									headerStyle: { backgroundColor: "#E8EEF3" },
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
								name='Main Page'
								component={MainPage}
								options={{
									title: "Main Page",
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name='Enter Email OTP Page'
								component={EnterOTPPage}
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
									title: "",
									headerShown: false,
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
				<StatusBar barStyle='dark-content' backgroundColor='#E8EEF3' />
			</GluestackUIProvider>
		</StoreContext.Provider>
	);
}

export default observer(App);
