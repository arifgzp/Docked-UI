import { Instance } from "mobx-state-tree"
import { AddAdminWorkLogPayloadModelBase } from "./AddAdminWorkLogPayloadModel.base"

/* The TypeScript type of an instance of AddAdminWorkLogPayloadModel */
export interface AddAdminWorkLogPayloadModelType extends Instance<typeof AddAdminWorkLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddAdminWorkLogPayloadModel */
export { selectFromAddAdminWorkLogPayload, addAdminWorkLogPayloadModelPrimitives, AddAdminWorkLogPayloadModelSelector } from "./AddAdminWorkLogPayloadModel.base"

/**
 * AddAdminWorkLogPayloadModel
 */
export const AddAdminWorkLogPayloadModel = AddAdminWorkLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
