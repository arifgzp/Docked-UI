import { Instance } from "mobx-state-tree";
import { FacultyModelBase, selectFromFaculty } from "./FacultyModel.base";
import { userModelPrimitives } from "./UserModel.base";

/* The TypeScript type of an instance of FacultyModel */
export interface FacultyModelType extends Instance<typeof FacultyModel.Type> {}

/* A graphql query fragment builders for FacultyModel */
export { selectFromFaculty, facultyModelPrimitives, FacultyModelSelector } from "./FacultyModel.base";

/**
 * FacultyModel
 */
export const FacultyModel = FacultyModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const facultyModelSelector = selectFromFaculty().createdOn.updatedOn.user(userModelPrimitives);
