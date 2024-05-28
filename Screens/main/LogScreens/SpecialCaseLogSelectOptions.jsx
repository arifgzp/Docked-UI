import {
	CheckIcon,
	CheckboxGroup,
	CheckboxIndicator,
	KeyboardAvoidingView,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
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
	ButtonIcon,
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

import { ChevronDown, ChevronRight, CircleX } from "lucide-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";
import { Modal } from "@gluestack-ui/themed";
import { useState, useRef } from "react";
import { Heading } from "@gluestack-ui/themed";
import { ModalFooter } from "@gluestack-ui/themed";
import { ModalBackdrop } from "@gluestack-ui/themed";

const SpecialCaseLogSelectOptions = ({ navigation, control, formState }) => {
	const [showModal, setShowModal] = useState(false);
	const ref = useRef(null);
	return (
		<VStack space='lg' paddingBottom={10} paddingTop={20}>
			<Box width={"$100%"}>
				<Box alignItems='center'>
					<Controller
						control={control}
						rules={{
							required: true,
						}}
						render={({ field: { onChange, onBlur, value } }) => {
							console.log("Your Expertise: ", value);
							return (
								<Button onPress={() => setShowModal(true)} size='lg' justifyContent='space-between' variant='specialLogs'>
									<ButtonText>Type of Anesthesia</ButtonText>
									<ButtonIcon as={ChevronRight} size={20} name='arrow-forward-outline' color='#666666' />
								</Button>
							);
						}}
						name='faculty'
					/>
				</Box>
				<Box alignItems='center'>
					<Box width={"$80%"}>{formState.errors.faculty && <Text color='#DE2E2E'>This is required.</Text>}</Box>
				</Box>
				<Modal
					isOpen={showModal}
					onClose={() => {
						setShowModal(false);
					}}
					finalFocusRef={ref}>
					<ModalBackdrop />
					<ModalContent>
						<ModalHeader>
							<Heading size='lg'>Types of Anesthesia</Heading>
							<ModalCloseButton>
								<Icon as={CircleX} />
							</ModalCloseButton>
						</ModalHeader>
						<ModalBody>
							<Text>
								Elevate user interactions with our versatile modals. Seamlessly integrate notifications, forms, and media displays. Make an impact
								effortlessly.
							</Text>
						</ModalBody>
						<ModalFooter>
							<Button
								variant='outline'
								size='sm'
								action='secondary'
								mr='$3'
								onPress={() => {
									setShowModal(false);
								}}>
								<ButtonText>Cancel</ButtonText>
							</Button>
							<Button
								size='sm'
								action='positive'
								borderWidth='$0'
								onPress={() => {
									setShowModal(false);
								}}>
								<ButtonText>Done</ButtonText>
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</VStack>
	);
};

export default SpecialCaseLogSelectOptions;
