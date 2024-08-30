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
 * AddPublicationLogPayloadBase
 * auto generated base class for the model AddPublicationLogPayloadModel.
 */
export const AddPublicationLogPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('AddPublicationLogPayload')
  .props({
    __typename: types.optional(types.literal("AddPublicationLogPayload"), "AddPublicationLogPayload"),
    publicationLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PublicationLogModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class AddPublicationLogPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  publicationLog(builder: string | PublicationLogModelSelector | ((selector: PublicationLogModelSelector) => PublicationLogModelSelector) | undefined, args?: { filter?: (PublicationLogFilter | null), order?: (PublicationLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`publicationLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), PublicationLogModelSelector, builder) }
}
export function selectFromAddPublicationLogPayload() {
  return new AddPublicationLogPayloadModelSelector()
}

export const addPublicationLogPayloadModelPrimitives = selectFromAddPublicationLogPayload().numUids
