import { Instance } from "mobx-state-tree"
import { DeleteAnaesthesiaChronicPainLogPayloadModelBase } from "./DeleteAnaesthesiaChronicPainLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteAnaesthesiaChronicPainLogPayloadModel */
export interface DeleteAnaesthesiaChronicPainLogPayloadModelType extends Instance<typeof DeleteAnaesthesiaChronicPainLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteAnaesthesiaChronicPainLogPayloadModel */
export { selectFromDeleteAnaesthesiaChronicPainLogPayload, deleteAnaesthesiaChronicPainLogPayloadModelPrimitives, DeleteAnaesthesiaChronicPainLogPayloadModelSelector } from "./DeleteAnaesthesiaChronicPainLogPayloadModel.base"

/**
 * DeleteAnaesthesiaChronicPainLogPayloadModel
 */
export const DeleteAnaesthesiaChronicPainLogPayloadModel = DeleteAnaesthesiaChronicPainLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
