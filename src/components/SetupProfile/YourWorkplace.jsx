import {
	Box,
	Text,
	VStack,
	Button,
	ButtonText,
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
	Divider,
} from "@gluestack-ui/themed";
import { ChevronDown } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import Loader from "../Loader";
import { observer } from "mobx-react";
import appStoreInstance from "../../stores/AppStore";
import { Input } from "@gluestack-ui/themed";
import { InputField } from "@gluestack-ui/themed";

const YourWorkplace = ({ control, formState, formFields }) => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<Box flex={1} alignItems='center'>
				<VStack space='4xl' width={"$100%"} alignItems='center'>
					{formFields.map((field, index) => {
						return (
							<React.Fragment key={index}>
								<Box width={"$100%"}>
									<Box px='$5' paddingBottom={10}>
										<Controller
											control={control}
											key={index}
											rules={{
												required: false,
											}}
											render={({ field: { onChange, onBlur, value } }) => {
												if (field.type === "select-single") {
													return (
														<VStack>
															<Text size='xs'>{field.name}</Text>
															<Select
																borderWidth={0.5}
																borderRadius={5}
																borderColor='rgba(77, 83, 86, 0.4)'
																onBlur={onBlur}
																onValueChange={onChange}
																selectedValue={value}>
																<SelectTrigger variant='outline' size='md'>
																	<SelectInput placeholder={field.name} />
																	<SelectIcon mr='$3'>
																		<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
																	</SelectIcon>
																</SelectTrigger>
																<SelectPortal>
																	<SelectBackdrop />
																	<SelectContent>
																		<Text paddingBottom={10} size='xl'>
																			{field.name}
																		</Text>
																		<Divider borderWidth={0.1} />
																		{field.options.map((option, index) => {
																			return <SelectItem key={index} label={option.label} value={option.value} />;
																		})}
																	</SelectContent>
																</SelectPortal>
															</Select>
														</VStack>
													);
												} else if (field.type === "text") {
													return (
														<VStack>
															<Text size='xs'>{field.name}</Text>
															<Input borderColor='rgba(77, 83, 86, 0.4)' variant='outline'>
																<InputField onChangeText={onChange} value={value} placeholder={field.name} />
															</Input>
														</VStack>
													);
												}
											}}
											name={field.uid}
										/>
									</Box>
									<Box alignItems='center'>
										<Box>{formState.errors[field.uid] && <Text color='#DE2E2E'>This is required.</Text>}</Box>
									</Box>
								</Box>
							</React.Fragment>
						);
					})}
					{/* <Button isDisabled={true} size='lg' variant='secondary'>
							<ButtonText fontFamily='Inter_Regular' textAlign='center'>
								+ Workspace
							</ButtonText>
						</Button> */}
				</VStack>
			</Box>
		</ScrollView>
	);
};

export default observer(YourWorkplace);
