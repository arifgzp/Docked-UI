import { Instance } from "mobx-state-tree"
import { AddRotationPayloadModelBase } from "./AddRotationPayloadModel.base"

/* The TypeScript type of an instance of AddRotationPayloadModel */
export interface AddRotationPayloadModelType extends Instance<typeof AddRotationPayloadModel.Type> {}

/* A graphql query fragment builders for AddRotationPayloadModel */
export { selectFromAddRotationPayload, addRotationPayloadModelPrimitives, AddRotationPayloadModelSelector } from "./AddRotationPayloadModel.base"

/**
 * AddRotationPayloadModel
 */
export const AddRotationPayloadModel = AddRotationPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
