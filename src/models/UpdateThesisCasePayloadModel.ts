import { Instance } from "mobx-state-tree"
import { UpdateThesisCasePayloadModelBase } from "./UpdateThesisCasePayloadModel.base"

/* The TypeScript type of an instance of UpdateThesisCasePayloadModel */
export interface UpdateThesisCasePayloadModelType extends Instance<typeof UpdateThesisCasePayloadModel.Type> {}

/* A graphql query fragment builders for UpdateThesisCasePayloadModel */
export { selectFromUpdateThesisCasePayload, updateThesisCasePayloadModelPrimitives, UpdateThesisCasePayloadModelSelector } from "./UpdateThesisCasePayloadModel.base"

/**
 * UpdateThesisCasePayloadModel
 */
export const UpdateThesisCasePayloadModel = UpdateThesisCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
