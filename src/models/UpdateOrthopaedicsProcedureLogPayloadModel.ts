import { Instance } from "mobx-state-tree"
import { UpdateOrthopaedicsProcedureLogPayloadModelBase } from "./UpdateOrthopaedicsProcedureLogPayloadModel.base"

/* The TypeScript type of an instance of UpdateOrthopaedicsProcedureLogPayloadModel */
export interface UpdateOrthopaedicsProcedureLogPayloadModelType extends Instance<typeof UpdateOrthopaedicsProcedureLogPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateOrthopaedicsProcedureLogPayloadModel */
export { selectFromUpdateOrthopaedicsProcedureLogPayload, updateOrthopaedicsProcedureLogPayloadModelPrimitives, UpdateOrthopaedicsProcedureLogPayloadModelSelector } from "./UpdateOrthopaedicsProcedureLogPayloadModel.base"

/**
 * UpdateOrthopaedicsProcedureLogPayloadModel
 */
export const UpdateOrthopaedicsProcedureLogPayloadModel = UpdateOrthopaedicsProcedureLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
