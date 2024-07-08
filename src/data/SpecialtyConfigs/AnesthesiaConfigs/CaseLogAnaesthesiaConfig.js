const comorbidity = [
	{
		id: "comorbidity",
		name: "Comorbidity",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "cardiacDisease",
				name: "Cardiac Disease",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "HISTORYOFMI",
						name: "History of MI",
						nodeType: "leaf",
					},
					{
						id: "CAD",
						name: "CAD",
						nodeType: "leaf",
					},
					{
						id: "angina",
						name: "Angina",
						nodeType: "leaf",
					},
					{
						id: "CHF",
						name: "CHF",
						nodeType: "leaf",
					},
					{
						id: "HTN",
						name: "HTN",
						nodeType: "leaf",
					},
					{
						id: "AF",
						name: "AF",
						nodeType: "leaf",
					},
					{
						id: "PAD",
						name: "PAD",
						nodeType: "leaf",
					},
					{
						id: "valvularDisease",
						name: "Valvular Disease",
						nodeType: "leaf",
					},
					{
						id: "pacemaker",
						name: "Pacemaker",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "CNSDISORDER",
				name: "CNS Disorder",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "COPD",
						name: "COPD",
						nodeType: "leaf",
					},
					{
						id: "ILD",
						name: "ILD",
						nodeType: "leaf",
					},
					{
						id: "ASTHMA",
						name: "Asthma",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "DIABETES",
				name: "Diabetes",
				nodeType: "leaf",
			},
			{
				id: "LIVERDISEASE",
				name: "Liver Disease",
				nodeType: "leaf",
			},
			{
				id: "RENALDISEASE",
				name: "Renal Disease",
				nodeType: "leaf",
			},
			{
				id: "HaematologicDisorder",
				name: "Haematologic disorder",
				nodeType: "leaf",
			},
			{
				id: "Coagulopathies",
				name: "Coagulopathies",
				nodeType: "leaf",
			},
			{
				id: "VascularDisorder",
				name: "Vascular disorder",
				nodeType: "leaf",
			},
			{
				id: "EndocrinologicDisorder",
				name: "Endocrinologic disorder",
				nodeType: "leaf",
			},
			{
				id: "Obesity",
				name: "Obesity",
				nodeType: "leaf",
			},
		],
	},
];

const examination = [
	{
		id: "examination",
		name: "Examination",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "AirwayAssessment",
				name: "Airway Assessment",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "MillampatiClass",
						name: "Millampati Class",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "0",
								name: "0",
								nodeType: "leaf",
							},
							{
								id: "I1",
								name: "I",
								nodeType: "leaf",
							},
							{
								id: "II1",
								name: "II",
								nodeType: "leaf",
							},
							{
								id: "III1",
								name: "III",
								nodeType: "leaf",
							},
							{
								id: "IV",
								name: "IV",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "dentition",
						name: "Dentition",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "Firm",
								name: "Firm",
								nodeType: "leaf",
							},
							{
								id: "Loose",
								name: "Loose",
								nodeType: "leaf",
							},
							{
								id: "Dentures",
								name: "Dentures",
								nodeType: "leaf",
							},
							{
								id: "Edentulous",
								name: "Edentulous",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "TMJMobility",
						name: "TMJ Mobility",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "A",
								name: "A",
								nodeType: "leaf",
							},
							{
								id: "B",
								name: "B",
								nodeType: "leaf",
							},
							{
								id: "C",
								name: "C",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "ULBTClass",
						name: "ULBT Class",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "I2",
								name: "I",
								nodeType: "leaf",
							},
							{
								id: "II2",
								name: "II",
								nodeType: "leaf",
							},
							{
								id: "III2",
								name: "III",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "NeckMovementGrade",
						name: "Neck Movement Grade",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "I(>35 degrees)",
								name: "I (>35 degrees)",
								nodeType: "leaf",
							},
							{
								id: "II(22 - 34 degress)",
								name: "II (22 - 34 degress)",
								nodeType: "leaf",
							},
							{
								id: "III(12 -21 degrees)",
								name: "III (12 -21 degrees)",
								nodeType: "leaf",
							},
							{
								id: "IV(<12 degrees)",
								name: "IV (<12 degrees)",
								nodeType: "leaf",
							},
						],
					},
				],
			},
		],
	},
];

const typeOfAnaesthesia = [
	{
		id: "typeOfAnaesthesia",
		name: "Type of Anesthesia",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "GA",
				name: "General Anesthesia",
				nodeType: "leaf",
			},
			{
				id: "REGIONAL",
				name: "Regional",
				selectType: "single",
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
		],
	},
];

const drugs = [
	{
		id: "drugs",
		name: "Drugs",
		selectType: "none",
		nodeType: "parent",
		children: [
			{
				id: "Inhalational",
				name: "Inhalational",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "NitrousOxide",
						name: "Nitrous Oxide",
						nodeType: "leaf",
					},
					{
						id: "Sevoflurane",
						name: "Sevoflurane",
						nodeType: "leaf",
					},
					{
						id: "Isoflurane ",
						name: "Isoflurane",
						nodeType: "leaf",
					},
					{
						id: "Desflurane ",
						name: "Desflurane",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Intravenous",
				name: "Intravenous",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Propofol",
						name: "Propofol",
						nodeType: "leaf",
					},
					{
						id: "Ketamine",
						name: "Ketamine",
						nodeType: "leaf",
					},
					{
						id: "Thiopentone ",
						name: "Thiopentone",
						nodeType: "leaf",
					},
					{
						id: "Etomidate ",
						name: "Etomidate",
						nodeType: "leaf",
					},
					{
						id: "Midazolam",
						name: "Midazolam",
						nodeType: "leaf",
					},
					{
						id: "Fentanyl ",
						name: "Fentanyl",
						nodeType: "leaf",
					},
					{
						id: "Dexmedetomidine ",
						name: "Dexmedetomidine",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

const airManagement = [
	{
		id: "airManagement",
		name: "Airway Management",
		selectType: "none",
		nodeType: "parent",
		children: [
			{
				id: "FaceMaskVentilation",
				name: "Face Mask Ventilation",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "One-hand",
						name: "One-hand",
						nodeType: "leaf",
					},
					{
						id: "Two-hand ",
						name: "Two-hand",
						nodeType: "leaf",
					},
					{
						id: "Adjuvant",
						name: "Adjuvant",
						nodeType: "parent",
						selectType: "multiple",
						children: [
							{
								id: "OPA",
								name: "OPA",
								nodeType: "leaf",
							},
							{
								id: "NPA",
								name: "NPA",
								nodeType: "leaf",
							},
							{
								id: "Gauzepieces",
								name: "Gauze pieces",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "Laryngoscopy",
				name: "Laryngoscopy",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "MacintoshBlade",
						name: "Macintosh blade",
						nodeType: "leaf",
					},
					{
						id: "MillerBlade",
						name: "Miller blade",
						nodeType: "leaf",
					},
					{
						id: "VideoLaryngoscope",
						name: "Video Laryngoscope",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "AirwayDevice",
				name: "Airway Device",
				selectType: "none",
				nodeType: "parent",
				children: [
					{
						id: "Tube",
						name: "Tube",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "ETT-Cuffed",
								name: "ETT - Cuffed",
								nodeType: "leaf",
							},
							{
								id: "ETT-Uncuffed",
								name: "ETT - Uncuffed",
								nodeType: "leaf",
							},
							{
								id: "DLT",
								name: "DLT",
								nodeType: "leaf",
							},
							{
								id: "RAE-SouthPole",
								name: "RAE - South Pole",
								nodeType: "leaf",
							},
							{
								id: "RAE-NorthPole",
								name: "RAE - North Pole",
								nodeType: "leaf",
							},
							{
								id: "Reinforced",
								name: "Reinforced",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "SupraglotticAirwayDevice",
						name: "Supra glottic Airway Device",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "iGel",
								name: "iGel",
								nodeType: "leaf",
							},
							{
								id: "LMA",
								name: "LMA",
								nodeType: "leaf",
							},
							{
								id: "LMA Fastrach",
								name: "LMA Fastrach",
								nodeType: "leaf",
							},
							{
								id: "LMA Proseal",
								name: "LMA Proseal",
								nodeType: "leaf",
							},
							{
								id: "LMA Supreme",
								name: "LMA Supreme",
								nodeType: "leaf",
							},
							{
								id: "LMA CTrach",
								name: "LMA CTrach",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "IntubationTechnique",
				name: "Intubation Technique",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "OralIntubation",
						name: "Oral Intubation",
						nodeType: "leaf",
					},
					{
						id: "AwakeFibre-optic",
						name: "Awake Fibre-optic",
						nodeType: "leaf",
					},
					{
						id: "NasalIntubation",
						name: "Nasal Intubation",
						nodeType: "leaf",
					},
					{
						id: "BronchialBlockerPlacement",
						name: "Bronchial Blocker Placement",
						nodeType: "leaf",
					},
					{
						id: "Sub-mental",
						name: "Sub-mental",
						nodeType: "leaf",
					},
					{
						id: "Attempts1",
						name: "Attempts",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "Single",
								name: "Single",
								nodeType: "leaf",
							},
							{
								id: "Two",
								name: "Two",
								nodeType: "leaf",
							},
							{
								id: "Three",
								name: "Three",
								nodeType: "leaf",
							},
							{
								id: "CalledForHelp",
								name: "Called For Help",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "CL",
						name: "CL",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "I3",
								name: "I",
								nodeType: "leaf",
							},
							{
								id: "IIa",
								name: "IIa",
								nodeType: "leaf",
							},
							{
								id: "IIb",
								name: "IIb",
								nodeType: "leaf",
							},
							{
								id: "III3",
								name: "III",
								nodeType: "leaf",
							},
							{
								id: "IV",
								name: "IV2",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "Adjuvants2",
						name: "Adjuvants",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "Bougie",
								name: "Bougie",
								nodeType: "leaf",
							},
							{
								id: "Stylet",
								name: "Stylet",
								nodeType: "leaf",
							},
							{
								id: "BURP",
								name: "BURP",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "Extubation",
				name: "Extubation",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Reversal",
						name: "Reversal",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "Sugammadex",
								name: "Sugammadex",
								nodeType: "leaf",
							},
							{
								id: "Neostigmine|Glycopyrrolate",
								name: "Neostigmine/Glycopyrrolate",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "Post-opVentilation",
						name: "Post-op Ventilation",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "Elective",
								name: "Elective",
								nodeType: "leaf",
							},
							{
								id: "Emergency",
								name: "Emergency",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "NMTGuided",
						name: "NMT guided",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

const regionalTechniques = [
	{
		id: "regionalTechniques",
		name: "Regional Techniques",
		selectType: "none",
		nodeType: "parent",
		children: [
			{
				id: "DrugsUsed",
				name: "Drugs Used",
				selectType: "multiple",
				nodeType: "parent",
				children: [
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
						id: "Lignocaine",
						name: "Lignocaine",
						nodeType: "leaf",
					},
					{
						id: "Adjuvants2",
						name: "Adjuvants",
						nodeType: "parent",
						selectType: "multiple",
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
							{
								id: "SodiumBicarbonate",
								name: "Sodium Bicarbonate",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "Technique1",
				name: "Technique",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Ultrasound	Guided",
						name: "Ultrasound Guided",
						nodeType: "leaf",
					},
					{
						id: "Anatomical",
						name: "Anatomical",
						nodeType: "leaf",
					},
					{
						id: "PeripheralNerveStimulator",
						name: "Peripheral Nerve Stimulator",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "UpperExtremityBlock",
				name: "Upper Extremity Block",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "Interscalene",
						name: "Interscalene",
						nodeType: "leaf",
					},
					{
						id: "Supraclavicular",
						name: "Supraclavicular",
						nodeType: "leaf",
					},
					{
						id: "Infraclavicular",
						name: "Infraclavicular",
						nodeType: "leaf",
					},
					{
						id: "Axillary",
						name: "Axillary",
						nodeType: "leaf",
					},
					{
						id: "WristBlock",
						name: "Wrist block",
						nodeType: "leaf",
					},
					{
						id: "IntravenousRegional",
						name: "Intravenous Regional",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "LowerExtremityBlock",
				name: "Lower Extremity Block",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "LumbarPlexus",
						name: "Lumbar Plexus",
						nodeType: "leaf",
					},
					{
						id: "Sciatic",
						name: "Sciatic",
						nodeType: "leaf",
					},
					{
						id: "Femoral",
						name: "Femoral",
						nodeType: "leaf",
					},
					{
						id: "LateralFemoralCutaneous",
						name: "Lateral Femoral Cutaneous",
						nodeType: "leaf",
					},
					{
						id: "PoplitealSaphenous",
						name: "Popliteal Saphenous",
						nodeType: "leaf",
					},
					{
						id: "Ankle",
						name: "Ankle",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "TruncalBlock",
				name: "Truncal Block",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "Intercostal",
						name: "Intercostal",
						nodeType: "leaf",
					},
					{
						id: "Interpleural",
						name: "Interpleural",
						nodeType: "leaf",
					},
					{
						id: "Paravertebral",
						name: "Paravertebral",
						nodeType: "leaf",
					},
					{
						id: "PEC I & II",
						name: "PEC I & II",
						nodeType: "leaf",
					},
					{
						id: "ErectorSpinaePlane",
						name: "Erector Spinae Plane",
						nodeType: "leaf",
					},
					{
						id: "SerratusAnteriorPlane",
						name: "Serratus Anterior Plane",
						nodeType: "leaf",
					},
					{
						id: "TransverseAbdominisPlane",
						name: "Transverse Abdominis Plane",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Head&NeckBlock",
				name: "Head & Neck block",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "CervicalPlexus",
						name: "Cervical Plexus",
						nodeType: "leaf",
					},
					{
						id: "Stellate",
						name: "Stellate",
						nodeType: "leaf",
					},
					{
						id: "Occipital",
						name: "Occipital",
						nodeType: "leaf",
					},
					{
						id: "Maxillary",
						name: "Maxillary",
						nodeType: "leaf",
					},
					{
						id: "Mandible",
						name: "Mandible",
						nodeType: "leaf",
					},
					{
						id: "Ophthalmic",
						name: "Ophthalmic",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "NeuraxialBlock",
				name: "Neuraxial Block",
				selectType: "none",
				nodeType: "parent",
				children: [
					{
						id: "Spinal",
						name: "Spinal",
						selectType: "none",
						nodeType: "parent",
						children: [
							{
								id: "Attempts2",
								name: "Attempts",
								selectType: "single",
								nodeType: "parent",
								children: [
									{
										id: "1",
										name: "1",
										nodeType: "leaf",
									},
									{
										id: "2",
										name: "2",
										nodeType: "leaf",
									},
									{
										id: "3",
										name: "3",
										nodeType: "leaf",
									},
									{
										id: "Multiple",
										name: "Multiple",
										nodeType: "leaf",
									},
								],
							},
							{
								id: "Position",
								name: "Position",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "Sitting",
										name: "Sitting",
										nodeType: "leaf",
									},
									{
										id: "Lateral",
										name: "Lateral",
										nodeType: "leaf",
									},
								],
							},
							{
								id: "Approach",
								name: "Approach",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "Midline",
										name: "Midline",
										nodeType: "leaf",
									},
									{
										id: "Paramedian",
										name: "Paramedian",
										nodeType: "leaf",
									},
								],
							},
						],
					},
					{
						id: "Epidural",
						name: "Epidural",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "DuralPuncture",
								name: "Dural Puncture",
								selectType: "none",
								nodeType: "parent",
								children: [
									{
										id: "Yes",
										name: "Yes",
										nodeType: "leaf",
									},
									{
										id: "No",
										name: "No",
										nodeType: "leaf",
									},
								],
							},
						],
					},
					{
						id: "Caudal",
						name: "Caudal",
						nodeType: "leaf",
					},
					{
						id: "CSE",
						name: "CSE",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

const interventionalProcedures = [
	{
		id: "interventionalProcedures",
		name: "Interventional Procedures",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Technique2",
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
								id: "Righ1",
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
				selectType: "none",
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
						selectType: "multiple",
						nodeType: "parent",
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
				selectType: "single",
				nodeType: "leaf",
			},
			{
				id: "PICCLine",
				name: "PICCLine",
				selectType: "single",
				nodeType: "leaf",
			},
			{
				id: "HemodialysisCatheter",
				name: "Hemodialysis Catheter",
				selectType: "single",
				nodeType: "leaf",
			},
			{
				id: "ECMOAccess",
				name: "ECMO Access",
				selectType: "single",
				nodeType: "leaf",
			},
			{
				id: "Tracheostomy",
				name: "Tracheostomy",
				selectType: "single",
				nodeType: "leaf",
			},
			{
				id: "Thoracocentesis",
				name: "Thoracocentesis",
				selectType: "single",
				nodeType: "leaf",
			},
		],
	},
];

const monitoring = [
	{
		id: "monitoring",
		name: "Monitoring",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "ASAStandardMonitoring",
				name: "ASA Standard Monitoring",
				nodeType: "leaf",
			},
			{
				id: "Cardiac",
				name: "Cardiac",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "PulseRate",
						name: "Pulse Rate",
						nodeType: "leaf",
					},
					{
						id: "BloodPressure",
						name: "Blood Pressure",
						selectType: "none",
						nodeType: "parent",
						children: [
							{
								id: "Non-Invasive1",
								name: "Non-Invasive",
								nodeType: "leaf",
							},
							{
								id: "Invasive1",
								name: "Invasive",
								selectType: "single",
								nodeType: "parent",
								children: [
									{
										id: "SystolicPressureVariation(SPV)",
										name: "Systolic Pressure Variation (SPV)",
										nodeType: "leaf",
									},
									{
										id: "PulsePressureVariation(PPV)",
										name: "Pulse Pressure Variation (PPV)",
										nodeType: "leaf",
									},
									{
										id: "StrokeVolumeVariation(SVV)",
										name: "Stroke Volume Variation (SVV)",
										nodeType: "leaf",
									},
								],
							},
						],
					},
					{
						id: "Electrocardiogram",
						name: "Electrocardiogram",
						nodeType: "leaf",
					},
					{
						id: "CentralVenousPressure(CVP)",
						name: "Central Venous Pressure (CVP)",
						nodeType: "leaf",
					},
					{
						id: "PulmonaryArteryCatheter",
						name: "Pulmonary Artery Catheter",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "PulmonaryArteryPressure",
								name: "Pulmonary Artery Pressure",
								nodeType: "leaf",
							},
							{
								id: "Right-SidedFillingPressure",
								name: "Right-Sided Filling Pressure",
								nodeType: "leaf",
							},
							{
								id: "Left-SidedFillingPressure",
								name: "Leftt-SidedFillingPressure",
								nodeType: "leaf",
							},
							{
								id: "MixedVenousOxygenSaturation(SvO2)",
								name: "Mixed venous Oxygen Saturation (SvO2)",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "CardiacOutput(CO)",
						name: "Cardiac Output (CO)",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "PiCCO2System",
								name: "PiCCO2 System",
								nodeType: "leaf",
							},
							{
								id: "SystemSystem",
								name: "System System",
								nodeType: "leaf",
							},
							{
								id: "LiDCOPlusSystem",
								name: "LiDCO Plus System",
								nodeType: "leaf",
							},
							{
								id: "VigileoSystem(FloTrac)",
								name: "Vigileo System (FloTrac)",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "TransesophagealEchocardiography",
						name: "Transesophageal Echocardiography",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "Strokevolume",
								name: "Stroke volume",
								nodeType: "leaf",
							},
							{
								id: "EjectionFraction",
								name: "Ejection Fraction",
								nodeType: "leaf",
							},
							{
								id: "GlobalEnd-DiastolicVolume",
								name: "Global End-Diastolic Volume",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "Pulmonary",
				name: "Pulmonary",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "SpO2",
						name: "SpO2",
						nodeType: "leaf",
					},
					{
						id: "EtCO2",
						name: "EtCO2",
						nodeType: "leaf",
					},
					{
						id: "Ventilator",
						name: "Ventilator",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "AirwayPressure",
								name: "Airway Pressure",
								nodeType: "leaf",
							},
							{
								id: "TidalVolume",
								name: "Tidal Volume",
								nodeType: "leaf",
							},
							{
								id: "RespiratoryRate",
								name: "Respiratory Rate",
								nodeType: "leaf",
							},
							{
								id: "I:ERatio",
								name: "I:E Ratio",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "ETTCuffPressure",
						name: "ETT Cuff Pressure",
						nodeType: "leaf",
					},
					{
						id: "PVI",
						name: "PVI",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Neuro-Physiologic",
				name: "Neuro-Physiologic",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "BIS",
						name: "BIS",
						nodeType: "leaf",
					},
					{
						id: "Entropy",
						name: "Entropy",
						nodeType: "leaf",
					},
					{
						id: "EvokedPotential",
						name: "Evoked Potential",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "SomatosensoryEvokedPotential(SSEP)",
								name: "Somatosensory Evoked Potential (SSEP)",
								nodeType: "leaf",
							},
							{
								id: "MotorEvokedPotential(MEP)",
								name: "Motor Evoked Potential (MEP)",
								nodeType: "leaf",
							},
							{
								id: "BrainstemAuditoryEvokedPotential(BAEP)",
								name: "Brainstem Auditory Evoked Potential (BAEP)",
								nodeType: "leaf",
							},
							{
								id: "VisualEvokedPotential(VEP)",
								name: "Visual Evoked Potential (VEP)",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "EEG",
						name: "EEG",
						nodeType: "leaf",
					},
					{
						id: "EMG",
						name: "EMG",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "Intracranial",
								name: "Intracranial",
								nodeType: "leaf",
							},
							{
								id: "Spinal",
								name: "Spinal",
								nodeType: "leaf",
							},
							{
								id: "PeripheralNerve",
								name: "Peripheral Nerve",
								nodeType: "leaf",
							},
						],
					},
				],
			},
			{
				id: "Neuromuscular",
				name: "Neuromuscular",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Site",
						name: "Site",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "CorrugatorSuperciliousMuscle",
								name: "Corrugator Supercilious Muscle",
								nodeType: "leaf",
							},
							{
								id: "OrbicularisOculiMuscle",
								name: "Orbicularis Oculi Muscle",
								nodeType: "leaf",
							},
							{
								id: "AdductorPolicisMuscle",
								name: "Adductor Policis Muscle",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "ToF",
						name: "ToF",
						nodeType: "leaf",
					},
					{
						id: "PTC",
						name: "PTC",
						nodeType: "leaf",
					},
					{
						id: "DBS",
						name: "DBS",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Temperature",
				name: "Temperature",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "Invasive2",
						name: "Invasive",
						nodeType: "leaf",
					},
					{
						id: "Non-Invasive2",
						name: "Non-Invasive",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "Intake|OutputChart",
				name: "Intake|Output Chart",
				nodeType: "leaf",
			},
			{
				id: "Blood",
				name: "Blood",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Hemoglobin",
						name: "Hemoglobin",
						nodeType: "leaf",
					},
					{
						id: "Glucose",
						name: "Glucose",
						nodeType: "leaf",
					},
					{
						id: "Lactate",
						name: "Lactate",
						nodeType: "leaf",
					},
					{
						id: "ABG",
						name: "ABG",
						nodeType: "leaf",
					},
					{
						id: "Electrolytes",
						name: "Electrolytes",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

const complications = [
	{
		id: "complications",
		name: "Compliations",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "AirwayCompromise",
				name: "Airway compromise",
				nodeType: "leaf",
			},
			{
				id: "ARRYTHMIA",
				name: "Arrythmia",
				nodeType: "leaf",
			},
			{
				id: "HYPERTENSION",
				name: "Hypertension",
				nodeType: "leaf",
			},
			{
				id: "HYPOTENSION",
				name: "Hypotension",
				nodeType: "leaf",
			},
			{
				id: "PAIN",
				name: "Pain",
				nodeType: "leaf",
			},
			{
				id: "PONV",
				name: "PONV",
				nodeType: "leaf",
			},
			{
				id: "Decreases Urine Output",
				name: "Decreases urine output",
				nodeType: "leaf",
			},
			{
				id: "EMERGENCEDELIRIUM",
				name: "Emergence delirium",
				nodeType: "leaf",
			},
			{
				id: "delayedEmergence",
				name: "Delayed emergence",
				nodeType: "leaf",
			},
			{
				id: "Shivering",
				name: "Shivering",
				nodeType: "leaf",
			},
			{
				id: "POPE",
				name: "Post-Obstructive pulmonary edema",
				nodeType: "leaf",
			},
			{
				id: "PacingRequried",
				name: "Pacing Requried",
				nodeType: "leaf",
			},
			{
				id: "CPR",
				name: "CPR",
				nodeType: "leaf",
			},
		],
	},
];

export default {
	comorbidity,
	examination,
	typeOfAnaesthesia,
	airManagement,
	drugs,
	regionalTechniques,
	interventionalProcedures,
	monitoring,
	complications,
};
