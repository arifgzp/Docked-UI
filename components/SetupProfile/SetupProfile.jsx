import { Box, Text, VStack, Button, ButtonText, HStack, ScrollView } from "@gluestack-ui/themed";
import React, { lazy, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BackHandler } from "react-native";
import { UserStatus, useQuery } from "../../src/models";
import AppStore from "../../src/stores/AppStore";
import Loader from "../Loader";
import appStoreInstance from "../../src/stores/AppStore";
import { observer } from "mobx-react";
const SetupProfile = ({ config, navigation }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [currentStep, setCurrentStep] = useState(1);
	const [startingStep, setStartingStep] = useState(1);
	const currentConfig = config[currentStep - 1];

	const formFields = currentConfig?.content?.config?.fields || [];
	const currentStepLabel = currentConfig?.label || "";

	const { control, handleSubmit, formState, reset, watch } = useForm({
		defaultValues: {
			broadSpecialty: "",
			superSpecialty: "",
			subSpecialty: "",
			designation: "",
			workPlace: "",
			city: "",
			medicalCouncilName: "",
			medicalRegistrationNumber: "",
		},
	});
	const CurrentStepComponent = currentConfig ? currentConfig.content.component : null;

	const handleOnClick = async (data) => {
		if (currentStep === config.length) {
			console.log("Finsished", data);
			try {
				const query = store.updateUser(AppStore.UserId, { set: { userStatus: "REGISTERED" } });
				console.log("Current Data 2", query);
				setQuery(query);
				const finishWizardProcessData = await query;
				if (finishWizardProcessData) {
					navigation.navigate("Main Page");
					onCancel();
				}
			} catch (error) {
				console.log(error);
			}
		} else if (startingStep === currentStep) {
			console.log("Current Data 1");
			try {
				const query = store.updateUser(AppStore.UserId, { set: data });
				console.log("Current Data 2", query);
				setQuery(query);
				const responseData = await query;
				if (responseData) {
					onCancel();
				}
			} catch (error) {
				console.log(error);
			}
			setStartingStep(startingStep + 1);
			setCurrentStep(currentStep + 1);

			console.log("Current Data", data);
		} else if (currentStep < config.length) {
			console.log("Current Data 3", data);
			setCurrentStep(currentStep + 1);
		} else if (currentStep > config.length) {
			console.log("Current Data 4", data);
			console.log("Finished");
		}
	};
	const onSubmitData = async (data) => {
		console.log(data);
	};

	const handleSkip = async (data) => {
		try {
			const query = store.updateUser(AppStore.UserId, { set: { userStatus: "REGISTERED" } });
			console.log("Current Data 2", query);
			setQuery(query);
			const finishWizardProcessData = await query;
			if (finishWizardProcessData) {
				navigation.navigate("Main Page");
				onCancel();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const onStepClick = (index) => {
		setCurrentStep(index + 1);
	};

	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
			if (currentStep > 1) {
				setCurrentStep(currentStep - 1);
				return true; // Prevent default behavior (exit app)
			} else if (currentStep === 1) {
				return true; // Prevent going back at all when on step 1
			}
			return false; // Allow default behavior (exit app)
		});

		return () => backHandler.remove(); // Cleanup the event listener on unmount
	}, [currentStep]);

	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<Box flex={1} backgroundColor='$primaryBackground'>
				<Box flex={1 / 4} alignItems='center'>
					<VStack paddingTop={35} alignItems='center' space='2xl'>
						<HStack>
							<Text bold size='xl'>
								Docked Profile
							</Text>
						</HStack>
						<HStack space='2xl'>
							{config.map((step, index) => {
								const isDisabled = index < startingStep ? false : true;
								return (
									<Button
										onPress={onStepClick.bind(null, index)}
										key={index}
										disabled={isDisabled}
										width={"$15%"}
										height={10}
										variant={isDisabled ? "disable" : "primary"}></Button>
								);
							})}
						</HStack>
						<Text size='xl'>{currentStepLabel}</Text>
					</VStack>
				</Box>
				<Box width={"$100%"} justifyContent='center' flex={2.3 / 4}>
					{CurrentStepComponent && (
						<ScrollView>
							<CurrentStepComponent reset={reset} control={control} formState={formState} formFields={formFields} />
						</ScrollView>
					)}
				</Box>
				<Box flex={0.7 / 4} justifyContent='center'>
					<VStack space='lg'>
						<Box justifycontent='center' alignItems='center'>
							<Button onPress={handleSubmit(handleOnClick)} size='lg' variant='primary'>
								<ButtonText fontFamily='Inter_Bold' textAlign='center'>
									{currentStep === config.length ? "Finish" : "Next"}
								</ButtonText>
							</Button>
						</Box>
						{startingStep > 1 ? (
							<Box justifycontent='center' alignItems='center'>
								<Button width={"$40%"} onPress={handleSubmit(handleSkip)} size='sm' variant='link'>
									<ButtonText underline fontFamily='Inter_Bold' textAlign='center'>
										Skip
									</ButtonText>
								</Button>
							</Box>
						) : null}
					</VStack>
				</Box>
			</Box>
		</Loader>
	);
};

export default observer(SetupProfile);
