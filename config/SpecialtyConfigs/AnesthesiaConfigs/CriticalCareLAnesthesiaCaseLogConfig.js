const procedures = [
	{
		id: "procedures",
		name: "Procedures",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Technique",
				name: "Technique",
				nodeType: "parent",
				selectType: "single",
				children: [
					{
						id: "Anatomical",
						name: "Anatomical",
						nodeType: "leaf",
					},
					{
						id: "USGGuided",
						name: "USG Guided",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

export default { procedures };
