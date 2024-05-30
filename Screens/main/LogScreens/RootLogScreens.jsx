import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CaseLogFormScreen from "./CaseLogsScreens/CaseLogFormScreen";
import MainLogScreen from "./MainLogScreen";
import ViewLogsPage from "./ViewLogs";
import ThesisLogsPage from "./ThesisLogs/ThesisLog";
import AcademicLogPage from "./Academic Log/AcademicLog";
import SpecialCaseDetails from "./SpecialCaseLog/SpecialCaseDetails";
import LogProfilePage from "./LogProfile";

export default function RootLogScreens() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName='Logbook'
			screenOptions={{
				animation: "slide_from_right", // Define the animation type
				gestureEnabled: false,
			}}>
			<Stack.Screen
				name='Logbook'
				component={MainLogScreen}
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
				name='ViewLogs'
				component={ViewLogsPage}
				options={{
					title: "View Logs",
					headerShown: true,
					headerStyle: { backgroundColor: "#E8EEF3" },
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name='AcademicLog'
				component={AcademicLogPage}
				options={{
					title: "Academic Logs",
					headerShown: true,
					headerStyle: { backgroundColor: "#E8EEF3" },
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name='ThesisLogs'
				component={ThesisLogsPage}
				options={{
					title: "Thesis Logs",
					headerShown: true,
					headerStyle: { backgroundColor: "#E8EEF3" },
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name='SpecialCaseLogs'
				component={SpecialCaseDetails}
				options={{
					title: "Special Case Logs",
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
