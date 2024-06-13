import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import HomeScreenPage from "../Screens/main/HomeScreen";
import SettingsScreenPage from "../Screens/main/SettingsScreen";
import MainLogScreen from "../Screens/main/LogScreens/MainLogScreen";
import { ImageAssets } from "../assets/Assets";
import { Divider, Image, MenuItem, Modal, ModalBackdrop, ModalBody, ModalCloseButton } from "@gluestack-ui/themed";
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
import { ButtonIcon } from "@gluestack-ui/themed";
import { useNavigationState } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const NotificationButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={{ marginRight: 15 }}>
			<Ionicons name='notifications-outline' size={25} color='#000' />
		</TouchableOpacity>
	);
};

const MainTabs = ({ navigation }) => {
	const [selected, setSelected] = useState(new Set([]));

	return (
		<Tab.Navigator
			screenOptions={{
				animation: "slide_from_right",
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					elevation: 0,
					backgroundColor: "#FFFFFF",
					height: 70,
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
				component={LogTabsScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='add-circle' size={65} color={"rgba(64, 224, 208, 0.7)"} />,
					headerShown: false,
					tabBarButton: (props) => (
						<Menu
							disabledKeys={["AcademicLog", "ThesisLog", "SpecialLog", "CustomLog"]}
							selectionMode='single'
							selectedKeys={selected}
							onSelectionChange={(keys) => {
								console.log("onSelectionChange", keys);
								setSelected(keys);
								switch (keys.currentKey) {
									case "LogProfile":
										console.log("Push to", keys.currentKey, "route");
										navigation.navigate("Plus", { screen: "LogProfilePage" });
										break;
									case "CaseLog":
										console.log("Push to", keys.currentKey, "route");
										navigation.navigate("Plus", { screen: "CaseLogFormScreen" });
										break;
									case "AcademicLog":
										console.log("Push to", keys.currentKey, "route");
										navigation.navigate("MainLogScreen", { screen: "AcademicLog" });
										break;
									case "ThesisLog":
										console.log("Push to", keys.currentKey, "route");
										navigation.navigate("MainLogScreen", { screen: "ThesisLogs" });
										break;
									case "SpecialLog":
										console.log("Push to", keys.currentKey, "route");
										navigation.navigate("MainLogScreen", { screen: "SpecialCaseLogs" });
										break;
									case "CustomLog":
										console.log("Push to", keys.currentKey, "route");

										break;
									default:
										// Optional: handle cases where keys.currentKey does not match any of the specified cases
										console.log("Key not recognized");
										break;
								}
							}}
							closeOnSelect={true}
							{...props}
							placement='top'
							style={{ backgroundColor: "#FFFFFF" }}
							trigger={({ ...triggerProps }) => {
								return (
									<Button mt='$2' width={50} height={50} {...triggerProps}>
										<ButtonIcon as={Ionicons} size='xl' name='add-circle' />
									</Button>
								);
							}}>
							<MenuItem justifyContent='center' key='LogProfile' textValue='LogProfile'>
								<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
								<MenuItemLabel size='sm'>Log Profile</MenuItemLabel>
							</MenuItem>
							<MenuItem justifyContent='center' key='CaseLog' textValue='CaseLog'>
								<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
								<MenuItemLabel size='sm'>Case Log</MenuItemLabel>
							</MenuItem>
							<MenuItem justifyContent='center' key='AcademicLog' textValue='AcademicLog'>
								<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
								<MenuItemLabel size='sm'>Academic Log</MenuItemLabel>
							</MenuItem>
							<MenuItem justifyContent='center' key='ThesisLog' textValue='ThesisLog'>
								<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
								<MenuItemLabel size='sm'>Thesis Log</MenuItemLabel>
							</MenuItem>
							<MenuItem justifyContent='center' key='SpecialLog' textValue='SpecialLog'>
								<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
								<MenuItemLabel size='sm'>Special Log</MenuItemLabel>
							</MenuItem>
							<MenuItem justifyContent='center' key='CustomLog' textValue='CustomLog'>
								<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
								<MenuItemLabel size='sm'>Custom Log</MenuItemLabel>
							</MenuItem>
						</Menu>
					),
				}}
				name='Plus'
				component={RootLogScreens} // dummy component, since it's not used
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
					tabBarIcon: ({ color, size }) => <Ionicons name='people-outline' size={size} color={color} />,
					headerShown: false,
					tabBarButton: () => null,
				}}
				name='MainLogScreen'
				component={RootLogScreens}
			/>
		</Tab.Navigator>
	);
};

export default function MainPage({ navigation }) {
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
			<Drawer.Screen name='Home' component={MainTabs} />
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContent: {
		width: "80%",
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
		elevation: 5,
	},
	modalText: {
		fontSize: 18,
		textAlign: "center",
		marginBottom: 20,
	},
	closeButton: {
		backgroundColor: "#DE2E2E",
		padding: 10,
		borderRadius: 5,
	},
	closeButtonText: {
		color: "white",
		textAlign: "center",
		fontSize: 16,
	},
});
