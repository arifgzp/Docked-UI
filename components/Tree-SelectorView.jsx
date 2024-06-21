import PropTypes from "prop-types";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { forEach, remove, get } from "lodash";
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

function noop() {}

const BranchNode = observer((props) => {
	const { nodeId, nodeName, level, expandedNodeKeys } = props;
	console.log("BranchNode Render .............. | ", nodeName);
	const isExpanded = expandedNodeKeys[nodeId];
	return (
		<HStack
			key={nodeId}
			gap='$2'
			style={
				level != 0
					? {
							marginLeft: 25 * level,
							paddingBottom: isExpanded ? 4 : 0,
					  }
					: { paddingBottom: isExpanded ? 4 : 0 }
			}>
			{isExpanded ? <Ionicons name='remove-circle-outline' size={20} color='#000' /> : <Ionicons name='add-circle-outline' size={20} color='#000' />}
			<Text>{nodeName}</Text>
		</HStack>
	);
});

const BranchNodeWrapper = observer((props) => {
	const { node, level, selectionBreadcrumbKey, expandedNodeKeys, onNodePress } = props;
	console.log("BranchNodeWrapper Render .............. | ", node.name);

	const nodeId = node["id"];
	const isExpanded = expandedNodeKeys[nodeId];
	const hasChildrenNodes = node["children"] && node["children"].length > 0;
	const shouldRenderLevel = hasChildrenNodes && isExpanded;

	return (
		<View key={nodeId}>
			<TouchableOpacity onPress={onNodePress.bind(null, { node, level })}>
				<BranchNode nodeId={nodeId} nodeName={node.name} level={level} expandedNodeKeys={expandedNodeKeys} />
			</TouchableOpacity>
			<VStack gap='$2'>
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
		</View>
	);
});

const LeafNode = observer((props) => {
	const { nodeId, nodeName, selectType, level } = props;
	console.log("LeafNode Render .............. | ", nodeName);

	switch (selectType) {
		case "multiple":
			return (
				<Checkbox
					style={{
						marginLeft: 25 * level,
					}}
					key={nodeId}
					value={nodeId}
					aria-label={nodeName}>
					<CheckboxIndicator mr='$2'>
						<CheckboxIcon as={CheckIcon} />
					</CheckboxIndicator>
					<CheckboxLabel>{nodeName}</CheckboxLabel>
				</Checkbox>
			);
		case "single":
			return (
				<Radio
					style={{
						marginLeft: 25 * level,
					}}
					key={nodeId}
					value={nodeId}
					aria-label={nodeName}>
					<RadioIndicator mr='$2'>
						<RadioIcon as={CircleIcon} />
					</RadioIndicator>
					<RadioLabel>{nodeName}</RadioLabel>
				</Radio>
			);

		default:
			return null;
	}
});

const LeafNodeWrapper = observer((props) => {
	const { selectedNodeKeys, selectionBreadcrumbKey, selectType, leafChildrenList, level, onSelectNode, onNodePress } = props;

	if (!leafChildrenList || leafChildrenList.length === 0) {
		return null;
	}

	console.log("LeafNodeWrapper Render ..............");

	switch (selectType) {
		case "multiple":
			const checkBoxValues = selectedNodeKeys[selectionBreadcrumbKey] || [];
			return (
				<CheckboxGroup key={selectionBreadcrumbKey} value={checkBoxValues} onChange={onSelectNode.bind(null, selectionBreadcrumbKey)}>
					<HStack space='lg'>
						<VStack gap='$2'>
							{leafChildrenList.map((node) => {
								return (
									<View key={node["id"]}>
										<TouchableOpacity onPress={onNodePress.bind(null, { node, level })}>
											<LeafNode nodeId={node.id} nodeName={node.name} selectType={selectType} level={level} />
										</TouchableOpacity>
									</View>
								);
							})}
						</VStack>
					</HStack>
				</CheckboxGroup>
			);
		case "single":
			const radioValues = selectedNodeKeys[selectionBreadcrumbKey] || null;
			return (
				<RadioGroup key={selectionBreadcrumbKey} value={radioValues} onChange={onSelectNode.bind(null, selectionBreadcrumbKey)}>
					<HStack space='lg'>
						<VStack gap='$2'>
							{leafChildrenList.map((node) => {
								return (
									<View key={node["id"]}>
										<TouchableOpacity onPress={onNodePress.bind(null, { node, level })}>
											<LeafNode nodeId={node.id} nodeName={node.name} selectType={selectType} level={level} />
										</TouchableOpacity>
									</View>
								);
							})}
						</VStack>
					</HStack>
				</RadioGroup>
			);
		default:
			return null;
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
	const currentNodeChildList = [...nodes];
	const leafChildrenList = remove(currentNodeChildList, (node) => node.nodeType === "leaf");

	const nodeList = currentNodeChildList.map((node) => {
		return <BranchNodeWrapper key={node.id} {...props} node={node} />;
	});

	//let selectWrapper = this.renderSelectWrapper({ selectionBreadcrumbKey, selectType, leafChildList, level });
	let selectLeafNodeWrapper = null;
	let leafActionButtonGroup = null;

	if (leafChildrenList && leafChildrenList.length > 0) {
		selectLeafNodeWrapper = (
			<LeafNodeWrapper
				selectionBreadcrumbKey={selectionBreadcrumbKey}
				selectType={selectType}
				leafChildrenList={leafChildrenList}
				level={level}
				selectedNodeKeys={selectedNodeKeys}
				onSelectNode={onSelectNode}
				onNodePress={onNodePress}
			/>
		);

		if (selectType === "multiple" || selectType === "single") {
			leafActionButtonGroup = (
				<ButtonGroup
					key={`${parentId}-action-button`}
					style={{
						marginLeft: 25 * level,
						marginTop: 10,
					}}
					space='md'>
					<Button
						bg='rgba(64, 224, 208, 0.1)'
						size='xs'
						borderWidth={1}
						borderColor='#357A71'
						borderRadius={10}
						onPress={onClear.bind(null, selectionBreadcrumbKey)}>
						<ButtonText color='#1e1e1e' size='xs' fontSize='$sm' fontWeight='$medium'>
							Clear
						</ButtonText>
					</Button>
					<Button size='xs' bg='#40E0D0' borderColor='#357A71' borderRadius={10} borderWidth={1} onPress={onDone.bind(null, parentId)}>
						<ButtonText color='#1e1e1e' size='xs' fontSize='$sm' fontWeight='$medium'>
							Done
						</ButtonText>
					</Button>
				</ButtonGroup>
			);
		}
	}

	return [nodeList, selectLeafNodeWrapper, leafActionButtonGroup];
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
		//console.log(">>>>>>>>>>>>  selectNode ", id, value);
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
						<HStack w='$full' h='$full' py='$4' justifyContent='flex-start' alignItems='flex-start'>
							<TreeNode
								nodes={this.props.data}
								level={0}
								expandedNodeKeys={this.expandedNodeKeys}
								selectedNodeKeys={this.selectedNodeKeys}
								onNodePress={this.handleNodePressed}
								onSelectNode={this.selectNode}
								onClear={this.clearNodeSelection}
								onDone={this.toggleCollapse}
							/>
						</HStack>
					</ModalBody>
					<Divider />
					<ModalFooter>
						<Button bg='rgba(64, 224, 208, 0.1)' borderWidth={1} borderColor='#357A71' borderRadius={10} mr='$3' onPress={this.closeModal}>
							<ButtonText color='#1e1e1e'>Cancel</ButtonText>
						</Button>
						<Button bg='#40E0D0' borderColor='#357A71' borderRadius={10} borderWidth={1} onPress={this.saveModal}>
							<ButtonText color='#1e1e1e'>Done</ButtonText>
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		);
	}
}

export default observer(TreeView);
