import { FacultyModelSelector } from "./FacultyModel.base";
import { UserFilter } from "./RootStore.base";
import { facultyUserModelSelector } from "./UserModel";
import { userModelPrimitives, UserModelSelector } from "./UserModel.base";

export class FacultyModelWithUserSelector extends FacultyModelSelector {
	user(
		builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined,
		args?: { filter?: UserFilter | null }
	) {
		return this.__child(
			`user` +
				(args
					? "(" +
					  ["filter"]
							.map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null))
							.filter((v) => v != null)
							.join(", ") +
					  ")"
					: ""),
			UserModelSelector,
			builder
		);
	}
}

export function selectFromFacultyModelWithUser() {
	return new FacultyModelWithUserSelector();
}

export const facultySelectorWithUser = selectFromFacultyModelWithUser().id.createdOn.updatedOn.user(facultyUserModelSelector);
