import { Instance } from "mobx-state-tree"
import { DeleteHospitalPayloadModelBase } from "./DeleteHospitalPayloadModel.base"

/* The TypeScript type of an instance of DeleteHospitalPayloadModel */
export interface DeleteHospitalPayloadModelType extends Instance<typeof DeleteHospitalPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteHospitalPayloadModel */
export { selectFromDeleteHospitalPayload, deleteHospitalPayloadModelPrimitives, DeleteHospitalPayloadModelSelector } from "./DeleteHospitalPayloadModel.base"

/**
 * DeleteHospitalPayloadModel
 */
export const DeleteHospitalPayloadModel = DeleteHospitalPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
