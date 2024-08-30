import { Instance } from "mobx-state-tree";
import { AcademicLogModelBase, selectFromAcademicLog } from "./AcademicLogModel.base";
import { remove } from "lodash";

/* The TypeScript type of an instance of AcademicLogModel */
export interface AcademicLogModelType extends Instance<typeof AcademicLogModel.Type> {}

/* A graphql query fragment builders for AcademicLogModel */
export { selectFromAcademicLog, academicLogModelPrimitives, AcademicLogModelSelector } from "./AcademicLogModel.base";

/**
 * AcademicLogModel
 */
export const AcademicLogModel = AcademicLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateAcademicLogPayloadModelSelector =
	selectFromAcademicLog().createdOn.updatedOn.date.position.activities.title.organiser.supervision.academicLogType;
