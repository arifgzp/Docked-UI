/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnaesthesiaCaseLogAggregateResultModel, AnaesthesiaCaseLogAggregateResultModelType } from "./AnaesthesiaCaseLogAggregateResultModel"
import { AnaesthesiaCaseLogAggregateResultModelSelector } from "./AnaesthesiaCaseLogAggregateResultModel.base"
import { AnaesthesiaCaseLogModel, AnaesthesiaCaseLogModelType } from "./AnaesthesiaCaseLogModel"
import { AnaesthesiaCaseLogModelSelector } from "./AnaesthesiaCaseLogModel.base"
import { GenderEnumType } from "./GenderEnum"
import { OrthodonticsCaseLogAggregateResultModel, OrthodonticsCaseLogAggregateResultModelType } from "./OrthodonticsCaseLogAggregateResultModel"
import { OrthodonticsCaseLogAggregateResultModelSelector } from "./OrthodonticsCaseLogAggregateResultModel.base"
import { OrthodonticsCaseLogModel, OrthodonticsCaseLogModelType } from "./OrthodonticsCaseLogModel"
import { OrthodonticsCaseLogModelSelector } from "./OrthodonticsCaseLogModel.base"
import { OrthopaedicsCaseLogAggregateResultModel, OrthopaedicsCaseLogAggregateResultModelType } from "./OrthopaedicsCaseLogAggregateResultModel"
import { OrthopaedicsCaseLogAggregateResultModelSelector } from "./OrthopaedicsCaseLogAggregateResultModel.base"
import { OrthopaedicsCaseLogModel, OrthopaedicsCaseLogModelType } from "./OrthopaedicsCaseLogModel"
import { OrthopaedicsCaseLogModelSelector } from "./OrthopaedicsCaseLogModel.base"
import { AnaesthesiaCaseLogFilter, AnaesthesiaCaseLogOrder, OrthodonticsCaseLogFilter, OrthodonticsCaseLogOrder, OrthopaedicsCaseLogFilter, OrthopaedicsCaseLogOrder } from "./RootStore.base"
import { UserRoleEnumType } from "./UserRoleEnum"
import { UserStatusEnumType } from "./UserStatusEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  anaesthesiaCaseLog: IObservableArray<AnaesthesiaCaseLogModelType>;
  orthodonticsCaseLog: IObservableArray<OrthodonticsCaseLogModelType>;
  orthopaedicsCaseLog: IObservableArray<OrthopaedicsCaseLogModelType>;
}

/**
 * UserBase
 * auto generated base class for the model UserModel.
 */
export const UserModelBase = withTypedRefs<Refs>()(ModelBase
  .named('User')
  .props({
    __typename: types.optional(types.literal("User"), "User"),
    id: types.identifier,
    newUserVerificationCode: types.union(types.undefined, types.null, types.string),
    userName: types.union(types.undefined, types.null, types.string),
    userStatus: types.union(types.undefined, types.null, UserStatusEnumType),
    resetPasswordCode: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    gender: types.union(types.undefined, types.null, GenderEnumType),
    role: types.union(types.undefined, types.null, UserRoleEnumType),
    lastName: types.union(types.undefined, types.null, types.string),
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    countryCode: types.union(types.undefined, types.null, types.string),
    phoneNumber: types.union(types.undefined, types.null, types.string),
    combinePhoneNumber: types.union(types.undefined, types.null, types.string),
    dateOfBirth: types.union(types.undefined, types.null, types.frozen()),
    active: types.union(types.undefined, types.null, types.boolean),
    broadSpecialty: types.union(types.undefined, types.null, types.string),
    superSpecialty: types.union(types.undefined, types.null, types.string),
    subSpecialty: types.union(types.undefined, types.null, types.string),
    designation: types.union(types.undefined, types.null, types.string),
    workPlace: types.union(types.undefined, types.null, types.string),
    city: types.union(types.undefined, types.null, types.string),
    medicalCouncilName: types.union(types.undefined, types.null, types.string),
    yearOfRegistration: types.union(types.undefined, types.null, types.frozen()),
    medicalRegistrationNumber: types.union(types.undefined, types.null, types.string),
    verifiedMedicalRegistrationNumber: types.union(types.undefined, types.null, types.boolean),
    targetedCaseLogNumber: types.union(types.undefined, types.null, types.integer),
    anaesthesiaCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AnaesthesiaCaseLogModel))))),
    orthodonticsCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthodonticsCaseLogModel))))),
    orthopaedicsCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthopaedicsCaseLogModel))))),
    anaesthesiaCaseLogAggregate: types.union(types.undefined, types.null, types.late((): any => AnaesthesiaCaseLogAggregateResultModel)),
    orthodonticsCaseLogAggregate: types.union(types.undefined, types.null, types.late((): any => OrthodonticsCaseLogAggregateResultModel)),
    orthopaedicsCaseLogAggregate: types.union(types.undefined, types.null, types.late((): any => OrthopaedicsCaseLogAggregateResultModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get newUserVerificationCode() { return this.__attr(`newUserVerificationCode`) }
  get userName() { return this.__attr(`userName`) }
  get userStatus() { return this.__attr(`userStatus`) }
  get resetPasswordCode() { return this.__attr(`resetPasswordCode`) }
  get name() { return this.__attr(`name`) }
  get gender() { return this.__attr(`gender`) }
  get role() { return this.__attr(`role`) }
  get lastName() { return this.__attr(`lastName`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get countryCode() { return this.__attr(`countryCode`) }
  get phoneNumber() { return this.__attr(`phoneNumber`) }
  get combinePhoneNumber() { return this.__attr(`combinePhoneNumber`) }
  get dateOfBirth() { return this.__attr(`dateOfBirth`) }
  get active() { return this.__attr(`active`) }
  get broadSpecialty() { return this.__attr(`broadSpecialty`) }
  get superSpecialty() { return this.__attr(`superSpecialty`) }
  get subSpecialty() { return this.__attr(`subSpecialty`) }
  get designation() { return this.__attr(`designation`) }
  get workPlace() { return this.__attr(`workPlace`) }
  get city() { return this.__attr(`city`) }
  get medicalCouncilName() { return this.__attr(`medicalCouncilName`) }
  get yearOfRegistration() { return this.__attr(`yearOfRegistration`) }
  get medicalRegistrationNumber() { return this.__attr(`medicalRegistrationNumber`) }
  get verifiedMedicalRegistrationNumber() { return this.__attr(`verifiedMedicalRegistrationNumber`) }
  get targetedCaseLogNumber() { return this.__attr(`targetedCaseLogNumber`) }
  anaesthesiaCaseLog(builder: string | AnaesthesiaCaseLogModelSelector | ((selector: AnaesthesiaCaseLogModelSelector) => AnaesthesiaCaseLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaCaseLogFilter | null), order?: (AnaesthesiaCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`anaesthesiaCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCaseLogModelSelector, builder) }
  orthodonticsCaseLog(builder: string | OrthodonticsCaseLogModelSelector | ((selector: OrthodonticsCaseLogModelSelector) => OrthodonticsCaseLogModelSelector) | undefined, args?: { filter?: (OrthodonticsCaseLogFilter | null), order?: (OrthodonticsCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthodonticsCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsCaseLogModelSelector, builder) }
  orthopaedicsCaseLog(builder: string | OrthopaedicsCaseLogModelSelector | ((selector: OrthopaedicsCaseLogModelSelector) => OrthopaedicsCaseLogModelSelector) | undefined, args?: { filter?: (OrthopaedicsCaseLogFilter | null), order?: (OrthopaedicsCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthopaedicsCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsCaseLogModelSelector, builder) }
  anaesthesiaCaseLogAggregate(builder: string | AnaesthesiaCaseLogAggregateResultModelSelector | ((selector: AnaesthesiaCaseLogAggregateResultModelSelector) => AnaesthesiaCaseLogAggregateResultModelSelector) | undefined, args?: { filter?: (AnaesthesiaCaseLogFilter | null) }) { return this.__child(`anaesthesiaCaseLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCaseLogAggregateResultModelSelector, builder) }
  orthodonticsCaseLogAggregate(builder: string | OrthodonticsCaseLogAggregateResultModelSelector | ((selector: OrthodonticsCaseLogAggregateResultModelSelector) => OrthodonticsCaseLogAggregateResultModelSelector) | undefined, args?: { filter?: (OrthodonticsCaseLogFilter | null) }) { return this.__child(`orthodonticsCaseLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsCaseLogAggregateResultModelSelector, builder) }
  orthopaedicsCaseLogAggregate(builder: string | OrthopaedicsCaseLogAggregateResultModelSelector | ((selector: OrthopaedicsCaseLogAggregateResultModelSelector) => OrthopaedicsCaseLogAggregateResultModelSelector) | undefined, args?: { filter?: (OrthopaedicsCaseLogFilter | null) }) { return this.__child(`orthopaedicsCaseLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsCaseLogAggregateResultModelSelector, builder) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().newUserVerificationCode.userName.userStatus.resetPasswordCode.name.gender.role.lastName.createdOn.updatedOn.countryCode.phoneNumber.combinePhoneNumber.dateOfBirth.active.broadSpecialty.superSpecialty.subSpecialty.designation.workPlace.city.medicalCouncilName.yearOfRegistration.medicalRegistrationNumber.verifiedMedicalRegistrationNumber.targetedCaseLogNumber
