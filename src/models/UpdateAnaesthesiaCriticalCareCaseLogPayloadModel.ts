import { Instance } from "mobx-state-tree"
import { UpdateAnaesthesiaCriticalCareCaseLogPayloadModelBase } from "./UpdateAnaesthesiaCriticalCareCaseLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateAnaesthesiaCriticalCareCaseLogPayloadModel */
export interface UpdateAnaesthesiaCriticalCareCaseLogPayloadModelType extends Instance<typeof UpdateAnaesthesiaCriticalCareCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAnaesthesiaCriticalCareCaseLogPayloadModel */
export { selectFromUpdateAnaesthesiaCriticalCareCaseLogPayload, updateAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, UpdateAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./UpdateAnaesthesiaCriticalCareCaseLogPayloadModel.base"

/**
 * UpdateAnaesthesiaCriticalCareCaseLogPayloadModel
 */
export const UpdateAnaesthesiaCriticalCareCaseLogPayloadModel = UpdateAnaesthesiaCriticalCareCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
