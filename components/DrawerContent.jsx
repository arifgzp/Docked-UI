import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ImageAssets } from "../assets/Assets";
import { Navigation } from "lucide-react-native";
import AppStore from "../src/stores/AppStore";

const DrawerContent = (props) => {
	const handleLogout = () => {
		// Implement your logout logic here
		console.log("User logged out");
		// For example, you might want to navigate to a login screen or clear user data

		props.navigation.navigate("Login Page"); // Assuming you have a LoginScreen in your navigator
	};
	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.profileContainer}>
				<Image
					source={ImageAssets.logo} // Replace with your profile image URL
					style={styles.profileImage}
				/>
				<Text style={styles.profileName}>Mudit Dixit</Text>
			</View>
			<DrawerItemList {...props} />
			<DrawerItem label='Case Log' onPress={() => props.navigation.navigate("RootLogBook")} />
			<DrawerItem label='Resources' onPress={() => props.navigation.navigate("Resources")} />
			<DrawerItem label='Community' onPress={() => props.navigation.navigate("Community")} />
			<TouchableOpacity
				onPress={() => {
					/* Handle logout */
				}}
				style={styles.logoutButton}>
				<Text onPress={handleLogout} style={styles.logoutText}>
					Logout
				</Text>
			</TouchableOpacity>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	profileContainer: {
		alignItems: "center",
		marginVertical: 20,
	},
	profileImage: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	profileName: {
		marginTop: 10,
		fontSize: 18,
		fontWeight: "bold",
		fontFamily: "Inter_bold",
	},
	logoutButton: {
		marginTop: 20,
		padding: 10,
		alignItems: "center",
	},
	logoutText: {
		color: "red",
		fontSize: 16,
	},
});

export default DrawerContent;
