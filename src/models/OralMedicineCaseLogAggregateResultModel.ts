import { Instance } from "mobx-state-tree"
import { OralMedicineCaseLogAggregateResultModelBase } from "./OralMedicineCaseLogAggregateResultModel.base"

/* The TypeScript type of an instance of OralMedicineCaseLogAggregateResultModel */
export interface OralMedicineCaseLogAggregateResultModelType extends Instance<typeof OralMedicineCaseLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for OralMedicineCaseLogAggregateResultModel */
export { selectFromOralMedicineCaseLogAggregateResult, oralMedicineCaseLogAggregateResultModelPrimitives, OralMedicineCaseLogAggregateResultModelSelector } from "./OralMedicineCaseLogAggregateResultModel.base"

/**
 * OralMedicineCaseLogAggregateResultModel
 */
export const OralMedicineCaseLogAggregateResultModel = OralMedicineCaseLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
