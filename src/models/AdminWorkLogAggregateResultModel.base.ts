/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AdminWorkLogAggregateResultBase
 * auto generated base class for the model AdminWorkLogAggregateResultModel.
 */
export const AdminWorkLogAggregateResultModelBase = ModelBase
  .named('AdminWorkLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("AdminWorkLogAggregateResult"), "AdminWorkLogAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    dateMin: types.union(types.undefined, types.null, types.frozen()),
    dateMax: types.union(types.undefined, types.null, types.frozen()),
    activityMin: types.union(types.undefined, types.null, types.string),
    activityMax: types.union(types.undefined, types.null, types.string),
    otherActivityMin: types.union(types.undefined, types.null, types.string),
    otherActivityMax: types.union(types.undefined, types.null, types.string),
    positionMin: types.union(types.undefined, types.null, types.string),
    positionMax: types.union(types.undefined, types.null, types.string),
    organisationMin: types.union(types.undefined, types.null, types.string),
    organisationMax: types.union(types.undefined, types.null, types.string),
    academicLogTypeMin: types.union(types.undefined, types.null, types.string),
    academicLogTypeMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AdminWorkLogAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get dateMin() { return this.__attr(`dateMin`) }
  get dateMax() { return this.__attr(`dateMax`) }
  get activityMin() { return this.__attr(`activityMin`) }
  get activityMax() { return this.__attr(`activityMax`) }
  get otherActivityMin() { return this.__attr(`otherActivityMin`) }
  get otherActivityMax() { return this.__attr(`otherActivityMax`) }
  get positionMin() { return this.__attr(`positionMin`) }
  get positionMax() { return this.__attr(`positionMax`) }
  get organisationMin() { return this.__attr(`organisationMin`) }
  get organisationMax() { return this.__attr(`organisationMax`) }
  get academicLogTypeMin() { return this.__attr(`academicLogTypeMin`) }
  get academicLogTypeMax() { return this.__attr(`academicLogTypeMax`) }
}
export function selectFromAdminWorkLogAggregateResult() {
  return new AdminWorkLogAggregateResultModelSelector()
}

export const adminWorkLogAggregateResultModelPrimitives = selectFromAdminWorkLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.activityMin.activityMax.otherActivityMin.otherActivityMax.positionMin.positionMax.organisationMin.organisationMax.academicLogTypeMin.academicLogTypeMax
