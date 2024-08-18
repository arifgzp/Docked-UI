import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CaseLogFormScreen from "./CaseLogsScreens/CaseLogFormScreen";
import { Button, ButtonText } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import LogProfile from "./LogProfile";
import appStoreInstance from "../../../stores/AppStore";
import { observer } from "mobx-react";
import LogProfileEditForFormStack from "./LogProfileEditForFormStack";

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

const CreateLogScreen = ({ navigation }) => {
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
				}}
			/>
		</Stack.Navigator>
	);
};
export default observer(CreateLogScreen);
