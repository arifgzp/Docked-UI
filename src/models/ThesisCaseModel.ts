import { Instance } from "mobx-state-tree";
import { selectFromThesisCase, ThesisCaseModelBase } from "./ThesisCaseModel.base";
import { fieldsModelPrimitives } from "./FieldsModel.base";

/* The TypeScript type of an instance of ThesisCaseModel */
export interface ThesisCaseModelType extends Instance<typeof ThesisCaseModel.Type> {}

/* A graphql query fragment builders for ThesisCaseModel */
export { selectFromThesisCase, thesisCaseModelPrimitives, ThesisCaseModelSelector } from "./ThesisCaseModel.base";

/**
 * ThesisCaseModel
 */
export const ThesisCaseModel = ThesisCaseModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateThesisCaseModelPrimitives = selectFromThesisCase().caseName.createdOn.updatedOn.fields(fieldsModelPrimitives);
