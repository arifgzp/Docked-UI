import { Instance } from "mobx-state-tree";
import { RotationModelBase, selectFromRotation } from "./RotationModel.base";

/* The TypeScript type of an instance of RotationModel */
export interface RotationModelType extends Instance<typeof RotationModel.Type> {}

/* A graphql query fragment builders for RotationModel */
export { selectFromRotation, rotationModelPrimitives, RotationModelSelector } from "./RotationModel.base";

/**
 * RotationModel
 */
export const RotationModel = RotationModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const rotationModelSelector = selectFromRotation().department.from.to.createdOn.updatedOn;
