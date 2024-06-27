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
} from "@gluestack-ui/themed";
import { ChevronDown } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { observer } from "mobx-react";
import appStoreInstance from "../../stores/AppStore";

const specialtyList = {
	Anaesthesiology: {
		SuperSpeciality: [
			{
				label: "Critical Care Anesthesiology",
				value: "CriticalCareAnesthesiology",
			},
			{
				label: "Pediatric Anesthesiology",
				value: "PediatricAnesthesiology",
			},
			{
				label: "Cardiac Anaesthesiology",
				value: "CardiacAnaesthesiology",
			},
			{
				label: "Neuro-anaesthesiology",
				value: "Neuro-anaesthesiology",
			},
			{
				label: "Transplant Anaesthesia",
				value: "TransplantAnaesthesia",
			},
			{
				label: "Obstetric Anaesthesiology",
				value: "ObstetricAnaesthesiology",
			},
			{
				label: "Pain Medicine",
				value: "PainMedicine",
			},
			{
				label: "Regional Anaesthesia",
				value: "RegionalAnaesthesia",
			},
		],
		SubSpeciality: [],
	},
	Orthodontics: {
		SuperSpeciality: [
			{
				label: "Craniofacial Orthodontics",
				value: "CraniofacialOrthodontics",
			},
			{
				label: "Surgical Orthodontics",
				value: "SurgicalOrthodontics",
			},
			{
				label: "Adult Orthodontics",
				value: "AdultOrthodontics",
			},
			{
				label: "Pediatric Orthodontics",
				value: "PediatricOrthodontics",
			},
			{
				label: "Lingual Orthodontics",
				value: "LingualOrthodontics",
			},
			{
				label: "Clear Aligner Therapy",
				value: "ClearAlignerTherapy",
			},
		],
		SubSpeciality: [],
	},
	Orthopaedics: {
		SuperSpeciality: [
			{
				label: "Joint Replacement Surgery",
				value: "JointReplacementSurgery",
			},
			{
				label: "Sports Medicine",
				value: "SportsMedicine",
			},
			{
				label: "Spine Surgery",
				value: "SpineSurgery",
			},
			{
				label: "Pediatric Orthopaedics",
				value: "PediatricOrthopaedics",
			},
			{
				label: "Orthopaedic Oncology",
				value: "OrthopaedicOncology",
			},
			{
				label: "Trauma Surgery",
				value: "TraumaSurgery",
			},
			{
				label: "Hand Surgery",
				value: "HandSurgery",
			},
		],
		SubSpeciality: [],
	},
};

const YourExpertise = ({ control, formState, formFields, reset }) => {
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
		if (selectedBroadSpecialty) {
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
		<Loader apiLoadingInfo={appStoreInstance.isLoading}>
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<Box flex={1}>
					<VStack space='4xl' width={"$100%"}>
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
										<Box alignItems='center' paddingBottom={10}>
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
															<Select
																width={"$80%"}
																onBlur={onBlur}
																onValueChange={(val) => {
																	onChange(val);
																	handleOnBroadSpecialtyChange(val);
																}}
																selectedValue={value}>
																<SelectTrigger variant='underlined' size='md'>
																	<SelectInput placeholder={field.name} />
																	<SelectIcon mr='$3'>
																		<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
																	</SelectIcon>
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
													}
													return (
														<Select
															isDisabled={field.uid === "superSpecialty" ? isSuperOptionDisable : isSubOptionDisable}
															width={"$80%"}
															onBlur={onBlur}
															onValueChange={onChange}
															selectedValue={value}
															placeholder={field.uid === "superSpecialty" ? superSpecialtyPlaceholder : subSpecialtyPlaceholder}>
															<SelectTrigger variant='underlined' size='md'>
																<SelectInput placeholder={field.name} />
																<SelectIcon mr='$3'>
																	<Icon as={ChevronDown} m='$2' w='$4' h='$4' />
																</SelectIcon>
															</SelectTrigger>
															<SelectPortal>
																<SelectBackdrop />
																<SelectContent>
																	<Text padding={10} size='xl'>
																		{field.name}
																	</Text>
																	<Divider borderWidth={0.1} />
																	{options.map((option, index) => {
																		return <SelectItem key={index} label={option.label} value={option.value} />;
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
								</React.Fragment>
							);
						})}
					</VStack>
				</Box>
			</ScrollView>
		</Loader>
	);
};

export default observer(YourExpertise);
