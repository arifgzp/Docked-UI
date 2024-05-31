import { Instance } from "mobx-state-tree"
import { HospitalAggregateResultModelBase } from "./HospitalAggregateResultModel.base"

/* The TypeScript type of an instance of HospitalAggregateResultModel */
export interface HospitalAggregateResultModelType extends Instance<typeof HospitalAggregateResultModel.Type> {}

/* A graphql query fragment builders for HospitalAggregateResultModel */
export { selectFromHospitalAggregateResult, hospitalAggregateResultModelPrimitives, HospitalAggregateResultModelSelector } from "./HospitalAggregateResultModel.base"

/**
 * HospitalAggregateResultModel
 */
export const HospitalAggregateResultModel = HospitalAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
