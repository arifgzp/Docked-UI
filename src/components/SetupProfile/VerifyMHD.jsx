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
	ButtonIcon,
	Divider,
	InputField,
} from "@gluestack-ui/themed";
import { ChevronDown } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import { observer } from "mobx-react";
import { Input } from "@gluestack-ui/themed";
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import Loader from "../Loader";
import appStoreInstance from "../../stores/AppStore";
import { format, parseISO } from "date-fns";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-date-picker";

const VerifyMHD = ({ control, formState, formFields, setValue }) => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState("--/--/--");
	const handelSetDate = (date) => {
		setValue("yearOfRegistration", date);
	};
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "height" : "height"} style={{ zIndex: 999 }}>
			<ScrollView>
				<Box h='$100%' alignItems='center'>
					<ScrollView>
						<VStack space='2xl' width={"$100%"} alignItems='center'>
							{formFields.map((field, index) => {
								return (
									<React.Fragment key={index}>
										<Box width={"$100%"}>
											<Box alignItems='center'>
												<Controller
													control={control}
													key={index}
													rules={{
														required: false,
													}}
													render={({ field: { onChange, onBlur, value } }) => {
														if (field.type === "date") {
															return (
																<VStack px='$5'>
																	<Button
																		bg='$transparent'
																		borderColor='rgba(77, 83, 86, 0.4)'
																		onPress={() => setOpen(true)}
																		justifyContent='space-between'
																		variant='date'>
																		<ButtonText>Date - {date}</ButtonText>
																		<ButtonIcon as={Ionicons} size={20} name='calendar' color='#367B71' />
																	</Button>
																</VStack>
															);
														} else if (field.type === "text") {
															return (
																<VStack w='$100%' px='$5'>
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
												<Box width={"$80%"}>{formState.errors[field.uid] && <Text color='#DE2E2E'>This is required.</Text>}</Box>
											</Box>
										</Box>
									</React.Fragment>
								);
							})}
							{/* <VStack width={"$80%"} space='xs'>
								<Box justifyContent='flex-start'>
									<Button isDisabled={true} size='lg' variant='secondary'>
										<ButtonText fontFamily='Inter_Regular' textAlign='center'>
											Verify Reg.No.
										</ButtonText>
									</Button>
								</Box>
								<Text size='xs'>This may take a few seconds...</Text>
							</VStack> */}
						</VStack>
					</ScrollView>
				</Box>
			</ScrollView>
			<DatePicker
				modal
				open={open}
				theme='light'
				date={!(date instanceof Date) ? new Date() : date}
				onConfirm={(date) => {
					setDate(format(new Date(date), "dd / MM / yyyy"));
					setOpen(false);
					handelSetDate(date);
				}}
				onCancel={() => {
					setOpen(false);
				}}
				mode='date'
			/>
		</KeyboardAvoidingView>
	);
};

export default observer(VerifyMHD);
