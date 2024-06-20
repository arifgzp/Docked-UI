import { CheckIcon, CheckboxGroup, CheckboxIndicator, Divider, KeyboardAvoidingView } from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
import DatePicker from "react-native-date-picker";
import {
	Box,
	Center,
	GluestackUIProvider,
	Text,
	StatusBar,
	Input,
	HStack,
	VStack,
	FormControlLabel,
	FormControl,
	FormControlLabelText,
	InputField,
	FormControlHelper,
	FormControlHelperText,
	FormControlError,
	AlertCircleIcon,
	FormControlErrorIcon,
	FormControlErrorText,
	Button,
	ButtonText,
} from "@gluestack-ui/themed";
import {
	Select,
	SelectTrigger,
	SelectInput,
	SelectIcon,
	SelectPortal,
	SelectBackdrop,
	SelectContent,
	SelectDragIndicatorWrapper,
	SelectDragIndicator,
	SelectItem,
	Icon,
} from "@gluestack-ui/themed";
import { Keyboard } from "react-native";
import { ChevronDown } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { Actionsheet } from "@gluestack-ui/themed";
import { ActionsheetBackdrop } from "@gluestack-ui/themed";
import { ActionsheetContent } from "@gluestack-ui/themed";
import { ActionsheetDragIndicatorWrapper } from "@gluestack-ui/themed";
import { ActionsheetDragIndicator } from "@gluestack-ui/themed";
import { CalendarDaysIcon } from "@gluestack-ui/themed";
import { InputSlot } from "@gluestack-ui/themed";
import { InputIcon } from "@gluestack-ui/themed";
import { format } from "date-fns";
import caseLogConfigTextAndSingleSelectOptions from "../../../../config/entity/AnesthesiaCaseLogConfigs/CaseLogFormConfig";
import { observer } from "mobx-react";
import { useQuery } from "../../../../src/models";
import AppStore from "../../../../src/stores/AppStore";

const CaselogDropDownOptions = ({ navigation, control, formState, setValue, readOnly, prefilledData, formFields, readOnlyFaculty }) => {
	const queryInfo = useQuery();
	const { store, setQuery } = queryInfo;
	const [open, setOpen] = useState(false);
	const [showActionSheet, setShowActionsheet] = useState(false);
	const [date, setDate] = useState(new Date());
	const handleCloseDateModal = () => {
		setShowActionsheet(false);
	};

	const handelSetDate = (date) => {
		setValue("date", date);
	};

	console.log("prefilledData Mudit test", prefilledData);
	return (
		<VStack space='lg'>
			<Box width={"$100%"}>
				<Box alignItems='center' paddingBottom={10}>
					<Controller
						control={control}
						key='rotation'
						name='rotation'
						rules={{
							required: false,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<Select width={"$90%"} onBlur={onBlur} isReadOnly onValueChange={onChange} selectedValue={value}>
									<SelectTrigger variant='underlined' size='md'>
										<SelectInput placeholder={`Rotation ${prefilledData?.rotations[0].department}`} />
										<SelectIcon mr='$3'>{!readOnly && <Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent>
											<Text padding={10} size='xl'>
												Department
											</Text>
											<Divider borderWidth={0.1} />
											<SelectItem
												key={prefilledData?.rotations[0].department}
												label={prefilledData?.rotations[0].department}
												value={prefilledData?.rotations[0].department}
											/>
											{/* {prefilledData?.rotations.map((item) => {
												return <SelectItem key={item?.department} label={item?.department} value={item?.department} />;
											})} */}
										</SelectContent>
									</SelectPortal>
								</Select>
							);
						}}
					/>
				</Box>
				<Box alignItems='center'>
					<Box width={"$80%"}>{formState.errors.rotations && <Text color='#DE2E2E'>This is required.</Text>}</Box>
				</Box>
			</Box>
			<Box width={"$100%"}>
				<Box alignItems='center' paddingBottom={10}>
					<Controller
						control={control}
						key='hospital'
						name='hospital'
						rules={{
							required: false,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<Select width={"$90%"} onBlur={onBlur} isReadOnly onValueChange={onChange} selectedValue={value}>
									<SelectTrigger variant='underlined' size='md'>
										<SelectInput placeholder={`Hospital ${prefilledData?.hospital}`} />
										<SelectIcon mr='$3'>{!readOnly && <Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent>
											<Text padding={10} size='xl'>
												Hospital
											</Text>
											<Divider borderWidth={0.1} />
											<SelectItem key={prefilledData?.hospital} label={prefilledData?.hospital} value={value} />
										</SelectContent>
									</SelectPortal>
								</Select>
							);
						}}
					/>
				</Box>
				<Box alignItems='center'>
					<Box width={"$80%"}>{formState.errors.hospital && <Text color='#DE2E2E'>This is required.</Text>}</Box>
				</Box>
			</Box>
			<Box width={"$100%"}>
				<Box alignItems='center' paddingBottom={10}>
					<Controller
						control={control}
						key='faculty'
						name='faculty'
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							return (
								<Select width={"$90%"} onBlur={onBlur} isReadOnly={readOnlyFaculty} onValueChange={onChange} selectedValue={value}>
									<SelectTrigger variant='underlined' size='md'>
										<SelectInput placeholder={`Faculty`} />
										<SelectIcon mr='$3'>{!readOnly && <Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
									</SelectTrigger>
									<SelectPortal>
										<SelectBackdrop />
										<SelectContent>
											<Text padding={10} size='xl'>
												Faculties
											</Text>
											<Divider borderWidth={0.1} />
											{prefilledData?.faculty.map((item) => {
												return <SelectItem key={item?.name} label={item?.name} value={item?.name} />;
											})}
										</SelectContent>
									</SelectPortal>
								</Select>
							);
						}}
					/>
				</Box>
				<Box alignItems='center'>
					<Box width={"$80%"}>{formState.errors.faculty && <Text color='#DE2E2E'>This is required.</Text>}</Box>
				</Box>
			</Box>
			{formFields.map((field, index) => {
				if (field.type === "select-single") {
					return (
						<Box width={"$100%"}>
							<Box alignItems='center' paddingBottom={10}>
								<Controller
									control={control}
									key={field.uid}
									name={field.uid}
									rules={{
										required: false,
									}}
									render={({ field: { onChange, onBlur, value } }) => {
										return (
											<Select width={"$90%"} onBlur={onBlur} isReadOnly={readOnly} onValueChange={onChange} selectedValue={value}>
												<SelectTrigger variant='underlined' size='md'>
													<SelectInput placeholder={field.name} />
													<SelectIcon mr='$3'>{!readOnly && <Icon as={ChevronDown} m='$2' w='$4' h='$4' />}</SelectIcon>
												</SelectTrigger>
												<SelectPortal>
													<SelectBackdrop />
													<SelectContent>
														<Text padding={10} size='xl'>
															{field.name}
														</Text>
														<Divider borderWidth={0.1} />
														{field.options.map((option, index) => {
															return <SelectItem key={option.value} label={option.label} value={option.value} />;
														})}
													</SelectContent>
												</SelectPortal>
											</Select>
										);
									}}
								/>
							</Box>
							<Box alignItems='center'>
								<Box width={"$80%"}>{formState.errors[field.uid] && <Text color='#DE2E2E'>This is required.</Text>}</Box>
							</Box>
						</Box>
					);
				} else if (field.type === "text") {
					return (
						<Box width={"$100%"}>
							<Box alignItems='center' paddingBottom={10}>
								<Controller
									control={control}
									key={field.uid}
									name={field.uid}
									rules={{
										required: false,
									}}
									render={({ field: { onChange, onBlur, value } }) => {
										return (
											<Input width={"$90%"} variant='underlined'>
												<InputField onChangeText={onChange} value={value} placeholder={field.name} />
											</Input>
										);
									}}
								/>
							</Box>
							<Box alignItems='center'>
								<Box width={"$80%"}>{formState.errors[field.uid] && <Text color='#DE2E2E'>This is required.</Text>}</Box>
							</Box>
						</Box>
					);
				}
			})}
			<Button disabled={readOnly} justifyContent='flex-start' alignItems='flex-start' variant='link' width='$90%' onPress={() => setOpen(true)}>
				<ButtonText paddingLeft={15} fontFamily='Inter'>
					Date - {format(new Date(date), "do/MMM/yyyy")}
				</ButtonText>
			</Button>
			<DatePicker
				modal
				open={open}
				theme='light'
				date={date}
				onConfirm={(date) => {
					setDate(date);
					setOpen(false);
					handelSetDate(date);
				}}
				onCancel={() => {
					setOpen(false);
				}}
				mode='date'
			/>
		</VStack>
	);
};

export default observer(CaselogDropDownOptions);
