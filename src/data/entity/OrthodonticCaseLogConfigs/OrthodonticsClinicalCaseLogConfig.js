const Options = {
	Gender: [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	],
	Conduct: [
		{ label: "Observed", value: "Observed" },
		{ label: "Assisted", value: "Assisted" },
		{ label: "Performed under supervision", value: "Performed under supervision" },
		{ label: "Performed independently", value: "Performed independently" },
		{ label: "Supervised", value: "Supervised" },
		{ label: "Conducted", value: "Conducted" },
	],
};

const OrthodonticsClinicalCaseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "number", isRequire: true, width: "$48%", unit: "years" },
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
