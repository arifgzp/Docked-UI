import { Instance } from "mobx-state-tree"
import { DeleteLogProfilePayloadModelBase } from "./DeleteLogProfilePayloadModel.base"

/* The TypeScript type of an instance of DeleteLogProfilePayloadModel */
export interface DeleteLogProfilePayloadModelType extends Instance<typeof DeleteLogProfilePayloadModel.Type> {}

/* A graphql query fragment builders for DeleteLogProfilePayloadModel */
export { selectFromDeleteLogProfilePayload, deleteLogProfilePayloadModelPrimitives, DeleteLogProfilePayloadModelSelector } from "./DeleteLogProfilePayloadModel.base"

/**
 * DeleteLogProfilePayloadModel
 */
export const DeleteLogProfilePayloadModel = DeleteLogProfilePayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
