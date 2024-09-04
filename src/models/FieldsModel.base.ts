/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FieldsBase
 * auto generated base class for the model FieldsModel.
 */
export const FieldsModelBase = ModelBase
  .named('Fields')
  .props({
    __typename: types.optional(types.literal("Fields"), "Fields"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    label: types.union(types.undefined, types.null, types.string),
    value: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get label() { return this.__attr(`label`) }
  get value() { return this.__attr(`value`) }
}
export function selectFromFields() {
  return new FieldsModelSelector()
}

export const fieldsModelPrimitives = selectFromFields().createdOn.updatedOn.label.value
