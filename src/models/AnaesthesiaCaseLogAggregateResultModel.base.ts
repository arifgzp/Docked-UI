/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnaesthesiaCaseLogAggregateResultBase
 * auto generated base class for the model AnaesthesiaCaseLogAggregateResultModel.
 */
export const AnaesthesiaCaseLogAggregateResultModelBase = ModelBase
  .named('AnaesthesiaCaseLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("AnaesthesiaCaseLogAggregateResult"), "AnaesthesiaCaseLogAggregateResult"),
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
    weightMin: types.union(types.undefined, types.null, types.string),
    weightMax: types.union(types.undefined, types.null, types.string),
    heightMin: types.union(types.undefined, types.null, types.string),
    heightMax: types.union(types.undefined, types.null, types.string),
    diagnosisMin: types.union(types.undefined, types.null, types.string),
    diagnosisMax: types.union(types.undefined, types.null, types.string),
    surgicalProcedureMin: types.union(types.undefined, types.null, types.string),
    surgicalProcedureMax: types.union(types.undefined, types.null, types.string),
    specialityMin: types.union(types.undefined, types.null, types.string),
    specialityMax: types.union(types.undefined, types.null, types.string),
    asaGradeMin: types.union(types.undefined, types.null, types.string),
    asaGradeMax: types.union(types.undefined, types.null, types.string),
    typeOfSurgeryMin: types.union(types.undefined, types.null, types.string),
    typeOfSurgeryMax: types.union(types.undefined, types.null, types.string),
    npoMin: types.union(types.undefined, types.null, types.string),
    npoMax: types.union(types.undefined, types.null, types.string),
    conductMin: types.union(types.undefined, types.null, types.string),
    conductMax: types.union(types.undefined, types.null, types.string),
    outcomeMin: types.union(types.undefined, types.null, types.string),
    outcomeMax: types.union(types.undefined, types.null, types.string),
    remarksMin: types.union(types.undefined, types.null, types.string),
    remarksMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnaesthesiaCaseLogAggregateResultModelSelector extends QueryBuilder {
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
  get weightMin() { return this.__attr(`weightMin`) }
  get weightMax() { return this.__attr(`weightMax`) }
  get heightMin() { return this.__attr(`heightMin`) }
  get heightMax() { return this.__attr(`heightMax`) }
  get diagnosisMin() { return this.__attr(`diagnosisMin`) }
  get diagnosisMax() { return this.__attr(`diagnosisMax`) }
  get surgicalProcedureMin() { return this.__attr(`surgicalProcedureMin`) }
  get surgicalProcedureMax() { return this.__attr(`surgicalProcedureMax`) }
  get specialityMin() { return this.__attr(`specialityMin`) }
  get specialityMax() { return this.__attr(`specialityMax`) }
  get asaGradeMin() { return this.__attr(`asaGradeMin`) }
  get asaGradeMax() { return this.__attr(`asaGradeMax`) }
  get typeOfSurgeryMin() { return this.__attr(`typeOfSurgeryMin`) }
  get typeOfSurgeryMax() { return this.__attr(`typeOfSurgeryMax`) }
  get npoMin() { return this.__attr(`npoMin`) }
  get npoMax() { return this.__attr(`npoMax`) }
  get conductMin() { return this.__attr(`conductMin`) }
  get conductMax() { return this.__attr(`conductMax`) }
  get outcomeMin() { return this.__attr(`outcomeMin`) }
  get outcomeMax() { return this.__attr(`outcomeMax`) }
  get remarksMin() { return this.__attr(`remarksMin`) }
  get remarksMax() { return this.__attr(`remarksMax`) }
}
export function selectFromAnaesthesiaCaseLogAggregateResult() {
  return new AnaesthesiaCaseLogAggregateResultModelSelector()
}

export const anaesthesiaCaseLogAggregateResultModelPrimitives = selectFromAnaesthesiaCaseLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.patientAgeMin.patientAgeMax.patientSexMin.patientSexMax.weightMin.weightMax.heightMin.heightMax.diagnosisMin.diagnosisMax.surgicalProcedureMin.surgicalProcedureMax.specialityMin.specialityMax.asaGradeMin.asaGradeMax.typeOfSurgeryMin.typeOfSurgeryMax.npoMin.npoMax.conductMin.conductMax.outcomeMin.outcomeMax.remarksMin.remarksMax
