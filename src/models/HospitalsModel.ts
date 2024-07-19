import { Instance } from "mobx-state-tree"
import { HospitalsModelBase } from "./HospitalsModel.base"

/* The TypeScript type of an instance of HospitalsModel */
export interface HospitalsModelType extends Instance<typeof HospitalsModel.Type> {}

/* A graphql query fragment builders for HospitalsModel */
export { selectFromHospitals, hospitalsModelPrimitives, HospitalsModelSelector } from "./HospitalsModel.base"

/**
 * HospitalsModel
 */
export const HospitalsModel = HospitalsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
