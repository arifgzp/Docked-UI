import { Instance } from "mobx-state-tree"
import { FormLabelsModelBase } from "./FormLabelsModel.base"

/* The TypeScript type of an instance of FormLabelsModel */
export interface FormLabelsModelType extends Instance<typeof FormLabelsModel.Type> {}

/* A graphql query fragment builders for FormLabelsModel */
export { selectFromFormLabels, formLabelsModelPrimitives, FormLabelsModelSelector } from "./FormLabelsModel.base"

/**
 * FormLabelsModel
 */
export const FormLabelsModel = FormLabelsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
