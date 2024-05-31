import { Instance } from "mobx-state-tree";
import { RootStoreBase } from "./RootStore.base";
import { anaesthesiaCaseLogModelPrimitives, selectFromAddAnaesthesiaCaseLogPayload, selectFromAddCaseLogPayload } from ".";
import { values } from "mobx";

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.actions((self) => ({
	// This is an auto-generated example action.

	log() {
		console.log(JSON.stringify(self));
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
})).views((self) => ({
	get AnaesthesiaCaseLogList() {
		return values(self.anaesthesiaCaseLogs);
	},

	getAnaesthesiaCaseLogById(id) {
		return values(self.anaesthesiaCaseLogs).filter((obj) => obj.id == id);
	},
}));
