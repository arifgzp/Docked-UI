import { Ionicons } from "@expo/vector-icons";
import { Box, Button, ButtonIcon, Card, HStack, KeyboardAvoidingView, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { format } from "date-fns";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import Loader from "../../../../../components/Loader";
import { useQuery } from "../../../../../src/models";
import AppStore from "../../../../../src/stores/AppStore";
import useIsReady from "../../../../../src/hooks/useIsReady";
import IsReadyLoader from "../../../../../components/IsReadyLoader";
import { useNavigation } from "@react-navigation/native";

const CaseLogTab = () => {
	const isReady = useIsReady();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [cardDetails, setCardDetails] = useState([]);
	const navigation = useNavigation();

	const handleButtonPress = (button, id, caseType) => {
		switch (button) {
			case "CaseLogReadScreen":
				console.log(button, "this is button");
				console.log("this is id", id, "this is caseType", caseType);
				console.log("Navigating to Case Log!!!!!!!!!!");
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
				let cardData = [];
				const fetchAnaesthesiaData = async () => {
					const fetchQuery1 = store.fetchAnaesthesiaCaseLogByUser(AppStore.UserName);
					setQuery(fetchQuery1);
					const data1 = await fetchQuery1;
					const AnaesthesiaCaseLogData = data1.queryUser[0].anaesthesiaCaseLog;

					const fetchQuery2 = store.fetchAnaesthesiaChronicPainLogByUser(AppStore.UserName);
					setQuery(fetchQuery2);
					const data2 = await fetchQuery2;
					const AnaesthesiaChronicPainLogData = data2.queryUser[0].anaesthesiaChronicPainLog;

					const fetchQuery3 = store.fetchAnaesthesiaCriticalCareCaseLogByUser(AppStore.UserName);
					setQuery(fetchQuery3);
					const data3 = await fetchQuery3;
					const AnaesthesiaCriticalCareCaseLogData = data3.queryUser[0].anaesthesiaCriticalCareCaseLog;

					cardData = [...AnaesthesiaCaseLogData, ...AnaesthesiaChronicPainLogData, ...AnaesthesiaCriticalCareCaseLogData];
				};

				switch (AppStore.UserBroadSpecialty) {
					case "Orthodontics":
						const fetchQuery5 = store.fetchOrthodonticsClinicalCaseLogByUser(AppStore.UserName);
						setQuery(fetchQuery5);
						const data5 = await fetchQuery5;
						console.log("data for Orthodontics Clinical Case Log", data5.queryUser[0].orthodonticsClinicalCaseLog);
						cardData = data5.queryUser[0].orthodonticsClinicalCaseLog;
						break;

					case "Orthopaedics":
						const fetchQuery4 = store.fetchOrthopaedicsCaseLogByUser(AppStore.UserName);
						setQuery(fetchQuery4);
						const data4 = await fetchQuery4;
						console.log("data for Orthopaedics case log", data4.queryUser[0].orthopaedicsCaseLog);
						cardData = data4.queryUser[0].orthopaedicsCaseLog;
						break;

					default:
						await fetchAnaesthesiaData();
				}

				setCardDetails(cardData);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [AppStore.UserBroadSpecialty]);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width={"$100%"}>
					<VStack width={"$100%"} alignItems='center' paddingTop={10} paddingBottom={"$15%"} p='$2'>
						{cardDetails.length > 0 ? (
							cardDetails.map((card, index) => {
								console.log("cardDetails", card);
								return (
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
								);
							})
						) : (
							<Box justifyContent='center' alignItems='center'>
								<Text>No Cases found</Text>
							</Box>
						)}
					</VStack>
				</ScrollView>
			</Box>
		</Loader>
	);
};

export default observer(CaseLogTab);
