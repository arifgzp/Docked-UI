import { Instance } from "mobx-state-tree";
import { LogProfileModelBase, selectFromLogProfile } from "./LogProfileModel.base";
import { facultyModelSelector } from "./FacultyModel";
import { rotationModelSelector } from "./RotationModel";

/* The TypeScript type of an instance of LogProfileModel */
export interface LogProfileModelType extends Instance<typeof LogProfileModel.Type> {}

/* A graphql query fragment builders for LogProfileModel */
export { selectFromLogProfile, logProfileModelPrimitives, LogProfileModelSelector } from "./LogProfileModel.base";

/**
 * LogProfileModel
 */
export const LogProfileModel = LogProfileModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const fetchLogProfileModelSelector = selectFromLogProfile().hospital.faculties(facultyModelSelector).rotations(rotationModelSelector);
