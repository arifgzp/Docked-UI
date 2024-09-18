import { Instance } from "mobx-state-tree"
import { UserFeedbackAggregateResultModelBase } from "./UserFeedbackAggregateResultModel.base"

/* The TypeScript type of an instance of UserFeedbackAggregateResultModel */
export interface UserFeedbackAggregateResultModelType extends Instance<typeof UserFeedbackAggregateResultModel.Type> {}

/* A graphql query fragment builders for UserFeedbackAggregateResultModel */
export { selectFromUserFeedbackAggregateResult, userFeedbackAggregateResultModelPrimitives, UserFeedbackAggregateResultModelSelector } from "./UserFeedbackAggregateResultModel.base"

/**
 * UserFeedbackAggregateResultModel
 */
export const UserFeedbackAggregateResultModel = UserFeedbackAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
