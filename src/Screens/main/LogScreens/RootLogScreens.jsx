import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogProfilePage from "./LogProfile";
import { Tabs, TabsList, TabsTrigger, TabsText, TabsContents, TabsContent, Text } from "@gluestack-ui/themed";
import LogTabsMainScreen from "./CaseLogsScreens/TabScreens/LogTabsMainScreen";
import CaseLogFormScreen from "./CaseLogsScreens/CaseLogFormScreen";
import CaseLogEditScreen from "./CaseLogsScreens/CaseLogEditScreen";
import LogProfileReadPage from "./LogProfileReadPage";
import { Button } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import AcademicLogFormScreen from "./Academic Log/AcademicLogFormScreen";
import ThesisLogFormScreen from "./ThesisLogs/ThesisLogFormScreen";
import CustomLogFormScreen from "./Custom Log/CustomLogFormScreen";
import CreateNewCase from "./CreateNewCase";
import { useIsFocused } from "@react-navigation/native";
import { useQuery } from "../../../models";
import { useEffect } from "react";
import { observer } from "mobx-react";
import appStoreInstance from "../../../stores/AppStore";

const EditProfileButon = ({ navigation }) => {
	return (
		<Button onPress={() => navigation.navigate("LogProfilePage", { caseLogFormToGet: "" })} size='sm' variant='primary'>
			<ButtonText fontSize={12} px={15}>
				Edit
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

const RootLogScreens = ({ navigation }) => {
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
			initialRouteName='RootLogBook'
			screenOptions={{
				gestureEnabled: false,
			}}>
			<Stack.Screen
				name='RootLogBook'
				component={LogTabsMainScreen}
				options={{
					title: "Logbook",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='CaseLogEditScreen'
				component={CaseLogEditScreen}
				options={{
					title: "Case Log Entry",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
				}}
			/>
			<Stack.Screen
				name='LogProfilePage'
				component={LogProfilePage}
				options={{
					title: "Log Profile",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
				}}
			/>
			<Stack.Screen
				name='LogProfileReadPage'
				component={LogProfileReadPage}
				options={{
					title: "Log Profile",
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
				name='AcademicLogEditScreen'
				component={AcademicLogFormScreen}
				options={{
					title: "Academic",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
				}}
			/>
			<Stack.Screen
				name='ThesisLogFormScreenEdit'
				component={ThesisLogFormScreen}
				options={{
					title: "Thesis Log",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
				}}
			/>
			<Stack.Screen
				name='CustomLogFormScreenEdit'
				component={CustomLogFormScreen}
				options={{
					title: "Custom Log",
					headerShown: true,
					headerStyle: { backgroundColor: "#FFF" },
					headerTitleStyle: {
						color: "#979797",
						fontSize: 16, // You can adjust the font size as needed
					},
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
			<Stack.Screen
				name='Edit A Case'
				component={CreateNewCase}
				options={{
					title: "Edit Case",
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

export default observer(RootLogScreens);
