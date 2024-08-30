/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AcademicLogBase
 * auto generated base class for the model AcademicLogModel.
 */
export const AcademicLogModelBase = ModelBase
  .named('AcademicLog')
  .props({
    __typename: types.optional(types.literal("AcademicLog"), "AcademicLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    position: types.union(types.undefined, types.null, types.string),
    activities: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    title: types.union(types.undefined, types.null, types.string),
    organiser: types.union(types.undefined, types.null, types.string),
    supervision: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    academicLogType: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AcademicLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get position() { return this.__attr(`position`) }
  get activities() { return this.__attr(`activities`) }
  get title() { return this.__attr(`title`) }
  get organiser() { return this.__attr(`organiser`) }
  get supervision() { return this.__attr(`supervision`) }
  get academicLogType() { return this.__attr(`academicLogType`) }
}
export function selectFromAcademicLog() {
  return new AcademicLogModelSelector()
}

export const academicLogModelPrimitives = selectFromAcademicLog().createdOn.updatedOn.date.position.activities.title.organiser.supervision.academicLogType
