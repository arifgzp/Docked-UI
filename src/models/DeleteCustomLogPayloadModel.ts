import { Instance } from "mobx-state-tree"
import { DeleteCustomLogPayloadModelBase } from "./DeleteCustomLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteCustomLogPayloadModel */
export interface DeleteCustomLogPayloadModelType extends Instance<typeof DeleteCustomLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteCustomLogPayloadModel */
export { selectFromDeleteCustomLogPayload, deleteCustomLogPayloadModelPrimitives, DeleteCustomLogPayloadModelSelector } from "./DeleteCustomLogPayloadModel.base"

/**
 * DeleteCustomLogPayloadModel
 */
export const DeleteCustomLogPayloadModel = DeleteCustomLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
