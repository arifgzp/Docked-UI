import { Instance } from "mobx-state-tree"
import { UpdateAnaesthesiaChronicPainLogPayloadModelBase } from "./UpdateAnaesthesiaChronicPainLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnaesthesiaChronicPainLogPayloadModel */
export interface UpdateAnaesthesiaChronicPainLogPayloadModelType extends Instance<typeof UpdateAnaesthesiaChronicPainLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnaesthesiaChronicPainLogPayloadModel */
export { selectFromUpdateAnaesthesiaChronicPainLogPayload, updateAnaesthesiaChronicPainLogPayloadModelPrimitives, UpdateAnaesthesiaChronicPainLogPayloadModelSelector } from "./UpdateAnaesthesiaChronicPainLogPayloadModel.base"

/**
 * UpdateAnaesthesiaChronicPainLogPayloadModel
 */
export const UpdateAnaesthesiaChronicPainLogPayloadModel = UpdateAnaesthesiaChronicPainLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
