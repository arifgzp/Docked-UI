import { Instance } from "mobx-state-tree"
import { DeleteOrthodonticsCaseLogPayloadModelBase } from "./DeleteOrthodonticsCaseLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteOrthodonticsCaseLogPayloadModel */
export interface DeleteOrthodonticsCaseLogPayloadModelType extends Instance<typeof DeleteOrthodonticsCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteOrthodonticsCaseLogPayloadModel */
export { selectFromDeleteOrthodonticsCaseLogPayload, deleteOrthodonticsCaseLogPayloadModelPrimitives, DeleteOrthodonticsCaseLogPayloadModelSelector } from "./DeleteOrthodonticsCaseLogPayloadModel.base"

/**
 * DeleteOrthodonticsCaseLogPayloadModel
 */
export const DeleteOrthodonticsCaseLogPayloadModel = DeleteOrthodonticsCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
