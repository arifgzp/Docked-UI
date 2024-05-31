/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CaseLogModel, CaseLogModelType } from "./CaseLogModel"
import { CaseLogModelSelector } from "./CaseLogModel.base"
import { CaseLogFilter, CaseLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  caseLog: IObservableArray<CaseLogModelType>;
}

/**
 * UpdateCaseLogPayloadBase
 * auto generated base class for the model UpdateCaseLogPayloadModel.
 */
export const UpdateCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateCaseLogPayload"), "UpdateCaseLogPayload"),
    caseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CaseLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateCaseLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  caseLog(builder: string | CaseLogModelSelector | ((selector: CaseLogModelSelector) => CaseLogModelSelector) | undefined, args?: { filter?: (CaseLogFilter | null), order?: (CaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`caseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CaseLogModelSelector, builder) }
}
export function selectFromUpdateCaseLogPayload() {
  return new UpdateCaseLogPayloadModelSelector()
}

export const updateCaseLogPayloadModelPrimitives = selectFromUpdateCaseLogPayload().numUids
