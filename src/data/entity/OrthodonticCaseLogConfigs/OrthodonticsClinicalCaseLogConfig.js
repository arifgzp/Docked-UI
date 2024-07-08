const Options = {
	Gender: [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	],
	Conduct: [
		{ label: "O - observed", value: "O - observed" },
		{ label: "A - assisted", value: "A - assisted" },
		{ label: "AP - performed under supervision", value: "AP - performed under supervision" },
		{ label: "P - Performed independently", value: "P - Performed independently" },
		{ label: "S - Supervised", value: "S - Supervised" },
		{ label: " C – Conducted", value: " C – Conducted" },
	],
};

const OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "text", isRequire: true, width: "$48%" },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true, width: "$48%" },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Technique Used", uid: "techniqueUsed", type: "text", isRequire: true },
	{ name: "Outcome", uid: "outcome", type: "text", isRequire: true },
	{ name: "Conduct", uid: "conduct", type: "select-single", options: Options.Conduct, isRequire: true },
];

const specialOrthodonticsClinicalCaseLog = [
	{ id: "treatmentPlan", name: "Treatment Plan" },
	{ id: "applianceUsed", name: "Appliance Used" },
];

export { OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions, specialOrthodonticsClinicalCaseLog };
