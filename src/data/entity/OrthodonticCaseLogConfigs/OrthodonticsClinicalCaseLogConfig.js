const Options = {
	Gender: [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	],
};

const OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "text", isRequire: true },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Technique Used", uid: "techniqueUsed", type: "text", isRequire: true },
	{ name: "Outcome", uid: "outcome", type: "text", isRequire: true },
];

const specialOrthodonticsClinicalCaseLog = [
	{ id: "treatmentPlan", name: "Treatment Plan" },
	{ id: "applianceUsed", name: "Appliance Used" },
];

export { OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions, specialOrthodonticsClinicalCaseLog };