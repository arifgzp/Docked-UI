import {
	CheckIcon,
	CheckboxGroup,
	CheckboxIndicator,
	HStack,
	KeyboardAvoidingView,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	useToken,
} from "@gluestack-ui/themed";
import { Box, Text, VStack, Button, ButtonText, ButtonIcon } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";

import { ChevronDown, ChevronRight, CircleX } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { Modal } from "@gluestack-ui/themed";
import React, { useState, useRef } from "react";
import { Heading } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";
import CaseLogAnaesthesiaConfig from "../../../../config/SpecialtyConfigs/AnesthesiaConfigs/CaseLogAnaesthesiaConfig";
import ChronicPainAnesthesiaCaseLogConfig from "../../../../config/SpecialtyConfigs/AnesthesiaConfigs/ChronicPainAnesthesiaCaseLogConfig";
import TreeView from "../../../../components/TreeView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { forEach } from "lodash";
import CriticalCareLAnesthesiaCaseLogConfig from "../../../../config/SpecialtyConfigs/AnesthesiaConfigs/CriticalCareLAnesthesiaCaseLogConfig";

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

const input = {
	typeOfAnaesthesia: ["MAC", "LA", "GA"],
	"typeOfAnaesthesia/DRUGS/INHALATIONAL": ["NO2", "SEVOFLURANE"],
	"typeOfAnaesthesia/DRUGS/INTRAVENOUS": "Etomidate",
	"typeOfAnaesthesia/REGIONAL": ["PB", "Neuraxial"],
};

const transformInput = (input) => {
	console.log("data to be transformed", input);
	const result = {};

	Object.keys(input).forEach((key) => {
		const parts = key.split("/");

		console.log("what are parts", parts);
		const value = input[key];
		console.log("what are the values???", value);

		let current = result;
		for (let i = 1; i < parts.length; i++) {
			const part = parts[i];
			console.log("what is this part inside the loop?", part);
			console.log("current loop,", i);
			if (i === parts.length - 1) {
				// If it's the last part, set the value
				if (Array.isArray(value)) {
					if (!current[part]) {
						current[part] = value;
					}
				} else {
					current[part] = value;
				}
			} else {
				// If it's not the last part, move deeper in the object
				if (!current[part]) {
					current[part] = {};
				}
				current = current[part];
			}
		}
	});

	// Ensure that all top-level keys are preserved
	Object.keys(input).forEach((key) => {
		if (!key.includes("/")) {
			const value = input[key];
			if (Array.isArray(value)) {
				value.forEach((item) => {
					result[item] = [item];
				});
			} else {
				result[key] = value;
			}
		}
	});
	console.log("result after data has been transformed", result);
	return result;
};

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

const SpecialCaseLogSelectOptions = ({ navigation, control, formState, setValue, specialCaseLogsOption, refernceToGetSpecialOptions }) => {
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [showTreeView, setShowTreeView] = useState(false);
	const [activeTreeSelector, setActiveTreeSelector] = useState("");
	const [activeTreeSelectorValue, setActiveTreeSelectorValue] = useState({});
	const figmaRed = useToken("colors", "figmared");

	const handleOnSave = (selectedNodes) => {
		console.log("is this the data I am getting from the treeview component?", selectedNodes);
		console.log("MUDIT+++>", parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
		setValue(activeTreeSelector, parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
		setShowTreeView(false);
		console.log("\n\n");
		console.log("!!!!! Tree Selector Predicate Key : ", activeTreeSelector);
		console.log("!!!!! Tree Selector Predicate Value (Selected Nodes) : ", selectedNodes);
		setActiveTreeSelectorValue({ ...activeTreeSelectorValue, [activeTreeSelector]: selectedNodes });
	};

	const handleOnCancel = () => {
		setShowTreeView(false);
	};

	const handleShowTreeSelector = (activeTreeSelectorId) => {
		setShowTreeView(true);
		setActiveTreeSelector(activeTreeSelectorId);
	};

	const getTreeConfigData = (key) => {
		switch (refernceToGetSpecialOptions) {
			case "CaseLog":
				return CaseLogAnaesthesiaConfig[key];
			case "ChronicPain":
				return ChronicPainAnesthesiaCaseLogConfig[key];
			case "CriticalCareCaseLog":
				return CriticalCareLAnesthesiaCaseLogConfig[key];
			default:
				return [];
		}
	};

	const getArrowIcon = (level) => {
		switch (level) {
			case 1:
				return <MaterialCommunityIcons name='menu-right' size={28} color={figmaRed} />;

			case 2:
				return <MaterialCommunityIcons name='menu-right' size={28} color='#e96363' />;

			case 3:
				return <MaterialCommunityIcons name='menu-right' size={24} color='#fababa' />;

			default:
				return <MaterialCommunityIcons name='menu-right' size={24} color='#ffe5e5' />;
		}
	};

	const renderCard = (input, key, level, configData) => {
		console.log("input parameter for the render card", input);
		console.log("key parameter for the render card", key);
		console.log("level parameter for the render card", level);
		console.log("configData parameter for the render card", configData);

		if (Array.isArray(input)) {
			if (input.length == 1 && key == input[0] && level == 1) {
				return null;
			}
			if (input.length == 1 && key == input[0]) {
				console.log("level >> ", level);
				const label = getLabel(input[0], configData);
				return (
					<Text flexShrink={1} bg='$red400'>
						{label}
					</Text>
				);
			} else {
				const label = getLabel(key, configData);
				return (
					<>
						<Text flexShrink={1}>{level !== 1 && label}</Text>
						{getArrowIcon(level)}
						<>
							{input.map((obj, index) => {
								const length = input.length;
								if (index == length - 1) {
									const label = getLabel(obj, configData);
									return (
										<>
											<Text flexShrink={1}>{label}</Text>
										</>
									);
								} else {
									const label = getLabel(obj, configData);
									return (
										<>
											<Text flexShrink={1}>{label}</Text>
											{getArrowIcon(level)}
										</>
									);
								}
							})}
						</>
					</>
				);
			}
		} else {
			const label = getLabel(key, configData);
			return (
				<>
					<Text flexShrink={1}>{level !== 1 && label}</Text>
					{Object.keys(input).map((keyChild) => {
						return (
							<>
								{getArrowIcon(level)}
								{renderCard(input[keyChild], keyChild, level + 1, configData)}
							</>
						);
					})}
				</>
			);
		}
	};

	const getInputValue = (key) => {
		const flattened = parserToConvertTreeFromIntoDataBaseForm(activeTreeSelectorValue[key], key);
		console.log("flattened", flattened);
		const treeSelectorValue_Formatted = parserForConvertingIntoTreeFormData(flattened[key], key);
		console.log("treeSelectorValue_Formatted", treeSelectorValue_Formatted);
		return treeSelectorValue_Formatted;
	};

	const treeConfigData = getTreeConfigData(activeTreeSelector);
	//console.log("DATA", treeConfigData);
	console.log("activeTreeSelector", `is this empty ??? ${activeTreeSelector}`);
	console.log("activeTreeSelectorValue", activeTreeSelectorValue);

	return (
		<VStack alignItems='center' space='lg' paddingBottom={10} paddingTop={20} px='$4'>
			{specialCaseLogsOption.map((option) => {
				return (
					<VStack bg='$white' rounded='$lg' w={"$full"}>
						<Button
							w='$full'
							key={option.id}
							onPress={handleShowTreeSelector.bind(null, option.id)}
							size='lg'
							justifyContent='space-between'
							variant='specialLogs'>
							<ButtonText>{option.name}</ButtonText>
							<ButtonIcon as={ChevronRight} size={20} name='arrow-forward-outline' color='#666666' />
						</Button>
						{activeTreeSelectorValue[option.id] && (
							<VStack gap='$0' borderTopWidth={1} borderTopColor='$coolGray100' pl='$8' pb='$2' width={"$80%"}>
								{Object.keys(transformInput(getInputValue(option.id))).map((key) => {
									//console.log("key", key);
									//console.log("configData", treeConfigData);
									const configData = getTreeConfigData(option.id);
									const x = renderCard(transformInput(getInputValue(option.id))[key], key, 1, configData);
									console.log("x", x);
									return (
										<HStack w={"$full"} gap='$1'>
											<Text pt='$1'>{getLabel(key, configData)}</Text>
											<HStack flexWrap='wrap' alignItems='center'>
												{x}
											</HStack>
										</HStack>
									);
								})}
							</VStack>
						)}
					</VStack>
				);
			})}
			{activeTreeSelector && (
				<TreeView
					data={treeConfigData}
					showTreeView={showTreeView}
					onSave={handleOnSave}
					onCancel={handleOnCancel}
					initialData={activeTreeSelectorValue[activeTreeSelector]}
				/>
			)}
		</VStack>
	);
};

export default SpecialCaseLogSelectOptions;
