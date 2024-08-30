import { Instance } from "mobx-state-tree";
import { UserModelBase, selectFromUser } from "./UserModel.base";
import { fetchLogProfileModelSelector } from "./LogProfileModel";
import { anaesthesiaCaseLogModelPrimitives } from "./AnaesthesiaCaseLogModel.base";
import { anaesthesiaChronicPainLogModelPrimitives } from "./AnaesthesiaChronicPainLogModel.base";
import { anaesthesiaCriticalCareCaseLogModelPrimitives } from "./AnaesthesiaCriticalCareCaseLogModel.base";
import { orthopaedicsCaseLogModelPrimitives } from "./OrthopaedicsCaseLogModel.base";
import { orthodonticsClinicalCaseLogModelPrimitives } from "./OrthodonticsClinicalCaseLogModel.base";
import { orthopaedicsProcedureLogModelPrimitives } from "./OrthopaedicsProcedureLogModel.base";
import { orthodonticsPreClinicalModelPrimitives } from "./OrthodonticsPreClinicalModel.base";
import { adminWorkLogModelPrimitives } from "./AdminWorkLogModel.base";
import { publicationLogModelPrimitives } from "./PublicationLogModel.base";
import { academicLogModelPrimitives } from "./AcademicLogModel.base";
import { oralMedicineAndRadiologyCaseLogModelPrimitives } from "./OralMedicineAndRadiologyCaseLogModel.base";
import { oralRadiologyModelPrimitives, selectFromOralRadiology } from "./OralRadiologyModel.base";

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
export const AnaesthesiaCaseLogByModelSelector = selectFromUser().anaesthesiaCaseLog(anaesthesiaCaseLogModelPrimitives);
export const AnaesthesiaChronicPainLogByModelSelector = selectFromUser().anaesthesiaChronicPainLog(anaesthesiaChronicPainLogModelPrimitives);
export const AnaesthesiaCriticalCareCaseLogByModelSelector = selectFromUser().anaesthesiaCriticalCareCaseLog(
	anaesthesiaCriticalCareCaseLogModelPrimitives
);
export const OrthopaedicsCaseLogByModelSelector = selectFromUser().orthopaedicsCaseLog(orthopaedicsCaseLogModelPrimitives);
export const OrthopaedicsProcedureLogByModelSelector = selectFromUser().orthopaedicsProcedureLog(orthopaedicsProcedureLogModelPrimitives);
export const OrthodonticsClinicalCaseLogByModelSelector = selectFromUser().orthodonticsClinicalCaseLog(orthodonticsClinicalCaseLogModelPrimitives);
export const OrthodonticsClinicalPreClinicalByModelSelector = selectFromUser().orthodonticsPreClinical(orthodonticsPreClinicalModelPrimitives);
export const AdminWorkLogByModelSelector = selectFromUser().adminWorkLog(adminWorkLogModelPrimitives);
export const AcademicLogByModelSelector = selectFromUser().academicLog(academicLogModelPrimitives);
export const PublicationLogByModelSelector = selectFromUser().publicationLog(publicationLogModelPrimitives);
export const OralMedicineAndRadiologyCaseLogByModelSelector = selectFromUser().oralMedicineAndRadiologyCaseLog(
	oralMedicineAndRadiologyCaseLogModelPrimitives
);
export const OralRadiologyByModelSelector = selectFromUser().oralRadiology(oralRadiologyModelPrimitives);
