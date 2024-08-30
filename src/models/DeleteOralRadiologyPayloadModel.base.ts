/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OralRadiologyModel, OralRadiologyModelType } from "./OralRadiologyModel"
import { OralRadiologyModelSelector } from "./OralRadiologyModel.base"
import { OralRadiologyFilter, OralRadiologyOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  oralRadiology: IObservableArray<OralRadiologyModelType>;
}

/**
 * DeleteOralRadiologyPayloadBase
 * auto generated base class for the model DeleteOralRadiologyPayloadModel.
 */
export const DeleteOralRadiologyPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteOralRadiologyPayload')
  .props({
    __typename: types.optional(types.literal("DeleteOralRadiologyPayload"), "DeleteOralRadiologyPayload"),
    oralRadiology: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OralRadiologyModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteOralRadiologyPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  oralRadiology(builder: string | OralRadiologyModelSelector | ((selector: OralRadiologyModelSelector) => OralRadiologyModelSelector) | undefined, args?: { filter?: (OralRadiologyFilter | null), order?: (OralRadiologyOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`oralRadiology`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralRadiologyModelSelector, builder) }
}
export function selectFromDeleteOralRadiologyPayload() {
  return new DeleteOralRadiologyPayloadModelSelector()
}

export const deleteOralRadiologyPayloadModelPrimitives = selectFromDeleteOralRadiologyPayload().msg.numUids
