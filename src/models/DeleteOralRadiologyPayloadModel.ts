import { Instance } from "mobx-state-tree"
import { DeleteOralRadiologyPayloadModelBase } from "./DeleteOralRadiologyPayloadModel.base"

/* The TypeScript type of an instance of DeleteOralRadiologyPayloadModel */
export interface DeleteOralRadiologyPayloadModelType extends Instance<typeof DeleteOralRadiologyPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteOralRadiologyPayloadModel */
export { selectFromDeleteOralRadiologyPayload, deleteOralRadiologyPayloadModelPrimitives, DeleteOralRadiologyPayloadModelSelector } from "./DeleteOralRadiologyPayloadModel.base"

/**
 * DeleteOralRadiologyPayloadModel
 */
export const DeleteOralRadiologyPayloadModel = DeleteOralRadiologyPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
