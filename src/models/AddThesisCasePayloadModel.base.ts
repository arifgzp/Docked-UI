/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ThesisCaseFilter, ThesisCaseOrder } from "./RootStore.base"
import { ThesisCaseModel, ThesisCaseModelType } from "./ThesisCaseModel"
import { ThesisCaseModelSelector } from "./ThesisCaseModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  thesisCase: IObservableArray<ThesisCaseModelType>;
}

/**
 * AddThesisCasePayloadBase
 * auto generated base class for the model AddThesisCasePayloadModel.
 */
export const AddThesisCasePayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddThesisCasePayload')
  .props({
    __typename: types.optional(types.literal("AddThesisCasePayload"), "AddThesisCasePayload"),
    thesisCase: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ThesisCaseModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddThesisCasePayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  thesisCase(builder: string | ThesisCaseModelSelector | ((selector: ThesisCaseModelSelector) => ThesisCaseModelSelector) | undefined, args?: { filter?: (ThesisCaseFilter | null), order?: (ThesisCaseOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`thesisCase`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ThesisCaseModelSelector, builder) }
}
export function selectFromAddThesisCasePayload() {
  return new AddThesisCasePayloadModelSelector()
}

export const addThesisCasePayloadModelPrimitives = selectFromAddThesisCasePayload().numUids
