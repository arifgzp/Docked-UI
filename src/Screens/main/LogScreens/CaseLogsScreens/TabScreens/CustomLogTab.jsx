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
import { Pressable } from "@gluestack-ui/themed";

const CustomLogTab = () => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const navigation = useNavigation();
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [customCaseToBeDeleted, setCustomCaseToBeDeleted] = useState();
	const [showCustomCasesModal, setCustomCasesModal] = useState(false);
	const [showCustomLogsModal, setCustomLogsModal] = useState(false);

	const handleOnAddCase = () => {
		//
		setCustomCasesModal(true);
	};

	const handleOnSelectCustomLog = (id) => {
		setCustomCasesModal(false);
		navigation.navigate("Create New Case", { fieldsToGetFrom: "Custom", id: id });
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchCustomCase = store.fetchCustomCaseByUser(appStoreInstance.UserName);
				setQuery(fetchCustomCase);
				await fetchCustomCase;
			} catch (error) {
				console.log(error);
			}
		};

		if (isFocused) {
			fetchData();
		}
	}, [isFocused]);

	useEffect(() => {
		const fetchCustomLogData = async () => {
			try {
				const fetchCustomLogData = store.fetchCustomLogByUser(appStoreInstance.UserName);
				setQuery(fetchCustomLogData);
				await fetchCustomLogData;
			} catch (error) {
				console.log(error);
			}
		};

		if (isFocused) {
			fetchCustomLogData();
		}
	}, [isFocused]);

	const handleButtonPress = (id) => {
		navigation.navigate("Edit A Case", { id: id, edit: true, fieldsToGetFrom: "Custom" });
		console.log("id for press", id);
	};

	const handleOnPressEditCustomLogs = () => {
		setCustomLogsModal(true);
	};

	const handleEditCustomLog = (id) => {
		navigation.navigate("CustomLogFormScreenEdit", { id: id, edit: true });
		setCustomLogsModal(false);
	};

	const handleDeleteLog = (card) => {
		console.log("what is this card", card);
		setShowModal(true);
		setCustomCaseToBeDeleted(card);
		setCustomLogsModal(false);
	};

	const handleOnConfirmDeleteLog = async () => {
		try {
			let typename = customCaseToBeDeleted.__typename;
			let modifiedTypename = typename.charAt(0).toLowerCase() + typename.slice(1);
			console.log("modifiedTypename", modifiedTypename);
			setShowModal(false);
			const updateUserQuery = store.updateUser(appStoreInstance.UserId, {
				remove: {
					[modifiedTypename === "customLog" ? modifiedTypename : `${modifiedTypename}s`]: {
						id: customCaseToBeDeleted.id,
					},
				},
			});
			setQuery(updateUserQuery);
			const data = await updateUserQuery;
			if (data) {
				const rootStoreAPIName = `delete${customCaseToBeDeleted.__typename}`;
				const rootStoreAPIRef = store[rootStoreAPIName];
				if (!rootStoreAPIRef) {
					const message = `please check rootStoreAPIRef. not found in root store trying to find=>message ${rootStoreAPIName}`;
					console.error(message);
					throw new Error(message);
				}
				let query = rootStoreAPIRef([customCaseToBeDeleted.id]);
				if (query) {
					console.log("Query from query delete with academicLogToBeDeleted ID", customCaseToBeDeleted.id, query);
					setQuery(query);
					setCustomCaseToBeDeleted(null);
					await query;
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const formatNumber = (num) => {
		if (num < 10) return `00${num}`;
		if (num < 100) return `0${num}`;
		return `${num}`;
	};

	const CardToRender = ({ config, card, index }) => {
		return (
			<Card key={card.id || index} bg='#E6E3DB' elevation={4} borderWidth={1} variant='filled' m='$3' width='$100%' borderRadius='$2xl' p='$0'>
				{card.complete === false && <Box width={12} height={12} borderRadius='$full' backgroundColor='#CC3F0C' position='absolute' />}
				<VStack width='$100%' pb='$3'>
					<HStack width='$100%' pt='$3' pl='$5' pr='$1' justifyContent='space-between' alignItems='center'>
						<HStack space='sm' alignItems='center'>
							<Text fontSize={14} fontFamily='Inter' color='#000'>
								Case number :
							</Text>
							<Text fontSize={16} fontFamily='Inter_Bold' color='#000'>
								{formatNumber(index + 1)}
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
	};

	let cardDetails = [];
	cardDetails.push(...store.CustomCaseList);
	cardDetails = orderBy(cardDetails, ["updatedOn"], ["desc"]);
	//TODO : optimize the performance using useMemo

	let customLogs = [];
	customLogs.push(...store.CustomLogList);

	console.log("Custom LOG LIST", customLogs);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	console.log("THIS IS THE CARD DETAILS FOR CARDS OF CUSTOM LOGS", cardDetails);
	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box px='$4' pt={20} flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width={"$100%"} keyboardShouldPersistTaps='handled'>
					<VStack width={"$100%"} alignItems='center' paddingBottom={"$15%"}>
						{/* <HStack width={"$100%"} justifyContent='space-between'>
							<Box>
								<Button onPress={handleOnPressEditCustomLogs} size='sm' variant='link'>
									<HStack space='sm' alignItems='center'>
										<ButtonIcon as={Ionicons} size={15} name='create' color='#367B71' />
										<ButtonText color='#000'>Edit Custom Logs</ButtonText>
									</HStack>
								</Button>
							</Box>
							<Box>
								<Button onPress={handleOnAddCase} size='sm' variant='link'>
									<HStack space='sm' alignItems='center'>
										<ButtonIcon pl={5} as={Ionicons} size={15} name='add-circle' color='#367B71' />
										<ButtonText color='#000'>Add a new case</ButtonText>
									</HStack>
								</Button>
							</Box>
						</HStack> */}
						{cardDetails.length > 0 ? (
							cardDetails.map((card, index) => {
								return <CardToRender card={card} index={index} />;
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
														onPress={handleOnSelectCustomLog.bind(null, customlog.id)}
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
									<Heading size='lg'>Custom Logs</Heading>
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
													<HStack width='$100%' pt='$3' pl='$5' pr='$1' justifyContent='space-between' alignItems='center'>
														<HStack space='sm'>
															<Text size='xs' fontFamily='Inter_Bold' color='#000'>
																{customlog.customName ? customlog.customName : "--"}
															</Text>
														</HStack>
														<HStack alignItems='center'>
															<Button
																bg='transparent'
																height={30}
																borderRadius='$full'
																size='xs'
																onPress={() => handleDeleteLog(customlog)}
																ref={ref}>
																<ButtonIcon as={Ionicons} size={20} name='trash' color='#367B71' />
															</Button>
															<Button
																bg='transparent'
																onPress={handleEditCustomLog.bind(null, customlog.id)}
																height={30}
																borderRadius='$full'
																size='xs'>
																<ButtonIcon as={Ionicons} size={20} name='create' color='#367B71' />
															</Button>
														</HStack>
													</HStack>
												);
											})}
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
