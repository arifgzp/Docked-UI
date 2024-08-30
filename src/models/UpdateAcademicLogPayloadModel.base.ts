/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AcademicLogModel, AcademicLogModelType } from "./AcademicLogModel"
import { AcademicLogModelSelector } from "./AcademicLogModel.base"
import { AcademicLogFilter, AcademicLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  academicLog: IObservableArray<AcademicLogModelType>;
}

/**
 * UpdateAcademicLogPayloadBase
 * auto generated base class for the model UpdateAcademicLogPayloadModel.
 */
export const UpdateAcademicLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateAcademicLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdateAcademicLogPayload"), "UpdateAcademicLogPayload"),
    academicLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AcademicLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateAcademicLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  academicLog(builder: string | AcademicLogModelSelector | ((selector: AcademicLogModelSelector) => AcademicLogModelSelector) | undefined, args?: { filter?: (AcademicLogFilter | null), order?: (AcademicLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`academicLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AcademicLogModelSelector, builder) }
}
export function selectFromUpdateAcademicLogPayload() {
  return new UpdateAcademicLogPayloadModelSelector()
}

export const updateAcademicLogPayloadModelPrimitives = selectFromUpdateAcademicLogPayload().numUids
