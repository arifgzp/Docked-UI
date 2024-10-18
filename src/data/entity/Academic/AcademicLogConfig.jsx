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
		{ label: "Post Graduation", value: "Post Graduation" },
		{ label: "Super Specialization", value: "Super Specialization" },
		{ label: "Faculty", value: "Faculty" },
		{ label: "HOD", value: "HOD" },
	],
};

const AcademicLogConfigTextAndSingleSelectOptions = [
	{ name: "Date", uid: "date", type: "date", isRequire: true },
	{ name: "Position", uid: "position", type: "select-single", options: Options.Gender, isRequire: true },
	{ name: "Title", uid: "title", type: "text", isRequire: true },
	{ name: "Organiser", uid: "organiser", type: "text", isRequire: true },
];

const specialAcademicLogsOption = [
	{ id: "activities", name: "Activity" },
	{ id: "supervision", name: "Supervision" },
];

export { AcademicLogConfigTextAndSingleSelectOptions, specialAcademicLogsOption };
