import { Instance } from "mobx-state-tree"
import { UpdateAcademicLogPayloadModelBase } from "./UpdateAcademicLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateAcademicLogPayloadModel */
export interface UpdateAcademicLogPayloadModelType extends Instance<typeof UpdateAcademicLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateAcademicLogPayloadModel */
export { selectFromUpdateAcademicLogPayload, updateAcademicLogPayloadModelPrimitives, UpdateAcademicLogPayloadModelSelector } from "./UpdateAcademicLogPayloadModel.base"

/**
 * UpdateAcademicLogPayloadModel
 */
export const UpdateAcademicLogPayloadModel = UpdateAcademicLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
