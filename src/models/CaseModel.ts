import { Instance } from "mobx-state-tree";
import { CaseModelBase, selectFromCase } from "./CaseModel.base";
import { fieldsModelPrimitives } from "./FieldsModel.base";

/* The TypeScript type of an instance of CaseModel */
export interface CaseModelType extends Instance<typeof CaseModel.Type> {}

/* A graphql query fragment builders for CaseModel */
export { selectFromCase, caseModelPrimitives, CaseModelSelector } from "./CaseModel.base";

/**
 * CaseModel
 */
export const CaseModel = CaseModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const UpdateCaseModelPrimitives = selectFromCase().caseName.createdOn.updatedOn.fields(fieldsModelPrimitives);
