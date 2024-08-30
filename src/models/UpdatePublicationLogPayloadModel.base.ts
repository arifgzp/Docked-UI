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
 * UpdatePublicationLogPayloadBase
 * auto generated base class for the model UpdatePublicationLogPayloadModel.
 */
export const UpdatePublicationLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdatePublicationLogPayload')
  .props({
    __typename: types.optional(types.literal("UpdatePublicationLogPayload"), "UpdatePublicationLogPayload"),
    publicationLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PublicationLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdatePublicationLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  publicationLog(builder: string | PublicationLogModelSelector | ((selector: PublicationLogModelSelector) => PublicationLogModelSelector) | undefined, args?: { filter?: (PublicationLogFilter | null), order?: (PublicationLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`publicationLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), PublicationLogModelSelector, builder) }
}
export function selectFromUpdatePublicationLogPayload() {
  return new UpdatePublicationLogPayloadModelSelector()
}

export const updatePublicationLogPayloadModelPrimitives = selectFromUpdatePublicationLogPayload().numUids
