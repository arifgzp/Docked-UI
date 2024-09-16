import { Instance } from "mobx-state-tree"
import { DeleteCustomCasePayloadModelBase } from "./DeleteCustomCasePayloadModel.base"

/* The TypeScript type of an instance of DeleteCustomCasePayloadModel */
export interface DeleteCustomCasePayloadModelType extends Instance<typeof DeleteCustomCasePayloadModel.Type> {}

/* A graphql query fragment builders for DeleteCustomCasePayloadModel */
export { selectFromDeleteCustomCasePayload, deleteCustomCasePayloadModelPrimitives, DeleteCustomCasePayloadModelSelector } from "./DeleteCustomCasePayloadModel.base"

/**
 * DeleteCustomCasePayloadModel
 */
export const DeleteCustomCasePayloadModel = DeleteCustomCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
