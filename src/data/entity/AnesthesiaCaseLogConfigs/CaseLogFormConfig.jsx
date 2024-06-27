const Options = {
	ASAGrade: [
		{ label: "I", value: "I" },
		{ label: "II", value: "II" },
		{ label: "III", value: "III" },
		{ label: "IV", value: "IV" },
		{ label: "V", value: "V" },
	],
	TypeofSurgery: [
		{ label: "Elective", value: "ELECTIVE" },
		{ label: "Urgent", value: "URGENT" },
		{ label: "Emergency", value: "EMERGENCY" },
	],
	Outcome: [
		{ label: "PACU", value: "PACU" },
		{ label: "ICU", value: "ICU" },
		{ label: "Death", value: "DEATH" },
	],
};

const caseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "text", isRequire: true },
	{ name: "Patient Sex", uid: "patientSex", type: "text", isRequire: true },
	{ name: "Weight", uid: "weight", type: "text", isRequire: true },
	{ name: "Height", uid: "height", type: "text", isRequire: true },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Surgical Procedure", uid: "surgicalProcedure", type: "text", isRequire: true },
	{ name: "Speciality", uid: "speciality", type: "text", isRequire: true },
	{ name: "ASA Grade", uid: "asaGrade", type: "select-single", options: Options.ASAGrade, isRequire: true },
	{ name: "Type of Surgery", uid: "typeOfSurgery", type: "select-single", options: Options.TypeofSurgery, isRequire: true },
	{ name: "NPO - hours", uid: "npo", type: "text", isRequire: true },
	{ name: "Outcome", uid: "outcome", type: "select-single", options: Options.Outcome, isRequire: true },
];

const specialAnesthesiaCaseLogsOption = [
	{ id: "comorbidity", name: "Comorbidity" },
	{ id: "typeOfAnaesthesia", name: "Type of Anesthesia" },
	{ id: "airManagement", name: "Airway Management" },
	{ id: "regionalTechniques", name: "Regional Techniques" },
	{ id: "interventionalProcedures", name: "Interventional Procedures" },
	{ id: "monitoring", name: "Monitoring" },
	{ id: "complications", name: "Complications" },
];

export { caseLogConfigTextAndSingleSelectOptions, specialAnesthesiaCaseLogsOption };
