import { Button, ButtonIcon, ButtonText, VStack } from "@gluestack-ui/themed";
import { forEach } from "lodash";
import { ChevronRight } from "lucide-react-native";
import { useCallback, useEffect, useState } from "react";
import TreeDataView from "../../../../components/Tree-DataView";
import TreeView from "../../../../components/Tree-SelectorView_old";
import CaseLogAnaesthesiaConfig from "../../../../data/SpecialtyConfigs/AnesthesiaConfigs/CaseLogAnaesthesiaConfig";
import ChronicPainAnesthesiaCaseLogConfig from "../../../../data/SpecialtyConfigs/AnesthesiaConfigs/ChronicPainAnesthesiaCaseLogConfig";
import CriticalCareLAnesthesiaCaseLogConfig from "../../../../data/SpecialtyConfigs/AnesthesiaConfigs/CriticalCareLAnesthesiaCaseLogConfig";
import OrthopeadicsCaseLogConfig from "../../../../data/SpecialtyConfigs/OrthopaedicsConfigs/OrthopeadicsCaseLogConfig";
import OrthodonticsSpecialClinicalCaseLogConfig from "../../../../data/SpecialtyConfigs/OrthodonticConfigs/OrthodonticsSpecialClinicalCaseLogConfig";

const getSelectType = (key, configData) => {
	//console.log("key", key);
	//console.log("configData", configData);
	let selectType = "unknown";
	forEach(configData, (config) => {
		if (config.id == key) {
			selectType = config.selectType;
			//console.log("!!!!! Match Found ", label);
			return false;
		} else if (config.children) {
			selectType = getSelectType(key, config.children);
			if (selectType != "unknown") {
				return false;
			}
		}
	});
	//console.log("Finakl LAbel >>>>> ", label);
	return selectType;
};

const parserForConvertingIntoTreeFormData = (input, treeConfig) => {
	let result = {};
	if (input) {
		result = input.reduce((result, key) => {
			const treeLevels = key.split("/");
			const leafNode = treeLevels.pop();

			const leafNodeSelector = treeLevels.join("/");

			if (result[leafNodeSelector]) {
				result[leafNodeSelector].push(leafNode);
			} else {
				const leafNodeOwner = treeLevels.pop();
				const selectType = getSelectType(leafNodeOwner, treeConfig);
				console.log("selectType", selectType);
				console.log("leafNodeOwner", leafNodeOwner);
				if (selectType === "single") {
					result[leafNodeSelector] = leafNode;
				} else {
					result[leafNodeSelector] = [leafNode];
				}
			}
			return result;
		}, {});
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
			const treeSelectorValue_Formatted = parserForConvertingIntoTreeFormData(data, getTreeConfigData(option.id));
			console.log("SpecialCaseLogSelectOptions >> treeSelectorValue_Formatted", treeSelectorValue_Formatted);
			setActiveTreeSelectorValue((prevState) => ({ ...prevState, [option.id]: treeSelectorValue_Formatted }));
		});
	}, [caseLogData, specialCaseLogsOption]);

	//console.log("SpecialCaseLogSelectOptions >> specialCaseLogsOption", specialCaseLogsOption);
	console.log("SpecialCaseLogSelectOptions >> caseLogData", caseLogData);
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
