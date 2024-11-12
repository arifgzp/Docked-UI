import { Instance } from "mobx-state-tree"
import { OralMedicineCaseLogModelBase } from "./OralMedicineCaseLogModel.base"

/* The TypeScript type of an instance of OralMedicineCaseLogModel */
export interface OralMedicineCaseLogModelType extends Instance<typeof OralMedicineCaseLogModel.Type> {}

/* A graphql query fragment builders for OralMedicineCaseLogModel */
export { selectFromOralMedicineCaseLog, oralMedicineCaseLogModelPrimitives, OralMedicineCaseLogModelSelector } from "./OralMedicineCaseLogModel.base"

/**
 * OralMedicineCaseLogModel
 */
export const OralMedicineCaseLogModel = OralMedicineCaseLogModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
