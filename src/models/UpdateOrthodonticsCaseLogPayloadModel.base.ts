/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrthodonticsCaseLogModel, OrthodonticsCaseLogModelType } from "./OrthodonticsCaseLogModel"
import { OrthodonticsCaseLogModelSelector } from "./OrthodonticsCaseLogModel.base"
import { OrthodonticsCaseLogFilter, OrthodonticsCaseLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orthodonticsCaseLog: IObservableArray<OrthodonticsCaseLogModelType>;
}

/**
 * UpdateOrthodonticsCaseLogPayloadBase
 * auto generated base class for the model UpdateOrthodonticsCaseLogPayloadModel.
 */
export const UpdateOrthodonticsCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateOrthodonticsCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateOrthodonticsCaseLogPayload"), "UpdateOrthodonticsCaseLogPayload"),
    orthodonticsCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthodonticsCaseLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateOrthodonticsCaseLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  orthodonticsCaseLog(builder: string | OrthodonticsCaseLogModelSelector | ((selector: OrthodonticsCaseLogModelSelector) => OrthodonticsCaseLogModelSelector) | undefined, args?: { filter?: (OrthodonticsCaseLogFilter | null), order?: (OrthodonticsCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthodonticsCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsCaseLogModelSelector, builder) }
}
export function selectFromUpdateOrthodonticsCaseLogPayload() {
  return new UpdateOrthodonticsCaseLogPayloadModelSelector()
}

export const updateOrthodonticsCaseLogPayloadModelPrimitives = selectFromUpdateOrthodonticsCaseLogPayload().numUids
