/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum AdminWorkLogOrderable {
  createdOn="createdOn",
updatedOn="updatedOn",
date="date",
activity="activity",
otherActivity="otherActivity",
position="position",
organisation="organisation",
academicLogType="academicLogType"
}

/**
* AdminWorkLogOrderable
*/
export const AdminWorkLogOrderableEnumType = types.enumeration("AdminWorkLogOrderable", [
        "createdOn",
  "updatedOn",
  "date",
  "activity",
  "otherActivity",
  "position",
  "organisation",
  "academicLogType",
      ])
