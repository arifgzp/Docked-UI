import { Instance } from "mobx-state-tree"
import { AddOrthodonticsClinicalCaseLogPayloadModelBase } from "./AddOrthodonticsClinicalCaseLogPayloadModel.base"

/* The TypeScript type of an instance of AddOrthodonticsClinicalCaseLogPayloadModel */
export interface AddOrthodonticsClinicalCaseLogPayloadModelType extends Instance<typeof AddOrthodonticsClinicalCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddOrthodonticsClinicalCaseLogPayloadModel */
export { selectFromAddOrthodonticsClinicalCaseLogPayload, addOrthodonticsClinicalCaseLogPayloadModelPrimitives, AddOrthodonticsClinicalCaseLogPayloadModelSelector } from "./AddOrthodonticsClinicalCaseLogPayloadModel.base"

/**
 * AddOrthodonticsClinicalCaseLogPayloadModel
 */
export const AddOrthodonticsClinicalCaseLogPayloadModel = AddOrthodonticsClinicalCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
