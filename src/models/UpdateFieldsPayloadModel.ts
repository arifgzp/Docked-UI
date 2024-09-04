import { Instance } from "mobx-state-tree"
import { UpdateFieldsPayloadModelBase } from "./UpdateFieldsPayloadModel.base"

/* The TypeScript type of an instance of UpdateFieldsPayloadModel */
export interface UpdateFieldsPayloadModelType extends Instance<typeof UpdateFieldsPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateFieldsPayloadModel */
export { selectFromUpdateFieldsPayload, updateFieldsPayloadModelPrimitives, UpdateFieldsPayloadModelSelector } from "./UpdateFieldsPayloadModel.base"

/**
 * UpdateFieldsPayloadModel
 */
export const UpdateFieldsPayloadModel = UpdateFieldsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
