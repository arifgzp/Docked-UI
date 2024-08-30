import { CheckIcon, CheckboxGroup, CheckboxIndicator, KeyboardAvoidingView } from "@gluestack-ui/themed";
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
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormComponent from "../../../../components/FormComponents/FormComponent";
import { ScrollView } from "@gluestack-ui/themed";
import { Controller, useForm } from "react-hook-form";
import { formatRFC3339 } from "date-fns";
import { AcademicLogConfigTextAndSingleSelectOptions, specialAcademicLogsOption } from "../../../../data/entity/Academic/AcademicLogConfig";
import { PublicationLogConfigTextAndSingleSelectOptions } from "../../../../data/entity/Academic/PublicationLog";
import { AdminWorkLogConfigTextAndSingleSelectOptions } from "../../../../data/entity/Academic/AdminWorkLogConfig";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import appStoreInstance from "../../../../stores/AppStore";
import { useQuery } from "../../../../models";
import Loader from "../../../../components/Loader";
import useIsReady from "../../../../hooks/useIsReady";
import IsReadyLoader from "../../../../components/IsReadyLoader";

const getAcademicLogsFields = (key) => {
	switch (key) {
		case "AcademicLog":
			return AcademicLogConfigTextAndSingleSelectOptions;
		case "PublicationLog":
			return PublicationLogConfigTextAndSingleSelectOptions;
		case "AdminWorkLog":
			return AdminWorkLogConfigTextAndSingleSelectOptions;
		default:
			return [];
	}
};

const getSpeciaAcademicLogsOptions = (key) => {
	switch (key) {
		case "AcademicLog":
			return specialAcademicLogsOption;
		case "PublicationLog":
		case "AdminWorkLog":
			return null;
		default:
			return [];
	}
};

const AcademicLogFormScreen = ({ navigation, route }) => {
	const isReady = useIsReady();
	const { AcademicLogToGet, academicLogType, id, edit } = route.params;
	const { control, handleSubmit, watch, setValue, reset } = useForm({
		defaultValues: { date: new Date() },
	});
	const [academicLogData, setAcademicLogData] = useState({});
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const handleOnSave = async (formData) => {
		formData.date = formatRFC3339(formData.date ? formData.date : new Date());
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.academicLogType = AcademicLogToGet;
		console.log("formData is this", formData);
		let queryToRun;
		let academicLogToUpdate;

		switch (AcademicLogToGet) {
			case "AcademicLog":
				queryToRun = "updateUserAcademicLog";
				academicLogToUpdate = "academicLog";
				break;
			case "PublicationLog":
				queryToRun = "updateUserPublicationLog";
				academicLogToUpdate = "publicationLog";
				break;
			case "AdminWorkLog":
				queryToRun = "updateUserAdminWorkLog";
				academicLogToUpdate = "adminWorkLog";
				break;
			default:
				throw new Error("Invalid case log type");
		}

		try {
			const query = store[queryToRun](appStoreInstance.UserId, { set: { [academicLogToUpdate]: formData } });
			setQuery(query);
			const data = await query;
			if (data) {
				navigation.navigate("Logbook", { screen: "RootLogBook", params: { initialTabIndex: 1 } });
			}
		} catch (error) {
			console.log(error);
		} finally {
			reset();
		}
	};

	function findMissingValues(dbData, uiData) {
		let missingValues = {};

		// Iterate over each key in dbData
		Object.keys(dbData).forEach((key) => {
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
		});

		return missingValues;
	}

	const handleOnUpdate = async (formData) => {
		console.log("formData is being edited", formData);
		delete formData.id;
		delete formData.__typename;
		formData.updatedOn = formatRFC3339(new Date());

		let queryToRun;

		switch (AcademicLogToGet) {
			case "AcademicLog":
				queryToRun = "updateAcademicLog";
				break;
			case "PublicationLog":
				queryToRun = "updatePublicationLog";
				break;
			case "AdminWorkLog":
				queryToRun = "updateAdminWorkLog";
				break;
			default:
				throw new Error("Invalid case log type");
		}
		const dataToBeDeleted = findMissingValues(academicLogData, formData);
		console.log("dataToBeDeleted", dataToBeDeleted);
		try {
			const query = store[queryToRun](id, { set: formData, remove: dataToBeDeleted });
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
			let academicLogLogData = {};
			const fetchData = () => {
				switch (academicLogType) {
					case "AcademicLog":
						academicLogLogData = store.getAcademicLogById(id);
						break;
					case "PublicationLog":
						academicLogLogData = store.getPublicationLogById(id);
						break;
					case "AdminWorkLog":
						academicLogLogData = store.getAdminWorkLogById(id);
						break;
					default:
						break;
				}
				reset({ ...academicLogLogData[0] });
				setAcademicLogData(academicLogLogData[0]);
			};
			fetchData();
		}
	}, [academicLogType]);

	useEffect(() => {
		reset();
		appStoreInstance.setResetDate(true);
	}, [AcademicLogToGet]);

	console.log("academicLogData is what", academicLogData);
	if (!isReady) {
		return <IsReadyLoader />;
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }} keyboardShouldPersistTaps='handled'>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$secondaryBackground' pt='$2'>
					<ScrollView keyboardShouldPersistTaps='handled'>
						<FormComponent
							refernceToGetSpecialOptions={AcademicLogToGet}
							setValue={setValue}
							watch={watch}
							control={control}
							formFields={getAcademicLogsFields(AcademicLogToGet)}
							initialData={academicLogData ? academicLogData : {}}
							specialOptions={getSpeciaAcademicLogsOptions(AcademicLogToGet)}
						/>
					</ScrollView>
					<Box p={20} pb={"$10%"} paddingTop={5} width={"$100%"}>
						<Button onPress={handleSubmit(edit ? handleOnUpdate : handleOnSave)} variant='primary'>
							<ButtonText>{edit ? "Update" : "Save"}</ButtonText>
						</Button>
					</Box>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(AcademicLogFormScreen);
