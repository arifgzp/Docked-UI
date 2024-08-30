const Options = {
	Activity: [
		{ label: "Invigilation", value: "Invigilation" },
		{ label: "Examination", value: "Examination" },
		{ label: "Consultant", value: "Consultant" },
		{ label: "Other", value: "Other" },
	],
	Position: [
		{ label: "Editor", value: "Editor" },
		{ label: "Co-editor", value: "Co-editor" },
		{ label: "Reviewer", value: "Reviewer" },
		{ label: "Committee member", value: "Committee member" },
		{ label: "Conference Activity", value: "Conference Activity" },
	],
};

const AdminWorkLogConfigTextAndSingleSelectOptions = [
	{ name: "Date Range", uid: "date", type: "date", isRequire: true },
	{ name: "Activity", uid: "activity", type: "select-single", options: Options.Activity, isRequire: true },
	{ name: "Position", uid: "position", type: "select-single", options: Options.Position, isRequire: true },
	{ name: "Organisation", uid: "organisation", type: "text", isRequire: true },
];

export { AdminWorkLogConfigTextAndSingleSelectOptions };
