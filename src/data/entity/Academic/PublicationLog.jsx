const Options = {
	Type: [
		{ label: "Book chapter", value: "Book chapter" },
		{ label: "Patent", value: "Patent" },
		{ label: "Editorial", value: "Editorial" },
		{ label: "Opinion", value: "Opinion" },
		{ label: "Meta-analysis", value: "Meta-analysis" },
		{ label: "Systematic review", value: "Systematic review" },
		{ label: "Original Article", value: "Original Article" },
		{ label: "RCT", value: "RCT" },
		{ label: "Brief Communication", value: "Brief Communication" },
		{ label: "Case Report", value: "Case Report" },
		{ label: "Case Series", value: "Case Series" },
		{ label: "Letter to editor", value: "Letter to editor" },
		{ label: "Other", value: "Other" },
	],
	Status: [
		{ label: "Published", value: "Published" },
		{ label: "Accepted", value: "Accepted" },
		{ label: "Under Review", value: "Under Review" },
	],
};

const PublicationLogConfigTextAndSingleSelectOptions = [
	{ name: "Type", uid: "publicationType", type: "select-single", options: Options.Type, isRequire: true },
	{ name: "Title", uid: "title", type: "text", isRequire: true },
	{ name: "Journal Name", uid: "journalName", type: "text", isRequire: true },
	{ name: "Status", uid: "status", type: "select-single", options: Options.Status, isRequire: true },
	{ name: "Publication Date", uid: "date", type: "date", isRequire: true },
];

export { PublicationLogConfigTextAndSingleSelectOptions };
