import { Instance } from "mobx-state-tree";
import { FieldsModelBase, selectFromFields } from "./FieldsModel.base";

/* The TypeScript type of an instance of FieldsModel */
export interface FieldsModelType extends Instance<typeof FieldsModel.Type> {}

/* A graphql query fragment builders for FieldsModel */
export { selectFromFields, fieldsModelPrimitives, FieldsModelSelector } from "./FieldsModel.base";

/**
 * FieldsModel
 */
export const FieldsModel = FieldsModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateFieldsModelPrimitives = selectFromFields().createdOn.updatedOn.label.value;
