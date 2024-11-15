import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Divider, Image, MenuItem, Modal, ModalBackdrop, ModalBody, ModalCloseButton, Pressable, RadioGroup } from "@gluestack-ui/themed";
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
import { useIsFocused, useNavigation, useNavigationState } from "@react-navigation/native";
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
import HomeScreenPage from "./HomePage/HomeScreen";
import RootLogScreens from "./LogScreens/RootLogScreens";
import ResourcesMainPage from "./Resources/ResourcesMainPage";
import CommunityMainPage from "./Community/CommunityMainPage";
import LandingScreenPages from "./LandingScreenPages";
import CreateLogScreen from "./LogScreens/CreateLogScreen";
import { ImageAssets } from "../../../assets/Assets";
import appStoreInstance from "../../stores/AppStore";
import { useQuery } from "../../models";

const Tab = createBottomTabNavigator();

const getCreateMenuOptions = (specialty) => {
	const commonOptions = [
		{ id: "Academic", name: "Academic", nested: true },
		{ id: "ThesisLog", name: "Thesis Log" },
		{ id: "CustomLog", name: "Custom Log" },
	];

	const specialtyOptions = {
		Orthopaedics: [
			{ id: "OrthopaedicsCaseLog", name: "Case Log" },
			{ id: "OrthopaedicsProcedureLog", name: "Procedure Log" },
		],
		Orthodontics: [
			{ id: "OrthodonticsClinicalCaseLog", name: "Clinical Case Log" },
			{ id: "OrthodonticsPreClinical", name: "Pre-Clinical Log" },
		],
		Anaesthesiology: [
			{ id: "CaseLog", name: "Case Log" },
			{ id: "ChronicPainLog", name: "Chronic Pain Log" },
			{ id: "CriticalCareCaseLog", name: "Critical Care Case Log" },
		],
		OralMedicineAndRadiology: [
			{ id: "OralMedicineCaseLog", name: "Medicine Case Log" },
			{ id: "OralRadiology", name: "Radiology Log" },
		],
	};

	return [...(specialtyOptions[specialty] || []), ...commonOptions];
};

const academicOptions = [
	{ id: "AcademicLog", name: "Academic Log" },
	{ id: "PublicationLog", name: "Publication Log" },
	{ id: "AdminWorkLog", name: "Admin Work Log" },
];

const CreateMenuList = () => {
	const [selectedLogButton, setSelectedLogButton] = useState("");
	const [showActionsheet, setShowActionsheet] = useState(false);
	const isFocused = useIsFocused();
	const navigation = useNavigation();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const toggleCreateMenu = () => {
		setShowActionsheet(!showActionsheet);
		setSelectedLogButton("");
	};

	const handleOptionSelect = (optionId) => {
		if (optionId === "Academic") {
			setSelectedLogButton(optionId);
		} else if (["AcademicLog", "PublicationLog", "AdminWorkLog"].includes(optionId)) {
			setSelectedLogButton(optionId);
		} else if (optionId === "CustomLog") {
			setSelectedLogButton(optionId);
		} else if (optionId.startsWith("custom_")) {
			setSelectedLogButton(optionId);
		} else {
			setSelectedLogButton(optionId);
		}
	};

	useEffect(() => {
		const fetchThesisLogData = async () => {
			try {
				const fetchThesisLogData = store.fetchThesisLogByUser(appStoreInstance.UserName);
				setQuery(fetchThesisLogData);
				await fetchThesisLogData;
			} catch (error) {
				console.log(error);
			}
		};

		if (isFocused) {
			fetchThesisLogData();
		}
	}, [isFocused]);

	const [customLogs, setCustomLogs] = useState([]);

	useEffect(() => {
		const fetchCustomLogData = async () => {
			try {
				const fetchCustomLogData = store.fetchCustomLogByUser(appStoreInstance.UserName);
				setQuery(fetchCustomLogData);
				await fetchCustomLogData;
				setCustomLogs(store.CustomLogList);
			} catch (error) {
				console.error("Error fetching custom log:", error);
			}
		};

		if (isFocused) {
			fetchCustomLogData();
		}
	}, [isFocused, store, setQuery]);

	const handleOnSelectCustomLog = (id) => {
		appStoreInstance.setSelectedCustomLogId(id);
		navigation.navigate("Create New Case For Custom", {
			fieldsToGetFrom: "Custom",
			id: id,
			fromHome: true,
		});
	};

	const handleProceedForEntryForThesisLogButton = () => {
		if (store.ThesisLogList[0]) {
			navigation.navigate("Create New Case For Thesis", { fieldsToGetFrom: "Thesis", fromHome: true });
		} else if (!store.ThesisLogList[0]) {
			navigation.navigate("Logbook", { screen: "RootLogBook", params: { initialTabIndex: 2 } });
		}
	};

	const handleProceedForEntryForCustomLogButton = () => {
		if (!store.CustomLogList[0]) {
			navigation.navigate("Logbook", { screen: "RootLogBook", params: { initialTabIndex: 3 } });
		}
	};

	const handleOnProceedClick = () => {
		const currentLogButton = selectedLogButton;
		toggleCreateMenu();
		setTimeout(() => {
			if (currentLogButton.startsWith("custom_")) {
				const customId = currentLogButton.split("_")[1];
				handleOnSelectCustomLog(customId);
				return;
			}

			switch (currentLogButton) {
				case "AcademicLog":
					navigation.navigate("Home", { screen: "AcademicLogFormScreen", params: { AcademicLogToGet: "AcademicLog" } });
					break;
				case "PublicationLog":
					navigation.navigate("Home", { screen: "AcademicLogFormScreen", params: { AcademicLogToGet: "PublicationLog" } });
					break;
				case "AdminWorkLog":
					navigation.navigate("Home", { screen: "AcademicLogFormScreen", params: { AcademicLogToGet: "AdminWorkLog" } });
					break;
				case "ThesisLog":
					handleProceedForEntryForThesisLogButton();
					break;
				case "CustomLog":
					handleProceedForEntryForCustomLogButton();
					break;
				case "CaseLog":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "CaseLog" } });
					break;
				case "ChronicPainLog":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "ChronicPain" } });
					break;
				case "CriticalCareCaseLog":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "CriticalCareCaseLog" } });
					break;
				case "OrthopaedicsCaseLog":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthopaedicsCaseLog" } });
					break;
				case "OrthopaedicsProcedureLog":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthopaedicsProcedureLog" } });
					break;
				case "OrthodonticsClinicalCaseLog":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthodonticsClinicalCaseLog" } });
					break;
				case "OrthodonticsPreClinical":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OrthodonticsPreClinical" } });
					break;
				case "OralMedicineCaseLog":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OralMedicineCaseLog" } });
					break;
				case "OralRadiology":
					navigation.navigate("Home", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "OralRadiology" } });
					break;
				default:
					console.log("Key not recognized");
					break;
			}
		}, 500);
	};

	const renderOptions = () => {
		const options = getCreateMenuOptions(AppStore.UserBroadSpecialty);
		return options.map((option) => (
			<React.Fragment key={option.id}>
				<Radio width={"$100%"} value={option.id} onPress={() => handleOptionSelect(option.id)}>
					<RadioIndicator bg='#E6E3DB' borderColor='#E6E3DB' mr='$2'>
						<RadioIcon as={CircleIcon} />
					</RadioIndicator>
					<RadioLabel>{option.name}</RadioLabel>
				</Radio>
				{option.id === "Academic" && (selectedLogButton === "Academic" || academicOptions.some((ao) => ao.id === selectedLogButton)) && (
					<VStack w='$full' alignItems='flex-start' space='lg' ml='$6'>
						{academicOptions.map((academicOption) => (
							<Radio key={academicOption.id} width={"$100%"} value={academicOption.id} onPress={() => handleOptionSelect(academicOption.id)}>
								<RadioIndicator bg='#E6E3DB' borderColor='#E6E3DB' mr='$2'>
									<RadioIcon as={CircleIcon} />
								</RadioIndicator>
								<RadioLabel>{academicOption.name}</RadioLabel>
							</Radio>
						))}
					</VStack>
				)}
				{option.id === "CustomLog" && customLogs.length > 0 && (selectedLogButton === "CustomLog" || selectedLogButton.startsWith("custom_")) && (
					<VStack w='$full' alignItems='flex-start' space='lg' ml='$6'>
						{customLogs.map((customLog) => (
							<Radio
								key={`custom_${customLog.id}`}
								width={"$100%"}
								value={`custom_${customLog.id}`}
								onPress={() => handleOptionSelect(`custom_${customLog.id}`)}>
								<RadioIndicator bg='#E6E3DB' borderColor='#E6E3DB' mr='$2'>
									<RadioIcon as={CircleIcon} />
								</RadioIndicator>
								<RadioLabel>{customLog.customName}</RadioLabel>
							</Radio>
						))}
					</VStack>
				)}
			</React.Fragment>
		));
	};

	return (
		<Pressable w='$full' h='$full' justifyContent='center' alignItems='center' onPress={toggleCreateMenu}>
			<Box>
				<Button onPress={toggleCreateMenu} borderRadius={"$full"} borderWidth={1.5} borderColor='#367B71' bg='transparent' width={48} height={48}>
					<ButtonText color='#367B71' w='$400%' pt='$1.5' fontSize={32} fontFamily='Jua' textAlign='center'>
						+
					</ButtonText>
				</Button>
				<Actionsheet isOpen={showActionsheet} onClose={toggleCreateMenu} zIndex={999}>
					<ActionsheetBackdrop />
					<ActionsheetContent alignItems='flex-start' h='$72' zIndex={999}>
						<VStack width={"$100%"} space='lg' mt='$2'>
							<Text pl='$3' color='#000000' size='lg' fontFamily='Inter_Bold'>
								Choose type of log entry
							</Text>
							<Divider />
							<RadioGroup pl='$3' width={"$100%"} value={selectedLogButton}>
								<VStack w='$full' alignItems='flex-start' space='lg' mb='$2'>
									{renderOptions()}
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
		</Pressable>
	);
};

const CustomTabBar = observer(({ state, descriptors, navigation }) => {
	if (appStoreInstance.IsTabBarVisible === false) return null;
	return (
		<Box
			style={{
				flexDirection: "row",
				height: 60,
				backgroundColor: "#E6E3DB",
				elevation: 0,
				padding: 0,
				gap: -20,
				borderTopWidth: 1,
				borderTopColor: "#97979733",
				display: appStoreInstance.IsTabBarVisible ? "flex" : "none",
			}}>
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
						bg='$yellow'
						onLongPress={onLongPress}
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "space-between",
						}}>
						{route.name !== "Plus" && (
							<Box borderRadius='$full' width='$40%' height='$6%' backgroundColor={isFocused ? "#CC3F0C" : "transparent"}></Box>
						)}
						{route.name === "Plus" ? (
							<CreateMenuList />
						) : (
							<Image width={25} height={25} source={ImageAssets[`${route.name}${isFocused ? "Active" : "Inactive"}`]} alt='Docked-Logo' />
						)}
						<Text fontSize={10} style={{ color: iconColor, paddingBottom: 10 }}>
							{route.name === "Plus" ? "" : route.name}
						</Text>
					</TouchableOpacity>
				);
			})}
		</Box>
	);
});

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
				name='Home'>
				{(props) => <LandingScreenPages {...props} />}
			</Tab.Screen>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='add-circle' size={65} color='#CC3F0C' />,
					headerShown: false,
					tabBarButton: (props) => <CreateMenuList {...props} />,
				}}
				name='Plus'
				component={LandingScreenPages} // dummy component, since it's not used
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name='document-text' size={size} color={color} />,
					headerShown: false,
				}}
				name='Logbook'>
				{(props) => <RootLogScreens {...props} />}
			</Tab.Screen>
			{/* <Tab.Screen
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
			/> */}
		</Tab.Navigator>
	);
};

export default observer(LandingScreen);
