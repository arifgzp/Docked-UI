/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CaseLogAggregateResultBase
 * auto generated base class for the model CaseLogAggregateResultModel.
 */
export const CaseLogAggregateResultModelBase = ModelBase
  .named('CaseLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("CaseLogAggregateResult"), "CaseLogAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    logTypeMin: types.union(types.undefined, types.null, types.string),
    logTypeMax: types.union(types.undefined, types.null, types.string),
    rejectionMessageMin: types.union(types.undefined, types.null, types.string),
    rejectionMessageMax: types.union(types.undefined, types.null, types.string),
    rotationMin: types.union(types.undefined, types.null, types.string),
    rotationMax: types.union(types.undefined, types.null, types.string),
    hospitalMin: types.union(types.undefined, types.null, types.string),
    hospitalMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CaseLogAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get logTypeMin() { return this.__attr(`logTypeMin`) }
  get logTypeMax() { return this.__attr(`logTypeMax`) }
  get rejectionMessageMin() { return this.__attr(`rejectionMessageMin`) }
  get rejectionMessageMax() { return this.__attr(`rejectionMessageMax`) }
  get rotationMin() { return this.__attr(`rotationMin`) }
  get rotationMax() { return this.__attr(`rotationMax`) }
  get hospitalMin() { return this.__attr(`hospitalMin`) }
  get hospitalMax() { return this.__attr(`hospitalMax`) }
}
export function selectFromCaseLogAggregateResult() {
  return new CaseLogAggregateResultModelSelector()
}

export const caseLogAggregateResultModelPrimitives = selectFromCaseLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.logTypeMin.logTypeMax.rejectionMessageMin.rejectionMessageMax.rotationMin.rotationMax.hospitalMin.hospitalMax
