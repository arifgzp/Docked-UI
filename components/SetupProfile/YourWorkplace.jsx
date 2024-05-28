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
} from "@gluestack-ui/themed";
import { ChevronDown } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import React from "react";

const YourWorkplace = ({ control, formState, formFields }) => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<Box flex={1} alignItems='center'>
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
												required: field.isRequire,
											}}
											render={({ field: { onChange, onBlur, value } }) => (
												<Select width={"$80%"} onBlur={onBlur} onValueChange={onChange} selectedValue={value}>
													<SelectTrigger variant='underlined' size='md'>
														<SelectInput placeholder={field.name} />
														<SelectIcon mr='$3'>
															<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
														</SelectIcon>
													</SelectTrigger>
													<SelectPortal>
														<SelectBackdrop />
														<SelectContent>
															{field.options.map((option, index) => {
																return <SelectItem key={index} label={option.label} value={option.value} />;
															})}
														</SelectContent>
													</SelectPortal>
												</Select>
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
					<Button size='lg' variant='secondary'>
						<ButtonText fontFamily='Inter_Regular' textAlign='center'>
							+ Workspace
						</ButtonText>
					</Button>
				</VStack>
			</Box>
		</ScrollView>
	);
};

export default YourWorkplace;
