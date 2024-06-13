import { Instance } from "mobx-state-tree"
import { DeleteFacultyPayloadModelBase } from "./DeleteFacultyPayloadModel.base"

/* The TypeScript type of an instance of DeleteFacultyPayloadModel */
export interface DeleteFacultyPayloadModelType extends Instance<typeof DeleteFacultyPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteFacultyPayloadModel */
export { selectFromDeleteFacultyPayload, deleteFacultyPayloadModelPrimitives, DeleteFacultyPayloadModelSelector } from "./DeleteFacultyPayloadModel.base"

/**
 * DeleteFacultyPayloadModel
 */
export const DeleteFacultyPayloadModel = DeleteFacultyPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
