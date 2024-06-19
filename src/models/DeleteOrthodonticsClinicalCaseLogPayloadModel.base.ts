/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrthodonticsClinicalCaseLogModel, OrthodonticsClinicalCaseLogModelType } from "./OrthodonticsClinicalCaseLogModel"
import { OrthodonticsClinicalCaseLogModelSelector } from "./OrthodonticsClinicalCaseLogModel.base"
import { OrthodonticsClinicalCaseLogFilter, OrthodonticsClinicalCaseLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orthodonticsClinicalCaseLog: IObservableArray<OrthodonticsClinicalCaseLogModelType>;
}

/**
 * DeleteOrthodonticsClinicalCaseLogPayloadBase
 * auto generated base class for the model DeleteOrthodonticsClinicalCaseLogPayloadModel.
 */
export const DeleteOrthodonticsClinicalCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteOrthodonticsClinicalCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("DeleteOrthodonticsClinicalCaseLogPayload"), "DeleteOrthodonticsClinicalCaseLogPayload"),
    orthodonticsClinicalCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthodonticsClinicalCaseLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteOrthodonticsClinicalCaseLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  orthodonticsClinicalCaseLog(builder: string | OrthodonticsClinicalCaseLogModelSelector | ((selector: OrthodonticsClinicalCaseLogModelSelector) => OrthodonticsClinicalCaseLogModelSelector) | undefined, args?: { filter?: (OrthodonticsClinicalCaseLogFilter | null), order?: (OrthodonticsClinicalCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthodonticsClinicalCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsClinicalCaseLogModelSelector, builder) }
}
export function selectFromDeleteOrthodonticsClinicalCaseLogPayload() {
  return new DeleteOrthodonticsClinicalCaseLogPayloadModelSelector()
}

export const deleteOrthodonticsClinicalCaseLogPayloadModelPrimitives = selectFromDeleteOrthodonticsClinicalCaseLogPayload().msg.numUids
