import { Instance } from "mobx-state-tree"
import { CaseLogAggregateResultModelBase } from "./CaseLogAggregateResultModel.base"

/* The TypeScript type of an instance of CaseLogAggregateResultModel */
export interface CaseLogAggregateResultModelType extends Instance<typeof CaseLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for CaseLogAggregateResultModel */
export { selectFromCaseLogAggregateResult, caseLogAggregateResultModelPrimitives, CaseLogAggregateResultModelSelector } from "./CaseLogAggregateResultModel.base"

/**
 * CaseLogAggregateResultModel
 */
export const CaseLogAggregateResultModel = CaseLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
