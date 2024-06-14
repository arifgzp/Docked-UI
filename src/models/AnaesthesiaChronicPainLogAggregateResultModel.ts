import { Instance } from "mobx-state-tree"
import { AnaesthesiaChronicPainLogAggregateResultModelBase } from "./AnaesthesiaChronicPainLogAggregateResultModel.base"

/* The TypeScript type of an instance of AnaesthesiaChronicPainLogAggregateResultModel */
export interface AnaesthesiaChronicPainLogAggregateResultModelType extends Instance<typeof AnaesthesiaChronicPainLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for AnaesthesiaChronicPainLogAggregateResultModel */
export { selectFromAnaesthesiaChronicPainLogAggregateResult, anaesthesiaChronicPainLogAggregateResultModelPrimitives, AnaesthesiaChronicPainLogAggregateResultModelSelector } from "./AnaesthesiaChronicPainLogAggregateResultModel.base"

/**
 * AnaesthesiaChronicPainLogAggregateResultModel
 */
export const AnaesthesiaChronicPainLogAggregateResultModel = AnaesthesiaChronicPainLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
