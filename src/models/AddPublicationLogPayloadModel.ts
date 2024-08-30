import { Instance } from "mobx-state-tree"
import { AddPublicationLogPayloadModelBase } from "./AddPublicationLogPayloadModel.base"

/* The TypeScript type of an instance of AddPublicationLogPayloadModel */
export interface AddPublicationLogPayloadModelType extends Instance<typeof AddPublicationLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddPublicationLogPayloadModel */
export { selectFromAddPublicationLogPayload, addPublicationLogPayloadModelPrimitives, AddPublicationLogPayloadModelSelector } from "./AddPublicationLogPayloadModel.base"

/**
 * AddPublicationLogPayloadModel
 */
export const AddPublicationLogPayloadModel = AddPublicationLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
