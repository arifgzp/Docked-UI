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
import { Pressable } from "@gluestack-ui/themed";

const AcademicLogTab = () => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const navigation = useNavigation();
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [academicLogToBeDeleted, setAcademicLogToBeDeleted] = useState();
	const [filteredAcademicLog, setFilteredAcademicLog] = useState("");
	const filteredKeys = ["Academic", "Publication", "Admin work"];

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
			return parentFollowedByFirstChildList[0];
		}
	};

	const LogbookCard = ({ card, config, onEdit, onDelete }) => {
		const renderField = (item, index) => {
			let value = card[item.value];

			if (item.isDate) {
				value = format(new Date(value), "dd/MM/yyyy");
			} else if (item.multipleSelectValues) {
				value = getMultipleSelectSingleLayerValues(card, item);
			} else if (item.parentFollowedByFirstChild) {
				value = getParentFollowedByFirstChild(card, item);
			}

			// Render the first two fields (typically Position and Date) differently
			if (index < 2) {
				console.log("item", item);
				return (
					<Text
						key={item.label}
						fontSize={item.isDate ? 12 : 16}
						fontWeight={item.isDate ? "bold" : "bold"}
						color={item.isDate ? "#979797" : "#0F0F10"}>
						{value || "--"}
					</Text>
				);
			} else if (index > 2) {
				return (
					<HStack key={item.label} space='sm' justifyContent='space-between'>
						<Text size='xs' color='#666'>
							{item.label}
						</Text>
						<Text textAlign='right' flex={-1} size='xs' fontWeight='bold'>
							{value || "--"}
						</Text>
					</HStack>
				);
			}
		};

		return (
			<Card bg='#E6E3DB' elevation={4} p='$0' py='$2' variant='filled' width='$96%' borderRadius='$3xl' borderWidth={1}>
				<VStack space='xs'>
					<VStack>
						<HStack px='$4' justifyContent='space-between' alignItems='center'>
							{config.slice(0, 1).map((item, index) => renderField(item, index))}
							<HStack alignItems='center' justifyContent='flex-end' space='lg'>
								<Button bg='transparent' size='md' className='rounded-full p-3.5' px='$0' onPress={() => onDelete(card)} borderRadius='$full'>
									<ButtonIcon as={Ionicons} name='trash' color='#CC3F0C' />
								</Button>
								<Button
									bg='transparent'
									size='md'
									className='rounded-full p-3.5'
									px='$0'
									onPress={() => onEdit(card?.id, card?.academicLogType)}
									borderRadius='$full'>
									<ButtonIcon as={Ionicons} name='create' color='#367B71' />
								</Button>
							</HStack>
						</HStack>
						<HStack px='$4' justifyContent='space-between' alignItems='center'>
							{config.slice(1, 2).map((item, index) => renderField(item, index))}
							{config.slice(2, 3).map((item, index) =>
								card[item.value] ? (
									<Box key={index} bg='#CC3F0C' px='$2' py='$1'>
										<Text fontFamily='Inter_Bold' fontSize={10} color='#FFF'>
											{card[item.value]}
										</Text>
									</Box>
								) : (
									<Box key={index}></Box>
								)
							)}
						</HStack>
					</VStack>
					<Box height={5} bg='rgba(151, 151, 151, 0.17)' width='$100%'></Box>
					<Box pb='$1' px='$4'>
						{config.slice(2).map((item, index) => renderField(item, index + 2))}
					</Box>
				</VStack>
			</Card>
		);
	};

	const getConfigForCard = (card) => {
		switch (card.__typename) {
			case "AcademicLog":
				return AcademicLogCardLogViewConfig;
			case "AdminWorkLog":
				return AdminWorkLogCardLogViewConfig;
			case "PublicationLog":
				return PublicationLogCardLogViewConfig;
			default:
				return [];
		}
	};

	let cardDetails = [];
	cardDetails.push(...store.AcademicLogList, ...store.AdminWorkLogList, ...store.PublicationLogList);
	cardDetails = orderBy(cardDetails, ["updatedOn"], ["desc"]);
	//TODO : optimize the performance using useMemo

	const filteredCardDetails = filteredAcademicLog
		? cardDetails.filter((card) => {
				switch (filteredAcademicLog) {
					case "Academic":
						return card.__typename === "AcademicLog";
					case "Publication":
						return card.__typename === "PublicationLog";
					case "Admin work":
						return card.__typename === "AdminWorkLog";
					default:
						return true;
				}
		  })
		: cardDetails;

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width='$100%' contentContainerStyle={{ paddingBottom: 80 }}>
					<VStack pl='$4' px='$1' space='md' py='$4'>
						<HStack alignItems='center' justifyContent='space-between'>
							<Text color='#979797' fontWeight='bold'>
								Summary
							</Text>
						</HStack>
						<HStack space='xs'>
							{filteredKeys.map((filteredItem) => (
								<Pressable
									key={filteredItem}
									onPress={() => setFilteredAcademicLog(filteredItem === filteredAcademicLog ? "" : filteredItem)}
									style={{
										backgroundColor: filteredAcademicLog === filteredItem ? "#367B71" : "transparent",
										borderColor: "#367B71",
										borderWidth: 1,
										borderRadius: 20,
										paddingHorizontal: 12,
										paddingVertical: 4,
									}}>
									<Text color={filteredAcademicLog === filteredItem ? "white" : "#367B71"} fontSize={12}>
										{filteredItem}
									</Text>
								</Pressable>
							))}
						</HStack>
					</VStack>
					<VStack space='sm' width='$100%' alignItems='center'>
						{filteredCardDetails.length > 0 ? (
							filteredCardDetails.map((card) => (
								<HStack key={card.id} width='$100%' alignItems='center'>
									<Box w='$50%' position='absolute' height='$60%' bg='#367B71'></Box>
									<Box pl='$4' width='$100%'>
										<LogbookCard card={card} config={getConfigForCard(card)} onEdit={handleButtonPress} onDelete={handleDeleteLog} />
									</Box>
								</HStack>
							))
						) : (
							<Box justifyContent='center' alignItems='center'>
								<Text>No entries found</Text>
							</Box>
						)}
					</VStack>
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
									Are you sure you want to delete this case log entry?
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
				</ScrollView>
			</Box>
		</Loader>
	);
};

export default observer(AcademicLogTab);
