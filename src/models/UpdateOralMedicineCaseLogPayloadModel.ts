import { Instance } from "mobx-state-tree"
import { UpdateOralMedicineCaseLogPayloadModelBase } from "./UpdateOralMedicineCaseLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateOralMedicineCaseLogPayloadModel */
export interface UpdateOralMedicineCaseLogPayloadModelType extends Instance<typeof UpdateOralMedicineCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOralMedicineCaseLogPayloadModel */
export { selectFromUpdateOralMedicineCaseLogPayload, updateOralMedicineCaseLogPayloadModelPrimitives, UpdateOralMedicineCaseLogPayloadModelSelector } from "./UpdateOralMedicineCaseLogPayloadModel.base"

/**
 * UpdateOralMedicineCaseLogPayloadModel
 */
export const UpdateOralMedicineCaseLogPayloadModel = UpdateOralMedicineCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
