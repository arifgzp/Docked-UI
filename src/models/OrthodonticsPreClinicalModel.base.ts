/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrthodonticsPreClinicalBase
 * auto generated base class for the model OrthodonticsPreClinicalModel.
 */
export const OrthodonticsPreClinicalModelBase = ModelBase
  .named('OrthodonticsPreClinical')
  .props({
    __typename: types.optional(types.literal("OrthodonticsPreClinical"), "OrthodonticsPreClinical"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    hospital: types.union(types.undefined, types.null, types.string),
    rotation: types.union(types.undefined, types.null, types.string),
    faculty: types.union(types.undefined, types.null, types.string),
    complete: types.union(types.undefined, types.null, types.boolean),
    conduct: types.union(types.undefined, types.null, types.string),
    wireBendingRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    roundWireLoopRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    loopInEdgewiseWireRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    solderingExerciseRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    cephalometricTracingRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    claspRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    springsRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    canineRetractorsRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    bowsRecord: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    caseType: types.union(types.undefined, types.null, types.string),
    remarks: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrthodonticsPreClinicalModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get hospital() { return this.__attr(`hospital`) }
  get rotation() { return this.__attr(`rotation`) }
  get faculty() { return this.__attr(`faculty`) }
  get complete() { return this.__attr(`complete`) }
  get conduct() { return this.__attr(`conduct`) }
  get wireBendingRecord() { return this.__attr(`wireBendingRecord`) }
  get roundWireLoopRecord() { return this.__attr(`roundWireLoopRecord`) }
  get loopInEdgewiseWireRecord() { return this.__attr(`loopInEdgewiseWireRecord`) }
  get solderingExerciseRecord() { return this.__attr(`solderingExerciseRecord`) }
  get cephalometricTracingRecord() { return this.__attr(`cephalometricTracingRecord`) }
  get claspRecord() { return this.__attr(`claspRecord`) }
  get springsRecord() { return this.__attr(`springsRecord`) }
  get canineRetractorsRecord() { return this.__attr(`canineRetractorsRecord`) }
  get bowsRecord() { return this.__attr(`bowsRecord`) }
  get caseType() { return this.__attr(`caseType`) }
  get remarks() { return this.__attr(`remarks`) }
}
export function selectFromOrthodonticsPreClinical() {
  return new OrthodonticsPreClinicalModelSelector()
}

export const orthodonticsPreClinicalModelPrimitives = selectFromOrthodonticsPreClinical().createdOn.updatedOn.date.hospital.rotation.faculty.complete.conduct.wireBendingRecord.roundWireLoopRecord.loopInEdgewiseWireRecord.solderingExerciseRecord.cephalometricTracingRecord.claspRecord.springsRecord.canineRetractorsRecord.bowsRecord.caseType.remarks
