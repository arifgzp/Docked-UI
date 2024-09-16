import { Instance } from "mobx-state-tree"
import { CaseAggregateResultModelBase } from "./CaseAggregateResultModel.base"

/* The TypeScript type of an instance of CaseAggregateResultModel */
export interface CaseAggregateResultModelType extends Instance<typeof CaseAggregateResultModel.Type> {}

/* A graphql query fragment builders for CaseAggregateResultModel */
export { selectFromCaseAggregateResult, caseAggregateResultModelPrimitives, CaseAggregateResultModelSelector } from "./CaseAggregateResultModel.base"

/**
 * CaseAggregateResultModel
 */
export const CaseAggregateResultModel = CaseAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
