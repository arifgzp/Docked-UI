import { Instance } from "mobx-state-tree"
import { OralRadiologyAggregateResultModelBase } from "./OralRadiologyAggregateResultModel.base"

/* The TypeScript type of an instance of OralRadiologyAggregateResultModel */
export interface OralRadiologyAggregateResultModelType extends Instance<typeof OralRadiologyAggregateResultModel.Type> {}

/* A graphql query fragment builders for OralRadiologyAggregateResultModel */
export { selectFromOralRadiologyAggregateResult, oralRadiologyAggregateResultModelPrimitives, OralRadiologyAggregateResultModelSelector } from "./OralRadiologyAggregateResultModel.base"

/**
 * OralRadiologyAggregateResultModel
 */
export const OralRadiologyAggregateResultModel = OralRadiologyAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
