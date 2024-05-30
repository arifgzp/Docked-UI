const TypeOfAnesthesia = [
	{
		id: "TypeOfAnesthesia",
		name: "Type of Anesthesia",
		selectType: "multiple",
		nodeType: "parent",
		childrenType: "mix",
		children: [
			{
				id: "REGIONAL",
				name: "Regional",
				selectType: "multiple",
				nodeType: "parent",
				childreType: "leaf",
				children: [
					{
						id: "PB",
						name: "Plexus Block",
						nodeType: "leaf",
					},
					{
						id: "Neuraxial",
						name: "Neuraxial",
						nodeType: "leaf",
					},
					{
						id: "Peripheral ",
						name: "Peripheral",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "DRUGS",
				name: "Drugs",
				selectType: "none",
				nodeType: "parent",
				children: [
					{
						id: "INHALATIONAL",
						name: "Inhalational",
						nodeType: "parent",
						selectType: "multiple",
						children: [
							{
								id: "NO2",
								name: "Nitrous oxide",
								nodeType: "leaf",
							},
							{
								id: "SEVOFLURANE",
								name: "Sevoflurane",
								nodeType: "leaf",
							},
							{
								id: "Isoflurane",
								name: "Isoflurane",
								nodeType: "leaf",
							},
							{
								id: "Desflurane",
								name: "Desflurane",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "INTRAVENOUS",
						name: "Intravenous",
						nodeType: "parent",
						selectType: "single",
						children: [
							{
								id: "PROPOFOL",
								name: "Propofol",
								nodeType: "leaf",
							},
							{
								id: "KETAMINE",
								name: "Ketamine",
								nodeType: "leaf",
							},
							{
								id: "Thiopentone",
								name: "Thiopentone",
								nodeType: "leaf",
							},
							{
								id: "Etomidate",
								name: "Etomidate",
								nodeType: "leaf",
							},
							{
								id: "Midazolam",
								name: "Midazolam",
								nodeType: "leaf",
							},
							{
								id: "Fentanyl",
								name: "Fentanyl",
								nodeType: "leaf",
							},
							{
								id: "Dexmedetomidine",
								name: "Dexmedetomidine",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "MAC",
				name: "Monitored Anesthesia Care",
				nodeType: "leaf",
			},
			{
				id: "LA",
				name: "Local Anesthesia",
				nodeType: "leaf",
			},
			{
				id: "GA",
				name: "General Anesthesia",
				nodeType: "leaf",
			},
		],
	},
];

const AirwayManagement = [
	{
		id: "AirwayManagement",
		name: "Airway Management",
		selectType: "none",
		nodeType: "parent",
		children: [
			{
				id: "REGIONAL",
				name: "Regional",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "PB",
						name: "Plexus Block",
						nodeType: "leaf",
					},
					{
						id: "Neuraxial",
						name: "Neuraxial",
						nodeType: "leaf",
					},
					{
						id: "Peripheral ",
						name: "Peripheral",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

export default { TypeOfAnesthesia, AirwayManagement };
