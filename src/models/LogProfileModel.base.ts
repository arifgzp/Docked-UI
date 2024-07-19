/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FacultyAggregateResultModel, FacultyAggregateResultModelType } from "./FacultyAggregateResultModel"
import { FacultyAggregateResultModelSelector } from "./FacultyAggregateResultModel.base"
import { FacultyModel, FacultyModelType } from "./FacultyModel"
import { FacultyModelSelector } from "./FacultyModel.base"
import { HospitalsAggregateResultModel, HospitalsAggregateResultModelType } from "./HospitalsAggregateResultModel"
import { HospitalsAggregateResultModelSelector } from "./HospitalsAggregateResultModel.base"
import { HospitalsModel, HospitalsModelType } from "./HospitalsModel"
import { HospitalsModelSelector } from "./HospitalsModel.base"
import { FacultyFilter, FacultyOrder, HospitalsFilter, HospitalsOrder, RotationFilter, RotationOrder } from "./RootStore.base"
import { RotationAggregateResultModel, RotationAggregateResultModelType } from "./RotationAggregateResultModel"
import { RotationAggregateResultModelSelector } from "./RotationAggregateResultModel.base"
import { RotationModel, RotationModelType } from "./RotationModel"
import { RotationModelSelector } from "./RotationModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  hospitals: IObservableArray<HospitalsModelType>;
  faculties: IObservableArray<FacultyModelType>;
  rotations: IObservableArray<RotationModelType>;
}

/**
 * LogProfileBase
 * auto generated base class for the model LogProfileModel.
 */
export const LogProfileModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LogProfile')
  .props({
    __typename: types.optional(types.literal("LogProfile"), "LogProfile"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    hospitals: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => HospitalsModel))))),
    faculties: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FacultyModel))))),
    rotations: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => RotationModel))))),
    hospitalsAggregate: types.union(types.undefined, types.null, types.late((): any => HospitalsAggregateResultModel)),
    facultiesAggregate: types.union(types.undefined, types.null, types.late((): any => FacultyAggregateResultModel)),
    rotationsAggregate: types.union(types.undefined, types.null, types.late((): any => RotationAggregateResultModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LogProfileModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  hospitals(builder: string | HospitalsModelSelector | ((selector: HospitalsModelSelector) => HospitalsModelSelector) | undefined, args?: { filter?: (HospitalsFilter | null), order?: (HospitalsOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`hospitals`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), HospitalsModelSelector, builder) }
  faculties(builder: string | FacultyModelSelector | ((selector: FacultyModelSelector) => FacultyModelSelector) | undefined, args?: { filter?: (FacultyFilter | null), order?: (FacultyOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`faculties`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FacultyModelSelector, builder) }
  rotations(builder: string | RotationModelSelector | ((selector: RotationModelSelector) => RotationModelSelector) | undefined, args?: { filter?: (RotationFilter | null), order?: (RotationOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`rotations`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), RotationModelSelector, builder) }
  hospitalsAggregate(builder: string | HospitalsAggregateResultModelSelector | ((selector: HospitalsAggregateResultModelSelector) => HospitalsAggregateResultModelSelector) | undefined, args?: { filter?: (HospitalsFilter | null) }) { return this.__child(`hospitalsAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), HospitalsAggregateResultModelSelector, builder) }
  facultiesAggregate(builder: string | FacultyAggregateResultModelSelector | ((selector: FacultyAggregateResultModelSelector) => FacultyAggregateResultModelSelector) | undefined, args?: { filter?: (FacultyFilter | null) }) { return this.__child(`facultiesAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FacultyAggregateResultModelSelector, builder) }
  rotationsAggregate(builder: string | RotationAggregateResultModelSelector | ((selector: RotationAggregateResultModelSelector) => RotationAggregateResultModelSelector) | undefined, args?: { filter?: (RotationFilter | null) }) { return this.__child(`rotationsAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), RotationAggregateResultModelSelector, builder) }
}
export function selectFromLogProfile() {
  return new LogProfileModelSelector()
}

export const logProfileModelPrimitives = selectFromLogProfile().createdOn.updatedOn
