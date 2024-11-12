/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OralMedicineCaseLogHasFilter {
  createdOn="createdOn",
updatedOn="updatedOn",
date="date",
patientAge="patientAge",
patientSex="patientSex",
procedure="procedure",
comorbidities="comorbidities",
lesion="lesion",
drugAllergyReaction="drugAllergyReaction",
habitHistory="habitHistory",
treatment="treatment",
diagnosis="diagnosis",
remarks="remarks"
}

/**
* OralMedicineCaseLogHasFilter
*/
export const OralMedicineCaseLogHasFilterEnumType = types.enumeration("OralMedicineCaseLogHasFilter", [
        "createdOn",
  "updatedOn",
  "date",
  "patientAge",
  "patientSex",
  "procedure",
  "comorbidities",
  "lesion",
  "drugAllergyReaction",
  "habitHistory",
  "treatment",
  "diagnosis",
  "remarks",
      ])
