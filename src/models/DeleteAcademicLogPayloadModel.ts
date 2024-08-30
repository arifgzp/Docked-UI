import { Instance } from "mobx-state-tree"
import { DeleteAcademicLogPayloadModelBase } from "./DeleteAcademicLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteAcademicLogPayloadModel */
export interface DeleteAcademicLogPayloadModelType extends Instance<typeof DeleteAcademicLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteAcademicLogPayloadModel */
export { selectFromDeleteAcademicLogPayload, deleteAcademicLogPayloadModelPrimitives, DeleteAcademicLogPayloadModelSelector } from "./DeleteAcademicLogPayloadModel.base"

/**
 * DeleteAcademicLogPayloadModel
 */
export const DeleteAcademicLogPayloadModel = DeleteAcademicLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
