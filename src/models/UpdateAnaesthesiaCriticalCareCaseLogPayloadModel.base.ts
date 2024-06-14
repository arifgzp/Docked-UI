/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnaesthesiaCriticalCareCaseLogModel, AnaesthesiaCriticalCareCaseLogModelType } from "./AnaesthesiaCriticalCareCaseLogModel"
import { AnaesthesiaCriticalCareCaseLogModelSelector } from "./AnaesthesiaCriticalCareCaseLogModel.base"
import { AnaesthesiaCriticalCareCaseLogFilter, AnaesthesiaCriticalCareCaseLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  anaesthesiaCriticalCareCaseLog: IObservableArray<AnaesthesiaCriticalCareCaseLogModelType>;
}

/**
 * UpdateAnaesthesiaCriticalCareCaseLogPayloadBase
 * auto generated base class for the model UpdateAnaesthesiaCriticalCareCaseLogPayloadModel.
 */
export const UpdateAnaesthesiaCriticalCareCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateAnaesthesiaCriticalCareCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateAnaesthesiaCriticalCareCaseLogPayload"), "UpdateAnaesthesiaCriticalCareCaseLogPayload"),
    anaesthesiaCriticalCareCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AnaesthesiaCriticalCareCaseLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateAnaesthesiaCriticalCareCaseLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  anaesthesiaCriticalCareCaseLog(builder: string | AnaesthesiaCriticalCareCaseLogModelSelector | ((selector: AnaesthesiaCriticalCareCaseLogModelSelector) => AnaesthesiaCriticalCareCaseLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaCriticalCareCaseLogFilter | null), order?: (AnaesthesiaCriticalCareCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`anaesthesiaCriticalCareCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCriticalCareCaseLogModelSelector, builder) }
}
export function selectFromUpdateAnaesthesiaCriticalCareCaseLogPayload() {
  return new UpdateAnaesthesiaCriticalCareCaseLogPayloadModelSelector()
}

export const updateAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives = selectFromUpdateAnaesthesiaCriticalCareCaseLogPayload().numUids
