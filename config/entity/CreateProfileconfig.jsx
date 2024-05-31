const Options = {
	broadSpecialty: [
		{ label: "Anesthesia", value: "Anesthesia" },
		{ label: "Cardiology", value: "Cardiology" },
		{ label: "Dermatology", value: "Dermatology" },
		{ label: "Emergency Medicine", value: "Emergency Medicine" },
		{ label: "General Surgery", value: "General Surgery" },
		{ label: "Neurology", value: "Neurology" },
	],
	superSpecialty: [
		{ label: "MBBS", value: "MBBS" },
		{ label: "MD", value: "MD" },
		{ label: "MS", value: "MS" },
		{ label: "DM", value: "DM" },
		{ label: "MCh", value: "MCh" },
	],
	subSpecialty: [
		{ label: "PMS", value: "PMS" },
		{ label: "Endocrinology", value: "Endocrinology" },
		{ label: "Gastroenterology", value: "Gastroenterology" },
		{ label: "Nephrology", value: "Nephrology" },
		{ label: "Rheumatology", value: "Rheumatology" },
	],
	designation: [
		{ label: "Doctor", value: "Doctor" },
		{ label: "Consultant", value: "Consultant" },
		{ label: "Surgeon", value: "Surgeon" },
		{ label: "Resident", value: "Resident" },
		{ label: "Specialist", value: "Specialist" },
	],
	workPlace: [
		{ label: "Malad", value: "Malad" },
		{ label: "Andheri", value: "Andheri" },
		{ label: "Bandra", value: "Bandra" },
		{ label: "Juhu", value: "Juhu" },
		{ label: "Powai", value: "Powai" },
	],
	city: [
		{ label: "Mumbai", value: "Mumbai" },
		{ label: "Delhi", value: "Delhi" },
		{ label: "Bangalore", value: "Bangalore" },
		{ label: "Chennai", value: "Chennai" },
		{ label: "Hyderabad", value: "Hyderabad" },
	],
	medicalCouncilName: [
		{ label: "IIT", value: "IIT" },
		{ label: "AIIMS", value: "AIIMS" },
		{ label: "JIPMER", value: "JIPMER" },
		{ label: "AFMC", value: "AFMC" },
		{ label: "CMC", value: "CMC" },
	],
	yearOfRegistration: [
		{ label: "2024", value: "2024" },
		{ label: "2023", value: "2023" },
		{ label: "2022", value: "2022" },
		{ label: "2021", value: "2021" },
		{ label: "2020", value: "2020" },
	],
	medicalRegistrationNumber: [
		{ label: "MD2523", value: "MD2523" },
		{ label: "MD2524", value: "MD2524" },
		{ label: "MD2525", value: "MD2525" },
		{ label: "MD2526", value: "MD2526" },
		{ label: "MD2527", value: "MD2527" },
	],
};

const createProfileConfig = [
	{
		step: 1,
		id: "step-1",
		label: "Your Expertise",
		content: {
			component: () => import("../../components/SetupProfile/YourExpertise"),
			config: {
				fields: [
					{ name: "Broad Specialty", uid: "broadSpecialty", type: "select-single", options: Options.broadSpecialty, isRequire: true },
					{ name: "Super Specialty", uid: "superSpecialty", type: "select-single", options: Options.superSpecialty, isRequire: true },
					{ name: "Sub Specialty", uid: "subSpecialty", type: "select-single", options: Options.subSpecialty, isRequire: true },
				],
			},
		},
	},
	{
		step: 2,
		id: "step-2",
		label: "Your Workplace",
		content: {
			component: () => import("../../components/SetupProfile/YourWorkplace"),
			config: {
				fields: [
					{ name: "Designation", uid: "designation", type: "select-single", options: Options.designation, isRequire: true },
					{ name: "Work Place", uid: "workPlace", type: "select-single", options: Options.workPlace, isRequire: true },
					{ name: "City", uid: "city", type: "select-single", options: Options.city, isRequire: true },
				],
			},
		},
	},
	{
		step: 3,
		id: "step-3",
		label: "Verify MHID",
		content: {
			component: () => import("../../components/SetupProfile/VerifyMHD"),
			config: {
				fields: [
					{ name: "Medical Council Name", uid: "medicalCouncilName", type: "select-single", options: Options.medicalCouncilName, isRequire: true },
					{ name: "Year of Registration", uid: "yearOfRegistration", type: "select-single", options: Options.yearOfRegistration, isRequire: true },
					{
						name: "Medical Registration Number",
						uid: "medicalRegistrationNumber",
						type: "select-single",
						options: Options.medicalRegistrationNumber,
						isRequire: true,
					},
				],
			},
		},
	},
	{
		step: 4,
		id: "step-4",
		label: "Your Profile Picture",
		content: {
			component: () => import("../../components/SetupProfile/ProfilePicture"),
		},
	},
];

export default createProfileConfig;
