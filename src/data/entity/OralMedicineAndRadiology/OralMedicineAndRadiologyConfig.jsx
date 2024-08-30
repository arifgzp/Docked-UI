const Options = {
	Gender: [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	],
};

const OralMedicineAndRadiologyConfigTextAndSingleSelectOption = [
	{ name: "Patient Age", uid: "patientAge", type: "number", isRequire: true, width: "$48%", unit: "years" },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true, width: "$48%" },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Treatment", uid: "treatment", type: "text", isRequire: true },
];

const OralMedicineAndRadiologySpecialOptions = [
	{ id: "comorbidities", name: "Comorbidities" },
	{ id: "drugAllergyReaction", name: "Drug Allergy/Reaction" },
	{ id: "habitHistory", name: "Habit History" },
	{ id: "lesion", name: "Lesion" },
	{ id: "procedure", name: "Procedure" },
];

export { OralMedicineAndRadiologyConfigTextAndSingleSelectOption, OralMedicineAndRadiologySpecialOptions };
