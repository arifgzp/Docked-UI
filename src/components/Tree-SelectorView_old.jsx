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

function noop() {}

class TreeView extends React.Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		showTreeView: PropTypes.bool.isRequired,
		onSave: PropTypes.func.isRequired,
		onCancel: PropTypes.func.isRequired,
		activeTreeSelector: PropTypes.string,
		initialData: PropTypes.object,
		initialActiveNode: PropTypes.string,
		renderNode: PropTypes.func,
		initialExpanded: PropTypes.bool,
		idKey: PropTypes.string,
		activeOpacityNode: PropTypes.number,
		childrenKey: PropTypes.string,
		onNodePress: PropTypes.func,
		onNodeLongPress: PropTypes.func,
		isNodeExpanded: PropTypes.func,
		shouldDisableTouchOnLeaf: PropTypes.func,
	};

	static defaultProps = {
		initialExpanded: false,
		idKey: "id",
		childrenKey: "children",
		activeOpacityNode: 0.2,
		onNodePress: noop,
		onNodeLongPress: noop,
		isNodeExpanded: noop,
		shouldDisableTouchOnLeaf: () => false,
	};

	constructor(props) {
		super(props);
		console.log("Tree View Create ..............");
		this.state = this.getInitialState();
	}

	getInitialState = (isReset = false) => {
		let defaultExpandedNodeKeys = { [this.props.activeTreeSelector]: true };
		console.log("getInitialState >>>>> initialActiveNode >> ", this.props.initialActiveNode);
		if (!isReset && this.props.initialActiveNode) {
			forEach(this.props.initialActiveNode.split("/"), (nodeId) => {
				defaultExpandedNodeKeys[nodeId] = true;
				console.log("getInitialState >>>>> for >> defaultExpandedNodeKeys >> ", defaultExpandedNodeKeys);
			});
		}
		console.log("getInitialState >>>>> defaultExpandedNodeKeys >> ", defaultExpandedNodeKeys);
		return {
			expandedNodeKeys: defaultExpandedNodeKeys,
			selectedNodeKeys: this.props.initialData || {},
			showModal: this.props.showTreeView,
		};
	};

	resetState = () => {
		this.setState(this.getInitialState(true));
	};

	componentDidUpdate(prevProps) {
		//console.log("componentDidUpdate >>> ", this.state);
		const hasDataUpdated = prevProps.data !== this.props.data;
		const hasIdKeyUpdated = prevProps.idKey !== this.props.idKey;
		const childrenKeyUpdated = prevProps.childrenKey !== this.props.childrenKey;

		if (hasDataUpdated || hasIdKeyUpdated || childrenKeyUpdated) {
			//console.log("componentDidUpdate >>> reset !!!!!!!!!!!!!!!!");
			this.setState(this.getInitialState());
		}

		if (this.props.showTreeView !== prevProps.showTreeView) {
			this.toggleModal();
		}
	}

	hasChildrenNodes = (node) => get(node, `${this.props.childrenKey}.length`, 0) > 0;

	isExpanded = (id) => {
		return this.state.expandedNodeKeys[id];
	};

	updateNodeKeyById = (id, expanded) => {
		return ({ expandedNodeKeys }) => ({
			expandedNodeKeys: Object.assign({}, expandedNodeKeys, { [id]: expanded }),
		});
	};

	collapseNode = (id) => this.setState(this.updateNodeKeyById(id, false));

	expandNode = (id) => this.setState(this.updateNodeKeyById(id, true));

	selectNode = (id, value) => {
		//console.log(">>>>>>>>>>>>  selectNode ", id, value);
		this.setState(({ selectedNodeKeys }) => ({
			selectedNodeKeys: {
				...selectedNodeKeys,
				[id]: value,
			},
		}));
	};

	clearNodeSelection = (id) => {
		//console.log(">>>>>>>>>>>>  clearNodeSelection id to be deleted", id);
		//console.log(">>>>>>>>>>>>  clearNodeSelection state ", this.state.selectedNodeKeys);
		this.setState(({ selectedNodeKeys }) => {
			const newSelectedNodeKeys = { ...selectedNodeKeys };
			delete newSelectedNodeKeys[id];
			return {
				selectedNodeKeys: newSelectedNodeKeys,
			};
		});
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
		//console.log("handleNodePressed**********************************", nodePressResult);

		if (nodePressResult !== false && this.hasChildrenNodes(node)) {
			this.toggleCollapse(node[this.props.idKey]);
		}
	};

	openModal = () => {
		this.setState({ showModal: true });
	};

	closeModal = () => {
		//this.setState({ showModal: false });
		//console.log("closeModal >>>>>>>>>>>>>>>>>", this.state.expandedNodeKeys);
		this.props.onCancel();
		this.resetState();
	};

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	saveModal = () => {
		this.props.onSave(this.state.selectedNodeKeys);
		this.resetState();
	};

	getNodeIndicator = (isExpanded, node) => {
		if (isExpanded) {
			return <Ionicons name='remove-circle-outline' size={20} color='#000' />;
		} else {
			return <Ionicons name='add-circle-outline' size={20} color='#000' />;
		}
	};

	renderNode = (props) => {
		const { node, level, isExpanded } = props;
		return (
			<HStack
				key={node.id}
				gap='$2'
				style={
					level != 0
						? {
								marginLeft: 25 * level,
								paddingBottom: isExpanded ? 4 : 0,
						  }
						: { paddingBottom: isExpanded ? 4 : 0 }
				}>
				{this.getNodeIndicator(isExpanded, node)}
				<Text>{node.name}</Text>
			</HStack>
		);
	};

	renderLeafNode = (props) => {
		const { node, selectType, level } = props;

		switch (selectType) {
			case "multiple":
				return (
					<Checkbox
						style={{
							marginLeft: 25 * level,
						}}
						key={node.id}
						value={node.id}
						aria-label={node.name}>
						<CheckboxIndicator mr='$2'>
							<CheckboxIcon as={CheckIcon} />
						</CheckboxIndicator>
						<CheckboxLabel>{node.name}</CheckboxLabel>
					</Checkbox>
				);
			case "single":
				return (
					<Radio
						style={{
							marginLeft: 25 * level,
						}}
						key={node.id}
						value={node.id}
						aria-label={node.name}>
						<RadioIndicator mr='$2'>
							<RadioIcon as={CircleIcon} />
						</RadioIndicator>
						<RadioLabel>{node.name}</RadioLabel>
					</Radio>
				);

			default:
				return null;
		}
	};

	renderSelectWrapper = (props) => {
		const { selectionBreadcrumbKey, selectType, leafChildList, level } = props;

		switch (selectType) {
			case "multiple":
				const checkBoxValues = this.state.selectedNodeKeys[selectionBreadcrumbKey] || [];
				return (
					<CheckboxGroup key={selectionBreadcrumbKey} value={checkBoxValues} onChange={this.selectNode.bind(this, selectionBreadcrumbKey)}>
						<HStack space='lg'>
							<VStack gap='$2'>{leafChildList}</VStack>
						</HStack>
					</CheckboxGroup>
				);
			case "single":
				const radioValues = this.state.selectedNodeKeys[selectionBreadcrumbKey] || null;
				return (
					<RadioGroup key={selectionBreadcrumbKey} value={radioValues} onChange={this.selectNode.bind(this, selectionBreadcrumbKey)}>
						<HStack space='lg'>
							<VStack gap='$2'>{leafChildList}</VStack>
						</HStack>
					</RadioGroup>
				);
			default:
				return null;
		}
	};

	Node = ({ nodes, level, selectType = "none", parentId = 0, selectionBreadcrumbKey = 0 }) => {
		const NodeComponent = this.Node;
		//console.log("Tree View", nodes);
		const currentNodeChildList = [...nodes];
		const leafChildrenList = remove(currentNodeChildList, (node) => node.nodeType === "leaf");

		const nodeList = currentNodeChildList.map((node) => {
			const nodeId = node[this.props.idKey];
			const isExpanded = this.isExpanded(nodeId);
			console.log("NodeComponent >>> nodeID : ", nodeId, " >> isExpanded ", isExpanded);
			const hasChildrenNodes = this.hasChildrenNodes(node);
			const shouldRenderLevel = hasChildrenNodes && isExpanded;
			/*console.log(
				"NodeComponent >>> shouldRenderLevel ",
				shouldRenderLevel,
				" | hasChildrenNodes >>",
				hasChildrenNodes,
				" | isExpanded >>",
				isExpanded
			);*/
			return (
				<View key={nodeId}>
					<TouchableOpacity
						activeOpacity={this.props.activeOpacityNode}
						disabled={this.props.shouldDisableTouchOnLeaf({ node, level })}
						onPress={() => this.handleNodePressed({ node, level })}
						onLongPress={() => this.props.onNodeLongPress({ node, level })}>
						{React.createElement(this.renderNode, {
							node,
							level,
							isExpanded,
							hasChildrenNodes,
						})}
					</TouchableOpacity>
					<VStack gap='$2'>
						{shouldRenderLevel && (
							<NodeComponent
								nodes={node[this.props.childrenKey]}
								level={level + 1}
								selectType={node.selectType}
								parentId={nodeId}
								selectionBreadcrumbKey={selectionBreadcrumbKey ? `${selectionBreadcrumbKey}/${nodeId}` : nodeId}
							/>
						)}
					</VStack>
				</View>
			);
		});

		const leafChildList = leafChildrenList.map((node) => {
			const isExpanded = false;
			const hasChildrenNodes = false;
			return (
				<View key={node[this.props.idKey]}>
					<TouchableOpacity
						activeOpacity={this.props.activeOpacityNode}
						disabled={this.props.shouldDisableTouchOnLeaf({ node, level })}
						onPress={() => this.handleNodePressed({ node, level })}
						onLongPress={() => this.props.onNodeLongPress({ node, level })}>
						{React.createElement(this.renderLeafNode, {
							node,
							level,
							isExpanded,
							hasChildrenNodes,
							selectType,
						})}
					</TouchableOpacity>
				</View>
			);
		});

		let selectWrapper = this.renderSelectWrapper({ selectionBreadcrumbKey, selectType, leafChildList, level });
		let selectWrapperActionButtonGroup = null;
		if (selectType === "multiple" || selectType === "single") {
			selectWrapperActionButtonGroup = (
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
						onPress={this.clearNodeSelection.bind(this, selectionBreadcrumbKey)}>
						<ButtonText color='#1e1e1e' size='xs' fontSize='$sm' fontWeight='$medium'>
							Clear
						</ButtonText>
					</Button>
					<Button size='xs' bg='#40E0D0' borderColor='#357A71' borderRadius={10} borderWidth={1} onPress={this.toggleCollapse.bind(this, parentId)}>
						<ButtonText color='#1e1e1e' size='xs' fontSize='$sm' fontWeight='$medium'>
							Done
						</ButtonText>
					</Button>
				</ButtonGroup>
			);
		}

		return [nodeList, selectWrapper, selectWrapperActionButtonGroup];
	};

	render() {
		//console.log(this.props);
		return (
			<Modal isOpen={this.state.showModal} size='lg'>
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
							<this.Node nodes={this.props.data} level={0} />
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

export default TreeView;
