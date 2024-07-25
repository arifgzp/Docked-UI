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
}));
