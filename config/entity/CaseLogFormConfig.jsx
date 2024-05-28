const Options = {
	hospital: [{ label: "JJ", value: "JJ" }],
	faculty: [{ label: "MBBS", value: "MBBS" }],
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

const caseLogConfig = [
	{ name: "Broad Specialty", uid: "broadSpecialty", type: "select-single", options: Options.hospital, isRequire: true },
	{ name: "Super Specialty", uid: "superSpecialty", type: "select-single", options: Options.faculty, isRequire: true },
];

export default caseLogConfig;
