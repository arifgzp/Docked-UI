import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CaseLogTab from "./CaseLogTab";
import CaseLogReadScreen from "../CaseLogReadScreen";

export default function CaseLogMainTab() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName='CaseLogTab'
			screenOptions={{
				animation: "slide_from_right", // Define the animation type
				gestureEnabled: false,
			}}>
			<Stack.Screen
				name='CaseLogTab'
				component={CaseLogTab}
				options={{
					title: "Logbook",
					headerShown: false,
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
		</Stack.Navigator>
	);
}
