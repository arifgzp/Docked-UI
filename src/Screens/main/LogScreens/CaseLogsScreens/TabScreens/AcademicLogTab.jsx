import { BadgeText, ButtonIcon, CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
	StatusBar,
	Input,
	HStack,
	VStack,
	FormControlLabel,
	FormControl,
	FormControlLabelText,
	InputField,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
	ModalCloseButton,
	ModalContent,
} from "@gluestack-ui/themed";
import { Modal } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";
import { ModalBody } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import useIsReady from "../../../../../hooks/useIsReady";
import { useQuery } from "../../../../../models";
import appStoreInstance from "../../../../../stores/AppStore";
import { forEach, map, compact, orderBy, intersection } from "lodash";
import Loader from "../../../../../components/Loader";
import { Card } from "@gluestack-ui/themed";
import { Badge } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { format } from "date-fns";
import { ScrollView } from "@gluestack-ui/themed";
import IsReadyLoader from "../../../../../components/IsReadyLoader";
import {
	AcademicLogCardLogViewConfig,
	AdminWorkLogCardLogViewConfig,
	PublicationLogCardLogViewConfig,
} from "../../../../../data/CardViewConfig/CaseLogCardViewConfig";
import AcademicLogSpecialOptions from "../../../../../data/entity/Academic/AcademicLogSpecialOptions";

const AcademicLogTab = () => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const navigation = useNavigation();
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [academicLogToBeDeleted, setAcademicLogToBeDeleted] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchAcademicLog = store.fetchAcademicLogByUser(appStoreInstance.UserName);
				setQuery(fetchAcademicLog);
				await fetchAcademicLog;

				const fetchPublicationLog = store.fetchPublicationLogByUser(appStoreInstance.UserName);
				setQuery(fetchPublicationLog);
				await fetchPublicationLog;

				const fetchAdminWorkLog = store.fetchAdminWorkLogByUser(appStoreInstance.UserName);
				setQuery(fetchAdminWorkLog);
				await fetchAdminWorkLog;

				// Updating the cardDetails state with fetched data
				// let updatedCardDetails = [];
				// updatedCardDetails.push(...store.AcademicLogList, ...store.AdminWorkLogList, ...store.PublicationLogList);
				// updatedCardDetails = orderBy(updatedCardDetails, ["updatedOn"], ["desc"]);
				// setCardDetails(updatedCardDetails);
				// console.log("cardDetails is on the Academic Tab", updatedCardDetails);
			} catch (error) {
				console.log(error);
			}
		};

		if (isFocused) {
			fetchData();
		}
	}, [isFocused]);

	const handleButtonPress = (id, academicLogType) => {
		console.log("this is id", id, "this is caseType", academicLogType);
		console.log("Navigating to AcademicLogEditScreen Log!!!!!!!!!!");
		navigation.navigate("AcademicLogEditScreen", { id: id, academicLogType: academicLogType, edit: true, AcademicLogToGet: academicLogType });
		console.log("Navigating to AcademicLogEditScreen Log");
	};

	const handleDeleteLog = (card) => {
		console.log("what is this card", card);
		setShowModal(true);
		setAcademicLogToBeDeleted(card);
	};

	const handleOnConfirmDeleteLog = async () => {
		try {
			let typename = academicLogToBeDeleted.__typename;
			let modifiedTypename = typename.charAt(0).toLowerCase() + typename.slice(1);
			console.log("modifiedTypename", modifiedTypename);
			setShowModal(false);
			const updateUserQuery = store.updateUser(appStoreInstance.UserId, { remove: { [modifiedTypename]: { id: academicLogToBeDeleted.id } } });
			setQuery(updateUserQuery);
			const data = await updateUserQuery;
			if (data) {
				const rootStoreAPIName = `delete${academicLogToBeDeleted.__typename}`;
				const rootStoreAPIRef = store[rootStoreAPIName];
				if (!rootStoreAPIRef) {
					const message = `please check rootStoreAPIRef. not found in root store trying to find=>message ${rootStoreAPIName}`;
					console.error(message);
					throw new Error(message);
				}
				let query = rootStoreAPIRef([academicLogToBeDeleted.id]);
				if (query) {
					console.log("Query from query delete with academicLogToBeDeleted ID", academicLogToBeDeleted.id, query);
					setQuery(query);
					setAcademicLogToBeDeleted(null);
					await query;
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const configMapping = {
		AcademicLog: AcademicLogCardLogViewConfig,
		PublicationLog: PublicationLogCardLogViewConfig,
		AdminWorkLog: AdminWorkLogCardLogViewConfig,
	};

	const configMappingForDataStrcuture = {
		AcademicLog: AcademicLogSpecialOptions,
		// Add more mappings as needed
		// caseTypeName: CorrespondingConfigFile,
	};

	const getTreeNodeLabel = (key, configData) => {
		let label = key;
		forEach(configData, (config) => {
			if (config.id == key) {
				label = config.name;
				//console.log("!!!!! Match Found ", label);
				return false;
			} else if (config.children) {
				label = getTreeNodeLabel(key, config.children);
				if (label != key) {
					return false;
				}
			}
		});
		//console.log("Finakl LAbel >>>>> ", label);
		return label;
	};

	const getMultipleSelectSingleLayerValues = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodes = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
				})
			);

			const replacedNodes = selectedNodes.map((node) => node.replace("#V#", ": "));
			return replacedNodes.join(", ");
		}
	};

	const getParentFollowedByFirstChild = (caseData, item) => {
		const config = configMappingForDataStrcuture[caseData.__typename];
		console.log("config", config);

		if (!config) {
			throw new Error(`Configuration for caseType "${caseData.__typename}" not found.`);
		}

		const categoryConfig = config[item.value];

		if (caseData[item.value] && caseData[item.value].length > 0) {
			const selectedNodesChild = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
				})
			);

			const selectedNodesParent = compact(
				map(caseData[item.value], (selector) => {
					const treeLevels = selector.split("/");
					if (treeLevels.length > 2) {
						return getTreeNodeLabel(treeLevels[treeLevels.length - 2], categoryConfig);
					} else {
						return getTreeNodeLabel(treeLevels[treeLevels.length - 1], categoryConfig);
					}
				})
			);

			const replacedNodesForChild = selectedNodesChild.map((node) => node.replace("#V#", ": "));
			const replacedNodesForParent = selectedNodesParent.map((node) => node.replace("#V#", ": "));
			const parentFollowedByFirstChildList = replacedNodesForParent.map((parentNode, index) => {
				if (parentNode === replacedNodesForChild[index]) {
					return `${parentNode}`;
				} else {
					return `${parentNode}: ${replacedNodesForChild[index]}`;
				}
			});
			console.log("parentFollowedByFirstChildListparentFollowedByFirstChildList", parentFollowedByFirstChildList);
			return parentFollowedByFirstChildList.join(", ");
		}
	};

	const CardToRender = ({ config, card, index }) => {
		return (
			<Card key={card.id || index} variant='filled' m='$3' width='$100%' borderRadius='$3xl' p='$0'>
				{card.complete === false && <Box width={12} height={12} borderRadius='$full' backgroundColor='#CC3F0C' position='absolute' />}
				<VStack width='$100%' space='xs' pb='$3'>
					<HStack width='$100%' pt='$3' pl='$5' pr='$1' justifyContent='space-between' alignItems='center'>
						<VStack>
							<HStack space='sm'>
								<Text size='xs' fontFamily='Inter_Bold' color='#000'>
									Date:
								</Text>
								<Text size='xs' fontFamily='Inter_Bold' color='#000'>
									{card.date ? format(new Date(card.date), "d/MM/yyyy") : "--"}
								</Text>
							</HStack>
						</VStack>
						<HStack alignItems='center'>
							<Button bg='transparent' height={30} borderRadius='$full' size='xs' onPress={() => handleDeleteLog(card)} ref={ref}>
								<ButtonIcon as={Ionicons} size={20} name='trash' color='#367B71' />
							</Button>
							<Button bg='transparent' onPress={() => handleButtonPress(card?.id, card?.academicLogType)} height={30} borderRadius='$full' size='xs'>
								<ButtonIcon as={Ionicons} size={20} name='create' color='#367B71' />
							</Button>
						</HStack>
					</HStack>
					{config.map((item, index) => (
						<HStack key={index} pr='$3' pl='$5' space='sm'>
							<Text size='xs'>{item.label}:</Text>
							{item.parentFollowedByFirstChild ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{getParentFollowedByFirstChild(card, item) || "--"}
								</Text>
							) : item.multipleSelectValues ? (
								<Text flex={1} size='xs' fontFamily='Inter_Bold'>
									{getMultipleSelectSingleLayerValues(card, item) || "--"}
								</Text>
							) : (
								<Text size='xs' fontFamily='Inter_Bold'>
									{item.value === "date" ? format(new Date(card[item.value]), "d/MM/yyyy") : card[item.value] || "--"}
								</Text>
							)}
						</HStack>
					))}
					<HStack key={index} pt='$2' pr='$3' pl='$5' space='sm' justifyContent='flex-end'>
						<Badge size='sm' variant='outline' action='muted'>
							<BadgeText>{card.academicLogType}</BadgeText>
						</Badge>
					</HStack>
				</VStack>
			</Card>
		);
	};

	let cardDetails = [];
	cardDetails.push(...store.AcademicLogList, ...store.AdminWorkLogList, ...store.PublicationLogList);
	cardDetails = orderBy(cardDetails, ["updatedOn"], ["desc"]);
	//TODO : optimize the performance using useMemo

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box pt={20} flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width={"$100%"} keyboardShouldPersistTaps='handled'>
					<VStack width={"$100%"} alignItems='center' paddingBottom={"$15%"}>
						{cardDetails.length > 0 ? (
							cardDetails.map((card, index) => {
								const config = configMapping[card.__typename] || [];
								return <CardToRender config={config} card={card} index={index} />;
							})
						) : (
							<Box justifyContent='center' alignItems='center'>
								<Text>No Cases found</Text>
							</Box>
						)}
						<Modal
							isOpen={showModal}
							onClose={() => {
								setShowModal(false);
							}}
							finalFocusRef={ref}
							size='md'>
							<ModalBackdrop />
							<ModalContent>
								<ModalHeader>
									<Heading color='#CC3F0C' size='md' className='text-typography-950'>
										Delete!!!
									</Heading>
									<ModalCloseButton>
										<Icon
											as={CloseIcon}
											size='md'
											className='stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900'
										/>
									</ModalCloseButton>
								</ModalHeader>
								<ModalBody>
									<Text size='sm' className='text-typography-500'>
										Are you sure you want to delete this log entry?
									</Text>
								</ModalBody>
								<ModalFooter>
									<HStack w='$50%' justifyContent='space-between'>
										<Button
											size='sm'
											variant='secondary'
											onPress={() => {
												setShowModal(false);
											}}>
											<ButtonText>No</ButtonText>
										</Button>
										<Button size='sm' variant='primary' bg='#CC3F0C' onPress={handleOnConfirmDeleteLog}>
											<ButtonText>Yes</ButtonText>
										</Button>
									</HStack>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</VStack>
				</ScrollView>
			</Box>
		</Loader>
	);
};

export default observer(AcademicLogTab);
