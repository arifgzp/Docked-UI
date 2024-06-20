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
import { useNavigationState } from "@react-navigation/native";
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
import AppStore from "../../src/stores/AppStore";
import HomeScreenPage from "./HomeScreen";
import LogTabsMainScreen from "./LogScreens/CaseLogsScreens/TabScreens/LogTabsMainScreen";
import ResourcesMainPage from "./Resources/ResourcesMainPage";
import RootLogScreens from "./LogScreens/RootLogScreens";
import CommunityMainPage from "./Community/CommunityMainPage";
const Tab = createBottomTabNavigator();

const anaesthesiaCaseLogEntryOptions = [
	{ id: "CaseLog", name: "Case Log" },
	{ id: "ChronicPainLog", name: "Chronic Pain Log" },
	{ id: "CriticalCareCaseLog", name: "Critical Care Case Log" },
	{ id: "ThesisLogs", name: "Thesis Logs" },
	{ id: "SpecialCaseLogs", name: "Special Case Logs" },
];

const OrthopaedicsCaseLogEntryOptions = [{ id: "OrthopaedicsCaseLog", name: "Case Log" }];

const OrthodonticsCaseLogEntryOptions = [{ id: "OrthodonticsClinicalCaseLog", name: "Clinical Case Log" }];

const getLogEntries = (specialty) => {
	console.log("UserBroadSpecialty: for the switch case.", specialty);
	switch (specialty) {
		case "Orthopaedics":
			return OrthopaedicsCaseLogEntryOptions;
			break;
		case "Orthodontics":
			return OrthodonticsCaseLogEntryOptions;
			break;
		case "Anaesthesia":
			return anaesthesiaCaseLogEntryOptions;
			break;
		default:
			return anaesthesiaCaseLogEntryOptions;
			break;
	}
};

const LandingScreen = ({ navigation, route }) => {
	const UserBroadSpecialty = AppStore.UserBroadSpecialty;
	const [selected, setSelected] = useState(new Set([]));
	const [logEntryToDisplay, setLogEntryToDisplay] = useState(getLogEntries(UserBroadSpecialty));
	const [selectedLogButton, setSelectedLogButton] = useState("");

	const [showActionsheet, setShowActionsheet] = useState(false);
	const handleClose = () => {
		setShowActionsheet(!showActionsheet);
		setSelectedLogButton("");
	};

	const handleDisplayingLogForm = (selectedLogButton) => {
		switch (selectedLogButton) {
			case "CaseLog":
				handleClose();
				navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "CaseLog" } });
				setSelectedLogButton("");
				break;
			case "ChronicPainLog":
				handleClose();
				navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "ChronicPain" } });
				setSelectedLogButton("");
				break;
			case "CriticalCareCaseLog":
				handleClose();
				navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "CriticalCareCaseLog" } });
				setSelectedLogButton("");
				break;
			case "OrthopaedicsCaseLog":
				handleClose();
				navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthopaedicsCaseLog" } });
				setSelectedLogButton("");
				break;
			case "OrthodonticsClinicalCaseLog":
				handleClose();
				navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthodonticsClinicalCaseLog" } });
				setSelectedLogButton("");
				break;
			default:
				// Optional: handle cases where keys.currentKey does not match any of the specified cases
				console.log("Key not recognized");
				break;
		}
	};

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
				component={LogTabsMainScreen}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='add-circle' size={65} color='#CC3F0C' />,
					headerShown: false,
					tabBarButton: (props) => (
						<Box>
							<Button onPress={handleClose} borderRadius={"$full"} mt='$2' backgroundColor='#CC3F0C' width={45} height={45}>
								<ButtonIcon as={Ionicons} size='xl' name='add-outline' />
							</Button>
							<Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
								<ActionsheetBackdrop />
								<ActionsheetContent alignItems='flex-start' h='$72' zIndex={999}>
									<ActionsheetDragIndicatorWrapper>
										<ActionsheetDragIndicator />
									</ActionsheetDragIndicatorWrapper>
									<VStack width={"$100%"} space='lg' mt='$2' ml='$2'>
										<Text color='#000000' size='lg' fontFamily='Inter_Bold'>
											Choose type of log entry
										</Text>
										<RadioGroup width={"$100%"} value={selectedLogButton} onChange={setSelectedLogButton}>
											<VStack alignItems='flex-start' space='lg' mb='$2'>
												{logEntryToDisplay.map((logEntry) => {
													return (
														<Radio width={"$100%"} value={logEntry.id}>
															<RadioIndicator mr='$2'>
																<RadioIcon as={CircleIcon} />
															</RadioIndicator>
															<RadioLabel>{logEntry.name}</RadioLabel>
														</Radio>
													);
												})}
											</VStack>
										</RadioGroup>
									</VStack>
									<Box mt='$4' mb='$4' alignSelf='center'>
										<Button onPress={() => handleDisplayingLogForm(selectedLogButton)} backgroundColor='#367B71' borderRadius={"$full"}>
											<ButtonText pl='$3' pr='$3' fontFamily='Inter_Regular'>
												Proceed for log entry
											</ButtonText>
										</Button>
									</Box>
								</ActionsheetContent>
							</Actionsheet>
						</Box>
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

export default observer(LandingScreen);

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