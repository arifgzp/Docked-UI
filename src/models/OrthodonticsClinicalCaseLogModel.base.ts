/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrthodonticsClinicalCaseLogBase
 * auto generated base class for the model OrthodonticsClinicalCaseLogModel.
 */
export const OrthodonticsClinicalCaseLogModelBase = ModelBase
  .named('OrthodonticsClinicalCaseLog')
  .props({
    __typename: types.optional(types.literal("OrthodonticsClinicalCaseLog"), "OrthodonticsClinicalCaseLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
    hospital: types.union(types.undefined, types.null, types.string),
    rotation: types.union(types.undefined, types.null, types.string),
    faculty: types.union(types.undefined, types.null, types.string),
    diagnosis: types.union(types.undefined, types.null, types.string),
    techniqueUsed: types.union(types.undefined, types.null, types.string),
    conduct: types.union(types.undefined, types.null, types.string),
    applianceUsed: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    treatmentPlan: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    outcome: types.union(types.undefined, types.null, types.string),
    caseType: types.union(types.undefined, types.null, types.string),
    remarks: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrthodonticsClinicalCaseLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
  get hospital() { return this.__attr(`hospital`) }
  get rotation() { return this.__attr(`rotation`) }
  get faculty() { return this.__attr(`faculty`) }
  get diagnosis() { return this.__attr(`diagnosis`) }
  get techniqueUsed() { return this.__attr(`techniqueUsed`) }
  get conduct() { return this.__attr(`conduct`) }
  get applianceUsed() { return this.__attr(`applianceUsed`) }
  get treatmentPlan() { return this.__attr(`treatmentPlan`) }
  get outcome() { return this.__attr(`outcome`) }
  get caseType() { return this.__attr(`caseType`) }
  get remarks() { return this.__attr(`remarks`) }
}
export function selectFromOrthodonticsClinicalCaseLog() {
  return new OrthodonticsClinicalCaseLogModelSelector()
}

export const orthodonticsClinicalCaseLogModelPrimitives = selectFromOrthodonticsClinicalCaseLog().createdOn.updatedOn.date.patientAge.patientSex.hospital.rotation.faculty.diagnosis.techniqueUsed.conduct.applianceUsed.treatmentPlan.outcome.caseType.remarks
