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
 * DeleteThesisLogPayloadBase
 * auto generated base class for the model DeleteThesisLogPayloadModel.
 */
export const DeleteThesisLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteThesisLogPayload')
  .props({
    __typename: types.optional(types.literal("DeleteThesisLogPayload"), "DeleteThesisLogPayload"),
    thesisLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ThesisLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteThesisLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  thesisLog(builder: string | ThesisLogModelSelector | ((selector: ThesisLogModelSelector) => ThesisLogModelSelector) | undefined, args?: { filter?: (ThesisLogFilter | null), order?: (ThesisLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`thesisLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ThesisLogModelSelector, builder) }
}
export function selectFromDeleteThesisLogPayload() {
  return new DeleteThesisLogPayloadModelSelector()
}

export const deleteThesisLogPayloadModelPrimitives = selectFromDeleteThesisLogPayload().msg.numUids
