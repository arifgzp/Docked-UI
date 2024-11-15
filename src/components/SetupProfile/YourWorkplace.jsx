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
import { SelectScrollView } from "@gluestack-ui/themed";

const YourWorkplace = ({ control, formState, formFields, watch, setValue }) => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<Box flex={1} alignItems='center'>
				<VStack space='2xl' width={"$100%"} alignItems='center'>
					{formFields.map((field, index) => {
						return (
							<React.Fragment key={index}>
								<Box width={"$100%"}>
									<Box px='$5'>
										<Controller
											control={control}
											key={index}
											rules={{
												required: true,
											}}
											render={({ field: { onChange, onBlur, value } }) => {
												if (field.type === "select-single") {
													return (
														<VStack>
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
																		<Icon color='#367B71' as={ChevronDown} m='$2' w='$4' h='$4' />
																	</SelectIcon>
																</SelectTrigger>
																<SelectPortal>
																	<SelectBackdrop />
																	<SelectContent p='$0'>
																		<Text fontFamily='Inter_SemiBold' padding={10} size='xl'>
																			{field.name}
																		</Text>
																		<Divider borderWidth={0.1} />
																		<SelectScrollView>
																			{field.options.map((option, index) => {
																				return (
																					<SelectItem
																						bg={index % 2 === 0 ? "$warmGray100" : "#FFF"}
																						key={index}
																						label={option.label}
																						value={option.value}
																					/>
																				);
																			})}
																		</SelectScrollView>
																		<SelectDragIndicatorWrapper>
																			<SelectDragIndicator />
																		</SelectDragIndicatorWrapper>
																	</SelectContent>
																</SelectPortal>
															</Select>
														</VStack>
													);
												} else if (field.type === "text") {
													return (
														<VStack>
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
									<Box px='$5' pt='$1' justifyContent='flex-start' alignItems='flex-start'>
										<Box>
											{formState.errors[field.uid] && (
												<Text fontSize='$xs' color='#DE2E2E'>
													This is required.
												</Text>
											)}
										</Box>
									</Box>
									{field.uid === "designation" && watch("designation") === "Others" && (
										<Box pt='$5' width={"$100%"}>
											<Text px='$5' size='xs'>
												Please specify your other Designation
											</Text>
											<Box px='$5' paddingBottom={10}>
												<Controller
													control={control}
													key={"designationOthers"}
													name={"designationOthers"}
													rules={{
														required: true,
													}}
													render={({ field: { onChange, onBlur, value } }) => {
														return (
															<Input borderColor='rgba(77, 83, 86, 0.4)' variant='outline'>
																<InputField onChangeText={onChange} value={value} placeholder={"Other designation"} />
															</Input>
														);
													}}
												/>
											</Box>
										</Box>
									)}
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
