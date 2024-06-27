import { Divider, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { map, forEach } from "lodash";
import { Icon } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";

const getLabel = (key, configData) => {
	//console.log("key", key);
	//console.log("configData", configData);
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
	//console.log("Finakl LAbel >>>>> ", label);
	return label;
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

function TreeDataView(props) {
	const { predicate, data = {}, treeConfigData, onShowTreeSelector } = props;

	const buildCompactViewData = () => {
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

	const compactViewData = useMemo(buildCompactViewData, [predicate, data]);

	return (
		<VStack gap='$0' pl='$8' pb='$2' width={"$90%"}>
			{map(compactViewData, (data, key) => {
				return (
					<>
						<Divider my='$1' bg='$coolGray200' />
						<HStack w={"$full"} gap='$1' flexWrap='wrap'>
							{data.value ? (
								<Pressable onPress={onShowTreeSelector.bind(null, predicate, key)}>
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
													<Pressable onPress={onShowTreeSelector.bind(null, predicate, value.clickablePath)}>
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
	);
}

export default TreeDataView;
