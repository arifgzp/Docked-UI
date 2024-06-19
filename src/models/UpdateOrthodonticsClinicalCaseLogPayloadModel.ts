import { Instance } from "mobx-state-tree"
import { UpdateOrthodonticsClinicalCaseLogPayloadModelBase } from "./UpdateOrthodonticsClinicalCaseLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateOrthodonticsClinicalCaseLogPayloadModel */
export interface UpdateOrthodonticsClinicalCaseLogPayloadModelType extends Instance<typeof UpdateOrthodonticsClinicalCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOrthodonticsClinicalCaseLogPayloadModel */
export { selectFromUpdateOrthodonticsClinicalCaseLogPayload, updateOrthodonticsClinicalCaseLogPayloadModelPrimitives, UpdateOrthodonticsClinicalCaseLogPayloadModelSelector } from "./UpdateOrthodonticsClinicalCaseLogPayloadModel.base"

/**
 * UpdateOrthodonticsClinicalCaseLogPayloadModel
 */
export const UpdateOrthodonticsClinicalCaseLogPayloadModel = UpdateOrthodonticsClinicalCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
