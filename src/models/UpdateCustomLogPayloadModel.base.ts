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
 * UpdateCustomLogPayloadBase
 * auto generated base class for the model UpdateCustomLogPayloadModel.
 */
export const UpdateCustomLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateCustomLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateCustomLogPayload"), "UpdateCustomLogPayload"),
    customLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CustomLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateCustomLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  customLog(builder: string | CustomLogModelSelector | ((selector: CustomLogModelSelector) => CustomLogModelSelector) | undefined, args?: { filter?: (CustomLogFilter | null), order?: (CustomLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`customLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomLogModelSelector, builder) }
}
export function selectFromUpdateCustomLogPayload() {
  return new UpdateCustomLogPayloadModelSelector()
}

export const updateCustomLogPayloadModelPrimitives = selectFromUpdateCustomLogPayload().numUids
