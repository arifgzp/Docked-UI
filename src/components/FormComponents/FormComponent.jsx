import React, { useState, useRef } from "react";
import { VStack, HStack, Text, Box } from "@gluestack-ui/themed";
import DateField from "./DateField";
import InputField from "./InputField";
import SelectField from "./SelectField";
import SpecialCaseLogSelectOptions from "../../Screens/main/LogScreens/CaseLogsScreens/SpecialCaseLogSelectOptions";
import { Divider } from "@gluestack-ui/themed";

const FormComponent = ({ formFields, initialData, setValue, control, watch, refernceToGetSpecialOptions, specialOptions }) => {
	const [openSelectField, setOpenSelectField] = useState(null);
	const inputRefs = useRef({});

	const scrollToInput = (fieldId) => {
		// Implement scrolling logic here
	};

	const handleNext = (currentFieldId) => {
		// Implement logic to focus on the next field
	};

	const renderField = (field) => {
		switch (field.type) {
			case "date":
				return <DateField initialDate={initialData.date} key={field.uid} field={field} control={control} setValue={setValue} />;
			case "text":
			case "number":
				return (
					<InputField key={field.uid} field={field} control={control} inputRefs={inputRefs} scrollToInput={scrollToInput} handleNext={handleNext} />
				);
			case "select-single":
				return (
					<SelectField
						key={field.uid}
						field={field}
						control={control}
						openSelectField={openSelectField}
						setOpenSelectField={setOpenSelectField}
						handleNext={handleNext}
						watch={watch}
					/>
				);
			default:
				return null;
		}
	};

	console.log("what is date inside the formcomponet?", initialData);

	return (
		<VStack gap='$4' pb={20}>
			<HStack width='$100%' pl='$5' pr='$5' gap='$2' flexWrap='wrap' justifyContent='space-between'>
				{formFields.map(renderField)}
			</HStack>
			{specialOptions !== null && (
				<>
					<Divider />
					<SpecialCaseLogSelectOptions
						setValue={setValue}
						caseLogData={initialData ? initialData : {}}
						specialOptions={specialOptions}
						refernceToGetSpecialOptions={refernceToGetSpecialOptions}
					/>
				</>
			)}
		</VStack>
	);
};

export default FormComponent;
