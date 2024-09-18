/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UserFeedbackOrderable {
  createdOn="createdOn",
updatedOn="updatedOn",
title="title",
description="description",
userEmail="userEmail"
}

/**
* UserFeedbackOrderable
*/
export const UserFeedbackOrderableEnumType = types.enumeration("UserFeedbackOrderable", [
        "createdOn",
  "updatedOn",
  "title",
  "description",
  "userEmail",
      ])
