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
			{
				id: "ArterialLine",
				name: "Arterial Line",
				selectType: "none",
				nodeType: "parent",
				children: [
					{
						id: "Side",
						name: "Side",
						nodeType: "parent",
						selectType: "single",
						children: [
							{
								id: "Right",
								name: "Right",
								nodeType: "leaf",
							},
							{
								id: "Left",
								name: "Left",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "Vessel",
						name: "Vessel",
						nodeType: "parent",
						selectType: "single",
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
						id: "Side",
						name: "Side",
						nodeType: "parent",
						selectType: "single",
						children: [
							{
								id: "Right",
								name: "Right",
								nodeType: "leaf",
							},
							{
								id: "Left",
								name: "Left",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "Vessel",
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
				nodeType: "parent",
				selectType: "multiple",
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
				nodeType: "parent",
				selectType: "single",
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
