import { Instance } from "mobx-state-tree"
import { UpdateRotationPayloadModelBase } from "./UpdateRotationPayloadModel.base"

/* The TypeScript type of an instance of UpdateRotationPayloadModel */
export interface UpdateRotationPayloadModelType extends Instance<typeof UpdateRotationPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateRotationPayloadModel */
export { selectFromUpdateRotationPayload, updateRotationPayloadModelPrimitives, UpdateRotationPayloadModelSelector } from "./UpdateRotationPayloadModel.base"

/**
 * UpdateRotationPayloadModel
 */
export const UpdateRotationPayloadModel = UpdateRotationPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
