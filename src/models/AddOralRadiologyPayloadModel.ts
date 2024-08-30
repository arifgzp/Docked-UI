import { Instance } from "mobx-state-tree"
import { AddOralRadiologyPayloadModelBase } from "./AddOralRadiologyPayloadModel.base"

/* The TypeScript type of an instance of AddOralRadiologyPayloadModel */
export interface AddOralRadiologyPayloadModelType extends Instance<typeof AddOralRadiologyPayloadModel.Type> {}

/* A graphql query fragment builders for AddOralRadiologyPayloadModel */
export { selectFromAddOralRadiologyPayload, addOralRadiologyPayloadModelPrimitives, AddOralRadiologyPayloadModelSelector } from "./AddOralRadiologyPayloadModel.base"

/**
 * AddOralRadiologyPayloadModel
 */
export const AddOralRadiologyPayloadModel = AddOralRadiologyPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
