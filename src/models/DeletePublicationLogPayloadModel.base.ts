/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PublicationLogModel, PublicationLogModelType } from "./PublicationLogModel"
import { PublicationLogModelSelector } from "./PublicationLogModel.base"
import { PublicationLogFilter, PublicationLogOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  publicationLog: IObservableArray<PublicationLogModelType>;
}

/**
 * DeletePublicationLogPayloadBase
 * auto generated base class for the model DeletePublicationLogPayloadModel.
 */
export const DeletePublicationLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('DeletePublicationLogPayload')
  .props({
    __typename: types.optional(types.literal("DeletePublicationLogPayload"), "DeletePublicationLogPayload"),
    publicationLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PublicationLogModel))))),
    msg: types.union(types.undefined, types.null, types.string),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class DeletePublicationLogPayloadModelSelector extends QueryBuilder {
  get msg() { return this.__attr(`msg`) }
  get numUids() { return this.__attr(`numUids`) }
  publicationLog(builder: string | PublicationLogModelSelector | ((selector: PublicationLogModelSelector) => PublicationLogModelSelector) | undefined, args?: { filter?: (PublicationLogFilter | null), order?: (PublicationLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`publicationLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), PublicationLogModelSelector, builder) }
}
export function selectFromDeletePublicationLogPayload() {
  return new DeletePublicationLogPayloadModelSelector()
}

export const deletePublicationLogPayloadModelPrimitives = selectFromDeletePublicationLogPayload().msg.numUids
