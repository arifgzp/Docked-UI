import { Instance } from "mobx-state-tree"
import { DeleteCaseLogPayloadModelBase } from "./DeleteCaseLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteCaseLogPayloadModel */
export interface DeleteCaseLogPayloadModelType extends Instance<typeof DeleteCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteCaseLogPayloadModel */
export { selectFromDeleteCaseLogPayload, deleteCaseLogPayloadModelPrimitives, DeleteCaseLogPayloadModelSelector } from "./DeleteCaseLogPayloadModel.base"

/**
 * DeleteCaseLogPayloadModel
 */
export const DeleteCaseLogPayloadModel = DeleteCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
