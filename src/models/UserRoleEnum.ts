/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UserRole {
  HOD="HOD",
FACULTY="FACULTY",
RESIDENTS="RESIDENTS",
ADMIN="ADMIN"
}

/**
* UserRole
*/
export const UserRoleEnumType = types.enumeration("UserRole", [
        "HOD",
  "FACULTY",
  "RESIDENTS",
  "ADMIN",
      ])
