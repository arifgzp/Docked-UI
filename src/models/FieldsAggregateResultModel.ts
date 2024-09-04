import { Instance } from "mobx-state-tree"
import { FieldsAggregateResultModelBase } from "./FieldsAggregateResultModel.base"

/* The TypeScript type of an instance of FieldsAggregateResultModel */
export interface FieldsAggregateResultModelType extends Instance<typeof FieldsAggregateResultModel.Type> {}

/* A graphql query fragment builders for FieldsAggregateResultModel */
export { selectFromFieldsAggregateResult, fieldsAggregateResultModelPrimitives, FieldsAggregateResultModelSelector } from "./FieldsAggregateResultModel.base"

/**
 * FieldsAggregateResultModel
 */
export const FieldsAggregateResultModel = FieldsAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
