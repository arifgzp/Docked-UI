/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserFeedbackBase
 * auto generated base class for the model UserFeedbackModel.
 */
export const UserFeedbackModelBase = ModelBase
  .named('UserFeedback')
  .props({
    __typename: types.optional(types.literal("UserFeedback"), "UserFeedback"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    title: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    userEmail: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserFeedbackModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get title() { return this.__attr(`title`) }
  get description() { return this.__attr(`description`) }
  get userEmail() { return this.__attr(`userEmail`) }
}
export function selectFromUserFeedback() {
  return new UserFeedbackModelSelector()
}

export const userFeedbackModelPrimitives = selectFromUserFeedback().createdOn.updatedOn.title.description.userEmail
