import { Instance } from "mobx-state-tree"
import { AddFacultyPayloadModelBase } from "./AddFacultyPayloadModel.base"

/* The TypeScript type of an instance of AddFacultyPayloadModel */
export interface AddFacultyPayloadModelType extends Instance<typeof AddFacultyPayloadModel.Type> {}

/* A graphql query fragment builders for AddFacultyPayloadModel */
export { selectFromAddFacultyPayload, addFacultyPayloadModelPrimitives, AddFacultyPayloadModelSelector } from "./AddFacultyPayloadModel.base"

/**
 * AddFacultyPayloadModel
 */
export const AddFacultyPayloadModel = AddFacultyPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
