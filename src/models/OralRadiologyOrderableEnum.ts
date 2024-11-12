/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OralRadiologyOrderable {
  createdOn="createdOn",
updatedOn="updatedOn",
date="date",
patientAge="patientAge",
patientSex="patientSex",
report="report",
diagnosis="diagnosis",
chiefComplaint="chiefComplaint",
caseType="caseType",
remarks="remarks"
}

/**
* OralRadiologyOrderable
*/
export const OralRadiologyOrderableEnumType = types.enumeration("OralRadiologyOrderable", [
        "createdOn",
  "updatedOn",
  "date",
  "patientAge",
  "patientSex",
  "report",
  "diagnosis",
  "chiefComplaint",
  "caseType",
  "remarks",
      ])
