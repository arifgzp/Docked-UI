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
import { AnaesthesiaCaseLogAggregateResultModel, AnaesthesiaCaseLogAggregateResultModelType } from "./AnaesthesiaCaseLogAggregateResultModel"
import { AnaesthesiaCaseLogAggregateResultModelSelector } from "./AnaesthesiaCaseLogAggregateResultModel.base"
import { AnaesthesiaCaseLogModel, AnaesthesiaCaseLogModelType } from "./AnaesthesiaCaseLogModel"
import { AnaesthesiaCaseLogModelSelector } from "./AnaesthesiaCaseLogModel.base"
import { AnaesthesiaChronicPainLogAggregateResultModel, AnaesthesiaChronicPainLogAggregateResultModelType } from "./AnaesthesiaChronicPainLogAggregateResultModel"
import { AnaesthesiaChronicPainLogAggregateResultModelSelector } from "./AnaesthesiaChronicPainLogAggregateResultModel.base"
import { AnaesthesiaChronicPainLogModel, AnaesthesiaChronicPainLogModelType } from "./AnaesthesiaChronicPainLogModel"
import { AnaesthesiaChronicPainLogModelSelector } from "./AnaesthesiaChronicPainLogModel.base"
import { AnaesthesiaCriticalCareCaseLogAggregateResultModel, AnaesthesiaCriticalCareCaseLogAggregateResultModelType } from "./AnaesthesiaCriticalCareCaseLogAggregateResultModel"
import { AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector } from "./AnaesthesiaCriticalCareCaseLogAggregateResultModel.base"
import { AnaesthesiaCriticalCareCaseLogModel, AnaesthesiaCriticalCareCaseLogModelType } from "./AnaesthesiaCriticalCareCaseLogModel"
import { AnaesthesiaCriticalCareCaseLogModelSelector } from "./AnaesthesiaCriticalCareCaseLogModel.base"
import { GenderEnumType } from "./GenderEnum"
import { LogProfileModel, LogProfileModelType } from "./LogProfileModel"
import { LogProfileModelSelector } from "./LogProfileModel.base"
import { OralMedicineAndRadiologyCaseLogAggregateResultModel, OralMedicineAndRadiologyCaseLogAggregateResultModelType } from "./OralMedicineAndRadiologyCaseLogAggregateResultModel"
import { OralMedicineAndRadiologyCaseLogAggregateResultModelSelector } from "./OralMedicineAndRadiologyCaseLogAggregateResultModel.base"
import { OralMedicineAndRadiologyCaseLogModel, OralMedicineAndRadiologyCaseLogModelType } from "./OralMedicineAndRadiologyCaseLogModel"
import { OralMedicineAndRadiologyCaseLogModelSelector } from "./OralMedicineAndRadiologyCaseLogModel.base"
import { OralRadiologyAggregateResultModel, OralRadiologyAggregateResultModelType } from "./OralRadiologyAggregateResultModel"
import { OralRadiologyAggregateResultModelSelector } from "./OralRadiologyAggregateResultModel.base"
import { OralRadiologyModel, OralRadiologyModelType } from "./OralRadiologyModel"
import { OralRadiologyModelSelector } from "./OralRadiologyModel.base"
import { OrthodonticsClinicalCaseLogAggregateResultModel, OrthodonticsClinicalCaseLogAggregateResultModelType } from "./OrthodonticsClinicalCaseLogAggregateResultModel"
import { OrthodonticsClinicalCaseLogAggregateResultModelSelector } from "./OrthodonticsClinicalCaseLogAggregateResultModel.base"
import { OrthodonticsClinicalCaseLogModel, OrthodonticsClinicalCaseLogModelType } from "./OrthodonticsClinicalCaseLogModel"
import { OrthodonticsClinicalCaseLogModelSelector } from "./OrthodonticsClinicalCaseLogModel.base"
import { OrthodonticsPreClinicalAggregateResultModel, OrthodonticsPreClinicalAggregateResultModelType } from "./OrthodonticsPreClinicalAggregateResultModel"
import { OrthodonticsPreClinicalAggregateResultModelSelector } from "./OrthodonticsPreClinicalAggregateResultModel.base"
import { OrthodonticsPreClinicalModel, OrthodonticsPreClinicalModelType } from "./OrthodonticsPreClinicalModel"
import { OrthodonticsPreClinicalModelSelector } from "./OrthodonticsPreClinicalModel.base"
import { OrthopaedicsCaseLogAggregateResultModel, OrthopaedicsCaseLogAggregateResultModelType } from "./OrthopaedicsCaseLogAggregateResultModel"
import { OrthopaedicsCaseLogAggregateResultModelSelector } from "./OrthopaedicsCaseLogAggregateResultModel.base"
import { OrthopaedicsCaseLogModel, OrthopaedicsCaseLogModelType } from "./OrthopaedicsCaseLogModel"
import { OrthopaedicsCaseLogModelSelector } from "./OrthopaedicsCaseLogModel.base"
import { OrthopaedicsProcedureLogAggregateResultModel, OrthopaedicsProcedureLogAggregateResultModelType } from "./OrthopaedicsProcedureLogAggregateResultModel"
import { OrthopaedicsProcedureLogAggregateResultModelSelector } from "./OrthopaedicsProcedureLogAggregateResultModel.base"
import { OrthopaedicsProcedureLogModel, OrthopaedicsProcedureLogModelType } from "./OrthopaedicsProcedureLogModel"
import { OrthopaedicsProcedureLogModelSelector } from "./OrthopaedicsProcedureLogModel.base"
import { PublicationLogAggregateResultModel, PublicationLogAggregateResultModelType } from "./PublicationLogAggregateResultModel"
import { PublicationLogAggregateResultModelSelector } from "./PublicationLogAggregateResultModel.base"
import { PublicationLogModel, PublicationLogModelType } from "./PublicationLogModel"
import { PublicationLogModelSelector } from "./PublicationLogModel.base"
import { AcademicLogFilter, AcademicLogOrder, AdminWorkLogFilter, AdminWorkLogOrder, AnaesthesiaCaseLogFilter, AnaesthesiaCaseLogOrder, AnaesthesiaChronicPainLogFilter, AnaesthesiaChronicPainLogOrder, AnaesthesiaCriticalCareCaseLogFilter, AnaesthesiaCriticalCareCaseLogOrder, LogProfileFilter, OralMedicineAndRadiologyCaseLogFilter, OralMedicineAndRadiologyCaseLogOrder, OralRadiologyFilter, OralRadiologyOrder, OrthodonticsClinicalCaseLogFilter, OrthodonticsClinicalCaseLogOrder, OrthodonticsPreClinicalFilter, OrthodonticsPreClinicalOrder, OrthopaedicsCaseLogFilter, OrthopaedicsCaseLogOrder, OrthopaedicsProcedureLogFilter, OrthopaedicsProcedureLogOrder, PublicationLogFilter, PublicationLogOrder } from "./RootStore.base"
import { UserRoleEnumType } from "./UserRoleEnum"
import { UserStatusEnumType } from "./UserStatusEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  anaesthesiaCaseLog: IObservableArray<AnaesthesiaCaseLogModelType>;
  anaesthesiaChronicPainLog: IObservableArray<AnaesthesiaChronicPainLogModelType>;
  anaesthesiaCriticalCareCaseLog: IObservableArray<AnaesthesiaCriticalCareCaseLogModelType>;
  orthodonticsClinicalCaseLog: IObservableArray<OrthodonticsClinicalCaseLogModelType>;
  orthodonticsPreClinical: IObservableArray<OrthodonticsPreClinicalModelType>;
  orthopaedicsCaseLog: IObservableArray<OrthopaedicsCaseLogModelType>;
  orthopaedicsProcedureLog: IObservableArray<OrthopaedicsProcedureLogModelType>;
  oralMedicineAndRadiologyCaseLog: IObservableArray<OralMedicineAndRadiologyCaseLogModelType>;
  oralRadiology: IObservableArray<OralRadiologyModelType>;
  academicLog: IObservableArray<AcademicLogModelType>;
  publicationLog: IObservableArray<PublicationLogModelType>;
  adminWorkLog: IObservableArray<AdminWorkLogModelType>;
  logProfile: LogProfileModelType;
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
    designationOthers: types.union(types.undefined, types.null, types.string),
    workPlace: types.union(types.undefined, types.null, types.string),
    city: types.union(types.undefined, types.null, types.string),
    medicalCouncilName: types.union(types.undefined, types.null, types.string),
    yearOfRegistration: types.union(types.undefined, types.null, types.frozen()),
    medicalRegistrationNumber: types.union(types.undefined, types.null, types.string),
    verifiedMedicalRegistrationNumber: types.union(types.undefined, types.null, types.boolean),
    targetedCaseLogNumber: types.union(types.undefined, types.null, types.integer),
    anaesthesiaCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AnaesthesiaCaseLogModel))))),
    anaesthesiaChronicPainLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AnaesthesiaChronicPainLogModel))))),
    anaesthesiaCriticalCareCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AnaesthesiaCriticalCareCaseLogModel))))),
    orthodonticsClinicalCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthodonticsClinicalCaseLogModel))))),
    orthodonticsPreClinical: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthodonticsPreClinicalModel))))),
    orthopaedicsCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthopaedicsCaseLogModel))))),
    orthopaedicsProcedureLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OrthopaedicsProcedureLogModel))))),
    oralMedicineAndRadiologyCaseLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OralMedicineAndRadiologyCaseLogModel))))),
    oralRadiology: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => OralRadiologyModel))))),
    academicLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AcademicLogModel))))),
    publicationLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PublicationLogModel))))),
    adminWorkLog: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => AdminWorkLogModel))))),
    logProfile: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => LogProfileModel))),
    imagePath: types.union(types.undefined, types.null, types.string),
    anaesthesiaCaseLogAggregate: types.union(types.undefined, types.null, types.late((): any => AnaesthesiaCaseLogAggregateResultModel)),
    anaesthesiaChronicPainLogAggregate: types.union(types.undefined, types.null, types.late((): any => AnaesthesiaChronicPainLogAggregateResultModel)),
    anaesthesiaCriticalCareCaseLogAggregate: types.union(types.undefined, types.null, types.late((): any => AnaesthesiaCriticalCareCaseLogAggregateResultModel)),
    orthodonticsClinicalCaseLogAggregate: types.union(types.undefined, types.null, types.late((): any => OrthodonticsClinicalCaseLogAggregateResultModel)),
    orthodonticsPreClinicalAggregate: types.union(types.undefined, types.null, types.late((): any => OrthodonticsPreClinicalAggregateResultModel)),
    orthopaedicsCaseLogAggregate: types.union(types.undefined, types.null, types.late((): any => OrthopaedicsCaseLogAggregateResultModel)),
    orthopaedicsProcedureLogAggregate: types.union(types.undefined, types.null, types.late((): any => OrthopaedicsProcedureLogAggregateResultModel)),
    oralMedicineAndRadiologyCaseLogAggregate: types.union(types.undefined, types.null, types.late((): any => OralMedicineAndRadiologyCaseLogAggregateResultModel)),
    oralRadiologyAggregate: types.union(types.undefined, types.null, types.late((): any => OralRadiologyAggregateResultModel)),
    academicLogAggregate: types.union(types.undefined, types.null, types.late((): any => AcademicLogAggregateResultModel)),
    publicationLogAggregate: types.union(types.undefined, types.null, types.late((): any => PublicationLogAggregateResultModel)),
    adminWorkLogAggregate: types.union(types.undefined, types.null, types.late((): any => AdminWorkLogAggregateResultModel)),
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
  get designationOthers() { return this.__attr(`designationOthers`) }
  get workPlace() { return this.__attr(`workPlace`) }
  get city() { return this.__attr(`city`) }
  get medicalCouncilName() { return this.__attr(`medicalCouncilName`) }
  get yearOfRegistration() { return this.__attr(`yearOfRegistration`) }
  get medicalRegistrationNumber() { return this.__attr(`medicalRegistrationNumber`) }
  get verifiedMedicalRegistrationNumber() { return this.__attr(`verifiedMedicalRegistrationNumber`) }
  get targetedCaseLogNumber() { return this.__attr(`targetedCaseLogNumber`) }
  get imagePath() { return this.__attr(`imagePath`) }
  anaesthesiaCaseLog(builder: string | AnaesthesiaCaseLogModelSelector | ((selector: AnaesthesiaCaseLogModelSelector) => AnaesthesiaCaseLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaCaseLogFilter | null), order?: (AnaesthesiaCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`anaesthesiaCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCaseLogModelSelector, builder) }
  anaesthesiaChronicPainLog(builder: string | AnaesthesiaChronicPainLogModelSelector | ((selector: AnaesthesiaChronicPainLogModelSelector) => AnaesthesiaChronicPainLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaChronicPainLogFilter | null), order?: (AnaesthesiaChronicPainLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`anaesthesiaChronicPainLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaChronicPainLogModelSelector, builder) }
  anaesthesiaCriticalCareCaseLog(builder: string | AnaesthesiaCriticalCareCaseLogModelSelector | ((selector: AnaesthesiaCriticalCareCaseLogModelSelector) => AnaesthesiaCriticalCareCaseLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaCriticalCareCaseLogFilter | null), order?: (AnaesthesiaCriticalCareCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`anaesthesiaCriticalCareCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCriticalCareCaseLogModelSelector, builder) }
  orthodonticsClinicalCaseLog(builder: string | OrthodonticsClinicalCaseLogModelSelector | ((selector: OrthodonticsClinicalCaseLogModelSelector) => OrthodonticsClinicalCaseLogModelSelector) | undefined, args?: { filter?: (OrthodonticsClinicalCaseLogFilter | null), order?: (OrthodonticsClinicalCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthodonticsClinicalCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsClinicalCaseLogModelSelector, builder) }
  orthodonticsPreClinical(builder: string | OrthodonticsPreClinicalModelSelector | ((selector: OrthodonticsPreClinicalModelSelector) => OrthodonticsPreClinicalModelSelector) | undefined, args?: { filter?: (OrthodonticsPreClinicalFilter | null), order?: (OrthodonticsPreClinicalOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthodonticsPreClinical`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsPreClinicalModelSelector, builder) }
  orthopaedicsCaseLog(builder: string | OrthopaedicsCaseLogModelSelector | ((selector: OrthopaedicsCaseLogModelSelector) => OrthopaedicsCaseLogModelSelector) | undefined, args?: { filter?: (OrthopaedicsCaseLogFilter | null), order?: (OrthopaedicsCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthopaedicsCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsCaseLogModelSelector, builder) }
  orthopaedicsProcedureLog(builder: string | OrthopaedicsProcedureLogModelSelector | ((selector: OrthopaedicsProcedureLogModelSelector) => OrthopaedicsProcedureLogModelSelector) | undefined, args?: { filter?: (OrthopaedicsProcedureLogFilter | null), order?: (OrthopaedicsProcedureLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`orthopaedicsProcedureLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsProcedureLogModelSelector, builder) }
  oralMedicineAndRadiologyCaseLog(builder: string | OralMedicineAndRadiologyCaseLogModelSelector | ((selector: OralMedicineAndRadiologyCaseLogModelSelector) => OralMedicineAndRadiologyCaseLogModelSelector) | undefined, args?: { filter?: (OralMedicineAndRadiologyCaseLogFilter | null), order?: (OralMedicineAndRadiologyCaseLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`oralMedicineAndRadiologyCaseLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralMedicineAndRadiologyCaseLogModelSelector, builder) }
  oralRadiology(builder: string | OralRadiologyModelSelector | ((selector: OralRadiologyModelSelector) => OralRadiologyModelSelector) | undefined, args?: { filter?: (OralRadiologyFilter | null), order?: (OralRadiologyOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`oralRadiology`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralRadiologyModelSelector, builder) }
  academicLog(builder: string | AcademicLogModelSelector | ((selector: AcademicLogModelSelector) => AcademicLogModelSelector) | undefined, args?: { filter?: (AcademicLogFilter | null), order?: (AcademicLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`academicLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AcademicLogModelSelector, builder) }
  publicationLog(builder: string | PublicationLogModelSelector | ((selector: PublicationLogModelSelector) => PublicationLogModelSelector) | undefined, args?: { filter?: (PublicationLogFilter | null), order?: (PublicationLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`publicationLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), PublicationLogModelSelector, builder) }
  adminWorkLog(builder: string | AdminWorkLogModelSelector | ((selector: AdminWorkLogModelSelector) => AdminWorkLogModelSelector) | undefined, args?: { filter?: (AdminWorkLogFilter | null), order?: (AdminWorkLogOrder | null), first?: (number | null), offset?: (number | null) }) { return this.__child(`adminWorkLog`+ (args ? '('+['filter', 'order', 'first', 'offset'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AdminWorkLogModelSelector, builder) }
  logProfile(builder: string | LogProfileModelSelector | ((selector: LogProfileModelSelector) => LogProfileModelSelector) | undefined, args?: { filter?: (LogProfileFilter | null) }) { return this.__child(`logProfile`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), LogProfileModelSelector, builder) }
  anaesthesiaCaseLogAggregate(builder: string | AnaesthesiaCaseLogAggregateResultModelSelector | ((selector: AnaesthesiaCaseLogAggregateResultModelSelector) => AnaesthesiaCaseLogAggregateResultModelSelector) | undefined, args?: { filter?: (AnaesthesiaCaseLogFilter | null) }) { return this.__child(`anaesthesiaCaseLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCaseLogAggregateResultModelSelector, builder) }
  anaesthesiaChronicPainLogAggregate(builder: string | AnaesthesiaChronicPainLogAggregateResultModelSelector | ((selector: AnaesthesiaChronicPainLogAggregateResultModelSelector) => AnaesthesiaChronicPainLogAggregateResultModelSelector) | undefined, args?: { filter?: (AnaesthesiaChronicPainLogFilter | null) }) { return this.__child(`anaesthesiaChronicPainLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaChronicPainLogAggregateResultModelSelector, builder) }
  anaesthesiaCriticalCareCaseLogAggregate(builder: string | AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector | ((selector: AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector) => AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector) | undefined, args?: { filter?: (AnaesthesiaCriticalCareCaseLogFilter | null) }) { return this.__child(`anaesthesiaCriticalCareCaseLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector, builder) }
  orthodonticsClinicalCaseLogAggregate(builder: string | OrthodonticsClinicalCaseLogAggregateResultModelSelector | ((selector: OrthodonticsClinicalCaseLogAggregateResultModelSelector) => OrthodonticsClinicalCaseLogAggregateResultModelSelector) | undefined, args?: { filter?: (OrthodonticsClinicalCaseLogFilter | null) }) { return this.__child(`orthodonticsClinicalCaseLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsClinicalCaseLogAggregateResultModelSelector, builder) }
  orthodonticsPreClinicalAggregate(builder: string | OrthodonticsPreClinicalAggregateResultModelSelector | ((selector: OrthodonticsPreClinicalAggregateResultModelSelector) => OrthodonticsPreClinicalAggregateResultModelSelector) | undefined, args?: { filter?: (OrthodonticsPreClinicalFilter | null) }) { return this.__child(`orthodonticsPreClinicalAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsPreClinicalAggregateResultModelSelector, builder) }
  orthopaedicsCaseLogAggregate(builder: string | OrthopaedicsCaseLogAggregateResultModelSelector | ((selector: OrthopaedicsCaseLogAggregateResultModelSelector) => OrthopaedicsCaseLogAggregateResultModelSelector) | undefined, args?: { filter?: (OrthopaedicsCaseLogFilter | null) }) { return this.__child(`orthopaedicsCaseLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsCaseLogAggregateResultModelSelector, builder) }
  orthopaedicsProcedureLogAggregate(builder: string | OrthopaedicsProcedureLogAggregateResultModelSelector | ((selector: OrthopaedicsProcedureLogAggregateResultModelSelector) => OrthopaedicsProcedureLogAggregateResultModelSelector) | undefined, args?: { filter?: (OrthopaedicsProcedureLogFilter | null) }) { return this.__child(`orthopaedicsProcedureLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsProcedureLogAggregateResultModelSelector, builder) }
  oralMedicineAndRadiologyCaseLogAggregate(builder: string | OralMedicineAndRadiologyCaseLogAggregateResultModelSelector | ((selector: OralMedicineAndRadiologyCaseLogAggregateResultModelSelector) => OralMedicineAndRadiologyCaseLogAggregateResultModelSelector) | undefined, args?: { filter?: (OralMedicineAndRadiologyCaseLogFilter | null) }) { return this.__child(`oralMedicineAndRadiologyCaseLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralMedicineAndRadiologyCaseLogAggregateResultModelSelector, builder) }
  oralRadiologyAggregate(builder: string | OralRadiologyAggregateResultModelSelector | ((selector: OralRadiologyAggregateResultModelSelector) => OralRadiologyAggregateResultModelSelector) | undefined, args?: { filter?: (OralRadiologyFilter | null) }) { return this.__child(`oralRadiologyAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralRadiologyAggregateResultModelSelector, builder) }
  academicLogAggregate(builder: string | AcademicLogAggregateResultModelSelector | ((selector: AcademicLogAggregateResultModelSelector) => AcademicLogAggregateResultModelSelector) | undefined, args?: { filter?: (AcademicLogFilter | null) }) { return this.__child(`academicLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AcademicLogAggregateResultModelSelector, builder) }
  publicationLogAggregate(builder: string | PublicationLogAggregateResultModelSelector | ((selector: PublicationLogAggregateResultModelSelector) => PublicationLogAggregateResultModelSelector) | undefined, args?: { filter?: (PublicationLogFilter | null) }) { return this.__child(`publicationLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), PublicationLogAggregateResultModelSelector, builder) }
  adminWorkLogAggregate(builder: string | AdminWorkLogAggregateResultModelSelector | ((selector: AdminWorkLogAggregateResultModelSelector) => AdminWorkLogAggregateResultModelSelector) | undefined, args?: { filter?: (AdminWorkLogFilter | null) }) { return this.__child(`adminWorkLogAggregate`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AdminWorkLogAggregateResultModelSelector, builder) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().newUserVerificationCode.userName.userStatus.resetPasswordCode.name.gender.role.lastName.createdOn.updatedOn.countryCode.phoneNumber.combinePhoneNumber.dateOfBirth.active.broadSpecialty.superSpecialty.subSpecialty.designation.designationOthers.workPlace.city.medicalCouncilName.yearOfRegistration.medicalRegistrationNumber.verifiedMedicalRegistrationNumber.targetedCaseLogNumber.imagePath
