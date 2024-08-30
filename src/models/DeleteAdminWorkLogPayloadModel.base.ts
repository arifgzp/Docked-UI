/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AdminWorkLogModel, AdminWorkLogModelType } from "./AdminWorkLogModel"
import { AdminWorkLogModelSelector } from "./AdminWorkLogModel.base"
import { AdminWorkLogFilter, AdminWorkLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  adminWorkLog: IObservableArray<AdminWorkLogModelType>;
}

/**
 * DeleteAdminWorkLogPayloadBase
 * auto generated base class for the model DeleteAdminWorkLogPayloadModel.
 */
export const DeleteAdminWorkLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteAdminWorkLogPayload')
  .props({
    __typename: types.optional(types.literal("DeleteAdminWorkLogPayload"), "DeleteAdminWorkLogPayload"),
    adminWorkLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AdminWorkLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteAdminWorkLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  adminWorkLog(builder: string | AdminWorkLogModelSelector | ((selector: AdminWorkLogModelSelector) => AdminWorkLogModelSelector) | undefined, args?: { filter?: (AdminWorkLogFilter | null), order?: (AdminWorkLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`adminWorkLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AdminWorkLogModelSelector, builder) }
}
export function selectFromDeleteAdminWorkLogPayload() {
  return new DeleteAdminWorkLogPayloadModelSelector()
}

export const deleteAdminWorkLogPayloadModelPrimitives = selectFromDeleteAdminWorkLogPayload().msg.numUids
