/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FacultyAggregateResultBase
 * auto generated base class for the model FacultyAggregateResultModel.
 */
export const FacultyAggregateResultModelBase = ModelBase
  .named('FacultyAggregateResult')
  .props({
    __typename: types.optional(types.literal("FacultyAggregateResult"), "FacultyAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    firstNameMin: types.union(types.undefined, types.null, types.string),
    firstNameMax: types.union(types.undefined, types.null, types.string),
    lastNameMin: types.union(types.undefined, types.null, types.string),
    lastNameMax: types.union(types.undefined, types.null, types.string),
    nameMin: types.union(types.undefined, types.null, types.string),
    nameMax: types.union(types.undefined, types.null, types.string),
    designationMin: types.union(types.undefined, types.null, types.string),
    designationMax: types.union(types.undefined, types.null, types.string),
    otherDesignationMin: types.union(types.undefined, types.null, types.string),
    otherDesignationMax: types.union(types.undefined, types.null, types.string),
    phoneNumberMin: types.union(types.undefined, types.null, types.string),
    phoneNumberMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FacultyAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get firstNameMin() { return this.__attr(`firstNameMin`) }
  get firstNameMax() { return this.__attr(`firstNameMax`) }
  get lastNameMin() { return this.__attr(`lastNameMin`) }
  get lastNameMax() { return this.__attr(`lastNameMax`) }
  get nameMin() { return this.__attr(`nameMin`) }
  get nameMax() { return this.__attr(`nameMax`) }
  get designationMin() { return this.__attr(`designationMin`) }
  get designationMax() { return this.__attr(`designationMax`) }
  get otherDesignationMin() { return this.__attr(`otherDesignationMin`) }
  get otherDesignationMax() { return this.__attr(`otherDesignationMax`) }
  get phoneNumberMin() { return this.__attr(`phoneNumberMin`) }
  get phoneNumberMax() { return this.__attr(`phoneNumberMax`) }
}
export function selectFromFacultyAggregateResult() {
  return new FacultyAggregateResultModelSelector()
}

export const facultyAggregateResultModelPrimitives = selectFromFacultyAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.firstNameMin.firstNameMax.lastNameMin.lastNameMax.nameMin.nameMax.designationMin.designationMax.otherDesignationMin.otherDesignationMax.phoneNumberMin.phoneNumberMax
