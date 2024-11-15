/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrthopaedicsCaseLogBase
 * auto generated base class for the model OrthopaedicsCaseLogModel.
 */
export const OrthopaedicsCaseLogModelBase = ModelBase
  .named('OrthopaedicsCaseLog')
  .props({
    __typename: types.optional(types.literal("OrthopaedicsCaseLog"), "OrthopaedicsCaseLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
    conduct: types.union(types.undefined, types.null, types.string),
    diseaseCategory: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    site: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    joint: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    bones: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    outcomes: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    diagnosis: types.union(types.undefined, types.null, types.string),
    remarks: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrthopaedicsCaseLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
  get conduct() { return this.__attr(`conduct`) }
  get diseaseCategory() { return this.__attr(`diseaseCategory`) }
  get site() { return this.__attr(`site`) }
  get joint() { return this.__attr(`joint`) }
  get bones() { return this.__attr(`bones`) }
  get outcomes() { return this.__attr(`outcomes`) }
  get diagnosis() { return this.__attr(`diagnosis`) }
  get remarks() { return this.__attr(`remarks`) }
}
export function selectFromOrthopaedicsCaseLog() {
  return new OrthopaedicsCaseLogModelSelector()
}

export const orthopaedicsCaseLogModelPrimitives = selectFromOrthopaedicsCaseLog().createdOn.updatedOn.date.patientAge.patientSex.conduct.diseaseCategory.site.joint.bones.outcomes.diagnosis.remarks
