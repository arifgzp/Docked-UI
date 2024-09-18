/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserFeedbackAggregateResultBase
 * auto generated base class for the model UserFeedbackAggregateResultModel.
 */
export const UserFeedbackAggregateResultModelBase = ModelBase
  .named('UserFeedbackAggregateResult')
  .props({
    __typename: types.optional(types.literal("UserFeedbackAggregateResult"), "UserFeedbackAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    titleMin: types.union(types.undefined, types.null, types.string),
    titleMax: types.union(types.undefined, types.null, types.string),
    descriptionMin: types.union(types.undefined, types.null, types.string),
    descriptionMax: types.union(types.undefined, types.null, types.string),
    userEmailMin: types.union(types.undefined, types.null, types.string),
    userEmailMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserFeedbackAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get titleMin() { return this.__attr(`titleMin`) }
  get titleMax() { return this.__attr(`titleMax`) }
  get descriptionMin() { return this.__attr(`descriptionMin`) }
  get descriptionMax() { return this.__attr(`descriptionMax`) }
  get userEmailMin() { return this.__attr(`userEmailMin`) }
  get userEmailMax() { return this.__attr(`userEmailMax`) }
}
export function selectFromUserFeedbackAggregateResult() {
  return new UserFeedbackAggregateResultModelSelector()
}

export const userFeedbackAggregateResultModelPrimitives = selectFromUserFeedbackAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.titleMin.titleMax.descriptionMin.descriptionMax.userEmailMin.userEmailMax
