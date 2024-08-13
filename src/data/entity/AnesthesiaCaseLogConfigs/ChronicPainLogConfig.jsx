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
		{ label: "Observed", value: "Observed" },
		{ label: "Assisted", value: "Assisted" },
		{ label: "Performed under supervision", value: "Performed under supervision" },
		{ label: "Performed independently", value: "Performed independently" },
		{ label: "Supervised", value: "Supervised" },
		{ label: "Conducted", value: "Conducted" },
	],
	Gender: [
		{ label: "Male", value: "Male" },
		{ label: "Female", value: "Female" },
	],
	subSpecialty: [{ label: "PMS", value: "PMS" }],
	designation: [{ label: "Doctor", value: "Doctor" }],
	workPlace: [{ label: "Malad", value: "Malad" }],
	city: [{ label: "Mumbai", value: "Mumbai" }],
	medicalCouncilName: [{ label: "IIT", value: "IIT" }],
	yearOfRegistration: [
		{ label: "2024", value: "2024" },
		{ label: "2023", value: "2023" },
	],
	medicalRegistrationNumber: [{ label: "MD2523", value: "MD2523" }],
};

const ChornicPainCaseLogConfigTextAndSingleSelectOptions = [
	{ name: "Patient Age", uid: "patientAge", type: "number", isRequire: true, width: "$48%", unit: "years" },
	{ name: "Patient Sex", uid: "patientSex", type: "select-single", options: Options.Gender, isRequire: true, width: "$48%" },
	{ name: "Diagnosis", uid: "diagnosis", type: "text", isRequire: true },
	{ name: "Indication", uid: "indication", type: "text", isRequire: true },
	{ name: "Conduct", uid: "conduct", type: "select-single", options: Options.Conduct, isRequire: true },
];

const specialAnesthesiaChronicPainOptions = [
	{ id: "technique", name: "Technique" },
	{ id: "method", name: "Method" },
	{ id: "drugsUsed", name: "Drugs Used" },
	{ id: "intervention", name: "Intervention" },
];

export { ChornicPainCaseLogConfigTextAndSingleSelectOptions, specialAnesthesiaChronicPainOptions };
