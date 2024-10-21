import React, { useEffect, useState } from "react";
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
	Textarea,
	TextareaInput,
} from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { Ionicons } from "@expo/vector-icons";
import { formatRFC3339 } from "date-fns";
import { Platform } from "react-native";
import useIsReady from "../../../hooks/useIsReady";
import { useQuery } from "../../../models";
import IsReadyLoader from "../../../components/IsReadyLoader";
import Loader from "../../../components/Loader";
import appStoreInstance from "../../../stores/AppStore";

const CreateNewCase = ({ navigation, route }) => {
	const isReady = useIsReady();
	const { id = null, edit = false } = route?.params || {};
	console.log("id", id, "edit", edit, "fields to get from", route?.params?.fieldsToGetFrom);
	const CaseHolder = route?.params?.fieldsToGetFrom;
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [fieldsFromThesisOrCustom, setFieldsFromThesisOrCustom] = useState([]);
	const [caseNameFromThesisOrCustom, setCaseNameFromThesisOrCustom] = useState("");

	const { control, handleSubmit, reset, setValue } = useForm({
		defaultValues: {
			caseName: "",
			thesisFields: [],
			customFields: [],
		},
	});

	const { fields: thesisFields } = useFieldArray({
		control,
		name: "thesisFields",
	});

	const {
		fields: customFields,
		append,
		remove,
	} = useFieldArray({
		control,
		name: "customFields",
	});

	const [caseData, setCaseData] = useState({});

	const addField = () => {
		append({ label: "", value: "" });
	};

	const handleOnSave = async (formData) => {
		const combinedFields = [...formData.thesisFields, ...formData.customFields];

		const dataToSave = {
			caseName: formData.caseName,
			fields: combinedFields,
			createdOn: formatRFC3339(new Date()),
			updatedOn: formatRFC3339(new Date()),
		};
		if (Array.isArray(dataToSave.fields)) {
			dataToSave.fields.forEach((field) => {
				field.createdOn = field.updatedOn = formatRFC3339(new Date());
			});
		}
		console.log("Form Data When being created", dataToSave);
		let queryToRun;
		let caseToUpdate;

		switch (CaseHolder) {
			case "Thesis":
				queryToRun = "updateUserThesisCase";
				caseToUpdate = "thesisCases";
				break;

			case "Custom":
				queryToRun = "updateUserCustomCase";
				caseToUpdate = "customCases";
				break;

			default:
				break;
		}

		try {
			const query = store[queryToRun](appStoreInstance.UserId, { set: { [caseToUpdate]: dataToSave } });
			setQuery(query);
			const data = await query;
			if (data) {
				console.log("Success ha brooooo");
				navigation.goBack();
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

		if (dbData.fields && uiData.fields) {
			const dbFields = dbData.fields;
			const uiFields = uiData.fields;
			const dbFieldsArray = Object.values(dbFields);
			const missingFields = dbFieldsArray.filter((dbField) => !uiFields.some((uiField) => uiField.id === dbField.id));
			if (missingFields.length > 0) {
				missingValues.fields = missingFields.map((field) => field.id);
			}
		}

		Object.keys(dbData).forEach((key) => {
			if (key !== "fields") {
				const dbValue = dbData[key];
				const uiValue = uiData[key];
				if (Array.isArray(dbValue) && dbValue.every((item) => typeof item === "string")) {
					const missing = dbValue.filter((item) => !uiValue.includes(item));
					if (missing.length > 0) {
						missingValues[key] = missing;
					}
				}
			}
		});

		return missingValues;
	}

	const handleOnUpdate = async (formData) => {
		const combinedFields = [...formData.thesisFields, ...formData.customFields];
		if (Array.isArray(combinedFields)) {
			combinedFields.forEach((field) => {
				delete field.__typename;
				delete field.id;
				field.updatedOn = formatRFC3339(new Date());
			});
		}
		const dataToUpdate = {
			caseName: formData.caseName,
			fields: combinedFields,
			updatedOn: formatRFC3339(new Date()),
		};
		console.log("formData is being edited", dataToUpdate);
		delete dataToUpdate.id;
		delete dataToUpdate.__typename;
		const dataToBeDeleted = findMissingValues(caseData, dataToUpdate);
		console.log("dataToBeDeleted", dataToBeDeleted);
		let queryToRun;
		let caseToUpdate;

		switch (CaseHolder) {
			case "Thesis":
				queryToRun = "updateThesisCase";
				break;

			case "Custom":
				queryToRun = "updateCustomCase";

			default:
				break;
		}

		try {
			let updateInput = { set: dataToUpdate };

			if (dataToBeDeleted.fields && dataToBeDeleted.fields.length > 0) {
				updateInput.remove = {
					fields: dataToBeDeleted.fields.map((id) => ({ id })),
				};
			}
			console.log("updateInput updateInput", updateInput);
			const query = store[queryToRun](id, updateInput);
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
			const fetchData = async () => {
				let logData;
				if (CaseHolder === "Thesis") {
					logData = store.getThesisCaseListById(id);
				} else if (CaseHolder === "Custom") {
					logData = store.getCustomCaseListById(id);
				}

				if (logData && logData.length > 0) {
					console.log("log data", logData[0]);
					const { caseName, fields } = logData[0];
					reset({
						caseName,
						thesisFields: fields.filter((f) => !f.isCustom),
						customFields: fields.filter((f) => f.isCustom),
					});
					setCaseData(logData[0]);
				} else {
					console.error("No data found for the given id");
				}
			};

			fetchData();
		}
	}, [edit, id, CaseHolder, store, reset, setCaseData]);

	useEffect(() => {
		const fetchData = async () => {
			if (route?.params?.fieldsToGetFrom == "Thesis") {
				const userQuery = store.fetchThesisLogByUser(appStoreInstance.UserName);
				setQuery(userQuery);
				const finishFetchingUserProfile = await userQuery;
				if (finishFetchingUserProfile) {
					const fetchProfileData = finishFetchingUserProfile.queryUser[0];
					console.log("fetchProfileData Thesis", fetchProfileData);
					console.log("fetchProfileData.thesisLog.formLabels", fetchProfileData.thesisLog[0].formLabels);
					setCaseNameFromThesisOrCustom(fetchProfileData.thesisLog[0].thesisName);
					setFieldsFromThesisOrCustom(fetchProfileData.thesisLog[0].formLabels);

					setValue("caseName", fetchProfileData.thesisLog[0].thesisName);
					setValue(
						"thesisFields",
						fetchProfileData.thesisLog[0].formLabels.map((field) => ({ label: field.label, value: "" }))
					);
				}
			} else if (route?.params?.fieldsToGetFrom == "Custom") {
				let customLog;
				customLog = store.getCustomLogById(id);

				console.log("well here is your custom log", customLog);

				setCaseNameFromThesisOrCustom(customLog[0].customName);
				setFieldsFromThesisOrCustom(customLog[0].formLabels);
				setValue("caseName", customLog[0].customName);
				setValue(
					"thesisFields",
					customLog[0].formLabels.map((field) => ({ label: field.label, value: "" }))
				);
			}
		};
		if (!edit) {
			fetchData();
		}
	}, []);

	console.log("here is your,", fieldsFromThesisOrCustom, caseNameFromThesisOrCustom);

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
									Title
								</Text>
								<Controller
									control={control}
									name='caseName'
									render={({ field: { onChange, value } }) => (
										<Textarea variant='outline' size='sm'>
											<TextareaInput value={value} onChangeText={onChange} />
										</Textarea>
									)}
								/>
							</VStack>

							{thesisFields.map((field, index) => (
								<VStack key={field.id} justifyContent='flex-end' width='$100%' gap='$2' px='$5'>
									<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
										{field.label}
									</Text>
									<Box alignItems='center'>
										<Controller
											control={control}
											name={`thesisFields.${index}.value`}
											render={({ field: { onChange, value } }) => (
												<Input variant='outline' size='sm'>
													<InputField keyboardType='default' onChangeText={onChange} value={value} returnKeyType='next' blurOnSubmit={false} />
												</Input>
											)}
										/>
									</Box>
								</VStack>
							))}

							{customFields.map((field, index) => (
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
													name={`customFields.${index}.label`}
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
													name={`customFields.${index}.value`}
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

export default observer(CreateNewCase);
