import { Instance } from "mobx-state-tree"
import { UpdateOrthodonticsCaseLogPayloadModelBase } from "./UpdateOrthodonticsCaseLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateOrthodonticsCaseLogPayloadModel */
export interface UpdateOrthodonticsCaseLogPayloadModelType extends Instance<typeof UpdateOrthodonticsCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOrthodonticsCaseLogPayloadModel */
export { selectFromUpdateOrthodonticsCaseLogPayload, updateOrthodonticsCaseLogPayloadModelPrimitives, UpdateOrthodonticsCaseLogPayloadModelSelector } from "./UpdateOrthodonticsCaseLogPayloadModel.base"

/**
 * UpdateOrthodonticsCaseLogPayloadModel
 */
export const UpdateOrthodonticsCaseLogPayloadModel = UpdateOrthodonticsCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
