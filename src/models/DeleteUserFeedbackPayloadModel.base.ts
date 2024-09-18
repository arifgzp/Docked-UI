/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserFeedbackFilter, UserFeedbackOrder } from "./RootStore.base"
import { UserFeedbackModel, UserFeedbackModelType } from "./UserFeedbackModel"
import { UserFeedbackModelSelector } from "./UserFeedbackModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  userFeedback: IObservableArray<UserFeedbackModelType>;
}

/**
 * DeleteUserFeedbackPayloadBase
 * auto generated base class for the model DeleteUserFeedbackPayloadModel.
 */
export const DeleteUserFeedbackPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteUserFeedbackPayload')
  .props({
    __typename: types.optional(types.literal("DeleteUserFeedbackPayload"), "DeleteUserFeedbackPayload"),
    userFeedback: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UserFeedbackModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteUserFeedbackPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  userFeedback(builder: string | UserFeedbackModelSelector | ((selector: UserFeedbackModelSelector) => UserFeedbackModelSelector) | undefined, args?: { filter?: (UserFeedbackFilter | null), order?: (UserFeedbackOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`userFeedback`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserFeedbackModelSelector, builder) }
}
export function selectFromDeleteUserFeedbackPayload() {
  return new DeleteUserFeedbackPayloadModelSelector()
}

export const deleteUserFeedbackPayloadModelPrimitives = selectFromDeleteUserFeedbackPayload().msg.numUids
