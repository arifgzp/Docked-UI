const procedure = [
	{
		id: "procedure",
		name: "procedure",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "POPCast",
				name: "POP Cast",
				nodeType: "leaf",
			},
			{
				id: "POPSlab",
				name: "POP Slab",
				nodeType: "leaf",
			},
			{
				id: "Splint&Traction",
				name: "Splint & Traction",
				nodeType: "leaf",
			},
			{
				id: "JointAspiration",
				name: "Joint Aspiration",
				nodeType: "leaf",
			},
			{
				id: "WoundDebridement",
				name: "Wound Debridement",
				nodeType: "leaf",
			},
			{
				id: "ArthrotomyofJoints",
				name: "Arthrotomy of Joints",
				nodeType: "leaf",
			},
			{
				id: "I&DAbscess",
				name: "I&D Abscess",
				nodeType: "leaf",
			},
			{
				id: "SplitThicknessSkinGrafting",
				name: "Split Thickness Skin Grafting",
				nodeType: "leaf",
			},
			{
				id: "Fasciotomy",
				name: "Fasciotomy",
				nodeType: "leaf",
			},
			{
				id: "ExternalFixator",
				name: "External Fixator",
				nodeType: "leaf",
			},
			{
				id: "ClosedReduction",
				name: "Closed Reduction",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Site",
						name: "Site",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "Biopsy",
				name: "Biopsy",
				nodeType: "leaf",
			},
			{
				id: "LocalFlaps",
				name: "Local Flaps",
				nodeType: "leaf",
			},
			{
				id: "InternalFixation",
				name: "Internal Fixation",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "K|wires",
						name: "K-wires",
						nodeType: "leaf",
					},
					{
						id: "Screws",
						name: "Screws",
						nodeType: "leaf",
					},
					{
						id: "Plates",
						name: "Plates",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Sequestrectomy&Saucerisation",
				name: "Sequestrectomy & Saucerisation",
				nodeType: "leaf",
			},
			{
				id: "TendonRepair",
				name: "Tendon Repair",
				nodeType: "leaf",
			},
			{
				id: "Arthrodesis",
				name: "Arthrodesis",
				nodeType: "leaf",
			},
			{
				id: "DiagnosticArthroscopy",
				name: "Diagnostic Arthroscopy",
				nodeType: "leaf",
			},
			{
				id: "TunnelRelease",
				name: "Tunnel Release",
				nodeType: "leaf",
			},
			{
				id: "IllizarovFixator",
				name: "Illizarov Fixator",
				nodeType: "leaf",
			},
			{
				id: "TissueRelease",
				name: "Tissue Release",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Contractures",
						name: "Contractures",
						nodeType: "leaf",
					},
					{
						id: "TendonLengthening",
						name: "Tendon Lengthening",
						nodeType: "leaf",
					},
					{
						id: "Deformities",
						name: "Deformities",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Amputation",
				name: "Amputation",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Level",
						name: "Level",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "CorrectiveSurgeries",
				name: "Corrective Surgeries",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "CTEV",
						name: "CTEV",
						nodeType: "leaf",
					},
					{
						id: "DDH",
						name: "DDH",
						nodeType: "leaf",
					},
					{
						id: "Perthes",
						name: "Perthes",
						nodeType: "leaf",
					},
					{
						id: "SkeletalDysplasia",
						name: "Skeletal Dysplasia",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "PolytraumaManagement",
				name: "Polytrauma Management",
				nodeType: "leaf",
			},
			{
				id: "Arthroplasty",
				name: "Arthroplasty",
				nodeType: "leaf",
			},
			{
				id: "SpinalDecompression|Stabilization",
				name: "Spinal Decompression / Stabilization",
				nodeType: "leaf",
			},
			{
				id: "OperativeArthroscopy",
				name: "Operative Arthroscopy",
				nodeType: "leaf",
			},
			{
				id: "Osteotomies",
				name: "Osteotomies",
				nodeType: "leaf",
			},
			{
				id: "SurgeryOnMusculoskeletalTumours",
				name: "Surgery on Musculoskeletal Tumours",
				nodeType: "leaf",
			},
			{
				id: "ORIF",
				name: "ORIF",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Type",
						name: "Type",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "SpinalDeformityCorrection",
				name: "Spinal Deformity Correction",
				nodeType: "leaf",
			},
			{
				id: "LimbLengthening",
				name: "Limb Lengthening",
				nodeType: "leaf",
			},
			{
				id: "RevisionSurgeries",
				name: "Revision Surgeries",
				nodeType: "leaf",
			},
		],
	},
];

export default { procedure };
