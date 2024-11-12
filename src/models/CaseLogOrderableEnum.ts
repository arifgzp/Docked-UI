/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum CaseLogOrderable {
  createdOn="createdOn",
updatedOn="updatedOn",
logType="logType",
rejectionMessage="rejectionMessage",
rotation="rotation",
hospital="hospital"
}

/**
* CaseLogOrderable
*/
export const CaseLogOrderableEnumType = types.enumeration("CaseLogOrderable", [
        "createdOn",
  "updatedOn",
  "logType",
  "rejectionMessage",
  "rotation",
  "hospital",
      ])
