import { ButtonIcon, CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView, Card } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import { Box, Text, StatusBar, Input, HStack, VStack, Button, ButtonText } from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppState, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "../../../../../src/models";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, CircleX, Scroll } from "lucide-react-native";
import Loader from "../../../../../components/Loader";
import { ScrollView } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { format } from "date-fns";
import AppStore from "../../../../../src/stores/AppStore";
const CaseLogTab = ({ navigation }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const logEntries = ["Case Log - Entry 1", "Case Log - Entry 2", "Case Log - Entry 3", "Case Log - Entry 4"];
	const [cardDetails, setCardDetails] = useState([]);

	const handleButtonPress = (button, id, caseType) => {
		switch (button) {
			case "CaseLogReadScreen":
				navigation.navigate("CaseLogReadScreen", { id: id, caseType: caseType });
				console.log("Navigating to Case Log");
				break;

			default:
				console.log("Navigating to Case Log7");
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchQuery = store.fetchAnaesthesiaCaseLogByUser(AppStore.UserName);
				setQuery(fetchQuery);
				const data = await fetchQuery;
				console.log("data for anesthesia case log", data.queryUser[0].anaesthesiaCaseLog);
				const AnaesthesiaCaseLogData = data.queryUser[0].anaesthesiaCaseLog;

				const fetchQuery2 = store.fetchAnaesthesiaChronicPainLogByUser(AppStore.UserName);
				setQuery(fetchQuery2);
				const data2 = await fetchQuery2;
				console.log("data for anesthesia case log", data2.queryUser[0].anaesthesiaChronicPainLog);
				const AnaesthesiaChronicPainLogData = data2.queryUser[0].anaesthesiaChronicPainLog;

				const fetchQuery3 = store.fetchAnaesthesiaCriticalCareCaseLogByUser(AppStore.UserName);
				setQuery(fetchQuery3);
				const data3 = await fetchQuery3;
				console.log("data for anesthesia case log", data3.queryUser[0].anaesthesiaCriticalCareCaseLog);
				const AnaesthesiaCriticalCareCaseLogData = data3.queryUser[0].anaesthesiaCriticalCareCaseLog;

				const fetchQuery4 = store.fetchOrthopaedicsCaseLogByUser(AppStore.UserName);
				setQuery(fetchQuery4);
				const data4 = await fetchQuery4;
				console.log("data for Orthopaedics case log", data4.queryUser[0].orthopaedicsCaseLog);
				const OrthopaedicsCaseLogdata = data4.queryUser[0].orthopaedicsCaseLog;

				const fetchQuery5 = store.fetchOrthodonticsClinicalCaseLogByUser(AppStore.UserName);
				setQuery(fetchQuery5);
				const data5 = await fetchQuery5;
				console.log("data for Orthodontics Clinical Case Log", data5.queryUser[1].orthodonticsClinicalCaseLog);
				const OrthodonticsClinicalCaseLog = data5.queryUser[1].orthodonticsClinicalCaseLog;

				setCardDetails([
					...AnaesthesiaCaseLogData,
					...AnaesthesiaChronicPainLogData,
					...AnaesthesiaCriticalCareCaseLogData,
					...OrthopaedicsCaseLogdata,
					...OrthodonticsClinicalCaseLog,
				]);
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
									<Card key={card.id || index} variant='filled' m='$3' width={"$100%"} borderRadius='$3xl' p='$0'>
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
														onPress={handleButtonPress.bind(null, "CaseLogReadScreen", card?.id, card?.caseType)}
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
													{card.caseType}
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
