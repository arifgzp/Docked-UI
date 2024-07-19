/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { HospitalsModel, HospitalsModelType } from "./HospitalsModel"
import { HospitalsModelSelector } from "./HospitalsModel.base"
import { HospitalsFilter, HospitalsOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  hospitals: IObservableArray<HospitalsModelType>;
}

/**
 * UpdateHospitalsPayloadBase
 * auto generated base class for the model UpdateHospitalsPayloadModel.
 */
export const UpdateHospitalsPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateHospitalsPayload')
  .props({
    __typename: types.optional(types.literal("UpdateHospitalsPayload"), "UpdateHospitalsPayload"),
    hospitals: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => HospitalsModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateHospitalsPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  hospitals(builder: string | HospitalsModelSelector | ((selector: HospitalsModelSelector) => HospitalsModelSelector) | undefined, args?: { filter?: (HospitalsFilter | null), order?: (HospitalsOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`hospitals`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), HospitalsModelSelector, builder) }
}
export function selectFromUpdateHospitalsPayload() {
  return new UpdateHospitalsPayloadModelSelector()
}

export const updateHospitalsPayloadModelPrimitives = selectFromUpdateHospitalsPayload().numUids
