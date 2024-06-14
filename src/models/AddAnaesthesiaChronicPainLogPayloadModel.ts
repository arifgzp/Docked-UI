import { Instance } from "mobx-state-tree"
import { AddAnaesthesiaChronicPainLogPayloadModelBase } from "./AddAnaesthesiaChronicPainLogPayloadModel.base"

/* The TypeScript type of an instance of AddAnaesthesiaChronicPainLogPayloadModel */
export interface AddAnaesthesiaChronicPainLogPayloadModelType extends Instance<typeof AddAnaesthesiaChronicPainLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddAnaesthesiaChronicPainLogPayloadModel */
export { selectFromAddAnaesthesiaChronicPainLogPayload, addAnaesthesiaChronicPainLogPayloadModelPrimitives, AddAnaesthesiaChronicPainLogPayloadModelSelector } from "./AddAnaesthesiaChronicPainLogPayloadModel.base"

/**
 * AddAnaesthesiaChronicPainLogPayloadModel
 */
export const AddAnaesthesiaChronicPainLogPayloadModel = AddAnaesthesiaChronicPainLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
