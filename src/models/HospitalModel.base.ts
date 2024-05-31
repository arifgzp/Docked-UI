/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserFilter, UserOrder } from "./RootStore.base"
import { UserAggregateResultModel, UserAggregateResultModelType } from "./UserAggregateResultModel"
import { UserAggregateResultModelSelector } from "./UserAggregateResultModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  faculties: IObservableArray<UserModelType>;
}

/**
 * HospitalBase
 * auto generated base class for the model HospitalModel.
 */
export const HospitalModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Hospital')
  .props({
    __typename: types.optional(types.literal("Hospital"), "Hospital"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
    registeredName: types.union(types.undefined, types.null, types.string),
    gstin: types.union(types.undefined, types.null, types.string),
    address: types.union(types.undefined, types.null, types.string),
    faculties: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UserModel))))),
    facultiesAggregate: types.union(types.undefined, types.null, types.late((): any => UserAggregateResultModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class HospitalModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get name() { return this.__attr(`name`) }
  get registeredName() { return this.__attr(`registeredName`) }
  get gstin() { return this.__attr(`gstin`) }
  get address() { return this.__attr(`address`) }
  faculties(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined, args?: { filter?: (UserFilter | null), order?: (UserOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`faculties`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserModelSelector, builder) }
  facultiesAggregate(builder: string | UserAggregateResultModelSelector | ((selector: UserAggregateResultModelSelector) => UserAggregateResultModelSelector) | undefined, args?: { filter?: (UserFilter | null) }) { return this.__child(`facultiesAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserAggregateResultModelSelector, builder) }
}
export function selectFromHospital() {
  return new HospitalModelSelector()
}

export const hospitalModelPrimitives = selectFromHospital().createdOn.updatedOn.name.registeredName.gstin.address
