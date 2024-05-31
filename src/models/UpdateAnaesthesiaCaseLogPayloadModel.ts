import { Instance } from "mobx-state-tree"
import { UpdateAnaesthesiaCaseLogPayloadModelBase } from "./UpdateAnaesthesiaCaseLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnaesthesiaCaseLogPayloadModel */
export interface UpdateAnaesthesiaCaseLogPayloadModelType extends Instance<typeof UpdateAnaesthesiaCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnaesthesiaCaseLogPayloadModel */
export { selectFromUpdateAnaesthesiaCaseLogPayload, updateAnaesthesiaCaseLogPayloadModelPrimitives, UpdateAnaesthesiaCaseLogPayloadModelSelector } from "./UpdateAnaesthesiaCaseLogPayloadModel.base"

/**
 * UpdateAnaesthesiaCaseLogPayloadModel
 */
export const UpdateAnaesthesiaCaseLogPayloadModel = UpdateAnaesthesiaCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
