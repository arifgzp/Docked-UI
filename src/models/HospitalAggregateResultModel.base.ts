/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * HospitalAggregateResultBase
 * auto generated base class for the model HospitalAggregateResultModel.
 */
export const HospitalAggregateResultModelBase = ModelBase
  .named('HospitalAggregateResult')
  .props({
    __typename: types.optional(types.literal("HospitalAggregateResult"), "HospitalAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    nameMin: types.union(types.undefined, types.null, types.string),
    nameMax: types.union(types.undefined, types.null, types.string),
    registeredNameMin: types.union(types.undefined, types.null, types.string),
    registeredNameMax: types.union(types.undefined, types.null, types.string),
    gstinMin: types.union(types.undefined, types.null, types.string),
    gstinMax: types.union(types.undefined, types.null, types.string),
    addressMin: types.union(types.undefined, types.null, types.string),
    addressMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class HospitalAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get nameMin() { return this.__attr(`nameMin`) }
  get nameMax() { return this.__attr(`nameMax`) }
  get registeredNameMin() { return this.__attr(`registeredNameMin`) }
  get registeredNameMax() { return this.__attr(`registeredNameMax`) }
  get gstinMin() { return this.__attr(`gstinMin`) }
  get gstinMax() { return this.__attr(`gstinMax`) }
  get addressMin() { return this.__attr(`addressMin`) }
  get addressMax() { return this.__attr(`addressMax`) }
}
export function selectFromHospitalAggregateResult() {
  return new HospitalAggregateResultModelSelector()
}

export const hospitalAggregateResultModelPrimitives = selectFromHospitalAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.nameMin.nameMax.registeredNameMin.registeredNameMax.gstinMin.gstinMax.addressMin.addressMax
