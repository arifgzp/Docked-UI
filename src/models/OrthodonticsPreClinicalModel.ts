import { Instance } from "mobx-state-tree";
import { OrthodonticsPreClinicalModelBase, selectFromOrthodonticsPreClinical } from "./OrthodonticsPreClinicalModel.base";

/* The TypeScript type of an instance of OrthodonticsPreClinicalModel */
export interface OrthodonticsPreClinicalModelType extends Instance<typeof OrthodonticsPreClinicalModel.Type> {}

/* A graphql query fragment builders for OrthodonticsPreClinicalModel */
export {
	selectFromOrthodonticsPreClinical,
	orthodonticsPreClinicalModelPrimitives,
	OrthodonticsPreClinicalModelSelector,
} from "./OrthodonticsPreClinicalModel.base";

/**
 * OrthodonticsPreClinicalModel
 */
export const OrthodonticsPreClinicalModel = OrthodonticsPreClinicalModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateOrthodonticsPreClinicalModelSelector =
	selectFromOrthodonticsPreClinical().createdOn.updatedOn.date.hospital.rotation.faculty.conduct.wireBendingRecord.roundWireLoopRecord
		.loopInEdgewiseWireRecord.solderingExerciseRecord.cephalometricTracingRecord.claspRecord.springsRecord.canineRetractorsRecord.bowsRecord.remarks;
