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

const CustomSelect = ({ field, value, onChange, isOpen, onOpen, onClose, onSelect }) => {
	const screenHeight = Dimensions.get("window").height;
	const handleOptionSelect = (optionValue) => {
		onChange(optionValue);
		onClose();
		if (field.uid === "outcome" && optionValue === "Others") {
			// Delay to allow rendering of 'outcomeOther' field
			setTimeout(() => {
				onSelect("outcome");
			}, 100);
		} else {
			onSelect(field.uid);
		}
	};

	return (
		<>
			<TouchableOpacity onPress={onOpen}>
				<HStack h='$9' borderWidth={0.2} px={10} borderRadius={2} justifyContent='space-between' alignItems='center'>
					<Text fontSize={14}>{value ? field.options.find((opt) => opt.value === value)?.label : ""}</Text>
					<Icon color='#367B71' as={ChevronDown} w='$4' h='$4' />
				</HStack>
			</TouchableOpacity>
			<Actionsheet isOpen={isOpen} onClose={onClose}>
				<ActionsheetBackdrop />
				<ActionsheetContent maxHeight={screenHeight * 0.5}>
					<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
						{field.name}
					</Text>
					<Divider borderWidth={0.1} />
					<ScrollView w='$full'>
						{field.options.map((option, index) => (
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
