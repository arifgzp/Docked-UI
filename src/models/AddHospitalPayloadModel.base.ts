/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { HospitalModel, HospitalModelType } from "./HospitalModel"
import { HospitalModelSelector } from "./HospitalModel.base"
import { HospitalFilter, HospitalOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  hospital: IObservableArray<HospitalModelType>;
}

/**
 * AddHospitalPayloadBase
 * auto generated base class for the model AddHospitalPayloadModel.
 */
export const AddHospitalPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddHospitalPayload')
  .props({
    __typename: types.optional(types.literal("AddHospitalPayload"), "AddHospitalPayload"),
    hospital: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => HospitalModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddHospitalPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  hospital(builder: string | HospitalModelSelector | ((selector: HospitalModelSelector) => HospitalModelSelector) | undefined, args?: { filter?: (HospitalFilter | null), order?: (HospitalOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`hospital`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), HospitalModelSelector, builder) }
}
export function selectFromAddHospitalPayload() {
  return new AddHospitalPayloadModelSelector()
}

export const addHospitalPayloadModelPrimitives = selectFromAddHospitalPayload().numUids
