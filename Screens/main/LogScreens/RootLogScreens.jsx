import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CaseLogFormScreen from "./CaseLogFormScreen";
import MainLogScreen from "./MainLogScreen";

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
					title: "CaseLog",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='CaseLogFormScreen'
				component={CaseLogFormScreen}
				options={{
					title: "CaseLog",
					headerShown: true,
					headerStyle: { backgroundColor: "#E8EEF3" },
					headerTitleAlign: "center",
				}}
			/>
		</Stack.Navigator>
	);
}
