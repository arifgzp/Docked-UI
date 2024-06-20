/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RotationFilter, RotationOrder } from "./RootStore.base"
import { RotationModel, RotationModelType } from "./RotationModel"
import { RotationModelSelector } from "./RotationModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  rotation: IObservableArray<RotationModelType>;
}

/**
 * UpdateRotationPayloadBase
 * auto generated base class for the model UpdateRotationPayloadModel.
 */
export const UpdateRotationPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateRotationPayload')
  .props({
    __typename: types.optional(types.literal("UpdateRotationPayload"), "UpdateRotationPayload"),
    rotation: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => RotationModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateRotationPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  rotation(builder: string | RotationModelSelector | ((selector: RotationModelSelector) => RotationModelSelector) | undefined, args?: { filter?: (RotationFilter | null), order?: (RotationOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`rotation`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), RotationModelSelector, builder) }
}
export function selectFromUpdateRotationPayload() {
  return new UpdateRotationPayloadModelSelector()
}

export const updateRotationPayloadModelPrimitives = selectFromUpdateRotationPayload().numUids