import { Instance } from "mobx-state-tree"
import { LogProfileAggregateResultModelBase } from "./LogProfileAggregateResultModel.base"

/* The TypeScript type of an instance of LogProfileAggregateResultModel */
export interface LogProfileAggregateResultModelType extends Instance<typeof LogProfileAggregateResultModel.Type> {}

/* A graphql query fragment builders for LogProfileAggregateResultModel */
export { selectFromLogProfileAggregateResult, logProfileAggregateResultModelPrimitives, LogProfileAggregateResultModelSelector } from "./LogProfileAggregateResultModel.base"

/**
 * LogProfileAggregateResultModel
 */
export const LogProfileAggregateResultModel = LogProfileAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
