import { ButtonIcon, CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import { Box, Center, GluestackUIProvider, Text, StatusBar, Input, HStack, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import { ChevronDown, ChevronRight, CircleX, Scroll } from "lucide-react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { useEffect } from "react";
import { useQuery } from "../../../src/models";
import { format } from "date-fns";
import Loader from "../../../components/Loader";

const ViewLogsPage = ({ navigation }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const logEntries = ["Case Log - Entry 1", "Case Log - Entry 2", "Case Log - Entry 3", "Case Log - Entry 4"];

	const handleButtonPress = (button, id) => {
		switch (button) {
			case "CaseLogReadScreen":
				navigation.navigate("CaseLogReadScreen", { id: id });
				console.log("Navigating to Case Log");
				break;

			default:
				console.log("Navigating to Case Log7");
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchQuery = store.fetchAnaesthesiaCaseLog();
				setQuery(fetchQuery);
				const data = await fetchQuery;
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const anaesthesiaCaseLogList = store.AnaesthesiaCaseLogList || [];

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$primaryBackground' alignItems='center'>
					<ScrollView>
						<VStack width={"$100%"} alignItems='center' paddingTop={20} paddingBottom={"$30%"} space='2xl'>
							{anaesthesiaCaseLogList.map((entry, index) => (
								<Button
									key={index}
									size='3xl'
									onPress={handleButtonPress.bind(null, "CaseLogReadScreen", entry.id)}
									justifyContent='space-between'
									variant='logEntry'
									width={"$100%"}>
									<ButtonText>{`Case Log - Reported on ${format(new Date(entry.date), "MM/dd/yyyy")}`}</ButtonText>
									<ButtonIcon as={ChevronRight} size={20} name='arrow-forward-outline' color='#666666' />
								</Button>
							))}
						</VStack>
					</ScrollView>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(ViewLogsPage);
