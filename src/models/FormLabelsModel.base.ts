/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FormLabelsBase
 * auto generated base class for the model FormLabelsModel.
 */
export const FormLabelsModelBase = ModelBase
  .named('FormLabels')
  .props({
    __typename: types.optional(types.literal("FormLabels"), "FormLabels"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    label: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FormLabelsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get label() { return this.__attr(`label`) }
}
export function selectFromFormLabels() {
  return new FormLabelsModelSelector()
}

export const formLabelsModelPrimitives = selectFromFormLabels().createdOn.updatedOn.label
