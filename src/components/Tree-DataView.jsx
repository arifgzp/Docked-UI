import { Divider, HStack, Pressable, Text, useToken, VStack } from "@gluestack-ui/themed";
import React, { useMemo } from "react";
import { map, forEach, isEmpty } from "lodash";
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

function TreeDataView(props) {
	const { predicate, data = {}, treeConfigData, onShowTreeSelector } = props;
	const color_Level1 = useToken("colors", "primary600");
	const color_Level2 = useToken("colors", "primary300");
	const color_Level3 = useToken("colors", "primary100");

	const getArrowIcon = (colorLevel) => {
		let iconColor = "";
		let iconSize = -1;
		let iconName = "";
		switch (colorLevel) {
			case 1:
				iconColor = color_Level1;
				iconSize = 18;
				iconName = "caret-forward";
				break;

			case 2:
				iconColor = color_Level2;
				iconSize = 18;
				iconName = "caret-forward";
				break;

			case 3:
				iconColor = color_Level3;
				iconSize = 18;
				iconName = "caret-forward";
				break;

			case 4:
				iconColor = color_Level3;
				iconSize = 14;
				iconName = "play-outline";
				break;

			default:
				iconColor = "#367B71";
				iconSize = 18;
				iconName = "caret-forward";
				break;
		}
		return <Icon as={Ionicons} name={iconName} size={iconSize} color={iconColor} />;
	};

	const buildCompactViewData = () => {
		return Object.keys(data).reduce(
			(result, key) => {
				const [rootNode, ...restTreeNodes] = key.split("/");
				if (restTreeNodes.length === 0) {
					const leafNodeSelection = data[key];
					const isLeafNodeSelectionArray = Array.isArray(leafNodeSelection);
					if (isLeafNodeSelectionArray) {
						result.selectionList.push(
							...leafNodeSelection.map((selection) => {
								return {
									key: selection,
									label: getLabel(selection, treeConfigData),
									children: null,
								};
							})
						);
					} else {
						result.selectionList.push({
							key: leafNodeSelection,
							label: getLabel(leafNodeSelection, treeConfigData),
							children: null,
						});
					}

					return result;
				}

				// Start from the end of the parts array and build the object structure
				let node = {};
				for (let i = restTreeNodes.length - 1; i >= 0; i--) {
					const currentNodeKey = restTreeNodes[i];
					if (i === restTreeNodes.length - 1) {
						// The last part of the path becomes the deepest nested object
						const leafNodeSelection = data[key];
						const isLeafNodeSelectionArray = Array.isArray(leafNodeSelection);
						let leafNodeList = [];
						if (isLeafNodeSelectionArray) {
							leafNodeList = leafNodeSelection.map((selection) => {
								return {
									key: selection,
									label: getLabel(selection, treeConfigData),
									children: null,
								};
							});
						} else {
							leafNodeList = [
								{
									key: leafNodeSelection,
									label: getLabel(leafNodeSelection, treeConfigData),
									children: null,
								},
							];
						}
						const isNodeFound = result.lookup[currentNodeKey];
						if (!isNodeFound) {
							node = { key: currentNodeKey, label: getLabel(currentNodeKey, treeConfigData), children: leafNodeList, clickablePath: key };
							result.lookup[currentNodeKey] = node;
							if (i === 0) {
								result.selectionList.push(node);
							}
						} else {
							isNodeFound.children.push(...leafNodeList);
						}
					} else if (i === 0) {
						// The first part of the path becomes the root object
						const isNodeFound = result.lookup[currentNodeKey];
						if (!isNodeFound) {
							node = { key: currentNodeKey, label: getLabel(currentNodeKey, treeConfigData), children: [node], clickablePath: key };
							result.lookup[currentNodeKey] = node;
							result.selectionList.push(node);
						} else if (!isEmpty(node)) {
							isNodeFound.children.push(node);
						}
					} else {
						// Wrap the current result within the next level
						const isNodeFound = result.lookup[currentNodeKey];
						if (!isNodeFound) {
							node = { key: currentNodeKey, label: getLabel(currentNodeKey, treeConfigData), children: [node], clickablePath: key };
							result.lookup[currentNodeKey] = node;
						} else if (!isEmpty(node)) {
							isNodeFound.children.push(node);
							break;
						}
					}
				}

				return result;
			},
			{
				selectionList: [],
				lookup: {},
			}
		);
	};

	const renderNodeLevel = (node, level = 0) => {
		return (
			<HStack key={node.key} justifyContent='flex-start' alignItems='flex-start' gap='$0.5' flexWrap='wrap'>
				{node.children ? (
					<>
						<HStack gap='$0.5' justifyContent='center'>
							{getArrowIcon(level)}
							<Pressable onPress={onShowTreeSelector.bind(null, predicate, node.clickablePath)}>
								<Text fontSize='$xs' underline={true} color='$textColor400' mt='$0.5'>
									{node.label}
								</Text>
							</Pressable>
						</HStack>
						<VStack>
							{map(node.children, (child) => {
								return renderNodeLevel(child, level + 1);
							})}
						</VStack>
					</>
				) : (
					<HStack gap='$0.5' justifyContent='center'>
						{getArrowIcon(level)}
						<Text fontSize='$xs' color='$textColor400' mt='$0.5'>
							{node.label}
						</Text>
					</HStack>
				)}
			</HStack>
		);
	};

	const compactViewData = buildCompactViewData();
	//console.log("data", JSON.stringify(data));
	//console.log("compactViewData", JSON.stringify(compactViewData));

	return (
		<VStack gap='$2' pl='$8' py='$2' width={"$90%"}>
			{map(compactViewData.selectionList, (selection) => {
				return (
					<HStack key={selection.key} w={"$full"} gap='$1' flexWrap='wrap'>
						<Pressable onPress={onShowTreeSelector.bind(null, predicate, selection.key)}>
							<Text fontWeight='$semibold' fontSize='$xs' underline={true} color='$textDark950'>
								{selection.label}
							</Text>
						</Pressable>
						{selection.children && (
							<VStack>
								{map(selection.children, (child) => {
									return renderNodeLevel(child, 1);
								})}
							</VStack>
						)}
					</HStack>
				);
			})}
		</VStack>
	);
}

export default TreeDataView;
