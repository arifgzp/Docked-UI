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
	Conduct: [
		{ label: "O - observed", value: "O - observed" },
		{ label: "A - assisted", value: "A - assisted" },
		{ label: "AP - performed under supervision", value: "AP - performed under supervision" },
		{ label: "P - Performed independently", value: "P - Performed independently" },
		{ label: "S - Supervised", value: "S - Supervised" },
		{ label: " C – Conducted", value: " C – Conducted" },
	],
	Gender: [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	],
};

const caseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "number", isRequire: true, width: "$48%" },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true, width: "$48%" },
	{ name: "Weight", uid: "weight", type: "number", isRequire: true, width: "$48%" },
	{ name: "Height", uid: "height", type: "number", isRequire: true, width: "$48%" },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Surgical Procedure", uid: "surgicalProcedure", type: "text", isRequire: true },
	{ name: "Speciality", uid: "speciality", type: "text", isRequire: true },
	{ name: "ASA Grade", uid: "asaGrade", type: "select-single", options: Options.ASAGrade, isRequire: true },
	{ name: "Type of Surgery", uid: "typeOfSurgery", type: "select-single", options: Options.TypeofSurgery, isRequire: true },
	{ name: "NPO - hours", uid: "npo", type: "number", isRequire: true },
	{ name: "Outcome", uid: "outcome", type: "select-single", options: Options.Outcome, isRequire: true },
	{ name: "Conduct", uid: "conduct", type: "select-single", options: Options.Conduct, isRequire: true },
];

const specialAnesthesiaCaseLogsOption = [
	{ id: "comorbidity", name: "Comorbidity" },
	{ id: "examination", name: "Examination" },
	{ id: "typeOfAnaesthesia", name: "Type of Anesthesia" },
	{ id: "drugs", name: "Drugs" },
	{ id: "airManagement", name: "Airway Management" },
	{ id: "regionalTechniques", name: "Regional Techniques" },
	{ id: "interventionalProcedures", name: "Interventional Procedures" },
	{ id: "monitoring", name: "Monitoring" },
	{ id: "complications", name: "Complications" },
];

export { caseLogConfigTextAndSingleSelectOptions, specialAnesthesiaCaseLogsOption };
