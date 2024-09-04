/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ThesisLogAggregateResultBase
 * auto generated base class for the model ThesisLogAggregateResultModel.
 */
export const ThesisLogAggregateResultModelBase = ModelBase
  .named('ThesisLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("ThesisLogAggregateResult"), "ThesisLogAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    thesisNameMin: types.union(types.undefined, types.null, types.string),
    thesisNameMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ThesisLogAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get thesisNameMin() { return this.__attr(`thesisNameMin`) }
  get thesisNameMax() { return this.__attr(`thesisNameMax`) }
}
export function selectFromThesisLogAggregateResult() {
  return new ThesisLogAggregateResultModelSelector()
}

export const thesisLogAggregateResultModelPrimitives = selectFromThesisLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.thesisNameMin.thesisNameMax
