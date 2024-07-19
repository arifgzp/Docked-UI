import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Divider, Image, MenuItem, Modal, ModalBackdrop, ModalBody, ModalCloseButton, RadioGroup } from "@gluestack-ui/themed";
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
import { observer } from "mobx-react";
import AppStore from "../../stores/AppStore";
import HomeScreenPage from "./HomeScreen";
import RootLogScreens from "./LogScreens/RootLogScreens";
import ResourcesMainPage from "./Resources/ResourcesMainPage";
import CommunityMainPage from "./Community/CommunityMainPage";
import LandingScreenPages from "./LandingScreenPages";
import CreateLogScreen from "./LogScreens/CreateLogScreen";
import { ImageAssets } from "../../../assets/Assets";

const Tab = createBottomTabNavigator();

const anaesthesiaCaseLogEntryOptions = [
	{ id: "CaseLog", name: "Case Log" },
	{ id: "ChronicPainLog", name: "Chronic Pain Log" },
	{ id: "CriticalCareCaseLog", name: "Critical Care Case Log" },
];

const orthopaedicsCaseLogEntryOptions = [
	{ id: "OrthopaedicsCaseLog", name: "Case Log" },
	{ id: "OrthopaedicsProcedureLog", name: "Procedure Log" },
];

const orthodonticsCaseLogEntryOptions = [
	{ id: "OrthodonticsClinicalCaseLog", name: "Clinical Case Log" },
	{ id: "OrthodonticsPreClinical", name: "Pre-Clinical Log" },
];

const getCreateMenuOptions = (specialty) => {
	switch (specialty) {
		case "Orthopaedics":
			return orthopaedicsCaseLogEntryOptions;
		case "Orthodontics":
			return orthodonticsCaseLogEntryOptions;
		case "Anaesthesiology":
			return anaesthesiaCaseLogEntryOptions;
		default:
			return anaesthesiaCaseLogEntryOptions;
	}
};

const CreateMenuList = () => {
	const [selectedLogButton, setSelectedLogButton] = useState("");
	const [showActionsheet, setShowActionsheet] = useState(false);
	const navigation = useNavigation();

	const toggleCreateMenu = () => {
		setShowActionsheet(!showActionsheet);
		setSelectedLogButton("");
	};

	const handleOnProceedClick = () => {
		const currentLogButton = selectedLogButton;
		toggleCreateMenu();
		setTimeout(() => {
			switch (currentLogButton) {
				case "CaseLog":
					navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "CaseLog" } });
					break;
				case "ChronicPainLog":
					navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "ChronicPain" } });
					setSelectedLogButton("");
					break;
				case "CriticalCareCaseLog":
					navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "CriticalCareCaseLog" } });
					break;
				case "OrthopaedicsCaseLog":
					navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthopaedicsCaseLog" } });
					break;
				case "OrthopaedicsProcedureLog":
					navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthopaedicsProcedureLog" } });
					break;
				case "OrthodonticsClinicalCaseLog":
					navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthodonticsClinicalCaseLog" } });
					break;
				case "OrthodonticsPreClinical":
					navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthodonticsPreClinical" } });
					break;
				default:
					console.log("Key not recognized");
					break;
			}
		}, 500);
	};

	return (
		<Box pl='$4' pr='$4'>
			<Button onPress={toggleCreateMenu} borderRadius={"$full"} mt='$2' backgroundColor='#CC3F0C' width={40} height={40}>
				<ButtonIcon as={Ionicons} size='md' name='add-outline' />
			</Button>
			<Actionsheet isOpen={showActionsheet} onClose={toggleCreateMenu} zIndex={999}>
				<ActionsheetBackdrop />
				<ActionsheetContent alignItems='flex-start' h='$72' zIndex={999}>
					<VStack width={"$100%"} space='lg' mt='$2'>
						<Text pl='$3' color='#000000' size='lg' fontFamily='Inter_Bold'>
							Choose type of log entry
						</Text>
						<Divider />
						<RadioGroup pl='$3' width={"$100%"} value={selectedLogButton} onChange={setSelectedLogButton}>
							<VStack w='$full' alignItems='flex-start' space='lg' mb='$2'>
								{getCreateMenuOptions(AppStore.UserBroadSpecialty).map((option) => {
									return (
										<Radio key={option.id} width={"$100%"} value={option.id}>
											<RadioIndicator mr='$2'>
												<RadioIcon as={CircleIcon} />
											</RadioIndicator>
											<RadioLabel>{option.name}</RadioLabel>
										</Radio>
									);
								})}
							</VStack>
						</RadioGroup>
					</VStack>
					<Box mt='$4'>
						<Divider />
					</Box>
					<Divider />
					<Box w='$90%' mt='$4' mb='$4' alignSelf='center'>
						<Button onPress={handleOnProceedClick} backgroundColor='#367B71' borderRadius={"$full"}>
							<ButtonText pl='$3' pr='$3' fontFamily='Inter_Regular'>
								Proceed for log entry
							</ButtonText>
						</Button>
					</Box>
				</ActionsheetContent>
			</Actionsheet>
		</Box>
	);
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
	return (
		<Box style={{ flexDirection: "row", height: 60, backgroundColor: "#FFF", elevation: 0, padding: 0 }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.name);
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};

				let iconName;
				switch (route.name) {
					case "Home":
						iconName = "home";
						break;
					case "Logbook":
						iconName = "document-text";
						break;
					case "Plus":
						iconName = "add-circle";
						break;
					case "Resources":
						iconName = "play-circle";
						break;
					case "Community":
						iconName = "people";
						break;
					default:
						iconName = "home";
						break;
				}
				const iconColor = isFocused ? "#0F0F10" : "#979797";

				return (
					<TouchableOpacity
						key={route.key}
						accessibilityRole='button'
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "space-between",
						}}>
						{route.name !== "Plus" && (
							<Box borderRadius='$full' width='$55%' height='$10%' backgroundColor={isFocused ? "#CC3F0C" : "transparent"}></Box>
						)}
						{route.name === "Plus" ? (
							<CreateMenuList />
						) : (
							<Image width={20} height={20} source={ImageAssets[`${route.name}${isFocused ? "Active" : "Inactive"}`]} alt='Docked-Logo' />
						)}
						<Text fontSize={10} style={{ color: iconColor, paddingBottom: 10 }}>
							{route.name === "Plus" ? "" : route.name}
						</Text>
					</TouchableOpacity>
				);
			})}
		</Box>
	);
};

const LandingScreen = ({ navigation, route }) => {
	return (
		<Tab.Navigator
			tabBar={(props) => <CustomTabBar {...props} />}
			screenOptions={{
				tabBarShowLabel: true,
				tabBarLabelStyle: { paddingBottom: 10 },
				tabBarStyle: {
					position: "absolute",
					elevation: 0,
					backgroundColor: "#FFFFFF",
					height: 60,
				},
				tabBarActiveTintColor: "#0F0F10",
				tabBarInactiveTintColor: "#979797",
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
				name='Home'
				component={LandingScreenPages}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='document-text' size={size} color={color} />,
					headerShown: false,
				}}
				name='Logbook'
				component={RootLogScreens}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='add-circle' size={65} color='#CC3F0C' />,
					headerShown: false,
					tabBarButton: (props) => <CreateMenuList {...props} />,
				}}
				name='Plus'
				component={CreateLogScreen} // dummy component, since it's not used
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='play-circle' size={size} color={color} />,
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
		</Tab.Navigator>
	);
};

export default observer(LandingScreen);
