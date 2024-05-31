import { Instance } from "mobx-state-tree"
import { AddOrthopaedicsCaseLogPayloadModelBase } from "./AddOrthopaedicsCaseLogPayloadModel.base"

/* The TypeScript type of an instance of AddOrthopaedicsCaseLogPayloadModel */
export interface AddOrthopaedicsCaseLogPayloadModelType extends Instance<typeof AddOrthopaedicsCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddOrthopaedicsCaseLogPayloadModel */
export { selectFromAddOrthopaedicsCaseLogPayload, addOrthopaedicsCaseLogPayloadModelPrimitives, AddOrthopaedicsCaseLogPayloadModelSelector } from "./AddOrthopaedicsCaseLogPayloadModel.base"

/**
 * AddOrthopaedicsCaseLogPayloadModel
 */
export const AddOrthopaedicsCaseLogPayloadModel = AddOrthopaedicsCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
