/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UserFeedbackHasFilter {
  createdOn="createdOn",
updatedOn="updatedOn",
title="title",
description="description",
userEmail="userEmail"
}

/**
* UserFeedbackHasFilter
*/
export const UserFeedbackHasFilterEnumType = types.enumeration("UserFeedbackHasFilter", [
        "createdOn",
  "updatedOn",
  "title",
  "description",
  "userEmail",
      ])
