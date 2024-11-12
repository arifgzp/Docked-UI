import {
	CheckIcon,
	CheckboxGroup,
	CheckboxIndicator,
	Divider,
	KeyboardAvoidingView,
	Select,
	SelectDragIndicator,
	SelectInput,
	SelectPortal,
	SelectScrollView,
	SelectTrigger,
} from "@gluestack-ui/themed";
import { CheckboxLabel } from "@gluestack-ui/themed";
import { CheckboxIcon } from "@gluestack-ui/themed";
import { Checkbox } from "@gluestack-ui/themed";
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
	Toast,
	useToast,
	ToastTitle,
	ToastDescription,
	InputIcon,
	InputSlot,
	SearchIcon,
} from "@gluestack-ui/themed";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState, useRef, useCallback } from "react";
import { SelectIcon } from "@gluestack-ui/themed";
import DatePicker from "react-native-date-picker";
import { ChevronDown } from "lucide-react-native";
import { SelectBackdrop } from "@gluestack-ui/themed";
import { SelectItem, SelectContent } from "@gluestack-ui/themed";
import { Icon } from "@gluestack-ui/themed";
import { ScrollView } from "@gluestack-ui/themed";
import { format } from "date-fns";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { ButtonIcon } from "@gluestack-ui/themed";
import { Modal } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";
import { ModalContent } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { ModalCloseButton } from "@gluestack-ui/themed";
import { CloseIcon } from "@gluestack-ui/themed";
import { ModalBody } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import { PhoneIcon } from "@gluestack-ui/themed";
import { SelectDragIndicatorWrapper } from "@gluestack-ui/themed";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import { designation } from "../data/entity/DesignationConfig";

const NewFacultyForm = ({ control, errors, watch }) => {
	const selectedDesignation = watch("designation");

	return (
		<VStack space='md'>
			{/* Email/Username Field */}
			<VStack space='sm'>
				<Text size='sm'>Email Address</Text>
				<Controller
					name='userName'
					control={control}
					rules={{
						required: "Email is required",
						pattern: {
							value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
							message: "Please enter a valid email address",
						},
						validate: {
							noLeadingSpecialChars: (value) => !/^[!#$%&'*+/=?^_`{|}~-]/.test(value) || "Email cannot start with special characters",
							noConsecutiveSpecialChars: (value) => !/[!#$%&'*+/=?^_`{|}~-]{2,}/.test(value) || "Email cannot contain consecutive special characters",
						},
					}}
					render={({ field: { onChange, value } }) => (
						<Input>
							<InputField
								placeholder='Enter email address'
								value={value}
								onChangeText={onChange}
								autoCapitalize='none'
								keyboardType='email-address'
							/>
							{value && (
								<InputSlot pr='$3' onPress={() => onChange("")}>
									<InputIcon as={CloseIcon} />
								</InputSlot>
							)}
						</Input>
					)}
				/>
				{errors.userName && (
					<Text size='sm' color='$error600'>
						{errors.userName.message}
					</Text>
				)}
			</VStack>

			{/* First Name Field */}
			<VStack space='sm'>
				<Text size='sm'>First Name</Text>
				<Controller
					name='firstName'
					control={control}
					rules={{
						required: "First name is required",
						pattern: {
							value: /^[A-Za-z\s]+$/,
							message: "Please enter a valid name",
						},
					}}
					render={({ field: { onChange, value } }) => (
						<Input>
							<InputField placeholder='Enter first name' value={value} onChangeText={onChange} autoCapitalize='words' />
							{value && (
								<InputSlot pr='$3' onPress={() => onChange("")}>
									<InputIcon as={CloseIcon} />
								</InputSlot>
							)}
						</Input>
					)}
				/>
				{errors.firstName && (
					<Text size='sm' color='$error600'>
						{errors.firstName.message}
					</Text>
				)}
			</VStack>

			{/* Last Name Field */}
			<VStack space='sm'>
				<Text size='sm'>Last Name</Text>
				<Controller
					name='lastName'
					control={control}
					rules={{
						required: "Last name is required",
						pattern: {
							value: /^[A-Za-z\s]+$/,
							message: "Please enter a valid name",
						},
					}}
					render={({ field: { onChange, value } }) => (
						<Input>
							<InputField placeholder='Enter last name' value={value} onChangeText={onChange} autoCapitalize='words' />
							{value && (
								<InputSlot pr='$3' onPress={() => onChange("")}>
									<InputIcon as={CloseIcon} />
								</InputSlot>
							)}
						</Input>
					)}
				/>
				{errors.lastName && (
					<Text size='sm' color='$error600'>
						{errors.lastName.message}
					</Text>
				)}
			</VStack>

			{/* Phone Number Field */}
			<VStack space='sm'>
				<Text size='sm'>Phone Number</Text>
				<HStack space='md'>
					<Select w='$25' isReadOnly selectedValue='+91'>
						<SelectTrigger>
							<SelectInput placeholder='+91' />
						</SelectTrigger>
					</Select>
					<Controller
						name='phoneNumber'
						control={control}
						rules={{
							required: "Phone number is required",
							pattern: {
								value: /^\d{10}$/,
								message: "Please enter a valid 10-digit phone number",
							},
						}}
						render={({ field: { onChange, value } }) => (
							<Input flex={1}>
								<InputField
									placeholder='Enter phone number'
									value={value}
									keyboardType='numeric'
									maxLength={10}
									onChangeText={(text) => onChange(text.replace(/[^0-9]/g, ""))}
								/>
								{value && (
									<InputSlot pr='$3' onPress={() => onChange("")}>
										<InputIcon as={CloseIcon} />
									</InputSlot>
								)}
							</Input>
						)}
					/>
				</HStack>
				{errors.phoneNumber && (
					<Text size='sm' color='$error600'>
						{errors.phoneNumber.message}
					</Text>
				)}
			</VStack>

			{/* Designation Field */}
			<VStack space='sm'>
				<Text size='sm'>Designation</Text>
				<Controller
					name='designation'
					control={control}
					rules={{ required: "Designation is required" }}
					render={({ field: { onChange, value } }) => (
						<Select selectedValue={value} onValueChange={onChange}>
							<SelectTrigger>
								<SelectInput placeholder='Select designation' />
								<SelectIcon mr='$3'>
									<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
								</SelectIcon>
							</SelectTrigger>
							<SelectPortal>
								<SelectBackdrop />
								<SelectContent>
									<SelectScrollView>
										{designation.map((option) => (
											<SelectItem key={option.value} label={option.label} value={option.value} />
										))}
									</SelectScrollView>
								</SelectContent>
							</SelectPortal>
						</Select>
					)}
				/>
				{errors.designation && (
					<Text size='sm' color='$error600'>
						{errors.designation.message}
					</Text>
				)}
			</VStack>

			{/* Other Designation Field (conditional) */}
			{selectedDesignation === "Others" && (
				<VStack space='sm'>
					<Text size='sm'>Other Designation</Text>
					<Controller
						name='otherDesignation'
						control={control}
						rules={{
							required: "Other designation is required",
						}}
						render={({ field: { onChange, value } }) => (
							<Input>
								<InputField placeholder='Specify designation' value={value} onChangeText={onChange} />
								{value && (
									<InputSlot pr='$3' onPress={() => onChange("")}>
										<InputIcon as={CloseIcon} />
									</InputSlot>
								)}
							</Input>
						)}
					/>
					{errors.otherDesignation && (
						<Text size='sm' color='$error600'>
							{errors.otherDesignation.message}
						</Text>
					)}
				</VStack>
			)}
		</VStack>
	);
};

export default observer(NewFacultyForm);
