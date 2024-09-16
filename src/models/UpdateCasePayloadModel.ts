import { Instance } from "mobx-state-tree"
import { UpdateCasePayloadModelBase } from "./UpdateCasePayloadModel.base"

/* The TypeScript type of an instance of UpdateCasePayloadModel */
export interface UpdateCasePayloadModelType extends Instance<typeof UpdateCasePayloadModel.Type> {}

/* A graphql query fragment builders for UpdateCasePayloadModel */
export { selectFromUpdateCasePayload, updateCasePayloadModelPrimitives, UpdateCasePayloadModelSelector } from "./UpdateCasePayloadModel.base"

/**
 * UpdateCasePayloadModel
 */
export const UpdateCasePayloadModel = UpdateCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
