import { Instance } from "mobx-state-tree"
import { AnaesthesiaCaseLogModelBase } from "./AnaesthesiaCaseLogModel.base"

/* The TypeScript type of an instance of AnaesthesiaCaseLogModel */
export interface AnaesthesiaCaseLogModelType extends Instance<typeof AnaesthesiaCaseLogModel.Type> {}

/* A graphql query fragment builders for AnaesthesiaCaseLogModel */
export { selectFromAnaesthesiaCaseLog, anaesthesiaCaseLogModelPrimitives, AnaesthesiaCaseLogModelSelector } from "./AnaesthesiaCaseLogModel.base"

/**
 * AnaesthesiaCaseLogModel
 */
export const AnaesthesiaCaseLogModel = AnaesthesiaCaseLogModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
