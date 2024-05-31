import { map } from "lodash";

const data = {
	"AirwayManagement/FaceMaskVentilation": ["Neuraxial", "Peripheral "],
	"AirwayManagement/AirwayDevice/Tube": ["Reinforced", "DLT"],
	"AirwayManagement/AirwayDevice/Tube/ETT": "Uncuffed",
	"AirwayManagement/AirwayDevice/Tube/RAE": "NorthPole",
	"AirwayManagement/IntubationTechnique": ["OralIntubation", "AwakeFibre-optic"],
	"AirwayManagement/IntubationTechnique/Attempts": "attempt2",
	"AirwayManagement/IntubationTechnique/CL": "I",
	"AirwayManagement/IntubationTechnique/Adjuvants": ["Bougie"],
	"AirwayManagement/Extubation/Reversal": ["Sugammadex", "Neostigmine/Glycopyrrolate"],
	"AirwayManagement/Extubation/Reversal/Post-opVentilation": ["Elective", "Emergency"],
};

function test() {
	map(data, (value, key) => {
		const splitKey = key.split("/");
		console.log("Spliting Keys", splitKey);
	});
}

test();
