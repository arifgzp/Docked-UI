import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogProfilePage from "./LogProfile";
import { Tabs, TabsList, TabsTrigger, TabsText, TabsContents, TabsContent, Text } from "@gluestack-ui/themed";
import LogTabsMainScreen from "./CaseLogsScreens/TabScreens/LogTabsMainScreen";
import CaseLogFormScreen from "./CaseLogsScreens/CaseLogFormScreen";
import CaseLogEditScreen from "./CaseLogsScreens/CaseLogEditScreen";
import LogProfileReadPage from "./LogProfileReadPage";
import { Button } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";

const EditProfileButon = ({ navigation }) => {
	return (
		<Button onPress={() => navigation.navigate("LogProfilePage", { caseLogFormToGet: "" })} size='sm' variant='primary'>
			<ButtonText fontSize={12} px={15}>
				Edit
			</ButtonText>
		</Button>
	);
};

export default function RootLogScreens({ navigation }) {
	const Stack = createNativeStackNavigator();
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
		</Stack.Navigator>
	);
}
