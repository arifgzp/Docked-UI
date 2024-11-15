/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnaesthesiaCriticalCareCaseLogAggregateResultBase
 * auto generated base class for the model AnaesthesiaCriticalCareCaseLogAggregateResultModel.
 */
export const AnaesthesiaCriticalCareCaseLogAggregateResultModelBase = ModelBase
  .named('AnaesthesiaCriticalCareCaseLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("AnaesthesiaCriticalCareCaseLogAggregateResult"), "AnaesthesiaCriticalCareCaseLogAggregateResult"),
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
    diagnosisMin: types.union(types.undefined, types.null, types.string),
    diagnosisMax: types.union(types.undefined, types.null, types.string),
    comorbiditesMin: types.union(types.undefined, types.null, types.string),
    comorbiditesMax: types.union(types.undefined, types.null, types.string),
    surgicalprocedureMin: types.union(types.undefined, types.null, types.string),
    surgicalprocedureMax: types.union(types.undefined, types.null, types.string),
    complicationMin: types.union(types.undefined, types.null, types.string),
    complicationMax: types.union(types.undefined, types.null, types.string),
    outcomeMin: types.union(types.undefined, types.null, types.string),
    outcomeMax: types.union(types.undefined, types.null, types.string),
    conductMin: types.union(types.undefined, types.null, types.string),
    conductMax: types.union(types.undefined, types.null, types.string),
    remarksMin: types.union(types.undefined, types.null, types.string),
    remarksMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector extends QueryBuilder {
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
  get diagnosisMin() { return this.__attr(`diagnosisMin`) }
  get diagnosisMax() { return this.__attr(`diagnosisMax`) }
  get comorbiditesMin() { return this.__attr(`comorbiditesMin`) }
  get comorbiditesMax() { return this.__attr(`comorbiditesMax`) }
  get surgicalprocedureMin() { return this.__attr(`surgicalprocedureMin`) }
  get surgicalprocedureMax() { return this.__attr(`surgicalprocedureMax`) }
  get complicationMin() { return this.__attr(`complicationMin`) }
  get complicationMax() { return this.__attr(`complicationMax`) }
  get outcomeMin() { return this.__attr(`outcomeMin`) }
  get outcomeMax() { return this.__attr(`outcomeMax`) }
  get conductMin() { return this.__attr(`conductMin`) }
  get conductMax() { return this.__attr(`conductMax`) }
  get remarksMin() { return this.__attr(`remarksMin`) }
  get remarksMax() { return this.__attr(`remarksMax`) }
}
export function selectFromAnaesthesiaCriticalCareCaseLogAggregateResult() {
  return new AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector()
}

export const anaesthesiaCriticalCareCaseLogAggregateResultModelPrimitives = selectFromAnaesthesiaCriticalCareCaseLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.patientAgeMin.patientAgeMax.patientSexMin.patientSexMax.diagnosisMin.diagnosisMax.comorbiditesMin.comorbiditesMax.surgicalprocedureMin.surgicalprocedureMax.complicationMin.complicationMax.outcomeMin.outcomeMax.conductMin.conductMax.remarksMin.remarksMax
