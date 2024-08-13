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
	Outcome: [
		{ label: "Uneventful", value: "Uneventful" },
		{ label: "Admitted to ICU", value: "Admitted to ICU" },
		{ label: "Others", value: "Others" },
	],
};

const OrthopaedicsProcedureLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "number", isRequire: true, width: "$48%", unit: "years" },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true, width: "$48%" },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Site", uid: "sites", type: "text", isRequire: true },
	{ name: "Procedure Name", uid: "procedureName", type: "text", isRequire: true },
	{ name: "Duration of Surgery", placeholder: "in", uid: "durationOfSurgeryHours", type: "number", isRequire: true, width: "$48%", unit: "hours" },
	{ name: "", uid: "durationOfSurgeryMinutes", placeholder: "in", type: "number", isRequire: true, width: "$48%", unit: "mins" },
	{ name: "Complication", uid: "complication", type: "text", isRequire: true },
	{ name: "Conduct", uid: "conduct", type: "select-single", options: Options.Conduct, isRequire: true },
	{ name: "Outcome", uid: "outcome", type: "select-single", options: Options.Outcome, isRequire: true, outcome: true },
];

const specialOrthopaedicsProcedureLogOption = [{ id: "procedure", name: "Procedure" }];

export { OrthopaedicsProcedureLogConfigTextAndSingleSelectOptions, specialOrthopaedicsProcedureLogOption };
