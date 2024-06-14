import { Instance } from "mobx-state-tree"
import { AnaesthesiaCriticalCareCaseLogAggregateResultModelBase } from "./AnaesthesiaCriticalCareCaseLogAggregateResultModel.base"

/* The TypeScript type of an instance of AnaesthesiaCriticalCareCaseLogAggregateResultModel */
export interface AnaesthesiaCriticalCareCaseLogAggregateResultModelType extends Instance<typeof AnaesthesiaCriticalCareCaseLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for AnaesthesiaCriticalCareCaseLogAggregateResultModel */
export { selectFromAnaesthesiaCriticalCareCaseLogAggregateResult, anaesthesiaCriticalCareCaseLogAggregateResultModelPrimitives, AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector } from "./AnaesthesiaCriticalCareCaseLogAggregateResultModel.base"

/**
 * AnaesthesiaCriticalCareCaseLogAggregateResultModel
 */
export const AnaesthesiaCriticalCareCaseLogAggregateResultModel = AnaesthesiaCriticalCareCaseLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
