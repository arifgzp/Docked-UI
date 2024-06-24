import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import HomeScreenPage from "../Screens/main/HomeScreen";
import SettingsScreenPage from "../Screens/main/SettingsScreen";
import MainLogScreen from "../Screens/main/LogScreens/MainLogScreen";
import { ImageAssets } from "../assets/Assets";
import { Divider, Image, MenuItem, Modal, ModalBackdrop, ModalBody, ModalCloseButton, RadioGroup } from "@gluestack-ui/themed";
import ResourcesMainPage from "../Screens/main/Resources/ResourcesMainPage";
import CommunityMainPage from "../Screens/main/Community/CommunityMainPage";
import NotificationsScreen from "../Screens/main/NotificationsScreen";
import RootLogScreens from "../Screens/main/LogScreens/RootLogScreens";
import LogTabsScreen from "../Screens/main/LogScreens/CaseLogsScreens/TabScreens/LogTabsMainScreen";
import DrawerContent from "./DrawerContent";
import { ModalContent } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import { CloseIcon, GlobeIcon, PlusIcon } from "@gluestack-ui/themed";
import { Menu } from "@gluestack-ui/themed";
import { MenuItemLabel } from "@gluestack-ui/themed";
import { ButtonIcon, Text } from "@gluestack-ui/themed";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { Radio } from "@gluestack-ui/themed";
import { RadioIndicator } from "@gluestack-ui/themed";
import { RadioIcon } from "@gluestack-ui/themed";
import { CircleIcon } from "@gluestack-ui/themed";
import { RadioLabel } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import {
	Actionsheet,
	ActionsheetBackdrop,
	ActionsheetDragIndicatorWrapper,
	ActionsheetContent,
	ActionsheetDragIndicator,
	ActionsheetItem,
	ActionsheetItemText,
} from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import AppStore from "../src/stores/AppStore";
import { observer } from "mobx-react";
import LandingScreen from "../Screens/main/LandingScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const NotificationButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={{ marginRight: 15 }}>
			<Ionicons name='notifications-outline' size={25} color='#000' />
		</TouchableOpacity>
	);
};

const MainPage = () => {
	const navigation = useNavigation();
	return (
		<Drawer.Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
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
			<Drawer.Screen name='Home' component={LandingScreen} />
		</Drawer.Navigator>
	);
};
export default observer(MainPage);
