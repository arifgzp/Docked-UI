/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrthopaedicsProcedureLogAggregateResultBase
 * auto generated base class for the model OrthopaedicsProcedureLogAggregateResultModel.
 */
export const OrthopaedicsProcedureLogAggregateResultModelBase = ModelBase
  .named('OrthopaedicsProcedureLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("OrthopaedicsProcedureLogAggregateResult"), "OrthopaedicsProcedureLogAggregateResult"),
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
    conductMin: types.union(types.undefined, types.null, types.string),
    conductMax: types.union(types.undefined, types.null, types.string),
    sitesMin: types.union(types.undefined, types.null, types.string),
    sitesMax: types.union(types.undefined, types.null, types.string),
    procedureNameMin: types.union(types.undefined, types.null, types.string),
    procedureNameMax: types.union(types.undefined, types.null, types.string),
    durationOfSurgeryHoursMin: types.union(types.undefined, types.null, types.string),
    durationOfSurgeryHoursMax: types.union(types.undefined, types.null, types.string),
    durationOfSurgeryMinutesMin: types.union(types.undefined, types.null, types.string),
    durationOfSurgeryMinutesMax: types.union(types.undefined, types.null, types.string),
    outcomeMin: types.union(types.undefined, types.null, types.string),
    outcomeMax: types.union(types.undefined, types.null, types.string),
    outcomeOtherMin: types.union(types.undefined, types.null, types.string),
    outcomeOtherMax: types.union(types.undefined, types.null, types.string),
    complicationMin: types.union(types.undefined, types.null, types.string),
    complicationMax: types.union(types.undefined, types.null, types.string),
    diagnosisMin: types.union(types.undefined, types.null, types.string),
    diagnosisMax: types.union(types.undefined, types.null, types.string),
    remarksMin: types.union(types.undefined, types.null, types.string),
    remarksMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrthopaedicsProcedureLogAggregateResultModelSelector extends QueryBuilder {
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
  get conductMin() { return this.__attr(`conductMin`) }
  get conductMax() { return this.__attr(`conductMax`) }
  get sitesMin() { return this.__attr(`sitesMin`) }
  get sitesMax() { return this.__attr(`sitesMax`) }
  get procedureNameMin() { return this.__attr(`procedureNameMin`) }
  get procedureNameMax() { return this.__attr(`procedureNameMax`) }
  get durationOfSurgeryHoursMin() { return this.__attr(`durationOfSurgeryHoursMin`) }
  get durationOfSurgeryHoursMax() { return this.__attr(`durationOfSurgeryHoursMax`) }
  get durationOfSurgeryMinutesMin() { return this.__attr(`durationOfSurgeryMinutesMin`) }
  get durationOfSurgeryMinutesMax() { return this.__attr(`durationOfSurgeryMinutesMax`) }
  get outcomeMin() { return this.__attr(`outcomeMin`) }
  get outcomeMax() { return this.__attr(`outcomeMax`) }
  get outcomeOtherMin() { return this.__attr(`outcomeOtherMin`) }
  get outcomeOtherMax() { return this.__attr(`outcomeOtherMax`) }
  get complicationMin() { return this.__attr(`complicationMin`) }
  get complicationMax() { return this.__attr(`complicationMax`) }
  get diagnosisMin() { return this.__attr(`diagnosisMin`) }
  get diagnosisMax() { return this.__attr(`diagnosisMax`) }
  get remarksMin() { return this.__attr(`remarksMin`) }
  get remarksMax() { return this.__attr(`remarksMax`) }
}
export function selectFromOrthopaedicsProcedureLogAggregateResult() {
  return new OrthopaedicsProcedureLogAggregateResultModelSelector()
}

export const orthopaedicsProcedureLogAggregateResultModelPrimitives = selectFromOrthopaedicsProcedureLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.patientAgeMin.patientAgeMax.patientSexMin.patientSexMax.conductMin.conductMax.sitesMin.sitesMax.procedureNameMin.procedureNameMax.durationOfSurgeryHoursMin.durationOfSurgeryHoursMax.durationOfSurgeryMinutesMin.durationOfSurgeryMinutesMax.outcomeMin.outcomeMax.outcomeOtherMin.outcomeOtherMax.complicationMin.complicationMax.diagnosisMin.diagnosisMax.remarksMin.remarksMax
