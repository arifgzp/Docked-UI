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
 * AddOrthopaedicsCaseLogPayloadBase
 * auto generated base class for the model AddOrthopaedicsCaseLogPayloadModel.
 */
export const AddOrthopaedicsCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddOrthopaedicsCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("AddOrthopaedicsCaseLogPayload"), "AddOrthopaedicsCaseLogPayload"),
    orthopaedicsCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthopaedicsCaseLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddOrthopaedicsCaseLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  orthopaedicsCaseLog(builder: string | OrthopaedicsCaseLogModelSelector | ((selector: OrthopaedicsCaseLogModelSelector) => OrthopaedicsCaseLogModelSelector) | undefined, args?: { filter?: (OrthopaedicsCaseLogFilter | null), order?: (OrthopaedicsCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthopaedicsCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsCaseLogModelSelector, builder) }
}
export function selectFromAddOrthopaedicsCaseLogPayload() {
  return new AddOrthopaedicsCaseLogPayloadModelSelector()
}

export const addOrthopaedicsCaseLogPayloadModelPrimitives = selectFromAddOrthopaedicsCaseLogPayload().numUids
