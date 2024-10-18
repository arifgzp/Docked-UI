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
import { useNavigation } from "@react-navigation/native";
import appStoreInstance from "../../stores/AppStore";

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

export default function LandingScreenPages({ navigation }) {
	const Stack = createNativeStackNavigator();
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
		</Stack.Navigator>
	);
}
