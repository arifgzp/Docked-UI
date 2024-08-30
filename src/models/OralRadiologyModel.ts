import { Instance } from "mobx-state-tree";
import { OralRadiologyModelBase, selectFromOralRadiology } from "./OralRadiologyModel.base";

/* The TypeScript type of an instance of OralRadiologyModel */
export interface OralRadiologyModelType extends Instance<typeof OralRadiologyModel.Type> {}

/* A graphql query fragment builders for OralRadiologyModel */
export { selectFromOralRadiology, oralRadiologyModelPrimitives, OralRadiologyModelSelector } from "./OralRadiologyModel.base";

/**
 * OralRadiologyModel
 */
export const OralRadiologyModel = OralRadiologyModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateOralRadiologyPayloadModelSelector =
	selectFromOralRadiology().createdOn.updatedOn.date.hospital.faculty.complete.patientAge.patientSex.rotation.procedure.report.diagnosis
		.chiefComplaint.caseType.remarks;
