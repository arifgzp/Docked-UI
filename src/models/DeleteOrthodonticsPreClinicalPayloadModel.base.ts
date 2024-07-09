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
 * DeleteOrthodonticsPreClinicalPayloadBase
 * auto generated base class for the model DeleteOrthodonticsPreClinicalPayloadModel.
 */
export const DeleteOrthodonticsPreClinicalPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteOrthodonticsPreClinicalPayload')
  .props({
    __typename: types.optional(types.literal("DeleteOrthodonticsPreClinicalPayload"), "DeleteOrthodonticsPreClinicalPayload"),
    orthodonticsPreClinical: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthodonticsPreClinicalModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteOrthodonticsPreClinicalPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  orthodonticsPreClinical(builder: string | OrthodonticsPreClinicalModelSelector | ((selector: OrthodonticsPreClinicalModelSelector) => OrthodonticsPreClinicalModelSelector) | undefined, args?: { filter?: (OrthodonticsPreClinicalFilter | null), order?: (OrthodonticsPreClinicalOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthodonticsPreClinical`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsPreClinicalModelSelector, builder) }
}
export function selectFromDeleteOrthodonticsPreClinicalPayload() {
  return new DeleteOrthodonticsPreClinicalPayloadModelSelector()
}

export const deleteOrthodonticsPreClinicalPayloadModelPrimitives = selectFromDeleteOrthodonticsPreClinicalPayload().msg.numUids
