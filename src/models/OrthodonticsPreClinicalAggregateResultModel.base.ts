/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrthodonticsPreClinicalAggregateResultBase
 * auto generated base class for the model OrthodonticsPreClinicalAggregateResultModel.
 */
export const OrthodonticsPreClinicalAggregateResultModelBase = ModelBase
  .named('OrthodonticsPreClinicalAggregateResult')
  .props({
    __typename: types.optional(types.literal("OrthodonticsPreClinicalAggregateResult"), "OrthodonticsPreClinicalAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    dateMin: types.union(types.undefined, types.null, types.frozen()),
    dateMax: types.union(types.undefined, types.null, types.frozen()),
    hospitalMin: types.union(types.undefined, types.null, types.string),
    hospitalMax: types.union(types.undefined, types.null, types.string),
    rotationMin: types.union(types.undefined, types.null, types.string),
    rotationMax: types.union(types.undefined, types.null, types.string),
    facultyMin: types.union(types.undefined, types.null, types.string),
    facultyMax: types.union(types.undefined, types.null, types.string),
    conductMin: types.union(types.undefined, types.null, types.string),
    conductMax: types.union(types.undefined, types.null, types.string),
    caseTypeMin: types.union(types.undefined, types.null, types.string),
    caseTypeMax: types.union(types.undefined, types.null, types.string),
    remarksMin: types.union(types.undefined, types.null, types.string),
    remarksMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrthodonticsPreClinicalAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get dateMin() { return this.__attr(`dateMin`) }
  get dateMax() { return this.__attr(`dateMax`) }
  get hospitalMin() { return this.__attr(`hospitalMin`) }
  get hospitalMax() { return this.__attr(`hospitalMax`) }
  get rotationMin() { return this.__attr(`rotationMin`) }
  get rotationMax() { return this.__attr(`rotationMax`) }
  get facultyMin() { return this.__attr(`facultyMin`) }
  get facultyMax() { return this.__attr(`facultyMax`) }
  get conductMin() { return this.__attr(`conductMin`) }
  get conductMax() { return this.__attr(`conductMax`) }
  get caseTypeMin() { return this.__attr(`caseTypeMin`) }
  get caseTypeMax() { return this.__attr(`caseTypeMax`) }
  get remarksMin() { return this.__attr(`remarksMin`) }
  get remarksMax() { return this.__attr(`remarksMax`) }
}
export function selectFromOrthodonticsPreClinicalAggregateResult() {
  return new OrthodonticsPreClinicalAggregateResultModelSelector()
}

export const orthodonticsPreClinicalAggregateResultModelPrimitives = selectFromOrthodonticsPreClinicalAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.hospitalMin.hospitalMax.rotationMin.rotationMax.facultyMin.facultyMax.conductMin.conductMax.caseTypeMin.caseTypeMax.remarksMin.remarksMax
