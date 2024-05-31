/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum HospitalHasFilter {
  createdOn="createdOn",
updatedOn="updatedOn",
name="name",
registeredName="registeredName",
gstin="gstin",
address="address",
faculties="faculties"
}

/**
* HospitalHasFilter
*/
export const HospitalHasFilterEnumType = types.enumeration("HospitalHasFilter", [
        "createdOn",
  "updatedOn",
  "name",
  "registeredName",
  "gstin",
  "address",
  "faculties",
      ])
