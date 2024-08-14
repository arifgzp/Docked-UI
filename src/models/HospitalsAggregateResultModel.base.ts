/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * HospitalsAggregateResultBase
 * auto generated base class for the model HospitalsAggregateResultModel.
 */
export const HospitalsAggregateResultModelBase = ModelBase
  .named('HospitalsAggregateResult')
  .props({
    __typename: types.optional(types.literal("HospitalsAggregateResult"), "HospitalsAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    nameMin: types.union(types.undefined, types.null, types.string),
    nameMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class HospitalsAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get nameMin() { return this.__attr(`nameMin`) }
  get nameMax() { return this.__attr(`nameMax`) }
}
export function selectFromHospitalsAggregateResult() {
  return new HospitalsAggregateResultModelSelector()
}

export const hospitalsAggregateResultModelPrimitives = selectFromHospitalsAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.nameMin.nameMax