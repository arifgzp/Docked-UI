import {
	CheckIcon,
	CheckboxGroup,
	CheckboxIndicator,
	KeyboardAvoidingView,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
} from "@gluestack-ui/themed";
import { Box, Text, VStack, Button, ButtonText, ButtonIcon } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";

import { ChevronDown, ChevronRight, CircleX } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { Modal } from "@gluestack-ui/themed";
import { useState, useRef } from "react";
import { Heading } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";
import AnaesthesiaConfig from "../../../../config/SpecialtyConfigs/AnaesthesiaConfig";
import TreeView from "../../../../components/TreeView";

const parserForConvertingIntoTreeFormData = (input, key) => {
	const result = {};

	input[key].forEach((item) => {
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

const SpecialCaseLogSelectOptions = ({ navigation, control, formState, setValue, specialCaseLogsOption }) => {
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [showTreeView, setShowTreeView] = useState(false);
	const [activeTreeSelector, setActiveTreeSelector] = useState("");

	const handleOnSave = (selectedNodes) => {
		console.log("MUDIT+++>", parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
		setValue(activeTreeSelector, parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
		setShowTreeView(false);
		console.log("\n\n");
		console.log("!!!!! Tree Selector Predicate Key : ", activeTreeSelector);
		console.log("!!!!! Tree Selector Predicate Value (Selected Nodes) : ", selectedNodes);
	};

	const handleOnCancel = () => {
		setShowTreeView(false);
	};

	const handleShowTreeSelector = (activeTreeSelectorId) => {
		setShowTreeView(true);
		setActiveTreeSelector(activeTreeSelectorId);
	};

	const getTreeConfigData = () => {
		return AnaesthesiaConfig[activeTreeSelector];
	};

	const treeConfigData = getTreeConfigData();
	console.log("DATA", treeConfigData);

	const flattened = parserToConvertTreeFromIntoDataBaseForm(input, "typeOfAnaesthesia");
	//console.log("Parsed to save into data", JSON.stringify(flattened, null, 2));

	const x = parserForConvertingIntoTreeFormData(flattened, "typeOfAnaesthesia");

	//console.log("TEST PLEASE WORK=>", x);

	return (
		<VStack alignItems='center' space='lg' paddingBottom={10} paddingTop={20}>
			{specialCaseLogsOption.map((option) => (
				<Button key={option.id} onPress={handleShowTreeSelector.bind(null, option.id)} size='lg' justifyContent='space-between' variant='specialLogs'>
					<ButtonText>{option.name}</ButtonText>
					<ButtonIcon as={ChevronRight} size={20} name='arrow-forward-outline' color='#666666' />
				</Button>
			))}
			{activeTreeSelector && <TreeView data={treeConfigData} showTreeView={showTreeView} onSave={handleOnSave} onCancel={handleOnCancel} />}
		</VStack>
	);
};

export default SpecialCaseLogSelectOptions;
