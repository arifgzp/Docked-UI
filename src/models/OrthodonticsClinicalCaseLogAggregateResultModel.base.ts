/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrthodonticsClinicalCaseLogAggregateResultBase
 * auto generated base class for the model OrthodonticsClinicalCaseLogAggregateResultModel.
 */
export const OrthodonticsClinicalCaseLogAggregateResultModelBase = ModelBase
  .named('OrthodonticsClinicalCaseLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("OrthodonticsClinicalCaseLogAggregateResult"), "OrthodonticsClinicalCaseLogAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    dateMin: types.union(types.undefined, types.null, types.frozen()),
    dateMax: types.union(types.undefined, types.null, types.frozen()),
    patientAgeMin: types.union(types.undefined, types.null, types.string),
    patientAgeMax: types.union(types.undefined, types.null, types.string),
    patientSexMin: types.union(types.undefined, types.null, types.string),
    patientSexMax: types.union(types.undefined, types.null, types.string),
    hospitalMin: types.union(types.undefined, types.null, types.string),
    hospitalMax: types.union(types.undefined, types.null, types.string),
    rotationMin: types.union(types.undefined, types.null, types.string),
    rotationMax: types.union(types.undefined, types.null, types.string),
    facultyMin: types.union(types.undefined, types.null, types.string),
    facultyMax: types.union(types.undefined, types.null, types.string),
    diagnosisMin: types.union(types.undefined, types.null, types.string),
    diagnosisMax: types.union(types.undefined, types.null, types.string),
    techniqueUsedMin: types.union(types.undefined, types.null, types.string),
    techniqueUsedMax: types.union(types.undefined, types.null, types.string),
    outcomeMin: types.union(types.undefined, types.null, types.string),
    outcomeMax: types.union(types.undefined, types.null, types.string),
    caseTypeMin: types.union(types.undefined, types.null, types.string),
    caseTypeMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrthodonticsClinicalCaseLogAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get dateMin() { return this.__attr(`dateMin`) }
  get dateMax() { return this.__attr(`dateMax`) }
  get patientAgeMin() { return this.__attr(`patientAgeMin`) }
  get patientAgeMax() { return this.__attr(`patientAgeMax`) }
  get patientSexMin() { return this.__attr(`patientSexMin`) }
  get patientSexMax() { return this.__attr(`patientSexMax`) }
  get hospitalMin() { return this.__attr(`hospitalMin`) }
  get hospitalMax() { return this.__attr(`hospitalMax`) }
  get rotationMin() { return this.__attr(`rotationMin`) }
  get rotationMax() { return this.__attr(`rotationMax`) }
  get facultyMin() { return this.__attr(`facultyMin`) }
  get facultyMax() { return this.__attr(`facultyMax`) }
  get diagnosisMin() { return this.__attr(`diagnosisMin`) }
  get diagnosisMax() { return this.__attr(`diagnosisMax`) }
  get techniqueUsedMin() { return this.__attr(`techniqueUsedMin`) }
  get techniqueUsedMax() { return this.__attr(`techniqueUsedMax`) }
  get outcomeMin() { return this.__attr(`outcomeMin`) }
  get outcomeMax() { return this.__attr(`outcomeMax`) }
  get caseTypeMin() { return this.__attr(`caseTypeMin`) }
  get caseTypeMax() { return this.__attr(`caseTypeMax`) }
}
export function selectFromOrthodonticsClinicalCaseLogAggregateResult() {
  return new OrthodonticsClinicalCaseLogAggregateResultModelSelector()
}

export const orthodonticsClinicalCaseLogAggregateResultModelPrimitives = selectFromOrthodonticsClinicalCaseLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.patientAgeMin.patientAgeMax.patientSexMin.patientSexMax.hospitalMin.hospitalMax.rotationMin.rotationMax.facultyMin.facultyMax.diagnosisMin.diagnosisMax.techniqueUsedMin.techniqueUsedMax.outcomeMin.outcomeMax.caseTypeMin.caseTypeMax