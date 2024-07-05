const Options = {
	Gender: [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	],
};

const OrthopaedicsCaseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "text", isRequire: true },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
];

const specialOrthopaedicsCaseLogsOption = [
	{ id: "diseaseCategory", name: "Disease Category" },
	{ id: "site", name: "Site" },
	{ id: "joint", name: "Joint" },
	{ id: "bones", name: "Bones" },
	{ id: "outcomes", name: "Outcomes" },
];

export { OrthopaedicsCaseLogConfigTextAndSingleSelectOptions, specialOrthopaedicsCaseLogsOption };
