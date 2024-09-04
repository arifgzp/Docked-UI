import React, { useEffect, useState } from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { Box, VStack, Text, Input, Button, ButtonText, ButtonIcon, HStack, InputField, ScrollView, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { Ionicons } from "@expo/vector-icons";
import { formatRFC3339 } from "date-fns";
import { useQuery } from "../../../../models";
import appStoreInstance from "../../../../stores/AppStore";
import Loader from "../../../../components/Loader";
import { Platform } from "react-native";
import IsReadyLoader from "../../../../components/IsReadyLoader";
import useIsReady from "../../../../hooks/useIsReady";

const ThesisLogFormScreen = ({ navigation, route }) => {
	const isReady = useIsReady();
	const { id = null, edit = false } = route?.params || {};
	console.log("id", id, "edit", edit);
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			thesisName: "",
			fields: [],
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: "fields",
	});

	const [thesisLogData, setThesisLogData] = useState({});

	const addField = () => {
		append({ label: "", value: "" });
	};

	const handleOnSave = async (formData) => {
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		console.log(formData);
		if (Array.isArray(formData.fields)) {
			formData.fields.forEach((field) => {
				field.createdOn = field.updatedOn = formatRFC3339(new Date());
			});
		}
		try {
			const query = store.updateUserThesisLog(appStoreInstance.UserId, { set: { thesisLog: formData } });
			setQuery(query);
			const data = await query;
			if (data) {
				console.log("Success ha brooooo");
				navigation.navigate("Logbook", { screen: "RootLogBook", params: { initialTabIndex: 2 } });
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
		if (dbData.fields && uiData.fields) {
			const dbFields = dbData.fields;
			const uiFields = uiData.fields;

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
			if (key !== "fields") {
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
		console.log("formData is being edited", formData);
		delete formData.id;
		delete formData.__typename;
		if (Array.isArray(formData.fields)) {
			formData.fields.forEach((field) => {
				delete field.__typename;
				delete field.id;
				field.updatedOn = formatRFC3339(new Date());
			});
		}
		formData.updatedOn = formatRFC3339(new Date());
		const dataToBeDeleted = findMissingValues(thesisLogData, formData);
		console.log("dataToBeDeleted", dataToBeDeleted);
		try {
			let updateInput = { set: formData };

			// Handle field removal
			if (dataToBeDeleted.fields && dataToBeDeleted.fields.length > 0) {
				updateInput.remove = {
					fields: dataToBeDeleted.fields.map((id) => ({ id })),
				};
			}

			const query = store.updateThesisLog(id, updateInput);
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
				logData = store.getThesisLogById(id);
				reset({ ...logData[0] });
				setThesisLogData(logData[0]);
			};
			fetchData();
			console.log("logData", logData[0]);
		}
	}, []);

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
								<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
									Thesis Name
								</Text>
								<Controller
									control={control}
									name='thesisName'
									render={({ field: { onChange, onBlur, value } }) => (
										<Input variant='outline' size='sm'>
											<InputField onBlur={onBlur} onChangeText={onChange} value={value} />
										</Input>
									)}
								/>
							</VStack>

							{fields.map((field, index) => (
								<Box px='$3' key={field.id}>
									<Box paddingBottom='$5' borderWidth={0.5} borderRadius={20}>
										<Button pr='$2' onPress={() => remove(index)} alignSelf='flex-end' size='sm' variant='link'>
											<ButtonIcon as={Ionicons} size={25} name='close-circle' color='#367B71' />
										</Button>
										<Box px='$5'>
											<VStack space='sm'>
												<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
													Label
												</Text>
												<Controller
													control={control}
													name={`fields.${index}.label`}
													render={({ field: { onChange, onBlur, value } }) => (
														<Input variant='outline' size='sm'>
															<InputField onBlur={onBlur} onChangeText={onChange} value={value} />
														</Input>
													)}
												/>
											</VStack>
											<VStack space='sm'>
												<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
													Value
												</Text>
												<Controller
													control={control}
													name={`fields.${index}.value`}
													render={({ field: { onChange, onBlur, value } }) => (
														<Input variant='outline' size='sm'>
															<InputField onBlur={onBlur} onChangeText={onChange} value={value} />
														</Input>
													)}
												/>
											</VStack>
										</Box>
									</Box>
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
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(ThesisLogFormScreen);
