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
		{ label: "O - observed", value: "O - observed" },
		{ label: "A - assisted", value: "A - assisted" },
		{ label: "AP - performed under supervision", value: "AP - performed under supervision" },
		{ label: "P - Performed independently", value: "P - Performed independently" },
		{ label: "S - Supervised", value: "S - Supervised" },
		{ label: " C – Conducted", value: " C – Conducted" },
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
	{ name: "Patient Age", uid: "patientAge", type: "number", isRequire: true, width: "$48%" },
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
