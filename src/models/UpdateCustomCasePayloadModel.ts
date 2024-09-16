import { Instance } from "mobx-state-tree"
import { UpdateCustomCasePayloadModelBase } from "./UpdateCustomCasePayloadModel.base"

/* The TypeScript type of an instance of UpdateCustomCasePayloadModel */
export interface UpdateCustomCasePayloadModelType extends Instance<typeof UpdateCustomCasePayloadModel.Type> {}

/* A graphql query fragment builders for UpdateCustomCasePayloadModel */
export { selectFromUpdateCustomCasePayload, updateCustomCasePayloadModelPrimitives, UpdateCustomCasePayloadModelSelector } from "./UpdateCustomCasePayloadModel.base"

/**
 * UpdateCustomCasePayloadModel
 */
export const UpdateCustomCasePayloadModel = UpdateCustomCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
