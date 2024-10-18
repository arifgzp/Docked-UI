import React, { useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
import appStoreInstance from "../../../stores/AppStore";
import AnesthesiologyDashboard from "./AnesthesiologyDashboard ";
import OrthopaedicsDashboard from "./OrthopaedicsDashboard";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import OrthodonticsDashboard from "./OrthodonticsDashboard";
import ORMDashboard from "./ORMDashboard";

const HomeScreen = ({ navigation }) => {
	const isFocused = useIsFocused();
	useFocusEffect(
		useCallback(() => {
			console.log("this is coming in on home screen");
			appStoreInstance.setIsTabBarVisble(true);
			return () => {
				console.log("this is going out of home screen");
				appStoreInstance.setIsTabBarVisble(false);
			};
		}, [])
	);

	const specialty = appStoreInstance.UserBroadSpecialty || "General";
	console.log("specilaty when entering the home screen,", specialty);

	const renderDashboard = () => {
		switch (specialty) {
			case "Anaesthesiology":
				return <AnesthesiologyDashboard navigation={navigation} />;
			case "Orthopaedics":
				return <OrthopaedicsDashboard navigation={navigation} />;
			case "Orthodontics":
				return <OrthodonticsDashboard navigation={navigation} />;
			case "OralMedicineAndRadiology":
				return <ORMDashboard navigation={navigation} />;
			default:
				return <OrthodonticsDashboard navigation={navigation} />; // Fallback to Anesthesiology dashboard
		}
	};

	return <View style={{ flex: 1 }}>{renderDashboard()}</View>;
};

export default observer(HomeScreen);
