import { Instance } from "mobx-state-tree"
import { OrthodonticsCaseLogAggregateResultModelBase } from "./OrthodonticsCaseLogAggregateResultModel.base"

/* The TypeScript type of an instance of OrthodonticsCaseLogAggregateResultModel */
export interface OrthodonticsCaseLogAggregateResultModelType extends Instance<typeof OrthodonticsCaseLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for OrthodonticsCaseLogAggregateResultModel */
export { selectFromOrthodonticsCaseLogAggregateResult, orthodonticsCaseLogAggregateResultModelPrimitives, OrthodonticsCaseLogAggregateResultModelSelector } from "./OrthodonticsCaseLogAggregateResultModel.base"

/**
 * OrthodonticsCaseLogAggregateResultModel
 */
export const OrthodonticsCaseLogAggregateResultModel = OrthodonticsCaseLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
