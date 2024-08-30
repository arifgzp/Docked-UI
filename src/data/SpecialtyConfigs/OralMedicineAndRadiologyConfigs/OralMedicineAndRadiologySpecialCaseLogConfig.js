const comorbidities = [
	{
		id: "comorbidities",
		name: "Comorbidities",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "hypertension",
				name: "Hypertension",
				nodeType: "leaf",
			},
			{
				id: "DiabetesMellitus",
				name: "Diabetes Mellitus",
				nodeType: "leaf",
			},
			{
				id: "Thyroiddisorder",
				name: "Thyroid disorder",
				nodeType: "leaf",
			},
			{
				id: "Cardiacdisease",
				name: "Cardiac disease",
				nodeType: "leaf",
			},
			{
				id: "TB",
				name: "TB",
				nodeType: "leaf",
			},
			{
				id: "Hepatitis",
				name: "Hepatitis",
				nodeType: "leaf",
			},
			{
				id: "Bleedingdisorder",
				name: "Bleeding disorder",
				nodeType: "leaf",
			},
			{
				id: "OtherComorbidites",
				name: "Other",
				nodeType: "leaf",
				inputType: "text",
			},
		],
	},
];

const drugAllergyReaction = [
	{
		id: "drugAllergyReaction",
		name: "Drug Allergy/Reaction",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "Penicillin",
				name: "Penicillin",
				nodeType: "leaf",
			},
			{
				id: "NSAIDs",
				name: "NSAIDs",
				nodeType: "leaf",
			},
			{
				id: "Sulphadrugs",
				name: "Sulpha drugs",
				nodeType: "leaf",
			},

			{
				id: "OtherDrugAllergyReaction",
				name: "Others",
				nodeType: "leaf",
				inputType: "text",
			},
		],
	},
];

const habitHistory = [
	{
		id: "habitHistory",
		name: "Habit history",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "DurationYears",
				name: "Duration",
				nodeType: "leaf",
				inputType: "text",
				unit: "years",
			},
			{
				id: "Frequency",
				name: "Frequency",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "Smoking",
				name: "Smoking",
				nodeType: "leaf",
			},

			{
				id: "Beedi",
				name: "Beedi",
				nodeType: "leaf",
			},
			{
				id: "Alcohol",
				name: "Alcohol",
				nodeType: "leaf",
			},

			{
				id: "TobaccoChewer",
				name: "Tobacco Chewer",
				nodeType: "leaf",
			},
			{
				id: "DrugAddiction",
				name: "Drug Addiction",
				nodeType: "leaf",
			},
			{
				id: "Other Habit History",
				name: "Others",
				nodeType: "leaf",
				inputType: "text",
			},
		],
	},
];

const lesion = [
	{
		id: "lesion",
		name: "Lesion",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "type",
				name: "Type",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "Location",
				name: "Location",
				nodeType: "leaf",
				inputType: "text",
			},
			{
				id: "Extent",
				name: "Extent",
				nodeType: "leaf",
				inputType: "text",
			},
		],
	},
];

const procedure = [
	{
		id: "procedure",
		name: "Procedure",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "biopsy",
				name: "Biopsy",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "site",
						name: "Site",
						nodeType: "leaf",
						inputType: "text",
					},
					{
						id: "type",
						name: "Type",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "incisional",
								name: "Incisional",
								nodeType: "parent",
								selectType: "single",
								children: [
									{
										id: "ScalpelIncisional",
										name: "Scalpel",
										nodeType: "leaf",
									},
									{
										id: "PunchIncisional",
										name: "Punch",
										nodeType: "leaf",
									},
								],
							},
							{
								id: "excisional",
								name: "Excisional",
								nodeType: "parent",
								selectType: "single",
								children: [
									{
										id: "ScalpelExcisional",
										name: "Scalpel",
										nodeType: "leaf",
									},
									{
										id: "PunchExcisional",
										name: "Punch",
										nodeType: "leaf",
									},
								],
							},
							{
								id: "Resection",
								name: "Resection",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "fixation",
						name: "Fixation",
						nodeType: "parent",
						selectType: "single",
						children: [
							{
								id: "Yesfixation",
								name: "Yes",
								nodeType: "leaf",
							},
							{
								id: "Nofixation",
								name: "No",
								nodeType: "leaf",
							},
							{
								id: "Formalin",
								name: "Formalin",
								nodeType: "leaf",
							},
						],
					},
					{
						id: "LesionType",
						name: "Lesion Type",
						nodeType: "leaf",
						inputType: "text",
					},
					{
						id: "diagnosis",
						name: "Diagnosis",
						nodeType: "leaf",
						inputType: "text",
					},
				],
			},
			{
				id: "LaserTreatment",
				name: "Laser Treatment",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Therapeuticlasertherapy",
						name: "Therapeutic laser therapy",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "AphthousUlcer",
								name: "Aphthous Ulcer",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "AphthousUlcerPower",
										name: "Power",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "AphthousUlcerMode",
										name: "Mode",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "AphthousUlcerTime",
										name: "Time",
										nodeType: "leaf",
										inputType: "text",
									},
								],
							},
							{
								id: "TrigeminalNeuralgia",
								name: "Trigeminal Neuralgia",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "TrigeminalNeuralgiaPower",
										name: "Power",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "TrigeminalNeuralgiaMode",
										name: "Mode",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "TrigeminalNeuralgiaTime",
										name: "Time",
										nodeType: "leaf",
										inputType: "text",
									},
								],
							},
							{
								id: "MyofascialPain",
								name: "Myofascial pain",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "MyofascialPainPower",
										name: "Power",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "MyofascialPainMode",
										name: "Mode",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "MyofascialPainTime",
										name: "Time",
										nodeType: "leaf",
										inputType: "text",
									},
								],
							},
							{
								id: "Temporomandibularjointpain",
								name: "Temporomandibular joint pain",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "TemporomandibularjointpainPower",
										name: "Power",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "TemporomandibularjointpainMode",
										name: "Mode",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "TemporomandibularjointpainTime",
										name: "Time",
										nodeType: "leaf",
										inputType: "text",
									},
								],
							},
						],
					},
					{
						id: "Hemostasis",
						name: "Hemostasis",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "HemostasisPower",
								name: "Power",
								nodeType: "leaf",
								inputType: "text",
							},
							{
								id: "HemostasisMode",
								name: "Mode",
								nodeType: "leaf",
								inputType: "text",
							},
							{
								id: "HemostasisTime",
								name: "Time",
								nodeType: "leaf",
								inputType: "text",
							},
						],
					},
					{
						id: "SurgicalExcision",
						name: "Surgical excision",
						selectType: "multiple",
						nodeType: "parent",
						children: [
							{
								id: "SurgicalExcisionPower",
								name: "Power",
								nodeType: "leaf",
								inputType: "text",
							},
							{
								id: "SurgicalExcisionMode",
								name: "Mode",
								nodeType: "leaf",
								inputType: "text",
							},
							{
								id: "SurgicalExcisionTime",
								name: "Time",
								nodeType: "leaf",
								inputType: "text",
							},
							{
								id: "Mucocele",
								name: "Mucocele",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "Site",
										name: "Site",
										selectType: "multiple",
										nodeType: "parent",
										children: [
											{
												id: "Upper lip",
												name: "Upper lip",
												nodeType: "leaf",
											},
											{
												id: "LowerLip",
												name: "Lower lip",
												nodeType: "leaf",
											},
											{
												id: "OtherSite",
												name: "Other",
												nodeType: "leaf",
												inputType: "text",
											},
										],
									},

									{
										id: "Size",
										name: "Size",
										nodeType: "leaf",
										inputType: "text",
									},
								],
							},
							{
								id: "Fibroma",
								name: "Fibroma",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "FibromaSite",
										name: "Upper lip",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "FibromaSize",
										name: "Size",
										nodeType: "leaf",
										inputType: "text",
									},
								],
							},
							{
								id: "SurgicalAblation ",
								name: "Surgical ablation ",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "SurgicalAblationDiagnosis",
										name: "Diagnosis",
										nodeType: "leaf",
										inputType: "text",
									},
								],
							},
						],
					},
				],
			},
			{
				id: "Invasive",
				name: "Invasive",
				nodeType: "parent",
				selectType: "multiple",
				children: [
					{
						id: "Intralesionaltherapy",
						name: "Intralesional therapy",
						nodeType: "parent",
						selectType: "multiple",
						children: [
							{
								id: "IntralesionaltherapyDiagnosis ",
								name: "Diagnosis ",
								nodeType: "leaf",
								inputType: "text",
							},
							{
								id: "Treatment",
								name: "Treatment",
								selectType: "multiple",
								nodeType: "parent",
								children: [
									{
										id: "Hydrocortisone",
										name: "Hydrocortisone ",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "Triamcinolone",
										name: "Triamcinolone ",
										nodeType: "leaf",
										inputType: "text",
									},
									{
										id: "TreatmentOthers",
										name: "Others ",
										nodeType: "leaf",
										inputType: "text",
									},
								],
							},
						],
					},
				],
			},
		],
	},
];

export default { comorbidities, drugAllergyReaction, habitHistory, lesion, procedure };
