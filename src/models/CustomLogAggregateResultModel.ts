import { Instance } from "mobx-state-tree"
import { CustomLogAggregateResultModelBase } from "./CustomLogAggregateResultModel.base"

/* The TypeScript type of an instance of CustomLogAggregateResultModel */
export interface CustomLogAggregateResultModelType extends Instance<typeof CustomLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for CustomLogAggregateResultModel */
export { selectFromCustomLogAggregateResult, customLogAggregateResultModelPrimitives, CustomLogAggregateResultModelSelector } from "./CustomLogAggregateResultModel.base"

/**
 * CustomLogAggregateResultModel
 */
export const CustomLogAggregateResultModel = CustomLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
