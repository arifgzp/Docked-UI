import React, { useState } from "react";
import {
	Box,
	Text,
	Input,
	VStack,
	HStack,
	FormControl,
	InputField,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
	ButtonIcon,
	KeyboardAvoidingView,
	ScrollView,
	Image,
	InputIcon,
	InputSlot,
} from "@gluestack-ui/themed";
import { Platform } from "react-native";

import { Eye, EyeOff } from "lucide-react-native";
import { Ionicons } from "@expo/vector-icons";
import { ImageAssets } from "../../assets/Assets";
import { useQuery } from "../../src/models";
import AppStore from "../../src/stores/AppStore";
import Loader from "../../components/Loader";
import appStoreInstance from "../../src/stores/AppStore";
import { observer } from "mobx-react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginPage = ({ navigation }) => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [loginPressed, setLoginPressed] = useState(false);

	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	const handleChangeEmail = (text) => {
		setFormData({ ...formData, email: text });
	};

	const handleChangePassword = (text) => {
		setFormData({ ...formData, password: text });
	};

	const handleShowPasswordState = () => {
		setPasswordVisible((showState) => {
			return !showState;
		});
	};
	const handleLogin = async () => {
		setLoginPressed(true);
		if (!formData.email) {
			setEmailError("Email is required");
			return;
		} else {
			setEmailError("");
		}
		if (!formData.password) {
			setPasswordError("Password is required");
			return;
		} else {
			setPasswordError("");
		}
		const response = await AppStore.SignIn({ userName: formData.email, password: formData.password });
		if (response) {
			if (response.userStatus === "REGISTERED") {
				navigation.navigate("Main Page");
				AppStore.setBroadSpecialty(response.broadSpecialty);
				AppStore.setUserId(response.id);
				const broadSpecialty = AppStore.UserBroadSpecialty;
				console.log("broadSpecialty", broadSpecialty);
			} else if (response.userStatus === "WIZARD_PENDING") {
				navigation.navigate("Setup ProfilePage");
			} else {
				navigation.navigate("Enter Email OTP Page");
			}
		} else {
			// If credentials don't match, display error message
			setEmailError("Please enter valid credentials");
			setPasswordError("Please enter valid credentials");
		}
		//bypassing the login for development purposes
		//navigation.navigate("Main Page");
	};

	const dataToBeTransformed = {
		monitoring: ["ASAStandardMonitoring", "Intake-Output"],
		"monitoring/Blood": ["Hemoglobin", "Glucose"],
		"monitoring/Cardiac": ["PulseRate", "CentralVenousPressure(CVP)"],
		"monitoring/Cardiac/BloodPressure": ["Non-Invasive"],
		"monitoring/Cardiac/BloodPressure/Invasive": ["SystolicPressureVariation(SPV)", "StrokeVolumeVariation(SVV)"],
		"monitoring/Cardiac/CardiacOutput(CO)": ["PiCCO2System", "LiDCOPlusSystem"],
		"monitoring/Cardiac/PulmonaryArteryCatheter": ["PulmonaryArteryPressure", "Left-SidedFillingPressure"],
		"monitoring/Cardiac/TransesophagealEchocardiography": ["Strokevolume", "GlobalEnd-DiastolicVolume"],
		"monitoring/Neuro-Physiologic": ["BIS", "Entropy"],
		"monitoring/Neuro-Physiologic/EMG": ["Intracranial", "Spinal"],
		"monitoring/Neuro-Physiologic/EvokedPotential": ["SomatosensoryEvokedPotential(SSEP)", "BrainstemAuditoryEvokedPotential(BAEP)"],
		"monitoring/Neuromuscular": ["ToF", "PTC"],
		"monitoring/Neuromuscular/Site": ["CorrugatorSuperciliousMuscle", "OrbicularisOculiMuscle"],
		"monitoring/Pulmonary": ["SpO2", "ETTCuffPressure"],
		"monitoring/Pulmonary/Ventilator": ["AirwayPressure", "RespiratoryRate"],
		"monitoring/Temperature": ["Invasive"],
	};
	const transformInput2 = (input) => {
		console.log("data to be transformed", input);
		const result = {};

		Object.keys(input).forEach((key) => {
			const parts = key.split("/");

			console.log("what are parts", parts);
			const value = input[key];
			console.log("what are the values???", value);

			let current = result;
			for (let i = 1; i < parts.length; i++) {
				const part = parts[i];
				console.log("what is this part inside the loop?", part);
				console.log("current loop,", i);
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

		// Ensure that all top-level keys are preserved
		Object.keys(input).forEach((key) => {
			if (!key.includes("/")) {
				const value = input[key];
				if (Array.isArray(value)) {
					value.forEach((item) => {
						result[item] = [item];
					});
				} else {
					result[key] = value;
				}
			}
		});
		console.log("result after data has been transformed", result);
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
		if (input.monitoring) {
			input.monitoring.forEach((value) => {
				result[value] = [value];
			});
		}

		return result;
	};

	const expectDataFromTransforerm = transformInput(dataToBeTransformed);

	console.log("expectDataFromTransforerm", expectDataFromTransforerm);

	const expectedData = {
		monitoring: ["ASAStandardMonitoring", "Intake-Output"],
		Blood: ["Hemoglobin", "Glucose"],
		Cardiac: [
			{ BloodPressure: ["Non-Invasive", { Invasie: ["SystolicPressureVariation(SPV)", "StrokeVolumeVariation(SVV)"] }] },
			{ CardiacOutput: ["PiCCOSystem", "LiDCOPlusSystem"] },
			{ PulmonaryArteryCatheter: ["PulmonaryArteryPressure", "Left-SidedFillingPressure"] },
			{ TransesophagealEchocardiography: ["Strokevolume", "GlobalEnd-DiastolicVolume"] },
			"PulseRate",
			"CentralVenousPressure(CVP)",
		],
		"Neuro-Physiologic": [
			"BIS",
			"Entropy",
			{ EMG: ["Intracranial", "Spinal"] },
			{ EvokedPotential: ["SomatosensoryEvokedPotential(SSEP)", "BrainstemAuditoryEvokedPotential(BAEP)"] },
		],
		Neuromuscular: ["ToF", "PTC", { Site: ["CorrugatorSuperciliousMuscle", "OrbicularisOculiMuscle"] }],
		Pulmonary: ["SpO2", "ETTCuffPressure", { Ventilator: ["AirwayPressure", "RespiratoryRate"] }],
		Temperature: ["Invasive"],
	};

	console.log("HARD CODED EXPECTEDATA", expectedData);

	function transformDataIntoStrings(data) {
		const result = {};

		function processArray(array, depth) {
			return array.reduce((acc, item) => {
				if (typeof item === "string") {
					acc += `${depth}${item}`;
				} else if (typeof item === "object" && !Array.isArray(item)) {
					for (const [key, value] of Object.entries(item)) {
						acc += `${depth}${key}` + processArray(value, depth + 1);
					}
				}
				return acc;
			}, "");
		}

		for (const [key, value] of Object.entries(data)) {
			result[key] = processArray(value, 1);
		}

		return result;
	}

	const transformedDataToStringsObject = transformDataIntoStrings(expectedData);
	const transformedDataToStringsKeysTopMap = Object.keys(expectedData);

	console.log("transformedDataToStringsObject", transformedDataToStringsObject);

	const Cardiac =
		"1PulseRate" +
		"1CentralVenousPressure(CVP)" +
		"1BloodPressure" +
		"2Non-Invasive" +
		"2Invasive" +
		"3SystolicPressureVariation(SPV)" +
		"3StrokeVolumeVariation(SVV)" +
		"1CardiacOutput" +
		"2PiCCO2System" +
		"2LiDCOPlusSystem" +
		"1PulmonaryArteryCatheter" +
		"2PulmonaryArteryPressure" +
		"2Left-SidedFillingPressure" +
		"1TransesophagealEchocardiography" +
		"2Strokevolume" +
		"2GlobalEnd-DiastolicVolume";

	const transformStringValuesOfTopParentNodeToArrowAndSelectedValues = (inputString) => {
		// Split the string by numbers and retain the numbers as well
		const parts = inputString.match(/(\d+[^1-3]+)/g);

		// Map over each part and generate the corresponding JSX
		return parts.map((part, index) => {
			// Determine the level based on the leading number
			const level = parseInt(part[0]);
			// Remove the leading number
			const text = part.slice(1);

			// Determine the icon color based on the level
			let color;
			switch (level) {
				case 1:
					color = "#DE2E23";
					break;
				case 2:
					color = "#e96363";
					break;
				case 3:
					color = "#ffe5e5";
					break;
				default:
					color = "#000"; // default color if level is unexpected
			}

			return (
				<HStack justifyContent='center' alignItems='center'>
					<MaterialCommunityIcons name='menu-right' size={28} color={color} />
					<Text size='sm' key={index}>
						{text}
					</Text>
				</HStack>
			);
		});
	};

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1, zIndex: 999 }}>
				<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
					<Box flex={1} backgroundColor='$primaryBackground'>
						<Box flex={1 / 4} justifyContent='flex-end' alignItems='center'>
							<Image width={200} height={75} source={ImageAssets.logo} alt='Docked-Logo' />
						</Box>
						<Box flex={2 / 4}>
							<VStack space='4xl'>
								<Box>
									<FormControl size='md' isDisabled={false} isInvalid={loginPressed && !!emailError} isReadOnly={false} isRequired={false} gap={"$2"}>
										<Box justifycontent='center' alignItems='center'>
											<Input width={"$80%"} variant='underlined'>
												<InputField type='text' onChangeText={handleChangeEmail} value={formData.email} placeholder='Email' />
											</Input>
											{loginPressed && emailError && (
												<FormControlError width={"$80%"}>
													<FormControlErrorIcon as={AlertCircleIcon} />
													<FormControlErrorText>{emailError}</FormControlErrorText>
												</FormControlError>
											)}
										</Box>
									</FormControl>
								</Box>
								<Box>
									<FormControl
										size='md'
										isDisabled={false}
										isInvalid={loginPressed && !!passwordError}
										isReadOnly={false}
										isRequired={false}
										gap={"$4"}>
										<Box justifycontent='center' alignItems='center'>
											<Input width={"$80%"} variant='underlined'>
												<InputField
													onChangeText={handleChangePassword}
													value={formData.password}
													type={passwordVisible ? "text" : "password"}
													placeholder='Password'
												/>
												<InputSlot pr='$3' onPress={handleShowPasswordState}>
													<InputIcon as={passwordVisible ? Eye : EyeOff} color='#1E1E1E' />
												</InputSlot>
											</Input>

											{loginPressed && passwordError && (
												<FormControlError width={"$80%"}>
													<FormControlErrorIcon as={AlertCircleIcon} />
													<FormControlErrorText>{passwordError}</FormControlErrorText>
												</FormControlError>
											)}
										</Box>
									</FormControl>
								</Box>
								<Box>
									<VStack space='lg'>
										<Box justifycontent='center' alignItems='center'>
											<Button onPress={handleLogin} borderRadius={10} variant='primary' size='lg'>
												<HStack justifyContent='center' alignItems='center' space='sm'>
													<ButtonText>Member Login</ButtonText>
													<ButtonIcon as={Ionicons} size={25} name='arrow-forward-outline' color='#1E1E1E' />
												</HStack>
											</Button>
										</Box>
										<Box justifycontent='center' alignItems='center'>
											<Button variant='link' size='sm' onPress={() => navigation.navigate("Forgot Password Page")}>
												<ButtonText underline>Reset Password</ButtonText>
											</Button>
										</Box>
									</VStack>
								</Box>
							</VStack>
						</Box>
						<Box flex={1 / 4} justifyContent='center'>
							<VStack space='sm'>
								<Text textAlign='center' bold fontFamily='Inter'>
									Create Member Account
								</Text>
								<Box justifycontent='center' alignItems='center'>
									<Button onPress={() => navigation.navigate("Register Mobile Number Page")} size='lg' variant='secondary'>
										<ButtonText fontFamily='Inter_Bold' textAlign='center'>
											Join
										</ButtonText>
									</Button>
								</Box>
							</VStack>
						</Box>
					</Box>
				</ScrollView>
			</KeyboardAvoidingView>
		</Loader>
		// <Box backgroundColor='$primaryBackground' flex={1} justifyContent='center' alignItems='center'>
		// 	<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
		// 		<Box backgroundColor='#ffffff' width={"$90%"} borderRadius={25} p='$4' m='$4'>
		// 			<VStack width={"$full"} pt='$2' pl='$4'>
		// 				{transformedDataToStringsKeysTopMap.map((firstlevel) => {
		// 					return (
		// 						<HStack flexWrap='wrap' alignItems='center' width={"90%"} space='lg'>
		// 							<Text>{firstlevel}</Text>
		// 							{transformStringValuesOfTopParentNodeToArrowAndSelectedValues(transformedDataToStringsObject[firstlevel])}
		// 						</HStack>
		// 					);
		// 				})}
		// 			</VStack>
		// 		</Box>
		// 	</ScrollView>
		// </Box>
	);
};

export default observer(LoginPage);
// <Menu
// 	disabledKeys={["AcademicLog", "ThesisLog", "SpecialLog", "CustomLog"]}
// 	selectionMode='single'
// 	selectedKeys={selected}
// 	onSelectionChange={(keys) => {
// 		console.log("onSelectionChange", keys);
// 		setSelected(keys);
// 		switch (keys.currentKey) {
// 			case "LogProfile":
// 				console.log("Push to", keys.currentKey, "route");
// 				navigation.navigate("Plus", { screen: "LogProfilePage" });
// 				break;
// 			case "CaseLog":
// 				console.log("Push to", keys.currentKey, "route");
// 				navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "CaseLog" } });
// 				break;
// 			case "ChronicPain":
// 				console.log("Push to", keys.currentKey, "route");
// 				navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "ChronicPain" } });
// 				break;
// 			case "CriticalCareCaseLog":
// 				console.log("Push to", keys.currentKey, "route");
// 				navigation.navigate("Plus", { screen: "CaseLogFormScreen", params: { caseLogFormToGet: "CriticalCareCaseLog" } });
// 				break;
// 			case "AcademicLog":
// 				console.log("Push to", keys.currentKey, "route");
// 				navigation.navigate("MainLogScreen", { screen: "AcademicLog" });
// 				break;
// 			case "ThesisLog":
// 				console.log("Push to", keys.currentKey, "route");
// 				navigation.navigate("MainLogScreen", { screen: "ThesisLogs" });
// 				break;
// 			case "SpecialLog":
// 				console.log("Push to", keys.currentKey, "route");
// 				navigation.navigate("MainLogScreen", { screen: "SpecialCaseLogs" });
// 				break;
// 			case "CustomLog":
// 				console.log("Push to", keys.currentKey, "route");

// 				break;
// 			default:
// 				// Optional: handle cases where keys.currentKey does not match any of the specified cases
// 				console.log("Key not recognized");
// 				break;
// 		}
// 	}}
// 	closeOnSelect={true}
// 	{...props}
// 	placement='top'
// 	style={{ backgroundColor: "#FFFFFF", marginBottom: 5 }}
// 	trigger={({ ...triggerProps }) => {
// 		return (
// 			<Button borderRadius={"$full"} backgroundColor='#CC3F0C' mt='$2' width={45} height={45} {...triggerProps}>
// 				<ButtonIcon as={Ionicons} size='xl' name='add-outline' />
// 			</Button>
// 		);
// 	}}>
// 	{/* <MenuItem justifyContent='center' key='LogProfile' textValue='LogProfile'>
// 		<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
// 		<MenuItemLabel size='sm'>Log Profile</MenuItemLabel>
// 	</MenuItem> */}

// 	<MenuItem justifyContent='center' key='CaseLog' textValue='CaseLog'>
// 		<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
// 		<MenuItemLabel size='sm'>Case Log</MenuItemLabel>
// 	</MenuItem>
// 	<MenuItem justifyContent='center' key='ChronicPain' textValue='ChronicPain'>
// 		<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
// 		<MenuItemLabel size='sm'>Chronic Pain</MenuItemLabel>
// 	</MenuItem>
// 	<MenuItem justifyContent='center' key='CriticalCareCaseLog' textValue='CriticalCareCaseLog'>
// 		<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
// 		<MenuItemLabel size='sm'>Critical Care Case Log</MenuItemLabel>
// 	</MenuItem>
// 	<MenuItem justifyContent='center' key='AcademicLog' textValue='AcademicLog'>
// 		<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
// 		<MenuItemLabel size='sm'>Academic Log</MenuItemLabel>
// 	</MenuItem>
// 	<MenuItem justifyContent='center' key='ThesisLog' textValue='ThesisLog'>
// 		<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
// 		<MenuItemLabel size='sm'>Thesis Log</MenuItemLabel>
// 	</MenuItem>
// 	<MenuItem justifyContent='center' key='SpecialLog' textValue='SpecialLog'>
// 		<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
// 		<MenuItemLabel size='sm'>Special Log</MenuItemLabel>
// 	</MenuItem>
// 	<MenuItem justifyContent='center' key='CustomLog' textValue='CustomLog'>
// 		<Icon as={Ionicons} name='add-circle-outline' size='lg' mr='$2' />
// 		<MenuItemLabel size='sm'>Custom Log</MenuItemLabel>
// 	</MenuItem>
// </Menu>
