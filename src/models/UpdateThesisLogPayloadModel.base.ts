/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ThesisLogFilter, ThesisLogOrder } from "./RootStore.base"
import { ThesisLogModel, ThesisLogModelType } from "./ThesisLogModel"
import { ThesisLogModelSelector } from "./ThesisLogModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  thesisLog: IObservableArray<ThesisLogModelType>;
}

/**
 * UpdateThesisLogPayloadBase
 * auto generated base class for the model UpdateThesisLogPayloadModel.
 */
export const UpdateThesisLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateThesisLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateThesisLogPayload"), "UpdateThesisLogPayload"),
    thesisLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ThesisLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateThesisLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  thesisLog(builder: string | ThesisLogModelSelector | ((selector: ThesisLogModelSelector) => ThesisLogModelSelector) | undefined, args?: { filter?: (ThesisLogFilter | null), order?: (ThesisLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`thesisLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ThesisLogModelSelector, builder) }
}
export function selectFromUpdateThesisLogPayload() {
  return new UpdateThesisLogPayloadModelSelector()
}

export const updateThesisLogPayloadModelPrimitives = selectFromUpdateThesisLogPayload().numUids
