import { config } from "./config/gluestack-ui.config";
import LoginPage from ".//Screens/auth/LoginPage";
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

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter: require("./assets/fonts/Inter.ttf"),
		Inter_Regular: require("./assets/fonts/Inter-Regular.ttf"),
		Inter_Bold: require("./assets/fonts/Inter-Bold.ttf"),
		Inter_SemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
	});

	if (!fontsLoaded) {
		SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources
		return null; // Return null so that nothing is rendered until fonts are loaded
	}

	SplashScreen.hideAsync();

	const Stack = createNativeStackNavigator();
	return (
		<GluestackUIProvider config={config}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='SplashScreen'
					screenOptions={{
						animation: "slide_from_right", // Define the animation type
						gestureEnabled: false,
					}}>
					<Stack.Screen
						name='SplashScreen'
						component={SplashScreenPage}
						options={{
							title: "Login",
							headerShown: false,
						}}
					/>
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
						options={{ title: "", headerStyle: { backgroundColor: "#E8EEF3" } }}
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
			</NavigationContainer>
			<StatusBar />
		</GluestackUIProvider>
	);
}
