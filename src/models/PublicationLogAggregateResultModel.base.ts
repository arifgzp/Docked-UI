/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PublicationLogAggregateResultBase
 * auto generated base class for the model PublicationLogAggregateResultModel.
 */
export const PublicationLogAggregateResultModelBase = ModelBase
  .named('PublicationLogAggregateResult')
  .props({
    __typename: types.optional(types.literal("PublicationLogAggregateResult"), "PublicationLogAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    dateMin: types.union(types.undefined, types.null, types.frozen()),
    dateMax: types.union(types.undefined, types.null, types.frozen()),
    publicationTypeMin: types.union(types.undefined, types.null, types.string),
    publicationTypeMax: types.union(types.undefined, types.null, types.string),
    titleMin: types.union(types.undefined, types.null, types.string),
    titleMax: types.union(types.undefined, types.null, types.string),
    journalNameMin: types.union(types.undefined, types.null, types.string),
    journalNameMax: types.union(types.undefined, types.null, types.string),
    statusMin: types.union(types.undefined, types.null, types.string),
    statusMax: types.union(types.undefined, types.null, types.string),
    academicLogTypeMin: types.union(types.undefined, types.null, types.string),
    academicLogTypeMax: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PublicationLogAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get dateMin() { return this.__attr(`dateMin`) }
  get dateMax() { return this.__attr(`dateMax`) }
  get publicationTypeMin() { return this.__attr(`publicationTypeMin`) }
  get publicationTypeMax() { return this.__attr(`publicationTypeMax`) }
  get titleMin() { return this.__attr(`titleMin`) }
  get titleMax() { return this.__attr(`titleMax`) }
  get journalNameMin() { return this.__attr(`journalNameMin`) }
  get journalNameMax() { return this.__attr(`journalNameMax`) }
  get statusMin() { return this.__attr(`statusMin`) }
  get statusMax() { return this.__attr(`statusMax`) }
  get academicLogTypeMin() { return this.__attr(`academicLogTypeMin`) }
  get academicLogTypeMax() { return this.__attr(`academicLogTypeMax`) }
}
export function selectFromPublicationLogAggregateResult() {
  return new PublicationLogAggregateResultModelSelector()
}

export const publicationLogAggregateResultModelPrimitives = selectFromPublicationLogAggregateResult().count.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.dateMin.dateMax.publicationTypeMin.publicationTypeMax.titleMin.titleMax.journalNameMin.journalNameMax.statusMin.statusMax.academicLogTypeMin.academicLogTypeMax
