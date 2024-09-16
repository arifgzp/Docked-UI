import { Instance } from "mobx-state-tree";
import { CustomCaseModelBase, selectFromCustomCase } from "./CustomCaseModel.base";
import { fieldsModelPrimitives } from "./FieldsModel.base";

/* The TypeScript type of an instance of CustomCaseModel */
export interface CustomCaseModelType extends Instance<typeof CustomCaseModel.Type> {}

/* A graphql query fragment builders for CustomCaseModel */
export { selectFromCustomCase, customCaseModelPrimitives, CustomCaseModelSelector } from "./CustomCaseModel.base";

/**
 * CustomCaseModel
 */
export const CustomCaseModel = CustomCaseModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateCustomCaseModelPrimitives = selectFromCustomCase().caseName.createdOn.updatedOn.fields(fieldsModelPrimitives);
