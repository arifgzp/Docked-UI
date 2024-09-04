import { Instance } from "mobx-state-tree"
import { AddCustomLogPayloadModelBase } from "./AddCustomLogPayloadModel.base"

/* The TypeScript type of an instance of AddCustomLogPayloadModel */
export interface AddCustomLogPayloadModelType extends Instance<typeof AddCustomLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddCustomLogPayloadModel */
export { selectFromAddCustomLogPayload, addCustomLogPayloadModelPrimitives, AddCustomLogPayloadModelSelector } from "./AddCustomLogPayloadModel.base"

/**
 * AddCustomLogPayloadModel
 */
export const AddCustomLogPayloadModel = AddCustomLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
