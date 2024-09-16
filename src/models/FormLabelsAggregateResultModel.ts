import { Instance } from "mobx-state-tree"
import { FormLabelsAggregateResultModelBase } from "./FormLabelsAggregateResultModel.base"

/* The TypeScript type of an instance of FormLabelsAggregateResultModel */
export interface FormLabelsAggregateResultModelType extends Instance<typeof FormLabelsAggregateResultModel.Type> {}

/* A graphql query fragment builders for FormLabelsAggregateResultModel */
export { selectFromFormLabelsAggregateResult, formLabelsAggregateResultModelPrimitives, FormLabelsAggregateResultModelSelector } from "./FormLabelsAggregateResultModel.base"

/**
 * FormLabelsAggregateResultModel
 */
export const FormLabelsAggregateResultModel = FormLabelsAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
