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

const OralRadiologyCardLogViewConfig = [
	{
		label: "Diagnosis",
		value: "diagnosis",
	},
	{
		label: "Procedure",
		value: "procedure",
		preciseValuesForOralRadiology: true,
	},
	{
		label: "Report",
		value: "report",
	},
];

const OralMedicineCaseLogCardLogViewConfig = [
	{
		label: "Comorbidities",
		value: "comorbidities",
		multipleSelectValues: true,
	},
	{
		label: "Habit History",
		value: "habitHistory",
		multipleSelectValues: true,
	},
	{
		label: "Diagnosis",
		value: "diagnosis",
	},
	{
		label: "Procedure",
		value: "procedure",
		preciseValuesForOralMedicineCaseLogProcedure: true,
	},
];

const AcademicLogCardLogViewConfig = [
	{
		label: "Position",
		value: "position",
	},
	{
		label: "Activity",
		value: "activities",
		parentFollowedByFirstChild: true,
	},
	{
		label: "Title",
		value: "title",
	},
	{
		label: "Supervision",
		value: "supervision",
		multipleSelectValues: true,
	},
];

const PublicationLogCardLogViewConfig = [
	{
		label: "Type",
		value: "type",
	},
	{
		label: "Title",
		value: "title",
	},
	{
		label: "Title",
		value: "title",
	},
	{
		label: "Journal Name",
		value: "journalName",
	},
	{
		label: "Status",
		value: "status",
	},
	{
		label: "Publication Date",
		value: "date",
	},
];

const AdminWorkLogCardLogViewConfig = [
	{
		label: "Activity",
		value: "activity",
	},
	{
		label: "Position",
		value: "position",
	},
	{
		label: "Organization",
		value: "organization",
	},
];

export {
	OrthopaedicsProcedureLogCardViewConfig,
	OrthopaedicsCaseLogCardViewConfig,
	AnesthesiaCaseLogCardViewConfig,
	AnesthesiaChronicPainCardLogViewConfig,
	AnesthesiaCriticalCareCardLogViewConfig,
	OralRadiologyCardLogViewConfig,
	OralMedicineCaseLogCardLogViewConfig,
	AcademicLogCardLogViewConfig,
	PublicationLogCardLogViewConfig,
	AdminWorkLogCardLogViewConfig,
};
