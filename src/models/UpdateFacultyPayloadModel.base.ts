/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FacultyModel, FacultyModelType } from "./FacultyModel"
import { FacultyModelSelector } from "./FacultyModel.base"
import { FacultyFilter, FacultyOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  faculty: IObservableArray<FacultyModelType>;
}

/**
 * UpdateFacultyPayloadBase
 * auto generated base class for the model UpdateFacultyPayloadModel.
 */
export const UpdateFacultyPayloadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('UpdateFacultyPayload')
  .props({
    __typename: types.optional(types.literal("UpdateFacultyPayload"), "UpdateFacultyPayload"),
    faculty: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FacultyModel))))),
    numUids: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UpdateFacultyPayloadModelSelector extends QueryBuilder {
  get numUids() { return this.__attr(`numUids`) }
  faculty(builder: string | FacultyModelSelector | ((selector: FacultyModelSelector) => FacultyModelSelector) | undefined, args?: { filter?: (FacultyFilter | null), order?: (FacultyOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`faculty`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FacultyModelSelector, builder) }
}
export function selectFromUpdateFacultyPayload() {
  return new UpdateFacultyPayloadModelSelector()
}

export const updateFacultyPayloadModelPrimitives = selectFromUpdateFacultyPayload().numUids
