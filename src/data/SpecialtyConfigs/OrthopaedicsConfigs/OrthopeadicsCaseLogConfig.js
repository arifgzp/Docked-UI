const diseaseCategory = [
	{
		id: "diseaseCategory",
		name: "Disease Category",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "MetabolicBoneDisease",
				name: "Metabolic Bone Disease",
				nodeType: "leaf",
			},
			{
				id: "EndocrineDisorder",
				name: "Endocrine Disorder",
				nodeType: "leaf",
			},
			{
				id: "BoneandJointInfections",
				name: "Bone And Joint Infections",
				nodeType: "leaf",
			},
			{
				id: "Poliomyelitis",
				name: "Poliomyelitis",
				nodeType: "leaf",
			},
			{
				id: "OrthopaedicNeurology",
				name: "Orthopaedic Neurology",
				nodeType: "leaf",
			},
			{
				id: "PeripheralNerveInjuries",
				name: "Peripheral Nerve Injuries",
				nodeType: "leaf",
			},
			{
				id: "DiseasesOfJoints",
				name: "Diseases Of Joints",
				nodeType: "leaf",
			},
			{
				id: "SystemicComplications",
				name: "Systemic Complications",
				nodeType: "leaf",
			},
			{
				id: "BoneTumours",
				name: "Bone Tumours",
				nodeType: "leaf",
			},
			{
				id: "OtherDiseases",
				name: "Other diseases",
				nodeType: "leaf",
			},
			{
				id: "RegionalOrthopaedicConditions",
				name: "Regional Orthopaedic Conditions",
				nodeType: "leaf",
			},
			{
				id: "Fractures",
				name: "Fractures",
				nodeType: "leaf",
			},
			{
				id: "Dislocations",
				name: "Dislocations",
				nodeType: "leaf",
			},
			{
				id: "Subluxations",
				name: "Subluxations",
				nodeType: "leaf",
			},
			{
				id: "TraumaticDisorders",
				name: "Traumatic Disorders",
				nodeType: "leaf",
			},
			{
				id: "Rehabilitation-Prosthetics&Orthotics",
				name: "Rehabilitation - Prosthetics & Orthotics",
				nodeType: "leaf",
			},
			{
				id: "PediatricDiseases",
				name: "Pediatric Diseases",
				nodeType: "leaf",
			},
			{
				id: "DegenerativeDisordersOfSpine",
				name: "Degenerative Disorders Of Spine",
				nodeType: "leaf",
			},
			{
				id: "DisasterManagement",
				name: "Disaster Management",
				nodeType: "leaf",
			},
		],
	},
];

const site = [
	{
		id: "site",
		name: "Site",
		selectType: "multiple",
		nodeType: "parent",
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
];

const joint = [
	{
		id: "joint",
		name: "Joint",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Hand",
				name: "Hand",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "DIP",
						name: "DIP",
						nodeType: "leaf",
					},
					{
						id: "PIP",
						name: "PIP",
						nodeType: "leaf",
					},
					{
						id: "MCP",
						name: "MCP",
						nodeType: "leaf",
					},
					{
						id: "CMC",
						name: "CMC",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Wrist",
				name: "Wrist",
				nodeType: "leaf",
			},
			{
				id: "DistalRadio-Ulnar",
				name: "Distal Radio-Ulnar",
				nodeType: "leaf",
			},
			{
				id: "ProximalRadio-Ulnar",
				name: "Proximal Radio-Ulnar",
				nodeType: "leaf",
			},
			{
				id: "Elbow",
				name: "Elbow",
				nodeType: "leaf",
			},
			{
				id: "Shoulder",
				name: "Shoulder",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Glenohumeral",
						name: "Glenohumeral",
						nodeType: "leaf",
					},
					{
						id: "Acromioclavicular",
						name: "Acromioclavicular",
						nodeType: "leaf",
					},
					{
						id: "Sternoclavicular",
						name: "Sternoclavicular",
						nodeType: "leaf",
					},
					{
						id: "Coraco-acromial",
						name: "Coraco-acromial",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Hip",
				name: "Hip",
				nodeType: "leaf",
			},
			{
				id: "Knee",
				name: "Knee",
				nodeType: "leaf",
			},
			{
				id: "Ankle",
				name: "Ankle",
				nodeType: "leaf",
			},
			{
				id: "Foot",
				name: "Foot",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "TT",
						name: "TT",
						nodeType: "leaf",
					},
					{
						id: "TC",
						name: "TC",
						nodeType: "leaf",
					},
					{
						id: "TMT",
						name: "TMT",
						nodeType: "leaf",
					},
					{
						id: "MTP",
						name: "MTP",
						nodeType: "leaf",
					},
					{
						id: "IP",
						name: "IP",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

const bones = [
	{
		id: "bones",
		name: "Bones",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Phalanges",
				name: "Phalanges",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Distal",
						name: "Distal",
						nodeType: "leaf",
					},
					{
						id: "Middle",
						name: "Middle",
						nodeType: "leaf",
					},
					{
						id: "Proximal",
						name: "Proximal",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Metacarpal",
				name: "Metacarpal",
				nodeType: "leaf",
			},
			{
				id: "Carpals",
				name: "Carpals",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Scaphoid",
						name: "Scaphoid",
						nodeType: "leaf",
					},
					{
						id: "Lunate",
						name: "Lunate",
						nodeType: "leaf",
					},
					{
						id: "Triquetrum",
						name: "Triquetrum",
						nodeType: "leaf",
					},
					{
						id: "Pisiform",
						name: "Pisiform",
						nodeType: "leaf",
					},
					{
						id: "Trapezium",
						name: "Trapezium",
						nodeType: "leaf",
					},
					{
						id: "Trapezoid",
						name: "Trapezoid",
						nodeType: "leaf",
					},
					{
						id: "Capitate",
						name: "Capitate",
						nodeType: "leaf",
					},
					{
						id: "Hamate",
						name: "Hamate",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Radius",
				name: "Radius",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Proximal",
						name: "Proximal",
						nodeType: "leaf",
					},
					{
						id: "Middle",
						name: "Middle",
						nodeType: "leaf",
					},
					{
						id: "Distal",
						name: "Distal",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Ulna",
				name: "Ulna",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Proximal",
						name: "Proximal",
						nodeType: "leaf",
					},
					{
						id: "Middle",
						name: "Middle",
						nodeType: "leaf",
					},
					{
						id: "Distal",
						name: "Distal",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Humerus",
				name: "Humerus",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Proximal",
						name: "Proximal",
						nodeType: "leaf",
					},
					{
						id: "Middle",
						name: "Middle",
						nodeType: "leaf",
					},
					{
						id: "Distal",
						name: "Distal",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Femur",
				name: "Femur",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "NOF",
						name: "NOF",
						nodeType: "leaf",
					},
					{
						id: "IT",
						name: "IT",
						nodeType: "leaf",
					},
					{
						id: "Shaft",
						name: "Shaft",
						nodeType: "leaf",
					},
					{
						id: "Distal",
						name: "Distal",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Tibia",
				name: "Tibia",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Distal",
						name: "Distal",
						nodeType: "leaf",
					},
					{
						id: "Middle",
						name: "Middle",
						nodeType: "leaf",
					},
					{
						id: "Proximal",
						name: "Proximal",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Pelvic",
				name: "Pelvic",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Ileum",
						name: "Ileum",
						nodeType: "leaf",
					},
					{
						id: "Ischium ",
						name: "Ischium ",
						nodeType: "leaf",
					},
					{
						id: "Pubis",
						name: "Pubis",
						nodeType: "leaf",
					},
					{
						id: "Sacrum",
						name: "Sacrum",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Vertebrae",
				name: "Vertebrae",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Cervical",
						name: "Cervical",
						nodeType: "leaf",
					},
					{
						id: "Thoracic",
						name: "Thoracic",
						nodeType: "leaf",
					},
					{
						id: "Lumbar",
						name: "Lumbar",
						nodeType: "leaf",
					},
					{
						id: "Sacral",
						name: "Sacral",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Metacarple",
				name: "Metacarple",
				nodeType: "leaf",
			},
			{
				id: "Clavicle",
				name: "Clavicle",
				nodeType: "leaf",
			},
			{
				id: "Fibula",
				name: "Fibula",
				nodeType: "leaf",
			},
			{
				id: "Talus",
				name: "Talus",
				nodeType: "leaf",
			},
			{
				id: "Calcaneum",
				name: "Calcaneum",
				nodeType: "leaf",
			},
			{
				id: "Navicular",
				name: "Navicular",
				nodeType: "leaf",
			},
			{
				id: "Cuneiforms",
				name: "Cuneiforms",
				nodeType: "leaf",
			},
			{
				id: "Metatarsals",
				name: "Metatarsals",
				nodeType: "leaf",
			},
			{
				id: "Phalanges(Foot)",
				name: "ShPhalanges (Foot)",
				nodeType: "leaf",
			},
			{
				id: "Ribs",
				name: "Ribs",
				nodeType: "leaf",
			},
		],
	},
];

const outcomes = [
	{
		id: "outcomes",
		name: "Outcomes",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "ConservativelyManaged",
				name: "Conservatively Managed",
				nodeType: "leaf",
			},
			{
				id: "PlannedForSurgery",
				name: "Planned For Surgery",
				nodeType: "leaf",
			},
			{
				id: "AdmittedToWard",
				name: "Admitted To Ward",
				nodeType: "leaf",
			},
			{
				id: "AdmittedToICU",
				name: "Admitted To ICU",
				nodeType: "leaf",
			},
		],
	},
];

export default { diseaseCategory, site, joint, bones, outcomes };
