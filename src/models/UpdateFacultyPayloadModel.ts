import { Instance } from "mobx-state-tree"
import { UpdateFacultyPayloadModelBase } from "./UpdateFacultyPayloadModel.base"

/* The TypeScript type of an instance of UpdateFacultyPayloadModel */
export interface UpdateFacultyPayloadModelType extends Instance<typeof UpdateFacultyPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateFacultyPayloadModel */
export { selectFromUpdateFacultyPayload, updateFacultyPayloadModelPrimitives, UpdateFacultyPayloadModelSelector } from "./UpdateFacultyPayloadModel.base"

/**
 * UpdateFacultyPayloadModel
 */
export const UpdateFacultyPayloadModel = UpdateFacultyPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
