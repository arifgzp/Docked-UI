import { Instance } from "mobx-state-tree"
import { HospitalsAggregateResultModelBase } from "./HospitalsAggregateResultModel.base"

/* The TypeScript type of an instance of HospitalsAggregateResultModel */
export interface HospitalsAggregateResultModelType extends Instance<typeof HospitalsAggregateResultModel.Type> {}

/* A graphql query fragment builders for HospitalsAggregateResultModel */
export { selectFromHospitalsAggregateResult, hospitalsAggregateResultModelPrimitives, HospitalsAggregateResultModelSelector } from "./HospitalsAggregateResultModel.base"

/**
 * HospitalsAggregateResultModel
 */
export const HospitalsAggregateResultModel = HospitalsAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
