import { Instance } from "mobx-state-tree";
import { AdminWorkLogModelBase, selectFromAdminWorkLog } from "./AdminWorkLogModel.base";

/* The TypeScript type of an instance of AdminWorkLogModel */
export interface AdminWorkLogModelType extends Instance<typeof AdminWorkLogModel.Type> {}

/* A graphql query fragment builders for AdminWorkLogModel */
export { selectFromAdminWorkLog, adminWorkLogModelPrimitives, AdminWorkLogModelSelector } from "./AdminWorkLogModel.base";

/**
 * AdminWorkLogModel
 */
export const AdminWorkLogModel = AdminWorkLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updateAdminWorkLogPayloadModelSelector =
	selectFromAdminWorkLog().createdOn.updatedOn.date.activity.otherActivity.position.organisation.academicLogType;
