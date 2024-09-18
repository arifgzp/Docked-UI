import { Instance } from "mobx-state-tree"
import { UpdateUserFeedbackPayloadModelBase } from "./UpdateUserFeedbackPayloadModel.base"

/* The TypeScript type of an instance of UpdateUserFeedbackPayloadModel */
export interface UpdateUserFeedbackPayloadModelType extends Instance<typeof UpdateUserFeedbackPayloadModel.Type> {}

/* A graphql query fragment builders for UpdateUserFeedbackPayloadModel */
export { selectFromUpdateUserFeedbackPayload, updateUserFeedbackPayloadModelPrimitives, UpdateUserFeedbackPayloadModelSelector } from "./UpdateUserFeedbackPayloadModel.base"

/**
 * UpdateUserFeedbackPayloadModel
 */
export const UpdateUserFeedbackPayloadModel = UpdateUserFeedbackPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
