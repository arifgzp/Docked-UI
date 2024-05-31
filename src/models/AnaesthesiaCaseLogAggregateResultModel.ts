import { Instance } from "mobx-state-tree"
import { AnaesthesiaCaseLogAggregateResultModelBase } from "./AnaesthesiaCaseLogAggregateResultModel.base"

/* The TypeScript type of an instance of AnaesthesiaCaseLogAggregateResultModel */
export interface AnaesthesiaCaseLogAggregateResultModelType extends Instance<typeof AnaesthesiaCaseLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for AnaesthesiaCaseLogAggregateResultModel */
export { selectFromAnaesthesiaCaseLogAggregateResult, anaesthesiaCaseLogAggregateResultModelPrimitives, AnaesthesiaCaseLogAggregateResultModelSelector } from "./AnaesthesiaCaseLogAggregateResultModel.base"

/**
 * AnaesthesiaCaseLogAggregateResultModel
 */
export const AnaesthesiaCaseLogAggregateResultModel = AnaesthesiaCaseLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
