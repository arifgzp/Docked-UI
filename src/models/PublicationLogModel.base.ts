/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PublicationLogBase
 * auto generated base class for the model PublicationLogModel.
 */
export const PublicationLogModelBase = ModelBase
  .named('PublicationLog')
  .props({
    __typename: types.optional(types.literal("PublicationLog"), "PublicationLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    publicationType: types.union(types.undefined, types.null, types.string),
    title: types.union(types.undefined, types.null, types.string),
    journalName: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, types.string),
    academicLogType: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PublicationLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get publicationType() { return this.__attr(`publicationType`) }
  get title() { return this.__attr(`title`) }
  get journalName() { return this.__attr(`journalName`) }
  get status() { return this.__attr(`status`) }
  get academicLogType() { return this.__attr(`academicLogType`) }
}
export function selectFromPublicationLog() {
  return new PublicationLogModelSelector()
}

export const publicationLogModelPrimitives = selectFromPublicationLog().createdOn.updatedOn.date.publicationType.title.journalName.status.academicLogType
