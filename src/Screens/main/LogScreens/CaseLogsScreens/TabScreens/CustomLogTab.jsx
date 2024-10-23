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
import { useEffect, useMemo, useRef, useState } from "react";
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
import { Pressable } from "@gluestack-ui/themed";

const CustomLogTab = () => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const navigation = useNavigation();
	const ref = useRef(null);

	// State declarations
	const [showModal, setShowModal] = useState(false);
	const [customCaseToBeDeleted, setCustomCaseToBeDeleted] = useState();
	const [showCustomCasesModal, setCustomCasesModal] = useState(false);
	const [showCustomLogsModal, setCustomLogsModal] = useState(false);
	const [filteredCustomLog, setFilteredCustomLog] = useState();
	const [filteredCustomLogid, setFilteredCustomLogid] = useState();
	const [filteredWholeCustomLog, setFilteredWholeCustomLog] = useState();
	const [cardsToMap, setCardsToMap] = useState([]);

	// Memoized values
	const customLogs = useMemo(() => {
		return [...store.CustomLogList];
	}, [store.CustomLogList]);

	const cardDetails = useMemo(() => {
		const cards = [...store.CustomCaseList];
		return orderBy(cards, ["updatedOn"], ["desc"]);
	}, [store.CustomCaseList]);

	// Effect for fetching custom case data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchCustomCase = store.fetchCustomCaseByUser(appStoreInstance.UserName);
				setQuery(fetchCustomCase);
				await fetchCustomCase;
			} catch (error) {
				console.error("Error fetching custom case:", error);
			}
		};

		if (isFocused) {
			fetchData();
		}
	}, [isFocused, store, setQuery]);

	// Effect for fetching custom log data
	useEffect(() => {
		const fetchCustomLogData = async () => {
			try {
				const fetchCustomLogData = store.fetchCustomLogByUser(appStoreInstance.UserName);
				setQuery(fetchCustomLogData);
				await fetchCustomLogData;
			} catch (error) {
				console.error("Error fetching custom log:", error);
			}
		};

		if (isFocused) {
			fetchCustomLogData();
		}
	}, [isFocused, store, setQuery]);

	// Effect for filtering cards based on selected custom log
	useEffect(() => {
		if (filteredCustomLogid) {
			const filteredCards = cardDetails.filter((card) => card.customLogIdReference === filteredCustomLogid);
			setCardsToMap(filteredCards);
		} else {
			setCardsToMap([]);
		}
	}, [filteredCustomLogid, cardDetails]);

	// Handler functions
	const handleOnAddCase = () => {
		setCustomCasesModal(true);
	};

	const handleOnAddingANewCase = (id) => {
		appStoreInstance.setSelectedCustomLogId(id);
		navigation.navigate("Create New Case For Custom", {
			fieldsToGetFrom: "Custom",
			id: id,
		});
	};

	const handleButtonPress = (id) => {
		navigation.navigate("Edit A Case", {
			id: id,
			edit: true,
			fieldsToGetFrom: "Custom",
		});
	};

	const handleOnPressEditCustomLogs = () => {
		setCustomLogsModal(true);
	};

	const handleEditCustomLog = (id) => {
		navigation.navigate("CustomLogFormScreenEdit", {
			id: id,
			edit: true,
		});
		setCustomLogsModal(false);
	};

	const handleDeleteLog = (card) => {
		console.log("customCaseToBeDeleted about to be deleted", card);
		setShowModal(true);
		setCustomCaseToBeDeleted(card);
		setCustomLogsModal(false);
	};

	const handleCreatingFirstCustomLog = () => {
		navigation.navigate("CustomLogFormScreenEdit");
	};

	const handleSelectCustomLogFilter = (customLog) => {
		setFilteredCustomLog(customLog.customName === filteredCustomLog ? undefined : customLog.customName);
		setFilteredCustomLogid(customLog.id === filteredCustomLogid ? undefined : customLog.id);
		setFilteredWholeCustomLog(customLog);
	};

	const handleOnConfirmDeleteLog = async () => {
		try {
			if (!customCaseToBeDeleted) return;

			const typename = customCaseToBeDeleted.__typename;
			const modifiedTypename = typename.charAt(0).toLowerCase() + typename.slice(1);
			const collectionName = modifiedTypename === "customLog" ? modifiedTypename : `${modifiedTypename}s`;

			setShowModal(false);

			if (typename === "CustomLog") {
				// Step 1: Get all related custom cases
				const relatedCases = store.CustomCaseList.filter((caseItem) => caseItem.customLogIdReference === customCaseToBeDeleted.id);
				const relatedCaseIds = relatedCases.map((caseItem) => caseItem.id);

				if (relatedCases.length > 0) {
					// Step 2: Remove all related cases from user
					const updateUserForCases = store.updateUser(appStoreInstance.UserId, {
						remove: {
							customCases: relatedCases.map((caseItem) => ({
								id: caseItem.id,
							})),
						},
					});

					setQuery(updateUserForCases);
					const casesRemovalResult = await updateUserForCases;

					if (casesRemovalResult) {
						// Step 3: Delete all related cases
						const deleteCustomCasesQuery = store.deleteCustomCase(relatedCaseIds);
						setQuery(deleteCustomCasesQuery);
						await deleteCustomCasesQuery;
					}
				}

				// Step 4: Remove custom log from user
				const updateUserQuery = store.updateUser(appStoreInstance.UserId, {
					remove: {
						[collectionName]: {
							id: customCaseToBeDeleted.id,
						},
					},
				});

				setQuery(updateUserQuery);
				const data = await updateUserQuery;

				if (data) {
					// Step 5: Delete the custom log itself
					const rootStoreAPIName = `delete${typename}`;
					const rootStoreAPIRef = store[rootStoreAPIName];

					if (!rootStoreAPIRef) {
						throw new Error(`API method ${rootStoreAPIName} not found in root store`);
					}

					const query = rootStoreAPIRef([customCaseToBeDeleted.id]);
					if (query) {
						setQuery(query);
						await query;

						// Reset filters since we're deleting the custom log
						setFilteredCustomLog(undefined);
						setFilteredCustomLogid(undefined);
						setFilteredWholeCustomLog(undefined);
						setCustomCaseToBeDeleted(null);
					}
				}
			} else {
				// Handle regular case deletion as before
				const updateUserQuery = store.updateUser(appStoreInstance.UserId, {
					remove: {
						[collectionName]: {
							id: customCaseToBeDeleted.id,
						},
					},
				});

				setQuery(updateUserQuery);
				const data = await updateUserQuery;

				if (data) {
					const rootStoreAPIName = `delete${typename}`;
					const rootStoreAPIRef = store[rootStoreAPIName];

					if (!rootStoreAPIRef) {
						throw new Error(`API method ${rootStoreAPIName} not found in root store`);
					}

					const query = rootStoreAPIRef([customCaseToBeDeleted.id]);
					if (query) {
						setQuery(query);
						setCustomCaseToBeDeleted(null);
						await query;

						if (customCaseToBeDeleted.id === filteredCustomLogid) {
							setFilteredCustomLog(undefined);
							setFilteredCustomLogid(undefined);
							setFilteredWholeCustomLog(undefined);
						}
					}
				}
			}
		} catch (error) {
			console.error("Error deleting log:", error);
		}
	};

	// Utility functions
	const formatNumber = (num) => {
		if (num < 10) return `00${num}`;
		if (num < 100) return `0${num}`;
		return `${num}`;
	};

	const CardToRender = ({ card, index }) => (
		<Card key={card.id || index} bg='#E6E3DB' elevation={4} borderWidth={1} variant='filled' m='$3' width='$100%' borderRadius='$2xl' p='$0'>
			{card.complete === false && <Box width={12} height={12} borderRadius='$full' backgroundColor='#CC3F0C' position='absolute' />}
			<VStack width='$100%' pb='$3'>
				<HStack width='$100%' pt='$3' pl='$5' pr='$1' justifyContent='space-between' alignItems='center'>
					<HStack space='sm' alignItems='center'>
						<Text fontSize={14} fontFamily='Inter' color='#000'>
							Case number :
						</Text>
						<Text fontSize={16} fontFamily='Inter_Bold' color='#000'>
							{formatNumber(cardsToMap.length - index)}
						</Text>
					</HStack>
					<HStack alignItems='center'>
						<Button bg='transparent' height={30} borderRadius='$full' size='xs' onPress={() => handleDeleteLog(card)} ref={ref}>
							<ButtonIcon as={Ionicons} size={20} name='trash' color='#367B71' />
						</Button>
						<Button bg='transparent' onPress={() => handleButtonPress(card?.id)} height={30} borderRadius='$full' size='xs'>
							<ButtonIcon as={Ionicons} size={20} name='create' color='#367B71' />
						</Button>
					</HStack>
				</HStack>
				<HStack width='$100%' pb='$2' pl='$5' pr='$1' space='sm'>
					<Text fontFamily='Inter_Bold' fontSize={12} color='#979797'>
						{card.createdOn && format(new Date(card.createdOn), "dd/MM/yyyy")}
					</Text>
				</HStack>
			</VStack>
		</Card>
	);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	console.log("THIS IS THE CARD DETAILS FOR CARDS OF CUSTOM LOGS", cardDetails);
	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box px='$4' pt={20} flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width={"$100%"} keyboardShouldPersistTaps='handled'>
					<VStack width={"$100%"} alignItems='center' paddingBottom={"$15%"}>
						{store.CustomLogList.length > 0 && (
							<ScrollView w='$full' horizontal={true}>
								<HStack alignItems='center' w='$100%' justifyContent='flex-start' space='sm'>
									<Button onPress={handleCreatingFirstCustomLog} px='$0' bg='$transparent'>
										<ButtonIcon as={Ionicons} size={35} name='add-circle-outline' color='#CC3F0C' />
									</Button>
									{customLogs.map((customLog, index) => {
										return (
											<Pressable
												key={customLog.id}
												onPress={handleSelectCustomLogFilter.bind(null, customLog)}
												borderRadius={16}
												borderWidth={1}
												borderColor='#1e1e1e'
												backgroundColor={filteredCustomLog === customLog.customName ? "#367B71" : "#E6E3DB"}
												elevation={4}
												h={31}
												px='$2'
												justifyContent='center'>
												<Text color={filteredCustomLog === customLog.customName ? "white" : "#367B71"} fontSize={12}>
													{customLog.customName}
												</Text>
											</Pressable>
										);
									})}
								</HStack>
							</ScrollView>
						)}
						{filteredCustomLog !== undefined ? (
							<HStack width={"$100%"} justifyContent='space-between'>
								<Box>
									<Button onPress={handleOnPressEditCustomLogs} size='sm' variant='link'>
										<HStack space='sm' alignItems='center'>
											<ButtonIcon as={Ionicons} size={15} name='ellipsis-vertical' color='#1E1E1E' />
										</HStack>
									</Button>
								</Box>
								<Box>
									<Button onPress={handleOnAddingANewCase.bind(null, filteredCustomLogid)} size='sm' variant='link'>
										<HStack space='sm' alignItems='center'>
											<ButtonIcon pl={5} as={Ionicons} size={15} name='add-circle' color='#367B71' />
											<ButtonText color='#000'>Add a new case</ButtonText>
										</HStack>
									</Button>
								</Box>
							</HStack>
						) : (
							filteredCustomLog === undefined &&
							cardDetails.length > 0 && (
								<Box pt='$2'>
									<Text>Please select a custom log </Text>
								</Box>
							)
						)}
						{cardDetails.length > 0 && filteredCustomLog !== undefined
							? cardsToMap.map((card, index) => {
									console.log("Cards that Are being mapped", card, cardsToMap.length);
									return <CardToRender card={card} index={index} />;
							  })
							: !store.CustomLogList[0] && (
									<Button
										onPress={handleCreatingFirstCustomLog}
										borderRadius={16}
										borderWidth={1}
										borderColor='#1e1e1e'
										bg='#E6E3DB'
										elevation={4}
										w='$100%'
										h={88}>
										<ButtonIcon w='$20%' as={Ionicons} size={35} name='add-circle' color='#CC3F0C' />
										<ButtonText color='#1e1e1e' w='$80%'>
											Create and customise your log entries here
										</ButtonText>
									</Button>
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
										{customCaseToBeDeleted?.__typename === "CustomLog"
											? "This custom log and its related cases will be deleted. Proceed deleting?"
											: "Are you sure you want to delete this log case?"}
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
						<Modal isOpen={showCustomCasesModal} onClose={() => setCustomCasesModal(false)} size='lg'>
							<ModalBackdrop />
							<ModalContent pb='$4'>
								<ModalHeader>
									<Heading size='lg'>Select a Custom Log</Heading>
									<ModalCloseButton>
										<Icon
											as={CloseIcon}
											size='md'
											className='stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900'
										/>
									</ModalCloseButton>
								</ModalHeader>
								<ModalBody pt='$2'>
									<ScrollView>
										<VStack space='md'>
											{customLogs.map((customlog, index) => {
												console.log("customlog, ", customlog);
												return (
													<Pressable
														key={customlog.id}
														onPress={handleOnAddingANewCase.bind(null, customlog.id)}
														bg='$backgroundLight100'
														borderColor='$borderLight300'
														borderWidth={1}
														borderRadius='$md'
														p='$3'
														_hover={{ bg: "$backgroundLight200" }}
														_pressed={{ bg: "$backgroundLight300" }}>
														<Text>{customlog.customName}</Text>
													</Pressable>
												);
											})}
										</VStack>
									</ScrollView>
								</ModalBody>
							</ModalContent>
						</Modal>
						<Modal isOpen={showCustomLogsModal} onClose={() => setCustomLogsModal(false)} size='lg'>
							<ModalBackdrop />
							<ModalContent pb='$4'>
								<ModalHeader>
									<Heading size='lg'>{filteredCustomLog}</Heading>
									<ModalCloseButton>
										<Icon
											as={CloseIcon}
											size='md'
											className='stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900'
										/>
									</ModalCloseButton>
								</ModalHeader>
								<ModalBody pt='$2'>
									<ScrollView>
										<VStack space='md'>
											<HStack width='$100%' pt='$3' pl='$5' pr='$1' justifyContent='space-between' alignItems='center'>
												<Button
													bg='transparent'
													onPress={handleEditCustomLog.bind(null, filteredCustomLogid)}
													height={30}
													borderRadius='$full'
													size='xs'
													alignItems='center'>
													<ButtonText pr='$4' color='#1E1E1E' fontSize='$md'>
														Edit
													</ButtonText>
													<ButtonIcon as={Ionicons} size={20} name='create' color='#367B71' />
												</Button>
												<Button
													bg='transparent'
													height={30}
													borderRadius='$full'
													size='xs'
													onPress={() => handleDeleteLog(filteredWholeCustomLog)}
													ref={ref}
													alignItems='center'>
													<ButtonText pr='$4' color='#1E1E1E' fontSize='$md'>
														Delete
													</ButtonText>
													<ButtonIcon as={Ionicons} size={20} name='trash' color='#367B71' />
												</Button>
											</HStack>
										</VStack>
									</ScrollView>
								</ModalBody>
							</ModalContent>
						</Modal>
					</VStack>
				</ScrollView>
			</Box>
		</Loader>
	);
};

export default observer(CustomLogTab);
