import { Instance } from "mobx-state-tree"
import { DeleteOrthopaedicsCaseLogPayloadModelBase } from "./DeleteOrthopaedicsCaseLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteOrthopaedicsCaseLogPayloadModel */
export interface DeleteOrthopaedicsCaseLogPayloadModelType extends Instance<typeof DeleteOrthopaedicsCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteOrthopaedicsCaseLogPayloadModel */
export { selectFromDeleteOrthopaedicsCaseLogPayload, deleteOrthopaedicsCaseLogPayloadModelPrimitives, DeleteOrthopaedicsCaseLogPayloadModelSelector } from "./DeleteOrthopaedicsCaseLogPayloadModel.base"

/**
 * DeleteOrthopaedicsCaseLogPayloadModel
 */
export const DeleteOrthopaedicsCaseLogPayloadModel = DeleteOrthopaedicsCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
