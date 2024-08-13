import PropTypes from "prop-types";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { forEach, find } from "lodash";
import {
	Box,
	CheckboxGroup,
	CheckboxIndicator,
	CheckboxLabel,
	Divider,
	HStack,
	Modal,
	ModalFooter,
	ModalHeader,
	RadioGroup,
	Text,
} from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { CheckIcon } from "@gluestack-ui/themed";
import { Radio } from "@gluestack-ui/themed";
import { RadioIndicator } from "@gluestack-ui/themed";
import { RadioIcon } from "@gluestack-ui/themed";
import { CircleIcon } from "@gluestack-ui/themed";
import { RadioLabel } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";
import { ModalContent } from "@gluestack-ui/themed";
import { ModalCloseButton } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";
import { ModalBody } from "@gluestack-ui/themed";
import { Button } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import { ButtonGroup } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";
import { makeObservable, observable, action } from "mobx";
import { observer } from "mobx-react";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "@gluestack-ui/themed";
import { InputField, InputSlot } from "@gluestack-ui/themed";

function noop() {}

const BranchNode = observer((props) => {
	const { node, level, selectionBreadcrumbKey, expandedNodeKeys, onNodePress } = props;
	console.log("BranchNode Render .............. | ", node.name);

	const nodeId = node["id"];
	const isExpanded = expandedNodeKeys[nodeId];
	const hasChildrenNodes = node["children"] && node["children"].length > 0;
	const shouldRenderLevel = hasChildrenNodes && isExpanded;

	return (
		<VStack key={nodeId} ml={level != 1 ? 32 : 0} pb={isExpanded ? 4 : 0} flex={1}>
			<TouchableOpacity onPress={onNodePress.bind(null, { node, level })}>
				<HStack alignItems='center' key={nodeId} gap='$2'>
					{isExpanded ? (
						<Ionicons name='remove-circle-outline' size={26} color='#000' />
					) : (
						<Ionicons name='add-circle-outline' size={26} color='#000' />
					)}
					<Text fontSize='$lg' flex={1}>
						{node.name}
					</Text>
				</HStack>
			</TouchableOpacity>
			{shouldRenderLevel && (
				<TreeNode
					{...props}
					key={`${nodeId}-children`}
					nodes={node["children"]}
					level={level + 1}
					selectType={node["selectType"]}
					parentId={nodeId}
					selectionBreadcrumbKey={selectionBreadcrumbKey ? `${selectionBreadcrumbKey}/${nodeId}` : nodeId}
				/>
			)}
		</VStack>
	);
});

const LeafNode = observer((props) => {
	const { node, selectType, level, selectedNodeKeys, selectionBreadcrumbKey, onNodePress, onSelectNode } = props;
	console.log("LeafNode Render .............. | ", node.name);

	const handleOnChange = (event) => {
		const value = event.nativeEvent.text;
		const selectedValues = selectedNodeKeys[selectionBreadcrumbKey] || [];
		const updatedValues = selectedValues.filter((v) => !v.includes(node.id));
		updatedValues.push(`${node.id}#V#${value}${node.unit ? `#V#${node.unit}` : ""}`);
		console.log("updatedValues", updatedValues);
		onSelectNode(selectionBreadcrumbKey, updatedValues);
		event.stopPropagation();
	};

	switch (selectType) {
		case "multiple":
			switch (node.inputType) {
				case "text":
					console.log("selectedNodeKeys >> Render", selectedNodeKeys);
					const selectedValues = selectedNodeKeys[selectionBreadcrumbKey];
					const textValue = find(selectedValues, (value) => value?.includes(node.id));
					const value = textValue ? textValue.split("#V#")[1] : "";
					return (
						<VStack key={node.id} ml={level != 1 ? 32 : 0} flex={1} space='xs'>
							<Text lineHeight='$xs'>{node.name}</Text>
							<Input variant='outline' size='sm'>
								<InputField type='text' onChange={handleOnChange} value={value} />
								{node.unit && (
									<InputSlot pr='$3'>
										<Text size='xs'>{node.unit}</Text>
									</InputSlot>
								)}
							</Input>
						</VStack>
					);

				default:
					return (
						<HStack key={node.id} ml={level != 1 ? 32 : 0} flex={1}>
							<Checkbox key={node.id} size='lg' flex={1} value={node.id} aria-label={node.name} onPress={onNodePress.bind(null, { node, level })}>
								<CheckboxIndicator mr='$2'>
									<CheckboxIcon as={FontAwesome} name='check' size={14} />
								</CheckboxIndicator>
								<CheckboxLabel flex={1}>{node.name}</CheckboxLabel>
							</Checkbox>
						</HStack>
					);
			}

		case "single":
			return (
				<HStack key={node.id} ml={level != 1 ? 32 : 0} flex={1}>
					<Radio key={node.id} size='lg' flex={1} value={node.id} aria-label={node.name} onPress={onNodePress.bind(null, { node, level })}>
						<RadioIndicator mr='$2'>
							<RadioIcon as={CircleIcon} />
						</RadioIndicator>
						<RadioLabel flex={1}>{node.name}</RadioLabel>
					</Radio>
				</HStack>
			);

		default:
			return null;
	}
});

const ChildrenWrapper = observer((props) => {
	const { selectedNodeKeys, selectionBreadcrumbKey, selectType, children, level, onSelectNode, onNodePress } = props;

	if (!children || children.length === 0) {
		return null;
	}

	console.log("ChildrenWrapper Render ..............");

	switch (selectType) {
		case "multiple":
			const checkBoxValues = selectedNodeKeys[selectionBreadcrumbKey] || [];
			return (
				<HStack flex={1}>
					<CheckboxGroup key={selectionBreadcrumbKey} value={checkBoxValues} onChange={onSelectNode.bind(null, selectionBreadcrumbKey)} flex={1}>
						<VStack gap='$2' flex={1}>
							{children}
						</VStack>
					</CheckboxGroup>
				</HStack>
			);
		case "single":
			const radioValues = selectedNodeKeys[selectionBreadcrumbKey] || null;
			return (
				<HStack flex={1}>
					<RadioGroup key={selectionBreadcrumbKey} value={radioValues} onChange={onSelectNode.bind(null, selectionBreadcrumbKey)} flex={1}>
						<VStack gap='$2' flex={1}>
							{children}
						</VStack>
					</RadioGroup>
				</HStack>
			);
		default:
			return children;
	}
});

const TreeNode = observer((props) => {
	console.log("TreeNode Render ..............");
	//console.log("Tree View", nodes);
	const {
		nodes,
		level,
		selectType = "none",
		expandedNodeKeys,
		selectedNodeKeys,
		parentId = 0,
		selectionBreadcrumbKey = 0,
		onClear,
		onDone,
		onNodePress,
		onSelectNode,
	} = props;

	const currentNodeChildList = nodes.map((node) => {
		if (node.nodeType === "leaf") {
			return <LeafNode key={node.id} {...props} node={node} />;
		} else {
			return <BranchNode key={node.id} {...props} node={node} />;
		}
	});

	return (
		<VStack gap='$2' flex={1}>
			<ChildrenWrapper
				selectionBreadcrumbKey={selectionBreadcrumbKey}
				selectType={selectType}
				children={currentNodeChildList}
				level={level}
				selectedNodeKeys={selectedNodeKeys}
				onSelectNode={onSelectNode}
				onNodePress={onNodePress}
			/>
		</VStack>
	);
});

class TreeView extends React.Component {
	expandedNodeKeys = {};
	selectedNodeKeys = {};
	showModal = false;

	constructor(props) {
		super(props);
		console.log("Tree View Create ..............");
		makeObservable(this, {
			expandedNodeKeys: observable,
			selectedNodeKeys: observable,
			showModal: observable,
			setInitialState: action,
			updateNodeKeyById: action,
			selectNode: action,
			clearNodeSelection: action,
			openModal: action,
			closeModal: action,
			toggleModal: action,
		});
		this.setInitialState();
	}

	setInitialState = (isReset = false) => {
		let defaultExpandedNodeKeys = { [this.props.activeTreeSelector]: true };
		console.log("getInitialState >>>>> initialActiveNode >> ", this.props.initialActiveNode);
		if (!isReset && this.props.initialActiveNode) {
			forEach(this.props.initialActiveNode.split("/"), (nodeId) => {
				defaultExpandedNodeKeys[nodeId] = true;
				console.log("getInitialState >>>>> for >> defaultExpandedNodeKeys >> ", defaultExpandedNodeKeys);
			});
		}
		console.log("getInitialState >>>>> defaultExpandedNodeKeys >> ", defaultExpandedNodeKeys);
		this.expandedNodeKeys = defaultExpandedNodeKeys;
		this.selectedNodeKeys = this.props.initialData || {};
		this.showModal = this.props.showTreeView;
	};

	resetState = () => {
		this.setInitialState(true);
	};

	hasChildrenNodes = (node) => node["children"] && node["children"].length > 0;

	isExpanded = (id) => {
		return this.expandedNodeKeys[id];
	};

	updateNodeKeyById = (id, expanded) => {
		this.expandedNodeKeys[id] = expanded;
	};

	collapseNode = (id) => this.updateNodeKeyById(id, false);

	expandNode = (id) => this.updateNodeKeyById(id, true);

	selectNode = (id, value) => {
		console.log(">>>>>>>>>>>>  selectNode ", id, value);
		this.selectedNodeKeys[id] = value;
	};

	clearNodeSelection = (id) => {
		//console.log(">>>>>>>>>>>>  clearNodeSelection id to be deleted", id);
		//console.log(">>>>>>>>>>>>  clearNodeSelection state ", this.state.selectedNodeKeys);
		delete this.selectedNodeKeys[id];
	};

	toggleCollapse = (id) => {
		//console.log(">>>>>>>>>>>>   toggleCollapse ", id);
		const method = this.isExpanded(id) ? "collapseNode" : "expandNode";
		this[method](id);
	};

	handleNodePressed = async ({ node, level }) => {
		let nodePressResult = true;
		if (node.type === "leaf") {
			nodePressResult = false;
		}
		console.log("handleNodePressed**********************************", nodePressResult);

		if (nodePressResult !== false && this.hasChildrenNodes(node)) {
			this.toggleCollapse(node["id"]);
		}
	};

	openModal = () => {
		this.showModal = true;
	};

	closeModal = () => {
		//this.setState({ showModal: false });
		//console.log("closeModal >>>>>>>>>>>>>>>>>", this.state.expandedNodeKeys);
		this.props.onCancel();
		this.resetState();
	};

	toggleModal = () => {
		this.showModal = !this.showModal;
	};

	saveModal = () => {
		this.props.onSave(this.selectedNodeKeys);
		this.resetState();
	};

	componentDidUpdate(prevProps) {
		//console.log("componentDidUpdate >>> ", this.state);
		const hasDataUpdated = prevProps.data !== this.props.data;
		const hasActiveTreeSelectorUpdated = prevProps.activeTreeSelector !== this.props.activeTreeSelector;
		if (hasDataUpdated || hasActiveTreeSelectorUpdated) {
			//console.log("componentDidUpdate >>> reset !!!!!!!!!!!!!!!!");
			this.setInitialState();
		}

		if (this.props.showTreeView !== prevProps.showTreeView) {
			this.toggleModal();
		}
	}

	render() {
		//console.log(this.props);
		console.log("Tree View Render ..............");
		const rootNode = this.props.data[0];

		return (
			<Modal isOpen={this.showModal} size='lg'>
				<ModalBackdrop />
				<ModalContent h='$4/5'>
					<ModalHeader>
						<Heading size='lg'>{this.props.data[0].name}</Heading>
						<ModalCloseButton onPress={this.closeModal}>
							<Icon as={CloseIcon} />
						</ModalCloseButton>
					</ModalHeader>
					<Divider />
					<ModalBody p='$0'>
						<Box w='$full' h='$full' py='$4'>
							<TreeNode
								key={`${rootNode.id}-children`}
								nodes={rootNode.children}
								level={1}
								selectType={rootNode.selectType}
								parentId={rootNode.id}
								selectionBreadcrumbKey={rootNode.id}
								expandedNodeKeys={this.expandedNodeKeys}
								selectedNodeKeys={this.selectedNodeKeys}
								onNodePress={this.handleNodePressed}
								onSelectNode={this.selectNode}
								onClear={this.clearNodeSelection}
								onDone={this.toggleCollapse}
							/>
						</Box>
					</ModalBody>
					<Divider />
					<ModalFooter justifyContent='center'>
						<Button w='$90%' variant='primary' onPress={this.saveModal}>
							<ButtonText>Confirm</ButtonText>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		);
	}
}

export default observer(TreeView);
