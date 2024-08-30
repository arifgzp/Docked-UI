import { Instance } from "mobx-state-tree"
import { AdminWorkLogAggregateResultModelBase } from "./AdminWorkLogAggregateResultModel.base"

/* The TypeScript type of an instance of AdminWorkLogAggregateResultModel */
export interface AdminWorkLogAggregateResultModelType extends Instance<typeof AdminWorkLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for AdminWorkLogAggregateResultModel */
export { selectFromAdminWorkLogAggregateResult, adminWorkLogAggregateResultModelPrimitives, AdminWorkLogAggregateResultModelSelector } from "./AdminWorkLogAggregateResultModel.base"

/**
 * AdminWorkLogAggregateResultModel
 */
export const AdminWorkLogAggregateResultModel = AdminWorkLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
