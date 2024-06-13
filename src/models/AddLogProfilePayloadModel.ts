import { Instance } from "mobx-state-tree"
import { AddLogProfilePayloadModelBase } from "./AddLogProfilePayloadModel.base"

/* The TypeScript type of an instance of AddLogProfilePayloadModel */
export interface AddLogProfilePayloadModelType extends Instance<typeof AddLogProfilePayloadModel.Type> {}

/* A graphql query fragment builders for AddLogProfilePayloadModel */
export { selectFromAddLogProfilePayload, addLogProfilePayloadModelPrimitives, AddLogProfilePayloadModelSelector } from "./AddLogProfilePayloadModel.base"

/**
 * AddLogProfilePayloadModel
 */
export const AddLogProfilePayloadModel = AddLogProfilePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
