import { Instance } from "mobx-state-tree";
import { OrthopaedicsCaseLogModelBase, selectFromOrthopaedicsCaseLog } from "./OrthopaedicsCaseLogModel.base";

/* The TypeScript type of an instance of OrthopaedicsCaseLogModel */
export interface OrthopaedicsCaseLogModelType extends Instance<typeof OrthopaedicsCaseLogModel.Type> {}

/* A graphql query fragment builders for OrthopaedicsCaseLogModel */
export { selectFromOrthopaedicsCaseLog, orthopaedicsCaseLogModelPrimitives, OrthopaedicsCaseLogModelSelector } from "./OrthopaedicsCaseLogModel.base";

/**
 * OrthopaedicsCaseLogModel
 */
export const OrthopaedicsCaseLogModel = OrthopaedicsCaseLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateOrthopaedicsCaseLogModelSelector =
	selectFromOrthopaedicsCaseLog().createdOn.updatedOn.date.patientAge.patientSex.diseaseCategory.site.joint.bones.outcomes.diagnosis;
