import { Instance } from "mobx-state-tree"
import { DeletePublicationLogPayloadModelBase } from "./DeletePublicationLogPayloadModel.base"

/* The TypeScript type of an instance of DeletePublicationLogPayloadModel */
export interface DeletePublicationLogPayloadModelType extends Instance<typeof DeletePublicationLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeletePublicationLogPayloadModel */
export { selectFromDeletePublicationLogPayload, deletePublicationLogPayloadModelPrimitives, DeletePublicationLogPayloadModelSelector } from "./DeletePublicationLogPayloadModel.base"

/**
 * DeletePublicationLogPayloadModel
 */
export const DeletePublicationLogPayloadModel = DeletePublicationLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
