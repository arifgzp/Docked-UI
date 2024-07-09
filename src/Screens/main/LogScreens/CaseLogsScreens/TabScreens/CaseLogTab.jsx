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
import { forEach, map, compact, orderBy } from "lodash";
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
	cardDetails = orderBy(cardDetails, ["updatedOn"], ["desc"]);
	console.log("!!!!!!!!!!!!!!!!! BP >>>>>>>>>>>>> ", cardDetails.length);

	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width={"$100%"} keyboardShouldPersistTaps='handled'>
					<HStack p='$2' pt='$5' palignItems='center' justifyContent='space-between'>
						<Text color='#979797' bold>
							Summary
						</Text>
					</HStack>
					<VStack width={"$100%"} alignItems='center' paddingBottom={"$15%"}>
						{cardDetails.length > 0 ? (
							cardDetails.map((card, index) => {
								//console.log("cardDetails", card);
								return (
									<Card key={card.id || index} variant='filled' m='$3' width={"$100%"} borderRadius='$3xl' p='$0'>
										<VStack width={"$100%"} space='xs' pb='$3'>
											<HStack width={"$100%"} pt='$3' pl='$5' pr='$1' justifyContent='space-between' alignItems='center'>
												<HStack space='sm'>
													<Text size='xs'>Date of procedure:</Text>
													<Text size='xs' fontFamily='Inter_Bold'>
														{card.date ? format(new Date(card?.date), "d/MM/yyyy") : "--"}
													</Text>
												</HStack>
												<HStack alignItems='center'>
													<Button bg='#transparent' height={30} borderRadius={"$full"} size='xs'>
														<ButtonIcon as={Ionicons} size={20} name='share-social' color='#367B71' />
													</Button>
													<Button
														bg='#transparent'
														onPress={handleButtonPress.bind(null, "CaseLogEditScreen", card?.id, card?.caseType)}
														height={30}
														borderRadius={"$full"}
														size='xs'>
														<ButtonIcon as={Ionicons} size={20} name='create' color='#367B71' />
													</Button>
												</HStack>
											</HStack>
											<HStack pt='$2' pb='$2' space='3xl' backgroundColor='#DDDDDD'>
												<HStack pl='$5' space='sm'>
													<Text size='xs'>Patient Age:</Text>
													<Text size='xs' fontFamily='Inter_Bold'>
														{card.patientAge ? card.patientAge : "--"}
													</Text>
												</HStack>
												<HStack space='sm'>
													<Text size='xs'>Sex:</Text>
													<Text size='xs' fontFamily='Inter_Bold'>
														{card.patientSex ? card.patientSex : "--"}
													</Text>
												</HStack>
											</HStack>
											<HStack pr='$3' pl='$5' space='sm'>
												<Text size='xs'>Diagnosis:</Text>
												<Text size='xs' fontFamily='Inter_Bold'>
													{card.diagnosis ? card.diagnosis : "--"}
												</Text>
											</HStack>
											{AppStore.UserBroadSpecialty === "Anaesthesiology" && (
												<>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Surgery Name:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.surgicalProcedure ? card.surgicalProcedure : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Case Type:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.caseType ? card.caseType : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>ASA Grade:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.asaGrade ? card.asaGrade : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Type of Anesthesia:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getTypeOfAnesthesia(card) ? getTypeOfAnesthesia(card) : "--"}
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
