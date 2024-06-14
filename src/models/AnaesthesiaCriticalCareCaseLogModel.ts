import { Instance } from "mobx-state-tree";
import { AnaesthesiaCriticalCareCaseLogModelBase, selectFromAnaesthesiaCriticalCareCaseLog } from "./AnaesthesiaCriticalCareCaseLogModel.base";

/* The TypeScript type of an instance of AnaesthesiaCriticalCareCaseLogModel */
export interface AnaesthesiaCriticalCareCaseLogModelType extends Instance<typeof AnaesthesiaCriticalCareCaseLogModel.Type> {}

/* A graphql query fragment builders for AnaesthesiaCriticalCareCaseLogModel */
export {
	selectFromAnaesthesiaCriticalCareCaseLog,
	anaesthesiaCriticalCareCaseLogModelPrimitives,
	AnaesthesiaCriticalCareCaseLogModelSelector,
} from "./AnaesthesiaCriticalCareCaseLogModel.base";

/**
 * AnaesthesiaCriticalCareCaseLogModel
 */
export const AnaesthesiaCriticalCareCaseLogModel = AnaesthesiaCriticalCareCaseLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updatedAnesthesiaCritcalCareCaseLogModelSelector =
	selectFromAnaesthesiaCriticalCareCaseLog().createdOn.updatedOn.date.rotation.hospital.faculty.patientAge.patientSex.diagnosis.comorbidites
		.surgicalprocedure.complication.outcome.procedures.caseType;
