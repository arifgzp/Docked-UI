import React from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react";
import appStoreInstance from "../../../stores/AppStore";
import AnesthesiologyDashboard from "./AnesthesiologyDashboard ";
import OrthopaedicsDashboard from "./OrthopaedicsDashboard";

const HomeScreen = ({ navigation }) => {
	const specialty = appStoreInstance.UserBroadSpecialty || "General";

	const renderDashboard = () => {
		switch (specialty) {
			case "Anesthesiology":
				return <AnesthesiologyDashboard navigation={navigation} />;
			case "Orthopaedics":
				return <OrthopaedicsDashboard navigation={navigation} />;
			default:
				return <AnesthesiologyDashboard navigation={navigation} />; // Fallback to Anesthesiology dashboard
		}
	};

	return <View style={{ flex: 1 }}>{renderDashboard()}</View>;
};

export default observer(HomeScreen);
