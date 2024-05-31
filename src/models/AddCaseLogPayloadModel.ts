import { Instance } from "mobx-state-tree"
import { AddCaseLogPayloadModelBase } from "./AddCaseLogPayloadModel.base"

/* The TypeScript type of an instance of AddCaseLogPayloadModel */
export interface AddCaseLogPayloadModelType extends Instance<typeof AddCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddCaseLogPayloadModel */
export { selectFromAddCaseLogPayload, addCaseLogPayloadModelPrimitives, AddCaseLogPayloadModelSelector } from "./AddCaseLogPayloadModel.base"

/**
 * AddCaseLogPayloadModel
 */
export const AddCaseLogPayloadModel = AddCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
