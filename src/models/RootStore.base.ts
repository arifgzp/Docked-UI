/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { OrthopaedicsCaseLogModel, OrthopaedicsCaseLogModelType } from "./OrthopaedicsCaseLogModel"
import { orthopaedicsCaseLogModelPrimitives, OrthopaedicsCaseLogModelSelector } from "./OrthopaedicsCaseLogModel.base"
import { UpdateAnaesthesiaChronicPainLogPayloadModel, UpdateAnaesthesiaChronicPainLogPayloadModelType } from "./UpdateAnaesthesiaChronicPainLogPayloadModel"
import { updateAnaesthesiaChronicPainLogPayloadModelPrimitives, UpdateAnaesthesiaChronicPainLogPayloadModelSelector } from "./UpdateAnaesthesiaChronicPainLogPayloadModel.base"
import { AnaesthesiaChronicPainLogAggregateResultModel, AnaesthesiaChronicPainLogAggregateResultModelType } from "./AnaesthesiaChronicPainLogAggregateResultModel"
import { anaesthesiaChronicPainLogAggregateResultModelPrimitives, AnaesthesiaChronicPainLogAggregateResultModelSelector } from "./AnaesthesiaChronicPainLogAggregateResultModel.base"
import { DeleteOrthopaedicsProcedureLogPayloadModel, DeleteOrthopaedicsProcedureLogPayloadModelType } from "./DeleteOrthopaedicsProcedureLogPayloadModel"
import { deleteOrthopaedicsProcedureLogPayloadModelPrimitives, DeleteOrthopaedicsProcedureLogPayloadModelSelector } from "./DeleteOrthopaedicsProcedureLogPayloadModel.base"
import { AddOrthopaedicsCaseLogPayloadModel, AddOrthopaedicsCaseLogPayloadModelType } from "./AddOrthopaedicsCaseLogPayloadModel"
import { addOrthopaedicsCaseLogPayloadModelPrimitives, AddOrthopaedicsCaseLogPayloadModelSelector } from "./AddOrthopaedicsCaseLogPayloadModel.base"
import { AddRotationPayloadModel, AddRotationPayloadModelType } from "./AddRotationPayloadModel"
import { addRotationPayloadModelPrimitives, AddRotationPayloadModelSelector } from "./AddRotationPayloadModel.base"
import { OrthodonticsPreClinicalAggregateResultModel, OrthodonticsPreClinicalAggregateResultModelType } from "./OrthodonticsPreClinicalAggregateResultModel"
import { orthodonticsPreClinicalAggregateResultModelPrimitives, OrthodonticsPreClinicalAggregateResultModelSelector } from "./OrthodonticsPreClinicalAggregateResultModel.base"
import { AddLogProfilePayloadModel, AddLogProfilePayloadModelType } from "./AddLogProfilePayloadModel"
import { addLogProfilePayloadModelPrimitives, AddLogProfilePayloadModelSelector } from "./AddLogProfilePayloadModel.base"
import { DeleteHospitalsPayloadModel, DeleteHospitalsPayloadModelType } from "./DeleteHospitalsPayloadModel"
import { deleteHospitalsPayloadModelPrimitives, DeleteHospitalsPayloadModelSelector } from "./DeleteHospitalsPayloadModel.base"
import { AddAnaesthesiaCriticalCareCaseLogPayloadModel, AddAnaesthesiaCriticalCareCaseLogPayloadModelType } from "./AddAnaesthesiaCriticalCareCaseLogPayloadModel"
import { addAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, AddAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./AddAnaesthesiaCriticalCareCaseLogPayloadModel.base"
import { UpdateRotationPayloadModel, UpdateRotationPayloadModelType } from "./UpdateRotationPayloadModel"
import { updateRotationPayloadModelPrimitives, UpdateRotationPayloadModelSelector } from "./UpdateRotationPayloadModel.base"
import { UpdateLogProfilePayloadModel, UpdateLogProfilePayloadModelType } from "./UpdateLogProfilePayloadModel"
import { updateLogProfilePayloadModelPrimitives, UpdateLogProfilePayloadModelSelector } from "./UpdateLogProfilePayloadModel.base"
import { UpdateUserPayloadModel, UpdateUserPayloadModelType } from "./UpdateUserPayloadModel"
import { updateUserPayloadModelPrimitives, UpdateUserPayloadModelSelector } from "./UpdateUserPayloadModel.base"
import { UpdateHospitalsPayloadModel, UpdateHospitalsPayloadModelType } from "./UpdateHospitalsPayloadModel"
import { updateHospitalsPayloadModelPrimitives, UpdateHospitalsPayloadModelSelector } from "./UpdateHospitalsPayloadModel.base"
import { AddHospitalsPayloadModel, AddHospitalsPayloadModelType } from "./AddHospitalsPayloadModel"
import { addHospitalsPayloadModelPrimitives, AddHospitalsPayloadModelSelector } from "./AddHospitalsPayloadModel.base"
import { DeleteFacultyPayloadModel, DeleteFacultyPayloadModelType } from "./DeleteFacultyPayloadModel"
import { deleteFacultyPayloadModelPrimitives, DeleteFacultyPayloadModelSelector } from "./DeleteFacultyPayloadModel.base"
import { AnaesthesiaCriticalCareCaseLogModel, AnaesthesiaCriticalCareCaseLogModelType } from "./AnaesthesiaCriticalCareCaseLogModel"
import { anaesthesiaCriticalCareCaseLogModelPrimitives, AnaesthesiaCriticalCareCaseLogModelSelector } from "./AnaesthesiaCriticalCareCaseLogModel.base"
import { UpdateFacultyPayloadModel, UpdateFacultyPayloadModelType } from "./UpdateFacultyPayloadModel"
import { updateFacultyPayloadModelPrimitives, UpdateFacultyPayloadModelSelector } from "./UpdateFacultyPayloadModel.base"
import { AddOrthopaedicsProcedureLogPayloadModel, AddOrthopaedicsProcedureLogPayloadModelType } from "./AddOrthopaedicsProcedureLogPayloadModel"
import { addOrthopaedicsProcedureLogPayloadModelPrimitives, AddOrthopaedicsProcedureLogPayloadModelSelector } from "./AddOrthopaedicsProcedureLogPayloadModel.base"
import { HospitalsAggregateResultModel, HospitalsAggregateResultModelType } from "./HospitalsAggregateResultModel"
import { hospitalsAggregateResultModelPrimitives, HospitalsAggregateResultModelSelector } from "./HospitalsAggregateResultModel.base"
import { FacultyModel, FacultyModelType } from "./FacultyModel"
import { facultyModelPrimitives, FacultyModelSelector } from "./FacultyModel.base"
import { OrthopaedicsProcedureLogModel, OrthopaedicsProcedureLogModelType } from "./OrthopaedicsProcedureLogModel"
import { orthopaedicsProcedureLogModelPrimitives, OrthopaedicsProcedureLogModelSelector } from "./OrthopaedicsProcedureLogModel.base"
import { RotationModel, RotationModelType } from "./RotationModel"
import { rotationModelPrimitives, RotationModelSelector } from "./RotationModel.base"
import { AddAnaesthesiaCaseLogPayloadModel, AddAnaesthesiaCaseLogPayloadModelType } from "./AddAnaesthesiaCaseLogPayloadModel"
import { addAnaesthesiaCaseLogPayloadModelPrimitives, AddAnaesthesiaCaseLogPayloadModelSelector } from "./AddAnaesthesiaCaseLogPayloadModel.base"
import { FacultyAggregateResultModel, FacultyAggregateResultModelType } from "./FacultyAggregateResultModel"
import { facultyAggregateResultModelPrimitives, FacultyAggregateResultModelSelector } from "./FacultyAggregateResultModel.base"
import { RotationAggregateResultModel, RotationAggregateResultModelType } from "./RotationAggregateResultModel"
import { rotationAggregateResultModelPrimitives, RotationAggregateResultModelSelector } from "./RotationAggregateResultModel.base"
import { DeleteAnaesthesiaCriticalCareCaseLogPayloadModel, DeleteAnaesthesiaCriticalCareCaseLogPayloadModelType } from "./DeleteAnaesthesiaCriticalCareCaseLogPayloadModel"
import { deleteAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, DeleteAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./DeleteAnaesthesiaCriticalCareCaseLogPayloadModel.base"
import { DeleteOrthodonticsPreClinicalPayloadModel, DeleteOrthodonticsPreClinicalPayloadModelType } from "./DeleteOrthodonticsPreClinicalPayloadModel"
import { deleteOrthodonticsPreClinicalPayloadModelPrimitives, DeleteOrthodonticsPreClinicalPayloadModelSelector } from "./DeleteOrthodonticsPreClinicalPayloadModel.base"
import { DeleteAnaesthesiaCaseLogPayloadModel, DeleteAnaesthesiaCaseLogPayloadModelType } from "./DeleteAnaesthesiaCaseLogPayloadModel"
import { deleteAnaesthesiaCaseLogPayloadModelPrimitives, DeleteAnaesthesiaCaseLogPayloadModelSelector } from "./DeleteAnaesthesiaCaseLogPayloadModel.base"
import { LogProfileAggregateResultModel, LogProfileAggregateResultModelType } from "./LogProfileAggregateResultModel"
import { logProfileAggregateResultModelPrimitives, LogProfileAggregateResultModelSelector } from "./LogProfileAggregateResultModel.base"
import { UpdateOrthopaedicsCaseLogPayloadModel, UpdateOrthopaedicsCaseLogPayloadModelType } from "./UpdateOrthopaedicsCaseLogPayloadModel"
import { updateOrthopaedicsCaseLogPayloadModelPrimitives, UpdateOrthopaedicsCaseLogPayloadModelSelector } from "./UpdateOrthopaedicsCaseLogPayloadModel.base"
import { DeleteOrthopaedicsCaseLogPayloadModel, DeleteOrthopaedicsCaseLogPayloadModelType } from "./DeleteOrthopaedicsCaseLogPayloadModel"
import { deleteOrthopaedicsCaseLogPayloadModelPrimitives, DeleteOrthopaedicsCaseLogPayloadModelSelector } from "./DeleteOrthopaedicsCaseLogPayloadModel.base"
import { UpdateAnaesthesiaCaseLogPayloadModel, UpdateAnaesthesiaCaseLogPayloadModelType } from "./UpdateAnaesthesiaCaseLogPayloadModel"
import { updateAnaesthesiaCaseLogPayloadModelPrimitives, UpdateAnaesthesiaCaseLogPayloadModelSelector } from "./UpdateAnaesthesiaCaseLogPayloadModel.base"
import { AnaesthesiaChronicPainLogModel, AnaesthesiaChronicPainLogModelType } from "./AnaesthesiaChronicPainLogModel"
import { anaesthesiaChronicPainLogModelPrimitives, AnaesthesiaChronicPainLogModelSelector } from "./AnaesthesiaChronicPainLogModel.base"
import { AddFacultyPayloadModel, AddFacultyPayloadModelType } from "./AddFacultyPayloadModel"
import { addFacultyPayloadModelPrimitives, AddFacultyPayloadModelSelector } from "./AddFacultyPayloadModel.base"
import { UpdateAnaesthesiaCriticalCareCaseLogPayloadModel, UpdateAnaesthesiaCriticalCareCaseLogPayloadModelType } from "./UpdateAnaesthesiaCriticalCareCaseLogPayloadModel"
import { updateAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, UpdateAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./UpdateAnaesthesiaCriticalCareCaseLogPayloadModel.base"
import { DeleteAnaesthesiaChronicPainLogPayloadModel, DeleteAnaesthesiaChronicPainLogPayloadModelType } from "./DeleteAnaesthesiaChronicPainLogPayloadModel"
import { deleteAnaesthesiaChronicPainLogPayloadModelPrimitives, DeleteAnaesthesiaChronicPainLogPayloadModelSelector } from "./DeleteAnaesthesiaChronicPainLogPayloadModel.base"
import { HospitalsModel, HospitalsModelType } from "./HospitalsModel"
import { hospitalsModelPrimitives, HospitalsModelSelector } from "./HospitalsModel.base"
import { OrthodonticsClinicalCaseLogAggregateResultModel, OrthodonticsClinicalCaseLogAggregateResultModelType } from "./OrthodonticsClinicalCaseLogAggregateResultModel"
import { orthodonticsClinicalCaseLogAggregateResultModelPrimitives, OrthodonticsClinicalCaseLogAggregateResultModelSelector } from "./OrthodonticsClinicalCaseLogAggregateResultModel.base"
import { AddAnaesthesiaChronicPainLogPayloadModel, AddAnaesthesiaChronicPainLogPayloadModelType } from "./AddAnaesthesiaChronicPainLogPayloadModel"
import { addAnaesthesiaChronicPainLogPayloadModelPrimitives, AddAnaesthesiaChronicPainLogPayloadModelSelector } from "./AddAnaesthesiaChronicPainLogPayloadModel.base"
import { UserAggregateResultModel, UserAggregateResultModelType } from "./UserAggregateResultModel"
import { userAggregateResultModelPrimitives, UserAggregateResultModelSelector } from "./UserAggregateResultModel.base"
import { DeleteLogProfilePayloadModel, DeleteLogProfilePayloadModelType } from "./DeleteLogProfilePayloadModel"
import { deleteLogProfilePayloadModelPrimitives, DeleteLogProfilePayloadModelSelector } from "./DeleteLogProfilePayloadModel.base"
import { OrthodonticsPreClinicalModel, OrthodonticsPreClinicalModelType } from "./OrthodonticsPreClinicalModel"
import { orthodonticsPreClinicalModelPrimitives, OrthodonticsPreClinicalModelSelector } from "./OrthodonticsPreClinicalModel.base"
import { MultiPolygonModel, MultiPolygonModelType } from "./MultiPolygonModel"
import { multiPolygonModelPrimitives, MultiPolygonModelSelector } from "./MultiPolygonModel.base"
import { UpdateOrthodonticsPreClinicalPayloadModel, UpdateOrthodonticsPreClinicalPayloadModelType } from "./UpdateOrthodonticsPreClinicalPayloadModel"
import { updateOrthodonticsPreClinicalPayloadModelPrimitives, UpdateOrthodonticsPreClinicalPayloadModelSelector } from "./UpdateOrthodonticsPreClinicalPayloadModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { AnaesthesiaCriticalCareCaseLogAggregateResultModel, AnaesthesiaCriticalCareCaseLogAggregateResultModelType } from "./AnaesthesiaCriticalCareCaseLogAggregateResultModel"
import { anaesthesiaCriticalCareCaseLogAggregateResultModelPrimitives, AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector } from "./AnaesthesiaCriticalCareCaseLogAggregateResultModel.base"
import { PointModel, PointModelType } from "./PointModel"
import { pointModelPrimitives, PointModelSelector } from "./PointModel.base"
import { PointListModel, PointListModelType } from "./PointListModel"
import { pointListModelPrimitives, PointListModelSelector } from "./PointListModel.base"
import { UpdateOrthopaedicsProcedureLogPayloadModel, UpdateOrthopaedicsProcedureLogPayloadModelType } from "./UpdateOrthopaedicsProcedureLogPayloadModel"
import { updateOrthopaedicsProcedureLogPayloadModelPrimitives, UpdateOrthopaedicsProcedureLogPayloadModelSelector } from "./UpdateOrthopaedicsProcedureLogPayloadModel.base"
import { AnaesthesiaCaseLogModel, AnaesthesiaCaseLogModelType } from "./AnaesthesiaCaseLogModel"
import { anaesthesiaCaseLogModelPrimitives, AnaesthesiaCaseLogModelSelector } from "./AnaesthesiaCaseLogModel.base"
import { AddOrthodonticsPreClinicalPayloadModel, AddOrthodonticsPreClinicalPayloadModelType } from "./AddOrthodonticsPreClinicalPayloadModel"
import { addOrthodonticsPreClinicalPayloadModelPrimitives, AddOrthodonticsPreClinicalPayloadModelSelector } from "./AddOrthodonticsPreClinicalPayloadModel.base"
import { DeleteOrthodonticsClinicalCaseLogPayloadModel, DeleteOrthodonticsClinicalCaseLogPayloadModelType } from "./DeleteOrthodonticsClinicalCaseLogPayloadModel"
import { deleteOrthodonticsClinicalCaseLogPayloadModelPrimitives, DeleteOrthodonticsClinicalCaseLogPayloadModelSelector } from "./DeleteOrthodonticsClinicalCaseLogPayloadModel.base"
import { OrthodonticsClinicalCaseLogModel, OrthodonticsClinicalCaseLogModelType } from "./OrthodonticsClinicalCaseLogModel"
import { orthodonticsClinicalCaseLogModelPrimitives, OrthodonticsClinicalCaseLogModelSelector } from "./OrthodonticsClinicalCaseLogModel.base"
import { UpdateOrthodonticsClinicalCaseLogPayloadModel, UpdateOrthodonticsClinicalCaseLogPayloadModelType } from "./UpdateOrthodonticsClinicalCaseLogPayloadModel"
import { updateOrthodonticsClinicalCaseLogPayloadModelPrimitives, UpdateOrthodonticsClinicalCaseLogPayloadModelSelector } from "./UpdateOrthodonticsClinicalCaseLogPayloadModel.base"
import { DeleteRotationPayloadModel, DeleteRotationPayloadModelType } from "./DeleteRotationPayloadModel"
import { deleteRotationPayloadModelPrimitives, DeleteRotationPayloadModelSelector } from "./DeleteRotationPayloadModel.base"
import { LogProfileModel, LogProfileModelType } from "./LogProfileModel"
import { logProfileModelPrimitives, LogProfileModelSelector } from "./LogProfileModel.base"
import { OrthopaedicsCaseLogAggregateResultModel, OrthopaedicsCaseLogAggregateResultModelType } from "./OrthopaedicsCaseLogAggregateResultModel"
import { orthopaedicsCaseLogAggregateResultModelPrimitives, OrthopaedicsCaseLogAggregateResultModelSelector } from "./OrthopaedicsCaseLogAggregateResultModel.base"
import { PolygonModel, PolygonModelType } from "./PolygonModel"
import { polygonModelPrimitives, PolygonModelSelector } from "./PolygonModel.base"
import { AddOrthodonticsClinicalCaseLogPayloadModel, AddOrthodonticsClinicalCaseLogPayloadModelType } from "./AddOrthodonticsClinicalCaseLogPayloadModel"
import { addOrthodonticsClinicalCaseLogPayloadModelPrimitives, AddOrthodonticsClinicalCaseLogPayloadModelSelector } from "./AddOrthodonticsClinicalCaseLogPayloadModel.base"
import { DeleteUserPayloadModel, DeleteUserPayloadModelType } from "./DeleteUserPayloadModel"
import { deleteUserPayloadModelPrimitives, DeleteUserPayloadModelSelector } from "./DeleteUserPayloadModel.base"
import { OrthopaedicsProcedureLogAggregateResultModel, OrthopaedicsProcedureLogAggregateResultModelType } from "./OrthopaedicsProcedureLogAggregateResultModel"
import { orthopaedicsProcedureLogAggregateResultModelPrimitives, OrthopaedicsProcedureLogAggregateResultModelSelector } from "./OrthopaedicsProcedureLogAggregateResultModel.base"
import { AnaesthesiaCaseLogAggregateResultModel, AnaesthesiaCaseLogAggregateResultModelType } from "./AnaesthesiaCaseLogAggregateResultModel"
import { anaesthesiaCaseLogAggregateResultModelPrimitives, AnaesthesiaCaseLogAggregateResultModelSelector } from "./AnaesthesiaCaseLogAggregateResultModel.base"
import { AddUserPayloadModel, AddUserPayloadModelType } from "./AddUserPayloadModel"
import { addUserPayloadModelPrimitives, AddUserPayloadModelSelector } from "./AddUserPayloadModel.base"


import { RotationOrderable } from "./RotationOrderableEnum"
import { FacultyHasFilter } from "./FacultyHasFilterEnum"
import { UserRole } from "./UserRoleEnum"
import { OrthodonticsPreClinicalHasFilter } from "./OrthodonticsPreClinicalHasFilterEnum"
import { UserStatus } from "./UserStatusEnum"
import { OrthopaedicsCaseLogOrderable } from "./OrthopaedicsCaseLogOrderableEnum"
import { Mode } from "./ModeEnum"
import { OrthodonticsClinicalCaseLogHasFilter } from "./OrthodonticsClinicalCaseLogHasFilterEnum"
import { AnaesthesiaCriticalCareCaseLogOrderable } from "./AnaesthesiaCriticalCareCaseLogOrderableEnum"
import { LogProfileHasFilter } from "./LogProfileHasFilterEnum"
import { OrthodonticsPreClinicalOrderable } from "./OrthodonticsPreClinicalOrderableEnum"
import { AnaesthesiaChronicPainLogHasFilter } from "./AnaesthesiaChronicPainLogHasFilterEnum"
import { OrthopaedicsCaseLogHasFilter } from "./OrthopaedicsCaseLogHasFilterEnum"
import { AnaesthesiaChronicPainLogOrderable } from "./AnaesthesiaChronicPainLogOrderableEnum"
import { AnaesthesiaCriticalCareCaseLogHasFilter } from "./AnaesthesiaCriticalCareCaseLogHasFilterEnum"
import { LogProfileOrderable } from "./LogProfileOrderableEnum"
import { HttpMethod } from "./HttpMethodEnum"
import { OrthodonticsClinicalCaseLogOrderable } from "./OrthodonticsClinicalCaseLogOrderableEnum"
import { OrthopaedicsProcedureLogOrderable } from "./OrthopaedicsProcedureLogOrderableEnum"
import { DgraphIndex } from "./DgraphIndexEnum"
import { HospitalsHasFilter } from "./HospitalsHasFilterEnum"
import { RotationHasFilter } from "./RotationHasFilterEnum"
import { Gender } from "./GenderEnum"
import { AnaesthesiaCaseLogOrderable } from "./AnaesthesiaCaseLogOrderableEnum"
import { AnaesthesiaCaseLogHasFilter } from "./AnaesthesiaCaseLogHasFilterEnum"
import { HospitalsOrderable } from "./HospitalsOrderableEnum"
import { OrthopaedicsProcedureLogHasFilter } from "./OrthopaedicsProcedureLogHasFilterEnum"
import { UserHasFilter } from "./UserHasFilterEnum"
import { UserOrderable } from "./UserOrderableEnum"
import { FacultyOrderable } from "./FacultyOrderableEnum"

export type UpdateLogProfileInput = {
  filter: LogProfileFilter
  set?: (LogProfilePatch | null)
  remove?: (LogProfilePatch | null)
}
export type RotationOrder = {
  asc?: (RotationOrderable | null)
  desc?: (RotationOrderable | null)
  then?: (RotationOrder | null)
}
export type FacultyPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  firstName?: (string | null)
  lastName?: (string | null)
  name?: (string | null)
  designation?: (string | null)
  otherDesignation?: (string | null)
  phoneNumber?: (string | null)
}
export type UpdateAnaesthesiaCriticalCareCaseLogInput = {
  filter: AnaesthesiaCriticalCareCaseLogFilter
  set?: (AnaesthesiaCriticalCareCaseLogPatch | null)
  remove?: (AnaesthesiaCriticalCareCaseLogPatch | null)
}
export type AddOrthopaedicsProcedureLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  conduct?: (string | null)
  sites?: (string | null)
  procedure?: (string | null)[] | null
  procedureName?: (string | null)
  outcome?: (string | null)
  outcomeOther?: (string | null)
  complication?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type PointRef = {
  longitude: number
  latitude: number
}
export type AddRotationInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  department?: (string | null)
  from?: (any | null)
  to?: (any | null)
}
export type AnaesthesiaCriticalCareCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  diagnosis?: (string | null)
  comorbidites?: (string | null)
  surgicalprocedure?: (string | null)
  complication?: (string | null)
  outcome?: (string | null)
  conduct?: (string | null)
  procedures?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
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
  designationOthers?: (string | null)
  workPlace?: (string | null)
  city?: (string | null)
  medicalCouncilName?: (string | null)
  yearOfRegistration?: (any | null)
  medicalRegistrationNumber?: (string | null)
  verifiedMedicalRegistrationNumber?: (boolean | null)
  targetedCaseLogNumber?: (number | null)
  anaesthesiaCaseLog?: (AnaesthesiaCaseLogRef | null)[] | null
  anaesthesiaChronicPainLog?: (AnaesthesiaChronicPainLogRef | null)[] | null
  anaesthesiaCriticalCareCaseLog?: (AnaesthesiaCriticalCareCaseLogRef | null)[] | null
  orthodonticsClinicalCaseLog?: (OrthodonticsClinicalCaseLogRef | null)[] | null
  orthodonticsPreClinical?: (OrthodonticsPreClinicalRef | null)[] | null
  orthopaedicsCaseLog?: (OrthopaedicsCaseLogRef | null)[] | null
  orthopaedicsProcedureLog?: (OrthopaedicsProcedureLogRef | null)[] | null
  logProfile?: (LogProfileRef | null)
  password: string
}
export type AnaesthesiaCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  weight?: (string | null)
  height?: (string | null)
  diagnosis?: (string | null)
  surgicalProcedure?: (string | null)
  speciality?: (string | null)
  asaGrade?: (string | null)
  typeOfSurgery?: (string | null)
  npo?: (string | null)
  conduct?: (string | null)
  comorbidity?: (string | null)[] | null
  examination?: (string | null)[] | null
  laboratoryFindings?: (string | null)[] | null
  medicalRegistrationNumber?: (string | null)
  typeOfAnaesthesia?: (string | null)[] | null
  drugs?: (string | null)[] | null
  airManagement?: (string | null)[] | null
  regionalTechniques?: (string | null)[] | null
  interventionalProcedures?: (string | null)[] | null
  monitoring?: (string | null)[] | null
  complications?: (string | null)[] | null
  outcome?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type UpdateOrthopaedicsCaseLogInput = {
  filter: OrthopaedicsCaseLogFilter
  set?: (OrthopaedicsCaseLogPatch | null)
  remove?: (OrthopaedicsCaseLogPatch | null)
}
export type NearFilter = {
  distance: number
  coordinate: PointRef
}
export type AnaesthesiaChronicPainLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  diagnosis?: (string | null)
  indication?: (string | null)
  conduct?: (string | null)
  technique?: (string | null)[] | null
  method?: (string | null)[] | null
  drugsUsed?: (string | null)[] | null
  intervention?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
}
export type FloatRange = {
  min: number
  max: number
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
  designationOthers?: (string | null)
  workPlace?: (string | null)
  city?: (string | null)
  medicalCouncilName?: (string | null)
  yearOfRegistration?: (any | null)
  medicalRegistrationNumber?: (string | null)
  verifiedMedicalRegistrationNumber?: (boolean | null)
  targetedCaseLogNumber?: (number | null)
  anaesthesiaCaseLog?: (AnaesthesiaCaseLogRef | null)[] | null
  anaesthesiaChronicPainLog?: (AnaesthesiaChronicPainLogRef | null)[] | null
  anaesthesiaCriticalCareCaseLog?: (AnaesthesiaCriticalCareCaseLogRef | null)[] | null
  orthodonticsClinicalCaseLog?: (OrthodonticsClinicalCaseLogRef | null)[] | null
  orthodonticsPreClinical?: (OrthodonticsPreClinicalRef | null)[] | null
  orthopaedicsCaseLog?: (OrthopaedicsCaseLogRef | null)[] | null
  orthopaedicsProcedureLog?: (OrthopaedicsProcedureLogRef | null)[] | null
  logProfile?: (LogProfileRef | null)
  password?: (string | null)
}
export type DgraphDefault = {
  value?: (string | null)
}
export type OrthodonticsClinicalCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  diagnosis?: (string | null)
  techniqueUsed?: (string | null)
  conduct?: (string | null)
  applianceUsed?: (string | null)[] | null
  treatmentPlan?: (string | null)[] | null
  outcome?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type UpdateUserInput = {
  filter: UserFilter
  set?: (UserPatch | null)
  remove?: (UserPatch | null)
}
export type AddAnaesthesiaCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  weight?: (string | null)
  height?: (string | null)
  diagnosis?: (string | null)
  surgicalProcedure?: (string | null)
  speciality?: (string | null)
  asaGrade?: (string | null)
  typeOfSurgery?: (string | null)
  npo?: (string | null)
  conduct?: (string | null)
  comorbidity?: (string | null)[] | null
  examination?: (string | null)[] | null
  laboratoryFindings?: (string | null)[] | null
  medicalRegistrationNumber?: (string | null)
  typeOfAnaesthesia?: (string | null)[] | null
  drugs?: (string | null)[] | null
  airManagement?: (string | null)[] | null
  regionalTechniques?: (string | null)[] | null
  interventionalProcedures?: (string | null)[] | null
  monitoring?: (string | null)[] | null
  complications?: (string | null)[] | null
  outcome?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type StringRange = {
  min: string
  max: string
}
export type AnaesthesiaCriticalCareCaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  rotation?: (StringTermFilter | null)
  hospital?: (StringTermFilter | null)
  outcome?: (StringTermFilter | null)
  has?: (AnaesthesiaCriticalCareCaseLogHasFilter | null)[] | null
  and?: (AnaesthesiaCriticalCareCaseLogFilter | null)[] | null
  or?: (AnaesthesiaCriticalCareCaseLogFilter | null)[] | null
  not?: (AnaesthesiaCriticalCareCaseLogFilter | null)
}
export type GenderHash = {
  eq?: (Gender | null)
  in?: (Gender | null)[] | null
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
export type UpdateHospitalsInput = {
  filter: HospitalsFilter
  set?: (HospitalsPatch | null)
  remove?: (HospitalsPatch | null)
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
export type PolygonRef = {
  coordinates: PointListRef[]
}
export type ContainsFilter = {
  point?: (PointRef | null)
  polygon?: (PolygonRef | null)
}
export type AddLogProfileInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  hospitals?: (HospitalsRef | null)[] | null
  faculties?: (FacultyRef | null)[] | null
  rotations?: (RotationRef | null)[] | null
}
export type LogProfileFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  has?: (LogProfileHasFilter | null)[] | null
  and?: (LogProfileFilter | null)[] | null
  or?: (LogProfileFilter | null)[] | null
  not?: (LogProfileFilter | null)
}
export type OrthodonticsPreClinicalOrder = {
  asc?: (OrthodonticsPreClinicalOrderable | null)
  desc?: (OrthodonticsPreClinicalOrderable | null)
  then?: (OrthodonticsPreClinicalOrder | null)
}
export type PointGeoFilter = {
  near?: (NearFilter | null)
  within?: (WithinFilter | null)
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
  designationOthers?: (StringTermFilter | null)
  workPlace?: (StringTermFilter | null)
  city?: (StringTermFilter | null)
  medicalCouncilName?: (StringTermFilter | null)
  medicalRegistrationNumber?: (StringTermFilter | null)
  has?: (UserHasFilter | null)[] | null
  and?: (UserFilter | null)[] | null
  or?: (UserFilter | null)[] | null
  not?: (UserFilter | null)
}
export type FacultyOrder = {
  asc?: (FacultyOrderable | null)
  desc?: (FacultyOrderable | null)
  then?: (FacultyOrder | null)
}
export type GenerateMutationParams = {
  add?: (boolean | null)
  update?: (boolean | null)
  delete?: (boolean | null)
}
export type StringTermFilter = {
  allofterms?: (string | null)
  anyofterms?: (string | null)
}
export type HospitalsFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  name?: (StringTermFilter | null)
  has?: (HospitalsHasFilter | null)[] | null
  and?: (HospitalsFilter | null)[] | null
  or?: (HospitalsFilter | null)[] | null
  not?: (HospitalsFilter | null)
}
export type UpdateAnaesthesiaChronicPainLogInput = {
  filter: AnaesthesiaChronicPainLogFilter
  set?: (AnaesthesiaChronicPainLogPatch | null)
  remove?: (AnaesthesiaChronicPainLogPatch | null)
}
export type OrthodonticsPreClinicalPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  conduct?: (string | null)
  wireBendingRecord?: (string | null)[] | null
  roundWireLoopRecord?: (string | null)[] | null
  loopInEdgewiseWireRecord?: (string | null)[] | null
  solderingExerciseRecord?: (string | null)[] | null
  cephalometricTracingRecord?: (string | null)[] | null
  claspRecord?: (string | null)[] | null
  springsRecord?: (string | null)[] | null
  canineRetractorsRecord?: (string | null)[] | null
  bowsRecord?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
}
export type LogProfilePatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  hospitals?: (HospitalsRef | null)[] | null
  faculties?: (FacultyRef | null)[] | null
  rotations?: (RotationRef | null)[] | null
}
export type OrthopaedicsProcedureLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  conduct?: (string | null)
  sites?: (string | null)
  procedure?: (string | null)[] | null
  procedureName?: (string | null)
  outcome?: (string | null)
  outcomeOther?: (string | null)
  complication?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type UpdateOrthodonticsClinicalCaseLogInput = {
  filter: OrthodonticsClinicalCaseLogFilter
  set?: (OrthodonticsClinicalCaseLogPatch | null)
  remove?: (OrthodonticsClinicalCaseLogPatch | null)
}
export type OrthopaedicsProcedureLogOrder = {
  asc?: (OrthopaedicsProcedureLogOrderable | null)
  desc?: (OrthopaedicsProcedureLogOrderable | null)
  then?: (OrthopaedicsProcedureLogOrder | null)
}
export type UserStatusHash = {
  eq?: (UserStatus | null)
  in?: (UserStatus | null)[] | null
}
export type MultiPolygonRef = {
  polygons: PolygonRef[]
}
export type AddAnaesthesiaChronicPainLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  diagnosis?: (string | null)
  indication?: (string | null)
  conduct?: (string | null)
  technique?: (string | null)[] | null
  method?: (string | null)[] | null
  drugsUsed?: (string | null)[] | null
  intervention?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
}
export type AddHospitalsInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
}
export type OrthodonticsPreClinicalRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  conduct?: (string | null)
  wireBendingRecord?: (string | null)[] | null
  roundWireLoopRecord?: (string | null)[] | null
  loopInEdgewiseWireRecord?: (string | null)[] | null
  solderingExerciseRecord?: (string | null)[] | null
  cephalometricTracingRecord?: (string | null)[] | null
  claspRecord?: (string | null)[] | null
  springsRecord?: (string | null)[] | null
  canineRetractorsRecord?: (string | null)[] | null
  bowsRecord?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
}
export type AuthRule = {
  and?: (AuthRule | null)[] | null
  or?: (AuthRule | null)[] | null
  not?: (AuthRule | null)
  rule?: (string | null)
}
export type AddOrthodonticsPreClinicalInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  conduct?: (string | null)
  wireBendingRecord?: (string | null)[] | null
  roundWireLoopRecord?: (string | null)[] | null
  loopInEdgewiseWireRecord?: (string | null)[] | null
  solderingExerciseRecord?: (string | null)[] | null
  cephalometricTracingRecord?: (string | null)[] | null
  claspRecord?: (string | null)[] | null
  springsRecord?: (string | null)[] | null
  canineRetractorsRecord?: (string | null)[] | null
  bowsRecord?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
}
export type RotationFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  department?: (StringTermFilter | null)
  from?: (DateTimeFilter | null)
  to?: (DateTimeFilter | null)
  has?: (RotationHasFilter | null)[] | null
  and?: (RotationFilter | null)[] | null
  or?: (RotationFilter | null)[] | null
  not?: (RotationFilter | null)
}
export type RotationPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  department?: (string | null)
  from?: (any | null)
  to?: (any | null)
}
export type RotationRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  department?: (string | null)
  from?: (any | null)
  to?: (any | null)
}
export type OrthopaedicsCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  diseaseCategory?: (string | null)[] | null
  conduct?: (string | null)
  site?: (string | null)[] | null
  joint?: (string | null)[] | null
  bones?: (string | null)[] | null
  outcomes?: (string | null)[] | null
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type FacultyRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  firstName?: (string | null)
  lastName?: (string | null)
  name?: (string | null)
  designation?: (string | null)
  otherDesignation?: (string | null)
  phoneNumber?: (string | null)
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
export type LogProfileOrder = {
  asc?: (LogProfileOrderable | null)
  desc?: (LogProfileOrderable | null)
  then?: (LogProfileOrder | null)
}
export type UpdateAnaesthesiaCaseLogInput = {
  filter: AnaesthesiaCaseLogFilter
  set?: (AnaesthesiaCaseLogPatch | null)
  remove?: (AnaesthesiaCaseLogPatch | null)
}
export type AddFacultyInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  firstName?: (string | null)
  lastName?: (string | null)
  name?: (string | null)
  designation?: (string | null)
  otherDesignation?: (string | null)
  phoneNumber?: (string | null)
}
export type AnaesthesiaCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  weight?: (string | null)
  height?: (string | null)
  diagnosis?: (string | null)
  surgicalProcedure?: (string | null)
  speciality?: (string | null)
  asaGrade?: (string | null)
  typeOfSurgery?: (string | null)
  npo?: (string | null)
  conduct?: (string | null)
  comorbidity?: (string | null)[] | null
  examination?: (string | null)[] | null
  laboratoryFindings?: (string | null)[] | null
  medicalRegistrationNumber?: (string | null)
  typeOfAnaesthesia?: (string | null)[] | null
  drugs?: (string | null)[] | null
  airManagement?: (string | null)[] | null
  regionalTechniques?: (string | null)[] | null
  interventionalProcedures?: (string | null)[] | null
  monitoring?: (string | null)[] | null
  complications?: (string | null)[] | null
  outcome?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type HospitalsOrder = {
  asc?: (HospitalsOrderable | null)
  desc?: (HospitalsOrderable | null)
  then?: (HospitalsOrder | null)
}
export type AddOrthopaedicsCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  diseaseCategory?: (string | null)[] | null
  conduct?: (string | null)
  site?: (string | null)[] | null
  joint?: (string | null)[] | null
  bones?: (string | null)[] | null
  outcomes?: (string | null)[] | null
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type AnaesthesiaChronicPainLogOrder = {
  asc?: (AnaesthesiaChronicPainLogOrderable | null)
  desc?: (AnaesthesiaChronicPainLogOrderable | null)
  then?: (AnaesthesiaChronicPainLogOrder | null)
}
export type AnaesthesiaChronicPainLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  diagnosis?: (string | null)
  indication?: (string | null)
  conduct?: (string | null)
  technique?: (string | null)[] | null
  method?: (string | null)[] | null
  drugsUsed?: (string | null)[] | null
  intervention?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
}
export type OrthodonticsClinicalCaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  rotation?: (StringTermFilter | null)
  diagnosis?: (StringTermFilter | null)
  techniqueUsed?: (StringTermFilter | null)
  applianceUsed?: (StringTermFilter | null)
  treatmentPlan?: (StringTermFilter | null)
  has?: (OrthodonticsClinicalCaseLogHasFilter | null)[] | null
  and?: (OrthodonticsClinicalCaseLogFilter | null)[] | null
  or?: (OrthodonticsClinicalCaseLogFilter | null)[] | null
  not?: (OrthodonticsClinicalCaseLogFilter | null)
}
export type AnaesthesiaChronicPainLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  rotation?: (StringTermFilter | null)
  hospital?: (StringTermFilter | null)
  intervention?: (StringTermFilter | null)
  has?: (AnaesthesiaChronicPainLogHasFilter | null)[] | null
  and?: (AnaesthesiaChronicPainLogFilter | null)[] | null
  or?: (AnaesthesiaChronicPainLogFilter | null)[] | null
  not?: (AnaesthesiaChronicPainLogFilter | null)
}
export type UserOrder = {
  asc?: (UserOrderable | null)
  desc?: (UserOrderable | null)
  then?: (UserOrder | null)
}
export type GenerateQueryParams = {
  get?: (boolean | null)
  query?: (boolean | null)
  password?: (boolean | null)
  aggregate?: (boolean | null)
}
export type AddAnaesthesiaCriticalCareCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  diagnosis?: (string | null)
  comorbidites?: (string | null)
  surgicalprocedure?: (string | null)
  complication?: (string | null)
  outcome?: (string | null)
  conduct?: (string | null)
  procedures?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
}
export type LogProfileRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  hospitals?: (HospitalsRef | null)[] | null
  faculties?: (FacultyRef | null)[] | null
  rotations?: (RotationRef | null)[] | null
}
export type Int64Range = {
  min: any
  max: any
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
  designationOthers?: (string | null)
  workPlace?: (string | null)
  city?: (string | null)
  medicalCouncilName?: (string | null)
  yearOfRegistration?: (any | null)
  medicalRegistrationNumber?: (string | null)
  verifiedMedicalRegistrationNumber?: (boolean | null)
  targetedCaseLogNumber?: (number | null)
  anaesthesiaCaseLog?: (AnaesthesiaCaseLogRef | null)[] | null
  anaesthesiaChronicPainLog?: (AnaesthesiaChronicPainLogRef | null)[] | null
  anaesthesiaCriticalCareCaseLog?: (AnaesthesiaCriticalCareCaseLogRef | null)[] | null
  orthodonticsClinicalCaseLog?: (OrthodonticsClinicalCaseLogRef | null)[] | null
  orthodonticsPreClinical?: (OrthodonticsPreClinicalRef | null)[] | null
  orthopaedicsCaseLog?: (OrthopaedicsCaseLogRef | null)[] | null
  orthopaedicsProcedureLog?: (OrthopaedicsProcedureLogRef | null)[] | null
  logProfile?: (LogProfileRef | null)
  password?: (string | null)
}
export type FacultyFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  firstName?: (StringTermFilter | null)
  lastName?: (StringTermFilter | null)
  name?: (StringTermFilter | null)
  designation?: (StringTermFilter | null)
  otherDesignation?: (StringTermFilter | null)
  phoneNumber?: (StringTermFilter | null)
  has?: (FacultyHasFilter | null)[] | null
  and?: (FacultyFilter | null)[] | null
  or?: (FacultyFilter | null)[] | null
  not?: (FacultyFilter | null)
}
export type OrthodonticsClinicalCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  diagnosis?: (string | null)
  techniqueUsed?: (string | null)
  conduct?: (string | null)
  applianceUsed?: (string | null)[] | null
  treatmentPlan?: (string | null)[] | null
  outcome?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type OrthopaedicsProcedureLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  conduct?: (string | null)
  sites?: (string | null)
  procedure?: (string | null)[] | null
  procedureName?: (string | null)
  outcome?: (string | null)
  outcomeOther?: (string | null)
  complication?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
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
export type WithinFilter = {
  polygon: PolygonRef
}
export type AnaesthesiaCriticalCareCaseLogOrder = {
  asc?: (AnaesthesiaCriticalCareCaseLogOrderable | null)
  desc?: (AnaesthesiaCriticalCareCaseLogOrderable | null)
  then?: (AnaesthesiaCriticalCareCaseLogOrder | null)
}
export type IntersectsFilter = {
  polygon?: (PolygonRef | null)
  multiPolygon?: (MultiPolygonRef | null)
}
export type StringRegExpFilter = {
  regexp?: (string | null)
}
export type StringFullTextFilter = {
  alloftext?: (string | null)
  anyoftext?: (string | null)
}
export type HospitalsRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
}
export type UpdateRotationInput = {
  filter: RotationFilter
  set?: (RotationPatch | null)
  remove?: (RotationPatch | null)
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
export type AddOrthodonticsClinicalCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  diagnosis?: (string | null)
  techniqueUsed?: (string | null)
  conduct?: (string | null)
  applianceUsed?: (string | null)[] | null
  treatmentPlan?: (string | null)[] | null
  outcome?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type OrthopaedicsCaseLogOrder = {
  asc?: (OrthopaedicsCaseLogOrderable | null)
  desc?: (OrthopaedicsCaseLogOrderable | null)
  then?: (OrthopaedicsCaseLogOrder | null)
}
export type IntRange = {
  min: number
  max: number
}
export type DateTimeRange = {
  min: any
  max: any
}
export type AnaesthesiaCaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  rotation?: (StringTermFilter | null)
  hospital?: (StringTermFilter | null)
  medicalRegistrationNumber?: (StringTermFilter | null)
  typeOfAnaesthesia?: (StringTermFilter | null)
  drugs?: (StringTermFilter | null)
  airManagement?: (StringTermFilter | null)
  regionalTechniques?: (StringTermFilter | null)
  interventionalProcedures?: (StringTermFilter | null)
  monitoring?: (StringTermFilter | null)
  complications?: (StringTermFilter | null)
  outcome?: (StringTermFilter | null)
  has?: (AnaesthesiaCaseLogHasFilter | null)[] | null
  and?: (AnaesthesiaCaseLogFilter | null)[] | null
  or?: (AnaesthesiaCaseLogFilter | null)[] | null
  not?: (AnaesthesiaCaseLogFilter | null)
}
export type AnaesthesiaCriticalCareCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  diagnosis?: (string | null)
  comorbidites?: (string | null)
  surgicalprocedure?: (string | null)
  complication?: (string | null)
  outcome?: (string | null)
  conduct?: (string | null)
  procedures?: (string | null)[] | null
  caseType?: (string | null)
  remarks?: (string | null)
}
export type OrthodonticsClinicalCaseLogOrder = {
  asc?: (OrthodonticsClinicalCaseLogOrderable | null)
  desc?: (OrthodonticsClinicalCaseLogOrderable | null)
  then?: (OrthodonticsClinicalCaseLogOrder | null)
}
export type UpdateOrthopaedicsProcedureLogInput = {
  filter: OrthopaedicsProcedureLogFilter
  set?: (OrthopaedicsProcedureLogPatch | null)
  remove?: (OrthopaedicsProcedureLogPatch | null)
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
export type OrthodonticsPreClinicalFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  rotation?: (StringTermFilter | null)
  wireBendingRecord?: (StringTermFilter | null)
  roundWireLoopRecord?: (StringTermFilter | null)
  solderingExerciseRecord?: (StringTermFilter | null)
  cephalometricTracingRecord?: (StringTermFilter | null)
  claspRecord?: (StringTermFilter | null)
  has?: (OrthodonticsPreClinicalHasFilter | null)[] | null
  and?: (OrthodonticsPreClinicalFilter | null)[] | null
  or?: (OrthodonticsPreClinicalFilter | null)[] | null
  not?: (OrthodonticsPreClinicalFilter | null)
}
export type OrthopaedicsCaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  rotation?: (StringTermFilter | null)
  diseaseCategory?: (StringTermFilter | null)
  site?: (StringTermFilter | null)
  joint?: (StringTermFilter | null)
  bones?: (StringTermFilter | null)
  outcomes?: (StringTermFilter | null)
  diagnosis?: (StringTermFilter | null)
  has?: (OrthopaedicsCaseLogHasFilter | null)[] | null
  and?: (OrthopaedicsCaseLogFilter | null)[] | null
  or?: (OrthopaedicsCaseLogFilter | null)[] | null
  not?: (OrthopaedicsCaseLogFilter | null)
}
export type PointListRef = {
  points: PointRef[]
}
export type StringHashFilter = {
  eq?: (string | null)
  in?: (string | null)[] | null
}
export type PolygonGeoFilter = {
  near?: (NearFilter | null)
  within?: (WithinFilter | null)
  contains?: (ContainsFilter | null)
  intersects?: (IntersectsFilter | null)
}
export type UpdateFacultyInput = {
  filter: FacultyFilter
  set?: (FacultyPatch | null)
  remove?: (FacultyPatch | null)
}
export type OrthopaedicsProcedureLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  rotation?: (StringTermFilter | null)
  sites?: (StringTermFilter | null)
  procedure?: (StringTermFilter | null)
  procedureName?: (StringTermFilter | null)
  outcome?: (StringTermFilter | null)
  outcomeOther?: (StringTermFilter | null)
  complication?: (StringTermFilter | null)
  diagnosis?: (StringTermFilter | null)
  has?: (OrthopaedicsProcedureLogHasFilter | null)[] | null
  and?: (OrthopaedicsProcedureLogFilter | null)[] | null
  or?: (OrthopaedicsProcedureLogFilter | null)[] | null
  not?: (OrthopaedicsProcedureLogFilter | null)
}
export type UpdateOrthodonticsPreClinicalInput = {
  filter: OrthodonticsPreClinicalFilter
  set?: (OrthodonticsPreClinicalPatch | null)
  remove?: (OrthodonticsPreClinicalPatch | null)
}
export type HospitalsPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
}
export type AnaesthesiaCaseLogOrder = {
  asc?: (AnaesthesiaCaseLogOrderable | null)
  desc?: (AnaesthesiaCaseLogOrderable | null)
  then?: (AnaesthesiaCaseLogOrder | null)
}
export type OrthopaedicsCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  diseaseCategory?: (string | null)[] | null
  conduct?: (string | null)
  site?: (string | null)[] | null
  joint?: (string | null)[] | null
  bones?: (string | null)[] | null
  outcomes?: (string | null)[] | null
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orthopaedicsCaseLogs: ObservableMap<string, OrthopaedicsCaseLogModelType>,
  anaesthesiaCriticalCareCaseLogs: ObservableMap<string, AnaesthesiaCriticalCareCaseLogModelType>,
  faculties: ObservableMap<string, FacultyModelType>,
  orthopaedicsProcedureLogs: ObservableMap<string, OrthopaedicsProcedureLogModelType>,
  rotations: ObservableMap<string, RotationModelType>,
  anaesthesiaChronicPainLogs: ObservableMap<string, AnaesthesiaChronicPainLogModelType>,
  hospitals: ObservableMap<string, HospitalsModelType>,
  orthodonticsPreClinicals: ObservableMap<string, OrthodonticsPreClinicalModelType>,
  users: ObservableMap<string, UserModelType>,
  anaesthesiaCaseLogs: ObservableMap<string, AnaesthesiaCaseLogModelType>,
  orthodonticsClinicalCaseLogs: ObservableMap<string, OrthodonticsClinicalCaseLogModelType>,
  logProfiles: ObservableMap<string, LogProfileModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryGetUser="queryGetUser",
queryCheckUserPassword="queryCheckUserPassword",
queryQueryUser="queryQueryUser",
queryAggregateUser="queryAggregateUser",
queryGetAnaesthesiaCaseLog="queryGetAnaesthesiaCaseLog",
queryQueryAnaesthesiaCaseLog="queryQueryAnaesthesiaCaseLog",
queryAggregateAnaesthesiaCaseLog="queryAggregateAnaesthesiaCaseLog",
queryGetAnaesthesiaChronicPainLog="queryGetAnaesthesiaChronicPainLog",
queryQueryAnaesthesiaChronicPainLog="queryQueryAnaesthesiaChronicPainLog",
queryAggregateAnaesthesiaChronicPainLog="queryAggregateAnaesthesiaChronicPainLog",
queryGetAnaesthesiaCriticalCareCaseLog="queryGetAnaesthesiaCriticalCareCaseLog",
queryQueryAnaesthesiaCriticalCareCaseLog="queryQueryAnaesthesiaCriticalCareCaseLog",
queryAggregateAnaesthesiaCriticalCareCaseLog="queryAggregateAnaesthesiaCriticalCareCaseLog",
queryGetOrthodonticsClinicalCaseLog="queryGetOrthodonticsClinicalCaseLog",
queryQueryOrthodonticsClinicalCaseLog="queryQueryOrthodonticsClinicalCaseLog",
queryAggregateOrthodonticsClinicalCaseLog="queryAggregateOrthodonticsClinicalCaseLog",
queryGetOrthodonticsPreClinical="queryGetOrthodonticsPreClinical",
queryQueryOrthodonticsPreClinical="queryQueryOrthodonticsPreClinical",
queryAggregateOrthodonticsPreClinical="queryAggregateOrthodonticsPreClinical",
queryGetOrthopaedicsCaseLog="queryGetOrthopaedicsCaseLog",
queryQueryOrthopaedicsCaseLog="queryQueryOrthopaedicsCaseLog",
queryAggregateOrthopaedicsCaseLog="queryAggregateOrthopaedicsCaseLog",
queryGetOrthopaedicsProcedureLog="queryGetOrthopaedicsProcedureLog",
queryQueryOrthopaedicsProcedureLog="queryQueryOrthopaedicsProcedureLog",
queryAggregateOrthopaedicsProcedureLog="queryAggregateOrthopaedicsProcedureLog",
queryGetLogProfile="queryGetLogProfile",
queryQueryLogProfile="queryQueryLogProfile",
queryAggregateLogProfile="queryAggregateLogProfile",
queryGetHospitals="queryGetHospitals",
queryQueryHospitals="queryQueryHospitals",
queryAggregateHospitals="queryAggregateHospitals",
queryGetFaculty="queryGetFaculty",
queryQueryFaculty="queryQueryFaculty",
queryAggregateFaculty="queryAggregateFaculty",
queryGetRotation="queryGetRotation",
queryQueryRotation="queryQueryRotation",
queryAggregateRotation="queryAggregateRotation"
}
export enum RootStoreBaseMutations {
mutateAddUser="mutateAddUser",
mutateUpdateUser="mutateUpdateUser",
mutateDeleteUser="mutateDeleteUser",
mutateAddAnaesthesiaCaseLog="mutateAddAnaesthesiaCaseLog",
mutateUpdateAnaesthesiaCaseLog="mutateUpdateAnaesthesiaCaseLog",
mutateDeleteAnaesthesiaCaseLog="mutateDeleteAnaesthesiaCaseLog",
mutateAddAnaesthesiaChronicPainLog="mutateAddAnaesthesiaChronicPainLog",
mutateUpdateAnaesthesiaChronicPainLog="mutateUpdateAnaesthesiaChronicPainLog",
mutateDeleteAnaesthesiaChronicPainLog="mutateDeleteAnaesthesiaChronicPainLog",
mutateAddAnaesthesiaCriticalCareCaseLog="mutateAddAnaesthesiaCriticalCareCaseLog",
mutateUpdateAnaesthesiaCriticalCareCaseLog="mutateUpdateAnaesthesiaCriticalCareCaseLog",
mutateDeleteAnaesthesiaCriticalCareCaseLog="mutateDeleteAnaesthesiaCriticalCareCaseLog",
mutateAddOrthodonticsClinicalCaseLog="mutateAddOrthodonticsClinicalCaseLog",
mutateUpdateOrthodonticsClinicalCaseLog="mutateUpdateOrthodonticsClinicalCaseLog",
mutateDeleteOrthodonticsClinicalCaseLog="mutateDeleteOrthodonticsClinicalCaseLog",
mutateAddOrthodonticsPreClinical="mutateAddOrthodonticsPreClinical",
mutateUpdateOrthodonticsPreClinical="mutateUpdateOrthodonticsPreClinical",
mutateDeleteOrthodonticsPreClinical="mutateDeleteOrthodonticsPreClinical",
mutateAddOrthopaedicsCaseLog="mutateAddOrthopaedicsCaseLog",
mutateUpdateOrthopaedicsCaseLog="mutateUpdateOrthopaedicsCaseLog",
mutateDeleteOrthopaedicsCaseLog="mutateDeleteOrthopaedicsCaseLog",
mutateAddOrthopaedicsProcedureLog="mutateAddOrthopaedicsProcedureLog",
mutateUpdateOrthopaedicsProcedureLog="mutateUpdateOrthopaedicsProcedureLog",
mutateDeleteOrthopaedicsProcedureLog="mutateDeleteOrthopaedicsProcedureLog",
mutateAddLogProfile="mutateAddLogProfile",
mutateUpdateLogProfile="mutateUpdateLogProfile",
mutateDeleteLogProfile="mutateDeleteLogProfile",
mutateAddHospitals="mutateAddHospitals",
mutateUpdateHospitals="mutateUpdateHospitals",
mutateDeleteHospitals="mutateDeleteHospitals",
mutateAddFaculty="mutateAddFaculty",
mutateUpdateFaculty="mutateUpdateFaculty",
mutateDeleteFaculty="mutateDeleteFaculty",
mutateAddRotation="mutateAddRotation",
mutateUpdateRotation="mutateUpdateRotation",
mutateDeleteRotation="mutateDeleteRotation"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['OrthopaedicsCaseLog', () => OrthopaedicsCaseLogModel], ['UpdateAnaesthesiaChronicPainLogPayload', () => UpdateAnaesthesiaChronicPainLogPayloadModel], ['AnaesthesiaChronicPainLogAggregateResult', () => AnaesthesiaChronicPainLogAggregateResultModel], ['DeleteOrthopaedicsProcedureLogPayload', () => DeleteOrthopaedicsProcedureLogPayloadModel], ['AddOrthopaedicsCaseLogPayload', () => AddOrthopaedicsCaseLogPayloadModel], ['AddRotationPayload', () => AddRotationPayloadModel], ['OrthodonticsPreClinicalAggregateResult', () => OrthodonticsPreClinicalAggregateResultModel], ['AddLogProfilePayload', () => AddLogProfilePayloadModel], ['DeleteHospitalsPayload', () => DeleteHospitalsPayloadModel], ['AddAnaesthesiaCriticalCareCaseLogPayload', () => AddAnaesthesiaCriticalCareCaseLogPayloadModel], ['UpdateRotationPayload', () => UpdateRotationPayloadModel], ['UpdateLogProfilePayload', () => UpdateLogProfilePayloadModel], ['UpdateUserPayload', () => UpdateUserPayloadModel], ['UpdateHospitalsPayload', () => UpdateHospitalsPayloadModel], ['AddHospitalsPayload', () => AddHospitalsPayloadModel], ['DeleteFacultyPayload', () => DeleteFacultyPayloadModel], ['AnaesthesiaCriticalCareCaseLog', () => AnaesthesiaCriticalCareCaseLogModel], ['UpdateFacultyPayload', () => UpdateFacultyPayloadModel], ['AddOrthopaedicsProcedureLogPayload', () => AddOrthopaedicsProcedureLogPayloadModel], ['HospitalsAggregateResult', () => HospitalsAggregateResultModel], ['Faculty', () => FacultyModel], ['OrthopaedicsProcedureLog', () => OrthopaedicsProcedureLogModel], ['Rotation', () => RotationModel], ['AddAnaesthesiaCaseLogPayload', () => AddAnaesthesiaCaseLogPayloadModel], ['FacultyAggregateResult', () => FacultyAggregateResultModel], ['RotationAggregateResult', () => RotationAggregateResultModel], ['DeleteAnaesthesiaCriticalCareCaseLogPayload', () => DeleteAnaesthesiaCriticalCareCaseLogPayloadModel], ['DeleteOrthodonticsPreClinicalPayload', () => DeleteOrthodonticsPreClinicalPayloadModel], ['DeleteAnaesthesiaCaseLogPayload', () => DeleteAnaesthesiaCaseLogPayloadModel], ['LogProfileAggregateResult', () => LogProfileAggregateResultModel], ['UpdateOrthopaedicsCaseLogPayload', () => UpdateOrthopaedicsCaseLogPayloadModel], ['DeleteOrthopaedicsCaseLogPayload', () => DeleteOrthopaedicsCaseLogPayloadModel], ['UpdateAnaesthesiaCaseLogPayload', () => UpdateAnaesthesiaCaseLogPayloadModel], ['AnaesthesiaChronicPainLog', () => AnaesthesiaChronicPainLogModel], ['AddFacultyPayload', () => AddFacultyPayloadModel], ['UpdateAnaesthesiaCriticalCareCaseLogPayload', () => UpdateAnaesthesiaCriticalCareCaseLogPayloadModel], ['DeleteAnaesthesiaChronicPainLogPayload', () => DeleteAnaesthesiaChronicPainLogPayloadModel], ['Hospitals', () => HospitalsModel], ['OrthodonticsClinicalCaseLogAggregateResult', () => OrthodonticsClinicalCaseLogAggregateResultModel], ['AddAnaesthesiaChronicPainLogPayload', () => AddAnaesthesiaChronicPainLogPayloadModel], ['UserAggregateResult', () => UserAggregateResultModel], ['DeleteLogProfilePayload', () => DeleteLogProfilePayloadModel], ['OrthodonticsPreClinical', () => OrthodonticsPreClinicalModel], ['MultiPolygon', () => MultiPolygonModel], ['UpdateOrthodonticsPreClinicalPayload', () => UpdateOrthodonticsPreClinicalPayloadModel], ['User', () => UserModel], ['AnaesthesiaCriticalCareCaseLogAggregateResult', () => AnaesthesiaCriticalCareCaseLogAggregateResultModel], ['Point', () => PointModel], ['PointList', () => PointListModel], ['UpdateOrthopaedicsProcedureLogPayload', () => UpdateOrthopaedicsProcedureLogPayloadModel], ['AnaesthesiaCaseLog', () => AnaesthesiaCaseLogModel], ['AddOrthodonticsPreClinicalPayload', () => AddOrthodonticsPreClinicalPayloadModel], ['DeleteOrthodonticsClinicalCaseLogPayload', () => DeleteOrthodonticsClinicalCaseLogPayloadModel], ['OrthodonticsClinicalCaseLog', () => OrthodonticsClinicalCaseLogModel], ['UpdateOrthodonticsClinicalCaseLogPayload', () => UpdateOrthodonticsClinicalCaseLogPayloadModel], ['DeleteRotationPayload', () => DeleteRotationPayloadModel], ['LogProfile', () => LogProfileModel], ['OrthopaedicsCaseLogAggregateResult', () => OrthopaedicsCaseLogAggregateResultModel], ['Polygon', () => PolygonModel], ['AddOrthodonticsClinicalCaseLogPayload', () => AddOrthodonticsClinicalCaseLogPayloadModel], ['DeleteUserPayload', () => DeleteUserPayloadModel], ['OrthopaedicsProcedureLogAggregateResult', () => OrthopaedicsProcedureLogAggregateResultModel], ['AnaesthesiaCaseLogAggregateResult', () => AnaesthesiaCaseLogAggregateResultModel], ['AddUserPayload', () => AddUserPayloadModel]], ['OrthopaedicsCaseLog', 'AnaesthesiaCriticalCareCaseLog', 'Faculty', 'OrthopaedicsProcedureLog', 'Rotation', 'AnaesthesiaChronicPainLog', 'Hospitals', 'OrthodonticsPreClinical', 'User', 'AnaesthesiaCaseLog', 'OrthodonticsClinicalCaseLog', 'LogProfile'], "js"))
  .props({
    orthopaedicsCaseLogs: types.optional(types.map(types.late((): any => OrthopaedicsCaseLogModel)), {}),
    anaesthesiaCriticalCareCaseLogs: types.optional(types.map(types.late((): any => AnaesthesiaCriticalCareCaseLogModel)), {}),
    faculties: types.optional(types.map(types.late((): any => FacultyModel)), {}),
    orthopaedicsProcedureLogs: types.optional(types.map(types.late((): any => OrthopaedicsProcedureLogModel)), {}),
    rotations: types.optional(types.map(types.late((): any => RotationModel)), {}),
    anaesthesiaChronicPainLogs: types.optional(types.map(types.late((): any => AnaesthesiaChronicPainLogModel)), {}),
    hospitals: types.optional(types.map(types.late((): any => HospitalsModel)), {}),
    orthodonticsPreClinicals: types.optional(types.map(types.late((): any => OrthodonticsPreClinicalModel)), {}),
    users: types.optional(types.map(types.late((): any => UserModel)), {}),
    anaesthesiaCaseLogs: types.optional(types.map(types.late((): any => AnaesthesiaCaseLogModel)), {}),
    orthodonticsClinicalCaseLogs: types.optional(types.map(types.late((): any => OrthodonticsClinicalCaseLogModel)), {}),
    logProfiles: types.optional(types.map(types.late((): any => LogProfileModel)), {})
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
    queryGetAnaesthesiaChronicPainLog(variables: { id: string }, resultSelector: string | ((qb: AnaesthesiaChronicPainLogModelSelector) => AnaesthesiaChronicPainLogModelSelector) = anaesthesiaChronicPainLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getAnaesthesiaChronicPainLog: AnaesthesiaChronicPainLogModelType }>(`query getAnaesthesiaChronicPainLog($id: ID!) { getAnaesthesiaChronicPainLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaChronicPainLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryAnaesthesiaChronicPainLog(variables: { filter?: (AnaesthesiaChronicPainLogFilter | null), order?: (AnaesthesiaChronicPainLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: AnaesthesiaChronicPainLogModelSelector) => AnaesthesiaChronicPainLogModelSelector) = anaesthesiaChronicPainLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryAnaesthesiaChronicPainLog: AnaesthesiaChronicPainLogModelType[] }>(`query queryAnaesthesiaChronicPainLog($filter: AnaesthesiaChronicPainLogFilter, $order: AnaesthesiaChronicPainLogOrder, $first: Int, $offset: Int) { queryAnaesthesiaChronicPainLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaChronicPainLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateAnaesthesiaChronicPainLog(variables: { filter?: (AnaesthesiaChronicPainLogFilter | null) }, resultSelector: string | ((qb: AnaesthesiaChronicPainLogAggregateResultModelSelector) => AnaesthesiaChronicPainLogAggregateResultModelSelector) = anaesthesiaChronicPainLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateAnaesthesiaChronicPainLog: AnaesthesiaChronicPainLogAggregateResultModelType }>(`query aggregateAnaesthesiaChronicPainLog($filter: AnaesthesiaChronicPainLogFilter) { aggregateAnaesthesiaChronicPainLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaChronicPainLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetAnaesthesiaCriticalCareCaseLog(variables: { id: string }, resultSelector: string | ((qb: AnaesthesiaCriticalCareCaseLogModelSelector) => AnaesthesiaCriticalCareCaseLogModelSelector) = anaesthesiaCriticalCareCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getAnaesthesiaCriticalCareCaseLog: AnaesthesiaCriticalCareCaseLogModelType }>(`query getAnaesthesiaCriticalCareCaseLog($id: ID!) { getAnaesthesiaCriticalCareCaseLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaCriticalCareCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryAnaesthesiaCriticalCareCaseLog(variables: { filter?: (AnaesthesiaCriticalCareCaseLogFilter | null), order?: (AnaesthesiaCriticalCareCaseLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: AnaesthesiaCriticalCareCaseLogModelSelector) => AnaesthesiaCriticalCareCaseLogModelSelector) = anaesthesiaCriticalCareCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryAnaesthesiaCriticalCareCaseLog: AnaesthesiaCriticalCareCaseLogModelType[] }>(`query queryAnaesthesiaCriticalCareCaseLog($filter: AnaesthesiaCriticalCareCaseLogFilter, $order: AnaesthesiaCriticalCareCaseLogOrder, $first: Int, $offset: Int) { queryAnaesthesiaCriticalCareCaseLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaCriticalCareCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateAnaesthesiaCriticalCareCaseLog(variables: { filter?: (AnaesthesiaCriticalCareCaseLogFilter | null) }, resultSelector: string | ((qb: AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector) => AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector) = anaesthesiaCriticalCareCaseLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateAnaesthesiaCriticalCareCaseLog: AnaesthesiaCriticalCareCaseLogAggregateResultModelType }>(`query aggregateAnaesthesiaCriticalCareCaseLog($filter: AnaesthesiaCriticalCareCaseLogFilter) { aggregateAnaesthesiaCriticalCareCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOrthodonticsClinicalCaseLog(variables: { id: string }, resultSelector: string | ((qb: OrthodonticsClinicalCaseLogModelSelector) => OrthodonticsClinicalCaseLogModelSelector) = orthodonticsClinicalCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOrthodonticsClinicalCaseLog: OrthodonticsClinicalCaseLogModelType }>(`query getOrthodonticsClinicalCaseLog($id: ID!) { getOrthodonticsClinicalCaseLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsClinicalCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryOrthodonticsClinicalCaseLog(variables: { filter?: (OrthodonticsClinicalCaseLogFilter | null), order?: (OrthodonticsClinicalCaseLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: OrthodonticsClinicalCaseLogModelSelector) => OrthodonticsClinicalCaseLogModelSelector) = orthodonticsClinicalCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryOrthodonticsClinicalCaseLog: OrthodonticsClinicalCaseLogModelType[] }>(`query queryOrthodonticsClinicalCaseLog($filter: OrthodonticsClinicalCaseLogFilter, $order: OrthodonticsClinicalCaseLogOrder, $first: Int, $offset: Int) { queryOrthodonticsClinicalCaseLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsClinicalCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateOrthodonticsClinicalCaseLog(variables: { filter?: (OrthodonticsClinicalCaseLogFilter | null) }, resultSelector: string | ((qb: OrthodonticsClinicalCaseLogAggregateResultModelSelector) => OrthodonticsClinicalCaseLogAggregateResultModelSelector) = orthodonticsClinicalCaseLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateOrthodonticsClinicalCaseLog: OrthodonticsClinicalCaseLogAggregateResultModelType }>(`query aggregateOrthodonticsClinicalCaseLog($filter: OrthodonticsClinicalCaseLogFilter) { aggregateOrthodonticsClinicalCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsClinicalCaseLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOrthodonticsPreClinical(variables: { id: string }, resultSelector: string | ((qb: OrthodonticsPreClinicalModelSelector) => OrthodonticsPreClinicalModelSelector) = orthodonticsPreClinicalModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOrthodonticsPreClinical: OrthodonticsPreClinicalModelType }>(`query getOrthodonticsPreClinical($id: ID!) { getOrthodonticsPreClinical(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsPreClinicalModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryOrthodonticsPreClinical(variables: { filter?: (OrthodonticsPreClinicalFilter | null), order?: (OrthodonticsPreClinicalOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: OrthodonticsPreClinicalModelSelector) => OrthodonticsPreClinicalModelSelector) = orthodonticsPreClinicalModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryOrthodonticsPreClinical: OrthodonticsPreClinicalModelType[] }>(`query queryOrthodonticsPreClinical($filter: OrthodonticsPreClinicalFilter, $order: OrthodonticsPreClinicalOrder, $first: Int, $offset: Int) { queryOrthodonticsPreClinical(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsPreClinicalModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateOrthodonticsPreClinical(variables: { filter?: (OrthodonticsPreClinicalFilter | null) }, resultSelector: string | ((qb: OrthodonticsPreClinicalAggregateResultModelSelector) => OrthodonticsPreClinicalAggregateResultModelSelector) = orthodonticsPreClinicalAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateOrthodonticsPreClinical: OrthodonticsPreClinicalAggregateResultModelType }>(`query aggregateOrthodonticsPreClinical($filter: OrthodonticsPreClinicalFilter) { aggregateOrthodonticsPreClinical(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthodonticsPreClinicalAggregateResultModelSelector()).toString() : resultSelector}
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
    queryGetOrthopaedicsProcedureLog(variables: { id: string }, resultSelector: string | ((qb: OrthopaedicsProcedureLogModelSelector) => OrthopaedicsProcedureLogModelSelector) = orthopaedicsProcedureLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOrthopaedicsProcedureLog: OrthopaedicsProcedureLogModelType }>(`query getOrthopaedicsProcedureLog($id: ID!) { getOrthopaedicsProcedureLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthopaedicsProcedureLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryOrthopaedicsProcedureLog(variables: { filter?: (OrthopaedicsProcedureLogFilter | null), order?: (OrthopaedicsProcedureLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: OrthopaedicsProcedureLogModelSelector) => OrthopaedicsProcedureLogModelSelector) = orthopaedicsProcedureLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryOrthopaedicsProcedureLog: OrthopaedicsProcedureLogModelType[] }>(`query queryOrthopaedicsProcedureLog($filter: OrthopaedicsProcedureLogFilter, $order: OrthopaedicsProcedureLogOrder, $first: Int, $offset: Int) { queryOrthopaedicsProcedureLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthopaedicsProcedureLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateOrthopaedicsProcedureLog(variables: { filter?: (OrthopaedicsProcedureLogFilter | null) }, resultSelector: string | ((qb: OrthopaedicsProcedureLogAggregateResultModelSelector) => OrthopaedicsProcedureLogAggregateResultModelSelector) = orthopaedicsProcedureLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateOrthopaedicsProcedureLog: OrthopaedicsProcedureLogAggregateResultModelType }>(`query aggregateOrthopaedicsProcedureLog($filter: OrthopaedicsProcedureLogFilter) { aggregateOrthopaedicsProcedureLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new OrthopaedicsProcedureLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetLogProfile(variables: { id: string }, resultSelector: string | ((qb: LogProfileModelSelector) => LogProfileModelSelector) = logProfileModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getLogProfile: LogProfileModelType }>(`query getLogProfile($id: ID!) { getLogProfile(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LogProfileModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryLogProfile(variables: { filter?: (LogProfileFilter | null), order?: (LogProfileOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: LogProfileModelSelector) => LogProfileModelSelector) = logProfileModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryLogProfile: LogProfileModelType[] }>(`query queryLogProfile($filter: LogProfileFilter, $order: LogProfileOrder, $first: Int, $offset: Int) { queryLogProfile(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new LogProfileModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateLogProfile(variables: { filter?: (LogProfileFilter | null) }, resultSelector: string | ((qb: LogProfileAggregateResultModelSelector) => LogProfileAggregateResultModelSelector) = logProfileAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateLogProfile: LogProfileAggregateResultModelType }>(`query aggregateLogProfile($filter: LogProfileFilter) { aggregateLogProfile(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new LogProfileAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetHospitals(variables: { id: string }, resultSelector: string | ((qb: HospitalsModelSelector) => HospitalsModelSelector) = hospitalsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getHospitals: HospitalsModelType }>(`query getHospitals($id: ID!) { getHospitals(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new HospitalsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryHospitals(variables: { filter?: (HospitalsFilter | null), order?: (HospitalsOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: HospitalsModelSelector) => HospitalsModelSelector) = hospitalsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryHospitals: HospitalsModelType[] }>(`query queryHospitals($filter: HospitalsFilter, $order: HospitalsOrder, $first: Int, $offset: Int) { queryHospitals(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new HospitalsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateHospitals(variables: { filter?: (HospitalsFilter | null) }, resultSelector: string | ((qb: HospitalsAggregateResultModelSelector) => HospitalsAggregateResultModelSelector) = hospitalsAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateHospitals: HospitalsAggregateResultModelType }>(`query aggregateHospitals($filter: HospitalsFilter) { aggregateHospitals(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new HospitalsAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetFaculty(variables: { id: string }, resultSelector: string | ((qb: FacultyModelSelector) => FacultyModelSelector) = facultyModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFaculty: FacultyModelType }>(`query getFaculty($id: ID!) { getFaculty(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new FacultyModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryFaculty(variables: { filter?: (FacultyFilter | null), order?: (FacultyOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: FacultyModelSelector) => FacultyModelSelector) = facultyModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryFaculty: FacultyModelType[] }>(`query queryFaculty($filter: FacultyFilter, $order: FacultyOrder, $first: Int, $offset: Int) { queryFaculty(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new FacultyModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateFaculty(variables: { filter?: (FacultyFilter | null) }, resultSelector: string | ((qb: FacultyAggregateResultModelSelector) => FacultyAggregateResultModelSelector) = facultyAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateFaculty: FacultyAggregateResultModelType }>(`query aggregateFaculty($filter: FacultyFilter) { aggregateFaculty(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new FacultyAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetRotation(variables: { id: string }, resultSelector: string | ((qb: RotationModelSelector) => RotationModelSelector) = rotationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getRotation: RotationModelType }>(`query getRotation($id: ID!) { getRotation(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new RotationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryRotation(variables: { filter?: (RotationFilter | null), order?: (RotationOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: RotationModelSelector) => RotationModelSelector) = rotationModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryRotation: RotationModelType[] }>(`query queryRotation($filter: RotationFilter, $order: RotationOrder, $first: Int, $offset: Int) { queryRotation(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new RotationModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateRotation(variables: { filter?: (RotationFilter | null) }, resultSelector: string | ((qb: RotationAggregateResultModelSelector) => RotationAggregateResultModelSelector) = rotationAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateRotation: RotationAggregateResultModelType }>(`query aggregateRotation($filter: RotationFilter) { aggregateRotation(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new RotationAggregateResultModelSelector()).toString() : resultSelector}
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
    mutateAddAnaesthesiaChronicPainLog(variables: { input: AddAnaesthesiaChronicPainLogInput[] }, resultSelector: string | ((qb: AddAnaesthesiaChronicPainLogPayloadModelSelector) => AddAnaesthesiaChronicPainLogPayloadModelSelector) = addAnaesthesiaChronicPainLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addAnaesthesiaChronicPainLog: AddAnaesthesiaChronicPainLogPayloadModelType }>(`mutation addAnaesthesiaChronicPainLog($input: [AddAnaesthesiaChronicPainLogInput!]!) { addAnaesthesiaChronicPainLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddAnaesthesiaChronicPainLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAnaesthesiaChronicPainLog(variables: { input: UpdateAnaesthesiaChronicPainLogInput }, resultSelector: string | ((qb: UpdateAnaesthesiaChronicPainLogPayloadModelSelector) => UpdateAnaesthesiaChronicPainLogPayloadModelSelector) = updateAnaesthesiaChronicPainLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAnaesthesiaChronicPainLog: UpdateAnaesthesiaChronicPainLogPayloadModelType }>(`mutation updateAnaesthesiaChronicPainLog($input: UpdateAnaesthesiaChronicPainLogInput!) { updateAnaesthesiaChronicPainLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnaesthesiaChronicPainLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteAnaesthesiaChronicPainLog(variables: { filter: AnaesthesiaChronicPainLogFilter }, resultSelector: string | ((qb: DeleteAnaesthesiaChronicPainLogPayloadModelSelector) => DeleteAnaesthesiaChronicPainLogPayloadModelSelector) = deleteAnaesthesiaChronicPainLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAnaesthesiaChronicPainLog: DeleteAnaesthesiaChronicPainLogPayloadModelType }>(`mutation deleteAnaesthesiaChronicPainLog($filter: AnaesthesiaChronicPainLogFilter!) { deleteAnaesthesiaChronicPainLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteAnaesthesiaChronicPainLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddAnaesthesiaCriticalCareCaseLog(variables: { input: AddAnaesthesiaCriticalCareCaseLogInput[] }, resultSelector: string | ((qb: AddAnaesthesiaCriticalCareCaseLogPayloadModelSelector) => AddAnaesthesiaCriticalCareCaseLogPayloadModelSelector) = addAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addAnaesthesiaCriticalCareCaseLog: AddAnaesthesiaCriticalCareCaseLogPayloadModelType }>(`mutation addAnaesthesiaCriticalCareCaseLog($input: [AddAnaesthesiaCriticalCareCaseLogInput!]!) { addAnaesthesiaCriticalCareCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddAnaesthesiaCriticalCareCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAnaesthesiaCriticalCareCaseLog(variables: { input: UpdateAnaesthesiaCriticalCareCaseLogInput }, resultSelector: string | ((qb: UpdateAnaesthesiaCriticalCareCaseLogPayloadModelSelector) => UpdateAnaesthesiaCriticalCareCaseLogPayloadModelSelector) = updateAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAnaesthesiaCriticalCareCaseLog: UpdateAnaesthesiaCriticalCareCaseLogPayloadModelType }>(`mutation updateAnaesthesiaCriticalCareCaseLog($input: UpdateAnaesthesiaCriticalCareCaseLogInput!) { updateAnaesthesiaCriticalCareCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAnaesthesiaCriticalCareCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteAnaesthesiaCriticalCareCaseLog(variables: { filter: AnaesthesiaCriticalCareCaseLogFilter }, resultSelector: string | ((qb: DeleteAnaesthesiaCriticalCareCaseLogPayloadModelSelector) => DeleteAnaesthesiaCriticalCareCaseLogPayloadModelSelector) = deleteAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAnaesthesiaCriticalCareCaseLog: DeleteAnaesthesiaCriticalCareCaseLogPayloadModelType }>(`mutation deleteAnaesthesiaCriticalCareCaseLog($filter: AnaesthesiaCriticalCareCaseLogFilter!) { deleteAnaesthesiaCriticalCareCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteAnaesthesiaCriticalCareCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddOrthodonticsClinicalCaseLog(variables: { input: AddOrthodonticsClinicalCaseLogInput[] }, resultSelector: string | ((qb: AddOrthodonticsClinicalCaseLogPayloadModelSelector) => AddOrthodonticsClinicalCaseLogPayloadModelSelector) = addOrthodonticsClinicalCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addOrthodonticsClinicalCaseLog: AddOrthodonticsClinicalCaseLogPayloadModelType }>(`mutation addOrthodonticsClinicalCaseLog($input: [AddOrthodonticsClinicalCaseLogInput!]!) { addOrthodonticsClinicalCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddOrthodonticsClinicalCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrthodonticsClinicalCaseLog(variables: { input: UpdateOrthodonticsClinicalCaseLogInput }, resultSelector: string | ((qb: UpdateOrthodonticsClinicalCaseLogPayloadModelSelector) => UpdateOrthodonticsClinicalCaseLogPayloadModelSelector) = updateOrthodonticsClinicalCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrthodonticsClinicalCaseLog: UpdateOrthodonticsClinicalCaseLogPayloadModelType }>(`mutation updateOrthodonticsClinicalCaseLog($input: UpdateOrthodonticsClinicalCaseLogInput!) { updateOrthodonticsClinicalCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateOrthodonticsClinicalCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOrthodonticsClinicalCaseLog(variables: { filter: OrthodonticsClinicalCaseLogFilter }, resultSelector: string | ((qb: DeleteOrthodonticsClinicalCaseLogPayloadModelSelector) => DeleteOrthodonticsClinicalCaseLogPayloadModelSelector) = deleteOrthodonticsClinicalCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrthodonticsClinicalCaseLog: DeleteOrthodonticsClinicalCaseLogPayloadModelType }>(`mutation deleteOrthodonticsClinicalCaseLog($filter: OrthodonticsClinicalCaseLogFilter!) { deleteOrthodonticsClinicalCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteOrthodonticsClinicalCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddOrthodonticsPreClinical(variables: { input: AddOrthodonticsPreClinicalInput[] }, resultSelector: string | ((qb: AddOrthodonticsPreClinicalPayloadModelSelector) => AddOrthodonticsPreClinicalPayloadModelSelector) = addOrthodonticsPreClinicalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addOrthodonticsPreClinical: AddOrthodonticsPreClinicalPayloadModelType }>(`mutation addOrthodonticsPreClinical($input: [AddOrthodonticsPreClinicalInput!]!) { addOrthodonticsPreClinical(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddOrthodonticsPreClinicalPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrthodonticsPreClinical(variables: { input: UpdateOrthodonticsPreClinicalInput }, resultSelector: string | ((qb: UpdateOrthodonticsPreClinicalPayloadModelSelector) => UpdateOrthodonticsPreClinicalPayloadModelSelector) = updateOrthodonticsPreClinicalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrthodonticsPreClinical: UpdateOrthodonticsPreClinicalPayloadModelType }>(`mutation updateOrthodonticsPreClinical($input: UpdateOrthodonticsPreClinicalInput!) { updateOrthodonticsPreClinical(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateOrthodonticsPreClinicalPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOrthodonticsPreClinical(variables: { filter: OrthodonticsPreClinicalFilter }, resultSelector: string | ((qb: DeleteOrthodonticsPreClinicalPayloadModelSelector) => DeleteOrthodonticsPreClinicalPayloadModelSelector) = deleteOrthodonticsPreClinicalPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrthodonticsPreClinical: DeleteOrthodonticsPreClinicalPayloadModelType }>(`mutation deleteOrthodonticsPreClinical($filter: OrthodonticsPreClinicalFilter!) { deleteOrthodonticsPreClinical(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteOrthodonticsPreClinicalPayloadModelSelector()).toString() : resultSelector}
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
    mutateAddOrthopaedicsProcedureLog(variables: { input: AddOrthopaedicsProcedureLogInput[] }, resultSelector: string | ((qb: AddOrthopaedicsProcedureLogPayloadModelSelector) => AddOrthopaedicsProcedureLogPayloadModelSelector) = addOrthopaedicsProcedureLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addOrthopaedicsProcedureLog: AddOrthopaedicsProcedureLogPayloadModelType }>(`mutation addOrthopaedicsProcedureLog($input: [AddOrthopaedicsProcedureLogInput!]!) { addOrthopaedicsProcedureLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddOrthopaedicsProcedureLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOrthopaedicsProcedureLog(variables: { input: UpdateOrthopaedicsProcedureLogInput }, resultSelector: string | ((qb: UpdateOrthopaedicsProcedureLogPayloadModelSelector) => UpdateOrthopaedicsProcedureLogPayloadModelSelector) = updateOrthopaedicsProcedureLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOrthopaedicsProcedureLog: UpdateOrthopaedicsProcedureLogPayloadModelType }>(`mutation updateOrthopaedicsProcedureLog($input: UpdateOrthopaedicsProcedureLogInput!) { updateOrthopaedicsProcedureLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateOrthopaedicsProcedureLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOrthopaedicsProcedureLog(variables: { filter: OrthopaedicsProcedureLogFilter }, resultSelector: string | ((qb: DeleteOrthopaedicsProcedureLogPayloadModelSelector) => DeleteOrthopaedicsProcedureLogPayloadModelSelector) = deleteOrthopaedicsProcedureLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOrthopaedicsProcedureLog: DeleteOrthopaedicsProcedureLogPayloadModelType }>(`mutation deleteOrthopaedicsProcedureLog($filter: OrthopaedicsProcedureLogFilter!) { deleteOrthopaedicsProcedureLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteOrthopaedicsProcedureLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddLogProfile(variables: { input: AddLogProfileInput[] }, resultSelector: string | ((qb: AddLogProfilePayloadModelSelector) => AddLogProfilePayloadModelSelector) = addLogProfilePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addLogProfile: AddLogProfilePayloadModelType }>(`mutation addLogProfile($input: [AddLogProfileInput!]!) { addLogProfile(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddLogProfilePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateLogProfile(variables: { input: UpdateLogProfileInput }, resultSelector: string | ((qb: UpdateLogProfilePayloadModelSelector) => UpdateLogProfilePayloadModelSelector) = updateLogProfilePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateLogProfile: UpdateLogProfilePayloadModelType }>(`mutation updateLogProfile($input: UpdateLogProfileInput!) { updateLogProfile(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateLogProfilePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteLogProfile(variables: { filter: LogProfileFilter }, resultSelector: string | ((qb: DeleteLogProfilePayloadModelSelector) => DeleteLogProfilePayloadModelSelector) = deleteLogProfilePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteLogProfile: DeleteLogProfilePayloadModelType }>(`mutation deleteLogProfile($filter: LogProfileFilter!) { deleteLogProfile(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteLogProfilePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddHospitals(variables: { input: AddHospitalsInput[] }, resultSelector: string | ((qb: AddHospitalsPayloadModelSelector) => AddHospitalsPayloadModelSelector) = addHospitalsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addHospitals: AddHospitalsPayloadModelType }>(`mutation addHospitals($input: [AddHospitalsInput!]!) { addHospitals(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddHospitalsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateHospitals(variables: { input: UpdateHospitalsInput }, resultSelector: string | ((qb: UpdateHospitalsPayloadModelSelector) => UpdateHospitalsPayloadModelSelector) = updateHospitalsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateHospitals: UpdateHospitalsPayloadModelType }>(`mutation updateHospitals($input: UpdateHospitalsInput!) { updateHospitals(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateHospitalsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteHospitals(variables: { filter: HospitalsFilter }, resultSelector: string | ((qb: DeleteHospitalsPayloadModelSelector) => DeleteHospitalsPayloadModelSelector) = deleteHospitalsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteHospitals: DeleteHospitalsPayloadModelType }>(`mutation deleteHospitals($filter: HospitalsFilter!) { deleteHospitals(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteHospitalsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddFaculty(variables: { input: AddFacultyInput[] }, resultSelector: string | ((qb: AddFacultyPayloadModelSelector) => AddFacultyPayloadModelSelector) = addFacultyPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addFaculty: AddFacultyPayloadModelType }>(`mutation addFaculty($input: [AddFacultyInput!]!) { addFaculty(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddFacultyPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFaculty(variables: { input: UpdateFacultyInput }, resultSelector: string | ((qb: UpdateFacultyPayloadModelSelector) => UpdateFacultyPayloadModelSelector) = updateFacultyPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFaculty: UpdateFacultyPayloadModelType }>(`mutation updateFaculty($input: UpdateFacultyInput!) { updateFaculty(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateFacultyPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteFaculty(variables: { filter: FacultyFilter }, resultSelector: string | ((qb: DeleteFacultyPayloadModelSelector) => DeleteFacultyPayloadModelSelector) = deleteFacultyPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteFaculty: DeleteFacultyPayloadModelType }>(`mutation deleteFaculty($filter: FacultyFilter!) { deleteFaculty(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteFacultyPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddRotation(variables: { input: AddRotationInput[] }, resultSelector: string | ((qb: AddRotationPayloadModelSelector) => AddRotationPayloadModelSelector) = addRotationPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addRotation: AddRotationPayloadModelType }>(`mutation addRotation($input: [AddRotationInput!]!) { addRotation(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddRotationPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateRotation(variables: { input: UpdateRotationInput }, resultSelector: string | ((qb: UpdateRotationPayloadModelSelector) => UpdateRotationPayloadModelSelector) = updateRotationPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateRotation: UpdateRotationPayloadModelType }>(`mutation updateRotation($input: UpdateRotationInput!) { updateRotation(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateRotationPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteRotation(variables: { filter: RotationFilter }, resultSelector: string | ((qb: DeleteRotationPayloadModelSelector) => DeleteRotationPayloadModelSelector) = deleteRotationPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteRotation: DeleteRotationPayloadModelType }>(`mutation deleteRotation($filter: RotationFilter!) { deleteRotation(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteRotationPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
