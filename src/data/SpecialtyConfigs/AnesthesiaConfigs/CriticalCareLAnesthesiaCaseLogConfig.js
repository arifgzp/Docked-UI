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
				selectType: "single",
				nodeType: "parent",
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
			{
				id: "ArterialLine",
				name: "Arterial Line",
				selectType: "none",
				nodeType: "parent",
				children: [
					{
						id: "Side1",
						name: "Side",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "Right1",
								name: "Right",
								nodeType: "leaf",
							},
							{
								id: "Left1",
								name: "Left",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "Vessel1",
						name: "Vessel",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "Radial",
								name: "Radial",
								nodeType: "leaf",
							},
							{
								id: "Brachial",
								name: "Brachial",
								nodeType: "leaf",
							},
							{
								id: "Femoral",
								name: "Femoral",
								nodeType: "leaf",
							},
							{
								id: "DorsalisPedis",
								name: "Dorsalis Pedis",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "CentralVenousLine",
				name: "Central Venous Line",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Side2",
						name: "Side",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "Right2",
								name: "Right",
								nodeType: "leaf",
							},
							{
								id: "Left2",
								name: "Left",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "Vessel2",
						name: "Vessel",
						nodeType: "parent",
						selectType: "single",
						children: [
							{
								id: "IJV",
								name: "IJV",
								nodeType: "leaf",
							},
							{
								id: "SCV",
								name: "SCV",
								nodeType: "leaf",
							},
							{
								id: "FV",
								name: "FV",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "PulmonaryArteryCatheterisation",
				name: "Pulmonary Artery Catheterisation",
				nodeType: "leaf",
			},
			{
				id: "PICCLine",
				name: "PICC Line",
				nodeType: "leaf",
			},
			{
				id: "HemodialysisCatheter",
				name: "Hemodialysis Catheter",
				nodeType: "leaf",
			},
			{
				id: "ECMOAccess",
				name: "ECMO Access",
				nodeType: "leaf",
			},
			{
				id: "Tracheostomy",
				name: "Tracheostomy",
				nodeType: "leaf",
			},
			{
				id: "IABP",
				name: "IABP",
				nodeType: "leaf",
			},
			{
				id: "CirculatorySupport",
				name: "Circulatory Support",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Inotropes",
						name: "Inotropes",
						nodeType: "leaf",
					},
					{
						id: "Vasopressors",
						name: "Vasopressors",
						nodeType: "leaf",
					},
					{
						id: "Inodilators",
						name: "Inodilators",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Pacing",
				name: "Pacing",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "Transvenous",
						name: "Transvenous",
						nodeType: "leaf",
					},
					{
						id: "Transthoracic",
						name: "Transthoracic",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

export default { procedures };
