/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnaesthesiaCriticalCareCaseLogBase
 * auto generated base class for the model AnaesthesiaCriticalCareCaseLogModel.
 */
export const AnaesthesiaCriticalCareCaseLogModelBase = ModelBase
  .named('AnaesthesiaCriticalCareCaseLog')
  .props({
    __typename: types.optional(types.literal("AnaesthesiaCriticalCareCaseLog"), "AnaesthesiaCriticalCareCaseLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    rotation: types.union(types.undefined, types.null, types.string),
    hospital: types.union(types.undefined, types.null, types.string),
    faculty: types.union(types.undefined, types.null, types.string),
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
    diagnosis: types.union(types.undefined, types.null, types.string),
    comorbidites: types.union(types.undefined, types.null, types.string),
    surgicalprocedure: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    complication: types.union(types.undefined, types.null, types.string),
    outcome: types.union(types.undefined, types.null, types.string),
    procedures: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    caseType: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnaesthesiaCriticalCareCaseLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get rotation() { return this.__attr(`rotation`) }
  get hospital() { return this.__attr(`hospital`) }
  get faculty() { return this.__attr(`faculty`) }
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
  get diagnosis() { return this.__attr(`diagnosis`) }
  get comorbidites() { return this.__attr(`comorbidites`) }
  get surgicalprocedure() { return this.__attr(`surgicalprocedure`) }
  get complication() { return this.__attr(`complication`) }
  get outcome() { return this.__attr(`outcome`) }
  get procedures() { return this.__attr(`procedures`) }
  get caseType() { return this.__attr(`caseType`) }
}
export function selectFromAnaesthesiaCriticalCareCaseLog() {
  return new AnaesthesiaCriticalCareCaseLogModelSelector()
}

export const anaesthesiaCriticalCareCaseLogModelPrimitives = selectFromAnaesthesiaCriticalCareCaseLog().createdOn.updatedOn.date.rotation.hospital.faculty.patientAge.patientSex.diagnosis.comorbidites.surgicalprocedure.complication.outcome.procedures.caseType
