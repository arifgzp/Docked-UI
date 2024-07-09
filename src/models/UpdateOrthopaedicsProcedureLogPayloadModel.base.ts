/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrthopaedicsProcedureLogModel, OrthopaedicsProcedureLogModelType } from "./OrthopaedicsProcedureLogModel"
import { OrthopaedicsProcedureLogModelSelector } from "./OrthopaedicsProcedureLogModel.base"
import { OrthopaedicsProcedureLogFilter, OrthopaedicsProcedureLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orthopaedicsProcedureLog: IObservableArray<OrthopaedicsProcedureLogModelType>;
}

/**
 * UpdateOrthopaedicsProcedureLogPayloadBase
 * auto generated base class for the model UpdateOrthopaedicsProcedureLogPayloadModel.
 */
export const UpdateOrthopaedicsProcedureLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateOrthopaedicsProcedureLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateOrthopaedicsProcedureLogPayload"), "UpdateOrthopaedicsProcedureLogPayload"),
    orthopaedicsProcedureLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthopaedicsProcedureLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateOrthopaedicsProcedureLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  orthopaedicsProcedureLog(builder: string | OrthopaedicsProcedureLogModelSelector | ((selector: OrthopaedicsProcedureLogModelSelector) => OrthopaedicsProcedureLogModelSelector) | undefined, args?: { filter?: (OrthopaedicsProcedureLogFilter | null), order?: (OrthopaedicsProcedureLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthopaedicsProcedureLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsProcedureLogModelSelector, builder) }
}
export function selectFromUpdateOrthopaedicsProcedureLogPayload() {
  return new UpdateOrthopaedicsProcedureLogPayloadModelSelector()
}

export const updateOrthopaedicsProcedureLogPayloadModelPrimitives = selectFromUpdateOrthopaedicsProcedureLogPayload().numUids
