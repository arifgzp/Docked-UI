/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum CaseLogHasFilter {
  createdOn="createdOn",
updatedOn="updatedOn",
date="date",
hospital="hospital",
faculty="faculty",
medicalRegistrationNumber="medicalRegistrationNumber"
}

/**
* CaseLogHasFilter
*/
export const CaseLogHasFilterEnumType = types.enumeration("CaseLogHasFilter", [
        "createdOn",
  "updatedOn",
  "date",
  "hospital",
  "faculty",
  "medicalRegistrationNumber",
      ])
