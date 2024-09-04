import { Instance } from "mobx-state-tree";
import { CustomLogModelBase, selectFromCustomLog } from "./CustomLogModel.base";
import { fieldsModelPrimitives } from "./FieldsModel.base";
import { updateFieldsModelPrimitives } from "./FieldsModel";

/* The TypeScript type of an instance of CustomLogModel */
export interface CustomLogModelType extends Instance<typeof CustomLogModel.Type> {}

/* A graphql query fragment builders for CustomLogModel */
export { selectFromCustomLog, customLogModelPrimitives, CustomLogModelSelector } from "./CustomLogModel.base";

/**
 * CustomLogModel
 */
export const CustomLogModel = CustomLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateCustomLogPrimitive = selectFromCustomLog().createdOn.updatedOn.customName.fields(updateFieldsModelPrimitives);
