import { Instance } from "mobx-state-tree";
import { selectFromThesisLog, ThesisLogModelBase } from "./ThesisLogModel.base";
import { fieldsModelPrimitives } from "./FieldsModel.base";
import { updateFieldsModelPrimitives } from "./FieldsModel";

/* The TypeScript type of an instance of ThesisLogModel */
export interface ThesisLogModelType extends Instance<typeof ThesisLogModel.Type> {}

/* A graphql query fragment builders for ThesisLogModel */
export { selectFromThesisLog, thesisLogModelPrimitives, ThesisLogModelSelector } from "./ThesisLogModel.base";

/**
 * ThesisLogModel
 */
export const ThesisLogModel = ThesisLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateThesisLogPrimitive = selectFromThesisLog().createdOn.updatedOn.thesisName.fields(updateFieldsModelPrimitives);
