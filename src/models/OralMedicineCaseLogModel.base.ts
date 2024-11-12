/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OralMedicineCaseLogBase
 * auto generated base class for the model OralMedicineCaseLogModel.
 */
export const OralMedicineCaseLogModelBase = ModelBase
  .named('OralMedicineCaseLog')
  .props({
    __typename: types.optional(types.literal("OralMedicineCaseLog"), "OralMedicineCaseLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
    procedure: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    comorbidities: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    lesion: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    drugAllergyReaction: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    habitHistory: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    treatment: types.union(types.undefined, types.null, types.string),
    diagnosis: types.union(types.undefined, types.null, types.string),
    remarks: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OralMedicineCaseLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
  get procedure() { return this.__attr(`procedure`) }
  get comorbidities() { return this.__attr(`comorbidities`) }
  get lesion() { return this.__attr(`lesion`) }
  get drugAllergyReaction() { return this.__attr(`drugAllergyReaction`) }
  get habitHistory() { return this.__attr(`habitHistory`) }
  get treatment() { return this.__attr(`treatment`) }
  get diagnosis() { return this.__attr(`diagnosis`) }
  get remarks() { return this.__attr(`remarks`) }
}
export function selectFromOralMedicineCaseLog() {
  return new OralMedicineCaseLogModelSelector()
}

export const oralMedicineCaseLogModelPrimitives = selectFromOralMedicineCaseLog().createdOn.updatedOn.date.patientAge.patientSex.procedure.comorbidities.lesion.drugAllergyReaction.habitHistory.treatment.diagnosis.remarks
