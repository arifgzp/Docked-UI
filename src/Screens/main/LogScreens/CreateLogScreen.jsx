import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CaseLogFormScreen from "./CaseLogsScreens/CaseLogFormScreen";

export default function CreateLogScreen({ navigation }) {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName='CaseLogFormScreen'
			screenOptions={{
				gestureEnabled: false,
			}}>
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
				}}
			/>
		</Stack.Navigator>
	);
}
