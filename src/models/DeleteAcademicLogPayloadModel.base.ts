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
 * DeleteAcademicLogPayloadBase
 * auto generated base class for the model DeleteAcademicLogPayloadModel.
 */
export const DeleteAcademicLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteAcademicLogPayload')
  .props({
    __typename: types.optional(types.literal("DeleteAcademicLogPayload"), "DeleteAcademicLogPayload"),
    academicLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AcademicLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteAcademicLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  academicLog(builder: string | AcademicLogModelSelector | ((selector: AcademicLogModelSelector) => AcademicLogModelSelector) | undefined, args?: { filter?: (AcademicLogFilter | null), order?: (AcademicLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`academicLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AcademicLogModelSelector, builder) }
}
export function selectFromDeleteAcademicLogPayload() {
  return new DeleteAcademicLogPayloadModelSelector()
}

export const deleteAcademicLogPayloadModelPrimitives = selectFromDeleteAcademicLogPayload().msg.numUids
