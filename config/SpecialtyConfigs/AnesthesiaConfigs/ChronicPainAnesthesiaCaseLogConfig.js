const technique = [
	{
		id: "technique",
		name: "Technique",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Anatomical",
				name: "Anatomical",
				nodeType: "leaf",
			},
			{
				id: "UltrasoundGuided",
				name: "Ultrasound Guided",
				nodeType: "leaf",
			},
			{
				id: "FlouroscopyGuided",
				name: "Flouroscopy Guided",
				nodeType: "leaf",
			},
			{
				id: "ComputedTomography(CT)guided",
				name: "Computed Tomography (CT) guided",
				nodeType: "leaf",
			},
			{
				id: "PAIN",
				name: "Pain",
				nodeType: "leaf",
			},
		],
	},
];

export default { technique };
