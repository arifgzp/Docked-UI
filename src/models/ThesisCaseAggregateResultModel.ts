import { Instance } from "mobx-state-tree"
import { ThesisCaseAggregateResultModelBase } from "./ThesisCaseAggregateResultModel.base"

/* The TypeScript type of an instance of ThesisCaseAggregateResultModel */
export interface ThesisCaseAggregateResultModelType extends Instance<typeof ThesisCaseAggregateResultModel.Type> {}

/* A graphql query fragment builders for ThesisCaseAggregateResultModel */
export { selectFromThesisCaseAggregateResult, thesisCaseAggregateResultModelPrimitives, ThesisCaseAggregateResultModelSelector } from "./ThesisCaseAggregateResultModel.base"

/**
 * ThesisCaseAggregateResultModel
 */
export const ThesisCaseAggregateResultModel = ThesisCaseAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
