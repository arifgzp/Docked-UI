import { Instance } from "mobx-state-tree"
import { AddCustomCasePayloadModelBase } from "./AddCustomCasePayloadModel.base"

/* The TypeScript type of an instance of AddCustomCasePayloadModel */
export interface AddCustomCasePayloadModelType extends Instance<typeof AddCustomCasePayloadModel.Type> {}

/* A graphql query fragment builders for AddCustomCasePayloadModel */
export { selectFromAddCustomCasePayload, addCustomCasePayloadModelPrimitives, AddCustomCasePayloadModelSelector } from "./AddCustomCasePayloadModel.base"

/**
 * AddCustomCasePayloadModel
 */
export const AddCustomCasePayloadModel = AddCustomCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
