/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FormLabelsAggregateResultModel, FormLabelsAggregateResultModelType } from "./FormLabelsAggregateResultModel"
import { FormLabelsAggregateResultModelSelector } from "./FormLabelsAggregateResultModel.base"
import { FormLabelsModel, FormLabelsModelType } from "./FormLabelsModel"
import { FormLabelsModelSelector } from "./FormLabelsModel.base"
import { FormLabelsFilter, FormLabelsOrder } from "./RootStore.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  formLabels: IObservableArray<FormLabelsModelType>;
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
    formLabels: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => FormLabelsModel))))),
    formLabelsAggregate: types.union(types.undefined, types.null, types.late((): any => FormLabelsAggregateResultModel)),
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
  formLabels(builder: string | FormLabelsModelSelector | ((selector: FormLabelsModelSelector) => FormLabelsModelSelector) | undefined, args?: { filter?: (FormLabelsFilter | null), order?: (FormLabelsOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`formLabels`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FormLabelsModelSelector, builder) }
  formLabelsAggregate(builder: string | FormLabelsAggregateResultModelSelector | ((selector: FormLabelsAggregateResultModelSelector) => FormLabelsAggregateResultModelSelector) | undefined, args?: { filter?: (FormLabelsFilter | null) }) { return this.__child(`formLabelsAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), FormLabelsAggregateResultModelSelector, builder) }
}
export function selectFromCustomLog() {
  return new CustomLogModelSelector()
}

export const customLogModelPrimitives = selectFromCustomLog().createdOn.updatedOn.customName
