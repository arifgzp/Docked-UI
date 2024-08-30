import { Instance } from "mobx-state-tree"
import { UpdateOralRadiologyPayloadModelBase } from "./UpdateOralRadiologyPayloadModel.base"

/* The TypeScript type of an instance of UpdateOralRadiologyPayloadModel */
export interface UpdateOralRadiologyPayloadModelType extends Instance<typeof UpdateOralRadiologyPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOralRadiologyPayloadModel */
export { selectFromUpdateOralRadiologyPayload, updateOralRadiologyPayloadModelPrimitives, UpdateOralRadiologyPayloadModelSelector } from "./UpdateOralRadiologyPayloadModel.base"

/**
 * UpdateOralRadiologyPayloadModel
 */
export const UpdateOralRadiologyPayloadModel = UpdateOralRadiologyPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
