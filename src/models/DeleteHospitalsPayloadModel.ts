import { Instance } from "mobx-state-tree"
import { DeleteHospitalsPayloadModelBase } from "./DeleteHospitalsPayloadModel.base"

/* The TypeScript type of an instance of DeleteHospitalsPayloadModel */
export interface DeleteHospitalsPayloadModelType extends Instance<typeof DeleteHospitalsPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteHospitalsPayloadModel */
export { selectFromDeleteHospitalsPayload, deleteHospitalsPayloadModelPrimitives, DeleteHospitalsPayloadModelSelector } from "./DeleteHospitalsPayloadModel.base"

/**
 * DeleteHospitalsPayloadModel
 */
export const DeleteHospitalsPayloadModel = DeleteHospitalsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
