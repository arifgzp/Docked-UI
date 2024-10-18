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
					{
						id: "Other1",
						name: "Other",
						nodeType: "leaf",
						inputType: "text",
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
					{
						id: "Other2",
						name: "Other",
						nodeType: "leaf",
						inputType: "text",
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
			{
				id: "Smoker",
				name: "Smoker",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "PackYears",
						name: "Pack Years",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "AlcoholIntake",
				name: "Alcohol Intake",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "mlPerDay",
						name: "ml Per Day",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
		],
	},
];

const examination = [
	{
		id: "Examination",
		name: "Examination",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Positivefinding",
				name: "Positive finding",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "METs",
				name: "METs",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "AirwayAssessment",
				name: "Airway Assessment",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "MallampatiClass",
						name: "Mallampati Class",
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
						id: "IIG",
						name: "IIG",
						nodeType: "leaf",
						inputType: "text",
						unit: "cm",
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
						id: "TMD",
						name: "TMD",
						nodeType: "leaf",
						inputType: "text",
						unit: "cm",
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

const laboratoryFindings = [
	{
		id: "laboratoryFindings",
		name: "Laboratory Findings",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "PositiveFindings",
				name: "Positive Findings",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "ECG",
				name: "ECG",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "CXR",
				name: "CXR",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "2Decho",
				name: "2D Echo",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "PFT",
				name: "PFT",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "Other3",
				name: "Other",
				nodeType: "leaf",
				inputType: "text",
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
				id: "General Anesthesia",
				name: "General Anesthesia",
				nodeType: "leaf",
			},
			{
				id: "Regional",
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
				id: "Monitored Anesthesia Care",
				name: "Monitored Anesthesia Care",
				nodeType: "leaf",
			},
			{
				id: "TIVA",
				name: "TIVA",
				nodeType: "leaf",
			},
		],
	},
];

const drugs = [
	{
		id: "Drugs",
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
								name: "IV",
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
						id: "Adjuvants",
						name: "Adjuvants",
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
							{
								id: "SodiumBicarbonate",
								name: "Sodium Bicarbonate",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "Strength",
						name: "Strength",
						selectType: "single",
						nodeType: "parent",
						children: [
							{
								id: "0.1%",
								name: "0.1%",
								nodeType: "leaf",
							},
							{
								id: "0.2%",
								name: "0.2%",
								nodeType: "leaf",
							},
							{
								id: "0.25%",
								name: "0.25%",
								nodeType: "leaf",
							},
							{
								id: "0.5%",
								name: "0.5%",
								nodeType: "leaf",
							},
							{
								id: "0.75%",
								name: "0.75%",
								nodeType: "leaf",
							},
							{
								id: "1%",
								name: "1%",
								nodeType: "leaf",
							},
							{
								id: "2%",
								name: "2%",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "Volume",
						name: "Volume",
						nodeType: "leaf",
						inputType: "text",
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
						id: "UltrasoundGuided",
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
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "SuperficialCervicalPlexusblock",
						name: "Superficial Cervical Plexus Block",
						nodeType: "leaf",
					},
					{
						id: "Interscalene BP Block",
						name: "Interscalene BP Block",
						nodeType: "leaf",
					},
					{
						id: "SCUT Block",
						name: "SCUT Block",
						nodeType: "leaf",
					},
					{
						id: "Supraclavicular BP Block",
						name: "Supraclavicular BP Block",
						nodeType: "leaf",
					},
					{
						id: "SubclavianPerivascularBlock",
						name: "Subclavian Perivascular Block",
						nodeType: "leaf",
					},
					{
						id: "Lateral Infraclavicular Block",
						name: "Lateral Infraclavicular Block",
						nodeType: "leaf",
					},
					{
						id: "Supra-Scapular Nerve Block",
						name: "Supra-Scapular Nerve Block",
						nodeType: "leaf",
					},
					{
						id: "Axillary BP Block",
						name: "Axillary BP Block",
						nodeType: "leaf",
					},
					{
						id: "OtherUpperExtremityBlock",
						name: "Other",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "LowerExtremityBlock",
				name: "Lower Extremity Block",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "LumbarPlexus Block",
						name: "Lumbar Plexus Block",
						nodeType: "leaf",
					},
					{
						id: "Sacral Plexus Block",
						name: "Sacral Plexus Block",
						nodeType: "leaf",
					},
					{
						id: "Fascia Iliaca Supra-inguinal Block",
						name: "Fascia Iliaca Supra-inguinal Block",
						nodeType: "leaf",
					},
					{
						id: "Fascia Iliaca Infra-inguinal Block",
						name: "Fascia Iliaca Infra-inguinal Block",
						nodeType: "leaf",
					},
					{
						id: "Sciatic Nerve Block (transgluteal)",
						name: "Sciatic Nerve Block (transgluteal)",
						nodeType: "leaf",
					},
					{
						id: "Sciatic Nerve Block (infragluteal)",
						name: "Sciatic Nerve Block (infragluteal)",
						nodeType: "leaf",
					},
					{
						id: "Sciatic Nerve Block (anterior)",
						name: "Sciatic Nerve Block (anterior)",
						nodeType: "leaf",
					},
					{
						id: "Femoral Nerve Block",
						name: "Femoral Nerve Block",
						nodeType: "leaf",
					},
					{
						id: "PENG Block",
						name: "PENG Block",
						nodeType: "leaf",
					},
					{
						id: "Pudendal Nerve Block",
						name: "Pudendal Nerve Block",
						nodeType: "leaf",
					},
					{
						id: "Femoral Triangle Block",
						name: "Femoral Triangle Block",
						nodeType: "leaf",
					},
					{
						id: "Adductor Canal Block",
						name: "Adductor Canal Block",
						nodeType: "leaf",
					},
					{
						id: "Dual Sub-sartorial Block",
						name: "Dual Sub-sartorial Vlock",
						nodeType: "leaf",
					},
					{
						id: "iPACK",
						name: "iPACK",
						nodeType: "leaf",
					},
					{
						id: "Popliteal Sciatic Block",
						name: "Popliteal Sciatic Block",
						nodeType: "leaf",
					},
					{
						id: "Nerve to VMM Block",
						name: "Nerve to VMM Block",
						nodeType: "leaf",
					},
					{
						id: "Common Peroneal Nerve Block",
						name: "Common Peroneal Nerve Block",
						nodeType: "leaf",
					},
					{
						id: "Lateral Femoral Cutaneous Nerve Block",
						name: "Lateral Femoral Cutaneous Nerve Block",
						nodeType: "leaf",
					},
					{
						id: "Saphenous Nerve Block",
						name: "Saphenous Nerve Block",
						nodeType: "leaf",
					},
					{
						id: "CAPS Block",
						name: "CAPS Block",
						nodeType: "leaf",
					},
					{
						id: "Ankle",
						name: "Ankle",
						nodeType: "leaf",
					},
					{
						id: "MAYO Block",
						name: "MAYO Block",
						nodeType: "leaf",
					},
					{
						id: "Reverse MAYO Block",
						name: "Reverse MAYO Block",
						nodeType: "leaf",
					},
					{
						id: "Other Lower Block",
						name: "Other",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "Abdominal Wall Blocks",
				name: "Abdominal Wall Blocks",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Rectus Sheath Block",
						name: "Rectus Sheath Block",
						nodeType: "leaf",
					},
					{
						id: "IIN-IHN Block",
						name: "IIN-IHN Block",
						nodeType: "leaf",
					},
					{
						id: "Transverse Abdominis Plane (TAP) Block",
						name: "Transverse Abdominis Plane (TAP) Block",
						nodeType: "leaf",
					},
					{
						id: "Mid-Axillary TAP Block",
						name: "Mid-Axillary TAP Block",
						nodeType: "leaf",
					},
					{
						id: "Subcostal TAP Block",
						name: "Subcostal TAP Block",
						nodeType: "leaf",
					},
					{
						id: "Anterior QL Block",
						name: "Anterior QL Block",
						nodeType: "leaf",
					},
					{
						id: "Lateral QL Block",
						name: "Lateral QL Block",
						nodeType: "leaf",
					},
					{
						id: "Posterior QL Block",
						name: "Posterior QL Block",
						nodeType: "leaf",
					},
					{
						id: "Transversalis Fascia Plane (TFP) Block",
						name: "Transversalis Fascia Plane (TFP) Block",
						nodeType: "leaf",
					},
					{
						id: "Rhomboid Intercostal Plane Block",
						name: "Rhomboid Intercostal Plane Block",
						nodeType: "leaf",
					},
					{
						id: "Other Abdominal Wall Blocks",
						name: "Other",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "Chest Wall Blocks",
				name: "Chest Wall Blocks",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Superficial SAP Block",
						name: "Superficial SAP Block",
						nodeType: "leaf",
					},
					{
						id: "Deep SAP Block",
						name: "Superficial SAP Block",
						nodeType: "leaf",
					},
					{
						id: "Superficial PIP Block",
						name: "Superficial PIP Block",
						nodeType: "leaf",
					},
					{
						id: "Deep PIP Block",
						name: "Deep PIP Block",
						nodeType: "leaf",
					},
					{
						id: "Interpectoral Plane Block",
						name: "Interpectoral Plane Block",
						nodeType: "leaf",
					},
					{
						id: "Pecto-serratus Block",
						name: "Pecto-serratus Block",
						nodeType: "leaf",
					},
					{
						id: "Other Chest Walls Block",
						name: "Other",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "Paraspinal Blocks",
				name: "Paraspinal Blocks",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Paravertebral Block",
						name: "Paravertebral Block",
						nodeType: "leaf",
					},
					{
						id: "Intertransverse Process Block",
						name: "Intertransverse Process Block",
						nodeType: "leaf",
					},
					{
						id: "Erector Spinae Plane Block",
						name: "Erector Spinae Plane Block",
						nodeType: "leaf",
					},
					{
						id: "Retrolaminar Block",
						name: "Retrolaminar Block",
						nodeType: "leaf",
					},
					{
						id: "Other Chest Walls Block",
						name: "Other",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "TruncalBlock",
				name: "Truncal Block",
				selectType: "multiple",
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
				selectType: "multiple",
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
				selectType: "multiple",
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
							{
								id: "Space1",
								name: "Space",
								nodeType: "leaf",
								inputType: "text",
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
								id: "Space2",
								name: "Space",
								nodeType: "leaf",
								inputType: "text",
							},
							{
								id: "Attempts3",
								name: "Attempts",
								nodeType: "leaf",
								inputType: "text",
							},
							{
								id: "DuralPuncture",
								name: "Dural Puncture",
								selectType: "single",
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
			{
				id: "SingleNerveBlock",
				name: "Single Nerve Block",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "LabourAnalgesia",
				name: "Labour Analgesia",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "P | G | L | A",
						name: "P / G / L / A",
						nodeType: "leaf",
						inputType: "text",
					},
					{
						id: "BolusDose",
						name: "Bolus Dose",
						nodeType: "leaf",
						inputType: "text",
					},
					{
						id: "InfusionRate",
						name: "Infusion Rate",
						nodeType: "leaf",
						inputType: "text",
					},
					{
						id: "Duration",
						name: "Duration",
						nodeType: "leaf",
						inputType: "text",
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
						selectType: "single",
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
						selectType: "multiple",
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
						selectType: "single",
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
								id: "Spinal2",
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
				name: "Intake/Output Chart",
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
	laboratoryFindings,
	typeOfAnaesthesia,
	airManagement,
	drugs,
	regionalTechniques,
	interventionalProcedures,
	monitoring,
	complications,
};
