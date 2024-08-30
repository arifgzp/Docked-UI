import { Instance } from "mobx-state-tree"
import { AddOralMedicineAndRadiologyCaseLogPayloadModelBase } from "./AddOralMedicineAndRadiologyCaseLogPayloadModel.base"

/* The TypeScript type of an instance of AddOralMedicineAndRadiologyCaseLogPayloadModel */
export interface AddOralMedicineAndRadiologyCaseLogPayloadModelType extends Instance<typeof AddOralMedicineAndRadiologyCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddOralMedicineAndRadiologyCaseLogPayloadModel */
export { selectFromAddOralMedicineAndRadiologyCaseLogPayload, addOralMedicineAndRadiologyCaseLogPayloadModelPrimitives, AddOralMedicineAndRadiologyCaseLogPayloadModelSelector } from "./AddOralMedicineAndRadiologyCaseLogPayloadModel.base"

/**
 * AddOralMedicineAndRadiologyCaseLogPayloadModel
 */
export const AddOralMedicineAndRadiologyCaseLogPayloadModel = AddOralMedicineAndRadiologyCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
