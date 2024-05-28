const Options = {
	broadSpecialty: [{ label: "Anesthesia", value: "Anesthesia" }],
	superSpecialty: [{ label: "MBBS", value: "MBBS" }],
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
