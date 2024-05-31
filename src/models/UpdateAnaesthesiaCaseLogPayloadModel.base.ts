/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnaesthesiaCaseLogModel, AnaesthesiaCaseLogModelType } from "./AnaesthesiaCaseLogModel"
import { AnaesthesiaCaseLogModelSelector } from "./AnaesthesiaCaseLogModel.base"
import { AnaesthesiaCaseLogFilter, AnaesthesiaCaseLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  anaesthesiaCaseLog: IObservableArray<AnaesthesiaCaseLogModelType>;
}

/**
 * UpdateAnaesthesiaCaseLogPayloadBase
 * auto generated base class for the model UpdateAnaesthesiaCaseLogPayloadModel.
 */
export const UpdateAnaesthesiaCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateAnaesthesiaCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateAnaesthesiaCaseLogPayload"), "UpdateAnaesthesiaCaseLogPayload"),
    anaesthesiaCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AnaesthesiaCaseLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateAnaesthesiaCaseLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  anaesthesiaCaseLog(builder: string | AnaesthesiaCaseLogModelSelector | ((selector: AnaesthesiaCaseLogModelSelector) => AnaesthesiaCaseLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaCaseLogFilter | null), order?: (AnaesthesiaCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`anaesthesiaCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCaseLogModelSelector, builder) }
}
export function selectFromUpdateAnaesthesiaCaseLogPayload() {
  return new UpdateAnaesthesiaCaseLogPayloadModelSelector()
}

export const updateAnaesthesiaCaseLogPayloadModelPrimitives = selectFromUpdateAnaesthesiaCaseLogPayload().numUids
