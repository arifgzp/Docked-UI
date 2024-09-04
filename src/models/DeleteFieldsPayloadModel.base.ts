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
 * DeleteFieldsPayloadBase
 * auto generated base class for the model DeleteFieldsPayloadModel.
 */
export const DeleteFieldsPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteFieldsPayload')
  .props({
    __typename: types.optional(types.literal("DeleteFieldsPayload"), "DeleteFieldsPayload"),
    fields: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FieldsModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteFieldsPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  fields(builder: string | FieldsModelSelector | ((selector: FieldsModelSelector) => FieldsModelSelector) | undefined, args?: { filter?: (FieldsFilter | null), order?: (FieldsOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`fields`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FieldsModelSelector, builder) }
}
export function selectFromDeleteFieldsPayload() {
  return new DeleteFieldsPayloadModelSelector()
}

export const deleteFieldsPayloadModelPrimitives = selectFromDeleteFieldsPayload().msg.numUids
