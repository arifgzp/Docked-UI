const Options = {
	Gender: [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	],
};

const OralRadiologyConfigTextAndSingleSelectOption = [
	{ name: "Patient Age", uid: "patientAge", type: "number", isRequire: true, width: "$48%", unit: "years" },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true, width: "$48%" },
	{ name: "Chief Complaint", uid: "chiefComplaint", type: "text", isRequire: true },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Report", uid: "report", type: "text", isRequire: true },
];

const OralRadiologySpecialOptions = [{ id: "procedure", name: "Procedure" }];

export { OralRadiologyConfigTextAndSingleSelectOption, OralRadiologySpecialOptions };
