/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnaesthesiaChronicPainLogBase
 * auto generated base class for the model AnaesthesiaChronicPainLogModel.
 */
export const AnaesthesiaChronicPainLogModelBase = ModelBase
  .named('AnaesthesiaChronicPainLog')
  .props({
    __typename: types.optional(types.literal("AnaesthesiaChronicPainLog"), "AnaesthesiaChronicPainLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
    diagnosis: types.union(types.undefined, types.null, types.string),
    indication: types.union(types.undefined, types.null, types.string),
    conduct: types.union(types.undefined, types.null, types.string),
    technique: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    method: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    drugsUsed: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    intervention: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    remarks: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnaesthesiaChronicPainLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
  get diagnosis() { return this.__attr(`diagnosis`) }
  get indication() { return this.__attr(`indication`) }
  get conduct() { return this.__attr(`conduct`) }
  get technique() { return this.__attr(`technique`) }
  get method() { return this.__attr(`method`) }
  get drugsUsed() { return this.__attr(`drugsUsed`) }
  get intervention() { return this.__attr(`intervention`) }
  get remarks() { return this.__attr(`remarks`) }
}
export function selectFromAnaesthesiaChronicPainLog() {
  return new AnaesthesiaChronicPainLogModelSelector()
}

export const anaesthesiaChronicPainLogModelPrimitives = selectFromAnaesthesiaChronicPainLog().createdOn.updatedOn.date.patientAge.patientSex.diagnosis.indication.conduct.technique.method.drugsUsed.intervention.remarks
