import { Instance } from "mobx-state-tree";
import { AnaesthesiaChronicPainLogModelBase, selectFromAnaesthesiaChronicPainLog } from "./AnaesthesiaChronicPainLogModel.base";

/* The TypeScript type of an instance of AnaesthesiaChronicPainLogModel */
export interface AnaesthesiaChronicPainLogModelType extends Instance<typeof AnaesthesiaChronicPainLogModel.Type> {}

/* A graphql query fragment builders for AnaesthesiaChronicPainLogModel */
export {
	selectFromAnaesthesiaChronicPainLog,
	anaesthesiaChronicPainLogModelPrimitives,
	AnaesthesiaChronicPainLogModelSelector,
} from "./AnaesthesiaChronicPainLogModel.base";

/**
 * AnaesthesiaChronicPainLogModel
 */
export const AnaesthesiaChronicPainLogModel = AnaesthesiaChronicPainLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updatedAnesthesiaChronicPainLogModelSelector =
	selectFromAnaesthesiaChronicPainLog().createdOn.updatedOn.date.patientAge.patientSex.diagnosis.indication.technique.method.drugsUsed.intervention;
