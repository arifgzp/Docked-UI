import { Instance } from "mobx-state-tree"
import { AddOrthodonticsCaseLogPayloadModelBase } from "./AddOrthodonticsCaseLogPayloadModel.base"

/* The TypeScript type of an instance of AddOrthodonticsCaseLogPayloadModel */
export interface AddOrthodonticsCaseLogPayloadModelType extends Instance<typeof AddOrthodonticsCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddOrthodonticsCaseLogPayloadModel */
export { selectFromAddOrthodonticsCaseLogPayload, addOrthodonticsCaseLogPayloadModelPrimitives, AddOrthodonticsCaseLogPayloadModelSelector } from "./AddOrthodonticsCaseLogPayloadModel.base"

/**
 * AddOrthodonticsCaseLogPayloadModel
 */
export const AddOrthodonticsCaseLogPayloadModel = AddOrthodonticsCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
