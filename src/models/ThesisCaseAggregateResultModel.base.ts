/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ThesisCaseAggregateResultBase
 * auto generated base class for the model ThesisCaseAggregateResultModel.
 */
export const ThesisCaseAggregateResultModelBase = ModelBase
  .named('ThesisCaseAggregateResult')
  .props({
    __typename: types.optional(types.literal("ThesisCaseAggregateResult"), "ThesisCaseAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    caseNameMin: types.union(types.undefined, types.null, types.string),
    caseNameMax: types.union(types.undefined, types.null, types.string),
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

export class ThesisCaseAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get caseNameMin() { return this.__attr(`caseNameMin`) }
  get caseNameMax() { return this.__attr(`caseNameMax`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
}
export function selectFromThesisCaseAggregateResult() {
  return new ThesisCaseAggregateResultModelSelector()
}

export const thesisCaseAggregateResultModelPrimitives = selectFromThesisCaseAggregateResult().count.caseNameMin.caseNameMax.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax
