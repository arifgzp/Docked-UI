/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CaseModel, CaseModelType } from "./CaseModel"
import { CaseModelSelector } from "./CaseModel.base"
import { CaseFilter, CaseOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  case: IObservableArray<CaseModelType>;
}

/**
 * UpdateCasePayloadBase
 * auto generated base class for the model UpdateCasePayloadModel.
 */
export const UpdateCasePayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateCasePayload')
  .props({
    __typename: types.optional(types.literal("UpdateCasePayload"), "UpdateCasePayload"),
    case: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CaseModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateCasePayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  case(builder: string | CaseModelSelector | ((selector: CaseModelSelector) => CaseModelSelector) | undefined, args?: { filter?: (CaseFilter | null), order?: (CaseOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`case`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CaseModelSelector, builder) }
}
export function selectFromUpdateCasePayload() {
  return new UpdateCasePayloadModelSelector()
}

export const updateCasePayloadModelPrimitives = selectFromUpdateCasePayload().numUids
