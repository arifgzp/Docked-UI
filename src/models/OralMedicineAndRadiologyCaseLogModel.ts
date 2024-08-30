import { Instance } from "mobx-state-tree";
import { OralMedicineAndRadiologyCaseLogModelBase, selectFromOralMedicineAndRadiologyCaseLog } from "./OralMedicineAndRadiologyCaseLogModel.base";

/* The TypeScript type of an instance of OralMedicineAndRadiologyCaseLogModel */
export interface OralMedicineAndRadiologyCaseLogModelType extends Instance<typeof OralMedicineAndRadiologyCaseLogModel.Type> {}

/* A graphql query fragment builders for OralMedicineAndRadiologyCaseLogModel */
export {
	selectFromOralMedicineAndRadiologyCaseLog,
	oralMedicineAndRadiologyCaseLogModelPrimitives,
	OralMedicineAndRadiologyCaseLogModelSelector,
} from "./OralMedicineAndRadiologyCaseLogModel.base";

/**
 * OralMedicineAndRadiologyCaseLogModel
 */
export const OralMedicineAndRadiologyCaseLogModel = OralMedicineAndRadiologyCaseLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateOralMedicineAndRadiologyCaseLogPayloadModelSelector =
	selectFromOralMedicineAndRadiologyCaseLog().createdOn.updatedOn.date.hospital.faculty.complete.patientAge.patientSex.rotation.procedure
		.comorbidities.lesion.drugAllergyReaction.habitHistory.treatment.diagnosis.caseType.remarks;
