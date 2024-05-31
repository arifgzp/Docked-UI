/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { MultiPolygonModel, MultiPolygonModelType } from "./MultiPolygonModel"
import { multiPolygonModelPrimitives, MultiPolygonModelSelector } from "./MultiPolygonModel.base"
import { AddOrthopaedicsCaseLogPayloadModel, AddOrthopaedicsCaseLogPayloadModelType } from "./AddOrthopaedicsCaseLogPayloadModel"
import { addOrthopaedicsCaseLogPayloadModelPrimitives, AddOrthopaedicsCaseLogPayloadModelSelector } from "./AddOrthopaedicsCaseLogPayloadModel.base"
import { UserAggregateResultModel, UserAggregateResultModelType } from "./UserAggregateResultModel"
import { userAggregateResultModelPrimitives, UserAggregateResultModelSelector } from "./UserAggregateResultModel.base"
import { DeleteOrthopaedicsCaseLogPayloadModel, DeleteOrthopaedicsCaseLogPayloadModelType } from "./DeleteOrthopaedicsCaseLogPayloadModel"
import { deleteOrthopaedicsCaseLogPayloadModelPrimitives, DeleteOrthopaedicsCaseLogPayloadModelSelector } from "./DeleteOrthopaedicsCaseLogPayloadModel.base"
import { DeleteUserPayloadModel, DeleteUserPayloadModelType } from "./DeleteUserPayloadModel"
import { deleteUserPayloadModelPrimitives, DeleteUserPayloadModelSelector } from "./DeleteUserPayloadModel.base"
import { CaseLogAggregateResultModel, CaseLogAggregateResultModelType } from "./CaseLogAggregateResultModel"
import { caseLogAggregateResultModelPrimitives, CaseLogAggregateResultModelSelector } from "./CaseLogAggregateResultModel.base"
import { UpdateOrthopaedicsCaseLogPayloadModel, UpdateOrthopaedicsCaseLogPayloadModelType } from "./UpdateOrthopaedicsCaseLogPayloadModel"
import { updateOrthopaedicsCaseLogPayloadModelPrimitives, UpdateOrthopaedicsCaseLogPayloadModelSelector } from "./UpdateOrthopaedicsCaseLogPayloadModel.base"
import { AddUserPayloadModel, AddUserPayloadModelType } from "./AddUserPayloadModel"
import { addUserPayloadModelPrimitives, AddUserPayloadModelSelector } from "./AddUserPayloadModel.base"
import { OrthopaedicsCaseLogModel, OrthopaedicsCaseLogModelType } from "./OrthopaedicsCaseLogModel"
import { orthopaedicsCaseLogModelPrimitives, OrthopaedicsCaseLogModelSelector } from "./OrthopaedicsCaseLogModel.base"
import { PolygonModel, PolygonModelType } from "./PolygonModel"
import { polygonModelPrimitives, PolygonModelSelector } from "./PolygonModel.base"
import { DeleteCaseLogPayloadModel, DeleteCaseLogPayloadModelType } from "./DeleteCaseLogPayloadModel"
import { deleteCaseLogPayloadModelPrimitives, DeleteCaseLogPayloadModelSelector } from "./DeleteCaseLogPayloadModel.base"
import { AnaesthesiaCaseLogModel, AnaesthesiaCaseLogModelType } from "./AnaesthesiaCaseLogModel"
import { anaesthesiaCaseLogModelPrimitives, AnaesthesiaCaseLogModelSelector } from "./AnaesthesiaCaseLogModel.base"
import { AddOrthodonticsCaseLogPayloadModel, AddOrthodonticsCaseLogPayloadModelType } from "./AddOrthodonticsCaseLogPayloadModel"
import { addOrthodonticsCaseLogPayloadModelPrimitives, AddOrthodonticsCaseLogPayloadModelSelector } from "./AddOrthodonticsCaseLogPayloadModel.base"
import { UpdateHospitalPayloadModel, UpdateHospitalPayloadModelType } from "./UpdateHospitalPayloadModel"
import { updateHospitalPayloadModelPrimitives, UpdateHospitalPayloadModelSelector } from "./UpdateHospitalPayloadModel.base"
import { UpdateUserPayloadModel, UpdateUserPayloadModelType } from "./UpdateUserPayloadModel"
import { updateUserPayloadModelPrimitives, UpdateUserPayloadModelSelector } from "./UpdateUserPayloadModel.base"
import { OrthodonticsCaseLogModel, OrthodonticsCaseLogModelType } from "./OrthodonticsCaseLogModel"
import { orthodonticsCaseLogModelPrimitives, OrthodonticsCaseLogModelSelector } from "./OrthodonticsCaseLogModel.base"
import { PointModel, PointModelType } from "./PointModel"
import { pointModelPrimitives, PointModelSelector } from "./PointModel.base"
import { AddCaseLogPayloadModel, AddCaseLogPayloadModelType } from "./AddCaseLogPayloadModel"
import { addCaseLogPayloadModelPrimitives, AddCaseLogPayloadModelSelector } from "./AddCaseLogPayloadModel.base"
import { DeleteAnaesthesiaCaseLogPayloadModel, DeleteAnaesthesiaCaseLogPayloadModelType } from "./DeleteAnaesthesiaCaseLogPayloadModel"
import { deleteAnaesthesiaCaseLogPayloadModelPrimitives, DeleteAnaesthesiaCaseLogPayloadModelSelector } from "./DeleteAnaesthesiaCaseLogPayloadModel.base"
import { DeleteOrthodonticsCaseLogPayloadModel, DeleteOrthodonticsCaseLogPayloadModelType } from "./DeleteOrthodonticsCaseLogPayloadModel"
import { deleteOrthodonticsCaseLogPayloadModelPrimitives, DeleteOrthodonticsCaseLogPayloadModelSelector } from "./DeleteOrthodonticsCaseLogPayloadModel.base"
import { UpdateAnaesthesiaCaseLogPayloadModel, UpdateAnaesthesiaCaseLogPayloadModelType } from "./UpdateAnaesthesiaCaseLogPayloadModel"
import { updateAnaesthesiaCaseLogPayloadModelPrimitives, UpdateAnaesthesiaCaseLogPayloadModelSelector } from "./UpdateAnaesthesiaCaseLogPayloadModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { PointListModel, PointListModelType } from "./PointListModel"
import { pointListModelPrimitives, PointListModelSelector } from "./PointListModel.base"
import { AddHospitalPayloadModel, AddHospitalPayloadModelType } from "./AddHospitalPayloadModel"
import { addHospitalPayloadModelPrimitives, AddHospitalPayloadModelSelector } from "./AddHospitalPayloadModel.base"
import { OrthodonticsCaseLogAggregateResultModel, OrthodonticsCaseLogAggregateResultModelType } from "./OrthodonticsCaseLogAggregateResultModel"
import { orthodonticsCaseLogAggregateResultModelPrimitives, OrthodonticsCaseLogAggregateResultModelSelector } from "./OrthodonticsCaseLogAggregateResultModel.base"
import { CaseLogModel, CaseLogModelType } from "./CaseLogModel"
import { caseLogModelPrimitives, CaseLogModelSelector } from "./CaseLogModel.base"
import { OrthopaedicsCaseLogAggregateResultModel, OrthopaedicsCaseLogAggregateResultModelType } from "./OrthopaedicsCaseLogAggregateResultModel"
import { orthopaedicsCaseLogAggregateResultModelPrimitives, OrthopaedicsCaseLogAggregateResultModelSelector } from "./OrthopaedicsCaseLogAggregateResultModel.base"
import { HospitalAggregateResultModel, HospitalAggregateResultModelType } from "./HospitalAggregateResultModel"
import { hospitalAggregateResultModelPrimitives, HospitalAggregateResultModelSelector } from "./HospitalAggregateResultModel.base"
import { HospitalModel, HospitalModelType } from "./HospitalModel"
import { hospitalModelPrimitives, HospitalModelSelector } from "./HospitalModel.base"
import { UpdateOrthodonticsCaseLogPayloadModel, UpdateOrthodonticsCaseLogPayloadModelType } from "./UpdateOrthodonticsCaseLogPayloadModel"
import { updateOrthodonticsCaseLogPayloadModelPrimitives, UpdateOrthodonticsCaseLogPayloadModelSelector } from "./UpdateOrthodonticsCaseLogPayloadModel.base"
import { AnaesthesiaCaseLogAggregateResultModel, AnaesthesiaCaseLogAggregateResultModelType } from "./AnaesthesiaCaseLogAggregateResultModel"
import { anaesthesiaCaseLogAggregateResultModelPrimitives, AnaesthesiaCaseLogAggregateResultModelSelector } from "./AnaesthesiaCaseLogAggregateResultModel.base"
import { DeleteHospitalPayloadModel, DeleteHospitalPayloadModelType } from "./DeleteHospitalPayloadModel"
import { deleteHospitalPayloadModelPrimitives, DeleteHospitalPayloadModelSelector } from "./DeleteHospitalPayloadModel.base"
import { AddAnaesthesiaCaseLogPayloadModel, AddAnaesthesiaCaseLogPayloadModelType } from "./AddAnaesthesiaCaseLogPayloadModel"
import { addAnaesthesiaCaseLogPayloadModelPrimitives, AddAnaesthesiaCaseLogPayloadModelSelector } from "./AddAnaesthesiaCaseLogPayloadModel.base"
import { UpdateCaseLogPayloadModel, UpdateCaseLogPayloadModelType } from "./UpdateCaseLogPayloadModel"
import { updateCaseLogPayloadModelPrimitives, UpdateCaseLogPayloadModelSelector } from "./UpdateCaseLogPayloadModel.base"


import { UserOrderable } from "./UserOrderableEnum"
import { UserHasFilter } from "./UserHasFilterEnum"
import { AnaesthesiaCaseLogOrderable } from "./AnaesthesiaCaseLogOrderableEnum"
import { OrthodonticsCaseLogHasFilter } from "./OrthodonticsCaseLogHasFilterEnum"
import { CaseLogOrderable } from "./CaseLogOrderableEnum"
import { HospitalOrderable } from "./HospitalOrderableEnum"
import { OrthopaedicsCaseLogOrderable } from "./OrthopaedicsCaseLogOrderableEnum"
import { DgraphIndex } from "./DgraphIndexEnum"
import { AnaesthesiaCaseLogHasFilter } from "./AnaesthesiaCaseLogHasFilterEnum"
import { UserStatus } from "./UserStatusEnum"
import { Gender } from "./GenderEnum"
import { UserRole } from "./UserRoleEnum"
import { HttpMethod } from "./HttpMethodEnum"
import { OrthodonticsCaseLogOrderable } from "./OrthodonticsCaseLogOrderableEnum"
import { OrthopaedicsCaseLogHasFilter } from "./OrthopaedicsCaseLogHasFilterEnum"
import { CaseLogHasFilter } from "./CaseLogHasFilterEnum"
import { HospitalHasFilter } from "./HospitalHasFilterEnum"
import { Mode } from "./ModeEnum"

export type UpdateHospitalInput = {
  filter: HospitalFilter
  set?: (HospitalPatch | null)
  remove?: (HospitalPatch | null)
}
export type UpdateUserInput = {
  filter: UserFilter
  set?: (UserPatch | null)
  remove?: (UserPatch | null)
}
export type OrthopaedicsCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  diseaseCategory?: (string | null)[] | null
  site?: (string | null)[] | null
  joint?: (string | null)[] | null
  bones?: (string | null)[] | null
  outcome?: (string | null)[] | null
  diagnosis?: (string | null)
}
export type UpdateOrthopaedicsCaseLogInput = {
  filter: OrthopaedicsCaseLogFilter
  set?: (OrthopaedicsCaseLogPatch | null)
  remove?: (OrthopaedicsCaseLogPatch | null)
}
export type PointRef = {
  longitude: number
  latitude: number
}
export type AnaesthesiaCaseLogOrder = {
  asc?: (AnaesthesiaCaseLogOrderable | null)
  desc?: (AnaesthesiaCaseLogOrderable | null)
  then?: (AnaesthesiaCaseLogOrder | null)
}
export type OrthodonticsCaseLogOrder = {
  asc?: (OrthodonticsCaseLogOrderable | null)
  desc?: (OrthodonticsCaseLogOrderable | null)
  then?: (OrthodonticsCaseLogOrder | null)
}
export type UpdateCaseLogInput = {
  filter: CaseLogFilter
  set?: (CaseLogPatch | null)
  remove?: (CaseLogPatch | null)
}
export type OrthodonticsCaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  medicalRegistrationNumber?: (StringTermFilter | null)
  wireBendingRecord?: (StringTermFilter | null)
  roundWireLoopRecord?: (StringTermFilter | null)
  loopInEdgewiseWireRecord?: (StringTermFilter | null)
  solderingExerciseRecord?: (StringTermFilter | null)
  cephalometricTracingRecord?: (StringTermFilter | null)
  claspRecord?: (StringTermFilter | null)
  springsrecord?: (StringTermFilter | null)
  canineRetractorsRecord?: (StringTermFilter | null)
  bowsRecord?: (StringTermFilter | null)
  has?: (OrthodonticsCaseLogHasFilter | null)[] | null
  and?: (OrthodonticsCaseLogFilter | null)[] | null
  or?: (OrthodonticsCaseLogFilter | null)[] | null
  not?: (OrthodonticsCaseLogFilter | null)
}
export type MultiPolygonRef = {
  polygons: PolygonRef[]
}
export type AddHospitalInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
  registeredName?: (string | null)
  gstin?: (string | null)
  address?: (string | null)
  faculties?: (UserRef | null)[] | null
}
export type CaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  medicalRegistrationNumber?: (StringTermFilter | null)
  has?: (CaseLogHasFilter | null)[] | null
  and?: (CaseLogFilter | null)[] | null
  or?: (CaseLogFilter | null)[] | null
  not?: (CaseLogFilter | null)
}
export type WithinFilter = {
  polygon: PolygonRef
}
export type StringExactFilter = {
  eq?: (string | null)
  in?: (string | null)[] | null
  le?: (string | null)
  lt?: (string | null)
  ge?: (string | null)
  gt?: (string | null)
  between?: (StringRange | null)
}
export type AddAnaesthesiaCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  typeOfAnaesthesia?: (string | null)[] | null
  airManagement?: (string | null)[] | null
  regionalTechniques?: (string | null)[] | null
  interventionalProcedures?: (string | null)[] | null
  monitoring?: (string | null)[] | null
}
export type DateTimeRange = {
  min: any
  max: any
}
export type GenerateQueryParams = {
  get?: (boolean | null)
  query?: (boolean | null)
  password?: (boolean | null)
  aggregate?: (boolean | null)
}
export type PointGeoFilter = {
  near?: (NearFilter | null)
  within?: (WithinFilter | null)
}
export type AddOrthopaedicsCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  diseaseCategory?: (string | null)[] | null
  site?: (string | null)[] | null
  joint?: (string | null)[] | null
  bones?: (string | null)[] | null
  outcome?: (string | null)[] | null
  diagnosis?: (string | null)
}
export type UserOrder = {
  asc?: (UserOrderable | null)
  desc?: (UserOrderable | null)
  then?: (UserOrder | null)
}
export type UserRef = {
  id?: (string | null)
  newUserVerificationCode?: (string | null)
  userName?: (string | null)
  userStatus?: (UserStatus | null)
  resetPasswordCode?: (string | null)
  name?: (string | null)
  gender?: (Gender | null)
  role?: (UserRole | null)
  lastName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  countryCode?: (string | null)
  phoneNumber?: (string | null)
  combinePhoneNumber?: (string | null)
  dateOfBirth?: (any | null)
  active?: (boolean | null)
  broadSpecialty?: (string | null)
  superSpecialty?: (string | null)
  subSpecialty?: (string | null)
  designation?: (string | null)
  workPlace?: (string | null)
  city?: (string | null)
  medicalCouncilName?: (string | null)
  yearOfRegistration?: (any | null)
  medicalRegistrationNumber?: (string | null)
  verifiedMedicalRegistrationNumber?: (boolean | null)
  targetedCaseLogNumber?: (number | null)
  anaesthesiaCaseLog?: (AnaesthesiaCaseLogRef | null)[] | null
  orthodonticsCaseLog?: (OrthodonticsCaseLogRef | null)[] | null
  orthopaedicsCaseLog?: (OrthopaedicsCaseLogRef | null)[] | null
  password?: (string | null)
}
export type FloatFilter = {
  eq?: (number | null)
  in?: (number | null)[] | null
  le?: (number | null)
  lt?: (number | null)
  ge?: (number | null)
  gt?: (number | null)
  between?: (FloatRange | null)
}
export type CaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
}
export type UpdateAnaesthesiaCaseLogInput = {
  filter: AnaesthesiaCaseLogFilter
  set?: (AnaesthesiaCaseLogPatch | null)
  remove?: (AnaesthesiaCaseLogPatch | null)
}
export type CaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
}
export type GenerateMutationParams = {
  add?: (boolean | null)
  update?: (boolean | null)
  delete?: (boolean | null)
}
export type Int64Filter = {
  eq?: (any | null)
  in?: (any | null)[] | null
  le?: (any | null)
  lt?: (any | null)
  ge?: (any | null)
  gt?: (any | null)
  between?: (Int64Range | null)
}
export type IntFilter = {
  eq?: (number | null)
  in?: (number | null)[] | null
  le?: (number | null)
  lt?: (number | null)
  ge?: (number | null)
  gt?: (number | null)
  between?: (IntRange | null)
}
export type StringRegExpFilter = {
  regexp?: (string | null)
}
export type AnaesthesiaCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  typeOfAnaesthesia?: (string | null)[] | null
  airManagement?: (string | null)[] | null
  regionalTechniques?: (string | null)[] | null
  interventionalProcedures?: (string | null)[] | null
  monitoring?: (string | null)[] | null
}
export type HospitalFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  name?: (StringTermFilter | null)
  registeredName?: (StringTermFilter | null)
  gstin?: (StringTermFilter | null)
  address?: (StringTermFilter | null)
  has?: (HospitalHasFilter | null)[] | null
  and?: (HospitalFilter | null)[] | null
  or?: (HospitalFilter | null)[] | null
  not?: (HospitalFilter | null)
}
export type HospitalOrder = {
  asc?: (HospitalOrderable | null)
  desc?: (HospitalOrderable | null)
  then?: (HospitalOrder | null)
}
export type IntersectsFilter = {
  polygon?: (PolygonRef | null)
  multiPolygon?: (MultiPolygonRef | null)
}
export type IntRange = {
  min: number
  max: number
}
export type AuthRule = {
  and?: (AuthRule | null)[] | null
  or?: (AuthRule | null)[] | null
  not?: (AuthRule | null)
  rule?: (string | null)
}
export type NearFilter = {
  distance: number
  coordinate: PointRef
}
export type OrthodonticsCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  wireBendingRecord?: (string | null)[] | null
  roundWireLoopRecord?: (string | null)[] | null
  loopInEdgewiseWireRecord?: (string | null)[] | null
  solderingExerciseRecord?: (string | null)[] | null
  cephalometricTracingRecord?: (string | null)[] | null
  claspRecord?: (string | null)[] | null
  springsrecord?: (string | null)[] | null
  canineRetractorsRecord?: (string | null)[] | null
  bowsRecord?: (string | null)[] | null
}
export type UserStatusHash = {
  eq?: (UserStatus | null)
  in?: (UserStatus | null)[] | null
}
export type FloatRange = {
  min: number
  max: number
}
export type StringFullTextFilter = {
  alloftext?: (string | null)
  anyoftext?: (string | null)
}
export type AnaesthesiaCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  typeOfAnaesthesia?: (string | null)[] | null
  airManagement?: (string | null)[] | null
  regionalTechniques?: (string | null)[] | null
  interventionalProcedures?: (string | null)[] | null
  monitoring?: (string | null)[] | null
}
export type OrthopaedicsCaseLogOrder = {
  asc?: (OrthopaedicsCaseLogOrderable | null)
  desc?: (OrthopaedicsCaseLogOrderable | null)
  then?: (OrthopaedicsCaseLogOrder | null)
}
export type StringRange = {
  min: string
  max: string
}
export type CaseLogOrder = {
  asc?: (CaseLogOrderable | null)
  desc?: (CaseLogOrderable | null)
  then?: (CaseLogOrder | null)
}
export type UpdateOrthodonticsCaseLogInput = {
  filter: OrthodonticsCaseLogFilter
  set?: (OrthodonticsCaseLogPatch | null)
  remove?: (OrthodonticsCaseLogPatch | null)
}
export type PolygonGeoFilter = {
  near?: (NearFilter | null)
  within?: (WithinFilter | null)
  contains?: (ContainsFilter | null)
  intersects?: (IntersectsFilter | null)
}
export type PointListRef = {
  points: PointRef[]
}
export type DateTimeFilter = {
  eq?: (any | null)
  in?: (any | null)[] | null
  le?: (any | null)
  lt?: (any | null)
  ge?: (any | null)
  gt?: (any | null)
  between?: (DateTimeRange | null)
}
export type StringTermFilter = {
  allofterms?: (string | null)
  anyofterms?: (string | null)
}
export type GenderHash = {
  eq?: (Gender | null)
  in?: (Gender | null)[] | null
}
export type UserPatch = {
  newUserVerificationCode?: (string | null)
  userName?: (string | null)
  userStatus?: (UserStatus | null)
  resetPasswordCode?: (string | null)
  name?: (string | null)
  gender?: (Gender | null)
  role?: (UserRole | null)
  lastName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  countryCode?: (string | null)
  phoneNumber?: (string | null)
  combinePhoneNumber?: (string | null)
  dateOfBirth?: (any | null)
  active?: (boolean | null)
  broadSpecialty?: (string | null)
  superSpecialty?: (string | null)
  subSpecialty?: (string | null)
  designation?: (string | null)
  workPlace?: (string | null)
  city?: (string | null)
  medicalCouncilName?: (string | null)
  yearOfRegistration?: (any | null)
  medicalRegistrationNumber?: (string | null)
  verifiedMedicalRegistrationNumber?: (boolean | null)
  targetedCaseLogNumber?: (number | null)
  anaesthesiaCaseLog?: (AnaesthesiaCaseLogRef | null)[] | null
  orthodonticsCaseLog?: (OrthodonticsCaseLogRef | null)[] | null
  orthopaedicsCaseLog?: (OrthopaedicsCaseLogRef | null)[] | null
  password?: (string | null)
}
export type AddUserInput = {
  newUserVerificationCode?: (string | null)
  userName?: (string | null)
  userStatus?: (UserStatus | null)
  resetPasswordCode?: (string | null)
  name?: (string | null)
  gender?: (Gender | null)
  role?: (UserRole | null)
  lastName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  countryCode?: (string | null)
  phoneNumber?: (string | null)
  combinePhoneNumber?: (string | null)
  dateOfBirth?: (any | null)
  active?: (boolean | null)
  broadSpecialty?: (string | null)
  superSpecialty?: (string | null)
  subSpecialty?: (string | null)
  designation?: (string | null)
  workPlace?: (string | null)
  city?: (string | null)
  medicalCouncilName?: (string | null)
  yearOfRegistration?: (any | null)
  medicalRegistrationNumber?: (string | null)
  verifiedMedicalRegistrationNumber?: (boolean | null)
  targetedCaseLogNumber?: (number | null)
  anaesthesiaCaseLog?: (AnaesthesiaCaseLogRef | null)[] | null
  orthodonticsCaseLog?: (OrthodonticsCaseLogRef | null)[] | null
  orthopaedicsCaseLog?: (OrthopaedicsCaseLogRef | null)[] | null
  password: string
}
export type OrthopaedicsCaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  medicalRegistrationNumber?: (StringTermFilter | null)
  diseaseCategory?: (StringTermFilter | null)
  site?: (StringTermFilter | null)
  joint?: (StringTermFilter | null)
  bones?: (StringTermFilter | null)
  outcome?: (StringTermFilter | null)
  diagnosis?: (StringTermFilter | null)
  has?: (OrthopaedicsCaseLogHasFilter | null)[] | null
  and?: (OrthopaedicsCaseLogFilter | null)[] | null
  or?: (OrthopaedicsCaseLogFilter | null)[] | null
  not?: (OrthopaedicsCaseLogFilter | null)
}
export type Int64Range = {
  min: any
  max: any
}
export type StringHashFilter = {
  eq?: (string | null)
  in?: (string | null)[] | null
}
export type HospitalRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
  registeredName?: (string | null)
  gstin?: (string | null)
  address?: (string | null)
  faculties?: (UserRef | null)[] | null
}
export type HospitalPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
  registeredName?: (string | null)
  gstin?: (string | null)
  address?: (string | null)
  faculties?: (UserRef | null)[] | null
}
export type UserRoleExact = {
  eq?: (UserRole | null)
  in?: (UserRole | null)[] | null
  le?: (UserRole | null)
  lt?: (UserRole | null)
  ge?: (UserRole | null)
  gt?: (UserRole | null)
  between?: (UserRole | null)
}
export type AddCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
}
export type AddOrthodonticsCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  wireBendingRecord?: (string | null)[] | null
  roundWireLoopRecord?: (string | null)[] | null
  loopInEdgewiseWireRecord?: (string | null)[] | null
  solderingExerciseRecord?: (string | null)[] | null
  cephalometricTracingRecord?: (string | null)[] | null
  claspRecord?: (string | null)[] | null
  springsrecord?: (string | null)[] | null
  canineRetractorsRecord?: (string | null)[] | null
  bowsRecord?: (string | null)[] | null
}
export type CustomHttp = {
  url: string
  method: HttpMethod
  body?: (string | null)
  graphql?: (string | null)
  mode?: (Mode | null)
  forwardHeaders?: string[] | null
  secretHeaders?: string[] | null
  introspectionHeaders?: string[] | null
  skipIntrospection?: (boolean | null)
}
export type ContainsFilter = {
  point?: (PointRef | null)
  polygon?: (PolygonRef | null)
}
export type UserFilter = {
  id?: string[] | null
  newUserVerificationCode?: (StringExactFilter | null)
  userName?: (StringExactFilter | null)
  userStatus?: (UserStatusHash | null)
  resetPasswordCode?: (StringExactFilter | null)
  name?: (StringTermFilter | null)
  gender?: (GenderHash | null)
  role?: (UserRoleExact | null)
  lastName?: (StringTermFilter | null)
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  countryCode?: (StringTermFilter | null)
  phoneNumber?: (StringTermFilter | null)
  combinePhoneNumber?: (StringTermFilter | null)
  dateOfBirth?: (DateTimeFilter | null)
  broadSpecialty?: (StringTermFilter | null)
  superSpecialty?: (StringTermFilter | null)
  subSpecialty?: (StringTermFilter | null)
  designation?: (StringTermFilter | null)
  workPlace?: (StringTermFilter | null)
  city?: (StringTermFilter | null)
  medicalCouncilName?: (StringTermFilter | null)
  medicalRegistrationNumber?: (StringTermFilter | null)
  has?: (UserHasFilter | null)[] | null
  and?: (UserFilter | null)[] | null
  or?: (UserFilter | null)[] | null
  not?: (UserFilter | null)
}
export type AnaesthesiaCaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  medicalRegistrationNumber?: (StringTermFilter | null)
  typeOfAnaesthesia?: (StringTermFilter | null)
  airManagement?: (StringTermFilter | null)
  regionalTechniques?: (StringTermFilter | null)
  interventionalProcedures?: (StringTermFilter | null)
  monitoring?: (StringTermFilter | null)
  has?: (AnaesthesiaCaseLogHasFilter | null)[] | null
  and?: (AnaesthesiaCaseLogFilter | null)[] | null
  or?: (AnaesthesiaCaseLogFilter | null)[] | null
  not?: (AnaesthesiaCaseLogFilter | null)
}
export type DgraphDefault = {
  value?: (string | null)
}
export type OrthopaedicsCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  diseaseCategory?: (string | null)[] | null
  site?: (string | null)[] | null
  joint?: (string | null)[] | null
  bones?: (string | null)[] | null
  outcome?: (string | null)[] | null
  diagnosis?: (string | null)
}
export type PolygonRef = {
  coordinates: PointListRef[]
}
export type OrthodonticsCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  medicalRegistrationNumber?: (string | null)
  wireBendingRecord?: (string | null)[] | null
  roundWireLoopRecord?: (string | null)[] | null
  loopInEdgewiseWireRecord?: (string | null)[] | null
  solderingExerciseRecord?: (string | null)[] | null
  cephalometricTracingRecord?: (string | null)[] | null
  claspRecord?: (string | null)[] | null
  springsrecord?: (string | null)[] | null
  canineRetractorsRecord?: (string | null)[] | null
  bowsRecord?: (string | null)[] | null
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orthopaedicsCaseLogs: ObservableMap<string, OrthopaedicsCaseLogModelType>,
  anaesthesiaCaseLogs: ObservableMap<string, AnaesthesiaCaseLogModelType>,
  orthodonticsCaseLogs: ObservableMap<string, OrthodonticsCaseLogModelType>,
  users: ObservableMap<string, UserModelType>,
  caseLogs: ObservableMap<string, CaseLogModelType>,
  hospitals: ObservableMap<string, HospitalModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryGetUser="queryGetUser",
queryCheckUserPassword="queryCheckUserPassword",
queryQueryUser="queryQueryUser",
queryAggregateUser="queryAggregateUser",
queryGetHospital="queryGetHospital",
queryQueryHospital="queryQueryHospital",
queryAggregateHospital="queryAggregateHospital",
queryGetCaseLog="queryGetCaseLog",
queryQueryCaseLog="queryQueryCaseLog",
queryAggregateCaseLog="queryAggregateCaseLog",
queryGetAnaesthesiaCaseLog="queryGetAnaesthesiaCaseLog",
queryQueryAnaesthesiaCaseLog="queryQueryAnaesthesiaCaseLog",
queryAggregateAnaesthesiaCaseLog="queryAggregateAnaesthesiaCaseLog",
queryGetOrthodonticsCaseLog="queryGetOrthodonticsCaseLog",
queryQueryOrthodonticsCaseLog="queryQueryOrthodonticsCaseLog",
queryAggregateOrthodonticsCaseLog="queryAggregateOrthodonticsCaseLog",
queryGetOrthopaedicsCaseLog="queryGetOrthopaedicsCaseLog",
queryQueryOrthopaedicsCaseLog="queryQueryOrthopaedicsCaseLog",
queryAggregateOrthopaedicsCaseLog="queryAggregateOrthopaedicsCaseLog"
}
export enum RootStoreBaseMutations {
mutateAddUser="mutateAddUser",
mutateUpdateUser="mutateUpdateUser",
mutateDeleteUser="mutateDeleteUser",
mutateAddHospital="mutateAddHospital",
mutateUpdateHospital="mutateUpdateHospital",
mutateDeleteHospital="mutateDeleteHospital",
mutateAddCaseLog="mutateAddCaseLog",
mutateUpdateCaseLog="mutateUpdateCaseLog",
mutateDeleteCaseLog="mutateDeleteCaseLog",
mutateAddAnaesthesiaCaseLog="mutateAddAnaesthesiaCaseLog",
mutateUpdateAnaesthesiaCaseLog="mutateUpdateAnaesthesiaCaseLog",
mutateDeleteAnaesthesiaCaseLog="mutateDeleteAnaesthesiaCaseLog",
mutateAddOrthodonticsCaseLog="mutateAddOrthodonticsCaseLog",
mutateUpdateOrthodonticsCaseLog="mutateUpdateOrthodonticsCaseLog",
mutateDeleteOrthodonticsCaseLog="mutateDeleteOrthodonticsCaseLog",
mutateAddOrthopaedicsCaseLog="mutateAddOrthopaedicsCaseLog",
mutateUpdateOrthopaedicsCaseLog="mutateUpdateOrthopaedicsCaseLog",
mutateDeleteOrthopaedicsCaseLog="mutateDeleteOrthopaedicsCaseLog"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['MultiPolygon', () => MultiPolygonModel], ['AddOrthopaedicsCaseLogPayload', () => AddOrthopaedicsCaseLogPayloadModel], ['UserAggregateResult', () => UserAggregateResultModel], ['DeleteOrthopaedicsCaseLogPayload', () => DeleteOrthopaedicsCaseLogPayloadModel], ['DeleteUserPayload', () => DeleteUserPayloadModel], ['CaseLogAggregateResult', () => CaseLogAggregateResultModel], ['UpdateOrthopaedicsCaseLogPayload', () => UpdateOrthopaedicsCaseLogPayloadModel], ['AddUserPayload', () => AddUserPayloadModel], ['OrthopaedicsCaseLog', () => OrthopaedicsCaseLogModel], ['Polygon', () => PolygonModel], ['DeleteCaseLogPayload', () => DeleteCaseLogPayloadModel], ['AnaesthesiaCaseLog', () => AnaesthesiaCaseLogModel], ['AddOrthodonticsCaseLogPayload', () => AddOrthodonticsCaseLogPayloadModel], ['UpdateHospitalPayload', () => UpdateHospitalPayloadModel], ['UpdateUserPayload', () => UpdateUserPayloadModel], ['OrthodonticsCaseLog', () => OrthodonticsCaseLogModel], ['Point', () => PointModel], ['AddCaseLogPayload', () => AddCaseLogPayloadModel], ['DeleteAnaesthesiaCaseLogPayload', () => DeleteAnaesthesiaCaseLogPayloadModel], ['DeleteOrthodonticsCaseLogPayload', () => DeleteOrthodonticsCaseLogPayloadModel], ['UpdateAnaesthesiaCaseLogPayload', () => UpdateAnaesthesiaCaseLogPayloadModel], ['User', () => UserModel], ['PointList', () => PointListModel], ['AddHospitalPayload', () => AddHospitalPayloadModel], ['OrthodonticsCaseLogAggregateResult', () => OrthodonticsCaseLogAggregateResultModel], ['CaseLog', () => CaseLogModel], ['OrthopaedicsCaseLogAggregateResult', () => OrthopaedicsCaseLogAggregateResultModel], ['HospitalAggregateResult', () => HospitalAggregateResultModel], ['Hospital', () => HospitalModel], ['UpdateOrthodonticsCaseLogPayload', () => UpdateOrthodonticsCaseLogPayloadModel], ['AnaesthesiaCaseLogAggregateResult', () => AnaesthesiaCaseLogAggregateResultModel], ['DeleteHospitalPayload', () => DeleteHospitalPayloadModel], ['AddAnaesthesiaCaseLogPayload', () => AddAnaesthesiaCaseLogPayloadModel], ['UpdateCaseLogPayload', () => UpdateCaseLogPayloadModel]], ['OrthopaedicsCaseLog', 'AnaesthesiaCaseLog', 'OrthodonticsCaseLog', 'User', 'CaseLog', 'Hospital'], "js"))
  .props({
    orthopaedicsCaseLogs: types.optional(types.map(types.late((): any => OrthopaedicsCaseLogModel)), {}),
    anaesthesiaCaseLogs: types.optional(types.map(types.late((): any => AnaesthesiaCaseLogModel)), {}),
    orthodonticsCaseLogs: types.optional(types.map(types.late((): any => OrthodonticsCaseLogModel)), {}),
    users: types.optional(types.map(types.late((): any => UserModel)), {}),
    caseLogs: types.optional(types.map(types.late((): any => CaseLogModel)), {}),
    hospitals: types.optional(types.map(types.late((): any => HospitalModel)), {})
  })
  .actions(self => ({
    queryGetUser(variables: { id?: (string | null), userName?: (string | null) }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getUser: UserModelType }>(`query getUser($id: ID, $userName: String) { getUser(id: $id, userName: $userName) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCheckUserPassword(variables: { id: string, password: string }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ checkUserPassword: UserModelType }>(`query checkUserPassword($id: ID!, $password: String!) { checkUserPassword(id: $id, password: $password) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryUser(variables: { filter?: (UserFilter | null), order?: (UserOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryUser: UserModelType[] }>(`query queryUser($filter: UserFilter, $order: UserOrder, $first: Int, $offset: Int) { queryUser(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateUser(variables: { filter?: (UserFilter | null) }, resultSelector: string | ((qb: UserAggregateResultModelSelector) => UserAggregateResultModelSelector) = userAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateUser: UserAggregateResultModelType }>(`query aggregateUser($filter: UserFilter) { aggregateUser(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new UserAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetHospital(variables: { id: string }, resultSelector: string | ((qb: HospitalModelSelector) => HospitalModelSelector) = hospitalModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getHospital: HospitalModelType }>(`query getHospital($id: ID!) { getHospital(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new HospitalModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryHospital(variables: { filter?: (HospitalFilter | null), order?: (HospitalOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: HospitalModelSelector) => HospitalModelSelector) = hospitalModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryHospital: HospitalModelType[] }>(`query queryHospital($filter: HospitalFilter, $order: HospitalOrder, $first: Int, $offset: Int) { queryHospital(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new HospitalModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateHospital(variables: { filter?: (HospitalFilter | null) }, resultSelector: string | ((qb: HospitalAggregateResultModelSelector) => HospitalAggregateResultModelSelector) = hospitalAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateHospital: HospitalAggregateResultModelType }>(`query aggregateHospital($filter: HospitalFilter) { aggregateHospital(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new HospitalAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetCaseLog(variables: { id: string }, resultSelector: string | ((qb: CaseLogModelSelector) => CaseLogModelSelector) = caseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCaseLog: CaseLogModelType }>(`query getCaseLog($id: ID!) { getCaseLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryCaseLog(variables: { filter?: (CaseLogFilter | null), order?: (CaseLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: CaseLogModelSelector) => CaseLogModelSelector) = caseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryCaseLog: CaseLogModelType[] }>(`query queryCaseLog($filter: CaseLogFilter, $order: CaseLogOrder, $first: Int, $offset: Int) { queryCaseLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new CaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateCaseLog(variables: { filter?: (CaseLogFilter | null) }, resultSelector: string | ((qb: CaseLogAggregateResultModelSelector) => CaseLogAggregateResultModelSelector) = caseLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateCaseLog: CaseLogAggregateResultModelType }>(`query aggregateCaseLog($filter: CaseLogFilter) { aggregateCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new CaseLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetAnaesthesiaCaseLog(variables: { id: string }, resultSelector: string | ((qb: AnaesthesiaCaseLogModelSelector) => AnaesthesiaCaseLogModelSelector) = anaesthesiaCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getAnaesthesiaCaseLog: AnaesthesiaCaseLogModelType }>(`query getAnaesthesiaCaseLog($id: ID!) { getAnaesthesiaCaseLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryAnaesthesiaCaseLog(variables: { filter?: (AnaesthesiaCaseLogFilter | null), order?: (AnaesthesiaCaseLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: AnaesthesiaCaseLogModelSelector) => AnaesthesiaCaseLogModelSelector) = anaesthesiaCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryAnaesthesiaCaseLog: AnaesthesiaCaseLogModelType[] }>(`query queryAnaesthesiaCaseLog($filter: AnaesthesiaCaseLogFilter, $order: AnaesthesiaCaseLogOrder, $first: Int, $offset: Int) { queryAnaesthesiaCaseLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateAnaesthesiaCaseLog(variables: { filter?: (AnaesthesiaCaseLogFilter | null) }, resultSelector: string | ((qb: AnaesthesiaCaseLogAggregateResultModelSelector) => AnaesthesiaCaseLogAggregateResultModelSelector) = anaesthesiaCaseLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateAnaesthesiaCaseLog: AnaesthesiaCaseLogAggregateResultModelType }>(`query aggregateAnaesthesiaCaseLog($filter: AnaesthesiaCaseLogFilter) { aggregateAnaesthesiaCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaCaseLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOrthodonticsCaseLog(variables: { id: string }, resultSelector: string | ((qb: OrthodonticsCaseLogModelSelector) => OrthodonticsCaseLogModelSelector) = orthodonticsCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOrthodonticsCaseLog: OrthodonticsCaseLogModelType }>(`query getOrthodonticsCaseLog($id: ID!) { getOrthodonticsCaseLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryOrthodonticsCaseLog(variables: { filter?: (OrthodonticsCaseLogFilter | null), order?: (OrthodonticsCaseLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: OrthodonticsCaseLogModelSelector) => OrthodonticsCaseLogModelSelector) = orthodonticsCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryOrthodonticsCaseLog: OrthodonticsCaseLogModelType[] }>(`query queryOrthodonticsCaseLog($filter: OrthodonticsCaseLogFilter, $order: OrthodonticsCaseLogOrder, $first: Int, $offset: Int) { queryOrthodonticsCaseLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateOrthodonticsCaseLog(variables: { filter?: (OrthodonticsCaseLogFilter | null) }, resultSelector: string | ((qb: OrthodonticsCaseLogAggregateResultModelSelector) => OrthodonticsCaseLogAggregateResultModelSelector) = orthodonticsCaseLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateOrthodonticsCaseLog: OrthodonticsCaseLogAggregateResultModelType }>(`query aggregateOrthodonticsCaseLog($filter: OrthodonticsCaseLogFilter) { aggregateOrthodonticsCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsCaseLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOrthopaedicsCaseLog(variables: { id: string }, resultSelector: string | ((qb: OrthopaedicsCaseLogModelSelector) => OrthopaedicsCaseLogModelSelector) = orthopaedicsCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOrthopaedicsCaseLog: OrthopaedicsCaseLogModelType }>(`query getOrthopaedicsCaseLog($id: ID!) { getOrthopaedicsCaseLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthopaedicsCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryOrthopaedicsCaseLog(variables: { filter?: (OrthopaedicsCaseLogFilter | null), order?: (OrthopaedicsCaseLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: OrthopaedicsCaseLogModelSelector) => OrthopaedicsCaseLogModelSelector) = orthopaedicsCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryOrthopaedicsCaseLog: OrthopaedicsCaseLogModelType[] }>(`query queryOrthopaedicsCaseLog($filter: OrthopaedicsCaseLogFilter, $order: OrthopaedicsCaseLogOrder, $first: Int, $offset: Int) { queryOrthopaedicsCaseLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthopaedicsCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateOrthopaedicsCaseLog(variables: { filter?: (OrthopaedicsCaseLogFilter | null) }, resultSelector: string | ((qb: OrthopaedicsCaseLogAggregateResultModelSelector) => OrthopaedicsCaseLogAggregateResultModelSelector) = orthopaedicsCaseLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateOrthopaedicsCaseLog: OrthopaedicsCaseLogAggregateResultModelType }>(`query aggregateOrthopaedicsCaseLog($filter: OrthopaedicsCaseLogFilter) { aggregateOrthopaedicsCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthopaedicsCaseLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateAddUser(variables: { input: AddUserInput[], upsert?: (boolean | null) }, resultSelector: string | ((qb: AddUserPayloadModelSelector) => AddUserPayloadModelSelector) = addUserPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addUser: AddUserPayloadModelType }>(`mutation addUser($input: [AddUserInput!]!, $upsert: Boolean) { addUser(input: $input, upsert: $upsert) {
        ${typeof resultSelector === "function" ? resultSelector(new AddUserPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUser(variables: { input: UpdateUserInput }, resultSelector: string | ((qb: UpdateUserPayloadModelSelector) => UpdateUserPayloadModelSelector) = updateUserPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUser: UpdateUserPayloadModelType }>(`mutation updateUser($input: UpdateUserInput!) { updateUser(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateUserPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteUser(variables: { filter: UserFilter }, resultSelector: string | ((qb: DeleteUserPayloadModelSelector) => DeleteUserPayloadModelSelector) = deleteUserPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUser: DeleteUserPayloadModelType }>(`mutation deleteUser($filter: UserFilter!) { deleteUser(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteUserPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddHospital(variables: { input: AddHospitalInput[] }, resultSelector: string | ((qb: AddHospitalPayloadModelSelector) => AddHospitalPayloadModelSelector) = addHospitalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addHospital: AddHospitalPayloadModelType }>(`mutation addHospital($input: [AddHospitalInput!]!) { addHospital(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddHospitalPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateHospital(variables: { input: UpdateHospitalInput }, resultSelector: string | ((qb: UpdateHospitalPayloadModelSelector) => UpdateHospitalPayloadModelSelector) = updateHospitalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateHospital: UpdateHospitalPayloadModelType }>(`mutation updateHospital($input: UpdateHospitalInput!) { updateHospital(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateHospitalPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteHospital(variables: { filter: HospitalFilter }, resultSelector: string | ((qb: DeleteHospitalPayloadModelSelector) => DeleteHospitalPayloadModelSelector) = deleteHospitalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteHospital: DeleteHospitalPayloadModelType }>(`mutation deleteHospital($filter: HospitalFilter!) { deleteHospital(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteHospitalPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddCaseLog(variables: { input: AddCaseLogInput[] }, resultSelector: string | ((qb: AddCaseLogPayloadModelSelector) => AddCaseLogPayloadModelSelector) = addCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addCaseLog: AddCaseLogPayloadModelType }>(`mutation addCaseLog($input: [AddCaseLogInput!]!) { addCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCaseLog(variables: { input: UpdateCaseLogInput }, resultSelector: string | ((qb: UpdateCaseLogPayloadModelSelector) => UpdateCaseLogPayloadModelSelector) = updateCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCaseLog: UpdateCaseLogPayloadModelType }>(`mutation updateCaseLog($input: UpdateCaseLogInput!) { updateCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteCaseLog(variables: { filter: CaseLogFilter }, resultSelector: string | ((qb: DeleteCaseLogPayloadModelSelector) => DeleteCaseLogPayloadModelSelector) = deleteCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCaseLog: DeleteCaseLogPayloadModelType }>(`mutation deleteCaseLog($filter: CaseLogFilter!) { deleteCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddAnaesthesiaCaseLog(variables: { input: AddAnaesthesiaCaseLogInput[] }, resultSelector: string | ((qb: AddAnaesthesiaCaseLogPayloadModelSelector) => AddAnaesthesiaCaseLogPayloadModelSelector) = addAnaesthesiaCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addAnaesthesiaCaseLog: AddAnaesthesiaCaseLogPayloadModelType }>(`mutation addAnaesthesiaCaseLog($input: [AddAnaesthesiaCaseLogInput!]!) { addAnaesthesiaCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddAnaesthesiaCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAnaesthesiaCaseLog(variables: { input: UpdateAnaesthesiaCaseLogInput }, resultSelector: string | ((qb: UpdateAnaesthesiaCaseLogPayloadModelSelector) => UpdateAnaesthesiaCaseLogPayloadModelSelector) = updateAnaesthesiaCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAnaesthesiaCaseLog: UpdateAnaesthesiaCaseLogPayloadModelType }>(`mutation updateAnaesthesiaCaseLog($input: UpdateAnaesthesiaCaseLogInput!) { updateAnaesthesiaCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnaesthesiaCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteAnaesthesiaCaseLog(variables: { filter: AnaesthesiaCaseLogFilter }, resultSelector: string | ((qb: DeleteAnaesthesiaCaseLogPayloadModelSelector) => DeleteAnaesthesiaCaseLogPayloadModelSelector) = deleteAnaesthesiaCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAnaesthesiaCaseLog: DeleteAnaesthesiaCaseLogPayloadModelType }>(`mutation deleteAnaesthesiaCaseLog($filter: AnaesthesiaCaseLogFilter!) { deleteAnaesthesiaCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteAnaesthesiaCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddOrthodonticsCaseLog(variables: { input: AddOrthodonticsCaseLogInput[] }, resultSelector: string | ((qb: AddOrthodonticsCaseLogPayloadModelSelector) => AddOrthodonticsCaseLogPayloadModelSelector) = addOrthodonticsCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addOrthodonticsCaseLog: AddOrthodonticsCaseLogPayloadModelType }>(`mutation addOrthodonticsCaseLog($input: [AddOrthodonticsCaseLogInput!]!) { addOrthodonticsCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddOrthodonticsCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrthodonticsCaseLog(variables: { input: UpdateOrthodonticsCaseLogInput }, resultSelector: string | ((qb: UpdateOrthodonticsCaseLogPayloadModelSelector) => UpdateOrthodonticsCaseLogPayloadModelSelector) = updateOrthodonticsCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrthodonticsCaseLog: UpdateOrthodonticsCaseLogPayloadModelType }>(`mutation updateOrthodonticsCaseLog($input: UpdateOrthodonticsCaseLogInput!) { updateOrthodonticsCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateOrthodonticsCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOrthodonticsCaseLog(variables: { filter: OrthodonticsCaseLogFilter }, resultSelector: string | ((qb: DeleteOrthodonticsCaseLogPayloadModelSelector) => DeleteOrthodonticsCaseLogPayloadModelSelector) = deleteOrthodonticsCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrthodonticsCaseLog: DeleteOrthodonticsCaseLogPayloadModelType }>(`mutation deleteOrthodonticsCaseLog($filter: OrthodonticsCaseLogFilter!) { deleteOrthodonticsCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteOrthodonticsCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddOrthopaedicsCaseLog(variables: { input: AddOrthopaedicsCaseLogInput[] }, resultSelector: string | ((qb: AddOrthopaedicsCaseLogPayloadModelSelector) => AddOrthopaedicsCaseLogPayloadModelSelector) = addOrthopaedicsCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addOrthopaedicsCaseLog: AddOrthopaedicsCaseLogPayloadModelType }>(`mutation addOrthopaedicsCaseLog($input: [AddOrthopaedicsCaseLogInput!]!) { addOrthopaedicsCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddOrthopaedicsCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrthopaedicsCaseLog(variables: { input: UpdateOrthopaedicsCaseLogInput }, resultSelector: string | ((qb: UpdateOrthopaedicsCaseLogPayloadModelSelector) => UpdateOrthopaedicsCaseLogPayloadModelSelector) = updateOrthopaedicsCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrthopaedicsCaseLog: UpdateOrthopaedicsCaseLogPayloadModelType }>(`mutation updateOrthopaedicsCaseLog($input: UpdateOrthopaedicsCaseLogInput!) { updateOrthopaedicsCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateOrthopaedicsCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOrthopaedicsCaseLog(variables: { filter: OrthopaedicsCaseLogFilter }, resultSelector: string | ((qb: DeleteOrthopaedicsCaseLogPayloadModelSelector) => DeleteOrthopaedicsCaseLogPayloadModelSelector) = deleteOrthopaedicsCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrthopaedicsCaseLog: DeleteOrthopaedicsCaseLogPayloadModelType }>(`mutation deleteOrthopaedicsCaseLog($filter: OrthopaedicsCaseLogFilter!) { deleteOrthopaedicsCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteOrthopaedicsCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
