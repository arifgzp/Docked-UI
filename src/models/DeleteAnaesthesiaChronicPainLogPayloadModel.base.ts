/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnaesthesiaChronicPainLogModel, AnaesthesiaChronicPainLogModelType } from "./AnaesthesiaChronicPainLogModel"
import { AnaesthesiaChronicPainLogModelSelector } from "./AnaesthesiaChronicPainLogModel.base"
import { AnaesthesiaChronicPainLogFilter, AnaesthesiaChronicPainLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  anaesthesiaChronicPainLog: IObservableArray<AnaesthesiaChronicPainLogModelType>;
}

/**
 * DeleteAnaesthesiaChronicPainLogPayloadBase
 * auto generated base class for the model DeleteAnaesthesiaChronicPainLogPayloadModel.
 */
export const DeleteAnaesthesiaChronicPainLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteAnaesthesiaChronicPainLogPayload')
  .props({
    __typename: types.optional(types.literal("DeleteAnaesthesiaChronicPainLogPayload"), "DeleteAnaesthesiaChronicPainLogPayload"),
    anaesthesiaChronicPainLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AnaesthesiaChronicPainLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteAnaesthesiaChronicPainLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  anaesthesiaChronicPainLog(builder: string | AnaesthesiaChronicPainLogModelSelector | ((selector: AnaesthesiaChronicPainLogModelSelector) => AnaesthesiaChronicPainLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaChronicPainLogFilter | null), order?: (AnaesthesiaChronicPainLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`anaesthesiaChronicPainLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaChronicPainLogModelSelector, builder) }
}
export function selectFromDeleteAnaesthesiaChronicPainLogPayload() {
  return new DeleteAnaesthesiaChronicPainLogPayloadModelSelector()
}

export const deleteAnaesthesiaChronicPainLogPayloadModelPrimitives = selectFromDeleteAnaesthesiaChronicPainLogPayload().msg.numUids
