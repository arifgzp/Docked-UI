/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AcademicLogAggregateResultBase
 * auto generated base class for the model AcademicLogAggregateResultModel.
 */
export const AcademicLogAggregateResultModelBase = ModelBase
  .named('AcademicLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("AcademicLogAggregateResult"), "AcademicLogAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    dateMin: types.union(types.undefined, types.null, types.frozen()),
    dateMax: types.union(types.undefined, types.null, types.frozen()),
    positionMin: types.union(types.undefined, types.null, types.string),
    positionMax: types.union(types.undefined, types.null, types.string),
    titleMin: types.union(types.undefined, types.null, types.string),
    titleMax: types.union(types.undefined, types.null, types.string),
    organiserMin: types.union(types.undefined, types.null, types.string),
    organiserMax: types.union(types.undefined, types.null, types.string),
    academicLogTypeMin: types.union(types.undefined, types.null, types.string),
    academicLogTypeMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AcademicLogAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get dateMin() { return this.__attr(`dateMin`) }
  get dateMax() { return this.__attr(`dateMax`) }
  get positionMin() { return this.__attr(`positionMin`) }
  get positionMax() { return this.__attr(`positionMax`) }
  get titleMin() { return this.__attr(`titleMin`) }
  get titleMax() { return this.__attr(`titleMax`) }
  get organiserMin() { return this.__attr(`organiserMin`) }
  get organiserMax() { return this.__attr(`organiserMax`) }
  get academicLogTypeMin() { return this.__attr(`academicLogTypeMin`) }
  get academicLogTypeMax() { return this.__attr(`academicLogTypeMax`) }
}
export function selectFromAcademicLogAggregateResult() {
  return new AcademicLogAggregateResultModelSelector()
}

export const academicLogAggregateResultModelPrimitives = selectFromAcademicLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.positionMin.positionMax.titleMin.titleMax.organiserMin.organiserMax.academicLogTypeMin.academicLogTypeMax
