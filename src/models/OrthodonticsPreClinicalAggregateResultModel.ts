import { Instance } from "mobx-state-tree"
import { OrthodonticsPreClinicalAggregateResultModelBase } from "./OrthodonticsPreClinicalAggregateResultModel.base"

/* The TypeScript type of an instance of OrthodonticsPreClinicalAggregateResultModel */
export interface OrthodonticsPreClinicalAggregateResultModelType extends Instance<typeof OrthodonticsPreClinicalAggregateResultModel.Type> {}

/* A graphql query fragment builders for OrthodonticsPreClinicalAggregateResultModel */
export { selectFromOrthodonticsPreClinicalAggregateResult, orthodonticsPreClinicalAggregateResultModelPrimitives, OrthodonticsPreClinicalAggregateResultModelSelector } from "./OrthodonticsPreClinicalAggregateResultModel.base"

/**
 * OrthodonticsPreClinicalAggregateResultModel
 */
export const OrthodonticsPreClinicalAggregateResultModel = OrthodonticsPreClinicalAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
