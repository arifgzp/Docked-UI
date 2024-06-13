import { Instance } from "mobx-state-tree"
import { FacultyAggregateResultModelBase } from "./FacultyAggregateResultModel.base"

/* The TypeScript type of an instance of FacultyAggregateResultModel */
export interface FacultyAggregateResultModelType extends Instance<typeof FacultyAggregateResultModel.Type> {}

/* A graphql query fragment builders for FacultyAggregateResultModel */
export { selectFromFacultyAggregateResult, facultyAggregateResultModelPrimitives, FacultyAggregateResultModelSelector } from "./FacultyAggregateResultModel.base"

/**
 * FacultyAggregateResultModel
 */
export const FacultyAggregateResultModel = FacultyAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
