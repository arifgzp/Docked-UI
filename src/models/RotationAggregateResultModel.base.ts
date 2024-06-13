/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * RotationAggregateResultBase
 * auto generated base class for the model RotationAggregateResultModel.
 */
export const RotationAggregateResultModelBase = ModelBase
  .named('RotationAggregateResult')
  .props({
    __typename: types.optional(types.literal("RotationAggregateResult"), "RotationAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    departmentMin: types.union(types.undefined, types.null, types.string),
    departmentMax: types.union(types.undefined, types.null, types.string),
    fromMin: types.union(types.undefined, types.null, types.frozen()),
    fromMax: types.union(types.undefined, types.null, types.frozen()),
    toMin: types.union(types.undefined, types.null, types.frozen()),
    toMax: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RotationAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get departmentMin() { return this.__attr(`departmentMin`) }
  get departmentMax() { return this.__attr(`departmentMax`) }
  get fromMin() { return this.__attr(`fromMin`) }
  get fromMax() { return this.__attr(`fromMax`) }
  get toMin() { return this.__attr(`toMin`) }
  get toMax() { return this.__attr(`toMax`) }
}
export function selectFromRotationAggregateResult() {
  return new RotationAggregateResultModelSelector()
}

export const rotationAggregateResultModelPrimitives = selectFromRotationAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.departmentMin.departmentMax.fromMin.fromMax.toMin.toMax
