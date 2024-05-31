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
    dateMin: types.union(types.undefined, types.null, types.frozen()),
    dateMax: types.union(types.undefined, types.null, types.frozen()),
    hospitalMin: types.union(types.undefined, types.null, types.string),
    hospitalMax: types.union(types.undefined, types.null, types.string),
    facultyMin: types.union(types.undefined, types.null, types.string),
    facultyMax: types.union(types.undefined, types.null, types.string),
    medicalRegistrationNumberMin: types.union(types.undefined, types.null, types.string),
    medicalRegistrationNumberMax: types.union(types.undefined, types.null, types.string),
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
  get dateMin() { return this.__attr(`dateMin`) }
  get dateMax() { return this.__attr(`dateMax`) }
  get hospitalMin() { return this.__attr(`hospitalMin`) }
  get hospitalMax() { return this.__attr(`hospitalMax`) }
  get facultyMin() { return this.__attr(`facultyMin`) }
  get facultyMax() { return this.__attr(`facultyMax`) }
  get medicalRegistrationNumberMin() { return this.__attr(`medicalRegistrationNumberMin`) }
  get medicalRegistrationNumberMax() { return this.__attr(`medicalRegistrationNumberMax`) }
}
export function selectFromCaseLogAggregateResult() {
  return new CaseLogAggregateResultModelSelector()
}

export const caseLogAggregateResultModelPrimitives = selectFromCaseLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.hospitalMin.hospitalMax.facultyMin.facultyMax.medicalRegistrationNumberMin.medicalRegistrationNumberMax
