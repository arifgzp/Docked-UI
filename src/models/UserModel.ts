import { Instance } from "mobx-state-tree";
import { UserModelBase, UserModelSelector, selectFromUser, userModelPrimitives } from "./UserModel.base";
import { fetchLogProfileModelSelector, LogProfileModelSelector } from "./LogProfileModel";
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
import { updateThesisLogPrimitive } from "./ThesisLogModel";
import { updateCustomLogPrimitive } from "./CustomLogModel";
import { UpdateCaseModelPrimitives } from "./CaseModel";
import { updateCustomCaseModelPrimitives } from "./CustomCaseModel";
import { updateThesisCaseModelPrimitives } from "./ThesisCaseModel";
import { userFeedbackModelPrimitives } from "./UserFeedbackModel.base";
import { FacultyModelWithUserSelector, facultySelectorWithUser } from "./FacultyModelWithUserSelector";
import { FacultyModelSelector } from "./FacultyModel.base";
import { hospitalsModelPrimitives } from "./HospitalsModel.base";
import { rotationModelSelector } from "./RotationModel";
import { UserModelWithLogProfileSelector } from "./UserModelWithLogProfileSelector";
import { facultyModelSelector } from "./FacultyModel";
import { CaseLogModelSelector } from "./CaseLogModel";
import { UserModelWithCaseLogsSelector } from "./UserModelWithCaseLogsSelector";
import { oralMedicineCaseLogModelPrimitives } from "./OralMedicineCaseLogModel.base";
import { CaseLogStatus } from "./CaseLogStatusEnum";

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

export const facultyUserModelSelector =
	selectFromUser().userName.name.lastName.designation.designationOthers.phoneNumber.specialReferenceIdForFaculty;

export function userWithLogProfileSelector() {
	return new UserModelWithLogProfileSelector().id.userName.logProfile(
		new LogProfileModelSelector().id.hospitals(hospitalsModelPrimitives).rotations(rotationModelSelector).faculties(facultyModelSelector)
	);
}

export function userWithAnaesthesiaCaseLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id.createdBy(userModelPrimitives).approver(userModelPrimitives).anaesthesiaCaseLog(anaesthesiaCaseLogModelPrimitives)
	);
}

export function userWithAnaesthesiaChronicPainLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id
			.createdBy(userModelPrimitives)
			.approver(userModelPrimitives)
			.anaesthesiaChronicPainLog(anaesthesiaChronicPainLogModelPrimitives)
	);
}

export function userWithAnaesthesiaCritcalCareLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id
			.createdBy(userModelPrimitives)
			.approver(userModelPrimitives)
			.anaesthesiaCriticalCareCaseLog(anaesthesiaCriticalCareCaseLogModelPrimitives)
	);
}

export function userWithOrthopaedicsCaseLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id.createdBy(userModelPrimitives).approver(userModelPrimitives).orthopaedicsCaseLog(orthopaedicsCaseLogModelPrimitives)
	);
}

export function userWithOrthopaedicsProcedureLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id
			.createdBy(userModelPrimitives)
			.approver(userModelPrimitives)
			.orthopaedicsProcedureLog(orthopaedicsProcedureLogModelPrimitives)
	);
}

export function userWithOrthodonticsClinicalCaseLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id
			.createdBy(userModelPrimitives)
			.approver(userModelPrimitives)
			.orthodonticsClinicalCaseLog(orthodonticsClinicalCaseLogModelPrimitives)
	);
}

export function userWithOrthodonticsPreClinicalSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id
			.createdBy(userModelPrimitives)
			.approver(userModelPrimitives)
			.orthodonticsPreClinical(orthodonticsPreClinicalModelPrimitives)
	);
}

export function userWithOralMedicineCaseLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id.createdBy(userModelPrimitives).approver(userModelPrimitives).oralMedicineCaseLog(oralMedicineCaseLogModelPrimitives)
	);
}

export function userWithOralRadiologyCaseLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id.createdBy(userModelPrimitives).approver(userModelPrimitives).oralRadiology(oralRadiologyModelPrimitives)
	);
}

export function userWithCaseLogSelector() {
	return new UserModelWithCaseLogsSelector().id.userName.caseLogs(
		new CaseLogModelSelector().id.logType.caseLogStatus.rejectionMessage.complete.hospital.rotation
			.createdBy(userModelPrimitives)
			.approver(userModelPrimitives)
			.oralMedicineCaseLog(oralMedicineCaseLogModelPrimitives)
			.oralRadiology(oralRadiologyModelPrimitives)
			.anaesthesiaCaseLog(anaesthesiaCaseLogModelPrimitives)
			.anaesthesiaChronicPainLog(anaesthesiaChronicPainLogModelPrimitives)
			.anaesthesiaCriticalCareCaseLog(anaesthesiaCriticalCareCaseLogModelPrimitives)
			.orthodonticsClinicalCaseLog(orthodonticsClinicalCaseLogModelPrimitives)
			.orthodonticsPreClinical(orthodonticsPreClinicalModelPrimitives)
			.orthopaedicsCaseLog(orthopaedicsCaseLogModelPrimitives)
			.orthopaedicsProcedureLog(orthopaedicsProcedureLogModelPrimitives)
	);
}

export function fetchCaseLogsWithPendingForApproval(approverId) {
	return new UserModelWithCaseLogsSelector().id.userName
		.caseLogs(
			new CaseLogModelSelector().id.logType.hospital.rotation.caseLogStatus.rejectionMessage.complete
				.createdBy(userModelPrimitives)
				.approver(userModelPrimitives, {
					filter: {
						id: approverId,
					},
				}),
			{
				filter: {
					caseLogStatus: { eq: CaseLogStatus.PENDING },
				},
			}
		)
		.toString()
		.replaceAll('"id"', "id")
		.replaceAll('"caseLogStatus"', "caseLogStatus")
		.replaceAll('"eq"', "eq")
		.replaceAll('"PENDING"', "PENDING");
}

export const AdminWorkLogByModelSelector = selectFromUser().adminWorkLog(adminWorkLogModelPrimitives);
export const AcademicLogByModelSelector = selectFromUser().academicLog(academicLogModelPrimitives);
export const PublicationLogByModelSelector = selectFromUser().publicationLog(publicationLogModelPrimitives);

export const ThesisLogByModelSelector = selectFromUser().thesisLog(updateThesisLogPrimitive);
export const CustomLogByModelSelector = selectFromUser().customLog(updateCustomLogPrimitive);

export const ThesisCaseByModelSelector = selectFromUser().thesisCases(updateThesisCaseModelPrimitives);
export const CustomCaseByModelSelector = selectFromUser().customCases(updateCustomCaseModelPrimitives);
export const UserFeedbackByModelSelector = selectFromUser().userFeedback(userFeedbackModelPrimitives);
