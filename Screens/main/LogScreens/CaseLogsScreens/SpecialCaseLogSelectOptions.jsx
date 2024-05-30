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

const SpecialCaseLogSelectOptions = ({ navigation, control, formState }) => {
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [showTreeView, setShowTreeView] = useState(false);
	const [activeTreeSelector, setActiveTreeSelector] = useState("");

	const handleOnSave = (selectedNodes) => {
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

	const specialCaseLogsOption = [
		{ id: "TypeOfAnesthesia", name: "Type of Anesthesia" },
		{ id: "AirwayManagement", name: "Airway Management" },
	];

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
