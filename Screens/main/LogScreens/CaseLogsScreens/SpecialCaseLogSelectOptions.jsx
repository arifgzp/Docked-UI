import { Button, ButtonIcon, ButtonText, VStack } from "@gluestack-ui/themed";

import { ChevronRight } from "lucide-react-native";
import { useCallback, useEffect, useState } from "react";
import TreeDataView from "../../../../components/Tree-DataView";
import TreeView from "../../../../components/Tree-SelectorView";
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
	const [showTreeView, setShowTreeView] = useState(false);
	const [activeTreeSelector, setActiveTreeSelector] = useState("");
	const [activeTreeNode, setActiveTreeNode] = useState("");
	const [activeTreeSelectorValue, setActiveTreeSelectorValue] = useState({});

	const handleOnSave = useCallback(
		(selectedNodes) => {
			console.log("is this the data I am getting from the treeview component?", selectedNodes);
			//console.log("MUDIT+++>", parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
			setValue(activeTreeSelector, parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
			setShowTreeView(false);
			setActiveTreeNode("");
			//setActiveTreeSelectorValue({ ...activeTreeSelectorValue, [activeTreeSelector]: selectedNodes });
			setActiveTreeSelectorValue((prevState) => ({ ...prevState, [activeTreeSelector]: selectedNodes }));
		},
		[activeTreeSelector]
	);

	const handleOnCancel = useCallback(() => {
		setShowTreeView(false);
		setActiveTreeNode("");
	});

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

	useEffect(() => {
		console.log("SpecialCaseLogSelectOptions useEffect");
		specialCaseLogsOption.forEach((option) => {
			const data = caseLogData[option.id];
			const treeSelectorValue_Formatted = parserForConvertingIntoTreeFormData(data, option.id);
			setActiveTreeSelectorValue((prevState) => ({ ...prevState, [option.id]: treeSelectorValue_Formatted }));
		});
	}, [caseLogData, specialCaseLogsOption]);

	console.log("SpecialCaseLogSelectOptions >> specialCaseLogsOption", specialCaseLogsOption);

	return (
		<VStack alignItems='center' space='lg' paddingBottom={10} paddingTop={20} px='$4'>
			{specialCaseLogsOption.map((option) => {
				return (
					<VStack key={option.id} bg='$white' rounded='$lg' w={"$full"}>
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
							<TreeDataView
								predicate={option.id}
								data={activeTreeSelectorValue[option.id]}
								treeConfigData={getTreeConfigData(option.id)}
								onShowTreeSelector={handleShowTreeSelector}
							/>
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
