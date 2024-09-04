import { Instance } from "mobx-state-tree"
import { UpdateThesisLogPayloadModelBase } from "./UpdateThesisLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateThesisLogPayloadModel */
export interface UpdateThesisLogPayloadModelType extends Instance<typeof UpdateThesisLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateThesisLogPayloadModel */
export { selectFromUpdateThesisLogPayload, updateThesisLogPayloadModelPrimitives, UpdateThesisLogPayloadModelSelector } from "./UpdateThesisLogPayloadModel.base"

/**
 * UpdateThesisLogPayloadModel
 */
export const UpdateThesisLogPayloadModel = UpdateThesisLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
