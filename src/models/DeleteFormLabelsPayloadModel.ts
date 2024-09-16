import { Instance } from "mobx-state-tree"
import { DeleteFormLabelsPayloadModelBase } from "./DeleteFormLabelsPayloadModel.base"

/* The TypeScript type of an instance of DeleteFormLabelsPayloadModel */
export interface DeleteFormLabelsPayloadModelType extends Instance<typeof DeleteFormLabelsPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteFormLabelsPayloadModel */
export { selectFromDeleteFormLabelsPayload, deleteFormLabelsPayloadModelPrimitives, DeleteFormLabelsPayloadModelSelector } from "./DeleteFormLabelsPayloadModel.base"

/**
 * DeleteFormLabelsPayloadModel
 */
export const DeleteFormLabelsPayloadModel = DeleteFormLabelsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
