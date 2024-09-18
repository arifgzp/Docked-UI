import { Instance } from "mobx-state-tree"
import { AddUserFeedbackPayloadModelBase } from "./AddUserFeedbackPayloadModel.base"

/* The TypeScript type of an instance of AddUserFeedbackPayloadModel */
export interface AddUserFeedbackPayloadModelType extends Instance<typeof AddUserFeedbackPayloadModel.Type> {}

/* A graphql query fragment builders for AddUserFeedbackPayloadModel */
export { selectFromAddUserFeedbackPayload, addUserFeedbackPayloadModelPrimitives, AddUserFeedbackPayloadModelSelector } from "./AddUserFeedbackPayloadModel.base"

/**
 * AddUserFeedbackPayloadModel
 */
export const AddUserFeedbackPayloadModel = AddUserFeedbackPayloadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
