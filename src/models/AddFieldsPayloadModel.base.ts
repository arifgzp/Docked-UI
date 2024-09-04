/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FieldsModel, FieldsModelType } from "./FieldsModel"
import { FieldsModelSelector } from "./FieldsModel.base"
import { FieldsFilter, FieldsOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  fields: IObservableArray<FieldsModelType>;
}

/**
 * AddFieldsPayloadBase
 * auto generated base class for the model AddFieldsPayloadModel.
 */
export const AddFieldsPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddFieldsPayload')
  .props({
    __typename: types.optional(types.literal("AddFieldsPayload"), "AddFieldsPayload"),
    fields: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FieldsModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddFieldsPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  fields(builder: string | FieldsModelSelector | ((selector: FieldsModelSelector) => FieldsModelSelector) | undefined, args?: { filter?: (FieldsFilter | null), order?: (FieldsOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`fields`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FieldsModelSelector, builder) }
}
export function selectFromAddFieldsPayload() {
  return new AddFieldsPayloadModelSelector()
}

export const addFieldsPayloadModelPrimitives = selectFromAddFieldsPayload().numUids
