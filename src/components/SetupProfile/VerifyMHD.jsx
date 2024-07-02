import {
	Box,
	Text,
	VStack,
	Icon,
	Select,
	SelectTrigger,
	SelectInput,
	SelectIcon,
	ScrollView,
	SelectPortal,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicatorWrapper,
	SelectDragIndicator,
	SelectItem,
	Button,
	ButtonText,
	Divider,
	InputField,
} from "@gluestack-ui/themed";
import { ChevronDown } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import { observer } from "mobx-react";
import { Input } from "@gluestack-ui/themed";
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import Loader from "../Loader";
import appStoreInstance from "../../stores/AppStore";

const VerifyMHD = ({ control, formState, formFields }) => {
	return (
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ zIndex: 999 }}>
				<ScrollView>
					<Box alignItems='center'>
						<VStack space='4xl' width={"$100%"} alignItems='center'>
							{formFields.map((field, index) => {
								return (
									<React.Fragment key={index}>
										<Box width={"$100%"}>
											<Box alignItems='center' paddingBottom={10}>
												<Controller
													control={control}
													key={index}
													rules={{
														required: false,
													}}
													render={({ field: { onChange, onBlur, value } }) => (
														// <Select width={"$80%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
														// 	<SelectTrigger variant='underlined' size='md'>
														// 		<SelectInput placeholder={field.name} />
														// 		<SelectIcon mr='$3'>
														// 			<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
														// 		</SelectIcon>
														// 	</SelectTrigger>
														// 	<SelectPortal>
														// 		<SelectBackdrop />
														// 		<SelectContent>
														// 			<Text padding={10} size='xl'>
														// 				{field.name}
														// 			</Text>
														// 			<Divider borderWidth={0.1} />
														// 			{field.options.map((option, index) => {
														// 				return <SelectItem key={index} label={option.label} value={option.value} />;
														// 			})}
														// 		</SelectContent>
														// 	</SelectPortal>
														// </Select>
														<Input width={"$80%"} variant='underlined'>
															<InputField onChangeText={onChange} value={value} placeholder={field.name} />
														</Input>
													)}
													name={field.uid}
												/>
											</Box>
											<Box alignItems='center'>
												<Box width={"$80%"}>{formState.errors[field.uid] && <Text color='#DE2E2E'>This is required.</Text>}</Box>
											</Box>
										</Box>
									</React.Fragment>
								);
							})}
							<VStack width={"$80%"} space='xs'>
								<Box justifyContent='flex-start'>
									<Button isDisabled={true} size='lg' variant='secondary'>
										<ButtonText fontFamily='Inter_Regular' textAlign='center'>
											Verify Reg.No.
										</ButtonText>
									</Button>
								</Box>
								<Text size='xs'>This may take a few seconds...</Text>
							</VStack>
						</VStack>
					</Box>
				</ScrollView>
			</KeyboardAvoidingView>
		</Loader>
	);
};

export default observer(VerifyMHD);
