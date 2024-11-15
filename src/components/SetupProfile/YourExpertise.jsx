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
	SelectItem,
	Divider,
	SelectDragIndicator,
} from "@gluestack-ui/themed";
import { ChevronDown } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { observer } from "mobx-react";
import appStoreInstance from "../../stores/AppStore";
import { SelectScrollView } from "@gluestack-ui/themed";
import { SelectDragIndicatorWrapper } from "@gluestack-ui/themed";

const specialtyList = {
	Anaesthesiology: {
		SuperSpeciality: [
			{
				label: "Critical Care Anesthesiology",
				value: "Critical Care Anesthesiology",
			},
			{
				label: "Pediatric Anesthesiology",
				value: "Pediatric Anesthesiology",
			},
			{
				label: "Cardiac Anaesthesiology",
				value: "Cardiac Anaesthesiology",
			},
			{
				label: "Neuro-anaesthesiology",
				value: "Neuro-anaesthesiology",
			},
			{
				label: "Transplant Anaesthesia",
				value: "Transplant Anaesthesia",
			},
			{
				label: "Obstetric Anaesthesiology",
				value: "Obstetric Anaesthesiology",
			},
			{
				label: "Pain Medicine",
				value: "Pain Medicine",
			},
			{
				label: "Regional Anaesthesia",
				value: "Regional Anaesthesia",
			},
		],
		SubSpeciality: [],
	},
	Orthodontics: {
		SuperSpeciality: [],
		SubSpeciality: [],
	},
	Orthopaedics: {
		SuperSpeciality: [
			{
				label: "Podiatry",
				value: "Podiatry",
			},
			{
				label: "Hand Surgery",
				value: "Hand Surgery",
			},
			{
				label: "Paediatric Orthopaedics",
				value: "Paediatric Orthopaedics",
			},
			{
				label: "Spine Surgery",
				value: "Spine Surgery",
			},
			{
				label: "Orthopaedic Oncology",
				value: "Orthopaedic Oncology",
			},
			{
				label: "Trauma Surgery",
				value: "Trauma Surgery",
			},
			{
				label: "Shoulder & Elbow Surgery",
				value: "Shoulder & Elbow Surgery",
			},
			{
				label: "Hip & Knee Surgery",
				value: "Hip & Knee Surgery",
			},
			{
				label: "Joint Replacement",
				value: "Joint Replacement",
			},
			{
				label: "Sports",
				value: "Sports",
			},
		],
		SubSpeciality: [],
	},
	OralMedicineAndRadiology: {
		SuperSpeciality: [],
		SubSpeciality: [],
	},
};

const YourExpertise = ({ control, formState, formFields, reset, watch }) => {
	const [selectedBroadSpecialty, setSelectedBroadSpecialty] = useState("");
	const [superSpecialtyOptions, setSuperSpecialtyOptions] = useState([]);
	const [subSpecialtyOptions, setSubSpecialtyOptions] = useState([]);
	const [isSuperOptionDisable, setIsSuperOptionDisable] = useState(true);
	const [isSubOptionDisable, setIsSubOptionDisable] = useState(true);
	const [superSpecialtyPlaceholder, setSuperSpecialtyPlaceholder] = useState("Super Specialty");
	const [subSpecialtyPlaceholder, setSubSpecialtyPlaceholder] = useState("Sub Specialty");

	const handleOnBroadSpecialtyChange = (newValue) => {
		if (selectedBroadSpecialty !== newValue) {
			// Reset react-hook-form values for 'superSpecialty' & 'subSpecialty'
			reset({ broadSpecialty: newValue, superSpecialty: null, subSpecialty: null });
			// Reset state for 'superSpecialtyOptions' & 'subSpecialtyOptions'
			setSuperSpecialtyOptions([]);
			setSubSpecialtyOptions([]);
		}
		setSelectedBroadSpecialty(newValue);
	};

	useEffect(() => {
		console.log("Log in the selection of the broad specialty?????");
		setSelectedBroadSpecialty(watch("broadSpecialty"));
		if (selectedBroadSpecialty === "Anaesthesiology" || selectedBroadSpecialty === "Orthopaedics") {
			const specialties = specialtyList[selectedBroadSpecialty] || { SuperSpeciality: [], SubSpeciality: [] };
			setSuperSpecialtyOptions(specialties.SuperSpeciality);
			setSubSpecialtyOptions(specialties.SubSpeciality);
			setIsSuperOptionDisable(false);
			setIsSubOptionDisable(specialties.SubSpeciality.length === 0);
		} else {
			setSuperSpecialtyOptions([]);
			setSubSpecialtyOptions([]);
			setIsSuperOptionDisable(true);
			setIsSubOptionDisable(true);
		}
	}, [selectedBroadSpecialty]);

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<Box flex={1}>
				<VStack space='2xl' width={"$100%"}>
					{formFields.map((field, index) => {
						let options = field.options;
						if (field.uid === "superSpecialty") {
							options = superSpecialtyOptions;
						} else if (field.uid === "subSpecialty") {
							options = subSpecialtyOptions;
						}
						return (
							<React.Fragment key={index}>
								<Box width={"$100%"}>
									<Box px='$5'>
										<Controller
											control={control}
											key={field.uid}
											name={field.uid}
											rules={{
												required: field.isRequire,
											}}
											render={({ field: { onChange, onBlur, value } }) => {
												console.log("ID : ", field.uid, " | val : ", value);
												if (field.uid === "broadSpecialty") {
													return (
														<VStack>
															<Select
																borderWidth={0.5}
																borderRadius={5}
																borderColor='rgba(77, 83, 86, 0.4)'
																onBlur={onBlur}
																onValueChange={(val) => {
																	onChange(val);
																	handleOnBroadSpecialtyChange(val);
																}}
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
																						key={option.value}
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
												}
												return (
													<VStack>
														<Select
															borderWidth={0.5}
															borderRadius={5}
															borderColor='rgba(77, 83, 86, 0.4)'
															isDisabled={field.uid === "superSpecialty" ? isSuperOptionDisable : isSubOptionDisable}
															onBlur={onBlur}
															onValueChange={onChange}
															selectedValue={value}
															placeholder={field.uid === "superSpecialty" ? superSpecialtyPlaceholder : subSpecialtyPlaceholder}>
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
																		{options.map((option, index) => {
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
											}}
										/>
									</Box>
									<Box px='$5'>
										<Box width={"$80%"}>
											{formState.errors[field.uid] && (
												<Text fontSize='$xs' color='#CC3F0C'>
													This is required.
												</Text>
											)}
										</Box>
									</Box>
								</Box>
							</React.Fragment>
						);
					})}
				</VStack>
			</Box>
		</ScrollView>
	);
};

export default observer(YourExpertise);
