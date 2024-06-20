import { Button, ButtonIcon, ButtonText, HStack, Icon, Text, VStack, useToken } from "@gluestack-ui/themed";

import { Ionicons } from "@expo/vector-icons";
import { Divider, Pressable } from "@gluestack-ui/themed";
import { forEach, map } from "lodash";
import { ChevronRight } from "lucide-react-native";
import { useEffect, useMemo, useRef, useState } from "react";
import TreeView from "../../../../components/TreeView";
import CaseLogAnaesthesiaConfig from "../../../../config/SpecialtyConfigs/AnesthesiaConfigs/CaseLogAnaesthesiaConfig";
import ChronicPainAnesthesiaCaseLogConfig from "../../../../config/SpecialtyConfigs/AnesthesiaConfigs/ChronicPainAnesthesiaCaseLogConfig";
import CriticalCareLAnesthesiaCaseLogConfig from "../../../../config/SpecialtyConfigs/AnesthesiaConfigs/CriticalCareLAnesthesiaCaseLogConfig";
import OrthodonticsSpecialClinicalCaseLogConfig from "../../../../config/SpecialtyConfigs/OrthodonticConfigs/OrthodonticsSpecialClinicalCaseLogConfig";
import OrthopeadicsCaseLogConfig from "../../../../config/SpecialtyConfigs/OrthopaedicsConfigs/OrthopeadicsCaseLogConfig";

const parserForConvertingIntoTreeFormData = (input, key) => {
	const result = {};

	if (input) {
		input?.forEach((item) => {
			const parts = item.split("/");
			const mainKey = parts.slice(0, -1).join("/");
			const value = parts[parts.length - 1];

			if (mainKey in result) {
				if (Array.isArray(result[mainKey])) {
					result[mainKey].push(value);
				} else {
					result[mainKey] = [result[mainKey], value];
				}
			} else {
				result[mainKey] = value;
			}
		});

		// Convert single values to arrays where needed
		for (const key in result) {
			if (key.includes(key) && !Array.isArray(result[key])) {
				result[key] = [result[key]];
			}
		}
	}

	return result;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function flattenObject(obj, prefix = "") {
	let result = [];
	for (const key in obj) {
		if (Array.isArray(obj[key])) {
			obj[key].forEach((value) => {
				if (typeof value === "string") {
					result.push(`${prefix}${key}/${value}`);
				} else {
					result = result.concat(flattenObject(value, `${prefix}${key}/`));
				}
			});
		} else if (typeof obj[key] === "object") {
			result = result.concat(flattenObject(obj[key], `${prefix}${key}/`));
		} else {
			result.push(`${prefix}${key}/${obj[key]}`);
		}
	}
	return result;
}

function parserToConvertTreeFromIntoDataBaseForm(input, type) {
	return { [type]: flattenObject(input) };
}

const getLabel = (key, configData) => {
	console.log("key", key);
	console.log("configData", configData);
	let label = key;
	forEach(configData, (config) => {
		if (config.id == key) {
			label = config.name;
			//console.log("!!!!! Match Found ", label);
			return false;
		} else if (config.children) {
			label = getLabel(key, config.children);
			if (label != key) {
				return false;
			}
		}
	});
	console.log("Finakl LAbel >>>>> ", label);
	return label;
};

const SpecialCaseLogSelectOptions = ({
	navigation,
	control,
	formState,
	caseLogData,
	setValue,
	getValues,
	specialCaseLogsOption,
	refernceToGetSpecialOptions,
}) => {
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [showTreeView, setShowTreeView] = useState(false);
	const [activeTreeSelector, setActiveTreeSelector] = useState("");
	const [activeTreeNode, setActiveTreeNode] = useState("");
	const [activeTreeSelectorValue, setActiveTreeSelectorValue] = useState({});
	const figmaRed = useToken("colors", "figmared");

	const handleOnSave = (selectedNodes) => {
		//console.log("is this the data I am getting from the treeview component?", selectedNodes);
		//console.log("MUDIT+++>", parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
		setValue(activeTreeSelector, parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
		setShowTreeView(false);
		setActiveTreeNode("");
		//setActiveTreeSelectorValue({ ...activeTreeSelectorValue, [activeTreeSelector]: selectedNodes });
		setActiveTreeSelectorValue((prevState) => ({ ...prevState, [activeTreeSelector]: selectedNodes }));
	};

	const handleOnCancel = () => {
		setShowTreeView(false);
		setActiveTreeNode("");
	};

	const handleShowTreeSelector = (activeTreeSelectorId, activeTreeNodeId) => {
		setShowTreeView(true);
		setActiveTreeSelector(activeTreeSelectorId);
		if (activeTreeNodeId) {
			setActiveTreeNode(activeTreeNodeId);
		}
	};

	const getTreeConfigData = (key) => {
		//console.log("getTreeConfigData key", key, " >> refernceToGetSpecialOptions ", refernceToGetSpecialOptions);
		switch (refernceToGetSpecialOptions) {
			case "CaseLog":
				return CaseLogAnaesthesiaConfig[key];
			case "ChronicPain":
				return ChronicPainAnesthesiaCaseLogConfig[key];
			case "CriticalCareCaseLog":
				return CriticalCareLAnesthesiaCaseLogConfig[key];
			case "OrthopaedicsCaseLog":
				return OrthopeadicsCaseLogConfig[key];
			case "OrthodonticsClinicalCaseLog":
				return OrthodonticsSpecialClinicalCaseLogConfig[key];
			default:
				return [];
		}
	};

	const getArrowIcon = (dataValue) => {
		let iconColor = "";
		let iconSize = -1;
		let iconName = "";
		switch (dataValue.colorLevel) {
			case 1:
				iconColor = "#a21515";
				iconSize = 18;
				iconName = "caret-forward";
				break;

			case 2:
				iconColor = "#e37777";
				iconSize = 18;
				iconName = "caret-forward";
				break;

			case 3:
				iconColor = "#a21515";
				iconSize = 14;
				iconName = "play-outline";
				break;

			default:
				iconColor = "#a21515";
				iconSize = 18;
				iconName = "caret-forward";
				break;
		}
		return <Icon as={Ionicons} name={iconName} size={iconSize} color={iconColor} />;
	};

	const buildCompactView = (option) => {
		const treeConfigData = getTreeConfigData(option.id);
		console.log("buildCompactView treeConfigData", treeConfigData);
		const data = activeTreeSelectorValue[option.id] || {};
		return Object.keys(data).reduce((result, key) => {
			const [rootNode, ...restTreeNodes] = key.split("/");
			if (restTreeNodes.length > 0) {
				//"typeOfAnaesthesia/REGIONAL": ["PB", "Neuraxial", "Peripheral "],
				//"typeOfAnaesthesia/DRUGS/INHALATIONAL": ["NO2", "SEVOFLURANE", "Isoflurane"],

				if (restTreeNodes.length === 1) {
					//"typeOfAnaesthesia/REGIONAL": ["PB", "Neuraxial", "Peripheral "],
					const firstLevelTreeNode = restTreeNodes[0];
					let firstLevelSelection = {};
					let firstLevelSelectionData = data[key];
					const isFirstLevelSelectionDataArray = Array.isArray(firstLevelSelectionData);

					if (isFirstLevelSelectionDataArray) {
						firstLevelSelection = {
							key: firstLevelTreeNode,
							label: getLabel(firstLevelTreeNode, treeConfigData),
							value: firstLevelSelectionData.map((selection) => {
								return {
									key: selection,
									label: getLabel(selection, treeConfigData),
									colorLevel: 1,
									isClickable: false,
								};
							}),
						};
					} else {
						firstLevelSelection = {
							key: firstLevelTreeNode,
							label: getLabel(firstLevelTreeNode, treeConfigData),
							value: [
								{
									key: firstLevelSelectionData,
									label: getLabel(firstLevelSelectionData, treeConfigData),
									colorLevel: 1,
									isClickable: false,
								},
							],
						};
					}

					const firstLevelDataFromResult = result[firstLevelTreeNode];
					if (firstLevelDataFromResult) {
						firstLevelDataFromResult.value.push(...firstLevelSelection.value);
					} else {
						result[firstLevelTreeNode] = firstLevelSelection;
					}
				} else {
					//"typeOfAnaesthesia/DRUGS/INHALATIONAL": ["NO2", "SEVOFLURANE", "Isoflurane"],
					const [firstLevelTreeNode, ...otherLevelTreeNode] = restTreeNodes;
					let subLevelSelection = [];
					let subLevelSelectionLeaves = [];
					let subLevelSelectionData = data[key];
					const isSubLevelSelectionDataArray = Array.isArray(subLevelSelectionData);

					const subLevelSelectionNodes = otherLevelTreeNode.map((selector, index) => {
						return {
							key: selector,
							label: getLabel(selector, treeConfigData),
							colorLevel: index + 1,
							isClickable: true,
							clickablePath: key,
						};
					});

					if (isSubLevelSelectionDataArray) {
						subLevelSelectionLeaves = subLevelSelectionData.map((selection) => {
							return {
								key: selection,
								label: getLabel(selection, treeConfigData),
								colorLevel: otherLevelTreeNode.length + 1,
								isClickable: false,
							};
						});
					} else {
						subLevelSelectionLeaves = [
							{
								key: subLevelSelectionData,
								label: getLabel(subLevelSelectionData, treeConfigData),
								colorLevel: otherLevelTreeNode.length + 1,
								isClickable: false,
							},
						];
					}

					subLevelSelection.push(...subLevelSelectionNodes, ...subLevelSelectionLeaves);

					const firstLevelDataFromResult = result[firstLevelTreeNode];
					if (firstLevelDataFromResult) {
						firstLevelDataFromResult.value.push(...subLevelSelection);
					} else {
						result[firstLevelTreeNode] = {
							key: firstLevelTreeNode,
							label: getLabel(firstLevelTreeNode, treeConfigData),
							value: subLevelSelection,
						};
					}
				}
			} else {
				// typeOfAnaesthesia: ["MAC", "General Anaesthesia"],
				const leafSelectionData = data[key];
				if (Array.isArray(leafSelectionData)) {
					leafSelectionData.map((selection) => {
						result[selection] = {
							key: selection,
							label: getLabel(selection, treeConfigData),
							value: null,
						};
					});
				} else {
					result[leafSelectionData] = {
						key: leafSelectionData,
						label: getLabel(leafSelectionData, treeConfigData),
						value: null,
					};
				}
			}
			return result;
		}, {});
	};

	useEffect(() => {
		console.log("SpecialCaseLogSelectOptions useEffect");
		specialCaseLogsOption.forEach((option) => {
			const data = caseLogData[option.id];
			//console.log("option", option.id);
			//console.log("DB data", data);
			const treeSelectorValue_Formatted = parserForConvertingIntoTreeFormData(data, option.id);
			//console.log("treeSelectorValue_Formatted", treeSelectorValue_Formatted);
			setActiveTreeSelectorValue((prevState) => ({ ...prevState, [option.id]: treeSelectorValue_Formatted }));
		});
	}, [caseLogData]);

	return (
		<VStack alignItems='center' space='lg' paddingBottom={10} paddingTop={20} px='$4'>
			{specialCaseLogsOption.map((option) => {
				const compactViewData = useMemo(() => buildCompactView(option), [option.id, activeTreeSelectorValue[option.id]]);
				console.log("compactViewData", compactViewData);
				return (
					<VStack bg='$white' rounded='$lg' w={"$full"}>
						<Button
							w='$full'
							key={option.id}
							onPress={handleShowTreeSelector.bind(null, option.id, null)}
							size='lg'
							justifyContent='space-between'
							variant='specialLogs'>
							<ButtonText>{option.name}</ButtonText>
							<ButtonIcon as={ChevronRight} size={20} name='arrow-forward-outline' color='#666666' />
						</Button>
						{activeTreeSelectorValue[option.id] && (
							<VStack gap='$0' pl='$8' pb='$2' width={"$90%"}>
								{map(compactViewData, (data, key) => {
									return (
										<>
											<Divider my='$1' bg='$coolGray200' />
											<HStack w={"$full"} gap='$1' flexWrap='wrap'>
												{data.value ? (
													<Pressable onPress={handleShowTreeSelector.bind(null, option.id, key)}>
														<Text fontWeight='$semibold' fontSize='$lg' underline={true}>
															{data.label}
														</Text>
													</Pressable>
												) : (
													<Text fontWeight='$semibold' fontSize='$lg'>
														{data.label}
													</Text>
												)}
												{data.value && (
													<HStack display='flex' alignItems='center' flexWrap='wrap'>
														{map(data.value, (value) => {
															return (
																<HStack alignItems='center' gap='$0.5'>
																	{getArrowIcon(value)}
																	{value.isClickable ? (
																		<Pressable onPress={handleShowTreeSelector.bind(null, option.id, value.clickablePath)}>
																			<Text fontSize='$md' underline={true}>
																				{value.label}
																			</Text>
																		</Pressable>
																	) : (
																		<Text fontSize='$md'>{value.label}</Text>
																	)}
																</HStack>
															);
														})}
													</HStack>
												)}
											</HStack>
										</>
									);
								})}
							</VStack>
						)}
					</VStack>
				);
			})}
			{activeTreeSelector && showTreeView && (
				<TreeView
					data={getTreeConfigData(activeTreeSelector)}
					showTreeView={showTreeView}
					onSave={handleOnSave}
					onCancel={handleOnCancel}
					activeTreeSelector={activeTreeSelector}
					initialData={activeTreeSelectorValue[activeTreeSelector]}
					initialActiveNode={activeTreeNode}
				/>
			)}
		</VStack>
	);
};

export default SpecialCaseLogSelectOptions;
