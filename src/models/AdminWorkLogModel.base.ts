/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AdminWorkLogBase
 * auto generated base class for the model AdminWorkLogModel.
 */
export const AdminWorkLogModelBase = ModelBase
  .named('AdminWorkLog')
  .props({
    __typename: types.optional(types.literal("AdminWorkLog"), "AdminWorkLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    activity: types.union(types.undefined, types.null, types.string),
    otherActivity: types.union(types.undefined, types.null, types.string),
    position: types.union(types.undefined, types.null, types.string),
    organisation: types.union(types.undefined, types.null, types.string),
    academicLogType: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AdminWorkLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get activity() { return this.__attr(`activity`) }
  get otherActivity() { return this.__attr(`otherActivity`) }
  get position() { return this.__attr(`position`) }
  get organisation() { return this.__attr(`organisation`) }
  get academicLogType() { return this.__attr(`academicLogType`) }
}
export function selectFromAdminWorkLog() {
  return new AdminWorkLogModelSelector()
}

export const adminWorkLogModelPrimitives = selectFromAdminWorkLog().createdOn.updatedOn.date.activity.otherActivity.position.organisation.academicLogType
