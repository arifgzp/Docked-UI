import { Instance } from "mobx-state-tree"
import { UpdateFormLabelsPayloadModelBase } from "./UpdateFormLabelsPayloadModel.base"

/* The TypeScript type of an instance of UpdateFormLabelsPayloadModel */
export interface UpdateFormLabelsPayloadModelType extends Instance<typeof UpdateFormLabelsPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateFormLabelsPayloadModel */
export { selectFromUpdateFormLabelsPayload, updateFormLabelsPayloadModelPrimitives, UpdateFormLabelsPayloadModelSelector } from "./UpdateFormLabelsPayloadModel.base"

/**
 * UpdateFormLabelsPayloadModel
 */
export const UpdateFormLabelsPayloadModel = UpdateFormLabelsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
