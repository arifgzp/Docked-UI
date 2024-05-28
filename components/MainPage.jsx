import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreenPage from "../Screens/main/HomeScreen";
import SettingsScreenPage from "../Screens/main/SettingsScreen";
import MainLogScreen from "../Screens/main/LogScreens/MainLogScreen";
import { ImageAssets } from "../assets/Assets";
import { Image } from "@gluestack-ui/themed";
import ResourcesMainPage from "../Screens/main/Resources/ResourcesMainPage";
import CommunityMainPage from "../Screens/main/Community/CommunityMainPage";
import { TouchableOpacity } from "react-native";
import NotificationsScreen from "../Screens/main/NotificationsScreen";
import RootLogScreens from "../Screens/main/LogScreens/RootLogScreens";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const NotificationButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={{ marginRight: 15 }}>
			<Ionicons name='notifications-outline' size={25} color='#000' />
		</TouchableOpacity>
	);
};

const MainTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				animation: "slide_from_right",
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					left: 15,
					right: 15,
					elevation: 0,
					backgroundColor: "#FFFFFF",
					height: 70,
					borderRadius: 50,
				},
				tabBarActiveTintColor: "#DE2E2E",
				tabBarInactiveTintColor: "#1E1E1E",
				headerStyle: {
					backgroundColor: "#E8EEF3",
					borderBottomWidth: 1,
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5,
				},
				headerTitleAlign: "center",
			}}>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />,
					headerShown: false,
				}}
				name='Dashboard'
				component={HomeScreenPage}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='document-text' size={size} color={color} />,
					headerShown: false,
				}}
				name='RootLogBook'
				component={RootLogScreens}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='play-circle-outline' size={size} color={color} />,
					headerShown: false,
				}}
				name='Resources'
				component={ResourcesMainPage}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='people-outline' size={size} color={color} />,
					headerShown: false,
				}}
				name='Community'
				component={CommunityMainPage}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='add-circle' size={65} color={"rgba(64, 224, 208, 0.7)"} />,
					headerShown: false,
				}}
				name='Plus'
				component={SettingsScreenPage}
			/>
		</Tab.Navigator>
	);
};

export default function MainPage({ navigation }) {
	return (
		<Drawer.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					bottom: 25,
					left: 15,
					right: 15,
					elevation: 0,
					backgroundColor: "#FFFFFF",
					height: 70,
					borderRadius: 50,
				},
				tabBarActiveTintColor: "#DE2E2E",
				tabBarInactiveTintColor: "#1E1E1E",
				headerStyle: {
					backgroundColor: "#E8EEF3",
					borderBottomWidth: 1,
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5,
				},
				headerTitleAlign: "center",
				headerTitle: () => (
					<Image
						source={ImageAssets.logo} // Update the path to your image
						style={{ width: 80, height: 55 }}
						alt='docked-logo' // Adjust the size of the image as needed
					/>
				),
				headerRight: () => <NotificationButton onPress={() => navigation.navigate("NotificationsScreen")} />,
			}}>
			<Drawer.Screen name='Home' component={MainTabs} />
			<Drawer.Screen name='Settings' component={SettingsScreenPage} />
			{/* Add additional screens for drawer navigation here if needed */}
		</Drawer.Navigator>
	);
}
