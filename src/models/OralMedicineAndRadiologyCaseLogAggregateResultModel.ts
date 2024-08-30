import { Instance } from "mobx-state-tree"
import { OralMedicineAndRadiologyCaseLogAggregateResultModelBase } from "./OralMedicineAndRadiologyCaseLogAggregateResultModel.base"

/* The TypeScript type of an instance of OralMedicineAndRadiologyCaseLogAggregateResultModel */
export interface OralMedicineAndRadiologyCaseLogAggregateResultModelType extends Instance<typeof OralMedicineAndRadiologyCaseLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for OralMedicineAndRadiologyCaseLogAggregateResultModel */
export { selectFromOralMedicineAndRadiologyCaseLogAggregateResult, oralMedicineAndRadiologyCaseLogAggregateResultModelPrimitives, OralMedicineAndRadiologyCaseLogAggregateResultModelSelector } from "./OralMedicineAndRadiologyCaseLogAggregateResultModel.base"

/**
 * OralMedicineAndRadiologyCaseLogAggregateResultModel
 */
export const OralMedicineAndRadiologyCaseLogAggregateResultModel = OralMedicineAndRadiologyCaseLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
