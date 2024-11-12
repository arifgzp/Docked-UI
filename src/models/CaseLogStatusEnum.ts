/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum CaseLogStatus {
  CREATED="CREATED",
PENDING="PENDING",
APPROVED="APPROVED",
REJECTED="REJECTED"
}

/**
* CaseLogStatus
*/
export const CaseLogStatusEnumType = types.enumeration("CaseLogStatus", [
        "CREATED",
  "PENDING",
  "APPROVED",
  "REJECTED",
      ])
