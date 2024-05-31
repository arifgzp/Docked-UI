import { Instance } from "mobx-state-tree"
import { OrthodonticsCaseLogModelBase } from "./OrthodonticsCaseLogModel.base"

/* The TypeScript type of an instance of OrthodonticsCaseLogModel */
export interface OrthodonticsCaseLogModelType extends Instance<typeof OrthodonticsCaseLogModel.Type> {}

/* A graphql query fragment builders for OrthodonticsCaseLogModel */
export { selectFromOrthodonticsCaseLog, orthodonticsCaseLogModelPrimitives, OrthodonticsCaseLogModelSelector } from "./OrthodonticsCaseLogModel.base"

/**
 * OrthodonticsCaseLogModel
 */
export const OrthodonticsCaseLogModel = OrthodonticsCaseLogModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
