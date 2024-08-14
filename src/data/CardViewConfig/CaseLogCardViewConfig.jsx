const OrthopaedicsProcedureLogCardViewConfig = [
	{
		label: "Diagnosis",
		value: "diagnosis",
	},
	{
		label: "Conduct",
		value: "conduct",
	},
	{
		label: "Procedure Name",
		value: "procedureName",
	},
	{
		label: "Duration of Surgery",
		value: "durationOfSurgeryHours",
		valueUnits: "hrs",
		secondValue: "durationOfSurgeryMinutes",
		secondValueUnits: "min",
	},
	{
		label: "Complication",
		value: "complication",
	},
	{
		label: "Outcome",
		value: "outcome",
	},
	{
		label: "Procedure",
		value: "procedure",
		parentFollowedByFirstChild: true,
	},
];

const OrthopaedicsCaseLogCardViewConfig = [
	{
		label: "Diagnosis",
		value: "diagnosis",
	},
	{
		label: "Disease Category",
		value: "diseaseCategory",
		multipleSelectValues: true,
	},
	{
		label: "Outcome",
		value: "outcomes",
		multipleSelectValues: true,
	},
];

const AnesthesiaCaseLogCardViewConfig = [
	{
		label: "Diagnosis",
		value: "diagnosis",
	},
	{
		label: "Conduct",
		value: "conduct",
	},
	{
		label: "Surgery",
		value: "surgicalProcedure",
	},
	{
		label: "ASA Grade",
		value: "asaGrade",
	},
	{
		label: "Type of Anesthesia",
		value: "typeOfAnaesthesia",
		firstParentOptionToDisplay: true,
	},
	{
		label: "Regional Techniques",
		value: "regionalTechniques",
		onlySpecificOptionsForAnesthesiaCaseLogCard: true,
		options: ["UpperExtremityBlock", "LowerExtremityBlock", "TruncalBlock", "Head&NeckBlock", "NeuraxialBlock", "LabourAnalgesia"],
	},
	{
		label: "Complications",
		value: "complications",
		multipleSelectValues: true,
	},
	{
		label: "Outcome",
		value: "outcome",
	},
];

const AnesthesiaChronicPainCardLogViewConfig = [
	{
		label: "Diagnosis",
		value: "diagnosis",
	},
	{
		label: "Conduct",
		value: "conduct",
	},
	{
		label: "Indication",
		value: "indication",
	},
	{
		label: "Technique",
		value: "technique",
		multipleSelectValues: true,
	},
	{
		label: "Method",
		value: "method",
		parentFollowedByFirstChild: true,
	},
	{
		label: "Intervention",
		value: "intervention",
		multipleSelectValues: true,
	},
];

const AnesthesiaCriticalCareCardLogViewConfig = [
	{
		label: "Diagnosis",
		value: "diagnosis",
	},
	{
		label: "Conduct",
		value: "conduct",
	},
	{
		label: "Procedures",
		value: "procedures",
		parentofSelectedValues: true,
	},
	{
		label: "Complications",
		value: "complication",
	},
	{
		label: "Outcome",
		value: "outcome",
	},
];

export {
	OrthopaedicsProcedureLogCardViewConfig,
	OrthopaedicsCaseLogCardViewConfig,
	AnesthesiaCaseLogCardViewConfig,
	AnesthesiaChronicPainCardLogViewConfig,
	AnesthesiaCriticalCareCardLogViewConfig,
};
