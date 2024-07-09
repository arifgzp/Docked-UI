import { Instance } from "mobx-state-tree"
import { DeleteOrthopaedicsProcedureLogPayloadModelBase } from "./DeleteOrthopaedicsProcedureLogPayloadModel.base"

/* The TypeScript type of an instance of DeleteOrthopaedicsProcedureLogPayloadModel */
export interface DeleteOrthopaedicsProcedureLogPayloadModelType extends Instance<typeof DeleteOrthopaedicsProcedureLogPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteOrthopaedicsProcedureLogPayloadModel */
export { selectFromDeleteOrthopaedicsProcedureLogPayload, deleteOrthopaedicsProcedureLogPayloadModelPrimitives, DeleteOrthopaedicsProcedureLogPayloadModelSelector } from "./DeleteOrthopaedicsProcedureLogPayloadModel.base"

/**
 * DeleteOrthopaedicsProcedureLogPayloadModel
 */
export const DeleteOrthopaedicsProcedureLogPayloadModel = DeleteOrthopaedicsProcedureLogPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
