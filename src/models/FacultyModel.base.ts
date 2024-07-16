/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FacultyBase
 * auto generated base class for the model FacultyModel.
 */
export const FacultyModelBase = ModelBase
  .named('Faculty')
  .props({
    __typename: types.optional(types.literal("Faculty"), "Faculty"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
    designation: types.union(types.undefined, types.null, types.string),
    otherDesignation: types.union(types.undefined, types.null, types.string),
    phoneNumber: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FacultyModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get name() { return this.__attr(`name`) }
  get designation() { return this.__attr(`designation`) }
  get otherDesignation() { return this.__attr(`otherDesignation`) }
  get phoneNumber() { return this.__attr(`phoneNumber`) }
}
export function selectFromFaculty() {
  return new FacultyModelSelector()
}

export const facultyModelPrimitives = selectFromFaculty().createdOn.updatedOn.name.designation.otherDesignation.phoneNumber
