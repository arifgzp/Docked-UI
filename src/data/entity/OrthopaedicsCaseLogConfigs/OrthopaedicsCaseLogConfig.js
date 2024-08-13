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
		{ label: " Conducted", value: "Conducted" },
	],
};

const OrthopaedicsCaseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "number", isRequire: true, width: "$48%", unit: "years" },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true, width: "$48%" },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Conduct", uid: "conduct", type: "select-single", options: Options.Conduct, isRequire: true },
];

const specialOrthopaedicsCaseLogsOption = [
	{ id: "diseaseCategory", name: "Disease Category" },
	{ id: "site", name: "Site" },
	{ id: "joint", name: "Joint" },
	{ id: "bones", name: "Bones" },
	{ id: "outcomes", name: "Outcomes" },
];

export { OrthopaedicsCaseLogConfigTextAndSingleSelectOptions, specialOrthopaedicsCaseLogsOption };
