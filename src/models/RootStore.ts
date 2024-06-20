import { Instance } from "mobx-state-tree";
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

	fetchUserById(id: string) {
		const variables = {
			id: id,
		};

		const fetchUserResultSelector = userModelPrimitives.toString();
		const fetchUserQuery: Query = self.queryGetUser(variables, fetchUserResultSelector);
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

	resetAllData() {
		self.anaesthesiaCaseLogs.clear();
		self.anaesthesiaChronicPainLogs.clear();
		self.anaesthesiaCriticalCareCaseLogs.clear();
		self.orthopaedicsCaseLogs.clear();
		self.orthodonticsClinicalCaseLogs.clear();
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

	get OrthodonticsClinicalCaseLogList() {
		return values(self.orthodonticsClinicalCaseLogs);
	},

	getOrthodonticsClinicalCaseLogById(id) {
		return values(self.orthodonticsClinicalCaseLogs).filter((obj) => obj.id == id);
	},
}));
