import { Instance } from "mobx-state-tree"
import { AddHospitalsPayloadModelBase } from "./AddHospitalsPayloadModel.base"

/* The TypeScript type of an instance of AddHospitalsPayloadModel */
export interface AddHospitalsPayloadModelType extends Instance<typeof AddHospitalsPayloadModel.Type> {}

/* A graphql query fragment builders for AddHospitalsPayloadModel */
export { selectFromAddHospitalsPayload, addHospitalsPayloadModelPrimitives, AddHospitalsPayloadModelSelector } from "./AddHospitalsPayloadModel.base"

/**
 * AddHospitalsPayloadModel
 */
export const AddHospitalsPayloadModel = AddHospitalsPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
