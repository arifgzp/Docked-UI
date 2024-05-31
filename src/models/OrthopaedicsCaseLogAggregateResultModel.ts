import { Instance } from "mobx-state-tree"
import { OrthopaedicsCaseLogAggregateResultModelBase } from "./OrthopaedicsCaseLogAggregateResultModel.base"

/* The TypeScript type of an instance of OrthopaedicsCaseLogAggregateResultModel */
export interface OrthopaedicsCaseLogAggregateResultModelType extends Instance<typeof OrthopaedicsCaseLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for OrthopaedicsCaseLogAggregateResultModel */
export { selectFromOrthopaedicsCaseLogAggregateResult, orthopaedicsCaseLogAggregateResultModelPrimitives, OrthopaedicsCaseLogAggregateResultModelSelector } from "./OrthopaedicsCaseLogAggregateResultModel.base"

/**
 * OrthopaedicsCaseLogAggregateResultModel
 */
export const OrthopaedicsCaseLogAggregateResultModel = OrthopaedicsCaseLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
