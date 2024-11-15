import { Button, ButtonIcon, ButtonText, Divider, VStack } from "@gluestack-ui/themed";
import { forEach, isEmpty } from "lodash";
import { ChevronRight } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import TreeDataView from "../../../../components/Tree-DataView";
import TreeView from "../../../../components/Tree-SelectorView";
import CaseLogAnaesthesiaConfig from "../../../../data/SpecialtyConfigs/AnesthesiaConfigs/CaseLogAnaesthesiaConfig";
import ChronicPainAnesthesiaCaseLogConfig from "../../../../data/SpecialtyConfigs/AnesthesiaConfigs/ChronicPainAnesthesiaCaseLogConfig";
import CriticalCareLAnesthesiaCaseLogConfig from "../../../../data/SpecialtyConfigs/AnesthesiaConfigs/CriticalCareLAnesthesiaCaseLogConfig";
import OrthopeadicsCaseLogConfig from "../../../../data/SpecialtyConfigs/OrthopaedicsConfigs/OrthopeadicsCaseLogConfig";
import OrthodonticsSpecialClinicalCaseLogConfig from "../../../../data/SpecialtyConfigs/OrthodonticConfigs/OrthodonticsSpecialClinicalCaseLogConfig";
import { FontAwesome6 } from "@expo/vector-icons";
import OrthopeadicProcedureLogSpecialConfig from "../../../../data/SpecialtyConfigs/OrthopaedicsConfigs/OrthopeadicProcedureLogSpecialConfig";
import OrthodonticsPreClinicalSpecialConfig from "../../../../data/SpecialtyConfigs/OrthodonticConfigs/OrthodonticsPreClinicalSpecialConfig";
import OralMedicineAndRadiologySpecialCaseLogConfig from "../../../../data/SpecialtyConfigs/OralMedicineAndRadiologyConfigs/OralMedicineAndRadiologySpecialCaseLogConfig";
import appStoreInstance from "../../../../stores/AppStore";
import AcademicLogSpecialOptions from "../../../../data/entity/Academic/AcademicLogSpecialOptions";
import OralRadiologySpecialConfig from "../../../../data/SpecialtyConfigs/OralMedicineAndRadiologyConfigs/OralRadiologySpecialConfig";
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
				console.log("leafNodeSelector >> ", leafNodeSelector);
				console.log("Result >> ", result[leafNodeSelector]);
				if (Array.isArray(result[leafNodeSelector])) {
					// TODO: Added a safety check to avoid crash
					result[leafNodeSelector].push(leafNode);
				}
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
	specialOptions,
	refernceToGetSpecialOptions,
}) => {
	const [showModal, setShowModal] = useState(false);
	const [showTreeView, setShowTreeView] = useState(false);
	const [activeTreeSelector, setActiveTreeSelector] = useState("");
	const [activeTreeNode, setActiveTreeNode] = useState("");
	const [activeTreeSelectorValue, setActiveTreeSelectorValue] = useState({});

	const handleOnSave = useCallback(
		(selectedNodes) => {
			setValue(activeTreeSelector, parserToConvertTreeFromIntoDataBaseForm(selectedNodes, activeTreeSelector)[activeTreeSelector]);
			setShowTreeView(false);
			setActiveTreeNode("");
			setActiveTreeSelectorValue((prevState) => ({ ...prevState, [activeTreeSelector]: selectedNodes }));
		},
		[activeTreeSelector]
	);

	const handleOnCancel = useCallback(() => {
		setShowTreeView(false);
		setActiveTreeNode("");
	});

	const handleShowTreeSelector = (activeTreeSelectorId, activeTreeNodeId) => {
		appStoreInstance.setIsFormDirty(true);
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
			case "OrthopaedicsProcedureLog":
				return OrthopeadicProcedureLogSpecialConfig[key];
			case "OrthodonticsClinicalCaseLog":
				return OrthodonticsSpecialClinicalCaseLogConfig[key];
			case "OrthodonticsPreClinical":
				return OrthodonticsPreClinicalSpecialConfig[key];
			case "AcademicLog":
				return AcademicLogSpecialOptions[key];
			case "OralMedicineCaseLog":
				return OralMedicineAndRadiologySpecialCaseLogConfig[key];
			case "OralRadiology":
				return OralRadiologySpecialConfig[key];
			default:
				return [];
		}
	};

	useEffect(() => {
		//console.log("SpecialCaseLogSelectOptions useEffect");
		specialOptions.forEach((option) => {
			const data = caseLogData[option.id];
			const treeSelectorValue_Formatted = parserForConvertingIntoTreeFormData(data, getTreeConfigData(option.id));
			//console.log("SpecialCaseLogSelectOptions >> treeSelectorValue_Formatted", treeSelectorValue_Formatted);
			setActiveTreeSelectorValue((prevState) => ({ ...prevState, [option.id]: treeSelectorValue_Formatted }));
		});
	}, [caseLogData, specialOptions]);

	//console.log("SpecialCaseLogSelectOptions >> caseLogData", caseLogData);
	return (
		<VStack alignItems='center' gap='$4' px='$4'>
			{specialOptions.map((option) => {
				//console.log(activeTreeSelectorValue[option.id]);
				if (!isEmpty(activeTreeSelectorValue[option.id])) {
					return (
						<VStack key={option.id} bg='#E6E3DB' borderRadius={25} w={"$full"}>
							<Button
								w='$full'
								key={option.id}
								onPress={handleShowTreeSelector.bind(null, option.id, null)}
								size='xl'
								justifyContent='space-between'
								variant='specialLogs'>
								<ButtonText fontSize='$sm'>{option.name}</ButtonText>
								<ButtonIcon as={FontAwesome6} name='edit' size={16} color='#367B71' />
							</Button>
							<Divider bgColor='$textColor100' />
							<TreeDataView
								predicate={option.id}
								data={activeTreeSelectorValue[option.id]}
								treeConfigData={getTreeConfigData(option.id)}
								onShowTreeSelector={handleShowTreeSelector}
							/>
						</VStack>
					);
				} else {
					return (
						<VStack key={option.id} bg='#E6E3DB' borderRadius={25} w={"$full"}>
							<Button
								w='$full'
								key={option.id}
								onPress={handleShowTreeSelector.bind(null, option.id, null)}
								size='xl'
								justifyContent='space-between'
								variant='specialLogs'>
								<ButtonText fontSize='$sm'>{option.name}</ButtonText>
								<ButtonIcon as={FontAwesome6} name='add' size={16} color='#367B71' />
							</Button>
						</VStack>
					);
				}
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
