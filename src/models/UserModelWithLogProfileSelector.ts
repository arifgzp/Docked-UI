import { fetchLogProfileModelSelector } from "./LogProfileModel";
import { LogProfileModelSelector } from "./LogProfileModel.base";
import { LogProfileFilter } from "./RootStore.base";
import { UserModelSelector } from "./UserModel";

export class UserModelWithLogProfileSelector extends UserModelSelector {
	logProfile(
		builder: string | LogProfileModelSelector | ((selector: LogProfileModelSelector) => LogProfileModelSelector) | undefined,
		args?: { filter?: LogProfileFilter | null }
	) {
		return this.__child(
			`logProfile` +
				(args
					? "(" +
					  ["filter"]
							.map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null))
							.filter((v) => v != null)
							.join(", ") +
					  ")"
					: ""),
			LogProfileModelSelector,
			builder
		);
	}
}

export function selectFromUserModelWithLogProfile() {
	return new UserModelWithLogProfileSelector();
}

export const userSelectorWithLogProfile = selectFromUserModelWithLogProfile().logProfile(fetchLogProfileModelSelector);
