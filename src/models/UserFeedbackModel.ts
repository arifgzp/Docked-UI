import { Instance } from "mobx-state-tree";
import { selectFromUserFeedback, UserFeedbackModelBase } from "./UserFeedbackModel.base";

/* The TypeScript type of an instance of UserFeedbackModel */
export interface UserFeedbackModelType extends Instance<typeof UserFeedbackModel.Type> {}

/* A graphql query fragment builders for UserFeedbackModel */
export { selectFromUserFeedback, userFeedbackModelPrimitives, UserFeedbackModelSelector } from "./UserFeedbackModel.base";

/**
 * UserFeedbackModel
 */
export const UserFeedbackModel = UserFeedbackModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateUserFeedbackModelPrimitives = selectFromUserFeedback().createdOn.updatedOn.title.description.userEmail;
