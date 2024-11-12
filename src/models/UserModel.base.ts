/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AcademicLogAggregateResultModel, AcademicLogAggregateResultModelType } from "./AcademicLogAggregateResultModel"
import { AcademicLogAggregateResultModelSelector } from "./AcademicLogAggregateResultModel.base"
import { AcademicLogModel, AcademicLogModelType } from "./AcademicLogModel"
import { AcademicLogModelSelector } from "./AcademicLogModel.base"
import { AdminWorkLogAggregateResultModel, AdminWorkLogAggregateResultModelType } from "./AdminWorkLogAggregateResultModel"
import { AdminWorkLogAggregateResultModelSelector } from "./AdminWorkLogAggregateResultModel.base"
import { AdminWorkLogModel, AdminWorkLogModelType } from "./AdminWorkLogModel"
import { AdminWorkLogModelSelector } from "./AdminWorkLogModel.base"
import { CustomCaseAggregateResultModel, CustomCaseAggregateResultModelType } from "./CustomCaseAggregateResultModel"
import { CustomCaseAggregateResultModelSelector } from "./CustomCaseAggregateResultModel.base"
import { CustomCaseModel, CustomCaseModelType } from "./CustomCaseModel"
import { CustomCaseModelSelector } from "./CustomCaseModel.base"
import { CustomLogAggregateResultModel, CustomLogAggregateResultModelType } from "./CustomLogAggregateResultModel"
import { CustomLogAggregateResultModelSelector } from "./CustomLogAggregateResultModel.base"
import { CustomLogModel, CustomLogModelType } from "./CustomLogModel"
import { CustomLogModelSelector } from "./CustomLogModel.base"
import { GenderEnumType } from "./GenderEnum"
import { PublicationLogAggregateResultModel, PublicationLogAggregateResultModelType } from "./PublicationLogAggregateResultModel"
import { PublicationLogAggregateResultModelSelector } from "./PublicationLogAggregateResultModel.base"
import { PublicationLogModel, PublicationLogModelType } from "./PublicationLogModel"
import { PublicationLogModelSelector } from "./PublicationLogModel.base"
import { AcademicLogFilter, AcademicLogOrder, AdminWorkLogFilter, AdminWorkLogOrder, CustomCaseFilter, CustomCaseOrder, CustomLogFilter, CustomLogOrder, PublicationLogFilter, PublicationLogOrder, ThesisCaseFilter, ThesisCaseOrder, ThesisLogFilter, ThesisLogOrder, UserFeedbackFilter, UserFeedbackOrder } from "./RootStore.base"
import { ThesisCaseAggregateResultModel, ThesisCaseAggregateResultModelType } from "./ThesisCaseAggregateResultModel"
import { ThesisCaseAggregateResultModelSelector } from "./ThesisCaseAggregateResultModel.base"
import { ThesisCaseModel, ThesisCaseModelType } from "./ThesisCaseModel"
import { ThesisCaseModelSelector } from "./ThesisCaseModel.base"
import { ThesisLogAggregateResultModel, ThesisLogAggregateResultModelType } from "./ThesisLogAggregateResultModel"
import { ThesisLogAggregateResultModelSelector } from "./ThesisLogAggregateResultModel.base"
import { ThesisLogModel, ThesisLogModelType } from "./ThesisLogModel"
import { ThesisLogModelSelector } from "./ThesisLogModel.base"
import { UserFeedbackAggregateResultModel, UserFeedbackAggregateResultModelType } from "./UserFeedbackAggregateResultModel"
import { UserFeedbackAggregateResultModelSelector } from "./UserFeedbackAggregateResultModel.base"
import { UserFeedbackModel, UserFeedbackModelType } from "./UserFeedbackModel"
import { UserFeedbackModelSelector } from "./UserFeedbackModel.base"
import { UserRoleEnumType } from "./UserRoleEnum"
import { UserStatusEnumType } from "./UserStatusEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  academicLog: IObservableArray<AcademicLogModelType>;
  publicationLog: IObservableArray<PublicationLogModelType>;
  adminWorkLog: IObservableArray<AdminWorkLogModelType>;
  thesisLog: IObservableArray<ThesisLogModelType>;
  customLog: IObservableArray<CustomLogModelType>;
  thesisCases: IObservableArray<ThesisCaseModelType>;
  customCases: IObservableArray<CustomCaseModelType>;
  userFeedback: IObservableArray<UserFeedbackModelType>;
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
    specialReferenceIdForFaculty: types.union(types.undefined, types.null, types.string),
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
    lastDateOfCaseLogCreation: types.union(types.undefined, types.null, types.frozen()),
    numberOfCaseLogsCreated: types.union(types.undefined, types.null, types.integer),
    active: types.union(types.undefined, types.null, types.boolean),
    broadSpecialty: types.union(types.undefined, types.null, types.string),
    superSpecialty: types.union(types.undefined, types.null, types.string),
    subSpecialty: types.union(types.undefined, types.null, types.string),
    designation: types.union(types.undefined, types.null, types.string),
    designationOthers: types.union(types.undefined, types.null, types.string),
    workPlace: types.union(types.undefined, types.null, types.string),
    city: types.union(types.undefined, types.null, types.string),
    medicalCouncilName: types.union(types.undefined, types.null, types.string),
    yearOfRegistration: types.union(types.undefined, types.null, types.frozen()),
    medicalRegistrationNumber: types.union(types.undefined, types.null, types.string),
    verifiedMedicalRegistrationNumber: types.union(types.undefined, types.null, types.boolean),
    academicLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AcademicLogModel))))),
    publicationLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PublicationLogModel))))),
    adminWorkLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AdminWorkLogModel))))),
    thesisLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ThesisLogModel))))),
    customLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CustomLogModel))))),
    thesisCases: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ThesisCaseModel))))),
    customCases: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => CustomCaseModel))))),
    imagePath: types.union(types.undefined, types.null, types.string),
    userFeedback: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => UserFeedbackModel))))),
    academicLogAggregate: types.union(types.undefined, types.null, types.late((): any => AcademicLogAggregateResultModel)),
    publicationLogAggregate: types.union(types.undefined, types.null, types.late((): any => PublicationLogAggregateResultModel)),
    adminWorkLogAggregate: types.union(types.undefined, types.null, types.late((): any => AdminWorkLogAggregateResultModel)),
    thesisLogAggregate: types.union(types.undefined, types.null, types.late((): any => ThesisLogAggregateResultModel)),
    customLogAggregate: types.union(types.undefined, types.null, types.late((): any => CustomLogAggregateResultModel)),
    thesisCasesAggregate: types.union(types.undefined, types.null, types.late((): any => ThesisCaseAggregateResultModel)),
    customCasesAggregate: types.union(types.undefined, types.null, types.late((): any => CustomCaseAggregateResultModel)),
    userFeedbackAggregate: types.union(types.undefined, types.null, types.late((): any => UserFeedbackAggregateResultModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class UserModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get specialReferenceIdForFaculty() { return this.__attr(`specialReferenceIdForFaculty`) }
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
  get lastDateOfCaseLogCreation() { return this.__attr(`lastDateOfCaseLogCreation`) }
  get numberOfCaseLogsCreated() { return this.__attr(`numberOfCaseLogsCreated`) }
  get active() { return this.__attr(`active`) }
  get broadSpecialty() { return this.__attr(`broadSpecialty`) }
  get superSpecialty() { return this.__attr(`superSpecialty`) }
  get subSpecialty() { return this.__attr(`subSpecialty`) }
  get designation() { return this.__attr(`designation`) }
  get designationOthers() { return this.__attr(`designationOthers`) }
  get workPlace() { return this.__attr(`workPlace`) }
  get city() { return this.__attr(`city`) }
  get medicalCouncilName() { return this.__attr(`medicalCouncilName`) }
  get yearOfRegistration() { return this.__attr(`yearOfRegistration`) }
  get medicalRegistrationNumber() { return this.__attr(`medicalRegistrationNumber`) }
  get verifiedMedicalRegistrationNumber() { return this.__attr(`verifiedMedicalRegistrationNumber`) }
  get imagePath() { return this.__attr(`imagePath`) }
  academicLog(builder: string | AcademicLogModelSelector | ((selector: AcademicLogModelSelector) => AcademicLogModelSelector) | undefined, args?: { filter?: (AcademicLogFilter | null), order?: (AcademicLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`academicLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AcademicLogModelSelector, builder) }
  publicationLog(builder: string | PublicationLogModelSelector | ((selector: PublicationLogModelSelector) => PublicationLogModelSelector) | undefined, args?: { filter?: (PublicationLogFilter | null), order?: (PublicationLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`publicationLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), PublicationLogModelSelector, builder) }
  adminWorkLog(builder: string | AdminWorkLogModelSelector | ((selector: AdminWorkLogModelSelector) => AdminWorkLogModelSelector) | undefined, args?: { filter?: (AdminWorkLogFilter | null), order?: (AdminWorkLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`adminWorkLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AdminWorkLogModelSelector, builder) }
  thesisLog(builder: string | ThesisLogModelSelector | ((selector: ThesisLogModelSelector) => ThesisLogModelSelector) | undefined, args?: { filter?: (ThesisLogFilter | null), order?: (ThesisLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`thesisLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ThesisLogModelSelector, builder) }
  customLog(builder: string | CustomLogModelSelector | ((selector: CustomLogModelSelector) => CustomLogModelSelector) | undefined, args?: { filter?: (CustomLogFilter | null), order?: (CustomLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`customLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomLogModelSelector, builder) }
  thesisCases(builder: string | ThesisCaseModelSelector | ((selector: ThesisCaseModelSelector) => ThesisCaseModelSelector) | undefined, args?: { filter?: (ThesisCaseFilter | null), order?: (ThesisCaseOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`thesisCases`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ThesisCaseModelSelector, builder) }
  customCases(builder: string | CustomCaseModelSelector | ((selector: CustomCaseModelSelector) => CustomCaseModelSelector) | undefined, args?: { filter?: (CustomCaseFilter | null), order?: (CustomCaseOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`customCases`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomCaseModelSelector, builder) }
  userFeedback(builder: string | UserFeedbackModelSelector | ((selector: UserFeedbackModelSelector) => UserFeedbackModelSelector) | undefined, args?: { filter?: (UserFeedbackFilter | null), order?: (UserFeedbackOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`userFeedback`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserFeedbackModelSelector, builder) }
  academicLogAggregate(builder: string | AcademicLogAggregateResultModelSelector | ((selector: AcademicLogAggregateResultModelSelector) => AcademicLogAggregateResultModelSelector) | undefined, args?: { filter?: (AcademicLogFilter | null) }) { return this.__child(`academicLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AcademicLogAggregateResultModelSelector, builder) }
  publicationLogAggregate(builder: string | PublicationLogAggregateResultModelSelector | ((selector: PublicationLogAggregateResultModelSelector) => PublicationLogAggregateResultModelSelector) | undefined, args?: { filter?: (PublicationLogFilter | null) }) { return this.__child(`publicationLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), PublicationLogAggregateResultModelSelector, builder) }
  adminWorkLogAggregate(builder: string | AdminWorkLogAggregateResultModelSelector | ((selector: AdminWorkLogAggregateResultModelSelector) => AdminWorkLogAggregateResultModelSelector) | undefined, args?: { filter?: (AdminWorkLogFilter | null) }) { return this.__child(`adminWorkLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AdminWorkLogAggregateResultModelSelector, builder) }
  thesisLogAggregate(builder: string | ThesisLogAggregateResultModelSelector | ((selector: ThesisLogAggregateResultModelSelector) => ThesisLogAggregateResultModelSelector) | undefined, args?: { filter?: (ThesisLogFilter | null) }) { return this.__child(`thesisLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ThesisLogAggregateResultModelSelector, builder) }
  customLogAggregate(builder: string | CustomLogAggregateResultModelSelector | ((selector: CustomLogAggregateResultModelSelector) => CustomLogAggregateResultModelSelector) | undefined, args?: { filter?: (CustomLogFilter | null) }) { return this.__child(`customLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomLogAggregateResultModelSelector, builder) }
  thesisCasesAggregate(builder: string | ThesisCaseAggregateResultModelSelector | ((selector: ThesisCaseAggregateResultModelSelector) => ThesisCaseAggregateResultModelSelector) | undefined, args?: { filter?: (ThesisCaseFilter | null) }) { return this.__child(`thesisCasesAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), ThesisCaseAggregateResultModelSelector, builder) }
  customCasesAggregate(builder: string | CustomCaseAggregateResultModelSelector | ((selector: CustomCaseAggregateResultModelSelector) => CustomCaseAggregateResultModelSelector) | undefined, args?: { filter?: (CustomCaseFilter | null) }) { return this.__child(`customCasesAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), CustomCaseAggregateResultModelSelector, builder) }
  userFeedbackAggregate(builder: string | UserFeedbackAggregateResultModelSelector | ((selector: UserFeedbackAggregateResultModelSelector) => UserFeedbackAggregateResultModelSelector) | undefined, args?: { filter?: (UserFeedbackFilter | null) }) { return this.__child(`userFeedbackAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserFeedbackAggregateResultModelSelector, builder) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().specialReferenceIdForFaculty.newUserVerificationCode.userName.userStatus.resetPasswordCode.name.gender.role.lastName.createdOn.updatedOn.countryCode.phoneNumber.combinePhoneNumber.dateOfBirth.lastDateOfCaseLogCreation.numberOfCaseLogsCreated.active.broadSpecialty.superSpecialty.subSpecialty.designation.designationOthers.workPlace.city.medicalCouncilName.yearOfRegistration.medicalRegistrationNumber.verifiedMedicalRegistrationNumber.imagePath
