import { Instance } from "mobx-state-tree"
import { DeleteUserPayloadModelBase } from "./DeleteUserPayloadModel.base"

/* The TypeScript type of an instance of DeleteUserPayloadModel */
export interface DeleteUserPayloadModelType extends Instance<typeof DeleteUserPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteUserPayloadModel */
export { selectFromDeleteUserPayload, deleteUserPayloadModelPrimitives, DeleteUserPayloadModelSelector } from "./DeleteUserPayloadModel.base"

/**
 * DeleteUserPayloadModel
 */
export const DeleteUserPayloadModel = DeleteUserPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
