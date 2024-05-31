/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UserAggregateResultBase
 * auto generated base class for the model UserAggregateResultModel.
 */
export const UserAggregateResultModelBase = ModelBase
  .named('UserAggregateResult')
  .props({
    __typename: types.optional(types.literal("UserAggregateResult"), "UserAggregateResult"),
    count: types.union(types.undefined, types.null, types.integer),
    newUserVerificationCodeMin: types.union(types.undefined, types.null, types.string),
    newUserVerificationCodeMax: types.union(types.undefined, types.null, types.string),
    userNameMin: types.union(types.undefined, types.null, types.string),
    userNameMax: types.union(types.undefined, types.null, types.string),
    resetPasswordCodeMin: types.union(types.undefined, types.null, types.string),
    resetPasswordCodeMax: types.union(types.undefined, types.null, types.string),
    nameMin: types.union(types.undefined, types.null, types.string),
    nameMax: types.union(types.undefined, types.null, types.string),
    lastNameMin: types.union(types.undefined, types.null, types.string),
    lastNameMax: types.union(types.undefined, types.null, types.string),
    createdOnMin: types.union(types.undefined, types.null, types.frozen()),
    createdOnMax: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMin: types.union(types.undefined, types.null, types.frozen()),
    updatedOnMax: types.union(types.undefined, types.null, types.frozen()),
    countryCodeMin: types.union(types.undefined, types.null, types.string),
    countryCodeMax: types.union(types.undefined, types.null, types.string),
    phoneNumberMin: types.union(types.undefined, types.null, types.string),
    phoneNumberMax: types.union(types.undefined, types.null, types.string),
    combinePhoneNumberMin: types.union(types.undefined, types.null, types.string),
    combinePhoneNumberMax: types.union(types.undefined, types.null, types.string),
    dateOfBirthMin: types.union(types.undefined, types.null, types.frozen()),
    dateOfBirthMax: types.union(types.undefined, types.null, types.frozen()),
    broadSpecialtyMin: types.union(types.undefined, types.null, types.string),
    broadSpecialtyMax: types.union(types.undefined, types.null, types.string),
    superSpecialtyMin: types.union(types.undefined, types.null, types.string),
    superSpecialtyMax: types.union(types.undefined, types.null, types.string),
    subSpecialtyMin: types.union(types.undefined, types.null, types.string),
    subSpecialtyMax: types.union(types.undefined, types.null, types.string),
    designationMin: types.union(types.undefined, types.null, types.string),
    designationMax: types.union(types.undefined, types.null, types.string),
    workPlaceMin: types.union(types.undefined, types.null, types.string),
    workPlaceMax: types.union(types.undefined, types.null, types.string),
    cityMin: types.union(types.undefined, types.null, types.string),
    cityMax: types.union(types.undefined, types.null, types.string),
    medicalCouncilNameMin: types.union(types.undefined, types.null, types.string),
    medicalCouncilNameMax: types.union(types.undefined, types.null, types.string),
    yearOfRegistrationMin: types.union(types.undefined, types.null, types.frozen()),
    yearOfRegistrationMax: types.union(types.undefined, types.null, types.frozen()),
    medicalRegistrationNumberMin: types.union(types.undefined, types.null, types.string),
    medicalRegistrationNumberMax: types.union(types.undefined, types.null, types.string),
    targetedCaseLogNumberMin: types.union(types.undefined, types.null, types.integer),
    targetedCaseLogNumberMax: types.union(types.undefined, types.null, types.integer),
    targetedCaseLogNumberSum: types.union(types.undefined, types.null, types.integer),
    targetedCaseLogNumberAvg: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserAggregateResultModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get newUserVerificationCodeMin() { return this.__attr(`newUserVerificationCodeMin`) }
  get newUserVerificationCodeMax() { return this.__attr(`newUserVerificationCodeMax`) }
  get userNameMin() { return this.__attr(`userNameMin`) }
  get userNameMax() { return this.__attr(`userNameMax`) }
  get resetPasswordCodeMin() { return this.__attr(`resetPasswordCodeMin`) }
  get resetPasswordCodeMax() { return this.__attr(`resetPasswordCodeMax`) }
  get nameMin() { return this.__attr(`nameMin`) }
  get nameMax() { return this.__attr(`nameMax`) }
  get lastNameMin() { return this.__attr(`lastNameMin`) }
  get lastNameMax() { return this.__attr(`lastNameMax`) }
  get createdOnMin() { return this.__attr(`createdOnMin`) }
  get createdOnMax() { return this.__attr(`createdOnMax`) }
  get updatedOnMin() { return this.__attr(`updatedOnMin`) }
  get updatedOnMax() { return this.__attr(`updatedOnMax`) }
  get countryCodeMin() { return this.__attr(`countryCodeMin`) }
  get countryCodeMax() { return this.__attr(`countryCodeMax`) }
  get phoneNumberMin() { return this.__attr(`phoneNumberMin`) }
  get phoneNumberMax() { return this.__attr(`phoneNumberMax`) }
  get combinePhoneNumberMin() { return this.__attr(`combinePhoneNumberMin`) }
  get combinePhoneNumberMax() { return this.__attr(`combinePhoneNumberMax`) }
  get dateOfBirthMin() { return this.__attr(`dateOfBirthMin`) }
  get dateOfBirthMax() { return this.__attr(`dateOfBirthMax`) }
  get broadSpecialtyMin() { return this.__attr(`broadSpecialtyMin`) }
  get broadSpecialtyMax() { return this.__attr(`broadSpecialtyMax`) }
  get superSpecialtyMin() { return this.__attr(`superSpecialtyMin`) }
  get superSpecialtyMax() { return this.__attr(`superSpecialtyMax`) }
  get subSpecialtyMin() { return this.__attr(`subSpecialtyMin`) }
  get subSpecialtyMax() { return this.__attr(`subSpecialtyMax`) }
  get designationMin() { return this.__attr(`designationMin`) }
  get designationMax() { return this.__attr(`designationMax`) }
  get workPlaceMin() { return this.__attr(`workPlaceMin`) }
  get workPlaceMax() { return this.__attr(`workPlaceMax`) }
  get cityMin() { return this.__attr(`cityMin`) }
  get cityMax() { return this.__attr(`cityMax`) }
  get medicalCouncilNameMin() { return this.__attr(`medicalCouncilNameMin`) }
  get medicalCouncilNameMax() { return this.__attr(`medicalCouncilNameMax`) }
  get yearOfRegistrationMin() { return this.__attr(`yearOfRegistrationMin`) }
  get yearOfRegistrationMax() { return this.__attr(`yearOfRegistrationMax`) }
  get medicalRegistrationNumberMin() { return this.__attr(`medicalRegistrationNumberMin`) }
  get medicalRegistrationNumberMax() { return this.__attr(`medicalRegistrationNumberMax`) }
  get targetedCaseLogNumberMin() { return this.__attr(`targetedCaseLogNumberMin`) }
  get targetedCaseLogNumberMax() { return this.__attr(`targetedCaseLogNumberMax`) }
  get targetedCaseLogNumberSum() { return this.__attr(`targetedCaseLogNumberSum`) }
  get targetedCaseLogNumberAvg() { return this.__attr(`targetedCaseLogNumberAvg`) }
}
export function selectFromUserAggregateResult() {
  return new UserAggregateResultModelSelector()
}

export const userAggregateResultModelPrimitives = selectFromUserAggregateResult().count.newUserVerificationCodeMin.newUserVerificationCodeMax.userNameMin.userNameMax.resetPasswordCodeMin.resetPasswordCodeMax.nameMin.nameMax.lastNameMin.lastNameMax.createdOnMin.createdOnMax.updatedOnMin.updatedOnMax.countryCodeMin.countryCodeMax.phoneNumberMin.phoneNumberMax.combinePhoneNumberMin.combinePhoneNumberMax.dateOfBirthMin.dateOfBirthMax.broadSpecialtyMin.broadSpecialtyMax.superSpecialtyMin.superSpecialtyMax.subSpecialtyMin.subSpecialtyMax.designationMin.designationMax.workPlaceMin.workPlaceMax.cityMin.cityMax.medicalCouncilNameMin.medicalCouncilNameMax.yearOfRegistrationMin.yearOfRegistrationMax.medicalRegistrationNumberMin.medicalRegistrationNumberMax.targetedCaseLogNumberMin.targetedCaseLogNumberMax.targetedCaseLogNumberSum.targetedCaseLogNumberAvg
