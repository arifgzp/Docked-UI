/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnaesthesiaChronicPainLogAggregateResultBase
 * auto generated base class for the model AnaesthesiaChronicPainLogAggregateResultModel.
 */
export const AnaesthesiaChronicPainLogAggregateResultModelBase = ModelBase
  .named('AnaesthesiaChronicPainLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("AnaesthesiaChronicPainLogAggregateResult"), "AnaesthesiaChronicPainLogAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    dateMin: types.union(types.undefined, types.null, types.frozen()),
    dateMax: types.union(types.undefined, types.null, types.frozen()),
    rotationMin: types.union(types.undefined, types.null, types.string),
    rotationMax: types.union(types.undefined, types.null, types.string),
    hospitalMin: types.union(types.undefined, types.null, types.string),
    hospitalMax: types.union(types.undefined, types.null, types.string),
    facultyMin: types.union(types.undefined, types.null, types.string),
    facultyMax: types.union(types.undefined, types.null, types.string),
    patientAgeMin: types.union(types.undefined, types.null, types.string),
    patientAgeMax: types.union(types.undefined, types.null, types.string),
    patientSexMin: types.union(types.undefined, types.null, types.string),
    patientSexMax: types.union(types.undefined, types.null, types.string),
    diagnosisMin: types.union(types.undefined, types.null, types.string),
    diagnosisMax: types.union(types.undefined, types.null, types.string),
    indicationMin: types.union(types.undefined, types.null, types.string),
    indicationMax: types.union(types.undefined, types.null, types.string),
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

export class AnaesthesiaChronicPainLogAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get dateMin() { return this.__attr(`dateMin`) }
  get dateMax() { return this.__attr(`dateMax`) }
  get rotationMin() { return this.__attr(`rotationMin`) }
  get rotationMax() { return this.__attr(`rotationMax`) }
  get hospitalMin() { return this.__attr(`hospitalMin`) }
  get hospitalMax() { return this.__attr(`hospitalMax`) }
  get facultyMin() { return this.__attr(`facultyMin`) }
  get facultyMax() { return this.__attr(`facultyMax`) }
  get patientAgeMin() { return this.__attr(`patientAgeMin`) }
  get patientAgeMax() { return this.__attr(`patientAgeMax`) }
  get patientSexMin() { return this.__attr(`patientSexMin`) }
  get patientSexMax() { return this.__attr(`patientSexMax`) }
  get diagnosisMin() { return this.__attr(`diagnosisMin`) }
  get diagnosisMax() { return this.__attr(`diagnosisMax`) }
  get indicationMin() { return this.__attr(`indicationMin`) }
  get indicationMax() { return this.__attr(`indicationMax`) }
  get conductMin() { return this.__attr(`conductMin`) }
  get conductMax() { return this.__attr(`conductMax`) }
  get caseTypeMin() { return this.__attr(`caseTypeMin`) }
  get caseTypeMax() { return this.__attr(`caseTypeMax`) }
  get remarksMin() { return this.__attr(`remarksMin`) }
  get remarksMax() { return this.__attr(`remarksMax`) }
}
export function selectFromAnaesthesiaChronicPainLogAggregateResult() {
  return new AnaesthesiaChronicPainLogAggregateResultModelSelector()
}

export const anaesthesiaChronicPainLogAggregateResultModelPrimitives = selectFromAnaesthesiaChronicPainLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.rotationMin.rotationMax.hospitalMin.hospitalMax.facultyMin.facultyMax.patientAgeMin.patientAgeMax.patientSexMin.patientSexMax.diagnosisMin.diagnosisMax.indicationMin.indicationMax.conductMin.conductMax.caseTypeMin.caseTypeMax.remarksMin.remarksMax
