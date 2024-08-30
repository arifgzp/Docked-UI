import { Instance } from "mobx-state-tree";
import { PublicationLogModelBase, selectFromPublicationLog } from "./PublicationLogModel.base";

/* The TypeScript type of an instance of PublicationLogModel */
export interface PublicationLogModelType extends Instance<typeof PublicationLogModel.Type> {}

/* A graphql query fragment builders for PublicationLogModel */
export { selectFromPublicationLog, publicationLogModelPrimitives, PublicationLogModelSelector } from "./PublicationLogModel.base";

/**
 * PublicationLogModel
 */
export const PublicationLogModel = PublicationLogModelBase.actions((self) => ({
	// This is an auto-generated example action.
	log() {
		console.log(JSON.stringify(self));
	},
}));

export const updatePublicationLogPayloadModelSelector =
	selectFromPublicationLog().createdOn.updatedOn.date.type.title.journalName.status.academicLogType;
