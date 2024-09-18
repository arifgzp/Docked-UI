import { Instance } from "mobx-state-tree"
import { DeleteUserFeedbackPayloadModelBase } from "./DeleteUserFeedbackPayloadModel.base"

/* The TypeScript type of an instance of DeleteUserFeedbackPayloadModel */
export interface DeleteUserFeedbackPayloadModelType extends Instance<typeof DeleteUserFeedbackPayloadModel.Type> {}

/* A graphql query fragment builders for DeleteUserFeedbackPayloadModel */
export { selectFromDeleteUserFeedbackPayload, deleteUserFeedbackPayloadModelPrimitives, DeleteUserFeedbackPayloadModelSelector } from "./DeleteUserFeedbackPayloadModel.base"

/**
 * DeleteUserFeedbackPayloadModel
 */
export const DeleteUserFeedbackPayloadModel = DeleteUserFeedbackPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
