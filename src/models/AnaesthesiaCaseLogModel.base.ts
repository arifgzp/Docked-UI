/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnaesthesiaCaseLogBase
 * auto generated base class for the model AnaesthesiaCaseLogModel.
 */
export const AnaesthesiaCaseLogModelBase = ModelBase
  .named('AnaesthesiaCaseLog')
  .props({
    __typename: types.optional(types.literal("AnaesthesiaCaseLog"), "AnaesthesiaCaseLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    hospital: types.union(types.undefined, types.null, types.string),
    faculty: types.union(types.undefined, types.null, types.string),
    medicalRegistrationNumber: types.union(types.undefined, types.null, types.string),
    typeOfAnaesthesia: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    airManagement: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    regionalTechniques: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    interventionalProcedures: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    monitoring: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnaesthesiaCaseLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get hospital() { return this.__attr(`hospital`) }
  get faculty() { return this.__attr(`faculty`) }
  get medicalRegistrationNumber() { return this.__attr(`medicalRegistrationNumber`) }
  get typeOfAnaesthesia() { return this.__attr(`typeOfAnaesthesia`) }
  get airManagement() { return this.__attr(`airManagement`) }
  get regionalTechniques() { return this.__attr(`regionalTechniques`) }
  get interventionalProcedures() { return this.__attr(`interventionalProcedures`) }
  get monitoring() { return this.__attr(`monitoring`) }
}
export function selectFromAnaesthesiaCaseLog() {
  return new AnaesthesiaCaseLogModelSelector()
}

export const anaesthesiaCaseLogModelPrimitives = selectFromAnaesthesiaCaseLog().createdOn.updatedOn.date.hospital.faculty.medicalRegistrationNumber.typeOfAnaesthesia.airManagement.regionalTechniques.interventionalProcedures.monitoring
