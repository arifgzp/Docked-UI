import { Instance } from "mobx-state-tree"
import { DeleteThesisCasePayloadModelBase } from "./DeleteThesisCasePayloadModel.base"

/* The TypeScript type of an instance of DeleteThesisCasePayloadModel */
export interface DeleteThesisCasePayloadModelType extends Instance<typeof DeleteThesisCasePayloadModel.Type> {}

/* A graphql query fragment builders for DeleteThesisCasePayloadModel */
export { selectFromDeleteThesisCasePayload, deleteThesisCasePayloadModelPrimitives, DeleteThesisCasePayloadModelSelector } from "./DeleteThesisCasePayloadModel.base"

/**
 * DeleteThesisCasePayloadModel
 */
export const DeleteThesisCasePayloadModel = DeleteThesisCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
