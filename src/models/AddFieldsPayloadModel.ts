import { Instance } from "mobx-state-tree"
import { AddFieldsPayloadModelBase } from "./AddFieldsPayloadModel.base"

/* The TypeScript type of an instance of AddFieldsPayloadModel */
export interface AddFieldsPayloadModelType extends Instance<typeof AddFieldsPayloadModel.Type> {}

/* A graphql query fragment builders for AddFieldsPayloadModel */
export { selectFromAddFieldsPayload, addFieldsPayloadModelPrimitives, AddFieldsPayloadModelSelector } from "./AddFieldsPayloadModel.base"

/**
 * AddFieldsPayloadModel
 */
export const AddFieldsPayloadModel = AddFieldsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
