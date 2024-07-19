/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * HospitalsBase
 * auto generated base class for the model HospitalsModel.
 */
export const HospitalsModelBase = ModelBase
  .named('Hospitals')
  .props({
    __typename: types.optional(types.literal("Hospitals"), "Hospitals"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class HospitalsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromHospitals() {
  return new HospitalsModelSelector()
}

export const hospitalsModelPrimitives = selectFromHospitals().createdOn.updatedOn.name
