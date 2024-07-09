/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrthodonticsPreClinicalModel, OrthodonticsPreClinicalModelType } from "./OrthodonticsPreClinicalModel"
import { OrthodonticsPreClinicalModelSelector } from "./OrthodonticsPreClinicalModel.base"
import { OrthodonticsPreClinicalFilter, OrthodonticsPreClinicalOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orthodonticsPreClinical: IObservableArray<OrthodonticsPreClinicalModelType>;
}

/**
 * AddOrthodonticsPreClinicalPayloadBase
 * auto generated base class for the model AddOrthodonticsPreClinicalPayloadModel.
 */
export const AddOrthodonticsPreClinicalPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddOrthodonticsPreClinicalPayload')
  .props({
    __typename: types.optional(types.literal("AddOrthodonticsPreClinicalPayload"), "AddOrthodonticsPreClinicalPayload"),
    orthodonticsPreClinical: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthodonticsPreClinicalModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddOrthodonticsPreClinicalPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  orthodonticsPreClinical(builder: string | OrthodonticsPreClinicalModelSelector | ((selector: OrthodonticsPreClinicalModelSelector) => OrthodonticsPreClinicalModelSelector) | undefined, args?: { filter?: (OrthodonticsPreClinicalFilter | null), order?: (OrthodonticsPreClinicalOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthodonticsPreClinical`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsPreClinicalModelSelector, builder) }
}
export function selectFromAddOrthodonticsPreClinicalPayload() {
  return new AddOrthodonticsPreClinicalPayloadModelSelector()
}

export const addOrthodonticsPreClinicalPayloadModelPrimitives = selectFromAddOrthodonticsPreClinicalPayload().numUids
