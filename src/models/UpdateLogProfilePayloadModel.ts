import { Instance } from "mobx-state-tree"
import { UpdateLogProfilePayloadModelBase } from "./UpdateLogProfilePayloadModel.base"

/* The TypeScript type of an instance of UpdateLogProfilePayloadModel */
export interface UpdateLogProfilePayloadModelType extends Instance<typeof UpdateLogProfilePayloadModel.Type> {}

/* A graphql query fragment builders for UpdateLogProfilePayloadModel */
export { selectFromUpdateLogProfilePayload, updateLogProfilePayloadModelPrimitives, UpdateLogProfilePayloadModelSelector } from "./UpdateLogProfilePayloadModel.base"

/**
 * UpdateLogProfilePayloadModel
 */
export const UpdateLogProfilePayloadModel = UpdateLogProfilePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
