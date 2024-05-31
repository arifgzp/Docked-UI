import { Instance } from "mobx-state-tree"
import { AddHospitalPayloadModelBase } from "./AddHospitalPayloadModel.base"

/* The TypeScript type of an instance of AddHospitalPayloadModel */
export interface AddHospitalPayloadModelType extends Instance<typeof AddHospitalPayloadModel.Type> {}

/* A graphql query fragment builders for AddHospitalPayloadModel */
export { selectFromAddHospitalPayload, addHospitalPayloadModelPrimitives, AddHospitalPayloadModelSelector } from "./AddHospitalPayloadModel.base"

/**
 * AddHospitalPayloadModel
 */
export const AddHospitalPayloadModel = AddHospitalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
