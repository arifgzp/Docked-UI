/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserFilter, UserOrder } from "./RootStore.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: IObservableArray<UserModelType>;
}

/**
 * DeleteUserPayloadBase
 * auto generated base class for the model DeleteUserPayloadModel.
 */
export const DeleteUserPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteUserPayload')
  .props({
    __typename: types.optional(types.literal("DeleteUserPayload"), "DeleteUserPayload"),
    user: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UserModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteUserPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  user(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined, args?: { filter?: (UserFilter | null), order?: (UserOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`user`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserModelSelector, builder) }
}
export function selectFromDeleteUserPayload() {
  return new DeleteUserPayloadModelSelector()
}

export const deleteUserPayloadModelPrimitives = selectFromDeleteUserPayload().msg.numUids
