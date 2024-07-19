import { Instance } from "mobx-state-tree"
import { UpdateHospitalsPayloadModelBase } from "./UpdateHospitalsPayloadModel.base"

/* The TypeScript type of an instance of UpdateHospitalsPayloadModel */
export interface UpdateHospitalsPayloadModelType extends Instance<typeof UpdateHospitalsPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateHospitalsPayloadModel */
export { selectFromUpdateHospitalsPayload, updateHospitalsPayloadModelPrimitives, UpdateHospitalsPayloadModelSelector } from "./UpdateHospitalsPayloadModel.base"

/**
 * UpdateHospitalsPayloadModel
 */
export const UpdateHospitalsPayloadModel = UpdateHospitalsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
