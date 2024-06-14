import { Instance } from "mobx-state-tree"
import { DeleteAnaesthesiaCriticalCareCaseLogPayloadModelBase } from "./DeleteAnaesthesiaCriticalCareCaseLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteAnaesthesiaCriticalCareCaseLogPayloadModel */
export interface DeleteAnaesthesiaCriticalCareCaseLogPayloadModelType extends Instance<typeof DeleteAnaesthesiaCriticalCareCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteAnaesthesiaCriticalCareCaseLogPayloadModel */
export { selectFromDeleteAnaesthesiaCriticalCareCaseLogPayload, deleteAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, DeleteAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./DeleteAnaesthesiaCriticalCareCaseLogPayloadModel.base"

/**
 * DeleteAnaesthesiaCriticalCareCaseLogPayloadModel
 */
export const DeleteAnaesthesiaCriticalCareCaseLogPayloadModel = DeleteAnaesthesiaCriticalCareCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
