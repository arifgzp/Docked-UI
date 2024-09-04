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

const ThesisLogTab = () => {
	const isReady = useIsReady();
	const isFocused = useIsFocused();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const navigation = useNavigation();
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	const [thesisLogToBeDeleted, setThesisLogToBeDeleted] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchThesisLog = store.fetchThesisLogByUser(appStoreInstance.UserName);
				setQuery(fetchThesisLog);
				await fetchThesisLog;
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

	const handleButtonPress = (id) => {
		navigation.navigate("ThesisLogFormScreenEdit", { id: id, edit: true });
		console.log("Navigating to AcademicLogEditScreen Log");
	};

	const handleDeleteLog = (card) => {
		console.log("what is this card", card);
		setShowModal(true);
		setThesisLogToBeDeleted(card);
	};

	const handleOnConfirmDeleteLog = async () => {
		try {
			let typename = thesisLogToBeDeleted.__typename;
			let modifiedTypename = typename.charAt(0).toLowerCase() + typename.slice(1);
			console.log("modifiedTypename", modifiedTypename);
			setShowModal(false);
			const updateUserQuery = store.updateUser(appStoreInstance.UserId, { remove: { [modifiedTypename]: { id: thesisLogToBeDeleted.id } } });
			setQuery(updateUserQuery);
			const data = await updateUserQuery;
			if (data) {
				const rootStoreAPIName = `delete${thesisLogToBeDeleted.__typename}`;
				const rootStoreAPIRef = store[rootStoreAPIName];
				if (!rootStoreAPIRef) {
					const message = `please check rootStoreAPIRef. not found in root store trying to find=>message ${rootStoreAPIName}`;
					console.error(message);
					throw new Error(message);
				}
				let query = rootStoreAPIRef([thesisLogToBeDeleted.id]);
				if (query) {
					console.log("Query from query delete with academicLogToBeDeleted ID", thesisLogToBeDeleted.id, query);
					setQuery(query);
					setThesisLogToBeDeleted(null);
					await query;
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const CardToRender = ({ config, card, index }) => {
		return (
			<Card key={card.id || index} variant='filled' m='$3' width='$100%' borderRadius='$3xl' p='$0'>
				{card.complete === false && <Box width={12} height={12} borderRadius='$full' backgroundColor='#CC3F0C' position='absolute' />}
				<VStack width='$100%' space='xs' pb='$3'>
					<HStack width='$100%' pt='$3' pl='$5' pr='$1' justifyContent='space-between' alignItems='center'>
						<HStack space='sm'>
							<Text size='xs' fontFamily='Inter_Bold' color='#000'>
								Thesis Name:
							</Text>
							<Text size='xs' fontFamily='Inter_Bold' color='#000'>
								{card.thesisName ? card.thesisName : "--"}
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
					{card.fields.map((field, index) => {
						return (
							<HStack width='$100%' pt='$3' pl='$5' pr='$1' space='sm'>
								<Text size='xs' fontFamily='Inter_Bold' color='#000'>
									{field.label ? field.label : "--"}:
								</Text>
								<Text size='xs' fontFamily='Inter_Bold' color='#000'>
									{field.value ? field.value : "--"}
								</Text>
							</HStack>
						);
					})}
				</VStack>
			</Card>
		);
	};

	let cardDetails = [];
	cardDetails.push(...store.ThesisLogList);
	cardDetails = orderBy(cardDetails, ["updatedOn"], ["desc"]);
	//TODO : optimize the performance using useMemo

	if (!isReady) {
		return <IsReadyLoader />;
	}

	console.log("THIS IS THE CARD DETAILS FOR CARDS", cardDetails);
	return (
		<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
			<Box pt={20} flex={1} backgroundColor='$primaryBackground' alignItems='center'>
				<ScrollView width={"$100%"} keyboardShouldPersistTaps='handled'>
					<VStack width={"$100%"} alignItems='center' paddingBottom={"$15%"}>
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
					</VStack>
				</ScrollView>
			</Box>
		</Loader>
	);
};

export default observer(ThesisLogTab);
