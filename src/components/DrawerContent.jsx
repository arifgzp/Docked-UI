import React from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navigation, User } from "lucide-react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Avatar, Box, Divider, HStack, VStack } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import appStoreInstance from "../stores/AppStore";

const DrawerContent = (props) => {
	console.log("DrawerContent: ", props.state);

	const handleLogout = () => {
		// Implement your logout logic here
		console.log("User logged out");
		// For example, you might want to navigate to a login screen or clear user data
		//props.navigation.navigate("Login Page"); // Assuming you have a LoginScreen in your navigator
		appStoreInstance.SignOut();
	};
	return (
		<DrawerContentScrollView {...props}>
			<VStack alignItems='center' py='$8'>
				<Avatar bgColor='#357A71'>
					{/* User is imported from 'lucide-react-native' */}
					<Icon as={User} color='white' size='lg' />
				</Avatar>
				<Text style={styles.profileName}>{appStoreInstance.UserName}</Text>
			</VStack>
			<Divider />
			<DrawerItem
				icon={({ focused, color, size }) => <Ionicons name='home' size={size} color={color} />}
				label='Home'
				onPress={() => props.navigation.navigate("Dashboard")}
			/>
			<DrawerItem
				icon={({ focused, color, size }) => <Ionicons name='document-text' size={size} color={color} />}
				label='Case Log'
				onPress={() => props.navigation.navigate("RootLogBook")}
			/>
			<DrawerItem
				icon={({ focused, color, size }) => <Ionicons name='play-circle-outline' size={size} color={color} />}
				label='Resources'
				onPress={() => props.navigation.navigate("Resources")}
			/>
			<DrawerItem
				icon={({ focused, color, size }) => <Ionicons name='people-outline' size={size} color={color} />}
				label='Community'
				onPress={() => props.navigation.navigate("Community")}
			/>
			<DrawerItem
				icon={({ focused, color, size }) => <Ionicons name='power-sharp' size={size} color={color} />}
				label='Logout'
				onPress={handleLogout}
			/>
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
