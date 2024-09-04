/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FieldsAggregateResultModel, FieldsAggregateResultModelType } from "./FieldsAggregateResultModel"
import { FieldsAggregateResultModelSelector } from "./FieldsAggregateResultModel.base"
import { FieldsModel, FieldsModelType } from "./FieldsModel"
import { FieldsModelSelector } from "./FieldsModel.base"
import { FieldsFilter, FieldsOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  fields: IObservableArray<FieldsModelType>;
}

/**
 * CustomLogBase
 * auto generated base class for the model CustomLogModel.
 */
export const CustomLogModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CustomLog')
  .props({
    __typename: types.optional(types.literal("CustomLog"), "CustomLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    customName: types.union(types.undefined, types.null, types.string),
    fields: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FieldsModel))))),
    fieldsAggregate: types.union(types.undefined, types.null, types.late((): any => FieldsAggregateResultModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CustomLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get customName() { return this.__attr(`customName`) }
  fields(builder: string | FieldsModelSelector | ((selector: FieldsModelSelector) => FieldsModelSelector) | undefined, args?: { filter?: (FieldsFilter | null), order?: (FieldsOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`fields`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FieldsModelSelector, builder) }
  fieldsAggregate(builder: string | FieldsAggregateResultModelSelector | ((selector: FieldsAggregateResultModelSelector) => FieldsAggregateResultModelSelector) | undefined, args?: { filter?: (FieldsFilter | null) }) { return this.__child(`fieldsAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FieldsAggregateResultModelSelector, builder) }
}
export function selectFromCustomLog() {
  return new CustomLogModelSelector()
}

export const customLogModelPrimitives = selectFromCustomLog().createdOn.updatedOn.customName
