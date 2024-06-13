import { Instance } from "mobx-state-tree"
import { RotationAggregateResultModelBase } from "./RotationAggregateResultModel.base"

/* The TypeScript type of an instance of RotationAggregateResultModel */
export interface RotationAggregateResultModelType extends Instance<typeof RotationAggregateResultModel.Type> {}

/* A graphql query fragment builders for RotationAggregateResultModel */
export { selectFromRotationAggregateResult, rotationAggregateResultModelPrimitives, RotationAggregateResultModelSelector } from "./RotationAggregateResultModel.base"

/**
 * RotationAggregateResultModel
 */
export const RotationAggregateResultModel = RotationAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
