import { Instance } from "mobx-state-tree"
import { UpdatePublicationLogPayloadModelBase } from "./UpdatePublicationLogPayloadModel.base"

/* The TypeScript type of an instance of UpdatePublicationLogPayloadModel */
export interface UpdatePublicationLogPayloadModelType extends Instance<typeof UpdatePublicationLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdatePublicationLogPayloadModel */
export { selectFromUpdatePublicationLogPayload, updatePublicationLogPayloadModelPrimitives, UpdatePublicationLogPayloadModelSelector } from "./UpdatePublicationLogPayloadModel.base"

/**
 * UpdatePublicationLogPayloadModel
 */
export const UpdatePublicationLogPayloadModel = UpdatePublicationLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
