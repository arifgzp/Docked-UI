import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenPage from "./HomePage/HomeScreen";
import ProfilePage from "./ProfilePage";
import { Button, ButtonText } from "@gluestack-ui/themed";
import ProfilePageEdit from "./ProfilePageEdit";
import UserFeedback from "./UserFeedback";

const EditProfileButon = ({ navigation }) => {
	return (
		<Button onPress={() => navigation.navigate("ProfilePageEdit")} size='sm' variant='primary'>
			<ButtonText fontSize={12} px={15}>
				Edit
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
		</Stack.Navigator>
	);
}
