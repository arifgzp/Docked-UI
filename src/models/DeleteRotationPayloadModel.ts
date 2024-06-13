import { Instance } from "mobx-state-tree"
import { DeleteRotationPayloadModelBase } from "./DeleteRotationPayloadModel.base"

/* The TypeScript type of an instance of DeleteRotationPayloadModel */
export interface DeleteRotationPayloadModelType extends Instance<typeof DeleteRotationPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteRotationPayloadModel */
export { selectFromDeleteRotationPayload, deleteRotationPayloadModelPrimitives, DeleteRotationPayloadModelSelector } from "./DeleteRotationPayloadModel.base"

/**
 * DeleteRotationPayloadModel
 */
export const DeleteRotationPayloadModel = DeleteRotationPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
