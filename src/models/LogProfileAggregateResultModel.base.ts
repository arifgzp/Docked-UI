/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LogProfileAggregateResultBase
 * auto generated base class for the model LogProfileAggregateResultModel.
 */
export const LogProfileAggregateResultModelBase = ModelBase
  .named('LogProfileAggregateResult')
  .props({
    __typename: types.optional(types.literal("LogProfileAggregateResult"), "LogProfileAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    hospitalMin: types.union(types.undefined, types.null, types.string),
    hospitalMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LogProfileAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get hospitalMin() { return this.__attr(`hospitalMin`) }
  get hospitalMax() { return this.__attr(`hospitalMax`) }
}
export function selectFromLogProfileAggregateResult() {
  return new LogProfileAggregateResultModelSelector()
}

export const logProfileAggregateResultModelPrimitives = selectFromLogProfileAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.hospitalMin.hospitalMax
