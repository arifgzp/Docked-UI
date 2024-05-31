/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum HospitalOrderable {
  createdOn="createdOn",
updatedOn="updatedOn",
name="name",
registeredName="registeredName",
gstin="gstin",
address="address"
}

/**
* HospitalOrderable
*/
export const HospitalOrderableEnumType = types.enumeration("HospitalOrderable", [
        "createdOn",
  "updatedOn",
  "name",
  "registeredName",
  "gstin",
  "address",
      ])
