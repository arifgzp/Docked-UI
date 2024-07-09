import { Instance } from "mobx-state-tree"
import { OrthopaedicsProcedureLogAggregateResultModelBase } from "./OrthopaedicsProcedureLogAggregateResultModel.base"

/* The TypeScript type of an instance of OrthopaedicsProcedureLogAggregateResultModel */
export interface OrthopaedicsProcedureLogAggregateResultModelType extends Instance<typeof OrthopaedicsProcedureLogAggregateResultModel.Type> {}

/* A graphql query fragment builders for OrthopaedicsProcedureLogAggregateResultModel */
export { selectFromOrthopaedicsProcedureLogAggregateResult, orthopaedicsProcedureLogAggregateResultModelPrimitives, OrthopaedicsProcedureLogAggregateResultModelSelector } from "./OrthopaedicsProcedureLogAggregateResultModel.base"

/**
 * OrthopaedicsProcedureLogAggregateResultModel
 */
export const OrthopaedicsProcedureLogAggregateResultModel = OrthopaedicsProcedureLogAggregateResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
