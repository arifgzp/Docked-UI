import React, { useCallback, useEffect, useState } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import {
	Box,
	VStack,
	Text,
	Input,
	Button,
	ButtonText,
	ButtonIcon,
	HStack,
	InputField,
	ScrollView,
	KeyboardAvoidingView,
	InputSlot,
	InputIcon,
} from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { Ionicons } from "@expo/vector-icons";
import { formatRFC3339 } from "date-fns";
import { useQuery } from "../../../../models";
import appStoreInstance from "../../../../stores/AppStore";
import Loader from "../../../../components/Loader";
import { Platform } from "react-native";
import IsReadyLoader from "../../../../components/IsReadyLoader";
import useIsReady from "../../../../hooks/useIsReady";
import { CommonActions, useFocusEffect } from "@react-navigation/native";
import {
	Modal,
	ModalBackdrop,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	Icon,
	CloseIcon,
	Heading,
} from "@gluestack-ui/themed";

const CustomLogFormScreen = ({ navigation, route }) => {
	const isReady = useIsReady();
	const { id = null, edit = false } = route?.params || {};
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			customName: "",
			formLabels: [],
		},
		mode: "onBlur",
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "formLabels",
	});

	const [customLogData, setCustomLogData] = useState({});

	const addField = () => {
		append({ label: "" });
	};

	const [showChangeModal, setShowChangeModal] = useState(false);
	const [changes, setChanges] = useState({ added: [], removed: [] });

	const compareFields = (oldFields, newFields) => {
		const added = newFields.filter((newField) => !oldFields.some((oldField) => oldField.label === newField.label)).map((field) => field.label);

		const removed = oldFields.filter((oldField) => !newFields.some((newField) => newField.label === oldField.label)).map((field) => field.label);

		return { added, removed };
	};

	const handleOnSave = async (formData) => {
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		if (Array.isArray(formData.formLabels)) {
			formData.formLabels.forEach((field) => {
				field.createdOn = field.updatedOn = formatRFC3339(new Date());
			});
		}

		try {
			const query = store.updateUserCustomLog(appStoreInstance.UserId, { set: { customLog: formData } });
			setQuery(query);
			const data = await query;
			if (data) {
				navigation.navigate("Logbook", { screen: "RootLogBook", params: { initialTabIndex: 3 } });
			}
		} catch (error) {
			console.log(error);
		} finally {
			reset();
		}
	};

	function findMissingValues(dbData, uiData) {
		console.log("dbData", dbData, "uiData", uiData);
		let missingValues = {};

		// Handle the fields separately
		if (dbData.formLabels && uiData.formLabels) {
			const dbFields = dbData.formLabels;
			const uiFields = uiData.formLabels;

			// Convert dbFields object to array
			const dbFieldsArray = Object.values(dbFields);

			// Find fields that are in dbData but not in uiData
			const missingFields = dbFieldsArray.filter((dbField) => !uiFields.some((uiField) => uiField.id === dbField.id));

			if (missingFields.length > 0) {
				missingValues.fields = missingFields.map((field) => field.id);
			}
		}

		// Handle other top-level properties
		Object.keys(dbData).forEach((key) => {
			if (key !== "formLabels") {
				const dbValue = dbData[key];
				const uiValue = uiData[key];

				// Check if the value is an array of strings
				if (Array.isArray(dbValue) && dbValue.every((item) => typeof item === "string")) {
					// Find missing values that are in dbData but not in uiData
					const missing = dbValue.filter((item) => !uiValue.includes(item));

					// If there are missing values, add them to the result
					if (missing.length > 0) {
						missingValues[key] = missing;
					}
				}
			}
		});

		return missingValues;
	}

	const handleOnUpdate = async (formData) => {
		// Calculate changes first
		const fieldChanges = compareFields(customLogData.formLabels || [], formData.formLabels || []);

		setChanges(fieldChanges);

		// Only show modal if there are changes
		if (fieldChanges.added.length > 0 || fieldChanges.removed.length > 0) {
			setShowChangeModal(true);
			return; // Stop here and wait for modal confirmation
		}

		// If no changes, proceed with update
		await processUpdate(formData);
	};

	const processUpdate = async (formData) => {
		delete formData.id;
		delete formData.__typename;
		if (Array.isArray(formData.formLabels)) {
			formData.formLabels.forEach((field) => {
				delete field.__typename;
				delete field.id;
				field.updatedOn = formatRFC3339(new Date());
			});
		}
		formData.updatedOn = formatRFC3339(new Date());
		const dataToBeDeleted = findMissingValues(customLogData, formData);

		try {
			let updateInput = { set: formData };

			if (dataToBeDeleted.fields && dataToBeDeleted.fields.length > 0) {
				updateInput.remove = {
					formLabels: dataToBeDeleted.fields.map((id) => ({ id })),
				};
			}

			const query = store.updateCustomLog(id, updateInput);
			setQuery(query);
			const data = await query;
			if (data) {
				navigation.goBack();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (edit) {
			let logData = {};
			const fetchData = () => {
				logData = store.getCustomLogById(id);
				reset({ ...logData[0] });
				setCustomLogData(logData[0]);
			};
			fetchData();
		}
	}, []);

	useFocusEffect(
		useCallback(() => {
			return () => {
				navigation.dispatch((state) => {
					const routes = state.routes.filter((r) => r.key !== route.key);
					return CommonActions.reset({
						...state,
						routes,
						index: routes.length - 1,
					});
				});
			};
		}, [navigation, route.key])
	);

	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} py='$5' backgroundColor='$secondaryBackground'>
					<ScrollView keyboardShouldPersistTaps='handled'>
						<VStack space='lg'>
							<VStack space='sm' px='$5'>
								<Controller
									control={control}
									name='customName'
									rules={{ required: "Title is required" }}
									render={({ field: { onChange, onBlur, value } }) => (
										<>
											<Input borderColor={errors.customName ? "$error600" : "#0F0F10"} bg='#E6E3DB' variant='outline' size='sm'>
												<InputField onBlur={onBlur} placeholder='Title' onChangeText={onChange} value={value} />
											</Input>
											{errors.customName && (
												<Text fontSize='$xs' color='$error600'>
													{errors.customName.message}
												</Text>
											)}
										</>
									)}
								/>
							</VStack>

							{fields.map((field, index) => (
								<Box px='$5' key={field.id}>
									<VStack space='sm'>
										<Controller
											control={control}
											name={`formLabels.${index}.label`}
											rules={{ required: "Field label is required" }}
											render={({ field: { onChange, onBlur, value } }) => (
												<>
													<Input borderColor={errors.formLabels?.[index]?.label ? "$error600" : "#0F0F10"} bg='#E6E3DB' variant='outline' size='sm'>
														<InputField placeholder='Enter your new field' onBlur={onBlur} onChangeText={onChange} value={value} />
														<InputSlot pr='$3' onPress={() => remove(index)}>
															<InputIcon size={20} as={Ionicons} name='close-circle' color='#DE2E2E' />
														</InputSlot>
													</Input>
													{errors.formLabels?.[index]?.label && (
														<Text fontSize='$xs' color='$error600'>
															{errors.formLabels[index].label.message}
														</Text>
													)}
												</>
											)}
										/>
									</VStack>
								</Box>
							))}

							<Box px='$5'>
								<Button onPress={addField} alignSelf='flex-start' size='sm' variant='link'>
									<HStack space='sm' alignItems='center'>
										<ButtonIcon pl={5} as={Ionicons} size={15} name='add-circle' color='#367B71' />
										<ButtonText color='#000'>Add a new field</ButtonText>
									</HStack>
								</Button>
							</Box>
						</VStack>
					</ScrollView>
					<Box px='$5' pb='$5%' paddingTop={5} width='$100%'>
						<Button onPress={handleSubmit(edit ? handleOnUpdate : handleOnSave)} variant='primary'>
							<ButtonText>{edit ? "Update" : "Save"}</ButtonText>
						</Button>
					</Box>
				</Box>
				<Modal isOpen={showChangeModal} onClose={() => setShowChangeModal(false)} size='md'>
					<ModalBackdrop />
					<ModalContent>
						<ModalHeader>
							<Heading size='lg'>Confirm Changes</Heading>
							<ModalCloseButton>
								<Icon as={CloseIcon} />
							</ModalCloseButton>
						</ModalHeader>
						<ModalBody>
							<VStack space='md'>
								<Text>This changes will be reflected in all the cases created using this log</Text>
								{/* {changes.added.length > 0 && (
                  <VStack space="sm">
                    <Text color="$success700" fontWeight="$bold">
                      New Fields to be Added:
                    </Text>
                    {changes.added.map((field, index) => (
                      <Text key={index} pl="$2">
                        • {field}
                      </Text>
                    ))}
                  </VStack>
                )} */}

								{/* {changes.removed.length > 0 && (
									<VStack space='sm'>
										<Text color='$error700' fontWeight='$bold'>
											Fields to be Removed:
										</Text>
										{changes.removed.map((field, index) => (
											<Text key={index} pl='$2'>
												• {field}
											</Text>
										))}
									</VStack>
								)} */}
							</VStack>
						</ModalBody>
						<ModalFooter>
							<HStack w='$65%' justifyContent='space-between'>
								<Button size='sm' variant='secondary' onPress={() => setShowChangeModal(false)} borderWidth={1} borderColor='#1e1e1e'>
									<ButtonText>Cancel</ButtonText>
								</Button>
								<Button
									size='sm'
									variant='primary'
									onPress={() => {
										setShowChangeModal(false);
										processUpdate(control._formValues);
									}}
									borderWidth={1}
									borderColor='#1e1e1e'>
									<ButtonText>Confirm</ButtonText>
								</Button>
							</HStack>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(CustomLogFormScreen);
