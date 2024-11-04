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
	Pressable,
	ScrollView,
	Text,
	VStack,
} from "@gluestack-ui/themed";
import { format, subDays, subMonths, subYears, isWithinInterval } from "date-fns";
import DatePicker from "react-native-date-picker";
import { observer } from "mobx-react";
import React, { useCallback, useMemo, useState, useRef, useEffect } from "react";
import { Platform, FlatList } from "react-native";
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
import {
	Select,
	SelectTrigger,
	SelectInput,
	SelectIcon,
	SelectPortal,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicatorWrapper,
	SelectDragIndicator,
	SelectItem,
} from "@gluestack-ui/themed";
import { ChevronDownIcon } from "@gluestack-ui/themed";

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
	const [selectedFilter, setSelectedFilter] = useState("");
	const [selectedDateFilter, setSelectedDateFilter] = useState("");
	const [isFromDatePickerOpen, setIsFromDatePickerOpen] = useState(false);
	const [isToDatePickerOpen, setIsToDatePickerOpen] = useState(false);
	const [fromDate, setFromDate] = useState(new Date());
	const [toDate, setToDate] = useState(new Date());
	const [isCustomDateRangeActive, setIsCustomDateRangeActive] = useState(false);

	const getFilteredKeys = () => {
		switch (AppStore.UserBroadSpecialty) {
			case "OralMedicineAndRadiology":
				return ["Oral Medicine", "Oral Radiology"];
			case "Anaesthesiology":
				return ["Case Log", "Chronic Pain", "Critical Care"];
			case "Orthopaedics":
				return ["Case Log", "Procedure Log"];
			case "Orthodontics":
				return ["Clinical Case Log", "Pre-Clinical"];
			default:
				return [];
		}
	};

	const filterOptions = ["All", ...getFilteredKeys()];
	const dateFilterOptions = ["Any time", "Older than a week", "Older than a month", "Older than six months", "Older than a year", "Custom range"];

	const getDateThreshold = useCallback((filter) => {
		const now = new Date();
		switch (filter) {
			case "Older than a week":
				return subDays(now, 7);
			case "Older than a month":
				return subMonths(now, 1);
			case "Older than six months":
				return subMonths(now, 6);
			case "Older than a year":
				return subYears(now, 1);
			default:
				return null;
		}
	}, []);

	const isWithinCustomDateRange = useCallback(
		(cardDate) => {
			const date = new Date(cardDate);
			return date >= fromDate && date <= toDate;
		},
		[fromDate, toDate]
	);

	const handleFromDateConfirm = useCallback((date) => {
		setFromDate(date);
		setIsFromDatePickerOpen(false);
		setIsToDatePickerOpen(true);
	}, []);

	const handleToDateConfirm = useCallback((date) => {
		setToDate(date);
		setIsToDatePickerOpen(false);
		setIsCustomDateRangeActive(true);
		setSelectedDateFilter("Custom range");
	}, []);

	const handleButtonPress = useCallback(
		(button, id, caseType) => {
			if (button === "CaseLogEditScreen") {
				navigation.navigate("CaseLogEditScreen", { id, caseType });
			}
		},
		[navigation]
	);

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

	const handleDeleteCaseLog = useCallback((card) => {
		setShowModal(true);
		setCaseLogToBeDeleted(card);
	}, []);

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

	const getConfigForCard = (card) => {
		switch (card.__typename) {
			case "OrthopaedicsProcedureLog":
				return OrthopaedicsProcedureLogCardViewConfig;
			case "OrthopaedicsCaseLog":
				return OrthopaedicsCaseLogCardViewConfig;
			case "AnaesthesiaCaseLog":
				return AnesthesiaCaseLogCardViewConfig;
			case "AnaesthesiaChronicPainLog":
				return AnesthesiaChronicPainCardLogViewConfig;
			case "AnaesthesiaCriticalCareCaseLog":
				return AnesthesiaCriticalCareCardLogViewConfig;
			case "OralRadiology":
				return OralRadiologyCardLogViewConfig;
			case "OralMedicineAndRadiologyCaseLog":
				return OralMedicineCaseLogCardLogViewConfig;
			default:
				return [];
		}
	};

	const renderField = (item, card, index) => {
		let value = card[item.value];

		if (item.isDate) {
			value = format(new Date(value), "dd/MM/yyyy");
		} else if (item.multipleSelectValues) {
			value = getMultipleSelectSingleLayerValues(card, item);
		} else if (item.parentFollowedByFirstChild) {
			value = getParentFollowedByFirstChild(card, item);
		} else if (item.preciseValuesForOralMedicineCaseLogProcedure) {
			value = getPreciseValuesForOralMedicineCaseLogProcedure(card, item);
		} else if (item.preciseValuesForOralRadiology) {
			value = getpreciseValuesForOralRadiology(card, item);
		} else if (item.onlySpecificOptionsForAnesthesiaCaseLogCard) {
			value = getonlySpecificOptionsValuesForAnesthesiaCaseLogCard(card, item);
		} else if (item.firstParentOptionToDisplay) {
			value = firstParentOptionToDisplay(card, item);
		} else if (item.parentofSelectedValues) {
			value = getParentofSelectedValues(card, item);
		}

		if (index === 0) {
			return (
				<Text
					key={item.label}
					fontSize={item.isDate ? 12 : 16}
					fontWeight={item.isDate ? "bold" : "bold"}
					color={item.isDate ? "#979797" : "#0F0F10"}>
					{value || "--"}
				</Text>
			);
		} else if (index > 3) {
			return (
				<HStack key={item.label} space='sm' justifyContent='space-between'>
					<Text size='xs' color='#666'>
						{item.label}
					</Text>
					<Text textAlign='right' flex={-1} size='xs' fontWeight='bold'>
						{value || "--"} {item.valueUnits && item.valueUnits} {item.secondValue && card[item.secondValue]}{" "}
						{item.secondValueUnits && item.secondValueUnits}
					</Text>
				</HStack>
			);
		}
	};

	const LogbookCard = ({ card, config, onEdit, onDelete }) => (
		<Card bg='#E6E3DB' elevation={4} p='$0' py='$2' variant='filled' width='$96%' borderRadius='$3xl' borderWidth={1}>
			<VStack space='xs'>
				<VStack>
					<HStack px='$4' justifyContent='space-between' alignItems='center'>
						{config.slice(0, 1).map((item, index) => renderField(item, card, index))}
						<HStack alignItems='center' justifyContent='flex-end' space='lg'>
							<Button bg='transparent' size='md' className='rounded-full p-3.5' px='$0' onPress={() => onDelete(card)} borderRadius='$full'>
								<ButtonIcon as={Ionicons} name='trash' color='#CC3F0C' />
							</Button>
							<Button
								bg='transparent'
								size='md'
								className='rounded-full p-3.5'
								px='$0'
								onPress={() => onEdit("CaseLogEditScreen", card?.id, card?.caseType)}
								borderRadius='$full'>
								<ButtonIcon as={Ionicons} name='create' color='#367B71' />
							</Button>
						</HStack>
					</HStack>
					<HStack px='$4' justifyContent='space-between' alignItems='center'>
						<HStack>
							{config.slice(1, 3).map((item, index) => {
								return (
									<Text
										key={item.label}
										fontSize={item.isDate ? 12 : 14}
										fontWeight={item.isDate ? "bold" : "bold"}
										color={item.isDate ? "#979797" : "#0F0F10"}>
										{item.isAge ? (card[item.value] ? `${card[item.value]}yrs / ` : "-- / ") : card[item.value] ? card[item.value] : "--"}
									</Text>
								);
							})}
						</HStack>
						{config.slice(3, 4).map((item, index) =>
							card[item.value] ? (
								<Box key={index} bg='#CC3F0C' px='$2' py='$1'>
									<Text fontFamily='Inter_Bold' fontSize={10} color='#FFF'>
										{card[item.value]}
									</Text>
								</Box>
							) : (
								<Box key={index}></Box>
							)
						)}
					</HStack>
				</VStack>
				<Box height={5} bg='rgba(151, 151, 151, 0.17)' width='$100%'></Box>
				<Box pb='$1' px='$4'>
					{config.slice(2).map((item, index) => renderField(item, card, index + 2))}
				</Box>
			</VStack>
		</Card>
	);

	const MemoizedLogbookCard = React.memo(LogbookCard);

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

	const filteredCardDetails = useMemo(() => {
		return cardDetails.filter((card) => {
			const passesLogTypeFilter =
				selectedFilter === "" ||
				selectedFilter === "All" ||
				(() => {
					switch (AppStore.UserBroadSpecialty) {
						case "OralMedicineAndRadiology":
							return selectedFilter === "Oral Medicine" ? card.caseType === "OralMedicineCaseLog" : card.caseType === "OralRadiology";
						case "Anaesthesiology":
							return selectedFilter === "Case Log"
								? card.caseType === "CaseLog"
								: selectedFilter === "Chronic Pain"
								? card.caseType === "ChronicPain"
								: card.caseType === "CriticalCareCaseLog";
						case "Orthopaedics":
							return selectedFilter === "Case Log" ? card.caseType === "OrthopaedicsCaseLog" : card.caseType === "OrthopaedicsProcedureLog";
						case "Orthodontics":
							return selectedFilter === "Clinical Case Log"
								? card.caseType === "OrthodonticsClinicalCaseLog"
								: card.caseType === "OrthodonticsPreClinical";
						default:
							return true;
					}
				})();

			const passesDateFilter =
				selectedDateFilter === "" ||
				selectedDateFilter === "Any time" ||
				(selectedDateFilter === "Custom range" && isCustomDateRangeActive
					? isWithinInterval(new Date(card.date), { start: fromDate, end: toDate })
					: new Date(card.date) < getDateThreshold(selectedDateFilter));

			return passesLogTypeFilter && passesDateFilter;
		});
	}, [cardDetails, selectedFilter, selectedDateFilter, isCustomDateRangeActive, fromDate, toDate, AppStore.UserBroadSpecialty]);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width={"$100%"} keyboardShouldPersistTaps='handled'>
					<VStack pl='$4' px='$1' space='md' py='$4'>
						<HStack alignItems='center' justifyContent='space-between'>
							<Text color='#979797' fontWeight='bold'>
								Summary
							</Text>
						</HStack>
						<HStack space='xs'>
							<Select rounded={"$full"} borderWidth={1} w='$35%' selectedValue={selectedFilter} onValueChange={(value) => setSelectedFilter(value)}>
								<SelectTrigger variant='rounded' size='sm'>
									<SelectInput fontSize={12} fontFamily='Inter' color='#367B71' placeholder='Log Type' />
									<SelectIcon mr='$3'>
										<ChevronDownIcon color='#367B71' />
									</SelectIcon>
								</SelectTrigger>
								<SelectPortal>
									<SelectBackdrop />
									<SelectContent>
										<SelectDragIndicatorWrapper>
											<SelectDragIndicator />
										</SelectDragIndicatorWrapper>
										{filterOptions.map((option) => (
											<SelectItem key={option} label={option} value={option} />
										))}
									</SelectContent>
								</SelectPortal>
							</Select>
							<Select
								rounded={"$full"}
								borderWidth={1}
								w='$35%'
								selectedValue={selectedDateFilter}
								onValueChange={(value) => {
									setSelectedDateFilter(value);
									if (value === "Custom range") {
										setIsFromDatePickerOpen(true);
										setIsCustomDateRangeActive(false);
									} else {
										setIsCustomDateRangeActive(false);
									}
								}}>
								<SelectTrigger variant='rounded' size='sm'>
									<SelectInput fontSize={12} fontFamily='Inter' color='#367B71' placeholder='Date' />
									<SelectIcon mr='$3'>
										<ChevronDownIcon color='#367B71' />
									</SelectIcon>
								</SelectTrigger>
								<SelectPortal>
									<SelectBackdrop />
									<SelectContent>
										<SelectDragIndicatorWrapper>
											<SelectDragIndicator />
										</SelectDragIndicatorWrapper>
										{dateFilterOptions.map((option) => (
											<SelectItem key={option} label={option} value={option} />
										))}
									</SelectContent>
								</SelectPortal>
							</Select>
						</HStack>
						{isCustomDateRangeActive && (
							<Text fontSize={12} color='#367B71'>
								{`${format(fromDate, "dd/MM/yyyy")} - ${format(toDate, "dd/MM/yyyy")}`}
							</Text>
						)}
					</VStack>
					<VStack space='sm' width='$100%' alignItems='center'>
						{filteredCardDetails.length > 0 ? (
							filteredCardDetails.map((card) => {
								return (
									<HStack key={card.id} width='$100%' alignItems='center'>
										<Box w='$50%' position='absolute' height='$60%' bg='#367B71'></Box>
										<Box pl='$4' width='$100%'>
											<LogbookCard card={card} config={getConfigForCard(card)} onEdit={handleButtonPress} onDelete={handleDeleteCaseLog} />
										</Box>
									</HStack>
								);
							})
						) : (
							<Box justifyContent='center' alignItems='center'>
								<Text>No entries found</Text>
							</Box>
						)}
					</VStack>
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
				</ScrollView>
			</Box>
			<DatePicker
				modal
				open={isFromDatePickerOpen}
				date={fromDate}
				onConfirm={handleFromDateConfirm}
				onCancel={() => setIsFromDatePickerOpen(false)}
				mode='date'
				title='Select From Date'
				theme='light'
				dividerColor='#367B71'
			/>
			<DatePicker
				modal
				open={isToDatePickerOpen}
				date={toDate}
				onConfirm={handleToDateConfirm}
				onCancel={() => setIsToDatePickerOpen(false)}
				mode='date'
				title='Select To Date'
				theme='light'
				dividerColor='#367B71'
			/>
		</Loader>
	);
};

export default observer(CaseLogTab);
