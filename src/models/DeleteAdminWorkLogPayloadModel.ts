import { Instance } from "mobx-state-tree"
import { DeleteAdminWorkLogPayloadModelBase } from "./DeleteAdminWorkLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteAdminWorkLogPayloadModel */
export interface DeleteAdminWorkLogPayloadModelType extends Instance<typeof DeleteAdminWorkLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteAdminWorkLogPayloadModel */
export { selectFromDeleteAdminWorkLogPayload, deleteAdminWorkLogPayloadModelPrimitives, DeleteAdminWorkLogPayloadModelSelector } from "./DeleteAdminWorkLogPayloadModel.base"

/**
 * DeleteAdminWorkLogPayloadModel
 */
export const DeleteAdminWorkLogPayloadModel = DeleteAdminWorkLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
