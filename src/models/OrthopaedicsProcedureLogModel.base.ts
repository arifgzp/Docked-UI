/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrthopaedicsProcedureLogBase
 * auto generated base class for the model OrthopaedicsProcedureLogModel.
 */
export const OrthopaedicsProcedureLogModelBase = ModelBase
  .named('OrthopaedicsProcedureLog')
  .props({
    __typename: types.optional(types.literal("OrthopaedicsProcedureLog"), "OrthopaedicsProcedureLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    hospital: types.union(types.undefined, types.null, types.string),
    faculty: types.union(types.undefined, types.null, types.string),
    complete: types.union(types.undefined, types.null, types.boolean),
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
    rotation: types.union(types.undefined, types.null, types.string),
    conduct: types.union(types.undefined, types.null, types.string),
    sites: types.union(types.undefined, types.null, types.string),
    procedure: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    procedureName: types.union(types.undefined, types.null, types.string),
    durationOfSurgeryHours: types.union(types.undefined, types.null, types.string),
    durationOfSurgeryMinutes: types.union(types.undefined, types.null, types.string),
    outcome: types.union(types.undefined, types.null, types.string),
    outcomeOther: types.union(types.undefined, types.null, types.string),
    complication: types.union(types.undefined, types.null, types.string),
    diagnosis: types.union(types.undefined, types.null, types.string),
    caseType: types.union(types.undefined, types.null, types.string),
    remarks: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrthopaedicsProcedureLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get hospital() { return this.__attr(`hospital`) }
  get faculty() { return this.__attr(`faculty`) }
  get complete() { return this.__attr(`complete`) }
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
  get rotation() { return this.__attr(`rotation`) }
  get conduct() { return this.__attr(`conduct`) }
  get sites() { return this.__attr(`sites`) }
  get procedure() { return this.__attr(`procedure`) }
  get procedureName() { return this.__attr(`procedureName`) }
  get durationOfSurgeryHours() { return this.__attr(`durationOfSurgeryHours`) }
  get durationOfSurgeryMinutes() { return this.__attr(`durationOfSurgeryMinutes`) }
  get outcome() { return this.__attr(`outcome`) }
  get outcomeOther() { return this.__attr(`outcomeOther`) }
  get complication() { return this.__attr(`complication`) }
  get diagnosis() { return this.__attr(`diagnosis`) }
  get caseType() { return this.__attr(`caseType`) }
  get remarks() { return this.__attr(`remarks`) }
}
export function selectFromOrthopaedicsProcedureLog() {
  return new OrthopaedicsProcedureLogModelSelector()
}

export const orthopaedicsProcedureLogModelPrimitives = selectFromOrthopaedicsProcedureLog().createdOn.updatedOn.date.hospital.faculty.complete.patientAge.patientSex.rotation.conduct.sites.procedure.procedureName.durationOfSurgeryHours.durationOfSurgeryMinutes.outcome.outcomeOther.complication.diagnosis.caseType.remarks
