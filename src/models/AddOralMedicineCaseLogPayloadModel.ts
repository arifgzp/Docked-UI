import { Instance } from "mobx-state-tree"
import { AddOralMedicineCaseLogPayloadModelBase } from "./AddOralMedicineCaseLogPayloadModel.base"

/* The TypeScript type of an instance of AddOralMedicineCaseLogPayloadModel */
export interface AddOralMedicineCaseLogPayloadModelType extends Instance<typeof AddOralMedicineCaseLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddOralMedicineCaseLogPayloadModel */
export { selectFromAddOralMedicineCaseLogPayload, addOralMedicineCaseLogPayloadModelPrimitives, AddOralMedicineCaseLogPayloadModelSelector } from "./AddOralMedicineCaseLogPayloadModel.base"

/**
 * AddOralMedicineCaseLogPayloadModel
 */
export const AddOralMedicineCaseLogPayloadModel = AddOralMedicineCaseLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
