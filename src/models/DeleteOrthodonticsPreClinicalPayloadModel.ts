import { Instance } from "mobx-state-tree"
import { DeleteOrthodonticsPreClinicalPayloadModelBase } from "./DeleteOrthodonticsPreClinicalPayloadModel.base"

/* The TypeScript type of an instance of DeleteOrthodonticsPreClinicalPayloadModel */
export interface DeleteOrthodonticsPreClinicalPayloadModelType extends Instance<typeof DeleteOrthodonticsPreClinicalPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteOrthodonticsPreClinicalPayloadModel */
export { selectFromDeleteOrthodonticsPreClinicalPayload, deleteOrthodonticsPreClinicalPayloadModelPrimitives, DeleteOrthodonticsPreClinicalPayloadModelSelector } from "./DeleteOrthodonticsPreClinicalPayloadModel.base"

/**
 * DeleteOrthodonticsPreClinicalPayloadModel
 */
export const DeleteOrthodonticsPreClinicalPayloadModel = DeleteOrthodonticsPreClinicalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
