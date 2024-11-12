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
	Center,
	Divider,
	Textarea,
	TextareaInput,
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
import appStoreInstance from "../../../../../stores/AppStore";

const CaseLogTab = () => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	//const [cardDetails, setCardDetails] = useState([]);
	const navigation = useNavigation();
	const [showModal, setShowModal] = useState(false);
	const [showApprovalModal, setShowApprovalModal] = useState(false);
	const [showApproveModal, setShowApproveModal] = useState(false);
	const [showRejectModal, setShowRejectModal] = useState(false);
	const [rejectReason, setRejectReason] = useState("");
	const [cardToHandle, setCardToHandle] = useState(null);
	const [selectedCard, setSelectedCard] = useState(null);
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

	const handleEditButtonPress = useCallback(
		(button, id, logType, logTypeID) => {
			if (button === "CaseLogEditScreen") {
				navigation.navigate("CaseLogEditScreen", { id, logType, logTypeID });
			}
		},
		[navigation]
	);

	const getTreeNodeLabel = (key, configData) => {
		let label = key;
		forEach(configData, (config) => {
			if (config.id == key) {
				label = config.name;
				return false;
			} else if (config.children) {
				label = getTreeNodeLabel(key, config.children);
				if (label != key) {
					return false;
				}
			}
		});
		return label;
	};

	useEffect(() => {
		const fetchCaseLogData = async () => {
			store.clearCaseLogList();
			const fetchCaseLogQuery = store.fetchCaseLogsByUser(AppStore.UserName);
			setQuery(fetchCaseLogQuery);
			await fetchCaseLogQuery;
		};

		if (isFocused) {
			fetchCaseLogData();
		}
	}, []);

	const handleDeleteCaseLog = useCallback((card) => {
		setShowModal(true);
		console.log("now this is the that is going to be deleted,", card);
		setCaseLogToBeDeleted(card);
	}, []);

	const handleOnConfirmDeleteCaseLog = async () => {
		if (caseLogToBeDeleted.caseLogStatus !== "CREATED") {
			return;
		}

		switch (caseLogToBeDeleted.logType) {
			case "CaseLog":
				logTypeToBeRemoved = "anaesthesiaCaseLog";
				logTypeToBeDeleted = "deleteAnaesthesiaCaseLog";
				break;
			case "ChronicPain":
				logTypeToBeRemoved = "anaesthesiaChronicPainLog";
				logTypeToBeDeleted = "deleteAnaesthesiaChronicPainLog";
				break;
			case "CriticalCareCaseLog":
				logTypeToBeRemoved = "anaesthesiaCriticalCareCaseLog";
				logTypeToBeDeleted = "deleteAnaesthesiaCriticalCareCaseLog";
				break;
			case "OrthopaedicsCaseLog":
				logTypeToBeRemoved = "orthopaedicsCaseLog";
				logTypeToBeDeleted = "deleteOrthopaedicsCaseLog";
				break;
			case "OrthopaedicsProcedureLog":
				logTypeToBeRemoved = "orthopaedicsProcedureLog";
				logTypeToBeDeleted = "deleteOrthopaedicsProcedureLog";
				break;
			case "OrthodonticsClinicalCaseLog":
				logTypeToBeRemoved = "orthodonticsClinicalCaseLog";
				logTypeToBeDeleted = "deleteOrthodonticsClinicalCaseLog";
				break;
			case "OrthodonticsPreClinical":
				logTypeToBeRemoved = "orthodonticsPreClinical";
				logTypeToBeDeleted = "deleteOrthodonticsPreClinical";
				break;
			case "OralMedicineCaseLog":
				logTypeToBeRemoved = "oralMedicineCaseLog";
				logTypeToBeDeleted = "deleteOralMedicineCaseLog";
				break;
			case "OralRadiology":
				logTypeToBeRemoved = "oralRadiology";
				logTypeToBeDeleted = "deleteOralRadiology";
				break;
			default:
				throw new Error("Invalid case log type");
		}

		try {
			const removeLogTypeQuery = store.updateCaseLog(caseLogToBeDeleted.id, {
				remove: { [logTypeToBeRemoved]: { id: caseLogToBeDeleted[logTypeToBeRemoved].id } },
			});
			setQuery(removeLogTypeQuery);
			const removeLogTypeQueryData = await removeLogTypeQuery;
			if (removeLogTypeQueryData) {
				const deleteLogTypeQuery = store[logTypeToBeDeleted]([logTypeToBeRemoved].id);
				setQuery(deleteLogTypeQuery);
				const deleteLogTypeQueryData = await deleteLogTypeQuery;
				if (deleteLogTypeQueryData) {
					const updateUserQuery = store.updateUser(AppStore.UserId, { remove: { caseLogs: { id: caseLogToBeDeleted.id } } });
					setQuery(updateUserQuery);
					const data = await updateUserQuery;
					if (data) {
						const rootStoreAPIName = `deleteCaseLog`;
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
				}
			}
		} catch (error) {
			console.log(error);
		} finally {
			setShowModal(false);
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

	const getConfigForCard = (card) => {
		if (card.anaesthesiaCaseLog) {
			return AnesthesiaCaseLogCardViewConfig;
		}

		if (card.orthopaedicsProcedureLog) {
			return OrthopaedicsProcedureLogCardViewConfig;
		}

		if (card.orthopaedicsCaseLog) {
			return OrthopaedicsCaseLogCardViewConfig;
		}

		if (card.anaesthesiaChronicPainLog) {
			return AnesthesiaChronicPainCardLogViewConfig;
		}

		if (card.anaesthesiaCriticalCareCaseLog) {
			return AnesthesiaCriticalCareCardLogViewConfig;
		}

		if (card.oralRadiology) {
			return OralRadiologyCardLogViewConfig;
		}

		if (card.oralMedicineCaseLog) {
			return OralMedicineCaseLogCardLogViewConfig;
		}

		return [];
	};

	const getCard = (card) => {
		if (card.anaesthesiaCaseLog) {
			return card.anaesthesiaCaseLog;
		}

		if (card.orthopaedicsProcedureLog) {
			return card.orthopaedicsProcedureLog;
		}

		if (card.orthopaedicsCaseLog) {
			return card.orthopaedicsCaseLog;
		}

		if (card.anaesthesiaChronicPainLog) {
			return card.anaesthesiaChronicPainLog;
		}

		if (card.anaesthesiaCriticalCareCaseLog) {
			return card.anaesthesiaCriticalCareCaseLog;
		}

		if (card.oralRadiology) {
			return card.oralRadiology;
		}

		if (card.oralMedicineCaseLog) {
			return card.oralMedicineCaseLog;
		}

		return [];
	};

	const handleSubmitForApproval = (card) => {
		setSelectedCard(card);
		setShowApprovalModal(true);
	};

	const confirmSubmitForApproval = async () => {
		try {
			if (selectedCard.approver) {
				const query = store.updateUserCaseLog(selectedCard.approver.id, {
					set: { caseLogs: { id: selectedCard.id } },
				});
				setQuery(query);
				const data = await query;
				if (data) {
					const caseQuery = store.updateCaseLog(selectedCard.id, { set: { caseLogStatus: "PENDING" } });
					setQuery(caseQuery);
					await caseQuery;
				}
			}
		} catch (err) {
			console.log(err);
		} finally {
			setShowApprovalModal(false);
			setSelectedCard(null);
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
	const getRandomColor = (name) => {
		// Google Meet-like colors
		const colors = [
			"#1A73E8", // Blue
			"#EA4335", // Red
			"#34A853", // Green
			"#FBBC05", // Yellow
			"#8AB4F8", // Light blue
			"#F28B82", // Light red
			"#CCFF90", // Light green
			"#FDD663", // Light yellow
			"#4285F4", // Google blue
			"#DB4437", // Google red
			"#0F9D58", // Google green
			"#F4B400", // Google yellow
		];

		// Use the name string to generate a consistent index
		const charSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
		return colors[charSum % colors.length];
	};

	const onApprove = async (card) => {
		setCardToHandle(card);
		setShowApproveModal(true);
	};

	const onReject = (card) => {
		setCardToHandle(card);
		setShowRejectModal(true);
	};

	const handleConfirmApproval = async () => {
		try {
			const approveQuery = store.updateCaseLog(cardToHandle.id, {
				set: { caseLogStatus: "APPROVED" },
			});
			setQuery(approveQuery);
			await approveQuery;
		} catch (err) {
			console.log(err);
		} finally {
			setShowApproveModal(false);
			setCardToHandle(null);
		}
	};

	const handleConfirmReject = async () => {
		try {
			const rejectQuery = store.updateCaseLog(cardToHandle.id, {
				set: {
					caseLogStatus: "REJECTED",
					rejectionMessage: rejectReason,
				},
			});
			setQuery(rejectQuery);
			await rejectQuery;
		} catch (err) {
			console.log(err);
		} finally {
			setShowRejectModal(false);
			setCardToHandle(null);
			setRejectReason("");
		}
	};

	const LogbookCard = ({ mainCard, card, config, onEdit, onDelete }) => {
		return (
			<Card
				bg='#E6E3DB'
				elevation={4}
				p='$0'
				pt='$2'
				pb={!card.rejectionMessage && "$2"}
				variant='filled'
				width='$96%'
				borderRadius='$3xl'
				borderWidth={1}>
				<VStack space='xs'>
					<VStack>
						{card.createdBy && appStoreInstance.UserRole === "FACULTY" && (
							<Box>
								<HStack pb='$2' px='$4' justifyContent='space-between' alignItems='center'>
									<Center w='$8' h='$8' borderRadius='$full' borderWidth={1} borderColor='#000' bg={getRandomColor(card.createdBy.name)}>
										<Text color='white' fontSize='$lg' fontWeight='$bold'>
											{card.createdBy.name.charAt(0).toUpperCase()}
										</Text>
									</Center>
									<Text pl='$3' flex={1} fontSize={12} color='#000' fontWeight='$bold'>
										Dr. {card.createdBy.name}
									</Text>

									{card.caseLogStatus === "PENDING" && appStoreInstance.UserRole === "FACULTY" && (
										<HStack alignItems='center' justifyContent='flex-end' space='lg'>
											<Button bg='transparent' size='md' className='rounded-full p-3.5' px='$0' onPress={() => onReject(card)} borderRadius='$full'>
												<ButtonIcon size={35} as={Ionicons} name='close-circle-outline' color='#CC3F0C' />
											</Button>
											<Button bg='transparent' size='md' className='rounded-full p-3.5' px='$0' onPress={() => onApprove(card)} borderRadius='$full'>
												<ButtonIcon size={35} as={Ionicons} name='checkmark-circle-outline' color='#367B71' />
											</Button>
										</HStack>
									)}
								</HStack>
								<Divider bg='#000' />
							</Box>
						)}
						<HStack pt={card.caseLogStatus === "PENDING" ? "$2" : "$0"} px='$4' justifyContent='space-between' alignItems='center'>
							{config.slice(0, 1).map((item, index) => renderField(item, mainCard, index))}
							{card.caseLogStatus !== "PENDING" && card.createdBy.id === appStoreInstance.UserId && (
								<HStack alignItems='center' justifyContent='flex-end' space='lg'>
									<Button bg='transparent' size='md' className='rounded-full p-3.5' px='$0' onPress={() => onDelete(card)} borderRadius='$full'>
										<ButtonIcon as={Ionicons} name='trash' color='#CC3F0C' />
									</Button>
									<Button
										bg='transparent'
										size='md'
										className='rounded-full p-3.5'
										px='$0'
										onPress={() => onEdit("CaseLogEditScreen", card?.id, card?.logType, mainCard.id)}
										borderRadius='$full'>
										<ButtonIcon as={Ionicons} name='create' color='#367B71' />
									</Button>
								</HStack>
							)}
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
						{config.slice(2).map((item, index) => renderField(item, mainCard, index + 2))}
					</Box>
					{card.complete && card.caseLogStatus === "CREATED" && card.approver && (
						<Box px='$4'>
							<Button
								onPress={() => handleSubmitForApproval(card)}
								backgroundColor='#transparent'
								borderColor='#367B71'
								borderWidth={1}
								borderRadius='$full'
								size='xs'>
								<ButtonText color='#000'>Submit For approval</ButtonText>
							</Button>
						</Box>
					)}
					{card.rejectionMessage && (
						<VStack space='lg' p='$4' borderBottomLeftRadius='$3xl' borderBottomRightRadius='$3xl' bg='rgba(204, 63, 12, 0.09)'>
							<Text color='#CC3F0C' fontSize={12} fontFamily='Inter_Medium'>
								{card.rejectionMessage}
							</Text>
							{appStoreInstance.UserRole === "RESIDENTS" && (
								<Box px='$4'>
									<Button
										onPress={() => {
											/* */
										}}
										backgroundColor='#transparent'
										borderColor='#367B71'
										borderWidth={1}
										borderRadius='$full'
										size='xs'>
										<ButtonText color='#000'>Review Again</ButtonText>
									</Button>
								</Box>
							)}
						</VStack>
					)}
				</VStack>
			</Card>
		);
	};

	let cardDetails = [];
	cardDetails.push(...store.CaseLogsList);

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
						{cardDetails.length > 0 ? (
							cardDetails.map((card) => {
								return (
									<HStack key={card.id} width='$100%' alignItems='center'>
										<Box w='$50%' position='absolute' height='$60%' bg={card.caseLogStatus === "APPROVED" ? "#367B71" : "#CC3F0C"}></Box>
										<Box pl='$4' width='$100%'>
											<LogbookCard
												mainCard={getCard(card)}
												card={card}
												config={getConfigForCard(card)}
												onEdit={handleEditButtonPress}
												onDelete={handleDeleteCaseLog}
											/>
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
					{/* Delete Modal */}
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
									Delete Case log entry
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
										<ButtonText>Cancel</ButtonText>
									</Button>
									<Button size='sm' variant='primary' bg='#CC3F0C' onPress={handleOnConfirmDeleteCaseLog}>
										<ButtonText>Delete</ButtonText>
									</Button>
								</HStack>
							</ModalFooter>
						</ModalContent>
					</Modal>

					{/* Approval Modal */}
					<Modal
						isOpen={showApprovalModal}
						onClose={() => {
							setShowApprovalModal(false);
							setSelectedCard(null);
						}}
						finalFocusRef={ref}
						size='md'>
						<ModalBackdrop />
						<ModalContent>
							<ModalHeader>
								<Heading size='md'>Are you sure you want to send for Approval?</Heading>
								<ModalCloseButton>
									<Icon as={CloseIcon} size='md' />
								</ModalCloseButton>
							</ModalHeader>
							<ModalBody>
								<Text size='sm'>Once sent for approval, the editing for this case log will be stopped.</Text>
							</ModalBody>
							<ModalFooter>
								<HStack w='$50%' justifyContent='space-between'>
									<Button
										size='sm'
										variant='secondary'
										onPress={() => {
											setShowApprovalModal(false);
											setSelectedCard(null);
										}}>
										<ButtonText>No</ButtonText>
									</Button>
									<Button size='sm' variant='primary' bg='#367B71' onPress={confirmSubmitForApproval}>
										<ButtonText>Yes</ButtonText>
									</Button>
								</HStack>
							</ModalFooter>
						</ModalContent>
					</Modal>
					{/* Approve Modal */}
					<Modal
						isOpen={showApproveModal}
						onClose={() => {
							setShowApproveModal(false);
							setCardToHandle(null);
						}}
						finalFocusRef={ref}
						size='md'>
						<ModalBackdrop />
						<ModalContent>
							<ModalHeader>
								<Heading color='#367B71' size='md'>
									Approve Case Log
								</Heading>
								<ModalCloseButton>
									<Icon as={CloseIcon} size='md' />
								</ModalCloseButton>
							</ModalHeader>
							<ModalBody>
								<Text size='sm'>Are you sure you want to approve this case log entry?</Text>
							</ModalBody>
							<ModalFooter>
								<HStack w='$50%' justifyContent='space-between'>
									<Button
										size='sm'
										variant='secondary'
										onPress={() => {
											setShowApproveModal(false);
											setCardToHandle(null);
										}}>
										<ButtonText>Cancel</ButtonText>
									</Button>
									<Button size='sm' variant='primary' bg='#367B71' onPress={handleConfirmApproval}>
										<ButtonText>Approve</ButtonText>
									</Button>
								</HStack>
							</ModalFooter>
						</ModalContent>
					</Modal>

					{/* Reject Modal */}
					<Modal
						isOpen={showRejectModal}
						onClose={() => {
							setShowRejectModal(false);
							setCardToHandle(null);
							setRejectReason("");
						}}
						finalFocusRef={ref}
						size='md'>
						<ModalBackdrop />
						<ModalContent>
							<ModalHeader>
								<Heading color='#CC3F0C' size='md'>
									Reject Case Log
								</Heading>
								<ModalCloseButton>
									<Icon as={CloseIcon} size='md' />
								</ModalCloseButton>
							</ModalHeader>
							<ModalBody>
								<VStack space='md'>
									<Text size='sm'>Please provide a reason for rejection:</Text>
									<Textarea size='md' w='$full'>
										<TextareaInput placeholder='Enter rejection reason...' value={rejectReason} onChangeText={setRejectReason} />
									</Textarea>
								</VStack>
							</ModalBody>
							<ModalFooter>
								<HStack w='$50%' justifyContent='space-between'>
									<Button
										size='sm'
										variant='secondary'
										onPress={() => {
											setShowRejectModal(false);
											setCardToHandle(null);
											setRejectReason("");
										}}>
										<ButtonText>Cancel</ButtonText>
									</Button>
									<Button size='sm' variant='primary' bg='#CC3F0C' onPress={handleConfirmReject} disabled={!rejectReason.trim()}>
										<ButtonText>Reject</ButtonText>
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
