const Options = {
	Conduct: [
		{ label: "Observed", value: "Observed" },
		{ label: "Assisted", value: "Assisted" },
		{ label: "Performed under supervision", value: "Performed under supervision" },
		{ label: "Performed independently", value: "Performed independently" },
		{ label: "Supervised", value: "Supervised" },
		{ label: "Conducted", value: "Conducted" },
	],
};

const OrthodonticsPreClinicalTextAndSingleSelectOptions = [
	{ name: "Conduct", uid: "conduct", type: "select-single", options: Options.Conduct, isRequire: true },
];

const specialOrthodonticsPreClinical = [
	{ id: "wireBendingRecord", name: "Wire Bending Record" },
	{ id: "roundWireLoopRecord", name: "Round Wire Loop Record" },
	{ id: "loopInEdgewiseWireRecord", name: "Loop In Edgewise Wire Record" },
	{ id: "solderingExerciseRecord", name: "Soldering Exercise Record" },
	{ id: "cephalometricTracingRecord", name: "Cephalometric Tracing Record" },
	{ id: "claspRecord", name: "Clasp Record" },
	{ id: "springsRecord", name: "Springs Record" },
	{ id: "canineRetractorsRecord", name: "Canine Retractors Record" },
	{ id: "bowsRecord", name: "Bows Record" },
];

export { OrthodonticsPreClinicalTextAndSingleSelectOptions, specialOrthodonticsPreClinical };
