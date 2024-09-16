import { filter, find, forEach, forIn, isEmpty, isNil } from "lodash";
import { Instance, destroy } from "mobx-state-tree";
import { RootStoreBase } from "./RootStore.base";
import {
	anaesthesiaCaseLogModelPrimitives,
	selectFromAddAnaesthesiaCaseLogPayload,
	selectFromUpdateUserPayload,
	fetchLogProfileModelSelector,
	userModelPrimitives,
	selectFromUpdateLogProfilePayload,
	updateLogProfileModelSelector,
	fetchUserLogProfileModel,
	selectFromUpdateAnaesthesiaCaseLogPayload,
	updatedAnesthesiaCaseLogModelSelector,
	selectFromAddAnaesthesiaChronicPainLogPayload,
	selectFromAddAnaesthesiaCriticalCareCaseLogPayload,
	selectFromUpdateAnaesthesiaChronicPainLogPayload,
	updatedAnesthesiaChronicPainLogModelSelector,
	selectFromUpdateAnaesthesiaCriticalCareCaseLogPayload,
	updatedAnesthesiaCritcalCareCaseLogModelSelector,
	anaesthesiaChronicPainLogModelPrimitives,
	anaesthesiaCriticalCareCaseLogModelPrimitives,
	AnaesthesiaCaseLogByModelSelector,
	AnaesthesiaChronicPainLogByModelSelector,
	AnaesthesiaCriticalCareCaseLogByModelSelector,
	OrthopaedicsCaseLogByModelSelector,
	OrthodonticsClinicalCaseLogByModelSelector,
	selectFromUpdateOrthopaedicsCaseLogPayload,
	updateOrthopaedicsCaseLogModelSelector,
	selectFromUpdateOrthodonticsClinicalCaseLogPayload,
	updateOrthodonticsClinicalCaseLogSelector,
	OrthopaedicsProcedureLogByModelSelector,
	OrthodonticsClinicalPreClinicalByModelSelector,
	selectFromUpdateOrthopaedicsProcedureLogPayload,
	updateOrthopaedicsProcedureLogModelSelector,
	selectFromUpdateOrthodonticsPreClinicalPayload,
	updateOrthodonticsPreClinicalModelSelector,
	deleteOrthodonticsPreClinicalPayloadModelPrimitives,
	deleteOrthodonticsClinicalCaseLogPayloadModelPrimitives,
	deleteAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives,
	deleteAnaesthesiaChronicPainLogPayloadModelPrimitives,
	deleteAnaesthesiaCaseLogPayloadModelPrimitives,
	deleteOrthopaedicsCaseLogPayloadModelPrimitives,
	deleteOrthopaedicsProcedureLogPayloadModelPrimitives,
	deleteAdminWorkLogPayloadModelPrimitives,
	selectFromUpdateAdminWorkLogPayload,
	UpdateAdminWorkLogPayloadModelSelector,
	deletePublicationLogPayloadModelPrimitives,
	adminWorkLogModelPrimitives,
	updateAdminWorkLogPayloadModelSelector,
	AdminWorkLogByModelSelector,
	AcademicLogByModelSelector,
	selectFromUpdateAcademicLogPayload,
	updateAcademicLogPayloadModelSelector,
	deleteAcademicLogPayloadModelPrimitives,
	PublicationLogByModelSelector,
	selectFromUpdatePublicationLogPayload,
	updatePublicationLogPayloadModelSelector,
	OralMedicineAndRadiologyCaseLogByModelSelector,
	selectFromUpdateOralMedicineAndRadiologyCaseLogPayload,
	updateOralMedicineAndRadiologyCaseLogPayloadModelSelector,
	deleteOralMedicineAndRadiologyCaseLogPayloadModelPrimitives,
	OralRadiologyByModelSelector,
	selectFromUpdateOralRadiologyPayload,
	deleteOralRadiologyPayloadModelPrimitives,
	updateOralRadiologyPayloadModelSelector,
	ThesisLogByModelSelector,
	selectFromUpdateThesisLogPayload,
	updateThesisLogPrimitive,
	deleteThesisLogPayloadModelPrimitives,
	CustomLogByModelSelector,
	selectFromUpdateCustomLogPayload,
	updateCustomLogPrimitive,
	deleteCustomLogPayloadModelPrimitives,
	ThesisCaseByModelSelector,
	CustomCaseByModelSelector,
	selectFromUpdateThesisCasePayload,
	updateThesisCaseModelPrimitives,
	deleteThesisCasePayloadModelPrimitives,
	selectFromUpdateCustomCasePayload,
	updateCustomCaseModelPrimitives,
	deleteCustomCasePayloadModelPrimitives,
} from ".";
import { values } from "mobx";
import { Query } from "mst-gql";

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.actions((self) => ({
	// This is an auto-generated example action.

	log() {
		console.log(JSON.stringify(self));
	},

	updateUser(userId, updatedUserInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedUserInfo);
		const setDataPatch = updatedUserInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(userModelPrimitives).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUser Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUser Query ENDS **********");
		return updateUserQuery;
	},

	fetchUserById(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};

		const fetchUserResultSelector = userModelPrimitives.toString();
		const fetchUserQuery: Query = self.queryQueryUser(variables, fetchUserResultSelector);
		console.log("********** fetchuUserById Query STARTS **********");
		console.log({ query: fetchUserQuery.query });
		console.log(fetchUserQuery.variables);
		console.log("********** fetchuUserById Query ENDS **********");
		return fetchUserQuery;
	},

	fetchUserLogProfile(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchUserResultSelector = fetchUserLogProfileModel.toString();
		const fetchUserQuery: Query = self.queryQueryUser(variables, fetchUserResultSelector);
		console.log("********** fetchUserLogProfile Query STARTS **********");
		console.log({ query: fetchUserQuery.query });
		console.log(fetchUserQuery.variables);
		console.log("********** fetchUserLogProfile Query ENDS **********");
		return fetchUserQuery;
	},

	updateUserLogProfile(userId, updatedLogProfileInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedLogProfileInfo);
		const setDataPatch = updatedLogProfileInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(updateLogProfileModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserLogProfile Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserLogProfile Query ENDS **********");
		return updateUserQuery;
	},

	updateUserAnaesthesiaCaseLog(userId, updatedAnaesthesiaCaseLogInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedAnaesthesiaCaseLogInfo);
		const setDataPatch = updatedAnaesthesiaCaseLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(AnaesthesiaCaseLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserAnaesthesiaCaseLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserAnaesthesiaCaseLog Query ENDS **********");
		return updateUserQuery;
	},

	updateUserAnaesthesiaChronicPainLog(userId, updatedAnaesthesiaChronicPainInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedAnaesthesiaChronicPainInfo);
		const setDataPatch = updatedAnaesthesiaChronicPainInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(AnaesthesiaChronicPainLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserAnaesthesiaChronicPainLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserAnaesthesiaChronicPainLog Query ENDS **********");
		return updateUserQuery;
	},

	updateUserAnaesthesiaCritcalCareCaseLog(userId, updatedAnaesthesiaCritcalCareCaseLogInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedAnaesthesiaCritcalCareCaseLogInfo);
		const setDataPatch = updatedAnaesthesiaCritcalCareCaseLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(AnaesthesiaCriticalCareCaseLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserAnaesthesiaCritcalCareCaseLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserAnaesthesiaCritcalCareCaseLog Query ENDS **********");
		return updateUserQuery;
	},

	updateUserOrthopaedicsCaseLog(userId, updatedOrthopaedicsCaseLog) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedOrthopaedicsCaseLog);
		const setDataPatch = updatedOrthopaedicsCaseLog;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(OrthopaedicsCaseLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserOrthopaedicsCaseLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserOrthopaedicsCaseLog Query ENDS **********");
		return updateUserQuery;
	},

	updateUserOrthopaedicsProcedureLog(userId, updatedOrthopaedicsProcedureLog) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedOrthopaedicsProcedureLog);
		const setDataPatch = updatedOrthopaedicsProcedureLog;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(OrthopaedicsProcedureLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserOrthopaedicsProcedureLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserOrthopaedicsProcedureLog Query ENDS **********");
		return updateUserQuery;
	},

	updateUserOrthodonticsClinicalCaseLog(userId, updatedOrthodonticsClinicalCaseLog) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedOrthodonticsClinicalCaseLog);
		const setDataPatch = updatedOrthodonticsClinicalCaseLog;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(OrthodonticsClinicalCaseLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserOrthodonticsClinicalCaseLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserOrthodonticsClinicalCaseLog Query ENDS **********");
		return updateUserQuery;
	},

	updateUserOrthodonticsPreClinical(userId, updatedOrthodonticsPreClinical) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedOrthodonticsPreClinical);
		const setDataPatch = updatedOrthodonticsPreClinical;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(OrthodonticsClinicalPreClinicalByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserOrthodonticsPreClinical Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserOrthodonticsPreClinical Query ENDS **********");
		return updateUserQuery;
	},

	updateAnaesthesiaCaseLog(anaesthesiaCaseLogId, updatedAnesthesiaCaseLogInfo) {
		const dataFilter = {
			id: anaesthesiaCaseLogId,
		};
		console.log("anaesthesiaCaseLogId", anaesthesiaCaseLogId);
		console.log("updatedAnesthesiaCaseLogInfo", updatedAnesthesiaCaseLogInfo);
		const setDataPatch = updatedAnesthesiaCaseLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateAnesthesiaCaseLogResultSelector = selectFromUpdateAnaesthesiaCaseLogPayload()
			.anaesthesiaCaseLog(updatedAnesthesiaCaseLogModelSelector)
			.toString();
		const updateAnesthesiaCaseLogQuery: Query = self.mutateUpdateAnaesthesiaCaseLog(inputVariable, updateAnesthesiaCaseLogResultSelector);
		console.log("********** updateAnaesthesiaCaseLog Query STARTS **********");
		console.log({ query: updateAnesthesiaCaseLogQuery.query });
		console.log(updateAnesthesiaCaseLogQuery.variables);
		console.log("********** updateAnaesthesiaCaseLog Query ENDS **********");
		return updateAnesthesiaCaseLogQuery;
	},

	updateAnaesthesiaChronicPainLog(anaesthesiaChronicPainLogId, updatedAnesthesiaChronicPainLogInfo) {
		const dataFilter = {
			id: anaesthesiaChronicPainLogId,
		};
		console.log("anaesthesiaCaseLogId", anaesthesiaChronicPainLogId);
		console.log("updatedAnesthesiaCaseLogInfo", updatedAnesthesiaChronicPainLogInfo);
		const setDataPatch = updatedAnesthesiaChronicPainLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateAnesthesiaChronicPainLogResultSelector = selectFromUpdateAnaesthesiaChronicPainLogPayload()
			.anaesthesiaChronicPainLog(updatedAnesthesiaChronicPainLogModelSelector)
			.toString();
		const updateAnesthesiaCaseLogQuery: Query = self.mutateUpdateAnaesthesiaChronicPainLog(
			inputVariable,
			updateAnesthesiaChronicPainLogResultSelector
		);
		console.log("********** updateAnaesthesiaChronicPainLog Query STARTS **********");
		console.log({ query: updateAnesthesiaCaseLogQuery.query });
		console.log(updateAnesthesiaCaseLogQuery.variables);
		console.log("********** updateAnaesthesiaChronicPainLog Query ENDS **********");
		return updateAnesthesiaCaseLogQuery;
	},

	updateAnaesthesiaCriticalCareCaseLog(anaesthesiaCriticalCareCaseLogId, updatedAnesthesiaCriticalCareCaseLogInfo) {
		const dataFilter = {
			id: anaesthesiaCriticalCareCaseLogId,
		};
		console.log("anaesthesiaCaseLogId", anaesthesiaCriticalCareCaseLogId);
		console.log("updatedAnesthesiaCaseLogInfo", updatedAnesthesiaCriticalCareCaseLogInfo);
		const setDataPatch = updatedAnesthesiaCriticalCareCaseLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateAnesthesiaCriticalCareCaseLogResultSelector = selectFromUpdateAnaesthesiaCriticalCareCaseLogPayload()
			.anaesthesiaCriticalCareCaseLog(updatedAnesthesiaCritcalCareCaseLogModelSelector)
			.toString();
		const updateAnesthesiaCriticalCareCaseLogQuery: Query = self.mutateUpdateAnaesthesiaCriticalCareCaseLog(
			inputVariable,
			updateAnesthesiaCriticalCareCaseLogResultSelector
		);
		console.log("********** updateAnaesthesiaCriticalCareCaseLog Query STARTS **********");
		console.log({ query: updateAnesthesiaCriticalCareCaseLogQuery.query });
		console.log(updateAnesthesiaCriticalCareCaseLogQuery.variables);
		console.log("********** updateAnaesthesiaCriticalCareCaseLog Query ENDS **********");
		return updateAnesthesiaCriticalCareCaseLogQuery;
	},

	updateOrthopaedicsCaseLog(orthopaedicsCaseLogId, updatedOrthopaedicsCaseLogInfo) {
		const dataFilter = {
			id: orthopaedicsCaseLogId,
		};
		console.log("orthopaedicsCaseLogId", orthopaedicsCaseLogId);
		console.log("updatedOrthopaedicsCaseLogInfo", updatedOrthopaedicsCaseLogInfo);
		const setDataPatch = updatedOrthopaedicsCaseLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateOrthopaedicsCaseLogResultSelector = selectFromUpdateOrthopaedicsCaseLogPayload()
			.orthopaedicsCaseLog(updateOrthopaedicsCaseLogModelSelector)
			.toString();
		const updateOrthopaedicsCaseLogQuery: Query = self.mutateUpdateOrthopaedicsCaseLog(inputVariable, updateOrthopaedicsCaseLogResultSelector);
		console.log("********** updateOrthopaedicsCaseLog Query STARTS **********");
		console.log({ query: updateOrthopaedicsCaseLogQuery.query });
		console.log(updateOrthopaedicsCaseLogQuery.variables);
		console.log("********** updateOrthopaedicsCaseLog Query ENDS **********");
		return updateOrthopaedicsCaseLogQuery;
	},

	updateOrthopaedicsProcedureLog(orthopaedicsProcedureLogId, updatedOrthopaedicsProcedureLogInfo) {
		const dataFilter = {
			id: orthopaedicsProcedureLogId,
		};
		console.log("orthopaedicsCaseLogId", orthopaedicsProcedureLogId);
		console.log("updatedOrthopaedicsProcedureLogInfo", updatedOrthopaedicsProcedureLogInfo);
		const setDataPatch = updatedOrthopaedicsProcedureLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateOrthopaedicsProcedureLogesultSelector = selectFromUpdateOrthopaedicsProcedureLogPayload()
			.orthopaedicsProcedureLog(updateOrthopaedicsProcedureLogModelSelector)
			.toString();
		const updateOrthopaedicsProcedureLogQuery: Query = self.mutateUpdateOrthopaedicsProcedureLog(
			inputVariable,
			updateOrthopaedicsProcedureLogesultSelector
		);
		console.log("********** updateOrthopaedicsProcedureLog Query STARTS **********");
		console.log({ query: updateOrthopaedicsProcedureLogQuery.query });
		console.log(updateOrthopaedicsProcedureLogQuery.variables);
		console.log("********** updateOrthopaedicsProcedureLog Query ENDS **********");
		return updateOrthopaedicsProcedureLogQuery;
	},

	updateOrthodonticsClinicalCaseLog(orthodonticsClinicalCaseLogId, updatedOrthodonticsClinicalCaseLogInfo) {
		const dataFilter = {
			id: orthodonticsClinicalCaseLogId,
		};
		console.log("orthodonticsClinicalCaseLogId", orthodonticsClinicalCaseLogId);
		console.log("updatedupdateOrthodonticsClinicalCaseLogInfo", updatedOrthodonticsClinicalCaseLogInfo);
		const setDataPatch = updatedOrthodonticsClinicalCaseLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateOrthodonticsClinicalCaseLogResultSelector = selectFromUpdateOrthodonticsClinicalCaseLogPayload()
			.orthodonticsClinicalCaseLog(updateOrthodonticsClinicalCaseLogSelector)
			.toString();
		const updateOrthodonticsClinicalCaseLogQuery: Query = self.mutateUpdateOrthodonticsClinicalCaseLog(
			inputVariable,
			updateOrthodonticsClinicalCaseLogResultSelector
		);
		console.log("********** updateOrthodonticsClinicalCaseLog Query STARTS **********");
		console.log({ query: updateOrthodonticsClinicalCaseLogQuery.query });
		console.log(updateOrthodonticsClinicalCaseLogQuery.variables);
		console.log("********** updateOrthodonticsClinicalCaseLog Query ENDS **********");
		return updateOrthodonticsClinicalCaseLogQuery;
	},

	updateOrthodonticsPreClinical(orthodonticsPreClinicalId, updatedOrthodonticsPreClinicalIdInfo) {
		const dataFilter = {
			id: orthodonticsPreClinicalId,
		};
		console.log("orthopaedicsCaseLogId", orthodonticsPreClinicalId);
		console.log("updatedOrthopaedicsProcedureLogInfo", updatedOrthodonticsPreClinicalIdInfo);
		const setDataPatch = updatedOrthodonticsPreClinicalIdInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateOrthodonticsPreClinicalresultSelector = selectFromUpdateOrthodonticsPreClinicalPayload()
			.orthodonticsPreClinical(updateOrthodonticsPreClinicalModelSelector)
			.toString();
		const updateOrthodonticsPreClinicalQuery: Query = self.mutateUpdateOrthodonticsPreClinical(
			inputVariable,
			updateOrthodonticsPreClinicalresultSelector
		);
		console.log("********** updateOrthodonticsPreClinical Query STARTS **********");
		console.log({ query: updateOrthodonticsPreClinicalQuery.query });
		console.log(updateOrthodonticsPreClinicalQuery.variables);
		console.log("********** updateOrthodonticsPreClinical Query ENDS **********");
		return updateOrthodonticsPreClinicalQuery;
	},

	fetchAnaesthesiaCaseLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchAnaesthesiaCaseLogByUserSelector = AnaesthesiaCaseLogByModelSelector.toString();
		const fetchAnaesthesiaCaseLogByUserQuery = self.queryQueryUser(variables, fetchAnaesthesiaCaseLogByUserSelector);
		console.log("********** fetchAnaesthesiaCaseLogByUser Query STARTS **********");
		console.log(fetchAnaesthesiaCaseLogByUserQuery.query);
		console.log(fetchAnaesthesiaCaseLogByUserQuery.variables);
		console.log("********** fetchAnaesthesiaCaseLogByUser Query ENDS **********");
		return fetchAnaesthesiaCaseLogByUserQuery;
	},

	fetchAnaesthesiaChronicPainLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchAnaesthesiaChronicPainLogByUserSelector = AnaesthesiaChronicPainLogByModelSelector.toString();
		const fetchAnaesthesiaCaseLogByUserQuery = self.queryQueryUser(variables, fetchAnaesthesiaChronicPainLogByUserSelector);
		console.log("********** fetchAnaesthesiaChronicPainLogByUser Query STARTS **********");
		console.log(fetchAnaesthesiaCaseLogByUserQuery.query);
		console.log(fetchAnaesthesiaCaseLogByUserQuery.variables);
		console.log("********** fetchAnaesthesiaChronicPainLogByUser Query ENDS **********");
		return fetchAnaesthesiaCaseLogByUserQuery;
	},

	fetchAnaesthesiaCriticalCareCaseLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchAnaesthesiaCriticalCareCaseLogByUserSelector = AnaesthesiaCriticalCareCaseLogByModelSelector.toString();
		const fetchAnaesthesiaCaseLogByUserQuery = self.queryQueryUser(variables, fetchAnaesthesiaCriticalCareCaseLogByUserSelector);
		console.log("********** fetchAnaesthesiaCriticalCareCaseLogByUser Query STARTS **********");
		console.log(fetchAnaesthesiaCaseLogByUserQuery.query);
		console.log(fetchAnaesthesiaCaseLogByUserQuery.variables);
		console.log("********** fetchAnaesthesiaCriticalCareCaseLogByUser Query ENDS **********");
		return fetchAnaesthesiaCaseLogByUserQuery;
	},

	fetchOrthopaedicsCaseLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchOrthopaedicsCaseLogByUserSelector = OrthopaedicsCaseLogByModelSelector.toString();
		const fetchOrthopaedicsCaseLogByUserQuery = self.queryQueryUser(variables, fetchOrthopaedicsCaseLogByUserSelector);
		console.log("********** fetchOrthopaedicsCaseLogByUser Query STARTS **********");
		console.log(fetchOrthopaedicsCaseLogByUserQuery.query);
		console.log(fetchOrthopaedicsCaseLogByUserQuery.variables);
		console.log("********** fetchOrthopaedicsCaseLogByUser Query ENDS **********");
		return fetchOrthopaedicsCaseLogByUserQuery;
	},

	fetchOrthopaedicsProcedureLogUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchOrthopaedicsProcedureLogUserSelector = OrthopaedicsProcedureLogByModelSelector.toString();
		const fetchOrthopaedicsProcedureLogUserQuery = self.queryQueryUser(variables, fetchOrthopaedicsProcedureLogUserSelector);
		console.log("********** fetchOrthopaedicsProcedureLogUser Query STARTS **********");
		console.log(fetchOrthopaedicsProcedureLogUserQuery.query);
		console.log(fetchOrthopaedicsProcedureLogUserQuery.variables);
		console.log("********** fetchOrthopaedicsProcedureLogUser Query ENDS **********");
		return fetchOrthopaedicsProcedureLogUserQuery;
	},

	fetchOrthodonticsClinicalCaseLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchOrthodonticsClinicalCaseLogByUserSelector = OrthodonticsClinicalCaseLogByModelSelector.toString();
		const fetchOrthodonticsClinicalCaseLogByUserQuery = self.queryQueryUser(variables, fetchOrthodonticsClinicalCaseLogByUserSelector);
		console.log("********** fetchOrthodonticsClinicalCaseLogByUser Query STARTS **********");
		console.log(fetchOrthodonticsClinicalCaseLogByUserQuery.query);
		console.log(fetchOrthodonticsClinicalCaseLogByUserQuery.variables);
		console.log("********** fetchOrthodonticsClinicalCaseLogByUser Query ENDS **********");
		return fetchOrthodonticsClinicalCaseLogByUserQuery;
	},

	fetchOrthodonticsPreClinicalByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchOrthodonticsPreClinicalByUserSelector = OrthodonticsClinicalPreClinicalByModelSelector.toString();
		const fetchOrthodonticsPreClinicalByUserQuery = self.queryQueryUser(variables, fetchOrthodonticsPreClinicalByUserSelector);
		console.log("********** fetchOrthodonticsPreClinicalByUser Query STARTS **********");
		console.log(fetchOrthodonticsPreClinicalByUserQuery.query);
		console.log(fetchOrthodonticsPreClinicalByUserQuery.variables);
		console.log("********** fetchOrthodonticsPreClinicalByUser Query ENDS **********");
		return fetchOrthodonticsPreClinicalByUserQuery;
	},

	fetchAnaesthesiaCaseLog() {
		const inputVariable = {};
		const fetchAnaesthesiaCaseLogSelector = anaesthesiaCaseLogModelPrimitives.toString();
		const fetchAnaesthesiaCaseLogQuery = self.queryQueryAnaesthesiaCaseLog(inputVariable, fetchAnaesthesiaCaseLogSelector);
		console.log("********** fetchAnaesthesiaCaseLog Query STARTS **********");
		console.log(fetchAnaesthesiaCaseLogQuery.query);
		console.log(fetchAnaesthesiaCaseLogQuery.variables);
		console.log("********** fetchAnaesthesiaCaseLog Query ENDS **********");
		return fetchAnaesthesiaCaseLogQuery;
	},

	fetchAnaesthesiaChronicPainLog() {
		const inputVariable = {};
		const fetchAnaesthesiaChronicPainLogSelector = anaesthesiaChronicPainLogModelPrimitives.toString();
		const fetchAnaesthesiaChronicPainLogQuery = self.queryQueryAnaesthesiaChronicPainLog(inputVariable, fetchAnaesthesiaChronicPainLogSelector);
		console.log("********** fetchAnaesthesiaChronicPainLog Query STARTS **********");
		console.log(fetchAnaesthesiaChronicPainLogQuery.query);
		console.log(fetchAnaesthesiaChronicPainLogQuery.variables);
		console.log("********** fetchAnaesthesiaChronicPainLog Query ENDS **********");
		return fetchAnaesthesiaChronicPainLogQuery;
	},

	fetchAnaesthesiaCriticalCareCaseLog() {
		const inputVariable = {};
		const fetchAnaesthesiaCriticalCareCaseLogSelector = anaesthesiaCriticalCareCaseLogModelPrimitives.toString();
		const fetchAnaesthesiaCriticalCareCaseLogQuery = self.queryQueryAnaesthesiaCriticalCareCaseLog(
			inputVariable,
			fetchAnaesthesiaCriticalCareCaseLogSelector
		);
		console.log("********** fetchAnaesthesiaCriticalCareCaseLog Query STARTS **********");
		console.log(fetchAnaesthesiaCriticalCareCaseLogQuery.query);
		console.log(fetchAnaesthesiaCriticalCareCaseLogQuery.variables);
		console.log("********** fetchAnaesthesiaCriticalCareCaseLog Query ENDS **********");
		return fetchAnaesthesiaCriticalCareCaseLogQuery;
	},

	deleteOrthodonticsPreClinical(OrthodonticsPreClinicalList: []) {
		const filterVariable = { filter: { id: OrthodonticsPreClinicalList } };
		const resultSelector = deleteOrthodonticsPreClinicalPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(OrthodonticsPreClinicalList, (OrthodonticsPreClinicalID: string) => {
				destroy(self.orthodonticsPreClinicals.get(OrthodonticsPreClinicalID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryOrthodonticsPreClinical")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteOrthodonticsPreClinical Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteOrthodonticsPreClinical Query ENDS ****");
		return self.mutateDeleteOrthodonticsPreClinical(filterVariable, resultSelector, optimisticDelete);
	},

	deleteOrthodonticsClinicalCaseLog(OrthodonticsClinicalCaseLogList: []) {
		const filterVariable = { filter: { id: OrthodonticsClinicalCaseLogList } };
		const resultSelector = deleteOrthodonticsClinicalCaseLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(OrthodonticsClinicalCaseLogList, (OrthodonticsClinicalCaseLogID: string) => {
				destroy(self.orthodonticsClinicalCaseLogs.get(OrthodonticsClinicalCaseLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryOrthodonticsClinicalCaseLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteOrthodonticsClinicalCaseLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteOrthodonticsClinicalCaseLog Query ENDS ****");
		return self.mutateDeleteOrthodonticsClinicalCaseLog(filterVariable, resultSelector, optimisticDelete);
	},

	deleteAnaesthesiaCriticalCareCaseLog(AnaesthesiaCriticalCareCaseLogList: []) {
		const filterVariable = { filter: { id: AnaesthesiaCriticalCareCaseLogList } };
		const resultSelector = deleteAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(AnaesthesiaCriticalCareCaseLogList, (AnaesthesiaCriticalCareCaseLogID: string) => {
				destroy(self.anaesthesiaCriticalCareCaseLogs.get(AnaesthesiaCriticalCareCaseLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryAnaesthesiaCriticalCareCaseLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteAnaesthesiaCriticalCareCaseLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteAnaesthesiaCriticalCareCaseLog Query ENDS ****");
		return self.mutateDeleteAnaesthesiaCriticalCareCaseLog(filterVariable, resultSelector, optimisticDelete);
	},

	deleteAnaesthesiaChronicPainLog(AnaesthesiaChronicPainLogList: []) {
		const filterVariable = { filter: { id: AnaesthesiaChronicPainLogList } };
		const resultSelector = deleteAnaesthesiaChronicPainLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(AnaesthesiaChronicPainLogList, (AnaesthesiaChronicPainLogID: string) => {
				destroy(self.anaesthesiaChronicPainLogs.get(AnaesthesiaChronicPainLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryAnaesthesiaChronicPainLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteAnaesthesiaChronicPainLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteAnaesthesiaChronicPainLog Query ENDS ****");
		return self.mutateDeleteAnaesthesiaChronicPainLog(filterVariable, resultSelector, optimisticDelete);
	},

	deleteAnaesthesiaCaseLog(AnaesthesiaCaseLogList: []) {
		const filterVariable = { filter: { id: AnaesthesiaCaseLogList } };
		const resultSelector = deleteAnaesthesiaCaseLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(AnaesthesiaCaseLogList, (AnaesthesiaCaseLogID: string) => {
				destroy(self.anaesthesiaCaseLogs.get(AnaesthesiaCaseLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryAnaesthesiaCaseLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteAnaesthesiaCaseLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteAnaesthesiaCaseLog Query ENDS ****");
		return self.mutateDeleteAnaesthesiaCaseLog(filterVariable, resultSelector, optimisticDelete);
	},

	deleteOrthopaedicsCaseLog(OrthopaedicsCaseLogList: []) {
		const filterVariable = { filter: { id: OrthopaedicsCaseLogList } };
		const resultSelector = deleteOrthopaedicsCaseLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(OrthopaedicsCaseLogList, (OrthopaedicsCaseLogID: string) => {
				destroy(self.orthopaedicsCaseLogs.get(OrthopaedicsCaseLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryOrthopaedicsCaseLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteOrthopaedicsCaseLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteOrthopaedicsCaseLog Query ENDS ****");
		return self.mutateDeleteOrthopaedicsCaseLog(filterVariable, resultSelector, optimisticDelete);
	},

	deleteOrthopaedicsProcedureLog(OrthopaedicsProcedureLogList: []) {
		const filterVariable = { filter: { id: OrthopaedicsProcedureLogList } };
		const resultSelector = deleteOrthopaedicsProcedureLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(OrthopaedicsProcedureLogList, (OrthopaedicsProcedureLogID: string) => {
				destroy(self.orthopaedicsProcedureLogs.get(OrthopaedicsProcedureLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryOrthopaedicsProcedureLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteOrthopaedicsProcedureLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteOrthopaedicsProcedureLog Query ENDS ****");
		return self.mutateDeleteOrthopaedicsProcedureLog(filterVariable, resultSelector, optimisticDelete);
	},

	// New methods for AcademicLog
	updateUserAcademicLog(userId, updatedAcademicLogInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedAcademicLogInfo);
		const setDataPatch = updatedAcademicLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(AcademicLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserAcademicLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserAcademicLog Query ENDS **********");
		return updateUserQuery;
	},

	updateAcademicLog(academicLogId, updatedAcademicLogInfo) {
		const dataFilter = {
			id: academicLogId,
		};
		console.log("academicLogId", academicLogId);
		console.log("updatedAcademicLogInfo", updatedAcademicLogInfo);
		const setDataPatch = updatedAcademicLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateAcademicLogResultSelector = selectFromUpdateAcademicLogPayload().academicLog(updateAcademicLogPayloadModelSelector).toString();
		const updateAcademicLogQuery: Query = self.mutateUpdateAcademicLog(inputVariable, updateAcademicLogResultSelector);
		console.log("********** updateAcademicLog Query STARTS **********");
		console.log({ query: updateAcademicLogQuery.query });
		console.log(updateAcademicLogQuery.variables);
		console.log("********** updateAcademicLog Query ENDS **********");
		return updateAcademicLogQuery;
	},

	fetchAcademicLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchAcademicLogByUserSelector = AcademicLogByModelSelector.toString();
		const fetchAcademicLogByUserQuery = self.queryQueryUser(variables, fetchAcademicLogByUserSelector);
		console.log("********** fetchAcademicLogByUser Query STARTS **********");
		console.log(fetchAcademicLogByUserQuery.query);
		console.log(fetchAcademicLogByUserQuery.variables);
		console.log("********** fetchAcademicLogByUser Query ENDS **********");
		return fetchAcademicLogByUserQuery;
	},

	deleteAcademicLog(AcademicLogList: []) {
		const filterVariable = { filter: { id: AcademicLogList } };
		const resultSelector = deleteAcademicLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(AcademicLogList, (AcademicLogID: string) => {
				destroy(self.academicLogs.get(AcademicLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryAcademicLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteAcademicLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteAcademicLog Query ENDS ****");
		return self.mutateDeleteAcademicLog(filterVariable, resultSelector, optimisticDelete);
	},

	// New methods for PublicationLog
	updateUserPublicationLog(userId, updatedPublicationLogInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedPublicationLogInfo);
		const setDataPatch = updatedPublicationLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(PublicationLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserPublicationLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserPublicationLog Query ENDS **********");
		return updateUserQuery;
	},

	updatePublicationLog(publicationLogId, updatedPublicationLogInfo) {
		const dataFilter = {
			id: publicationLogId,
		};
		console.log("publicationLogId", publicationLogId);
		console.log("updatedPublicationLogInfo", updatedPublicationLogInfo);
		const setDataPatch = updatedPublicationLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updatePublicationLogResultSelector = selectFromUpdatePublicationLogPayload()
			.publicationLog(updatePublicationLogPayloadModelSelector)
			.toString();
		const updatePublicationLogQuery: Query = self.mutateUpdatePublicationLog(inputVariable, updatePublicationLogResultSelector);
		console.log("********** updatePublicationLog Query STARTS **********");
		console.log({ query: updatePublicationLogQuery.query });
		console.log(updatePublicationLogQuery.variables);
		console.log("********** updatePublicationLog Query ENDS **********");
		return updatePublicationLogQuery;
	},

	fetchPublicationLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchPublicationLogByUserSelector = PublicationLogByModelSelector.toString();
		const fetchPublicationLogByUserQuery = self.queryQueryUser(variables, fetchPublicationLogByUserSelector);
		console.log("********** fetchPublicationLogByUser Query STARTS **********");
		console.log(fetchPublicationLogByUserQuery.query);
		console.log(fetchPublicationLogByUserQuery.variables);
		console.log("********** fetchPublicationLogByUser Query ENDS **********");
		return fetchPublicationLogByUserQuery;
	},

	deletePublicationLog(PublicationLogList: []) {
		const filterVariable = { filter: { id: PublicationLogList } };
		const resultSelector = deletePublicationLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(PublicationLogList, (PublicationLogID: string) => {
				destroy(self.publicationLogs.get(PublicationLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryPublicationLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deletePublicationLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deletePublicationLog Query ENDS ****");
		return self.mutateDeletePublicationLog(filterVariable, resultSelector, optimisticDelete);
	},

	// New methods for AdminWorkLog
	updateUserAdminWorkLog(userId, updatedAdminWorkLogInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedAdminWorkLogInfo);
		const setDataPatch = updatedAdminWorkLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(AdminWorkLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserAdminWorkLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserAdminWorkLog Query ENDS **********");
		return updateUserQuery;
	},

	updateAdminWorkLog(adminWorkLogId, updatedAdminWorkLogInfo) {
		const dataFilter = {
			id: adminWorkLogId,
		};
		console.log("adminWorkLogId", adminWorkLogId);
		console.log("updatedAdminWorkLogInfo", updatedAdminWorkLogInfo);
		const setDataPatch = updatedAdminWorkLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateAdminWorkLogResultSelector = selectFromUpdateAdminWorkLogPayload().adminWorkLog(updateAdminWorkLogPayloadModelSelector).toString();
		const updateAdminWorkLogQuery: Query = self.mutateUpdateAdminWorkLog(inputVariable, updateAdminWorkLogResultSelector);
		console.log("********** updateAdminWorkLog Query STARTS **********");
		console.log({ query: updateAdminWorkLogQuery.query });
		console.log(updateAdminWorkLogQuery.variables);
		console.log("********** updateAdminWorkLog Query ENDS **********");
		return updateAdminWorkLogQuery;
	},

	fetchAdminWorkLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchAdminWorkLogByUserSelector = AdminWorkLogByModelSelector.toString();
		const fetchAdminWorkLogByUserQuery = self.queryQueryUser(variables, fetchAdminWorkLogByUserSelector);
		console.log("********** fetchAdminWorkLogByUser Query STARTS **********");
		console.log(fetchAdminWorkLogByUserQuery.query);
		console.log(fetchAdminWorkLogByUserQuery.variables);
		console.log("********** fetchAdminWorkLogByUser Query ENDS **********");
		return fetchAdminWorkLogByUserQuery;
	},

	deleteAdminWorkLog(AdminWorkLogList: []) {
		const filterVariable = { filter: { id: AdminWorkLogList } };
		const resultSelector = deleteAdminWorkLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(AdminWorkLogList, (AdminWorkLogID: string) => {
				destroy(self.adminWorkLogs.get(AdminWorkLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryAdminWorkLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteAdminWorkLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteAdminWorkLog Query ENDS ****");
		return self.mutateDeleteAdminWorkLog(filterVariable, resultSelector, optimisticDelete);
	},

	// OralMedicineAndRadiologyCaseLog queries
	updateUserOralMedicineAndRadiologyCaseLog(userId, updatedCaseLogInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedCaseLogInfo);
		const setDataPatch = updatedCaseLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(OralMedicineAndRadiologyCaseLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserOralMedicineAndRadiologyCaseLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserOralMedicineAndRadiologyCaseLog Query ENDS **********");
		return updateUserQuery;
	},

	updateOralMedicineAndRadiologyCaseLog(caseLogId, updatedCaseLogInfo) {
		const dataFilter = {
			id: caseLogId,
		};
		console.log("caseLogId", caseLogId);
		console.log("updatedCaseLogInfo", updatedCaseLogInfo);
		const setDataPatch = updatedCaseLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateCaseLogResultSelector = selectFromUpdateOralMedicineAndRadiologyCaseLogPayload()
			.oralMedicineAndRadiologyCaseLog(updateOralMedicineAndRadiologyCaseLogPayloadModelSelector)
			.toString();
		const updateCaseLogQuery: Query = self.mutateUpdateOralMedicineAndRadiologyCaseLog(inputVariable, updateCaseLogResultSelector);
		console.log("********** updateOralMedicineAndRadiologyCaseLog Query STARTS **********");
		console.log({ query: updateCaseLogQuery.query });
		console.log(updateCaseLogQuery.variables);
		console.log("********** updateOralMedicineAndRadiologyCaseLog Query ENDS **********");
		return updateCaseLogQuery;
	},

	fetchOralMedicineAndRadiologyCaseLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchCaseLogByUserSelector = OralMedicineAndRadiologyCaseLogByModelSelector.toString();
		const fetchCaseLogByUserQuery = self.queryQueryUser(variables, fetchCaseLogByUserSelector);
		console.log("********** fetchOralMedicineAndRadiologyCaseLogByUser Query STARTS **********");
		console.log(fetchCaseLogByUserQuery.query);
		console.log(fetchCaseLogByUserQuery.variables);
		console.log("********** fetchOralMedicineAndRadiologyCaseLogByUser Query ENDS **********");
		return fetchCaseLogByUserQuery;
	},

	deleteOralMedicineAndRadiologyCaseLog(CaseLogList: []) {
		const filterVariable = { filter: { id: CaseLogList } };
		const resultSelector = deleteOralMedicineAndRadiologyCaseLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(CaseLogList, (CaseLogID: string) => {
				destroy(self.oralMedicineAndRadiologyCaseLogs.get(CaseLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryOralMedicineAndRadiologyCaseLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteOralMedicineAndRadiologyCaseLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteOralMedicineAndRadiologyCaseLog Query ENDS ****");
		return self.mutateDeleteOralMedicineAndRadiologyCaseLog(filterVariable, resultSelector, optimisticDelete);
	},

	// OralRadiology queries
	updateUserOralRadiology(userId, updatedOralRadiologyInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updatedOralRadiologyInfo);
		const setDataPatch = updatedOralRadiologyInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(OralRadiologyByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserOralRadiology Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserOralRadiology Query ENDS **********");
		return updateUserQuery;
	},

	updateOralRadiology(oralRadiologyId, updatedOralRadiologyInfo) {
		const dataFilter = {
			id: oralRadiologyId,
		};
		console.log("oralRadiologyId", oralRadiologyId);
		console.log("updatedOralRadiologyInfo", updatedOralRadiologyInfo);
		const setDataPatch = updatedOralRadiologyInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateOralRadiologyResultSelector = selectFromUpdateOralRadiologyPayload()
			.oralRadiology(updateOralRadiologyPayloadModelSelector)
			.toString();
		const updateOralRadiologyQuery: Query = self.mutateUpdateOralRadiology(inputVariable, updateOralRadiologyResultSelector);
		console.log("********** updateOralRadiology Query STARTS **********");
		console.log({ query: updateOralRadiologyQuery.query });
		console.log(updateOralRadiologyQuery.variables);
		console.log("********** updateOralRadiology Query ENDS **********");
		return updateOralRadiologyQuery;
	},

	fetchOralRadiologyByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchOralRadiologyByUserSelector = OralRadiologyByModelSelector.toString();
		const fetchOralRadiologyByUserQuery = self.queryQueryUser(variables, fetchOralRadiologyByUserSelector);
		console.log("********** fetchOralRadiologyByUser Query STARTS **********");
		console.log(fetchOralRadiologyByUserQuery.query);
		console.log(fetchOralRadiologyByUserQuery.variables);
		console.log("********** fetchOralRadiologyByUser Query ENDS **********");
		return fetchOralRadiologyByUserQuery;
	},

	deleteOralRadiology(OralRadiologyList: []) {
		const filterVariable = { filter: { id: OralRadiologyList } };
		const resultSelector = deleteOralRadiologyPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(OralRadiologyList, (OralRadiologyID: string) => {
				destroy(self.oralRadiologies.get(OralRadiologyID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryOralRadiology")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteOralRadiology Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteOralRadiology Query ENDS ****");
		return self.mutateDeleteOralRadiology(filterVariable, resultSelector, optimisticDelete);
	},

	//Thesis Queries

	updateUserThesisLog(userId, updateUserThesisLogInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updateUserThesisLogInfo);
		const setDataPatch = updateUserThesisLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(ThesisLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserThesisLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserThesisLog Query ENDS **********");
		return updateUserQuery;
	},

	updateThesisLog(thesisLogId, updateThesisLogInfo) {
		const dataFilter = {
			id: thesisLogId,
		};
		console.log("ThesisLogIId", thesisLogId);
		console.log("updateThesisLogInfo", updateThesisLogInfo);
		const setDataPatch = updateThesisLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateThesisLogResultSelector = selectFromUpdateThesisLogPayload().thesisLog(updateThesisLogPrimitive).toString();
		const updateThesisLogQuery: Query = self.mutateUpdateThesisLog(inputVariable, updateThesisLogResultSelector);
		console.log("********** updateThesisLog Query STARTS **********");
		console.log({ query: updateThesisLogQuery.query });
		console.log(updateThesisLogQuery.variables);
		console.log("********** updateThesisLog Query ENDS **********");
		return updateThesisLogQuery;
	},

	fetchThesisLogByUser(userName: string) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchThesisLogyByUserSelector = ThesisLogByModelSelector.toString();
		const fetchThesisLogByUserQuery = self.queryQueryUser(variables, fetchThesisLogyByUserSelector);
		console.log("********** fetchThesisLogByUser Query STARTS **********");
		console.log(fetchThesisLogByUserQuery.query);
		console.log(fetchThesisLogByUserQuery.variables);
		console.log("********** fetchThesisLogByUser Query ENDS **********");
		return fetchThesisLogByUserQuery;
	},

	deleteThesisLog(ThesisLogList: []) {
		const filterVariable = { filter: { id: ThesisLogList } };
		const resultSelector = deleteThesisLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(ThesisLogList, (ThesisLogID: string) => {
				destroy(self.thesisLogs.get(ThesisLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryThesisLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteThesisLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteThesisLog Query ENDS ****");
		return self.mutateDeleteThesisLog(filterVariable, resultSelector, optimisticDelete);
	},

	// Custom Log Queries

	updateUserCustomLog(userId, updateUserCustomLogInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updateUserCustomLogInfo);
		const setDataPatch = updateUserCustomLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(CustomLogByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserCustomLog Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserCustomLog Query ENDS **********");
		return updateUserQuery;
	},

	updateCustomLog(customLogId, updateCustomLogInfo) {
		const dataFilter = {
			id: customLogId,
		};
		console.log("customLogId", customLogId);
		console.log("updateCustomLogInfo", updateCustomLogInfo);
		const setDataPatch = updateCustomLogInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateCustomLogResultSelector = selectFromUpdateCustomLogPayload().customLog(updateCustomLogPrimitive).toString();
		const updateCustomLogQuery: Query = self.mutateUpdateCustomLog(inputVariable, updateCustomLogResultSelector);
		console.log("********** updateCustomLog Query STARTS **********");
		console.log({ query: updateCustomLogQuery.query });
		console.log(updateCustomLogQuery.variables);
		console.log("********** updateCustomLog Query ENDS **********");
		return updateCustomLogQuery;
	},

	fetchCustomLogByUser(userName) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchCustomLogByUserSelector = CustomLogByModelSelector.toString();
		const fetchCustomLogByUserQuery = self.queryQueryUser(variables, fetchCustomLogByUserSelector);
		console.log("********** fetchCustomLogByUser Query STARTS **********");
		console.log(fetchCustomLogByUserQuery.query);
		console.log(fetchCustomLogByUserQuery.variables);
		console.log("********** fetchCustomLogByUser Query ENDS **********");
		return fetchCustomLogByUserQuery;
	},

	deleteCustomLog(customLogList = []) {
		const filterVariable = { filter: { id: customLogList } };
		const resultSelector = deleteCustomLogPayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(customLogList, (customLogID) => {
				destroy(self.customLogs.get(customLogID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryCustomLog")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteCustomLog Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteCustomLog Query ENDS ****");
		return self.mutateDeleteCustomLog(filterVariable, resultSelector, optimisticDelete);
	},

	// ThesisCase Queries
	updateUserThesisCase(userId, updateUserThesisCaseInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updateUserThesisCaseInfo);
		const setDataPatch = updateUserThesisCaseInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(ThesisCaseByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserThesisCase Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserThesisCase Query ENDS **********");
		return updateUserQuery;
	},

	updateThesisCase(thesisCaseId, updateThesisCaseInfo) {
		const dataFilter = {
			id: thesisCaseId,
		};
		console.log("thesisCaseId", thesisCaseId);
		console.log("updateThesisCaseInfo", updateThesisCaseInfo);
		const setDataPatch = updateThesisCaseInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateThesisCaseResultSelector = selectFromUpdateThesisCasePayload().thesisCase(updateThesisCaseModelPrimitives).toString();
		const updateThesisCaseQuery: Query = self.mutateUpdateThesisCase(inputVariable, updateThesisCaseResultSelector);
		console.log("********** updateThesisCase Query STARTS **********");
		console.log({ query: updateThesisCaseQuery.query });
		console.log(updateThesisCaseQuery.variables);
		console.log("********** updateThesisCase Query ENDS **********");
		return updateThesisCaseQuery;
	},

	fetchThesisCaseByUser(userName) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchThesisCaseByUserSelector = ThesisCaseByModelSelector.toString();
		const fetchThesisCaseByUserQuery = self.queryQueryUser(variables, fetchThesisCaseByUserSelector);
		console.log("********** fetchThesisCaseByUser Query STARTS **********");
		console.log(fetchThesisCaseByUserQuery.query);
		console.log(fetchThesisCaseByUserQuery.variables);
		console.log("********** fetchThesisCaseByUser Query ENDS **********");
		return fetchThesisCaseByUserQuery;
	},

	deleteThesisCase(thesisCaseList = []) {
		const filterVariable = { filter: { id: thesisCaseList } };
		const resultSelector = deleteThesisCasePayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(thesisCaseList, (thesisCaseID) => {
				destroy(self.thesisCases.get(thesisCaseID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryThesisCase")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteThesisCase Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteThesisCase Query ENDS ****");
		return self.mutateDeleteThesisCase(filterVariable, resultSelector, optimisticDelete);
	},

	// CustomCase Queries
	updateUserCustomCase(userId, updateUserCustomCaseInfo) {
		const dataFilter = {
			id: userId,
		};
		console.log("userId", userId);
		console.log("updatedUserInfo", updateUserCustomCaseInfo);
		const setDataPatch = updateUserCustomCaseInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateUserResultSelector = selectFromUpdateUserPayload().user(CustomCaseByModelSelector).toString();
		const updateUserQuery: Query = self.mutateUpdateUser(inputVariable, updateUserResultSelector);
		console.log("********** updateUserCustomCase Query STARTS **********");
		console.log({ query: updateUserQuery.query });
		console.log(updateUserQuery.variables);
		console.log("********** updateUserCustomCase Query ENDS **********");
		return updateUserQuery;
	},

	updateCustomCase(customCaseId, updateCustomCaseInfo) {
		const dataFilter = {
			id: customCaseId,
		};
		console.log("customCaseId", customCaseId);
		console.log("updateCustomCaseInfo", updateCustomCaseInfo);
		const setDataPatch = updateCustomCaseInfo;
		const inputVariable = { input: { filter: dataFilter, ...setDataPatch } };
		const updateCustomCaseResultSelector = selectFromUpdateCustomCasePayload().customCase(updateCustomCaseModelPrimitives).toString();
		const updateCustomCaseQuery: Query = self.mutateUpdateCustomCase(inputVariable, updateCustomCaseResultSelector);
		console.log("********** updateCustomCase Query STARTS **********");
		console.log({ query: updateCustomCaseQuery.query });
		console.log(updateCustomCaseQuery.variables);
		console.log("********** updateCustomCase Query ENDS **********");
		return updateCustomCaseQuery;
	},

	fetchCustomCaseByUser(userName) {
		const variables = {
			filter: { userName: { eq: userName } },
		};
		const fetchCustomCaseByUserSelector = CustomCaseByModelSelector.toString();
		const fetchCustomCaseByUserQuery = self.queryQueryUser(variables, fetchCustomCaseByUserSelector);
		console.log("********** fetchCustomCaseByUser Query STARTS **********");
		console.log(fetchCustomCaseByUserQuery.query);
		console.log(fetchCustomCaseByUserQuery.variables);
		console.log("********** fetchCustomCaseByUser Query ENDS **********");
		return fetchCustomCaseByUserQuery;
	},

	deleteCustomCase(customCaseList = []) {
		const filterVariable = { filter: { id: customCaseList } };
		const resultSelector = deleteCustomCasePayloadModelPrimitives.toString();
		const optimisticDelete = () => {
			forEach(customCaseList, (customCaseID) => {
				destroy(self.customCases.get(customCaseID));
			});
			const queryKeyList = self.__queryCache.keys();
			for (let queryKey of queryKeyList) {
				if (queryKey.includes("queryCustomCase")) {
					self.__queryCache.delete(queryKey);
				}
			}
		};
		console.log("**** deleteCustomCase Query STARTS ****");
		console.log(resultSelector);
		console.log(filterVariable);
		console.log("**** deleteCustomCase Query ENDS ****");
		return self.mutateDeleteCustomCase(filterVariable, resultSelector, optimisticDelete);
	},

	resetAllData() {
		self.users.clear();
		self.faculties.clear();
		self.rotations.clear();
		self.logProfiles.clear();
		self.anaesthesiaCaseLogs.clear();
		self.anaesthesiaChronicPainLogs.clear();
		self.anaesthesiaCriticalCareCaseLogs.clear();
		self.orthopaedicsCaseLogs.clear();
		self.orthopaedicsProcedureLogs.clear();
		self.orthodonticsClinicalCaseLogs.clear();
		self.orthodonticsPreClinicals.clear();
		self.academicLogs.clear();
		self.adminWorkLogs.clear();
		self.publicationLogs.clear();
		self.thesisLogs.clear();
		self.customLogs.clear();
	},
})).views((self) => ({
	get AnaesthesiaCaseLogList() {
		return values(self.anaesthesiaCaseLogs);
	},

	getAnaesthesiaCaseLogById(id) {
		return values(self.anaesthesiaCaseLogs).filter((obj) => obj.id == id);
	},

	get AnaesthesiaChronicPainLogList() {
		return values(self.anaesthesiaChronicPainLogs);
	},

	getAnaesthesiaChronicPainLogById(id) {
		return values(self.anaesthesiaChronicPainLogs).filter((obj) => obj.id == id);
	},

	get AnaesthesiaCriticalCareCaseLogList() {
		return values(self.anaesthesiaCriticalCareCaseLogs);
	},

	getAnaesthesiaCriticalCareCaseLogById(id) {
		return values(self.anaesthesiaCriticalCareCaseLogs).filter((obj) => obj.id == id);
	},

	get OrthopaedicsCaseLogList() {
		return values(self.orthopaedicsCaseLogs);
	},

	getOrthopaedicsCaseLogById(id) {
		return values(self.orthopaedicsCaseLogs).filter((obj) => obj.id == id);
	},

	get OrthopaedicsProcedureLogList() {
		return values(self.orthopaedicsProcedureLogs);
	},

	getOrthopaedicsProcedureLogById(id) {
		return values(self.orthopaedicsProcedureLogs).filter((obj) => obj.id == id);
	},

	get OrthodonticsClinicalCaseLogList() {
		return values(self.orthodonticsClinicalCaseLogs);
	},

	getOrthodonticsClinicalCaseLogById(id) {
		return values(self.orthodonticsClinicalCaseLogs).filter((obj) => obj.id == id);
	},

	get OrthodonticsPreClinicalList() {
		return values(self.orthodonticsPreClinicals);
	},

	getOrthodonticsPreClinicalById(id) {
		return values(self.orthodonticsPreClinicals).filter((obj) => obj.id == id);
	},

	get OralMedicineAndRadiologyCaseLogsList() {
		return values(self.oralMedicineAndRadiologyCaseLogs);
	},

	getOralMedicineAndRadiologyCaseLogsById(id) {
		return values(self.oralMedicineAndRadiologyCaseLogs).filter((obj) => obj.id == id);
	},

	get OralRadiologiesList() {
		return values(self.oralRadiologies);
	},

	getOralRadiologiesById(id) {
		return values(self.oralRadiologies).filter((obj) => obj.id == id);
	},

	get AcademicLogList() {
		return values(self.academicLogs);
	},

	getAcademicLogById(id) {
		return values(self.academicLogs).filter((obj) => obj.id == id);
	},

	get PublicationLogList() {
		return values(self.publicationLogs);
	},

	getPublicationLogById(id) {
		return values(self.publicationLogs).filter((obj) => obj.id == id);
	},

	get AdminWorkLogList() {
		return values(self.adminWorkLogs);
	},

	getAdminWorkLogById(id) {
		return values(self.adminWorkLogs).filter((obj) => obj.id == id);
	},

	get ThesisLogList() {
		return values(self.thesisLogs);
	},

	getThesisLogById(id) {
		return values(self.thesisLogs).filter((obj) => obj.id == id);
	},

	get CustomLogList() {
		return values(self.customLogs);
	},

	getCustomLogById(id) {
		return values(self.customLogs).filter((obj) => obj.id == id);
	},

	get ThesisCaseList() {
		return values(self.thesisCases);
	},

	getThesisCaseListById(id) {
		return values(self.thesisCases).filter((obj) => obj.id == id);
	},
	get CustomCaseList() {
		return values(self.customCases);
	},

	getCustomCaseListById(id) {
		return values(self.customCases).filter((obj) => obj.id == id);
	},
}));
