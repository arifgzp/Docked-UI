import { Instance } from "mobx-state-tree"
import { UpdateCaseLogPayloadModelBase } from "./UpdateCaseLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateCaseLogPayloadModel */
export interface UpdateCaseLogPayloadModelType extends Instance<typeof UpdateCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateCaseLogPayloadModel */
export { selectFromUpdateCaseLogPayload, updateCaseLogPayloadModelPrimitives, UpdateCaseLogPayloadModelSelector } from "./UpdateCaseLogPayloadModel.base"

/**
 * UpdateCaseLogPayloadModel
 */
export const UpdateCaseLogPayloadModel = UpdateCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
