import { Instance } from "mobx-state-tree"
import { UpdateAdminWorkLogPayloadModelBase } from "./UpdateAdminWorkLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateAdminWorkLogPayloadModel */
export interface UpdateAdminWorkLogPayloadModelType extends Instance<typeof UpdateAdminWorkLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAdminWorkLogPayloadModel */
export { selectFromUpdateAdminWorkLogPayload, updateAdminWorkLogPayloadModelPrimitives, UpdateAdminWorkLogPayloadModelSelector } from "./UpdateAdminWorkLogPayloadModel.base"

/**
 * UpdateAdminWorkLogPayloadModel
 */
export const UpdateAdminWorkLogPayloadModel = UpdateAdminWorkLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
