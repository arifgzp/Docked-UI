/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum Gender {
  FEMALE="FEMALE",
MALE="MALE",
OTHERS="OTHERS"
}

/**
* Gender
*/
export const GenderEnumType = types.enumeration("Gender", [
        "FEMALE",
  "MALE",
  "OTHERS",
      ])
