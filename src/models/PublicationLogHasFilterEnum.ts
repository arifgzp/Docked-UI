/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PublicationLogHasFilter {
  createdOn="createdOn",
updatedOn="updatedOn",
date="date",
type="type",
title="title",
journalName="journalName",
status="status",
academicLogType="academicLogType"
}

/**
* PublicationLogHasFilter
*/
export const PublicationLogHasFilterEnumType = types.enumeration("PublicationLogHasFilter", [
        "createdOn",
  "updatedOn",
  "date",
  "type",
  "title",
  "journalName",
  "status",
  "academicLogType",
      ])
