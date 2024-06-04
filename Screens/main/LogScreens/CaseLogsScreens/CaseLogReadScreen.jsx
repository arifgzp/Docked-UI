import { Box, HStack, VStack, Button, ButtonText, KeyboardAvoidingView, Divider, View, useToken } from "@gluestack-ui/themed";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AnaesthesiaConfig from "../../../../config/SpecialtyConfigs/AnaesthesiaConfig";
import { forEach } from "lodash";

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

const getTreeConfigData = (key) => {
	return AnaesthesiaConfig[key];
};

const getLabel = (key, configData) => {
	//console.log("key", key);
	//console.log("configData", configData);
	let label = key;
	forEach(configData, (config) => {
		if (config.id == key) {
			label = config.name;
			//console.log("!!!!! Match Found ", label);
			return false;
		} else if (config.children) {
			label = getLabel(key, config.children);
			if (label != key) {
				return false;
			}
		}
	});
	//console.log("Finakl LAbel >>>>> ", label);
	return label;
};

const specialCaseLogsOption = [
	{ id: "typeOfAnaesthesia", name: "Type of Anesthesia" },
	{ id: "airManagement", name: "Airway Management" },
	{ id: "regionalTechniques", name: "Regional Techniques" },
	{ id: "interventionalProcedures", name: "Interventional Procedures" },
	{ id: "monitoring", name: "Monitoring" },
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
	const figmaRed = useToken("colors", "figmared");
	const figmaLightRed = useToken("colors", "figmalightred2");

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

	const getArrowIcon = (level) => {
		switch (level) {
			case 1:
				return <MaterialCommunityIcons name='menu-right' size={28} color={figmaRed} />;

			case 2:
				return <MaterialCommunityIcons name='menu-right' size={28} color='#e96363' />;

			case 3:
				return <MaterialCommunityIcons name='menu-right' size={24} color='#fababa' />;

			default:
				return <MaterialCommunityIcons name='menu-right' size={24} color='#ffe5e5' />;
		}
	};

	const renderCard = (input, key, level, configData) => {
		if (Array.isArray(input)) {
			if (input.length == 1 && key == input[0] && level == 1) {
				return null;
			}
			if (input.length == 1 && key == input[0]) {
				console.log("level >> ", level);
				const label = getLabel(input[0], configData);
				return (
					<Text flexShrink={1} bg='$red400'>
						{label}
					</Text>
				);
			} else {
				const label = getLabel(key, configData);
				return (
					<>
						<Text flexShrink={1}>{level !== 1 && label}</Text>
						{getArrowIcon(level)}
						<>
							{input.map((obj, index) => {
								const length = input.length;
								if (index == length - 1) {
									const label = getLabel(obj, configData);
									return (
										<>
											<Text flexShrink={1}>{label}</Text>
										</>
									);
								} else {
									const label = getLabel(obj, configData);
									return (
										<>
											<Text flexShrink={1}>{label}</Text>
											{getArrowIcon(level)}
										</>
									);
								}
							})}
						</>
					</>
				);
			}
		} else {
			const label = getLabel(key, configData);
			return (
				<>
					<Text flexShrink={1}>{level !== 1 && label}</Text>
					{Object.keys(input).map((keyChild) => {
						return (
							<>
								{getArrowIcon(level)}
								{renderCard(input[keyChild], keyChild, level + 1, configData)}
							</>
						);
					})}
				</>
			);
		}
	};

	const renderLogCard = (value) => {
		const data = parserForConvertingIntoTreeFormData(watch(value), value);
		//console.log("value > ", value);
		const configData = getTreeConfigData(value);

		return (
			<VStack gap='$1' w='$full'>
				{Object.keys(transformInput(data)).map((key) => {
					//console.log("key", key);
					//console.log("configData", configData);
					return (
						<HStack w='$full' gap='$2'>
							<Text>{getLabel(key, configData)}</Text>
							<HStack flexWrap='wrap' alignItems='center'>
								{renderCard(transformInput(data)[key], key, 1, configData)}
							</HStack>
						</HStack>
					);
				})}
			</VStack>
		);
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ flex: 1, zIndex: 999 }}>
			<Loader apiLoadingInfo={loading} showSuccessMsg={false} navigation={navigation}>
				<Box h='$full' backgroundColor='$primaryBackground' pb='$24'>
					<ScrollView>
						<Box paddingTop={10} justifyContent='center' alignItems='center'>
							<Box width={"$100%"}>
								<CaselogDropDownOptions control={control} readOnly={true} setValue={setValue} formState={formState} />
								<Divider />
							</Box>
						</Box>
						<VStack p='$4' gap='$6'>
							{specialCaseLogsOption.map((log) => {
								const logValue = watch(log.id);
								if (!logValue || logValue.length == 0) {
									return null;
								}
								return (
									<VStack key={log.id} gap='$1'>
										<Text fontSize='$lg' fontWeight='$semibold'>
											{log.name}
										</Text>
										<Box width={"$80%"} justifyContent='center' borderRadius={10}>
											{renderLogCard(log.id)}
										</Box>
									</VStack>
								);
							})}
						</VStack>
					</ScrollView>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default CaseLogReadScreen;
