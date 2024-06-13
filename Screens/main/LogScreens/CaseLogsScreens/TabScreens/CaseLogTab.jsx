import { ButtonIcon, CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView, Card } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
	StatusBar,
	Input,
	HStack,
	VStack,
	FormControlLabel,
	FormControl,
	FormControlLabelText,
	InputField,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "../../../../../src/models";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, CircleX, Scroll } from "lucide-react-native";
import Loader from "../../../../../components/Loader";
import { ScrollView } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { format } from "date-fns";

const CaseLogTab = ({ navigation }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const logEntries = ["Case Log - Entry 1", "Case Log - Entry 2", "Case Log - Entry 3", "Case Log - Entry 4"];
	const [cardDetails, setCardDetails] = useState([]);

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
				console.log("data for anesthesia case log", data.queryAnaesthesiaCaseLog);
				setCardDetails(data.queryAnaesthesiaCaseLog);
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
					<ScrollView width={"$100%"}>
						<VStack width={"$100%"} alignItems='center' paddingTop={10} paddingBottom={"$15%"} p='$2'>
							{cardDetails.length > 0 ? (
								cardDetails.map((card, index) => (
									<Card
										key={card.id || index}
										onPress={() => navigation.navigate("CaseLogReadScreen", { id: card.id })}
										variant='filled'
										m='$3'
										width={"$100%"}
										borderRadius='$3xl'
										p='$0'>
										<VStack width={"$100%"} space='xs'>
											<HStack pt='$3' pl='$5' pr='$3' justifyContent='space-between' alignItems='center'>
												<HStack space='sm'>
													<Text size='sm'>Date of procedure:</Text>
													<Text size='sm' fontFamily='Inter_Bold'>
														{format(new Date(card?.date), "do MMM yyyy")}
													</Text>
												</HStack>
												<HStack space='sm' alignItems='center'>
													<Button width={15} height={30} borderRadius={"$full"} size='xs'>
														<ButtonIcon as={Ionicons} name='share-social-outline' color='#FFFFFF' />
													</Button>
													<Button
														onPress={handleButtonPress.bind(null, "CaseLogReadScreen", card?.id)}
														width={20}
														height={30}
														borderRadius={"$full"}
														size='xs'>
														<ButtonIcon as={Ionicons} name='create-outline' color='#FFFFFF' />
													</Button>
												</HStack>
											</HStack>
											<HStack pt='$2' pb='$2' space='3xl' backgroundColor='#DDDDDD'>
												<HStack pl='$5' space='sm'>
													<Text size='sm'>Patient Age:</Text>
													<Text size='sm' fontFamily='Inter_Bold'>
														{card.patientAge}
													</Text>
												</HStack>
												<HStack space='sm'>
													<Text size='sm'>Sex:</Text>
													<Text size='sm' fontFamily='Inter_Bold'>
														{card.patientSex}
													</Text>
												</HStack>
											</HStack>
											<HStack pr='$3' pl='$5' space='sm'>
												<Text size='sm'>Diagnosis:</Text>
												<Text size='sm' fontFamily='Inter_Bold'>
													{card.diagnosis}
												</Text>
											</HStack>
											<HStack pr='$3' pl='$5' space='sm'>
												<Text size='sm'>Surgery Name:</Text>
												<Text size='sm' fontFamily='Inter_Bold'>
													{card.surgicalProcedure}
												</Text>
											</HStack>
											<HStack pr='$3' pl='$5' space='sm'>
												<Text size='sm'>Case Type:</Text>
												<Text size='sm' fontFamily='Inter_Bold'>
													{card.typeOfSurgery}
												</Text>
											</HStack>
											<HStack pr='$3' pl='$5' space='sm'>
												<Text size='sm'>ASA Grade:</Text>
												<Text size='sm' fontFamily='Inter_Bold'>
													{card.asaGrade}
												</Text>
											</HStack>
											<HStack pb='$3' pr='$3' pl='$5' space='sm'>
												<Text size='sm'>Type of Anesthesia:</Text>
												<Text size='sm' fontFamily='Inter_Bold'>
													Regional/Local
												</Text>
											</HStack>
										</VStack>
									</Card>
								))
							) : (
								<Box justifyContent='center' alignItems='center'>
									<Text>No Cases found</Text>
								</Box>
							)}
						</VStack>
					</ScrollView>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(CaseLogTab);
