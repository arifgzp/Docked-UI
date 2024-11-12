import { Instance } from "mobx-state-tree";
import { CaseLogModelBase, selectFromCaseLog } from "./CaseLogModel.base";
import { anaesthesiaCaseLogModelPrimitives } from "./AnaesthesiaCaseLogModel.base";
import { userModelPrimitives } from "./UserModel.base";
import { oralMedicineCaseLogModelPrimitives } from "./OralMedicineCaseLogModel.base";
import { remove } from "lodash";

/* The TypeScript type of an instance of CaseLogModel */
export interface CaseLogModelType extends Instance<typeof CaseLogModel.Type> {}

/* A graphql query fragment builders for CaseLogModel */
export { selectFromCaseLog, caseLogModelPrimitives, CaseLogModelSelector } from "./CaseLogModel.base";

/**
 * CaseLogModel
 */
export const CaseLogModel = CaseLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},

	beforeDestroy() {
		console.log("*** CaseLogModel >> beforeDestroy >> user.caseLogs");
		self.store.users.forEach((user: any, key: string) => {
			if (user?.caseLogs) {
				user.caseLogs.remove ? user.caseLogs.remove(self) : remove(user.caseLogs, (caseLog: any) => caseLog.id === self.id);
			}
		});
	},
}));

// export const anaesthesiaCaseLogByModelSelector = selectFromCaseLog()
// 	.createdOn.updatedOn.caseLogStatus.rejectionMessage.complete.logType.approver(userModelPrimitives)
// 	.createdBy(userModelPrimitives)
// 	.anaesthesiaCaseLog(anaesthesiaCaseLogModelPrimitives);

export const updateCaseLogSelector =
	selectFromCaseLog().createdOn.updatedOn.hospital.rotation.caseLogStatus.rejectionMessage.complete.logType.approver(userModelPrimitives);
