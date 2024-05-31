import { Instance } from "mobx-state-tree"
import { UpdateHospitalPayloadModelBase } from "./UpdateHospitalPayloadModel.base"

/* The TypeScript type of an instance of UpdateHospitalPayloadModel */
export interface UpdateHospitalPayloadModelType extends Instance<typeof UpdateHospitalPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateHospitalPayloadModel */
export { selectFromUpdateHospitalPayload, updateHospitalPayloadModelPrimitives, UpdateHospitalPayloadModelSelector } from "./UpdateHospitalPayloadModel.base"

/**
 * UpdateHospitalPayloadModel
 */
export const UpdateHospitalPayloadModel = UpdateHospitalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
