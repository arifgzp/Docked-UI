import { Instance } from "mobx-state-tree"
import { DeleteOralMedicineCaseLogPayloadModelBase } from "./DeleteOralMedicineCaseLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteOralMedicineCaseLogPayloadModel */
export interface DeleteOralMedicineCaseLogPayloadModelType extends Instance<typeof DeleteOralMedicineCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteOralMedicineCaseLogPayloadModel */
export { selectFromDeleteOralMedicineCaseLogPayload, deleteOralMedicineCaseLogPayloadModelPrimitives, DeleteOralMedicineCaseLogPayloadModelSelector } from "./DeleteOralMedicineCaseLogPayloadModel.base"

/**
 * DeleteOralMedicineCaseLogPayloadModel
 */
export const DeleteOralMedicineCaseLogPayloadModel = DeleteOralMedicineCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
