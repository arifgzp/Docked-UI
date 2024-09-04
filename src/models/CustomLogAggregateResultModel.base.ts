/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CustomLogAggregateResultBase
 * auto generated base class for the model CustomLogAggregateResultModel.
 */
export const CustomLogAggregateResultModelBase = ModelBase
  .named('CustomLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("CustomLogAggregateResult"), "CustomLogAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    customNameMin: types.union(types.undefined, types.null, types.string),
    customNameMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CustomLogAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get customNameMin() { return this.__attr(`customNameMin`) }
  get customNameMax() { return this.__attr(`customNameMax`) }
}
export function selectFromCustomLogAggregateResult() {
  return new CustomLogAggregateResultModelSelector()
}

export const customLogAggregateResultModelPrimitives = selectFromCustomLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.customNameMin.customNameMax
