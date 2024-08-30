import React from "react";
import { VStack, Text } from "@gluestack-ui/themed";

const getSpecialCaseLogOptions = (key) => {
	switch (key) {
		case "CaseLog":
			return specialAnesthesiaCaseLogsOption;
		case "ChronicPain":
			return specialAnesthesiaChronicPainOptions;
		case "CriticalCareCaseLog":
			return specialAnesthesiaCriticalCareCaseLogOptions;
		case "OrthopaedicsCaseLog":
			return specialOrthopaedicsCaseLogsOption;
		case "OrthopaedicsProcedureLog":
			return specialOrthopaedicsProcedureLogOption;
		case "OrthodonticsClinicalCaseLog":
			return specialOrthodonticsClinicalCaseLog;
		case "OrthodonticsPreClinical":
			return specialOrthodonticsPreClinical;
		default:
			return [];
	}
};

const TreeField = ({ field, control, setValue }) => {
	return (
		<VStack width={field.width ?? "$100%"} gap='$2'>
			<Text size='xs' color='rgba(81, 81, 81, 0.7)'>
				{field.name}
			</Text>
			{/* <SpecialCaseLogSelectOptions
				setValue={setValue}
				caseLogData={{}}
				specialCaseLogsOption={getSpecialCaseLogOptions(caseLogFormToGet)}
				refernceToGetSpecialOptions={caseLogFormToGet}
			/> */}
			<Text>Tree field implementation needed</Text>
		</VStack>
	);
};

export default TreeField;
