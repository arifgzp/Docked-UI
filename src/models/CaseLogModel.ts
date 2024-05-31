import { Instance } from "mobx-state-tree"
import { CaseLogModelBase } from "./CaseLogModel.base"

/* The TypeScript type of an instance of CaseLogModel */
export interface CaseLogModelType extends Instance<typeof CaseLogModel.Type> {}

/* A graphql query fragment builders for CaseLogModel */
export { selectFromCaseLog, caseLogModelPrimitives, CaseLogModelSelector } from "./CaseLogModel.base"

/**
 * CaseLogModel
 */
export const CaseLogModel = CaseLogModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
