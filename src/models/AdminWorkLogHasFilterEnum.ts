/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum AdminWorkLogHasFilter {
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
* AdminWorkLogHasFilter
*/
export const AdminWorkLogHasFilterEnumType = types.enumeration("AdminWorkLogHasFilter", [
        "createdOn",
  "updatedOn",
  "date",
  "activity",
  "otherActivity",
  "position",
  "organisation",
  "academicLogType",
      ])
