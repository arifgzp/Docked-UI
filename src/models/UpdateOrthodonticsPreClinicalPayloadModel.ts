import { Instance } from "mobx-state-tree"
import { UpdateOrthodonticsPreClinicalPayloadModelBase } from "./UpdateOrthodonticsPreClinicalPayloadModel.base"

/* The TypeScript type of an instance of UpdateOrthodonticsPreClinicalPayloadModel */
export interface UpdateOrthodonticsPreClinicalPayloadModelType extends Instance<typeof UpdateOrthodonticsPreClinicalPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOrthodonticsPreClinicalPayloadModel */
export { selectFromUpdateOrthodonticsPreClinicalPayload, updateOrthodonticsPreClinicalPayloadModelPrimitives, UpdateOrthodonticsPreClinicalPayloadModelSelector } from "./UpdateOrthodonticsPreClinicalPayloadModel.base"

/**
 * UpdateOrthodonticsPreClinicalPayloadModel
 */
export const UpdateOrthodonticsPreClinicalPayloadModel = UpdateOrthodonticsPreClinicalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
