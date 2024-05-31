/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrthopaedicsCaseLogModel, OrthopaedicsCaseLogModelType } from "./OrthopaedicsCaseLogModel"
import { OrthopaedicsCaseLogModelSelector } from "./OrthopaedicsCaseLogModel.base"
import { OrthopaedicsCaseLogFilter, OrthopaedicsCaseLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orthopaedicsCaseLog: IObservableArray<OrthopaedicsCaseLogModelType>;
}

/**
 * DeleteOrthopaedicsCaseLogPayloadBase
 * auto generated base class for the model DeleteOrthopaedicsCaseLogPayloadModel.
 */
export const DeleteOrthopaedicsCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteOrthopaedicsCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("DeleteOrthopaedicsCaseLogPayload"), "DeleteOrthopaedicsCaseLogPayload"),
    orthopaedicsCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthopaedicsCaseLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteOrthopaedicsCaseLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  orthopaedicsCaseLog(builder: string | OrthopaedicsCaseLogModelSelector | ((selector: OrthopaedicsCaseLogModelSelector) => OrthopaedicsCaseLogModelSelector) | undefined, args?: { filter?: (OrthopaedicsCaseLogFilter | null), order?: (OrthopaedicsCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthopaedicsCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsCaseLogModelSelector, builder) }
}
export function selectFromDeleteOrthopaedicsCaseLogPayload() {
  return new DeleteOrthopaedicsCaseLogPayloadModelSelector()
}

export const deleteOrthopaedicsCaseLogPayloadModelPrimitives = selectFromDeleteOrthopaedicsCaseLogPayload().msg.numUids
