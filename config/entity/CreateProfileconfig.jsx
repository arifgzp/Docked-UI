const Options = {
	broadSpecialty: [
		{ label: "Internal Medicine", value: "InternalMedicine" },
		{ label: "Paediatrics", value: "Paediatrics" },
		{ label: "Orthodontics", value: "Orthodontics" },
		{ label: "Orthopaedics", value: "Orthopaedics" },
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

const Specialties = {
	InternalMedicine: {
		SuperSpeciality: [
			{
				label: "Cardilogy",
				value: "Cardilogy",
			},
		],
		SubSpeciality: [
			{
				label: "Hepatology, Endoscopy",
				value: "Hepatology,Endoscopy",
			},
		],
	},
	Paediatrics: {
		SuperSpeciality: [
			{
				label: "Neonatology",
				value: "Neonatology",
			},
		],
	},
};

const createProfileConfig = [
	{
		step: 1,
		id: "step-1",
		label: "Your Expertise",
		content: {
			component: require("../../components/SetupProfile/YourExpertise").default,
			config: {
				fields: [
					{ name: "Broad Specialty", uid: "broadSpecialty", type: "select-single", options: Options.broadSpecialty, isRequire: true },
					{
						name: "Super Specialty",
						uid: "superSpecialty",
						type: "select-single",
						options: Options.superSpecialty,
						isRequire: false,
					},
					{ name: "Sub Specialty", uid: "subSpecialty", type: "select-single", options: Options.subSpecialty, isRequire: false },
				],
			},
		},
	},
	{
		step: 2,
		id: "step-2",
		label: "Your Workplace",
		content: {
			component: require("../../components/SetupProfile/YourWorkplace").default,
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
			component: require("../../components/SetupProfile/VerifyMHD").default,
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
			component: require("../../components/SetupProfile/ProfilePicture").default,
		},
	},
];

export default createProfileConfig;
