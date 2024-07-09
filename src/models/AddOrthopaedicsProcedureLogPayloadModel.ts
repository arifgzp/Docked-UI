import { Instance } from "mobx-state-tree"
import { AddOrthopaedicsProcedureLogPayloadModelBase } from "./AddOrthopaedicsProcedureLogPayloadModel.base"

/* The TypeScript type of an instance of AddOrthopaedicsProcedureLogPayloadModel */
export interface AddOrthopaedicsProcedureLogPayloadModelType extends Instance<typeof AddOrthopaedicsProcedureLogPayloadModel.Type> {}

/* A graphql query fragment builders for AddOrthopaedicsProcedureLogPayloadModel */
export { selectFromAddOrthopaedicsProcedureLogPayload, addOrthopaedicsProcedureLogPayloadModelPrimitives, AddOrthopaedicsProcedureLogPayloadModelSelector } from "./AddOrthopaedicsProcedureLogPayloadModel.base"

/**
 * AddOrthopaedicsProcedureLogPayloadModel
 */
export const AddOrthopaedicsProcedureLogPayloadModel = AddOrthopaedicsProcedureLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
