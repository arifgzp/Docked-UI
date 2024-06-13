/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UserStatus {
  REGISTERED="REGISTERED",
RESET_PASSWORD_REQUIRED="RESET_PASSWORD_REQUIRED",
VERIFICATION_REQUIRED="VERIFICATION_REQUIRED",
WIZARD_PENDING="WIZARD_PENDING"
}

/**
* UserStatus
*/
export const UserStatusEnumType = types.enumeration("UserStatus", [
        "REGISTERED",
  "RESET_PASSWORD_REQUIRED",
  "VERIFICATION_REQUIRED",
  "WIZARD_PENDING",
      ])
