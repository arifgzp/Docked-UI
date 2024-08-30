import { Instance } from "mobx-state-tree"
import { DeleteOralMedicineAndRadiologyCaseLogPayloadModelBase } from "./DeleteOralMedicineAndRadiologyCaseLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteOralMedicineAndRadiologyCaseLogPayloadModel */
export interface DeleteOralMedicineAndRadiologyCaseLogPayloadModelType extends Instance<typeof DeleteOralMedicineAndRadiologyCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteOralMedicineAndRadiologyCaseLogPayloadModel */
export { selectFromDeleteOralMedicineAndRadiologyCaseLogPayload, deleteOralMedicineAndRadiologyCaseLogPayloadModelPrimitives, DeleteOralMedicineAndRadiologyCaseLogPayloadModelSelector } from "./DeleteOralMedicineAndRadiologyCaseLogPayloadModel.base"

/**
 * DeleteOralMedicineAndRadiologyCaseLogPayloadModel
 */
export const DeleteOralMedicineAndRadiologyCaseLogPayloadModel = DeleteOralMedicineAndRadiologyCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
