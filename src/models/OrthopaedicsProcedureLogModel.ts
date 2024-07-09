import { Instance } from "mobx-state-tree";
import { OrthopaedicsProcedureLogModelBase, selectFromOrthopaedicsProcedureLog } from "./OrthopaedicsProcedureLogModel.base";

/* The TypeScript type of an instance of OrthopaedicsProcedureLogModel */
export interface OrthopaedicsProcedureLogModelType extends Instance<typeof OrthopaedicsProcedureLogModel.Type> {}

/* A graphql query fragment builders for OrthopaedicsProcedureLogModel */
export {
	selectFromOrthopaedicsProcedureLog,
	orthopaedicsProcedureLogModelPrimitives,
	OrthopaedicsProcedureLogModelSelector,
} from "./OrthopaedicsProcedureLogModel.base";

/**
 * OrthopaedicsProcedureLogModel
 */
export const OrthopaedicsProcedureLogModel = OrthopaedicsProcedureLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateOrthopaedicsProcedureLogModelSelector =
	selectFromOrthopaedicsProcedureLog().createdOn.updatedOn.date.hospital.faculty.patientAge.patientSex.rotation.conduct.sites.procedure.procedureName
		.outcome.complication.diagnosis.caseType.remarks;
