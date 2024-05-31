import { Instance } from "mobx-state-tree"
import { UpdateOrthopaedicsCaseLogPayloadModelBase } from "./UpdateOrthopaedicsCaseLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateOrthopaedicsCaseLogPayloadModel */
export interface UpdateOrthopaedicsCaseLogPayloadModelType extends Instance<typeof UpdateOrthopaedicsCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOrthopaedicsCaseLogPayloadModel */
export { selectFromUpdateOrthopaedicsCaseLogPayload, updateOrthopaedicsCaseLogPayloadModelPrimitives, UpdateOrthopaedicsCaseLogPayloadModelSelector } from "./UpdateOrthopaedicsCaseLogPayloadModel.base"

/**
 * UpdateOrthopaedicsCaseLogPayloadModel
 */
export const UpdateOrthopaedicsCaseLogPayloadModel = UpdateOrthopaedicsCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
