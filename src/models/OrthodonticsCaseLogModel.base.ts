/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrthodonticsCaseLogBase
 * auto generated base class for the model OrthodonticsCaseLogModel.
 */
export const OrthodonticsCaseLogModelBase = ModelBase
  .named('OrthodonticsCaseLog')
  .props({
    __typename: types.optional(types.literal("OrthodonticsCaseLog"), "OrthodonticsCaseLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    hospital: types.union(types.undefined, types.null, types.string),
    faculty: types.union(types.undefined, types.null, types.string),
    medicalRegistrationNumber: types.union(types.undefined, types.null, types.string),
    wireBendingRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    roundWireLoopRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    loopInEdgewiseWireRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    solderingExerciseRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    cephalometricTracingRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    claspRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    springsrecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    canineRetractorsRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    bowsRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrthodonticsCaseLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get hospital() { return this.__attr(`hospital`) }
  get faculty() { return this.__attr(`faculty`) }
  get medicalRegistrationNumber() { return this.__attr(`medicalRegistrationNumber`) }
  get wireBendingRecord() { return this.__attr(`wireBendingRecord`) }
  get roundWireLoopRecord() { return this.__attr(`roundWireLoopRecord`) }
  get loopInEdgewiseWireRecord() { return this.__attr(`loopInEdgewiseWireRecord`) }
  get solderingExerciseRecord() { return this.__attr(`solderingExerciseRecord`) }
  get cephalometricTracingRecord() { return this.__attr(`cephalometricTracingRecord`) }
  get claspRecord() { return this.__attr(`claspRecord`) }
  get springsrecord() { return this.__attr(`springsrecord`) }
  get canineRetractorsRecord() { return this.__attr(`canineRetractorsRecord`) }
  get bowsRecord() { return this.__attr(`bowsRecord`) }
}
export function selectFromOrthodonticsCaseLog() {
  return new OrthodonticsCaseLogModelSelector()
}

export const orthodonticsCaseLogModelPrimitives = selectFromOrthodonticsCaseLog().createdOn.updatedOn.date.hospital.faculty.medicalRegistrationNumber.wireBendingRecord.roundWireLoopRecord.loopInEdgewiseWireRecord.solderingExerciseRecord.cephalometricTracingRecord.claspRecord.springsrecord.canineRetractorsRecord.bowsRecord
