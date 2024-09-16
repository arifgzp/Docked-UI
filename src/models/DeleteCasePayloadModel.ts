import { Instance } from "mobx-state-tree"
import { DeleteCasePayloadModelBase } from "./DeleteCasePayloadModel.base"

/* The TypeScript type of an instance of DeleteCasePayloadModel */
export interface DeleteCasePayloadModelType extends Instance<typeof DeleteCasePayloadModel.Type> {}

/* A graphql query fragment builders for DeleteCasePayloadModel */
export { selectFromDeleteCasePayload, deleteCasePayloadModelPrimitives, DeleteCasePayloadModelSelector } from "./DeleteCasePayloadModel.base"

/**
 * DeleteCasePayloadModel
 */
export const DeleteCasePayloadModel = DeleteCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
