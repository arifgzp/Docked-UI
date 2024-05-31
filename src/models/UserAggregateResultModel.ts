import { Instance } from "mobx-state-tree"
import { UserAggregateResultModelBase } from "./UserAggregateResultModel.base"

/* The TypeScript type of an instance of UserAggregateResultModel */
export interface UserAggregateResultModelType extends Instance<typeof UserAggregateResultModel.Type> {}

/* A graphql query fragment builders for UserAggregateResultModel */
export { selectFromUserAggregateResult, userAggregateResultModelPrimitives, UserAggregateResultModelSelector } from "./UserAggregateResultModel.base"

/**
 * UserAggregateResultModel
 */
export const UserAggregateResultModel = UserAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
