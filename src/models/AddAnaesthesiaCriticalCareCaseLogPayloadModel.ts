import { Instance } from "mobx-state-tree"
import { AddAnaesthesiaCriticalCareCaseLogPayloadModelBase } from "./AddAnaesthesiaCriticalCareCaseLogPayloadModel.base"

/* The TypeScript type of an instance of AddAnaesthesiaCriticalCareCaseLogPayloadModel */
export interface AddAnaesthesiaCriticalCareCaseLogPayloadModelType extends Instance<typeof AddAnaesthesiaCriticalCareCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddAnaesthesiaCriticalCareCaseLogPayloadModel */
export { selectFromAddAnaesthesiaCriticalCareCaseLogPayload, addAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, AddAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./AddAnaesthesiaCriticalCareCaseLogPayloadModel.base"

/**
 * AddAnaesthesiaCriticalCareCaseLogPayloadModel
 */
export const AddAnaesthesiaCriticalCareCaseLogPayloadModel = AddAnaesthesiaCriticalCareCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
