import { Instance } from "mobx-state-tree"
import { AddAnaesthesiaCaseLogPayloadModelBase } from "./AddAnaesthesiaCaseLogPayloadModel.base"

/* The TypeScript type of an instance of AddAnaesthesiaCaseLogPayloadModel */
export interface AddAnaesthesiaCaseLogPayloadModelType extends Instance<typeof AddAnaesthesiaCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddAnaesthesiaCaseLogPayloadModel */
export { selectFromAddAnaesthesiaCaseLogPayload, addAnaesthesiaCaseLogPayloadModelPrimitives, AddAnaesthesiaCaseLogPayloadModelSelector } from "./AddAnaesthesiaCaseLogPayloadModel.base"

/**
 * AddAnaesthesiaCaseLogPayloadModel
 */
export const AddAnaesthesiaCaseLogPayloadModel = AddAnaesthesiaCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
