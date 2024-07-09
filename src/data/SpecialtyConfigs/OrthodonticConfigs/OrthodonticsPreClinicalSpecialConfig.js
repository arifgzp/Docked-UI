const wireBendingRecord = [
	{
		id: "wireBendingRecord",
		name: "Wire Bending Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "CoordinatedUpper|LowerArches(0.016”)",
				name: "Coordinated Upper/Lower Arches (0.016”)",
				nodeType: "leaf",
			},
			{
				id: "CoordinatedUpper|LowerArches(0.018”)",
				name: "Coordinated Upper/Lower Arches (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "CoordinatedUpper|LowerArches(0.021”x0.025”)",
				name: "Coordinated Upper/Lower Arches (0.021” x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "1stOrderBends(0.016”)",
				name: "1st Order Bends (0.016”)",
				nodeType: "leaf",
			},
			{
				id: "1stOrderBends(0.018”)",
				name: "1st Order Bends (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "1stOrderBends(0.021”x0.025”)",
				name: "1st Order Bends (0.021” x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "1stAndIIndOrderBends(0.016”)",
				name: "1st And IInd Order Bends (0.016”)",
				nodeType: "leaf",
			},
			{
				id: "1stAndIIndOrderBends(0.018”)",
				name: "1st And IInd Order Bends (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "1stAndIIndOrderBends(0.021”x0.025”)",
				name: "1st And IInd Order Bends (0.021” x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "1stIIndAndIIIrdOrderBends(0.018”)",
				name: "1st, IInd and IIIrd Order Bends (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "RickettsArch",
				name: "Rickett's Arch",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "RickettsOtilityArchUpper(0.019’’x0.025’’)",
						name: "Rickett’s Utility Arch – Upper (0.019’’x 0.025’’)",
						nodeType: "leaf",
					},
					{
						id: "RickettsUtilityArchLower(0.019’’x0.025’’)",
						name: "Rickett’s Utility Arch - Lower(0.019’’x0.025’’)",
						nodeType: "leaf",
					},
				],
			},
		],
	},
];

const roundWireLoopRecord = [
	{
		id: "roundWireLoopRecord",
		name: "Round Wire Loop Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "verticalLoopWithoutHelixOpen(0.018”)",
				name: "Vertical Loop Without Helix - Open (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "verticalLoopWithoutHelixClosed(0.018”)",
				name: "Vertical Loop Without Helix - Closed (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "verticalLoopWithHelixOpen(0.018”)",
				name: "Vertical Loop With Helix - Open (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "verticalLoopWithHelixClosed(0.018”)",
				name: "Vertical Loop With Helix - Closed (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "horizontalLoop(0.018”)",
				name: "Horizontal Loop (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "molarTieBack(0.018”)",
				name: "Molar Tie Back (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "boxLoop(0.016”)",
				name: "Box Loop (0.016”)",
				nodeType: "leaf",
			},
			{
				id: "OmegaLoop(0.018”)",
				name: "Omega Loop (0.018”)",
				nodeType: "leaf",
			},
			{
				id: "TLoop(0.018’’)",
				name: "T Loop (0.018’’)",
				nodeType: "leaf",
			},
			{
				id: "wireWithAllLoops(0.018’’)",
				name: "Wire With All Loops (0.018’’)",
				nodeType: "leaf",
			},
		],
	},
];

const loopInEdgewiseWireRecord = [
	{
		id: "loopInEdgewiseWireRecord",
		name: "Loop In Edgewise Wire Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "verticalLoopWithoutHelixOpen(0.019x0.025”)",
				name: "Vertical Loop Without Helix - Open (0.019 x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "verticalLoopWithoutHelixClosed(0.019x0.025”)",
				name: "Vertical Loop Without Helix - Closed (0.019 x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "verticalLoopWithHelixOpen(0.019’’x0.025’’)",
				name: "Vertical Loop With Helix Open (0.019’’ x 0.025’’)",
				nodeType: "leaf",
			},
			{
				id: "verticalLoopWithHelixClosed(0.019’’x0.025’’)",
				name: "Vertical Loop With Helix - Closed (0.019’’ x 0.025’’)",
				nodeType: "leaf",
			},
			{
				id: "horizontalLoop(0.019”x0.025”)",
				name: "Horizontal Loop (0.019” x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "molarTieBack(0.019’’x0.025)",
				name: "Molar Tie Back (0.019’’ x 0.025)",
				nodeType: "leaf",
			},
			{
				id: "boxLoop(0.019”x0.025”)",
				name: "Box Loop (0.019” x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "omegaLoop(0.019”x0.025”)",
				name: "Omega Loop (0.019” x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "TLoop(0.019”x0.025”)",
				name: "T Loop(0.019” x 0.025”)",
				nodeType: "leaf",
			},
			{
				id: "wireWithAllLoops(0.019’’x0.025’’)",
				name: "Wire With All Loops (0.019’’ x 0.025’’)",
				nodeType: "leaf",
			},
			{
				id: "rickettsSpring(0.019’’x0.025’’)",
				name: "Ricketts Spring (0.019’’ x 0.025’’)",
				nodeType: "leaf",
			},
			{
				id: "opusLoop(0.019’’x0.025’’)",
				name: "Opus Loop (0.019’’ x 0.025’’)",
				nodeType: "leaf",
			},
			{
				id: "kLoop(0.019”x0.025”)",
				name: "K - Loop (0.019” x 0.025”)",
				nodeType: "leaf",
			},
		],
	},
];

const solderingExerciseRecord = [
	{
		id: "solderingExerciseRecord",
		name: "Soldering Exercise Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "nanceButton",
				name: "Nance Button",
				nodeType: "leaf",
			},
			{
				id: "transpalatalArch",
				name: "Transpalatal Arch",
				nodeType: "leaf",
			},
			{
				id: "translingualArch",
				name: "Translingual Arch",
				nodeType: "leaf",
			},
			{
				id: "quadHelix",
				name: "Quad Helix",
				nodeType: "leaf",
			},
		],
	},
];

const cephalometricTracingRecord = [
	{
		id: "cephalometricTracingRecord",
		name: "Cephalometric Tracing Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "class",
				name: "Class",
				selectType: "single",
				nodeType: "parent",
				children: [
					{
						id: "I",
						name: "I",
						nodeType: "leaf",
					},
					{
						id: "II",
						name: "II",
						nodeType: "leaf",
					},
					{
						id: "III",
						name: "III",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "downs",
				name: "Down's",
				nodeType: "leaf",
			},
			{
				id: "steiners",
				name: "Steiner's",
				nodeType: "leaf",
			},
			{
				id: "tweed",
				name: "Tweed",
				nodeType: "leaf",
			},
			{
				id: "mcNamaras",
				name: "McNamara's",
				nodeType: "leaf",
			},
			{
				id: "rakosi",
				name: "Rakosi",
				nodeType: "leaf",
			},
			{
				id: "burrstone",
				name: "Burrstone",
				nodeType: "leaf",
			},
			{
				id: "ricketts",
				name: "Ricketts",
				nodeType: "leaf",
			},
			{
				id: "bjork",
				name: "Bjork",
				nodeType: "leaf",
			},
			{
				id: "coben",
				name: "Coben",
				nodeType: "leaf",
			},
			{
				id: "holdaways",
				name: "Holdaways",
				nodeType: "leaf",
			},
			{
				id: "COGS",
				name: "COGS",
				nodeType: "leaf",
			},
			{
				id: "arnettsSTCASoftTissueAnalysis",
				name: "Arnett's STCA Soft Tissue Analysis",
				nodeType: "leaf",
			},
		],
	},
];

const claspRecord = [
	{
		id: "claspRecord",
		name: "Clasp Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "cclasps",
				name: "C clasps",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Molars",
						name: "Molars",
						nodeType: "leaf",
					},
					{
						id: "Premolars",
						name: "Premolars",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "jackson",
				name: "Jackson",
				nodeType: "leaf",
			},
			{
				id: "crozat",
				name: "Crozat",
				nodeType: "leaf",
			},
			{
				id: "traingular",
				name: "Traingular",
				nodeType: "leaf",
			},
			{
				id: "singleArrowHead",
				name: "Single Arrow Head",
				nodeType: "leaf",
			},
			{
				id: "continuousArrowHead",
				name: "Continuous Arrow Head",
				nodeType: "leaf",
			},
			{
				id: "adamClasp",
				name: "Adam Clasp",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "Molar",
						name: "Molar",
						nodeType: "leaf",
					},
					{
						id: "Premolars",
						name: "Pre-Molars",
						nodeType: "leaf",
					},
					{
						id: "anterior",
						name: "Anterior",
						nodeType: "leaf",
					},
					{
						id: "distalExtensionOnMolars",
						name: "Distal Extension On Molars",
						nodeType: "leaf",
					},
					{
						id: "eyeletOnMolars",
						name: "Eyelet On Molars",
						nodeType: "leaf",
					},
					{
						id: "solderedHookOnMolars",
						name: "Soldered Hook On Molars",
						nodeType: "leaf",
					},
					{
						id: "solderedTubeOnMolars",
						name: "Soldered Tube On Molars",
						nodeType: "leaf",
					},
					{
						id: "extendedArm",
						name: "Extended Arm",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "duyzingClasp",
				name: "Duyzing Clasp",
				nodeType: "leaf",
			},
			{
				id: "southend",
				name: "Southend",
				nodeType: "leaf",
			},
		],
	},
];

const springsRecord = [
	{
		id: "springsRecord",
		name: "Springs Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "size",
				name: "Size",
				selectType: "multiple",
				nodeType: "parent",
				children: [
					{
						id: "06mm",
						name: "0.6 mm",
						nodeType: "leaf",
					},
					{
						id: "05mm",
						name: "0.5 mm",
						nodeType: "leaf",
					},
				],
			},
			{
				id: "singleCantilever",
				name: "Single Cantilever",
				nodeType: "leaf",
			},
			{
				id: "doubleCantilever",
				name: "Double Cantilever",
				nodeType: "leaf",
			},
			{
				id: "doubleCantileverWithGuide",
				name: "Double Cantilever With Guide",
				nodeType: "leaf",
			},
			{
				id: "fingerSpringForDistalMovement",
				name: "Finger Spring For Distal Movement",
				nodeType: "leaf",
			},
			{
				id: "singleClosedLoop",
				name: "Single Closed Loop",
				nodeType: "leaf",
			},
			{
				id: "doubleClosedLoop",
				name: "Double Closed Loop",
				nodeType: "leaf",
			},
			{
				id: "clubSpringForMolar",
				name: "Club Spring For Molar",
				nodeType: "leaf",
			},
		],
	},
];

const canineRetractorsRecord = [
	{
		id: "canineRetractorsRecord",
		name: "Canine Retractors Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "helicalCoil",
				name: "Helical Coil",
				nodeType: "leaf",
			},
			{
				id: "buccal(Alberts)",
				name: "Buccal (Albert's)",
				nodeType: "leaf",
			},
			{
				id: "uLoop",
				name: "'U' loop",
				nodeType: "leaf",
			},
			{
				id: "stablised",
				name: "Stablised",
				nodeType: "leaf",
			},
			{
				id: "palatal",
				name: "Palatal",
				nodeType: "leaf",
			},
			{
				id: "springWithGuard",
				name: "Spring With Guard",
				nodeType: "leaf",
			},
			{
				id: "springWithBoxing",
				name: "Spring With Boxing",
				nodeType: "leaf",
			},
		],
	},
];

const bowsRecord = [
	{
		id: "bowsRecord",
		name: "Bows Record",
		selectType: "multiple",
		nodeType: "parent",
		children: [
			{
				id: "shortLabial",
				name: "Short Labial",
				nodeType: "leaf",
			},
			{
				id: "longLabial",
				name: "Long Labial",
				nodeType: "leaf",
			},
			{
				id: "Roberts",
				name: "Robert's",
				nodeType: "leaf",
			},
			{
				id: "mills",
				name: "Mills",
				nodeType: "leaf",
			},
			{
				id: "highLabialWithApronSpring",
				name: "High Labial With Apron Spring",
				nodeType: "leaf",
			},
			{
				id: "beggsType",
				name: "Begg's Type",
				nodeType: "leaf",
			},
			{
				id: "fittedLabial",
				name: "Fitted Labial",
				nodeType: "leaf",
			},
		],
	},
];

export default {
	wireBendingRecord,
	roundWireLoopRecord,
	loopInEdgewiseWireRecord,
	solderingExerciseRecord,
	cephalometricTracingRecord,
	claspRecord,
	springsRecord,
	canineRetractorsRecord,
	bowsRecord,
};
