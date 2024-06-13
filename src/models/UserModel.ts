import { Instance } from "mobx-state-tree";
import { UserModelBase, selectFromUser } from "./UserModel.base";
import { fetchLogProfileModelSelector } from "./LogProfileModel";

/* The TypeScript type of an instance of UserModel */
export interface UserModelType extends Instance<typeof UserModel.Type> {}

/* A graphql query fragment builders for UserModel */
export { selectFromUser, userModelPrimitives, UserModelSelector } from "./UserModel.base";

/**
 * UserModel
 */
export const UserModel = UserModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateLogProfileModelSelector = selectFromUser().logProfile(fetchLogProfileModelSelector);
export const fetchUserLogProfileModel = selectFromUser().logProfile(fetchLogProfileModelSelector);
