/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FormLabelsModel, FormLabelsModelType } from "./FormLabelsModel"
import { FormLabelsModelSelector } from "./FormLabelsModel.base"
import { FormLabelsFilter, FormLabelsOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  formLabels: IObservableArray<FormLabelsModelType>;
}

/**
 * UpdateFormLabelsPayloadBase
 * auto generated base class for the model UpdateFormLabelsPayloadModel.
 */
export const UpdateFormLabelsPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateFormLabelsPayload')
  .props({
    __typename: types.optional(types.literal("UpdateFormLabelsPayload"), "UpdateFormLabelsPayload"),
    formLabels: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FormLabelsModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateFormLabelsPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  formLabels(builder: string | FormLabelsModelSelector | ((selector: FormLabelsModelSelector) => FormLabelsModelSelector) | undefined, args?: { filter?: (FormLabelsFilter | null), order?: (FormLabelsOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`formLabels`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FormLabelsModelSelector, builder) }
}
export function selectFromUpdateFormLabelsPayload() {
  return new UpdateFormLabelsPayloadModelSelector()
}

export const updateFormLabelsPayloadModelPrimitives = selectFromUpdateFormLabelsPayload().numUids
