import { Instance } from "mobx-state-tree"
import { AcademicLogAggregateResultModelBase } from "./AcademicLogAggregateResultModel.base"

/* The TypeScript type of an instance of AcademicLogAggregateResultModel */
export interface AcademicLogAggregateResultModelType extends Instance<typeof AcademicLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for AcademicLogAggregateResultModel */
export { selectFromAcademicLogAggregateResult, academicLogAggregateResultModelPrimitives, AcademicLogAggregateResultModelSelector } from "./AcademicLogAggregateResultModel.base"

/**
 * AcademicLogAggregateResultModel
 */
export const AcademicLogAggregateResultModel = AcademicLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
