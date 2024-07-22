const Options = {
	broadSpecialty: [
		{ label: "Anaesthesiology", value: "Anaesthesiology" },
		{ label: "Orthodontics", value: "Orthodontics" },
		{ label: "Orthopaedics", value: "Orthopaedics" },
	],
	designation: [
		{ label: "Head of Department", value: "Head of Department" },
		{ label: "Professor", value: "Professor" },
		{ label: "Additional Professor", value: "Additional Professor" },
		{ label: "Associate Professor", value: "Associate Professor" },
		{ label: "Assistant Professor", value: "Assistant Professor" },
		{ label: "Reader", value: "Reader" },
		{ label: "Senior Lecturer", value: "Senior Lecturer" },
		{ label: "Lecturer", value: "Lecturer" },
		{ label: "Senior Consultant", value: "Senior Consultant" },
		{ label: "Junior Consultant", value: "Junior Consultant" },
		{ label: "Tutor", value: "Tutor" },
		{ label: "Senior Resident", value: "Senior Resident" },
		{ label: "Junior Resident", value: "Junior Resident" },
		{ label: "Others", value: "Others" },
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
					{ name: "Work Place", uid: "workPlace", type: "text", isRequire: true },
					{ name: "City", uid: "city", type: "text", options: Options.city, isRequire: true },
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
					{ name: "Medical Council Name", uid: "medicalCouncilName", type: "text", options: Options.medicalCouncilName, isRequire: true },
					{ name: "Year of Registration", uid: "yearOfRegistration", type: "date", options: Options.yearOfRegistration, isRequire: true },
					{
						name: "Medical Registration Number",
						uid: "medicalRegistrationNumber",
						type: "text",
						options: Options.medicalRegistrationNumber,
						isRequire: true,
					},
				],
			},
		},
	},
	// {
	// 	step: 4,
	// 	id: "step-4",
	// 	label: "Your Profile Picture",
	// 	content: {
	// 		component: require("../../components/SetupProfile/ProfilePicture").default,
	// 	},
	// },
];

export default createProfileConfig;
