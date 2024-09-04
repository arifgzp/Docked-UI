/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CustomLogModel, CustomLogModelType } from "./CustomLogModel"
import { CustomLogModelSelector } from "./CustomLogModel.base"
import { CustomLogFilter, CustomLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  customLog: IObservableArray<CustomLogModelType>;
}

/**
 * DeleteCustomLogPayloadBase
 * auto generated base class for the model DeleteCustomLogPayloadModel.
 */
export const DeleteCustomLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteCustomLogPayload')
  .props({
    __typename: types.optional(types.literal("DeleteCustomLogPayload"), "DeleteCustomLogPayload"),
    customLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CustomLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteCustomLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  customLog(builder: string | CustomLogModelSelector | ((selector: CustomLogModelSelector) => CustomLogModelSelector) | undefined, args?: { filter?: (CustomLogFilter | null), order?: (CustomLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`customLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomLogModelSelector, builder) }
}
export function selectFromDeleteCustomLogPayload() {
  return new DeleteCustomLogPayloadModelSelector()
}

export const deleteCustomLogPayloadModelPrimitives = selectFromDeleteCustomLogPayload().msg.numUids
