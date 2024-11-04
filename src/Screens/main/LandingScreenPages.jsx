import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenPage from "./HomePage/HomeScreen";
import ProfilePage from "./ProfilePage";
import { Button, ButtonText } from "@gluestack-ui/themed";
import ProfilePageEdit from "./ProfilePageEdit";
import UserFeedback from "./UserFeedback";
import ThesisLogFormScreen from "./LogScreens/ThesisLogs/ThesisLogFormScreen";
import AcademicLogFormScreen from "./LogScreens/Academic Log/AcademicLogFormScreen";
import LogProfileEditForFormStack from "./LogScreens/LogProfileEditForFormStack";
import CaseLogFormScreen from "./LogScreens/CaseLogsScreens/CaseLogFormScreen";
import CustomLogFormScreen from "./LogScreens/Custom Log/CustomLogFormScreen";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import appStoreInstance from "../../stores/AppStore";
import CreateNewCase from "./LogScreens/CreateNewCase";
import { useEffect } from "react";
import { useQuery } from "../../models";
import { Text } from "@gluestack-ui/themed";
import { observer } from "mobx-react";

const EditProfileButon = ({ navigation }) => {
	return (
		<Button onPress={() => navigation.navigate("ProfilePageEdit")} size='sm' variant='primary'>
			<ButtonText fontSize={12} px={15}>
				Edit
			</ButtonText>
		</Button>
	);
};

const LogProfileButton = () => {
	const navigation = useNavigation();

	const navigateToLogProfile = () => {
		navigation.navigate("LogProfileEditForFormStack", { caseLogFormToGet: "" });
		appStoreInstance.setButtonPressed(true);
		console.log("appStoreInstance.ButtonPressed from create log screen immediately", appStoreInstance.ButtonPressed);
	};

	return (
		<Button onPress={navigateToLogProfile} size='sm' variant='primary'>
			<ButtonText pr={2} pl={2}>
				Log Profile
			</ButtonText>
		</Button>
	);
};

const formatCaseNumber = (number) => {
	if (number < 10) {
		return `00${number}`;
	} else if (number < 100) {
		return `0${number}`;
	}
	return number.toString();
};

const getCaseNumber = (total) => {
	return formatCaseNumber(total + 1);
};

const LandingScreenPages = ({ navigation }) => {
	const Stack = createNativeStackNavigator();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchThesisLog = store.fetchThesisCaseByUser(appStoreInstance.UserName);
				setQuery(fetchThesisLog);
				await fetchThesisLog;
			} catch (error) {
				console.log(error);
			}
		};

		if (isFocused) {
			fetchData();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchCustomCaseData = async () => {
			try {
				const fetchCustomCase = store.fetchCustomCaseByUser(appStoreInstance.UserName);
				setQuery(fetchCustomCase);
				await fetchCustomCase;
			} catch (error) {
				console.error("Error fetching custom case:", error);
			}
		};

		if (isFocused) {
			fetchCustomCaseData();
		}
	}, [isFocused, store, setQuery]);

	const getCaseNumberForThesisLogCases = () => {
		const totalCases = store.ThesisCaseList?.length ?? 0;
		const caseNumber = getCaseNumber(totalCases);
		return <Text>{`Add a New Case - ${caseNumber}`}</Text>;
	};

	const getCaseNumberForCustomLogCases = (customLogId) => {
		console.log("customLogIdcustomLogId", customLogId);
		// Filter cases that belong to this specific custom log template
		const casesForThisTemplate = store.CustomCaseList?.filter((item) => item.customLogIdReference === customLogId) ?? [];
		const totalCases = casesForThisTemplate.length;
		const caseNumber = getCaseNumber(totalCases);
		return <Text>{`Add a New Case - ${caseNumber}`}</Text>;
	};

	return (
		<Stack.Navigator
			initialRouteName='Dashboard'
			screenOptions={{
				gestureEnabled: false,
			}}>
			<Stack.Screen
				name='Dashboard'
				component={HomeScreenPage}
				options={{
					title: "Dashboard",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='ProfilePage'
				component={ProfilePage}
				options={{
					title: "Your Profile",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
					headerRight: () => <EditProfileButon navigation={navigation} />,
				}}
			/>
			<Stack.Screen
				name='ProfilePageEdit'
				component={ProfilePageEdit}
				options={{
					title: "Your Profile",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
				}}
			/>
			<Stack.Screen
				name='UserFeedback'
				component={UserFeedback}
				options={{
					title: "Send Feedback",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
				}}
			/>
			<Stack.Screen
				name='CaseLogFormScreen'
				component={CaseLogFormScreen}
				options={{
					title: "Case Log Entry",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
					unmountOnBlur: true,
					headerRight: () => <LogProfileButton />,
				}}
			/>
			<Stack.Screen
				name='LogProfileEditForFormStack'
				component={LogProfileEditForFormStack}
				options={{
					title: "Log Profile",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
					unmountOnBlur: true,
				}}
			/>
			<Stack.Screen
				name='AcademicLogFormScreen'
				component={AcademicLogFormScreen}
				options={{
					title: "Academic Log",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
					unmountOnBlur: true,
				}}
			/>
			<Stack.Screen
				name='ThesisLogFormScreen'
				component={ThesisLogFormScreen}
				options={{
					title: "Thesis Log",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
					unmountOnBlur: true,
				}}
			/>
			<Stack.Screen
				name='CustomLogFormScreen'
				component={CustomLogFormScreen}
				options={{
					title: "Custom Log",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
					unmountOnBlur: true,
				}}
			/>
			<Stack.Screen
				name='Create New Case For Custom'
				component={CreateNewCase}
				options={{
					headerTitle: () => getCaseNumberForCustomLogCases(appStoreInstance.SelectedCustomLogId),
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
				}}
			/>
			<Stack.Screen
				name='Create New Case For Thesis'
				component={CreateNewCase}
				options={{
					headerTitle: () => getCaseNumberForThesisLogCases(),
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
				}}
			/>
		</Stack.Navigator>
	);
};

export default observer(LandingScreenPages);
