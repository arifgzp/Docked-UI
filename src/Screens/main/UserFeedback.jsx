import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Box, Text, Input, InputField, Textarea, TextareaInput, Button, ButtonText, VStack } from "@gluestack-ui/themed";
import { observer } from "mobx-react";
import { formatRFC3339 } from "date-fns";
import appStoreInstance from "../../stores/AppStore";
import useIsReady from "../../hooks/useIsReady";
import { useQuery } from "../../models";
import IsReadyLoader from "../../components/IsReadyLoader";
import Loader from "../../components/Loader";

const UserFeedback = ({ navigation }) => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: "",
			description: "",
		},
	});

	const isReady = useIsReady();
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;

	useEffect(() => {
		register("title", { required: "Title is required" });
		register("description", { required: "Description is required" });
	}, [register]);

	useEffect(() => {
		const fetchData = async () => {
			const query = store.fetchUserFeedbackByUser(appStoreInstance.UserName);
			setQuery(query);
			const finishFetchingLogProfile = await query;
			if (finishFetchingLogProfile) {
				console.log("finishFetchingLogProfile", finishFetchingLogProfile);
			}
		};
		fetchData();
	}, []);

	const onSubmit = async (formData) => {
		console.log("The user feedback", formData);
		formData.createdOn = formData.updatedOn = formatRFC3339(new Date());
		formData.userEmail = appStoreInstance.UserName;
		// Here you can handle the form submission, e.g., send data to an API

		try {
			const query = store.updateUserUserFeedback(appStoreInstance.UserId, { set: { userFeedback: formData } });
			setQuery(query);
			const data = await query;
			if (data) {
				console.log("Tere Feedback gaaya");
				navigation.goBack();
			}
		} catch (error) {
			console.log(error);
		} finally {
			reset();
		}
	};

	if (!isReady) {
		return <IsReadyLoader />;
	}
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
			<Loader queryInfo={queryInfo} showSuccessMsg={false} navigation={navigation}>
				<Box h='$full' p='$5' flex={1} backgroundColor='$secondaryBackground'>
					<ScrollView keyboardShouldPersistTaps='handled'>
						<VStack space='lg' justify>
							{/* <Text fontSize='$xl' fontWeight='$bold'>
								User Feedback Form
							</Text> */}
							<VStack space='md'>
								<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
									Title
								</Text>
								<Input>
									<InputField onChangeText={(text) => setValue("title", text)} />
								</Input>
								{errors.title && <Text color='$red500'>{errors.title.message}</Text>}
							</VStack>
							<VStack space='lg'>
								<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
									Tell us what you love about the app, or what we could be doing better
								</Text>
								<Textarea w='$100%' size='sm'>
									<TextareaInput placeholder='Write your feedback' w='$100%' onChangeText={(text) => setValue("description", text)} />
								</Textarea>
								{errors.description && <Text color='$red500'>{errors.description.message}</Text>}
							</VStack>
						</VStack>
					</ScrollView>

					<Box pb='10%'>
						<Button variant='primary' onPress={handleSubmit(onSubmit)}>
							<ButtonText>Submit Feedback</ButtonText>
						</Button>
					</Box>
				</Box>
			</Loader>
		</KeyboardAvoidingView>
	);
};

export default observer(UserFeedback);
