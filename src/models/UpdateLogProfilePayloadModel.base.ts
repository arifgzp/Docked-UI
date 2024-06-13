/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LogProfileModel, LogProfileModelType } from "./LogProfileModel"
import { LogProfileModelSelector } from "./LogProfileModel.base"
import { LogProfileFilter, LogProfileOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  logProfile: IObservableArray<LogProfileModelType>;
}

/**
 * UpdateLogProfilePayloadBase
 * auto generated base class for the model UpdateLogProfilePayloadModel.
 */
export const UpdateLogProfilePayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateLogProfilePayload')
  .props({
    __typename: types.optional(types.literal("UpdateLogProfilePayload"), "UpdateLogProfilePayload"),
    logProfile: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => LogProfileModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateLogProfilePayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  logProfile(builder: string | LogProfileModelSelector | ((selector: LogProfileModelSelector) => LogProfileModelSelector) | undefined, args?: { filter?: (LogProfileFilter | null), order?: (LogProfileOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`logProfile`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), LogProfileModelSelector, builder) }
}
export function selectFromUpdateLogProfilePayload() {
  return new UpdateLogProfilePayloadModelSelector()
}

export const updateLogProfilePayloadModelPrimitives = selectFromUpdateLogProfilePayload().numUids
