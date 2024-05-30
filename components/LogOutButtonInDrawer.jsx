import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const LogOutButtonInDrawer = (props) => {
	const handleLogout = () => {
		// Implement your logout logic here
		console.log("User logged out");
		// For example, you might want to navigate to a login screen or clear user data
		props.navigation.navigate("Login Page"); // Assuming you have a LoginScreen in your navigator
	};

	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<View style={styles.logoutContainer}>
				<TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
					<Text style={styles.logoutText}>Logout</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	logoutContainer: {
		marginTop: "auto",
		marginBottom: 20,
		paddingHorizontal: 20,
	},
	logoutButton: {
		backgroundColor: "#DE2E2E",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 5,
	},
	logoutText: {
		color: "#FFFFFF",
		textAlign: "center",
		fontWeight: "bold",
	},
});

export default LogOutButtonInDrawer;
