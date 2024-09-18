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
 * UpdateUserFeedbackPayloadBase
 * auto generated base class for the model UpdateUserFeedbackPayloadModel.
 */
export const UpdateUserFeedbackPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateUserFeedbackPayload')
  .props({
    __typename: types.optional(types.literal("UpdateUserFeedbackPayload"), "UpdateUserFeedbackPayload"),
    userFeedback: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UserFeedbackModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateUserFeedbackPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  userFeedback(builder: string | UserFeedbackModelSelector | ((selector: UserFeedbackModelSelector) => UserFeedbackModelSelector) | undefined, args?: { filter?: (UserFeedbackFilter | null), order?: (UserFeedbackOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`userFeedback`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserFeedbackModelSelector, builder) }
}
export function selectFromUpdateUserFeedbackPayload() {
  return new UpdateUserFeedbackPayloadModelSelector()
}

export const updateUserFeedbackPayloadModelPrimitives = selectFromUpdateUserFeedbackPayload().numUids
