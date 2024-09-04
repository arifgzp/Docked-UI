import { Instance } from "mobx-state-tree"
import { DeleteThesisLogPayloadModelBase } from "./DeleteThesisLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteThesisLogPayloadModel */
export interface DeleteThesisLogPayloadModelType extends Instance<typeof DeleteThesisLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteThesisLogPayloadModel */
export { selectFromDeleteThesisLogPayload, deleteThesisLogPayloadModelPrimitives, DeleteThesisLogPayloadModelSelector } from "./DeleteThesisLogPayloadModel.base"

/**
 * DeleteThesisLogPayloadModel
 */
export const DeleteThesisLogPayloadModel = DeleteThesisLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
