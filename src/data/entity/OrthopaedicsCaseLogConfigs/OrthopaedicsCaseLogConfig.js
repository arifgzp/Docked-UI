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

const OrthopaedicsCaseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "text", isRequire: true, width: "$48%" },
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
