/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CustomCaseModel, CustomCaseModelType } from "./CustomCaseModel"
import { CustomCaseModelSelector } from "./CustomCaseModel.base"
import { CustomCaseFilter, CustomCaseOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  customCase: IObservableArray<CustomCaseModelType>;
}

/**
 * AddCustomCasePayloadBase
 * auto generated base class for the model AddCustomCasePayloadModel.
 */
export const AddCustomCasePayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddCustomCasePayload')
  .props({
    __typename: types.optional(types.literal("AddCustomCasePayload"), "AddCustomCasePayload"),
    customCase: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CustomCaseModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddCustomCasePayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  customCase(builder: string | CustomCaseModelSelector | ((selector: CustomCaseModelSelector) => CustomCaseModelSelector) | undefined, args?: { filter?: (CustomCaseFilter | null), order?: (CustomCaseOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`customCase`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomCaseModelSelector, builder) }
}
export function selectFromAddCustomCasePayload() {
  return new AddCustomCasePayloadModelSelector()
}

export const addCustomCasePayloadModelPrimitives = selectFromAddCustomCasePayload().numUids
