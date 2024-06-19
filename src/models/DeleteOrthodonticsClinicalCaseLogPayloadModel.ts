import { Instance } from "mobx-state-tree"
import { DeleteOrthodonticsClinicalCaseLogPayloadModelBase } from "./DeleteOrthodonticsClinicalCaseLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteOrthodonticsClinicalCaseLogPayloadModel */
export interface DeleteOrthodonticsClinicalCaseLogPayloadModelType extends Instance<typeof DeleteOrthodonticsClinicalCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteOrthodonticsClinicalCaseLogPayloadModel */
export { selectFromDeleteOrthodonticsClinicalCaseLogPayload, deleteOrthodonticsClinicalCaseLogPayloadModelPrimitives, DeleteOrthodonticsClinicalCaseLogPayloadModelSelector } from "./DeleteOrthodonticsClinicalCaseLogPayloadModel.base"

/**
 * DeleteOrthodonticsClinicalCaseLogPayloadModel
 */
export const DeleteOrthodonticsClinicalCaseLogPayloadModel = DeleteOrthodonticsClinicalCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
