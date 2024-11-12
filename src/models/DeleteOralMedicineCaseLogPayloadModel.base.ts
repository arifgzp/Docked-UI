/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OralMedicineCaseLogModel, OralMedicineCaseLogModelType } from "./OralMedicineCaseLogModel"
import { OralMedicineCaseLogModelSelector } from "./OralMedicineCaseLogModel.base"
import { OralMedicineCaseLogFilter, OralMedicineCaseLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  oralMedicineCaseLog: IObservableArray<OralMedicineCaseLogModelType>;
}

/**
 * DeleteOralMedicineCaseLogPayloadBase
 * auto generated base class for the model DeleteOralMedicineCaseLogPayloadModel.
 */
export const DeleteOralMedicineCaseLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeleteOralMedicineCaseLogPayload')
  .props({
    __typename: types.optional(types.literal("DeleteOralMedicineCaseLogPayload"), "DeleteOralMedicineCaseLogPayload"),
    oralMedicineCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OralMedicineCaseLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeleteOralMedicineCaseLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  oralMedicineCaseLog(builder: string | OralMedicineCaseLogModelSelector | ((selector: OralMedicineCaseLogModelSelector) => OralMedicineCaseLogModelSelector) | undefined, args?: { filter?: (OralMedicineCaseLogFilter | null), order?: (OralMedicineCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`oralMedicineCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralMedicineCaseLogModelSelector, builder) }
}
export function selectFromDeleteOralMedicineCaseLogPayload() {
  return new DeleteOralMedicineCaseLogPayloadModelSelector()
}

export const deleteOralMedicineCaseLogPayloadModelPrimitives = selectFromDeleteOralMedicineCaseLogPayload().msg.numUids
