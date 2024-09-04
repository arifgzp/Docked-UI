import { Instance } from "mobx-state-tree"
import { UpdateCustomLogPayloadModelBase } from "./UpdateCustomLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateCustomLogPayloadModel */
export interface UpdateCustomLogPayloadModelType extends Instance<typeof UpdateCustomLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateCustomLogPayloadModel */
export { selectFromUpdateCustomLogPayload, updateCustomLogPayloadModelPrimitives, UpdateCustomLogPayloadModelSelector } from "./UpdateCustomLogPayloadModel.base"

/**
 * UpdateCustomLogPayloadModel
 */
export const UpdateCustomLogPayloadModel = UpdateCustomLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
