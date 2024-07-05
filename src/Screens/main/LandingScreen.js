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

const Tab = createBottomTabNavigator();

const anaesthesiaCaseLogEntryOptions = [
	{ id: "CaseLog", name: "Case Log" },
	{ id: "ChronicPainLog", name: "Chronic Pain Log" },
	{ id: "CriticalCareCaseLog", name: "Critical Care Case Log" },
	// { id: "ThesisLogs", name: "Thesis Logs" },
	// { id: "SpecialCaseLogs", name: "Special Case Logs" },
];

const orthopaedicsCaseLogEntryOptions = [{ id: "OrthopaedicsCaseLog", name: "Case Log" }];

const orthodonticsCaseLogEntryOptions = [{ id: "OrthodonticsClinicalCaseLog", name: "Clinical Case Log" }];

const getCreateMenuOptions = (specialty) => {
	//console.log("UserBroadSpecialty: for the switch case.", specialty);
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

const CreateMenuList = (props) => {
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

				case "OrthodonticsClinicalCaseLog":
					navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthodonticsClinicalCaseLog" } });
					break;

				default:
					// Optional: handle cases where keys.currentKey does not match any of the specified cases
					console.log("Key not recognized");
					break;
			}
		}, 500);
	};

	return (
		<Box pl='$4' pr='$4'>
			<Button onPress={toggleCreateMenu} borderRadius={"$full"} mt='$2' backgroundColor='#CC3F0C' width={40} height={40}>
				<ButtonIcon as={Ionicons} size='xl' name='add-outline' />
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

const LandingScreen = ({ navigation, route }) => {
	return (
		<Tab.Navigator
			screenOptions={{
				animation: "slide_from_right",
				tabBarShowLabel: true,
				tabBarStyle: {
					position: "absolute",
					elevation: 0,
					backgroundColor: "#FFFFFF",
					height: 55,
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
				name='Log Book'
				component={RootLogScreens}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='add-circle' size={65} color='#CC3F0C' />,
					headerShown: false,
					tabBarButton: (props) => <CreateMenuList {...props} />,
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
		</Tab.Navigator>
	);
};

export default observer(LandingScreen);
