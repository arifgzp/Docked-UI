import { Instance } from "mobx-state-tree"
import { AddAcademicLogPayloadModelBase } from "./AddAcademicLogPayloadModel.base"

/* The TypeScript type of an instance of AddAcademicLogPayloadModel */
export interface AddAcademicLogPayloadModelType extends Instance<typeof AddAcademicLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddAcademicLogPayloadModel */
export { selectFromAddAcademicLogPayload, addAcademicLogPayloadModelPrimitives, AddAcademicLogPayloadModelSelector } from "./AddAcademicLogPayloadModel.base"

/**
 * AddAcademicLogPayloadModel
 */
export const AddAcademicLogPayloadModel = AddAcademicLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
