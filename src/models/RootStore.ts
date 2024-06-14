import { Instance } from "mobx-state-tree";
import { RootStoreBase } from "./RootStore.base";
import {
	anaesthesiaCaseLogModelPrimitives,
	selectFromAddAnaesthesiaCaseLogPayload,
	selectFromAddCaseLogPayload,
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

	addAnaesthesiaCaseLog(anaesthesiaCaseLogInfo) {
		const inputVariable = { input: [anaesthesiaCaseLogInfo] };
		const addAnaesthesiaCaseLogSelector = selectFromAddAnaesthesiaCaseLogPayload().toString();
		console.log("********** addAnaesthesiaCaseLog Query STARTS **********");
		console.log(addAnaesthesiaCaseLogSelector);
		console.log(inputVariable);
		console.log("********** addAnaesthesiaCaseLog Query ENDS **********");
		return self.mutateAddAnaesthesiaCaseLog(inputVariable, addAnaesthesiaCaseLogSelector);
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

	addAnaesthesiaChronicPainLog(anaesthesiaChronicPainLogInfo) {
		const inputVariable = { input: [anaesthesiaChronicPainLogInfo] };
		const addAnaesthesiaChronicPainLogSelector = selectFromAddAnaesthesiaChronicPainLogPayload().toString();
		console.log("********** addAnaesthesiaChronicPainLog Query STARTS **********");
		console.log(addAnaesthesiaChronicPainLogSelector);
		console.log(inputVariable);
		console.log("********** addAnaesthesiaChronicPainLog Query ENDS **********");
		return self.mutateAddAnaesthesiaChronicPainLog(inputVariable, addAnaesthesiaChronicPainLogSelector);
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

	addAnaesthesiaCriticalCareCaseLog(anaesthesiaCriticalCareCaseLogInfo) {
		const inputVariable = { input: [anaesthesiaCriticalCareCaseLogInfo] };
		const addAnaesthesiaChronicPainLogSelector = selectFromAddAnaesthesiaCriticalCareCaseLogPayload().toString();
		console.log("********** addAnaesthesiaCriticalCareCaseLog Query STARTS **********");
		console.log(addAnaesthesiaChronicPainLogSelector);
		console.log(inputVariable);
		console.log("********** addAnaesthesiaCriticalCareCaseLog Query ENDS **********");
		return self.mutateAddAnaesthesiaCriticalCareCaseLog(inputVariable, addAnaesthesiaChronicPainLogSelector);
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
}));
