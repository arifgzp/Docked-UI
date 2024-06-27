import { Ionicons } from "@expo/vector-icons";
import { Box, Button, ButtonIcon, Card, HStack, KeyboardAvoidingView, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { format } from "date-fns";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import Loader from "../../../../../components/Loader";
import { useQuery } from "../../../../../models";
import AppStore from "../../../../../stores/AppStore";
import useIsReady from "../../../../../hooks/useIsReady";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { forEach, map, compact } from "lodash";
import { toJS } from "mobx";
import IsReadyLoader from "../../../../../components/IsReadyLoader";
import CaseLogAnaesthesiaConfig from "../../../../../data/SpecialtyConfigs/AnesthesiaConfigs/CaseLogAnaesthesiaConfig";

const CaseLogTab = () => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	//const [cardDetails, setCardDetails] = useState([]);
	const navigation = useNavigation();

	const handleButtonPress = (button, id, caseType) => {
		switch (button) {
			case "CaseLogEditScreen":
				console.log(button, "this is button");
				console.log("this is id", id, "this is caseType", caseType);
				console.log("Navigating to Case Log!!!!!!!!!!");
				navigation.navigate("CaseLogEditScreen", { id: id, caseType: caseType });
				console.log("Navigating to Case Log");
				break;

			default:
				console.log("Navigating to Case Log7");
		}
	};

	const getTreeNodeLabel = (key, configData) => {
		//console.log("key", key);
		//console.log("configData", configData);
		let label = key;
		forEach(configData, (config) => {
			if (config.id == key) {
				label = config.name;
				//console.log("!!!!! Match Found ", label);
				return false;
			} else if (config.children) {
				label = getTreeNodeLabel(key, config.children);
				if (label != key) {
					return false;
				}
			}
		});
		//console.log("Finakl LAbel >>>>> ", label);
		return label;
	};

	const getTypeOfAnesthesia = (caseData) => {
		//console.log("caseData.typeOfAnaesthesia", caseData.typeOfAnaesthesia);
		const typeOfAnaesthesiaConfig = CaseLogAnaesthesiaConfig["typeOfAnaesthesia"];
		if (caseData.typeOfAnaesthesia && caseData.typeOfAnaesthesia.length > 0) {
			const selectedNodes = compact(
				map(caseData.typeOfAnaesthesia, (toaSelector) => {
					const treeLevels = toaSelector.split("/");
					if (treeLevels.length === 2) {
						return getTreeNodeLabel(treeLevels[1], typeOfAnaesthesiaConfig);
					}
				})
			);
			return selectedNodes.join(", ");
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchAnaesthesiaData = async () => {
					const fetchQuery1 = store.fetchAnaesthesiaCaseLogByUser(AppStore.UserName);
					setQuery(fetchQuery1);
					await fetchQuery1;

					const fetchQuery2 = store.fetchAnaesthesiaChronicPainLogByUser(AppStore.UserName);
					setQuery(fetchQuery2);
					await fetchQuery2;

					const fetchQuery3 = store.fetchAnaesthesiaCriticalCareCaseLogByUser(AppStore.UserName);
					setQuery(fetchQuery3);
					await fetchQuery3;
				};

				switch (AppStore.UserBroadSpecialty) {
					case "Orthodontics":
						const fetchQuery5 = store.fetchOrthodonticsClinicalCaseLogByUser(AppStore.UserName);
						setQuery(fetchQuery5);
						await fetchQuery5;
						break;

					case "Orthopaedics":
						const fetchQuery4 = store.fetchOrthopaedicsCaseLogByUser(AppStore.UserName);
						setQuery(fetchQuery4);
						await fetchQuery4;
						break;

					default:
						await fetchAnaesthesiaData();
				}
			} catch (error) {
				console.log(error);
			}
		};
		if (isFocused) {
			fetchData();
		}
	}, [AppStore.UserBroadSpecialty, isFocused]);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	//console.log("!!!!!!!!!!!!!!!!! BP >>>>>>>>>>>>> ", AppStore.UserBroadSpecialty);
	let cardDetails = [];
	//const cardDetails = [...store.AnaesthesiaCaseLogList, ...store.AnaesthesiaChronicPainLogList, ...store.AnaesthesiaCriticalCareCaseLogList];
	switch (AppStore.UserBroadSpecialty) {
		case "Orthodontics":
			cardDetails.push(...store.OrthodonticsClinicalCaseLogList);
			break;

		case "Orthopaedics":
			cardDetails.push(...store.OrthopaedicsCaseLogList);
			break;

		default:
			cardDetails.push(...store.AnaesthesiaCaseLogList, ...store.AnaesthesiaChronicPainLogList, ...store.AnaesthesiaCriticalCareCaseLogList);
			break;
	}
	console.log("!!!!!!!!!!!!!!!!! BP >>>>>>>>>>>>> ", cardDetails.length);

	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width={"$100%"}>
					<VStack width={"$100%"} alignItems='center' paddingTop={10} paddingBottom={"$15%"} p='$2'>
						{cardDetails.length > 0 ? (
							cardDetails.map((card, index) => {
								//console.log("cardDetails", card);
								return (
									<Card key={card.id || index} variant='filled' m='$3' width={"$100%"} borderRadius='$3xl' p='$0'>
										<VStack width={"$100%"} space='xs' pb='$3'>
											<HStack pt='$3' pl='$5' pr='$3' justifyContent='space-between' alignItems='center'>
												<HStack space='sm'>
													<Text size='sm'>Date of procedure:</Text>
													<Text size='sm' fontFamily='Inter_Bold'>
														{format(new Date(card?.date), "do MMM yyyy")}
													</Text>
												</HStack>
												<HStack space='sm' alignItems='center'>
													<Button width={30} height={30} borderRadius={"$full"} size='xs'>
														<ButtonIcon as={Ionicons} name='share-social-outline' color='#FFFFFF' />
													</Button>
													<Button
														onPress={handleButtonPress.bind(null, "CaseLogEditScreen", card?.id, card?.caseType)}
														width={30}
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
											{AppStore.UserBroadSpecialty === "Anaesthesiology" && (
												<>
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
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='sm'>Type of Anesthesia:</Text>
														<Text flex={1} size='sm' fontFamily='Inter_Bold'>
															{getTypeOfAnesthesia(card)}
														</Text>
													</HStack>
												</>
											)}
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
