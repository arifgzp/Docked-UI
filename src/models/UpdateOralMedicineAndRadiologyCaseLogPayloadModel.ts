import { Instance } from "mobx-state-tree"
import { UpdateOralMedicineAndRadiologyCaseLogPayloadModelBase } from "./UpdateOralMedicineAndRadiologyCaseLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateOralMedicineAndRadiologyCaseLogPayloadModel */
export interface UpdateOralMedicineAndRadiologyCaseLogPayloadModelType extends Instance<typeof UpdateOralMedicineAndRadiologyCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOralMedicineAndRadiologyCaseLogPayloadModel */
export { selectFromUpdateOralMedicineAndRadiologyCaseLogPayload, updateOralMedicineAndRadiologyCaseLogPayloadModelPrimitives, UpdateOralMedicineAndRadiologyCaseLogPayloadModelSelector } from "./UpdateOralMedicineAndRadiologyCaseLogPayloadModel.base"

/**
 * UpdateOralMedicineAndRadiologyCaseLogPayloadModel
 */
export const UpdateOralMedicineAndRadiologyCaseLogPayloadModel = UpdateOralMedicineAndRadiologyCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
