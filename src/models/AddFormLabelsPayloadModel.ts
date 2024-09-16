import { Instance } from "mobx-state-tree"
import { AddFormLabelsPayloadModelBase } from "./AddFormLabelsPayloadModel.base"

/* The TypeScript type of an instance of AddFormLabelsPayloadModel */
export interface AddFormLabelsPayloadModelType extends Instance<typeof AddFormLabelsPayloadModel.Type> {}

/* A graphql query fragment builders for AddFormLabelsPayloadModel */
export { selectFromAddFormLabelsPayload, addFormLabelsPayloadModelPrimitives, AddFormLabelsPayloadModelSelector } from "./AddFormLabelsPayloadModel.base"

/**
 * AddFormLabelsPayloadModel
 */
export const AddFormLabelsPayloadModel = AddFormLabelsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
