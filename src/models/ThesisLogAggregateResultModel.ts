import { Instance } from "mobx-state-tree"
import { ThesisLogAggregateResultModelBase } from "./ThesisLogAggregateResultModel.base"

/* The TypeScript type of an instance of ThesisLogAggregateResultModel */
export interface ThesisLogAggregateResultModelType extends Instance<typeof ThesisLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for ThesisLogAggregateResultModel */
export { selectFromThesisLogAggregateResult, thesisLogAggregateResultModelPrimitives, ThesisLogAggregateResultModelSelector } from "./ThesisLogAggregateResultModel.base"

/**
 * ThesisLogAggregateResultModel
 */
export const ThesisLogAggregateResultModel = ThesisLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
