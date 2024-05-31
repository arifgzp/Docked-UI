import { Instance } from "mobx-state-tree"
import { AddUserPayloadModelBase } from "./AddUserPayloadModel.base"

/* The TypeScript type of an instance of AddUserPayloadModel */
export interface AddUserPayloadModelType extends Instance<typeof AddUserPayloadModel.Type> {}

/* A graphql query fragment builders for AddUserPayloadModel */
export { selectFromAddUserPayload, addUserPayloadModelPrimitives, AddUserPayloadModelSelector } from "./AddUserPayloadModel.base"

/**
 * AddUserPayloadModel
 */
export const AddUserPayloadModel = AddUserPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
