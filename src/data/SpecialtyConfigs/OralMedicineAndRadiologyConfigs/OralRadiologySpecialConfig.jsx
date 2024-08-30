const procedure = [
	{
		id: "procedure",
		name: "Procedure",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "X-Ray",
				name: "X-Ray",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "IOPA",
						name: "IOPA",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "ViewIOPA",
								name: "View",
								nodeType: "leaf",
								inputType: "text",
							},
						],
					},
					{
						id: "Occlusal",
						name: "Occlusal",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "ViewOcclusal",
								name: "View",
								nodeType: "leaf",
								inputType: "text",
							},
						],
					},
					{
						id: "Panorex|OPG",
						name: "Panorex/OPG",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "ViewPanorex|OPG",
								name: "View",
								nodeType: "leaf",
								inputType: "text",
							},
						],
					},
					{
						id: "Cephalogram",
						name: "Cephalogram",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "View|Cephalogram",
								name: "View",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "Lateral",
										name: "Lateral",
										nodeType: "leaf",
									},
									{
										id: "PA",
										name: "PA",
										nodeType: "leaf",
									},
								],
							},
						],
					},
					{
						id: "TMJView",
						name: "TMJ View",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "OpenMouth",
								name: "Open Mouth",
								nodeType: "leaf",
							},
							{
								id: "ClosedMouth",
								name: "Closed Mouth",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "CBCT",
				name: "CBCT",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Region",
						name: "Region",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "Mandible",
								name: "Mandible",
								nodeType: "leaf",
							},
							{
								id: "Maxilla",
								name: "Maxilla",
								nodeType: "leaf",
							},
							{
								id: "TMJ",
								name: "TMJ",
								nodeType: "leaf",
							},
							{
								id: "Cephalometric",
								name: "Cephalometric",
								nodeType: "leaf",
							},
							{
								id: "Sinus",
								name: "Sinus",
								nodeType: "leaf",
							},
							{
								id: "Orbit",
								name: "Orbit",
								nodeType: "leaf",
							},
							{
								id: "Other Regions",
								name: "Others",
								nodeType: "leaf",
								inputType: "text",
							},
						],
					},
					{
						id: "Dentition",
						name: "Dentition ",
						nodeType: "leaf",
						inputType: "text",
					},
					{
						id: "Voxel Size (mm)",
						name: "Voxel Size (mm) ",
						nodeType: "parent",
						selectType: "single",
						children: [
							{
								id: "0.125",
								name: "0.125",
								nodeType: "leaf",
							},
							{
								id: "0.20",
								name: "0.20",
								nodeType: "leaf",
							},
							{
								id: "0.25",
								name: "0.25",
								nodeType: "leaf",
							},
							{
								id: "0.30",
								name: "0.30",
								nodeType: "leaf",
							},
							{
								id: "0.40",
								name: "0.40",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "FOV",
						name: "FOV ",
						nodeType: "leaf",
						inputType: "text",
						unit: "mm",
					},
				],
			},
		],
	},
];

export default { procedure };
