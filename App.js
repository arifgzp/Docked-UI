import React, { useEffect, useState } from "react";
import { AppState } from "react-native";
import { observer } from "mobx-react";
import { StoreContext } from "./src/models";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { usePushNotifications } from "./src/hooks/usePushNotifications";
import {
	captureLiveUserData,
	captureSessionDuration,
	sendLiveUserStatusDataToBigQueryForAdminAnalytics,
	sendUserSessionDataToBigQueryForAdminAnalytics,
} from "./src/components/BigQueryFunctions/AdminDashboardAnalyticalQueries";
import AppWrapper from "./app/AppWrapper";
import rootStore from "./src/stores/MobXRootStore";
import appStoreInstance from "./src/stores/AppStore";
import { config } from "./config/gluestack-ui.config";

function App() {
	const { expoPushToken, notification } = usePushNotifications();
	const [fontsLoaded] = useFonts({
		Inter: require("./assets/fonts/Inter.ttf"),
		Inter_Regular: require("./assets/fonts/Inter-Regular.ttf"),
		Inter_Bold: require("./assets/fonts/Inter-Bold.ttf"),
		Inter_SemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
		Inter_Medium: require("./assets/fonts/Inter-Medium.ttf"),
		Jua: require("./assets/fonts/Jua-Regular.ttf"),
	});

	useEffect(() => {
		if (appStoreInstance.UserId) {
			console.log("UserId is now available:", appStoreInstance.UserId);
			appStoreInstance.setStartTimeOfApp(new Date().toISOString());
			const sendLiveStatusOfUser = sendLiveUserStatusDataToBigQueryForAdminAnalytics();
			console.log("sendLiveStatusOfUser", sendLiveStatusOfUser);
			//appStoreInstance.sendDataToBigQuery(sendLiveStatusOfUser);
		}
	}, [appStoreInstance.UserId]);

	const handleAppStateChange = (nextAppState) => {
		if (nextAppState === "background") {
			console.log("App is going to background");
			if (appStoreInstance.UserId) {
				const sendUserSessionData = sendUserSessionDataToBigQueryForAdminAnalytics(appStoreInstance.StartTimeOfTheApp, new Date().toISOString());
				console.log("sendUserSessionData", sendUserSessionData);
				appStoreInstance.setStartTimeOfApp(null);
				appStoreInstance.sendDataToBigQuery(sendUserSessionData);
			}
		} else if (nextAppState === "active") {
			console.log("App is now active");
			if (appStoreInstance.UserId) {
				const sendLiveStatusOfUser = sendLiveUserStatusDataToBigQueryForAdminAnalytics();
				console.log("sendLiveStatusOfUser", sendLiveStatusOfUser);
				appStoreInstance.setStartTimeOfApp(new Date().toISOString());
				appStoreInstance.sendDataToBigQuery(sendLiveStatusOfUser);
			}
		}
	};

	useEffect(() => {
		const subscription = AppState.addEventListener("change", handleAppStateChange);
		return () => {
			subscription.remove();
		};
	}, [appStoreInstance.UserId]);

	useEffect(() => {
		const runPreChecks = async () => {
			await appStoreInstance.validateUserToken();
			SplashScreen.hideAsync();
		};
		if (fontsLoaded) {
			runPreChecks();
		}
	}, [fontsLoaded]);

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
