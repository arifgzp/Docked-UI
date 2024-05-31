import { Instance } from "mobx-state-tree"
import { HospitalModelBase } from "./HospitalModel.base"

/* The TypeScript type of an instance of HospitalModel */
export interface HospitalModelType extends Instance<typeof HospitalModel.Type> {}

/* A graphql query fragment builders for HospitalModel */
export { selectFromHospital, hospitalModelPrimitives, HospitalModelSelector } from "./HospitalModel.base"

/**
 * HospitalModel
 */
export const HospitalModel = HospitalModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
