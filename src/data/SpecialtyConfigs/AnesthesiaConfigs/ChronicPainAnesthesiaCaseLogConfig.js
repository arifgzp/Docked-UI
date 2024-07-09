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
		],
	},
];

const method = [
	{
		id: "method",
		name: "Method",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Neurolysis",
				name: "Neurolysis",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Chemical",
						name: "Chemical",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "Alcohol",
								name: "Alcohol",
								nodeType: "leaf",
							},
							{
								id: "Phenol",
								name: "Phenol",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "RadiofrequencyAblation(RFA)",
						name: "Radiofrequency Ablation (RFA)",
						nodeType: "leaf",
					},
					{
						id: "Cryoablation",
						name: "Cryoablation",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "NitrousOxide",
								name: "Nitrous Oxide",
								nodeType: "leaf",
							},
							{
								id: "Carbon-di-oxide",
								name: "Carbon-di-oxide",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "SurgicalProcedure",
				name: "Surgical Procedure",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "SurgicalNeurolysis",
						name: "Surgical Neurolysis",
						nodeType: "leaf",
					},
					{
						id: "PumpInsertion",
						name: "Pump Insertion",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "LocalInfiltration",
				name: "Local Infiltration",
				nodeType: "leaf",
			},
		],
	},
];

const drugsUsed = [
	{
		id: "drugsUsed",
		name: "Drugs Used",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Lidocaine",
				name: "Lidocaine",
				nodeType: "leaf",
			},
			{
				id: "Bupivacaine",
				name: "Bupivacaine",
				nodeType: "leaf",
			},
			{
				id: "Ropivacaine",
				name: "Ropivacaine",
				nodeType: "leaf",
			},
			{
				id: "Volume",
				name: "Volume",
				nodeType: "leaf",
			},
			{
				id: "Strength",
				name: "Strength",
				nodeType: "leaf",
			},
			{
				id: "Adjuvant",
				name: "Adjuvant",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Epinephrine",
						name: "Epinephrine",
						nodeType: "leaf",
					},
					{
						id: "Dexamethasone",
						name: "Dexamethasone",
						nodeType: "leaf",
					},
					{
						id: "Clonidine",
						name: "Clonidine",
						nodeType: "leaf",
					},
					{
						id: "Dexmedetomidine",
						name: "Dexmedetomidine",
						nodeType: "leaf",
					},
					{
						id: "Methylprednisolone",
						name: "Methylprednisolone",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "AdjuvantDose",
				name: "Adjuvant Dose",
				nodeType: "leaf",
				inputType: "text",
			},
		],
	},
];

const intervention = [
	{
		id: "intervention",
		name: "Intervention",
		selectType: "none",
		nodeType: "parent",
		children: [
			{
				id: "Head&Neck",
				name: "Head & Neck",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "MaxillaryBlock",
						name: "Maxillary Block",
						nodeType: "leaf",
					},
					{
						id: "MandibularBlock",
						name: "Mandibular Block",
						nodeType: "leaf",
					},
					{
						id: "ThirdOccipitalNerveBlock(TON)",
						name: "Third Occipital Nerve Block (TON)",
						nodeType: "leaf",
					},
					{
						id: "Cervical Blocks",
						name: "Cervical Blocks",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "MedialBranchBlock",
								name: "Medial Branch Block",
								nodeType: "leaf",
							},
							{
								id: "CervicalNerveRootInjection",
								name: "Cervical Nerve Root Injection",
								nodeType: "leaf",
							},
							{
								id: "CervicalSympatheticBlock",
								name: "Cervical Sympathetic Block",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "StellateGanglionBlock",
						name: "Stellate Ganglion Block",
						nodeType: "leaf",
					},
					{
						id: "GasserianGanglionBlock",
						name: "Gasserian Ganglion Block",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Abdominal",
				name: "Abdominal",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "CeliacGanglionBlock",
						name: "Celiac Ganglion Block",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "Endoscopic",
								name: "Endoscopic",
								nodeType: "leaf",
							},
							{
								id: "Transabdominal",
								name: "Transabdominal",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "SuperiorHypogastricPlexusBlock",
						name: "Superior Hypogastric Plexus Block",
						nodeType: "leaf",
					},
					{
						id: "GenitofemoralNerveBlock",
						name: "Genitofemoral Nerve Block",
						nodeType: "leaf",
					},
					{
						id: "LumbarBlocks",
						name: "Lumbar Blocks",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "TransforaminalEpiduralSteroidInjection",
								name: "Transforaminal Epidural Steroid Injection",
								nodeType: "leaf",
							},
							{
								id: "FacetMedialBranchBlock",
								name: "Facet Medial Branch Block",
								nodeType: "leaf",
							},
							{
								id: "Intra-articularFacetjointInjection",
								name: "Intra-articular Facet joint Injection",
								nodeType: "leaf",
							},
							{
								id: "IntrathecalPumpManagement",
								name: "Intrathecal Pump Management",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "BotulinumInjection",
				name: "Botulinum Injection",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Muscle",
						name: "Muscle",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "PelvicBlocks",
				name: "Pelvic Blocks",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "GanglionImparBlock",
						name: "Ganglion Impar Block",
						nodeType: "leaf",
					},
					{
						id: "PudendalNerveBlock",
						name: "Pudendal Nerve Block",
						nodeType: "leaf",
					},
					{
						id: "Sacro-iliacJointInjection",
						name: "Sacro-iliac oint Injection",
						nodeType: "leaf",
					},
					{
						id: "PiriformisInjection",
						name: "Piriformis Injection",
						nodeType: "leaf",
					},
					{
						id: "Intra-articularHipInjection",
						name: "Intra-articular Hip Injection",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "UpperLimbBlocks",
				name: "Upper Limb Blocks",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "BicipitalTendonSheath",
						name: "Bicipital Tendon Sheath",
						nodeType: "leaf",
					},
					{
						id: "Sub-acromialBursaInjection",
						name: "Sub-acromial Bursa Injection",
						nodeType: "leaf",
					},
					{
						id: "Gleno-humeralJointInjection",
						name: "Gleno-humeral Joint Injection",
						nodeType: "leaf",
					},
					{
						id: "SupraspinatusTendonInjection",
						name: "Supraspinatus Tendon Injection",
						nodeType: "leaf",
					},
					{
						id: "Acromio-clavicularJointInjection",
						name: "Acromio-clavicular Joint Injection",
						nodeType: "leaf",
					},
					{
						id: "Sterno-clavicularInjection",
						name: "Sterno-clavicular Injection",
						nodeType: "leaf",
					},
					{
						id: "Intra-articularElbowInjection",
						name: "Intra-articular Elbow Injection",
						nodeType: "leaf",
					},
					{
						id: "WristInjection",
						name: "Wrist Injection",
						nodeType: "leaf",
					},
					{
						id: "Ulnar-triquetralInjection",
						name: "Ulnar-triquetral Injection",
						nodeType: "leaf",
					},
					{
						id: "Carpal-tunnelInjection",
						name: "Carpal-tunnelInjection",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "LowerLimbBlocks",
				name: "Lower Limb Blocks",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "PatellarTendonInjection",
						name: "Patellar Tendon Injection",
						nodeType: "leaf",
					},
					{
						id: "Intra-articularAnkleInjection",
						name: "Intra-articular Ankle Injection",
						nodeType: "leaf",
					},
					{
						id: "TarsalTunnelInjection",
						name: "Tarsal Tunnel injection",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

export default { technique, method, drugsUsed, intervention };
