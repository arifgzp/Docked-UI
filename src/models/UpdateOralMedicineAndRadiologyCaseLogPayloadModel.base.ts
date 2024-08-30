/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OralMedicineAndRadiologyCaseLogModel, OralMedicineAndRadiologyCaseLogModelType } from "./OralMedicineAndRadiologyCaseLogModel"
import { OralMedicineAndRadiologyCaseLogModelSelector } from "./OralMedicineAndRadiologyCaseLogModel.base"
import { OralMedicineAndRadiologyCaseLogFilter, OralMedicineAndRadiologyCaseLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  oralMedicineAndRadiologyCaseLog: IObservableArray<OralMedicineAndRadiologyCaseLogModelType>;
}

/**
 * UpdateOralMedicineAndRadiologyCaseLogPayloadBase
 * auto generated base class for the model UpdateOralMedicineAndRadiologyCaseLogPayloadModel.
 */
export const UpdateOralMedicineAndRadiologyCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateOralMedicineAndRadiologyCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateOralMedicineAndRadiologyCaseLogPayload"), "UpdateOralMedicineAndRadiologyCaseLogPayload"),
    oralMedicineAndRadiologyCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OralMedicineAndRadiologyCaseLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateOralMedicineAndRadiologyCaseLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  oralMedicineAndRadiologyCaseLog(builder: string | OralMedicineAndRadiologyCaseLogModelSelector | ((selector: OralMedicineAndRadiologyCaseLogModelSelector) => OralMedicineAndRadiologyCaseLogModelSelector) | undefined, args?: { filter?: (OralMedicineAndRadiologyCaseLogFilter | null), order?: (OralMedicineAndRadiologyCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`oralMedicineAndRadiologyCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralMedicineAndRadiologyCaseLogModelSelector, builder) }
}
export function selectFromUpdateOralMedicineAndRadiologyCaseLogPayload() {
  return new UpdateOralMedicineAndRadiologyCaseLogPayloadModelSelector()
}

export const updateOralMedicineAndRadiologyCaseLogPayloadModelPrimitives = selectFromUpdateOralMedicineAndRadiologyCaseLogPayload().numUids
