/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * RotationBase
 * auto generated base class for the model RotationModel.
 */
export const RotationModelBase = ModelBase
  .named('Rotation')
  .props({
    __typename: types.optional(types.literal("Rotation"), "Rotation"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    department: types.union(types.undefined, types.null, types.string),
    from: types.union(types.undefined, types.null, types.frozen()),
    to: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RotationModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get department() { return this.__attr(`department`) }
  get from() { return this.__attr(`from`) }
  get to() { return this.__attr(`to`) }
}
export function selectFromRotation() {
  return new RotationModelSelector()
}

export const rotationModelPrimitives = selectFromRotation().createdOn.updatedOn.department.from.to
