import { Instance } from "mobx-state-tree"
import { DeleteAnaesthesiaCaseLogPayloadModelBase } from "./DeleteAnaesthesiaCaseLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteAnaesthesiaCaseLogPayloadModel */
export interface DeleteAnaesthesiaCaseLogPayloadModelType extends Instance<typeof DeleteAnaesthesiaCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteAnaesthesiaCaseLogPayloadModel */
export { selectFromDeleteAnaesthesiaCaseLogPayload, deleteAnaesthesiaCaseLogPayloadModelPrimitives, DeleteAnaesthesiaCaseLogPayloadModelSelector } from "./DeleteAnaesthesiaCaseLogPayloadModel.base"

/**
 * DeleteAnaesthesiaCaseLogPayloadModel
 */
export const DeleteAnaesthesiaCaseLogPayloadModel = DeleteAnaesthesiaCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
