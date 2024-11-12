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
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
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
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
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
  get remarks() { return this.__attr(`remarks`) }
}
export function selectFromOrthopaedicsProcedureLog() {
  return new OrthopaedicsProcedureLogModelSelector()
}

export const orthopaedicsProcedureLogModelPrimitives = selectFromOrthopaedicsProcedureLog().createdOn.updatedOn.date.patientAge.patientSex.conduct.sites.procedure.procedureName.durationOfSurgeryHours.durationOfSurgeryMinutes.outcome.outcomeOther.complication.diagnosis.remarks
