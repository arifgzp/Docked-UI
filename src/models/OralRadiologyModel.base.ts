/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OralRadiologyBase
 * auto generated base class for the model OralRadiologyModel.
 */
export const OralRadiologyModelBase = ModelBase
  .named('OralRadiology')
  .props({
    __typename: types.optional(types.literal("OralRadiology"), "OralRadiology"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    complete: types.union(types.undefined, types.null, types.boolean),
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
    procedure: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    report: types.union(types.undefined, types.null, types.string),
    diagnosis: types.union(types.undefined, types.null, types.string),
    chiefComplaint: types.union(types.undefined, types.null, types.string),
    caseType: types.union(types.undefined, types.null, types.string),
    remarks: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OralRadiologyModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get complete() { return this.__attr(`complete`) }
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
  get procedure() { return this.__attr(`procedure`) }
  get report() { return this.__attr(`report`) }
  get diagnosis() { return this.__attr(`diagnosis`) }
  get chiefComplaint() { return this.__attr(`chiefComplaint`) }
  get caseType() { return this.__attr(`caseType`) }
  get remarks() { return this.__attr(`remarks`) }
}
export function selectFromOralRadiology() {
  return new OralRadiologyModelSelector()
}

export const oralRadiologyModelPrimitives = selectFromOralRadiology().createdOn.updatedOn.date.complete.patientAge.patientSex.procedure.report.diagnosis.chiefComplaint.caseType.remarks
