/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FacultyAggregateResultBase
 * auto generated base class for the model FacultyAggregateResultModel.
 */
export const FacultyAggregateResultModelBase = ModelBase
  .named('FacultyAggregateResult')
  .props({
    __typename: types.optional(types.literal("FacultyAggregateResult"), "FacultyAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FacultyAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
}
export function selectFromFacultyAggregateResult() {
  return new FacultyAggregateResultModelSelector()
}

export const facultyAggregateResultModelPrimitives = selectFromFacultyAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax
