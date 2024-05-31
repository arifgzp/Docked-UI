/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UserRole {
  DOCTOR="DOCTOR",
RESIDENTS="RESIDENTS"
}

/**
* UserRole
*/
export const UserRoleEnumType = types.enumeration("UserRole", [
        "DOCTOR",
  "RESIDENTS",
      ])
