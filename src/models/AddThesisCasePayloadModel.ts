import { Instance } from "mobx-state-tree"
import { AddThesisCasePayloadModelBase } from "./AddThesisCasePayloadModel.base"

/* The TypeScript type of an instance of AddThesisCasePayloadModel */
export interface AddThesisCasePayloadModelType extends Instance<typeof AddThesisCasePayloadModel.Type> {}

/* A graphql query fragment builders for AddThesisCasePayloadModel */
export { selectFromAddThesisCasePayload, addThesisCasePayloadModelPrimitives, AddThesisCasePayloadModelSelector } from "./AddThesisCasePayloadModel.base"

/**
 * AddThesisCasePayloadModel
 */
export const AddThesisCasePayloadModel = AddThesisCasePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
