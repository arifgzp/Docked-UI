import { Instance } from "mobx-state-tree"
import { AddCasePayloadModelBase } from "./AddCasePayloadModel.base"

/* The TypeScript type of an instance of AddCasePayloadModel */
export interface AddCasePayloadModelType extends Instance<typeof AddCasePayloadModel.Type> {}

/* A graphql query fragment builders for AddCasePayloadModel */
export { selectFromAddCasePayload, addCasePayloadModelPrimitives, AddCasePayloadModelSelector } from "./AddCasePayloadModel.base"

/**
 * AddCasePayloadModel
 */
export const AddCasePayloadModel = AddCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
