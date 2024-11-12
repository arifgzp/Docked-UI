import { caseLogModelPrimitives, CaseLogModelSelector } from "./CaseLogModel.base";
import { CaseLogFilter, CaseLogOrder } from "./RootStore.base";
import { UserModelSelector } from "./UserModel.base";

export class UserModelWithCaseLogsSelector extends UserModelSelector {
	caseLogs(
		builder: string | CaseLogModelSelector | ((selector: CaseLogModelSelector) => CaseLogModelSelector) | undefined,
		args?: { filter?: CaseLogFilter | null; order?: CaseLogOrder | null; first?: number | null; offset?: number | null }
	) {
		return this.__child(
			`caseLogs` +
				(args
					? "(" +
					  ["filter", "order", "first", "offset"]
							.map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null))
							.filter((v) => v != null)
							.join(", ") +
					  ")"
					: ""),
			CaseLogModelSelector,
			builder
		);
	}
}

export function selectFromUserModelWithCaseLogs() {
	return new UserModelWithCaseLogsSelector();
}

export const userSelectorWitCaseLogs = selectFromUserModelWithCaseLogs().caseLogs(caseLogModelPrimitives);
