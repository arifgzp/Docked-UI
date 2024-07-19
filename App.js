import { config } from "./config/gluestack-ui.config";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StoreContext } from "./src/models";
import rootStore from "./src/stores/MobXRootStore";
import { LogBox } from "react-native";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { enableFreeze, enableScreens } from "react-native-screens";
import AppWrapper from "./app/AppWrapper";
import appStoreInstance from "./src/stores/AppStore";
import { fonts } from "react-native-elements/dist/config";
LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs();

enableScreens(true);

function App() {
	console.log("font aoding");
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
	if (!fontsLoaded) {
		return null;
	}
	return (
		<StoreContext.Provider value={rootStore}>
			<GluestackUIProvider config={config}>
				<AppWrapper />
			</GluestackUIProvider>
		</StoreContext.Provider>
	);
}

export default observer(App);
