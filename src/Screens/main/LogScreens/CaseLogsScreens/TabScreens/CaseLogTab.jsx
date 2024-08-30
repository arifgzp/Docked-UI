import { Ionicons } from "@expo/vector-icons";
import {
	BadgeText,
	Box,
	Button,
	ButtonIcon,
	ButtonText,
	Card,
	HStack,
	KeyboardAvoidingView,
	ModalCloseButton,
	ModalContent,
	ScrollView,
	Text,
	VStack,
} from "@gluestack-ui/themed";
import { format } from "date-fns";
import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import Loader from "../../../../../components/Loader";
import { useQuery } from "../../../../../models";
import AppStore from "../../../../../stores/AppStore";
import useIsReady from "../../../../../hooks/useIsReady";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { forEach, map, compact, orderBy, intersection } from "lodash";
import { toJS } from "mobx";
import IsReadyLoader from "../../../../../components/IsReadyLoader";
import CaseLogAnaesthesiaConfig from "../../../../../data/SpecialtyConfigs/AnesthesiaConfigs/CaseLogAnaesthesiaConfig";
import ChronicPainAnesthesiaCaseLogConfig from "../../../../../data/SpecialtyConfigs/AnesthesiaConfigs/ChronicPainAnesthesiaCaseLogConfig";
import CriticalCareLAnesthesiaCaseLogConfig from "../../../../../data/SpecialtyConfigs/AnesthesiaConfigs/CriticalCareLAnesthesiaCaseLogConfig";
import OrthopeadicsCaseLogConfig from "../../../../../data/SpecialtyConfigs/OrthopaedicsConfigs/OrthopeadicsCaseLogConfig";
import OrthodonticsSpecialClinicalCaseLogConfig from "../../../../../data/SpecialtyConfigs/OrthodonticConfigs/OrthodonticsSpecialClinicalCaseLogConfig";
import OrthopeadicProcedureLogSpecialConfig from "../../../../../data/SpecialtyConfigs/OrthopaedicsConfigs/OrthopeadicProcedureLogSpecialConfig";
import OrthodonticsPreClinicalSpecialConfig from "../../../../../data/SpecialtyConfigs/OrthodonticConfigs/OrthodonticsPreClinicalSpecialConfig";
import { Modal } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";
import { ModalBody } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import {
	AnesthesiaCaseLogCardViewConfig,
	AnesthesiaChronicPainCardLogViewConfig,
	AnesthesiaCriticalCareCardLogViewConfig,
	OralMedicineCaseLogCardLogViewConfig,
	OralRadiologyCardLogViewConfig,
	OrthopaedicsCaseLogCardViewConfig,
	OrthopaedicsProcedureLogCardViewConfig,
} from "../../../../../data/CardViewConfig/CaseLogCardViewConfig";
import { Badge } from "@gluestack-ui/themed";
import OralRadiologySpecialConfig from "../../../../../data/SpecialtyConfigs/OralMedicineAndRadiologyConfigs/OralRadiologySpecialConfig";
import OralMedicineAndRadiologySpecialCaseLogConfig from "../../../../../data/SpecialtyConfigs/OralMedicineAndRadiologyConfigs/OralMedicineAndRadiologySpecialCaseLogConfig";

const CaseLogTab = () => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	//const [cardDetails, setCardDetails] = useState([]);
	const navigation = useNavigation();
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [caseLogToBeDeleted, setCaseLogToBeDeleted] = useState();
	const [cardToRender, setCardToRender] = useState();

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

						const fetchQuery7 = store.fetchOrthodonticsPreClinicalByUser(AppStore.UserName);
						setQuery(fetchQuery7);
						await fetchQuery7;
						break;

					case "Orthopaedics":
						const fetchQuery4 = store.fetchOrthopaedicsCaseLogByUser(AppStore.UserName);
						setQuery(fetchQuery4);
						await fetchQuery4;

						const fetchQuery6 = store.fetchOrthopaedicsProcedureLogUser(AppStore.UserName);
						setQuery(fetchQuery6);
						await fetchQuery6;

						break;

					case "OralMedicineAndRadiology":
						const fetchQuery9 = store.fetchOralMedicineAndRadiologyCaseLogByUser(AppStore.UserName);
						setQuery(fetchQuery9);
						await fetchQuery9;

						const fetchQuery8 = store.fetchOralRadiologyByUser(AppStore.UserName);
						setQuery(fetchQuery8);
						await fetchQuery8;

						break;
					default:
						await fetchAnaesthesiaData();
				}
			} catch (error) {
				console.log(error);
			}
		};

		if (isFocused) {
			const timer = setTimeout(() => {
				fetchData();
			}, 500);

			return () => clearTimeout(timer); // Cleanup to prevent memory leaks if component unmounts
		}
	}, [AppStore.UserBroadSpecialty, isFocused]);

	const handleDeleteCaseLog = (card) => {
		console.log("what is this card", card);
		setShowModal(true);
		setCaseLogToBeDeleted(card);
	};

	const handleOnConfirmDeleteCaseLog = async () => {
		try {
			let typename = caseLogToBeDeleted.__typename;
			let modifiedTypename = typename.charAt(0).toLowerCase() + typename.slice(1);
			console.log("modifiedTypename", modifiedTypename);
			setShowModal(false);
			const updateUserQuery = store.updateUser(AppStore.UserId, { remove: { [modifiedTypename]: { id: caseLogToBeDeleted.id } } });
			setQuery(updateUserQuery);
			const data = await updateUserQuery;
			if (data) {
				AppStore.setLogProfile(data.updateUser.user[0].logProfile);
				const rootStoreAPIName = `delete${caseLogToBeDeleted.__typename}`;
				const rootStoreAPIRef = store[rootStoreAPIName];
				if (!rootStoreAPIRef) {
					const message = `please check rootStoreAPIRef. not found in root store trying to find=>message ${rootStoreAPIName}`;
					console.error(message);
					throw new Error(message);
				}
				let query = rootStoreAPIRef([caseLogToBeDeleted.id]);
				if (query) {
					console.log("Query from query delete with caseLogToBeDeleted ID", caseLogToBeDeleted.id, query);
					setQuery(query);

					setCaseLogToBeDeleted(null);
					await query;
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const getOfSurgeryTitle = (caseType) => {
		const surgeryCaseTypes = new Set([
			"OrthopaedicsProcedureLog",
			"CaseLog",
			// Add more case types here as needed
		]);

		return (
			<Text size='xs' fontFamily='Inter_Bold' color='#000'>
				{surgeryCaseTypes.has(caseType) ? " of Surgery:" : ":"}
			</Text>
		);
	};

	const configMapping = {
		OrthopaedicsProcedureLog: OrthopaedicsProcedureLogCardViewConfig,
		OrthopaedicsCaseLog: OrthopaedicsCaseLogCardViewConfig,
		AnaesthesiaCaseLog: AnesthesiaCaseLogCardViewConfig,
		AnaesthesiaChronicPainLog: AnesthesiaChronicPainCardLogViewConfig,
		AnaesthesiaCriticalCareCaseLog: AnesthesiaCriticalCareCardLogViewConfig,
		OralRadiology: OralRadiologyCardLogViewConfig,
		OralMedicineAndRadiologyCaseLog: OralMedicineCaseLogCardLogViewConfig,
	};

	const configMappingForDataStrcuture = {
		OrthopaedicsCaseLog: OrthopeadicsCaseLogConfig,
		OrthopaedicsProcedureLog: OrthopeadicProcedureLogSpecialConfig,
		AnaesthesiaCaseLog: CaseLogAnaesthesiaConfig,
		AnaesthesiaChronicPainLog: ChronicPainAnesthesiaCaseLogConfig,
		AnaesthesiaCriticalCareCaseLog: CriticalCareLAnesthesiaCaseLogConfig,
		OralRadiology: OralRadiologySpecialConfig,
		OralMedicineAndRadiologyCaseLog: OralMedicineAndRadiologySpecialCaseLogConfig,
		// Add more mappings as needed
		// caseTypeName: CorrespondingConfigFile,
	};

	const firstParentOptionToDisplay = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodes = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");

					return getTreeNodeLabel(treeLevels[1], categoryConfig);
				})
			);

			return selectedNodes[0];
		}
	};

	const getonlySpecificOptionsValuesForAnesthesiaCaseLogCard = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodes = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");

					// Check if treeLevels has any item from item.options
					if (intersection(treeLevels, item.options).length > 0) {
						if (treeLevels.includes("NeuraxialBlock")) {
							if (treeLevels.length > 3) {
								return getTreeNodeLabel(treeLevels[treeLevels.length - 2], categoryConfig);
							} else {
								return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
							}
						} else if (treeLevels.includes("LabourAnalgesia")) {
							return getTreeNodeLabel(treeLevels[1], categoryConfig);
						} else {
							return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
						}
					}

					return null;
				})
			);

			const replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			const uniqueReplacedNodes = Array.from(new Set(replacedNodes));

			return uniqueReplacedNodes.join(", ");
		}
	};

	const getParentFollowedByFirstChild = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodesChild = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
				})
			);

			const selectedNodesParent = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					if (treeLevels.length > 2) {
						return getTreeNodeLabel(treeLevels[treeLevels.length - 2], categoryConfig);
					} else {
						return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
					}
				})
			);

			const replacedNodesForChild = selectedNodesChild.map((node) => node.replace("#V#", ": "));
			const replacedNodesForParent = selectedNodesParent.map((node) => node.replace("#V#", ": "));
			const parentFollowedByFirstChildList = replacedNodesForParent.map((parentNode, index) => {
				if (parentNode === replacedNodesForChild[index]) {
					return `${parentNode}`;
				} else {
					return `${parentNode}: ${replacedNodesForChild[index]}`;
				}
			});
			return parentFollowedByFirstChildList.join(", ");
		}
	};

	const getMultipleSelectSingleLayerValues = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodes = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
				})
			);

			const replacedNodes = selectedNodes.map((node) => {
				const removedFirstLayerOfSharpVSharp = node.replace("#V#", ": ");
				if (removedFirstLayerOfSharpVSharp.includes("#V#")) {
					return removedFirstLayerOfSharpVSharp.replace("#V#", " ");
				} else {
					return removedFirstLayerOfSharpVSharp;
				}
			});
			return replacedNodes.join(", ");
		}
	};

	const getPreciseValuesForOralMedicineCaseLogProcedure = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodes = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					if (treeLevels[2] === "type") {
						if (treeLevels.length === 4) {
							return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
						} else {
							return getTreeNodeLabel(treeLevels[treeLevels.length - 2], categoryConfig);
						}
					} else if (treeLevels[2] === "Therapeuticlasertherapy") {
						if (treeLevels[3]) {
							return `Therapeutic Laser Therapy: ${getTreeNodeLabel(treeLevels[3], categoryConfig)};`;
						}
					} else if (treeLevels[2] === "Hemostasis") {
						return getTreeNodeLabel(treeLevels[2], categoryConfig);
					} else if (treeLevels[2] === "SurgicalExcision") {
						if (treeLevels.length > 4) {
							return getTreeNodeLabel(treeLevels[3], categoryConfig);
						}
					} else if (treeLevels[treeLevels.length - 1].includes("IntralesionaltherapyDiagnosis")) {
						const IntralesionaltherapyDiagnosis = getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig).replace("#V#", ": ");

						const IntralesionalTherapy = IntralesionaltherapyDiagnosis.replace("IntralesionaltherapyDiagnosis : ", "");
						return `Intralesional Therapy: ${IntralesionalTherapy}`;
					}
				})
			);
			const replacedNodes = selectedNodes.map((node) => {
				const removedFirstLayerOfSharpVSharp = node.replace("#V#", ": ");
				if (removedFirstLayerOfSharpVSharp.includes("#V#")) {
					return removedFirstLayerOfSharpVSharp.replace("#V#", " ");
				} else {
					return removedFirstLayerOfSharpVSharp;
				}
			});
			const therapeuticItems = replacedNodes.filter((item) => item.startsWith("Therapeutic Laser Therapy"));
			const otherItems = replacedNodes.filter((item) => !item.startsWith("Therapeutic Laser Therapy"));

			// Remove duplicates from both arrays
			const uniqueTherapeuticItems = [...new Set(therapeuticItems)];
			const uniqueOtherItems = [...new Set(otherItems)];

			// Consolidate the "Therapeutic Laser Therapy" items
			const consolidatedTherapeuticItems = uniqueTherapeuticItems
				.map((item) => item.replace("Therapeutic Laser Therapy: ", "").replace(";", ""))
				.join(", ");

			// Combine the consolidated "Therapeutic Laser Therapy" string with the other unique items
			const finalResult = [`Therapeutic Laser Therapy: ${consolidatedTherapeuticItems}`, ...uniqueOtherItems].join(", ");

			return finalResult;
		}
	};

	const getParentofSelectedValues = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodes = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					if (treeLevels.length === 2) {
						return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
					} else {
						return getTreeNodeLabel(treeLevels[treeLevels.length - 2], categoryConfig);
					}
				})
			);

			const replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));

			return replacedNodes.join(", ");
		}
	};

	const getpreciseValuesForOralRadiology = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodes = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					if (treeLevels[1] === "X-Ray") {
						if (treeLevels.length === 4) {
							const levels = `X-Ray – ${getTreeNodeLabel(treeLevels[2], categoryConfig)} – ${getTreeNodeLabel(treeLevels[3], categoryConfig)
								.replace("#V#", " ") // Replace #V# with space
								.replace("ViewOcclusal", "") // Remove ViewOcclusal
								.replace("ViewIOPA", "") // Remove ViewIOPA
								.replace("ViewPanorex|OPG", "") // Remove ViewPanorex|OPG
								.trim()}`;
							return levels;
						} else if (treeLevels.length === 5) {
							return `X-Ray – ${getTreeNodeLabel(treeLevels[2], categoryConfig)} – ${getTreeNodeLabel(treeLevels[4], categoryConfig)} `;
						}
					} else if (treeLevels[2] === "Region" || "region") {
						return getTreeNodeLabel(treeLevels[3], categoryConfig);
					}
				})
			);

			const replacedNodes = selectedNodes.map((node) => {
				const removedFirstLayerOfSharpVSharp = node.replace("#V#", ": ");
				if (removedFirstLayerOfSharpVSharp.includes("#V#")) {
					return removedFirstLayerOfSharpVSharp.replace("#V#", " ");
				} else {
					return removedFirstLayerOfSharpVSharp;
				}
			});
			return replacedNodes.join(", ");
		}
	};

	const formatCaseType = (caseType) => {
		return caseType.replace(/([A-Z])/g, " $1").trim();
	};

	const CardToRender = ({ config, card, index }) => {
		return (
			<Card key={card.id || index} variant='filled' m='$3' width='$100%' borderRadius='$3xl' p='$0'>
				{card.complete === false && <Box width={12} height={12} borderRadius='$full' backgroundColor='#CC3F0C' position='absolute' />}
				<VStack width='$100%' space='xs' pb='$3'>
					<HStack width='$100%' pt='$3' pl='$5' pr='$1' justifyContent='space-between' alignItems='center'>
						<VStack>
							{card.complete === false && (
								<Text size='xs' fontFamily='Inter_Medium' color='#CC3F0C'>
									Incomplete
								</Text>
							)}
							<HStack space='sm'>
								<Text size='xs' fontFamily='Inter_Bold' color='#000'>
									Date{getOfSurgeryTitle(card.caseType)}
								</Text>
								<Text size='xs' fontFamily='Inter_Bold' color='#000'>
									{card.date ? format(new Date(card.date), "d/MM/yyyy") : "--"}
								</Text>
							</HStack>
						</VStack>
						<HStack alignItems='center'>
							<Button bg='transparent' height={30} borderRadius='$full' size='xs' onPress={() => handleDeleteCaseLog(card)} ref={ref}>
								<ButtonIcon as={Ionicons} size={20} name='trash' color='#367B71' />
							</Button>
							<Button
								bg='transparent'
								onPress={() => handleButtonPress("CaseLogEditScreen", card?.id, card?.caseType)}
								height={30}
								borderRadius='$full'
								size='xs'>
								<ButtonIcon as={Ionicons} size={20} name='create' color='#367B71' />
							</Button>
						</HStack>
					</HStack>

					{("patientAge" in card || "patientSex" in card) && (
						<HStack pt='$2' pb='$2' space='3xl' backgroundColor='#DDDDDD'>
							<HStack pl='$5' space='sm'>
								<Text size='xs'>Patient Age:</Text>
								<Text size='xs' fontFamily='Inter_Bold'>
									{card.patientAge ? `${card.patientAge} years` : "--"}
								</Text>
							</HStack>
							<HStack space='sm'>
								<Text size='xs'>Sex:</Text>
								<Text size='xs' fontFamily='Inter_Bold'>
									{card.patientSex || "--"}
								</Text>
							</HStack>
						</HStack>
					)}

					{config.map((item, index) => (
						<HStack key={index} pr='$3' pl='$5' space='sm'>
							<Text size='xs'>{item.label}:</Text>
							{"secondValue" in item ? (
								<Text size='xs' fontFamily='Inter_Bold'>
									{card[item.value] ? (
										<>
											{card[item.value]} {item.valueUnits}
											{card[item.secondValue] ? (
												<>
													{" "}
													{card[item.secondValue]} {item.secondValueUnits}
												</>
											) : (
												" --"
											)}
										</>
									) : (
										"--"
									)}
								</Text>
							) : item.multipleSelectValues ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{getMultipleSelectSingleLayerValues(card, item) || "--"}
								</Text>
							) : item.firstParentOptionToDisplay ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{firstParentOptionToDisplay(card, item) || "--"}
								</Text>
							) : item.onlySpecificOptionsForAnesthesiaCaseLogCard ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{getonlySpecificOptionsValuesForAnesthesiaCaseLogCard(card, item) || "--"}
								</Text>
							) : item.parentFollowedByFirstChild ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{getParentFollowedByFirstChild(card, item) || "--"}
								</Text>
							) : item.parentofSelectedValues ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{getParentofSelectedValues(card, item) || "--"}
								</Text>
							) : item.preciseValuesForOralMedicineCaseLogProcedure ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{getPreciseValuesForOralMedicineCaseLogProcedure(card, item) || "--"}
								</Text>
							) : item.preciseValuesForOralRadiology ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{getpreciseValuesForOralRadiology(card, item) || "--"}
								</Text>
							) : (
								<Text size='xs' fontFamily='Inter_Bold'>
									{card[item.value] || "--"}
								</Text>
							)}
						</HStack>
					))}
					<HStack key={index} pt='$2' pr='$3' pl='$5' space='sm' justifyContent='flex-end'>
						<Badge size='sm' variant='outline' action='muted'>
							<BadgeText>{formatCaseType(card.caseType)}</BadgeText>
						</Badge>
					</HStack>
				</VStack>
			</Card>
		);
	};

	let cardDetails = [];
	switch (AppStore.UserBroadSpecialty) {
		case "Orthodontics":
			cardDetails.push(...store.OrthodonticsClinicalCaseLogList, ...store.OrthodonticsPreClinicalList);
			break;

		case "Orthopaedics":
			cardDetails.push(...store.OrthopaedicsCaseLogList, ...store.OrthopaedicsProcedureLogList);
			break;

		case "OralMedicineAndRadiology":
			cardDetails.push(...store.OralMedicineAndRadiologyCaseLogsList, ...store.OralRadiologiesList);
			break;
		default:
			cardDetails.push(...store.AnaesthesiaCaseLogList, ...store.AnaesthesiaChronicPainLogList, ...store.AnaesthesiaCriticalCareCaseLogList);
			break;
	}
	cardDetails = orderBy(cardDetails, ["updatedOn"], ["desc"]);
	console.log("!!!!!!!!!!!!!!!!! BP >>>>>>>>>>>>> ", cardDetails);

	if (!isReady) {
		return <IsReadyLoader />;
	}

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
								const config = configMapping[card.__typename] || [];
								return <CardToRender config={config} card={card} index={index} />;
							})
						) : (
							<Box justifyContent='center' alignItems='center'>
								<Text>No Cases found</Text>
							</Box>
						)}
						<Modal
							isOpen={showModal}
							onClose={() => {
								setShowModal(false);
							}}
							finalFocusRef={ref}
							size='md'>
							<ModalBackdrop />
							<ModalContent>
								<ModalHeader>
									<Heading color='#CC3F0C' size='md' className='text-typography-950'>
										Delete!!!
									</Heading>
									<ModalCloseButton>
										<Icon
											as={CloseIcon}
											size='md'
											className='stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900'
										/>
									</ModalCloseButton>
								</ModalHeader>
								<ModalBody>
									<Text size='sm' className='text-typography-500'>
										Are you sure you want to delete this case log entry?
									</Text>
								</ModalBody>
								<ModalFooter>
									<HStack w='$50%' justifyContent='space-between'>
										<Button
											size='sm'
											variant='secondary'
											onPress={() => {
												setShowModal(false);
											}}>
											<ButtonText>No</ButtonText>
										</Button>
										<Button size='sm' variant='primary' bg='#CC3F0C' onPress={handleOnConfirmDeleteCaseLog}>
											<ButtonText>Yes</ButtonText>
										</Button>
									</HStack>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</VStack>
				</ScrollView>
			</Box>
		</Loader>
	);
};

export default observer(CaseLogTab);
