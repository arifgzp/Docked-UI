import { Instance } from "mobx-state-tree"
import { AddOrthodonticsPreClinicalPayloadModelBase } from "./AddOrthodonticsPreClinicalPayloadModel.base"

/* The TypeScript type of an instance of AddOrthodonticsPreClinicalPayloadModel */
export interface AddOrthodonticsPreClinicalPayloadModelType extends Instance<typeof AddOrthodonticsPreClinicalPayloadModel.Type> {}

/* A graphql query fragment builders for AddOrthodonticsPreClinicalPayloadModel */
export { selectFromAddOrthodonticsPreClinicalPayload, addOrthodonticsPreClinicalPayloadModelPrimitives, AddOrthodonticsPreClinicalPayloadModelSelector } from "./AddOrthodonticsPreClinicalPayloadModel.base"

/**
 * AddOrthodonticsPreClinicalPayloadModel
 */
export const AddOrthodonticsPreClinicalPayloadModel = AddOrthodonticsPreClinicalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
