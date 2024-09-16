/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FormLabelsAggregateResultBase
 * auto generated base class for the model FormLabelsAggregateResultModel.
 */
export const FormLabelsAggregateResultModelBase = ModelBase
  .named('FormLabelsAggregateResult')
  .props({
    __typename: types.optional(types.literal("FormLabelsAggregateResult"), "FormLabelsAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    labelMin: types.union(types.undefined, types.null, types.string),
    labelMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FormLabelsAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get labelMin() { return this.__attr(`labelMin`) }
  get labelMax() { return this.__attr(`labelMax`) }
}
export function selectFromFormLabelsAggregateResult() {
  return new FormLabelsAggregateResultModelSelector()
}

export const formLabelsAggregateResultModelPrimitives = selectFromFormLabelsAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.labelMin.labelMax
