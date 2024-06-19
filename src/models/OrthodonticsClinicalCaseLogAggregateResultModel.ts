import { Instance } from "mobx-state-tree"
import { OrthodonticsClinicalCaseLogAggregateResultModelBase } from "./OrthodonticsClinicalCaseLogAggregateResultModel.base"

/* The TypeScript type of an instance of OrthodonticsClinicalCaseLogAggregateResultModel */
export interface OrthodonticsClinicalCaseLogAggregateResultModelType extends Instance<typeof OrthodonticsClinicalCaseLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for OrthodonticsClinicalCaseLogAggregateResultModel */
export { selectFromOrthodonticsClinicalCaseLogAggregateResult, orthodonticsClinicalCaseLogAggregateResultModelPrimitives, OrthodonticsClinicalCaseLogAggregateResultModelSelector } from "./OrthodonticsClinicalCaseLogAggregateResultModel.base"

/**
 * OrthodonticsClinicalCaseLogAggregateResultModel
 */
export const OrthodonticsClinicalCaseLogAggregateResultModel = OrthodonticsClinicalCaseLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
