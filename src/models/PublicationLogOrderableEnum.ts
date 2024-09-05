/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum PublicationLogOrderable {
  createdOn="createdOn",
updatedOn="updatedOn",
date="date",
publicationType="publicationType",
title="title",
journalName="journalName",
status="status",
academicLogType="academicLogType"
}

/**
* PublicationLogOrderable
*/
export const PublicationLogOrderableEnumType = types.enumeration("PublicationLogOrderable", [
        "createdOn",
  "updatedOn",
  "date",
  "publicationType",
  "title",
  "journalName",
  "status",
  "academicLogType",
      ])
