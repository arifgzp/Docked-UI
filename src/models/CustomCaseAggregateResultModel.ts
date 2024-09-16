import { Instance } from "mobx-state-tree"
import { CustomCaseAggregateResultModelBase } from "./CustomCaseAggregateResultModel.base"

/* The TypeScript type of an instance of CustomCaseAggregateResultModel */
export interface CustomCaseAggregateResultModelType extends Instance<typeof CustomCaseAggregateResultModel.Type> {}

/* A graphql query fragment builders for CustomCaseAggregateResultModel */
export { selectFromCustomCaseAggregateResult, customCaseAggregateResultModelPrimitives, CustomCaseAggregateResultModelSelector } from "./CustomCaseAggregateResultModel.base"

/**
 * CustomCaseAggregateResultModel
 */
export const CustomCaseAggregateResultModel = CustomCaseAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
