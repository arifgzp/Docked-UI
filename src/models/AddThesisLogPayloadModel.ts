import { Instance } from "mobx-state-tree"
import { AddThesisLogPayloadModelBase } from "./AddThesisLogPayloadModel.base"

/* The TypeScript type of an instance of AddThesisLogPayloadModel */
export interface AddThesisLogPayloadModelType extends Instance<typeof AddThesisLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddThesisLogPayloadModel */
export { selectFromAddThesisLogPayload, addThesisLogPayloadModelPrimitives, AddThesisLogPayloadModelSelector } from "./AddThesisLogPayloadModel.base"

/**
 * AddThesisLogPayloadModel
 */
export const AddThesisLogPayloadModel = AddThesisLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
