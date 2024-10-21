import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import {
	Actionsheet,
	ActionsheetBackdrop,
	ActionsheetContent,
	ActionsheetDragIndicatorWrapper,
	ActionsheetDragIndicator,
	ActionsheetItem,
	Text,
	Box,
} from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { ChevronDown } from "lucide-react-native";
import { Divider } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";

const CustomSelect = ({ field, value, onChange, isOpen, onOpen, onClose, onSelect, readOnly }) => {
	const screenHeight = Dimensions.get("window").height;

	const handleOptionSelect = (optionValue) => {
		if (!readOnly) {
			onChange(optionValue);
			onClose();
			if (field.uid === "outcome" && optionValue === "Others") {
				setTimeout(() => {
					onSelect("outcome");
				}, 100);
			} else {
				onSelect(field.uid);
			}
		}
	};

	const getText = () => {
		if (typeof value === "string") {
			return value;
		}

		if (Array.isArray(value) && value[0] && typeof value[0] === "object") {
			return `${value[0].firstName || ""} ${value[0].lastName || ""}`.trim();
		}

		if (value && field?.options) {
			const option = field.options.find((opt) => opt.value === value);
			return option ? option.label : value;
		}

		return "";
	};

	return (
		<>
			<TouchableOpacity onPress={readOnly ? null : onOpen}>
				<HStack h='$9' borderWidth={0.2} px={10} borderRadius={2} justifyContent='space-between' alignItems='center' opacity={readOnly ? 0.5 : 1}>
					<Text fontSize={14}>{getText()}</Text>
					{!readOnly && <Icon color='#367B71' as={ChevronDown} w='$4' h='$4' />}
				</HStack>
			</TouchableOpacity>
			<Actionsheet isOpen={isOpen && !readOnly} onClose={onClose}>
				<ActionsheetBackdrop />
				<ActionsheetContent maxHeight={screenHeight * 0.5}>
					<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
						{field.name}
					</Text>
					<Divider borderWidth={0.1} />
					<ScrollView w='$full'>
						{field?.options?.map((option, index) => (
							<ActionsheetItem bg={index % 2 === 0 ? "$warmGray100" : "#FFF"} key={option.value} onPress={() => handleOptionSelect(option.value)}>
								<Text>{option.label}</Text>
							</ActionsheetItem>
						))}
					</ScrollView>
					<ActionsheetDragIndicatorWrapper>
						<ActionsheetDragIndicator />
					</ActionsheetDragIndicatorWrapper>
				</ActionsheetContent>
			</Actionsheet>
		</>
	);
};

export default CustomSelect;
