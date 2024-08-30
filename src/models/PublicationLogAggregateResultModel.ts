import { Instance } from "mobx-state-tree"
import { PublicationLogAggregateResultModelBase } from "./PublicationLogAggregateResultModel.base"

/* The TypeScript type of an instance of PublicationLogAggregateResultModel */
export interface PublicationLogAggregateResultModelType extends Instance<typeof PublicationLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for PublicationLogAggregateResultModel */
export { selectFromPublicationLogAggregateResult, publicationLogAggregateResultModelPrimitives, PublicationLogAggregateResultModelSelector } from "./PublicationLogAggregateResultModel.base"

/**
 * PublicationLogAggregateResultModel
 */
export const PublicationLogAggregateResultModel = PublicationLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
