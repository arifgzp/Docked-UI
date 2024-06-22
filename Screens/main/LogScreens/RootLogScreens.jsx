import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CaseLogFormScreen from "./CaseLogsScreens/CaseLogFormScreen";
import MainLogScreen from "./MainLogScreen";
import ViewLogsPage from "./ViewLogs";
import ThesisLogsPage from "./ThesisLogs/ThesisLog";
import AcademicLogPage from "./Academic Log/AcademicLog";
import SpecialCaseDetails from "./SpecialCaseLog/SpecialCaseDetails";
import LogProfilePage from "./LogProfile";
import CaseLogReadScreen from "./CaseLogsScreens/CaseLogReadScreen";
import { Tabs, TabsList, TabsTrigger, TabsText, TabsContents, TabsContent, Text } from "@gluestack-ui/themed";
import LogTabsMainScreen from "./CaseLogsScreens/TabScreens/LogTabsMainScreen";
import CaseLogEditScreen from "./CaseLogsScreens/CaseLogOldReadScreen";

export default function RootLogScreens() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName='RootLogBook'
			screenOptions={{
				animation: "slide_from_right", // Define the animation type
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
				name='CaseLogFormScreen'
				component={CaseLogFormScreen}
				options={{
					title: "Case Log",
					headerShown: true,
					headerStyle: { backgroundColor: "#E8EEF3" },
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name='CaseLogReadScreen'
				component={CaseLogReadScreen}
				options={{
					title: "Case Log",
					headerShown: true,
					headerStyle: { backgroundColor: "#E8EEF3" },
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name='LogProfilePage'
				component={LogProfilePage}
				options={{
					title: "Log Profile",
					headerShown: true,
					headerStyle: { backgroundColor: "#E8EEF3" },
					headerTitleAlign: "center",
				}}
			/>
		</Stack.Navigator>
	);
}
