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
import ChronicPainAnesthesiaCaseLogConfig from "../../../../../data/SpecialtyConfigs/AnesthesiaConfigs/ChronicPainAnesthesiaCaseLogConfig";
import CriticalCareLAnesthesiaCaseLogConfig from "../../../../../data/SpecialtyConfigs/AnesthesiaConfigs/CriticalCareLAnesthesiaCaseLogConfig";
import OrthopeadicsCaseLogConfig from "../../../../../data/SpecialtyConfigs/OrthopaedicsConfigs/OrthopeadicsCaseLogConfig";
import OrthodonticsSpecialClinicalCaseLogConfig from "../../../../../data/SpecialtyConfigs/OrthodonticConfigs/OrthodonticsSpecialClinicalCaseLogConfig";
import OrthopeadicProcedureLogSpecialConfig from "../../../../../data/SpecialtyConfigs/OrthopaedicsConfigs/OrthopeadicProcedureLogSpecialConfig";
import OrthodonticsPreClinicalSpecialConfig from "../../../../../data/SpecialtyConfigs/OrthodonticConfigs/OrthodonticsPreClinicalSpecialConfig";

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
		// console.log("caseData.typeOfAnaesthesia", caseData.typeOfAnaesthesia);
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
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ":"));
			return replacedNodes.join(", ");
		}
	};

	const getAirwayManagement = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const airwayManagementConfig = CaseLogAnaesthesiaConfig["airManagement"];
		if (caseData.airManagement && caseData.airManagement.length > 0) {
			const selectedNodes = compact(
				map(caseData.airManagement, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], airwayManagementConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getDrugs = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const drugsConfig = CaseLogAnaesthesiaConfig["drugs"];
		if (caseData.drugs && caseData.drugs.length > 0) {
			const selectedNodes = compact(
				map(caseData.drugs, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], drugsConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getRegionalTechniques = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const regionalTechniquesConfig = CaseLogAnaesthesiaConfig["regionalTechniques"];
		if (caseData.regionalTechniques && caseData.regionalTechniques.length > 0) {
			const selectedNodes = compact(
				map(caseData.regionalTechniques, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], regionalTechniquesConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getInterventionalProcedures = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const interventionalProceduresConfig = CaseLogAnaesthesiaConfig["interventionalProcedures"];
		if (caseData.interventionalProcedures && caseData.interventionalProcedures.length > 0) {
			const selectedNodes = compact(
				map(caseData.interventionalProcedures, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], interventionalProceduresConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getMonitoring = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const monitoringConfig = CaseLogAnaesthesiaConfig["monitoring"];
		if (caseData.monitoring && caseData.monitoring.length > 0) {
			const selectedNodes = compact(
				map(caseData.monitoring, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], monitoringConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getComplications = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const complicationsConfig = CaseLogAnaesthesiaConfig["complications"];
		if (caseData.complications && caseData.complications.length > 0) {
			const selectedNodes = compact(
				map(caseData.complications, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], complicationsConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getTechnique = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const techniqueConfig = ChronicPainAnesthesiaCaseLogConfig["technique"];
		if (caseData.technique && caseData.technique.length > 0) {
			const selectedNodes = compact(
				map(caseData.technique, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], techniqueConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getMethod = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const methodConfig = ChronicPainAnesthesiaCaseLogConfig["method"];
		if (caseData.method && caseData.method.length > 0) {
			const selectedNodes = compact(
				map(caseData.method, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], methodConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getDrugsUsed = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const drugsUsedConfig = ChronicPainAnesthesiaCaseLogConfig["drugsUsed"];
		if (caseData.drugsUsed && caseData.drugsUsed.length > 0) {
			const selectedNodes = compact(
				map(caseData.drugsUsed, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], drugsUsedConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getIntervention = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const interventionConfig = ChronicPainAnesthesiaCaseLogConfig["intervention"];
		if (caseData.intervention && caseData.intervention.length > 0) {
			const selectedNodes = compact(
				map(caseData.intervention, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], interventionConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getProcedures = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const proceduresConfig = CriticalCareLAnesthesiaCaseLogConfig["procedures"];
		if (caseData.procedures && caseData.procedures.length > 0) {
			const selectedNodes = compact(
				map(caseData.procedures, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], proceduresConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getDiseaseCategory = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const diseaseCategoryConfig = OrthopeadicsCaseLogConfig["diseaseCategory"];
		if (caseData.diseaseCategory && caseData.diseaseCategory.length > 0) {
			const selectedNodes = compact(
				map(caseData.diseaseCategory, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], diseaseCategoryConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getSite = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const siteConfig = OrthopeadicsCaseLogConfig["site"];
		if (caseData.site && caseData.site.length > 0) {
			const selectedNodes = compact(
				map(caseData.site, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], siteConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getJoint = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const jointConfig = OrthopeadicsCaseLogConfig["joint"];
		if (caseData.joint && caseData.joint.length > 0) {
			const selectedNodes = compact(
				map(caseData.joint, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], jointConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getBones = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const bonesConfig = OrthopeadicsCaseLogConfig["bones"];
		if (caseData.bones && caseData.bones.length > 0) {
			const selectedNodes = compact(
				map(caseData.bones, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], bonesConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getOutcomes = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const outcomesConfig = OrthopeadicsCaseLogConfig["outcomes"];
		if (caseData.outcomes && caseData.outcomes.length > 0) {
			const selectedNodes = compact(
				map(caseData.outcomes, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], outcomesConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getTreatmentPlan = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const treatmentPlanConfig = OrthodonticsSpecialClinicalCaseLogConfig["treatmentPlan"];
		if (caseData.treatmentPlan && caseData.treatmentPlan.length > 0) {
			const selectedNodes = compact(
				map(caseData.treatmentPlan, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], treatmentPlanConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getApplianceUsed = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const applianceUsedConfig = OrthodonticsSpecialClinicalCaseLogConfig["applianceUsed"];
		if (caseData.applianceUsed && caseData.applianceUsed.length > 0) {
			const selectedNodes = compact(
				map(caseData.applianceUsed, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], applianceUsedConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getProcedure = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const procedureConfig = OrthopeadicProcedureLogSpecialConfig["procedure"];
		if (caseData.procedure && caseData.procedure.length > 0) {
			const selectedNodes = compact(
				map(caseData.procedure, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], procedureConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getWireBendingRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const wireBendingRecordConfig = OrthodonticsPreClinicalSpecialConfig["wireBendingRecord"];
		if (caseData.wireBendingRecord && caseData.wireBendingRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.wireBendingRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], wireBendingRecordConfig);
				})
			);
			let replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getRoundWireLoopRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const roundWireLoopRecordConfig = OrthodonticsPreClinicalSpecialConfig["roundWireLoopRecord"];
		if (caseData.roundWireLoopRecord && caseData.roundWireLoopRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.roundWireLoopRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], roundWireLoopRecordConfig);
				})
			);
			return selectedNodes.join(", ");
		}
	};

	const getLoopInEdgewiseWireRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const loopInEdgewiseWireRecordConfig = OrthodonticsPreClinicalSpecialConfig["loopInEdgewiseWireRecord"];
		if (caseData.loopInEdgewiseWireRecord && caseData.loopInEdgewiseWireRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.loopInEdgewiseWireRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], loopInEdgewiseWireRecordConfig);
				})
			);
			return selectedNodes.join(", ");
		}
	};

	const getSolderingExerciseRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const solderingExerciseRecordConfig = OrthodonticsPreClinicalSpecialConfig["solderingExerciseRecord"];
		if (caseData.solderingExerciseRecord && caseData.solderingExerciseRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.solderingExerciseRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], solderingExerciseRecordConfig);
				})
			);
			return selectedNodes.join(", ");
		}
	};

	const getCephalometricTracingRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const cephalometricTracingRecordConfig = OrthodonticsPreClinicalSpecialConfig["cephalometricTracingRecord"];
		if (caseData.cephalometricTracingRecord && caseData.cephalometricTracingRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.cephalometricTracingRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], cephalometricTracingRecordConfig);
				})
			);
			return selectedNodes.join(", ");
		}
	};

	const getclaspRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const claspRecordConfig = OrthodonticsPreClinicalSpecialConfig["claspRecord"];
		if (caseData.claspRecord && caseData.claspRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.claspRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], claspRecordConfig);
				})
			);
			return selectedNodes.join(", ");
		}
	};

	const getSpringsRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const springsRecordConfig = OrthodonticsPreClinicalSpecialConfig["springsRecord"];
		if (caseData.springsRecord && caseData.springsRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.springsRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], springsRecordConfig);
				})
			);
			return selectedNodes.join(", ");
		}
	};

	const getCanineRetractorsRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const canineRetractorsRecordConfig = OrthodonticsPreClinicalSpecialConfig["canineRetractorsRecord"];
		if (caseData.canineRetractorsRecord && caseData.canineRetractorsRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.canineRetractorsRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], canineRetractorsRecordConfig);
				})
			);
			return selectedNodes.join(", ");
		}
	};

	const getBowsRecord = (caseData) => {
		// console.log("caseData.airManagement", caseData.airManagement);
		const bowsRecordConfig = OrthodonticsPreClinicalSpecialConfig["bowsRecord"];
		if (caseData.bowsRecord && caseData.bowsRecord.length > 0) {
			const selectedNodes = compact(
				map(caseData.bowsRecord, (toaSelector) => {
					const treeLevels = toaSelector.split("/");

					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], bowsRecordConfig);
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
			cardDetails.push(...store.OrthodonticsClinicalCaseLogList, ...store.OrthodonticsPreClinicalList);
			break;

		case "Orthopaedics":
			cardDetails.push(...store.OrthopaedicsCaseLogList, ...store.OrthopaedicsProcedureLogList);
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
											{AppStore.UserBroadSpecialty === "Orthodontics" && card.caseType === "OrthodonticsPreClinical" ? (
												<></>
											) : (
												<>
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
												</>
											)}

											<HStack pr='$3' pl='$5' space='sm'>
												<Text size='xs'>Conduct:</Text>
												<Text size='xs' fontFamily='Inter_Bold'>
													{card.conduct ? card.conduct : "--"}
												</Text>
											</HStack>
											{AppStore.UserBroadSpecialty === "Anaesthesiology" && card.caseType === "CaseLog" && (
												<>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Surgery:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.surgicalProcedure ? card.surgicalProcedure : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Type of Anesthesia:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getTypeOfAnesthesia(card) ? getTypeOfAnesthesia(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Airway Management:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getAirwayManagement(card) ? getAirwayManagement(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Drugs:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getDrugs(card) ? getDrugs(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Regional Techniques:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getRegionalTechniques(card) ? getRegionalTechniques(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Interventional Procedures:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getInterventionalProcedures(card) ? getInterventionalProcedures(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Monitoring:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getMonitoring(card) ? getMonitoring(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Complications:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getComplications(card) ? getComplications(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Outcome:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{card.outcome ? card.outcome : "--"}
														</Text>
													</HStack>
												</>
											)}
											{AppStore.UserBroadSpecialty === "Anaesthesiology" && card.caseType === "ChronicPain" && (
												<>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Indication:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.indication ? card.indication : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Technique:</Text>
														<Text w='$75%' size='xs' fontFamily='Inter_Bold'>
															{getTechnique(card) ? getTechnique(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Method:</Text>
														<Text w='$75%' size='xs' fontFamily='Inter_Bold'>
															{getMethod(card) ? getMethod(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Drugs Used:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{getDrugsUsed(card) ? getDrugsUsed(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Intervention:</Text>
														<Text w='$75%' size='xs' fontFamily='Inter_Bold'>
															{getIntervention(card) ? getIntervention(card) : "--"}
														</Text>
													</HStack>
												</>
											)}
											{AppStore.UserBroadSpecialty === "Anaesthesiology" && card.caseType === "CriticalCareCaseLog" && (
												<>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Comorbidites:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{card.comorbidites ? card.comorbidites : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Surgical Procedure:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{card.surgicalprocedure ? card.surgicalprocedure : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Procedures:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getProcedures(card) ? getProcedures(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Complication:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{card.complication ? card.complication : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Outcome:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{card.outcome ? card.outcome : "--"}
														</Text>
													</HStack>
												</>
											)}
											{AppStore.UserBroadSpecialty === "Orthodontics" && card.caseType === "OrthodonticsClinicalCaseLog" && (
												<>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Treatment Plan:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getTreatmentPlan(card) ? getTreatmentPlan(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Technique Used:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{card.techniqueUsed ? card.techniqueUsed : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Appliance Used:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getApplianceUsed(card) ? getApplianceUsed(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Outcome:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{card.outcome ? card.outcome : "--"}
														</Text>
													</HStack>
												</>
											)}
											{AppStore.UserBroadSpecialty === "Orthodontics" && card.caseType === "OrthodonticsPreClinical" && (
												<>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Wire Bending Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getWireBendingRecord(card) ? getWireBendingRecord(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Round WireLoop Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getRoundWireLoopRecord(card) ? getRoundWireLoopRecord(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Loop In Edgewise Wire Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getLoopInEdgewiseWireRecord(card) ? getLoopInEdgewiseWireRecord(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Soldering Exercise Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getSolderingExerciseRecord(card) ? getSolderingExerciseRecord(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Cephalometric Tracing Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getCephalometricTracingRecord(card) ? getCephalometricTracingRecord(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Clasp Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getclaspRecord(card) ? getclaspRecord(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Springs Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getSpringsRecord(card) ? getSpringsRecord(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Canine Retractors Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getCanineRetractorsRecord(card) ? getCanineRetractorsRecord(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Bows Record:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getBowsRecord(card) ? getBowsRecord(card) : "--"}
														</Text>
													</HStack>
												</>
											)}
											{AppStore.UserBroadSpecialty === "Orthopaedics" && card.caseType === "OrthopaedicsCaseLog" && (
												<>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Disease Category:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getDiseaseCategory(card) ? getDiseaseCategory(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Site:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getSite(card) ? getSite(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Joint:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getJoint(card) ? getJoint(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Bones:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getBones(card) ? getBones(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Outcomes:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getOutcomes(card) ? getOutcomes(card) : "--"}
														</Text>
													</HStack>
												</>
											)}
											{AppStore.UserBroadSpecialty === "Orthopaedics" && card.caseType === "OrthopaedicsProcedureLog" && (
												<>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Site:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.sites ? card.sites.replace("#V#", ": ") : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Procedure:</Text>
														<Text flex={1} size='xs' fontFamily='Inter_Bold'>
															{getProcedure(card) ? getProcedure(card) : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Procedure Name:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.procedureName ? card.procedureName : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Complication:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.complication ? card.complication : "--"}
														</Text>
													</HStack>
													<HStack pr='$3' pl='$5' space='sm'>
														<Text size='xs'>Outcome:</Text>
														<Text size='xs' fontFamily='Inter_Bold'>
															{card.outcome ? card.outcome : "--"}
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
