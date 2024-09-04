import { Instance } from "mobx-state-tree"
import { DeleteFieldsPayloadModelBase } from "./DeleteFieldsPayloadModel.base"

/* The TypeScript type of an instance of DeleteFieldsPayloadModel */
export interface DeleteFieldsPayloadModelType extends Instance<typeof DeleteFieldsPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteFieldsPayloadModel */
export { selectFromDeleteFieldsPayload, deleteFieldsPayloadModelPrimitives, DeleteFieldsPayloadModelSelector } from "./DeleteFieldsPayloadModel.base"

/**
 * DeleteFieldsPayloadModel
 */
export const DeleteFieldsPayloadModel = DeleteFieldsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
