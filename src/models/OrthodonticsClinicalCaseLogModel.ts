import { Instance } from "mobx-state-tree";
import { OrthodonticsClinicalCaseLogModelBase, selectFromOrthodonticsClinicalCaseLog } from "./OrthodonticsClinicalCaseLogModel.base";

/* The TypeScript type of an instance of OrthodonticsClinicalCaseLogModel */
export interface OrthodonticsClinicalCaseLogModelType extends Instance<typeof OrthodonticsClinicalCaseLogModel.Type> {}

/* A graphql query fragment builders for OrthodonticsClinicalCaseLogModel */
export {
	selectFromOrthodonticsClinicalCaseLog,
	orthodonticsClinicalCaseLogModelPrimitives,
	OrthodonticsClinicalCaseLogModelSelector,
} from "./OrthodonticsClinicalCaseLogModel.base";

/**
 * OrthodonticsClinicalCaseLogModel
 */
export const OrthodonticsClinicalCaseLogModel = OrthodonticsClinicalCaseLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateOrthodonticsClinicalCaseLogSelector =
	selectFromOrthodonticsClinicalCaseLog().createdOn.updatedOn.date.patientAge.patientSex.diagnosis.techniqueUsed.applianceUsed.treatmentPlan.outcome;
