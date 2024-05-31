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
date="date",
hospital="hospital",
faculty="faculty",
medicalRegistrationNumber="medicalRegistrationNumber"
}

/**
* CaseLogOrderable
*/
export const CaseLogOrderableEnumType = types.enumeration("CaseLogOrderable", [
        "createdOn",
  "updatedOn",
  "date",
  "hospital",
  "faculty",
  "medicalRegistrationNumber",
      ])
