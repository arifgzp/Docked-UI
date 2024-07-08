const treatmentPlan = [
	{
		id: "treatmentPlan",
		name: "Treatment Plan",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Extraction",
				name: "Extraction",
				nodeType: "leaf",
			},
			{
				id: "Non-Extraction",
				name: "Non-Extraction",
				nodeType: "leaf",
			},
			{
				id: "ImpactedTeeth",
				name: "Impacted Teeth",
				nodeType: "leaf",
			},
			{
				id: "Functional",
				name: "Functional",
				nodeType: "leaf",
			},
			{
				id: "RapidMaxillaryExpansion",
				name: "Rapid Maxillary Expansion",
				nodeType: "leaf",
			},
			{
				id: "CleftLip",
				name: "Cleft Lip",
				nodeType: "leaf",
			},
			{
				id: "CleftPalate",
				name: "Cleft Palate",
				nodeType: "leaf",
			},
			{
				id: "Face Mask",
				name: "Face Mask",
				nodeType: "leaf",
			},
		],
	},
];

const applianceUsed = [
	{
		id: "applianceUsed",
		name: "Appliance Used",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Hawleys",
				name: "Hawleys",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "RetentionAppliance",
						name: "Retention Appliance",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "AnteriorBitePlane",
								name: "Anterior Bite Plane",
								nodeType: "leaf",
							},
							{
								id: "PosteriorBitePlane",
								name: "Posterior Bite Plane",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "ExpansionAppliance",
						name: "Expansion Appliance",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "CoffinSpring",
								name: "Coffin Spring",
								nodeType: "leaf",
							},
							{
								id: "ExpansionScrew",
								name: "Expansion Screw",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "NanceHoldingArch",
				name: "Nance Holding Arch",
				nodeType: "leaf",
			},
			{
				id: "LingualArch",
				name: "Lingual Arch",
				nodeType: "leaf",
			},
			{
				id: "TranspalatalArch",
				name: "Transpalatal Arch",
				nodeType: "leaf",
			},
			{
				id: "Band&SpurTypeSpaceMaintainer",
				name: "Band & Spur Type Space Maintainer",
				nodeType: "leaf",
			},
			{
				id: "TongueCrib",
				name: "Tongue Crib",
				nodeType: "leaf",
			},
			{
				id: "OralScreen",
				name: "Oral Screen",
				nodeType: "leaf",
			},
			{
				id: "LipBumper",
				name: "Lip Bumper",
				nodeType: "leaf",
			},
			{
				id: "SplintForBruxism",
				name: "Splint For Bruxism",
				nodeType: "leaf",
			},
			{
				id: "TransverseExpansion",
				name: "Transverse Expansion",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "WithScrew",
						name: "With Screw",
						nodeType: "leaf",
					},
					{
						id: "WithQuadHelix",
						name: "With Quad Helix",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Activator",
				name: "Activator",
				nodeType: "leaf",
			},
			{
				id: "Bionator",
				name: "Bionator",
				nodeType: "leaf",
			},
			{
				id: "TwinBlock",
				name: "Twin Block",
				nodeType: "leaf",
			},
			{
				id: "QuadHelix",
				name: "Quad Helix",
				nodeType: "leaf",
			},
			{
				id: "Bihelix",
				name: "Bihelix",
				nodeType: "leaf",
			},
			{
				id: "UtilityArches",
				name: "Utility Arches",
				nodeType: "leaf",
			},
			{
				id: "Pendulum",
				name: "Pendulum",
				nodeType: "leaf",
			},
			{
				id: "Frankle",
				name: "Frankle",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "Frankle1",
						name: "1",
						nodeType: "leaf",
					},
					{
						id: "Frankle2",
						name: "2",
						nodeType: "leaf",
					},
					{
						id: "Frankle3",
						name: "3",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

export default { treatmentPlan, applianceUsed };
