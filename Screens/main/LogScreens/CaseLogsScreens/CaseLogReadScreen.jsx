import { Box, HStack, VStack, Button, ButtonText, KeyboardAvoidingView, Divider } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import { ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import CaselogDropDownOptions from "./CaselogDropDownOptions";
import SpecialCaseLogSelectOptions from "./SpecialCaseLogSelectOptions";
import { useQuery } from "../../../../src/models";
import { formatRFC3339 } from "date-fns";
import { useRoute } from "@react-navigation/native";
import Loader from "../../../../components/Loader";
import { Text } from "@gluestack-ui/themed";

const parserForConvertingIntoTreeFormData = (input, key) => {
	const result = {};

	input?.forEach((item) => {
		const parts = item.split("/");
		const mainKey = parts.slice(0, -1).join("/");
		const value = parts[parts.length - 1];

		if (mainKey in result) {
			if (Array.isArray(result[mainKey])) {
				result[mainKey].push(value);
			} else {
				result[mainKey] = [result[mainKey], value];
			}
		} else {
			result[mainKey] = value;
		}
	});

	// Convert single values to arrays where needed
	for (const key in result) {
		if (key.includes(key) && !Array.isArray(result[key])) {
			result[key] = [result[key]];
		}
	}

	return result;
};

const transformInput2 = (input) => {
	const result = {};

	Object.keys(input).forEach((key) => {
		const parts = key.split("/");
		const value = input[key];

		let current = result;
		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (i === parts.length - 1) {
				// If it's the last part, set the value
				if (Array.isArray(value)) {
					if (!current[part]) {
						current[part] = value;
					}
				} else {
					current[part] = value;
				}
			} else {
				// If it's not the last part, move deeper in the object
				if (!current[part]) {
					current[part] = {};
				}
				current = current[part];
			}
		}
	});

	return result;
};

const transformInput = (input) => {
	const result = {};

	Object.keys(input).forEach((key) => {
		const parts = key.split("/");
		const value = input[key];

		let current = result;
		for (let i = 1; i < parts.length; i++) {
			const part = parts[i];
			if (i === parts.length - 1) {
				// If it's the last part, set the value
				if (Array.isArray(value)) {
					if (!current[part]) {
						current[part] = value;
					}
				} else {
					current[part] = value;
				}
			} else {
				// If it's not the last part, move deeper in the object
				if (!current[part]) {
					current[part] = {};
				}
				current = current[part];
			}
		}
	});

	// Ensure that the top-level keys are preserved
	if (input.typeOfAnaesthesia) {
		input.typeOfAnaesthesia.forEach((value) => {
			result[value] = [value];
		});
	}

	return result;
};
const input = {
	typeOfAnaesthesia: ["MAC"],
	"typeOfAnaesthesia/DRUGS/INHALATIONAL": ["SEVOFLURANE", "NO2"],
	"typeOfAnaesthesia/DRUGS/INTRAVENOUS": ["Thiopentone"],
	"typeOfAnaesthesia/REGIONAL": ["PB", "Neuraxial"],
};

const outPut = {
	DRUGS: { INHALATIONAL: ["SEVOFLURANE", "NO2"], INTRAVENOUS: ["Thiopentone"] },
	MAC: ["MAC"],
	REGIONAL: ["PB", "Neuraxial"],
};

const specialCaseLogsOption = [
	{ id: "typeOfAnaesthesia", name: "Type of Anesthesia" },
	{ id: "airManagement", name: "Airway Management" },
];

const CaseLogReadScreen = ({ navigation }) => {
	const routes = useRoute();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [loading, setLoading] = useState(false);
	const { control, formState, reset, watch, handleSubmit, setValue } = useForm({
		defaultValues: {
			hospital: "",
			faculty: "",
			date: new Date(),
		},
	});

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
		console.log(store.getAnaesthesiaCaseLogById(routes.params.id));
		reset({
			...store.getAnaesthesiaCaseLogById(routes.params.id)[0],
		});
	}, []);

	const typeOfAnaesthesia = parserForConvertingIntoTreeFormData(watch("typeOfAnaesthesia"), "typeOfAnaesthesia");
	const airManagement = parserForConvertingIntoTreeFormData(watch("airManagement"), "airManagement");

	console.log("airManagement", watch("airManagement"));
	console.log("typeOfAnaesthesia", JSON.stringify(typeOfAnaesthesia, null, 2));
	console.log("TRANSFORMED OUTPUT++>", transformInput(typeOfAnaesthesia));

	useEffect(() => {
		console.log(store.getAnaesthesiaCaseLogById(routes.params.id));
		reset({
			...store.getAnaesthesiaCaseLogById(routes.params.id)[0],
		});
	}, []);

	const getArrowIcon = (level) => {
		let arrow = ">";
		for (let index = 1; index < level; index++) {
			arrow = arrow + arrow;
		}
		return `${arrow}`;
	};

	const renderCard = (input, key, level) => {
		if (Array.isArray(input)) {
			if (input.length == 1 && key == input[0]) {
				return <Text>{input[0]}</Text>;
			} else {
				return (
					<HStack>
						<Text>
							{key}
							{getArrowIcon(level)}
						</Text>
						<Text>
							{input.map((obj, index) => {
								const length = input.length;
								if (index == length - 1) {
									return (
										<>
											<Text>{obj}</Text>
										</>
									);
								} else {
									return (
										<>
											<Text>
												{obj}
												{getArrowIcon(level)}
											</Text>
										</>
									);
								}
							})}
						</Text>
					</HStack>
				);
			}
		} else {
			return (
				<Box>
					<VStack>
						<HStack>
							<Text>{key}</Text>
							{Object.keys(input).map((keyChild) => {
								return (
									<>
										<Text display='flex' flexWrap='wrap' textAlign='right'>
											{getArrowIcon(level)}
										</Text>
										{renderCard(input[keyChild], keyChild, level + 1)}
									</>
								);
							})}
						</HStack>
					</VStack>
				</Box>
			);
		}
	};

	const renderLogCard = (value) => {
		const data = parserForConvertingIntoTreeFormData(watch(value), value);
		return (
			<>
				{Object.keys(transformInput(data)).map((key) => {
					return (
						<>
							<Box>{renderCard(transformInput(data)[key], key, 1)}</Box>
						</>
					);
				})}
			</>
		);
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader apiLoadingInfo={loading} showSuccessMsg={false} navigation={navigation}>
				<Box flex={1} backgroundColor='$primaryBackground'>
					<ScrollView>
						<Box paddingTop={10} justifyContent='center' alignItems='center'>
							<Box width={"$100%"}>
								<CaselogDropDownOptions control={control} readOnly={true} setValue={setValue} formState={formState} />

								<Divider />
							</Box>
						</Box>
						<Box justifyContent='center' alignItems='center'>
							{specialCaseLogsOption.map((log) => {
								return <Box width={"$100%"}>{renderLogCard(log.id)}</Box>;
							})}
						</Box>
					</ScrollView>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default CaseLogReadScreen;
