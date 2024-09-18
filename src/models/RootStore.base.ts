/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { CustomLogAggregateResultModel, CustomLogAggregateResultModelType } from "./CustomLogAggregateResultModel"
import { customLogAggregateResultModelPrimitives, CustomLogAggregateResultModelSelector } from "./CustomLogAggregateResultModel.base"
import { PublicationLogAggregateResultModel, PublicationLogAggregateResultModelType } from "./PublicationLogAggregateResultModel"
import { publicationLogAggregateResultModelPrimitives, PublicationLogAggregateResultModelSelector } from "./PublicationLogAggregateResultModel.base"
import { DeleteOrthopaedicsProcedureLogPayloadModel, DeleteOrthopaedicsProcedureLogPayloadModelType } from "./DeleteOrthopaedicsProcedureLogPayloadModel"
import { deleteOrthopaedicsProcedureLogPayloadModelPrimitives, DeleteOrthopaedicsProcedureLogPayloadModelSelector } from "./DeleteOrthopaedicsProcedureLogPayloadModel.base"
import { AddOralRadiologyPayloadModel, AddOralRadiologyPayloadModelType } from "./AddOralRadiologyPayloadModel"
import { addOralRadiologyPayloadModelPrimitives, AddOralRadiologyPayloadModelSelector } from "./AddOralRadiologyPayloadModel.base"
import { AddRotationPayloadModel, AddRotationPayloadModelType } from "./AddRotationPayloadModel"
import { addRotationPayloadModelPrimitives, AddRotationPayloadModelSelector } from "./AddRotationPayloadModel.base"
import { DeleteRotationPayloadModel, DeleteRotationPayloadModelType } from "./DeleteRotationPayloadModel"
import { deleteRotationPayloadModelPrimitives, DeleteRotationPayloadModelSelector } from "./DeleteRotationPayloadModel.base"
import { OrthodonticsPreClinicalModel, OrthodonticsPreClinicalModelType } from "./OrthodonticsPreClinicalModel"
import { orthodonticsPreClinicalModelPrimitives, OrthodonticsPreClinicalModelSelector } from "./OrthodonticsPreClinicalModel.base"
import { DeleteOrthodonticsClinicalCaseLogPayloadModel, DeleteOrthodonticsClinicalCaseLogPayloadModelType } from "./DeleteOrthodonticsClinicalCaseLogPayloadModel"
import { deleteOrthodonticsClinicalCaseLogPayloadModelPrimitives, DeleteOrthodonticsClinicalCaseLogPayloadModelSelector } from "./DeleteOrthodonticsClinicalCaseLogPayloadModel.base"
import { AddThesisCasePayloadModel, AddThesisCasePayloadModelType } from "./AddThesisCasePayloadModel"
import { addThesisCasePayloadModelPrimitives, AddThesisCasePayloadModelSelector } from "./AddThesisCasePayloadModel.base"
import { DeleteOrthopaedicsCaseLogPayloadModel, DeleteOrthopaedicsCaseLogPayloadModelType } from "./DeleteOrthopaedicsCaseLogPayloadModel"
import { deleteOrthopaedicsCaseLogPayloadModelPrimitives, DeleteOrthopaedicsCaseLogPayloadModelSelector } from "./DeleteOrthopaedicsCaseLogPayloadModel.base"
import { ThesisCaseAggregateResultModel, ThesisCaseAggregateResultModelType } from "./ThesisCaseAggregateResultModel"
import { thesisCaseAggregateResultModelPrimitives, ThesisCaseAggregateResultModelSelector } from "./ThesisCaseAggregateResultModel.base"
import { OrthopaedicsCaseLogModel, OrthopaedicsCaseLogModelType } from "./OrthopaedicsCaseLogModel"
import { orthopaedicsCaseLogModelPrimitives, OrthopaedicsCaseLogModelSelector } from "./OrthopaedicsCaseLogModel.base"
import { AddOrthodonticsClinicalCaseLogPayloadModel, AddOrthodonticsClinicalCaseLogPayloadModelType } from "./AddOrthodonticsClinicalCaseLogPayloadModel"
import { addOrthodonticsClinicalCaseLogPayloadModelPrimitives, AddOrthodonticsClinicalCaseLogPayloadModelSelector } from "./AddOrthodonticsClinicalCaseLogPayloadModel.base"
import { DeleteAnaesthesiaCaseLogPayloadModel, DeleteAnaesthesiaCaseLogPayloadModelType } from "./DeleteAnaesthesiaCaseLogPayloadModel"
import { deleteAnaesthesiaCaseLogPayloadModelPrimitives, DeleteAnaesthesiaCaseLogPayloadModelSelector } from "./DeleteAnaesthesiaCaseLogPayloadModel.base"
import { UserAggregateResultModel, UserAggregateResultModelType } from "./UserAggregateResultModel"
import { userAggregateResultModelPrimitives, UserAggregateResultModelSelector } from "./UserAggregateResultModel.base"
import { HospitalsModel, HospitalsModelType } from "./HospitalsModel"
import { hospitalsModelPrimitives, HospitalsModelSelector } from "./HospitalsModel.base"
import { UpdateUserFeedbackPayloadModel, UpdateUserFeedbackPayloadModelType } from "./UpdateUserFeedbackPayloadModel"
import { updateUserFeedbackPayloadModelPrimitives, UpdateUserFeedbackPayloadModelSelector } from "./UpdateUserFeedbackPayloadModel.base"
import { AcademicLogAggregateResultModel, AcademicLogAggregateResultModelType } from "./AcademicLogAggregateResultModel"
import { academicLogAggregateResultModelPrimitives, AcademicLogAggregateResultModelSelector } from "./AcademicLogAggregateResultModel.base"
import { DeleteThesisCasePayloadModel, DeleteThesisCasePayloadModelType } from "./DeleteThesisCasePayloadModel"
import { deleteThesisCasePayloadModelPrimitives, DeleteThesisCasePayloadModelSelector } from "./DeleteThesisCasePayloadModel.base"
import { PublicationLogModel, PublicationLogModelType } from "./PublicationLogModel"
import { publicationLogModelPrimitives, PublicationLogModelSelector } from "./PublicationLogModel.base"
import { DeleteAdminWorkLogPayloadModel, DeleteAdminWorkLogPayloadModelType } from "./DeleteAdminWorkLogPayloadModel"
import { deleteAdminWorkLogPayloadModelPrimitives, DeleteAdminWorkLogPayloadModelSelector } from "./DeleteAdminWorkLogPayloadModel.base"
import { OrthodonticsClinicalCaseLogModel, OrthodonticsClinicalCaseLogModelType } from "./OrthodonticsClinicalCaseLogModel"
import { orthodonticsClinicalCaseLogModelPrimitives, OrthodonticsClinicalCaseLogModelSelector } from "./OrthodonticsClinicalCaseLogModel.base"
import { UpdateAdminWorkLogPayloadModel, UpdateAdminWorkLogPayloadModelType } from "./UpdateAdminWorkLogPayloadModel"
import { updateAdminWorkLogPayloadModelPrimitives, UpdateAdminWorkLogPayloadModelSelector } from "./UpdateAdminWorkLogPayloadModel.base"
import { UpdateOralMedicineAndRadiologyCaseLogPayloadModel, UpdateOralMedicineAndRadiologyCaseLogPayloadModelType } from "./UpdateOralMedicineAndRadiologyCaseLogPayloadModel"
import { updateOralMedicineAndRadiologyCaseLogPayloadModelPrimitives, UpdateOralMedicineAndRadiologyCaseLogPayloadModelSelector } from "./UpdateOralMedicineAndRadiologyCaseLogPayloadModel.base"
import { AnaesthesiaCaseLogModel, AnaesthesiaCaseLogModelType } from "./AnaesthesiaCaseLogModel"
import { anaesthesiaCaseLogModelPrimitives, AnaesthesiaCaseLogModelSelector } from "./AnaesthesiaCaseLogModel.base"
import { OralRadiologyAggregateResultModel, OralRadiologyAggregateResultModelType } from "./OralRadiologyAggregateResultModel"
import { oralRadiologyAggregateResultModelPrimitives, OralRadiologyAggregateResultModelSelector } from "./OralRadiologyAggregateResultModel.base"
import { UpdateCustomLogPayloadModel, UpdateCustomLogPayloadModelType } from "./UpdateCustomLogPayloadModel"
import { updateCustomLogPayloadModelPrimitives, UpdateCustomLogPayloadModelSelector } from "./UpdateCustomLogPayloadModel.base"
import { FacultyAggregateResultModel, FacultyAggregateResultModelType } from "./FacultyAggregateResultModel"
import { facultyAggregateResultModelPrimitives, FacultyAggregateResultModelSelector } from "./FacultyAggregateResultModel.base"
import { AddFacultyPayloadModel, AddFacultyPayloadModelType } from "./AddFacultyPayloadModel"
import { addFacultyPayloadModelPrimitives, AddFacultyPayloadModelSelector } from "./AddFacultyPayloadModel.base"
import { UpdateAnaesthesiaCaseLogPayloadModel, UpdateAnaesthesiaCaseLogPayloadModelType } from "./UpdateAnaesthesiaCaseLogPayloadModel"
import { updateAnaesthesiaCaseLogPayloadModelPrimitives, UpdateAnaesthesiaCaseLogPayloadModelSelector } from "./UpdateAnaesthesiaCaseLogPayloadModel.base"
import { DeleteFacultyPayloadModel, DeleteFacultyPayloadModelType } from "./DeleteFacultyPayloadModel"
import { deleteFacultyPayloadModelPrimitives, DeleteFacultyPayloadModelSelector } from "./DeleteFacultyPayloadModel.base"
import { DeleteUserPayloadModel, DeleteUserPayloadModelType } from "./DeleteUserPayloadModel"
import { deleteUserPayloadModelPrimitives, DeleteUserPayloadModelSelector } from "./DeleteUserPayloadModel.base"
import { DeleteFieldsPayloadModel, DeleteFieldsPayloadModelType } from "./DeleteFieldsPayloadModel"
import { deleteFieldsPayloadModelPrimitives, DeleteFieldsPayloadModelSelector } from "./DeleteFieldsPayloadModel.base"
import { AddFormLabelsPayloadModel, AddFormLabelsPayloadModelType } from "./AddFormLabelsPayloadModel"
import { addFormLabelsPayloadModelPrimitives, AddFormLabelsPayloadModelSelector } from "./AddFormLabelsPayloadModel.base"
import { FieldsAggregateResultModel, FieldsAggregateResultModelType } from "./FieldsAggregateResultModel"
import { fieldsAggregateResultModelPrimitives, FieldsAggregateResultModelSelector } from "./FieldsAggregateResultModel.base"
import { AddCustomLogPayloadModel, AddCustomLogPayloadModelType } from "./AddCustomLogPayloadModel"
import { addCustomLogPayloadModelPrimitives, AddCustomLogPayloadModelSelector } from "./AddCustomLogPayloadModel.base"
import { LogProfileAggregateResultModel, LogProfileAggregateResultModelType } from "./LogProfileAggregateResultModel"
import { logProfileAggregateResultModelPrimitives, LogProfileAggregateResultModelSelector } from "./LogProfileAggregateResultModel.base"
import { UpdateFieldsPayloadModel, UpdateFieldsPayloadModelType } from "./UpdateFieldsPayloadModel"
import { updateFieldsPayloadModelPrimitives, UpdateFieldsPayloadModelSelector } from "./UpdateFieldsPayloadModel.base"
import { DeleteHospitalsPayloadModel, DeleteHospitalsPayloadModelType } from "./DeleteHospitalsPayloadModel"
import { deleteHospitalsPayloadModelPrimitives, DeleteHospitalsPayloadModelSelector } from "./DeleteHospitalsPayloadModel.base"
import { DeleteOralRadiologyPayloadModel, DeleteOralRadiologyPayloadModelType } from "./DeleteOralRadiologyPayloadModel"
import { deleteOralRadiologyPayloadModelPrimitives, DeleteOralRadiologyPayloadModelSelector } from "./DeleteOralRadiologyPayloadModel.base"
import { DeleteOrthodonticsPreClinicalPayloadModel, DeleteOrthodonticsPreClinicalPayloadModelType } from "./DeleteOrthodonticsPreClinicalPayloadModel"
import { deleteOrthodonticsPreClinicalPayloadModelPrimitives, DeleteOrthodonticsPreClinicalPayloadModelSelector } from "./DeleteOrthodonticsPreClinicalPayloadModel.base"
import { AddAnaesthesiaCaseLogPayloadModel, AddAnaesthesiaCaseLogPayloadModelType } from "./AddAnaesthesiaCaseLogPayloadModel"
import { addAnaesthesiaCaseLogPayloadModelPrimitives, AddAnaesthesiaCaseLogPayloadModelSelector } from "./AddAnaesthesiaCaseLogPayloadModel.base"
import { AddFieldsPayloadModel, AddFieldsPayloadModelType } from "./AddFieldsPayloadModel"
import { addFieldsPayloadModelPrimitives, AddFieldsPayloadModelSelector } from "./AddFieldsPayloadModel.base"
import { UpdateOrthopaedicsCaseLogPayloadModel, UpdateOrthopaedicsCaseLogPayloadModelType } from "./UpdateOrthopaedicsCaseLogPayloadModel"
import { updateOrthopaedicsCaseLogPayloadModelPrimitives, UpdateOrthopaedicsCaseLogPayloadModelSelector } from "./UpdateOrthopaedicsCaseLogPayloadModel.base"
import { ThesisLogModel, ThesisLogModelType } from "./ThesisLogModel"
import { thesisLogModelPrimitives, ThesisLogModelSelector } from "./ThesisLogModel.base"
import { OrthodonticsPreClinicalAggregateResultModel, OrthodonticsPreClinicalAggregateResultModelType } from "./OrthodonticsPreClinicalAggregateResultModel"
import { orthodonticsPreClinicalAggregateResultModelPrimitives, OrthodonticsPreClinicalAggregateResultModelSelector } from "./OrthodonticsPreClinicalAggregateResultModel.base"
import { DeleteAnaesthesiaChronicPainLogPayloadModel, DeleteAnaesthesiaChronicPainLogPayloadModelType } from "./DeleteAnaesthesiaChronicPainLogPayloadModel"
import { deleteAnaesthesiaChronicPainLogPayloadModelPrimitives, DeleteAnaesthesiaChronicPainLogPayloadModelSelector } from "./DeleteAnaesthesiaChronicPainLogPayloadModel.base"
import { OrthodonticsClinicalCaseLogAggregateResultModel, OrthodonticsClinicalCaseLogAggregateResultModelType } from "./OrthodonticsClinicalCaseLogAggregateResultModel"
import { orthodonticsClinicalCaseLogAggregateResultModelPrimitives, OrthodonticsClinicalCaseLogAggregateResultModelSelector } from "./OrthodonticsClinicalCaseLogAggregateResultModel.base"
import { CustomCaseModel, CustomCaseModelType } from "./CustomCaseModel"
import { customCaseModelPrimitives, CustomCaseModelSelector } from "./CustomCaseModel.base"
import { AcademicLogModel, AcademicLogModelType } from "./AcademicLogModel"
import { academicLogModelPrimitives, AcademicLogModelSelector } from "./AcademicLogModel.base"
import { AddOrthodonticsPreClinicalPayloadModel, AddOrthodonticsPreClinicalPayloadModelType } from "./AddOrthodonticsPreClinicalPayloadModel"
import { addOrthodonticsPreClinicalPayloadModelPrimitives, AddOrthodonticsPreClinicalPayloadModelSelector } from "./AddOrthodonticsPreClinicalPayloadModel.base"
import { AddOrthopaedicsProcedureLogPayloadModel, AddOrthopaedicsProcedureLogPayloadModelType } from "./AddOrthopaedicsProcedureLogPayloadModel"
import { addOrthopaedicsProcedureLogPayloadModelPrimitives, AddOrthopaedicsProcedureLogPayloadModelSelector } from "./AddOrthopaedicsProcedureLogPayloadModel.base"
import { AnaesthesiaCriticalCareCaseLogAggregateResultModel, AnaesthesiaCriticalCareCaseLogAggregateResultModelType } from "./AnaesthesiaCriticalCareCaseLogAggregateResultModel"
import { anaesthesiaCriticalCareCaseLogAggregateResultModelPrimitives, AnaesthesiaCriticalCareCaseLogAggregateResultModelSelector } from "./AnaesthesiaCriticalCareCaseLogAggregateResultModel.base"
import { AnaesthesiaChronicPainLogModel, AnaesthesiaChronicPainLogModelType } from "./AnaesthesiaChronicPainLogModel"
import { anaesthesiaChronicPainLogModelPrimitives, AnaesthesiaChronicPainLogModelSelector } from "./AnaesthesiaChronicPainLogModel.base"
import { PointModel, PointModelType } from "./PointModel"
import { pointModelPrimitives, PointModelSelector } from "./PointModel.base"
import { AddPublicationLogPayloadModel, AddPublicationLogPayloadModelType } from "./AddPublicationLogPayloadModel"
import { addPublicationLogPayloadModelPrimitives, AddPublicationLogPayloadModelSelector } from "./AddPublicationLogPayloadModel.base"
import { AdminWorkLogModel, AdminWorkLogModelType } from "./AdminWorkLogModel"
import { adminWorkLogModelPrimitives, AdminWorkLogModelSelector } from "./AdminWorkLogModel.base"
import { PointListModel, PointListModelType } from "./PointListModel"
import { pointListModelPrimitives, PointListModelSelector } from "./PointListModel.base"
import { DeleteThesisLogPayloadModel, DeleteThesisLogPayloadModelType } from "./DeleteThesisLogPayloadModel"
import { deleteThesisLogPayloadModelPrimitives, DeleteThesisLogPayloadModelSelector } from "./DeleteThesisLogPayloadModel.base"
import { AnaesthesiaCriticalCareCaseLogModel, AnaesthesiaCriticalCareCaseLogModelType } from "./AnaesthesiaCriticalCareCaseLogModel"
import { anaesthesiaCriticalCareCaseLogModelPrimitives, AnaesthesiaCriticalCareCaseLogModelSelector } from "./AnaesthesiaCriticalCareCaseLogModel.base"
import { PolygonModel, PolygonModelType } from "./PolygonModel"
import { polygonModelPrimitives, PolygonModelSelector } from "./PolygonModel.base"
import { UpdateAnaesthesiaChronicPainLogPayloadModel, UpdateAnaesthesiaChronicPainLogPayloadModelType } from "./UpdateAnaesthesiaChronicPainLogPayloadModel"
import { updateAnaesthesiaChronicPainLogPayloadModelPrimitives, UpdateAnaesthesiaChronicPainLogPayloadModelSelector } from "./UpdateAnaesthesiaChronicPainLogPayloadModel.base"
import { UpdateOrthodonticsClinicalCaseLogPayloadModel, UpdateOrthodonticsClinicalCaseLogPayloadModelType } from "./UpdateOrthodonticsClinicalCaseLogPayloadModel"
import { updateOrthodonticsClinicalCaseLogPayloadModelPrimitives, UpdateOrthodonticsClinicalCaseLogPayloadModelSelector } from "./UpdateOrthodonticsClinicalCaseLogPayloadModel.base"
import { UserFeedbackAggregateResultModel, UserFeedbackAggregateResultModelType } from "./UserFeedbackAggregateResultModel"
import { userFeedbackAggregateResultModelPrimitives, UserFeedbackAggregateResultModelSelector } from "./UserFeedbackAggregateResultModel.base"
import { FacultyModel, FacultyModelType } from "./FacultyModel"
import { facultyModelPrimitives, FacultyModelSelector } from "./FacultyModel.base"
import { CustomCaseAggregateResultModel, CustomCaseAggregateResultModelType } from "./CustomCaseAggregateResultModel"
import { customCaseAggregateResultModelPrimitives, CustomCaseAggregateResultModelSelector } from "./CustomCaseAggregateResultModel.base"
import { UpdateCustomCasePayloadModel, UpdateCustomCasePayloadModelType } from "./UpdateCustomCasePayloadModel"
import { updateCustomCasePayloadModelPrimitives, UpdateCustomCasePayloadModelSelector } from "./UpdateCustomCasePayloadModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { UserFeedbackModel, UserFeedbackModelType } from "./UserFeedbackModel"
import { userFeedbackModelPrimitives, UserFeedbackModelSelector } from "./UserFeedbackModel.base"
import { DeleteAnaesthesiaCriticalCareCaseLogPayloadModel, DeleteAnaesthesiaCriticalCareCaseLogPayloadModelType } from "./DeleteAnaesthesiaCriticalCareCaseLogPayloadModel"
import { deleteAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, DeleteAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./DeleteAnaesthesiaCriticalCareCaseLogPayloadModel.base"
import { DeleteFormLabelsPayloadModel, DeleteFormLabelsPayloadModelType } from "./DeleteFormLabelsPayloadModel"
import { deleteFormLabelsPayloadModelPrimitives, DeleteFormLabelsPayloadModelSelector } from "./DeleteFormLabelsPayloadModel.base"
import { DeleteOralMedicineAndRadiologyCaseLogPayloadModel, DeleteOralMedicineAndRadiologyCaseLogPayloadModelType } from "./DeleteOralMedicineAndRadiologyCaseLogPayloadModel"
import { deleteOralMedicineAndRadiologyCaseLogPayloadModelPrimitives, DeleteOralMedicineAndRadiologyCaseLogPayloadModelSelector } from "./DeleteOralMedicineAndRadiologyCaseLogPayloadModel.base"
import { UpdateLogProfilePayloadModel, UpdateLogProfilePayloadModelType } from "./UpdateLogProfilePayloadModel"
import { updateLogProfilePayloadModelPrimitives, UpdateLogProfilePayloadModelSelector } from "./UpdateLogProfilePayloadModel.base"
import { UpdateFacultyPayloadModel, UpdateFacultyPayloadModelType } from "./UpdateFacultyPayloadModel"
import { updateFacultyPayloadModelPrimitives, UpdateFacultyPayloadModelSelector } from "./UpdateFacultyPayloadModel.base"
import { OrthopaedicsProcedureLogModel, OrthopaedicsProcedureLogModelType } from "./OrthopaedicsProcedureLogModel"
import { orthopaedicsProcedureLogModelPrimitives, OrthopaedicsProcedureLogModelSelector } from "./OrthopaedicsProcedureLogModel.base"
import { LogProfileModel, LogProfileModelType } from "./LogProfileModel"
import { logProfileModelPrimitives, LogProfileModelSelector } from "./LogProfileModel.base"
import { AddAcademicLogPayloadModel, AddAcademicLogPayloadModelType } from "./AddAcademicLogPayloadModel"
import { addAcademicLogPayloadModelPrimitives, AddAcademicLogPayloadModelSelector } from "./AddAcademicLogPayloadModel.base"
import { AddUserFeedbackPayloadModel, AddUserFeedbackPayloadModelType } from "./AddUserFeedbackPayloadModel"
import { addUserFeedbackPayloadModelPrimitives, AddUserFeedbackPayloadModelSelector } from "./AddUserFeedbackPayloadModel.base"
import { OralMedicineAndRadiologyCaseLogAggregateResultModel, OralMedicineAndRadiologyCaseLogAggregateResultModelType } from "./OralMedicineAndRadiologyCaseLogAggregateResultModel"
import { oralMedicineAndRadiologyCaseLogAggregateResultModelPrimitives, OralMedicineAndRadiologyCaseLogAggregateResultModelSelector } from "./OralMedicineAndRadiologyCaseLogAggregateResultModel.base"
import { UpdateAnaesthesiaCriticalCareCaseLogPayloadModel, UpdateAnaesthesiaCriticalCareCaseLogPayloadModelType } from "./UpdateAnaesthesiaCriticalCareCaseLogPayloadModel"
import { updateAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, UpdateAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./UpdateAnaesthesiaCriticalCareCaseLogPayloadModel.base"
import { DeleteLogProfilePayloadModel, DeleteLogProfilePayloadModelType } from "./DeleteLogProfilePayloadModel"
import { deleteLogProfilePayloadModelPrimitives, DeleteLogProfilePayloadModelSelector } from "./DeleteLogProfilePayloadModel.base"
import { AdminWorkLogAggregateResultModel, AdminWorkLogAggregateResultModelType } from "./AdminWorkLogAggregateResultModel"
import { adminWorkLogAggregateResultModelPrimitives, AdminWorkLogAggregateResultModelSelector } from "./AdminWorkLogAggregateResultModel.base"
import { OrthopaedicsProcedureLogAggregateResultModel, OrthopaedicsProcedureLogAggregateResultModelType } from "./OrthopaedicsProcedureLogAggregateResultModel"
import { orthopaedicsProcedureLogAggregateResultModelPrimitives, OrthopaedicsProcedureLogAggregateResultModelSelector } from "./OrthopaedicsProcedureLogAggregateResultModel.base"
import { MultiPolygonModel, MultiPolygonModelType } from "./MultiPolygonModel"
import { multiPolygonModelPrimitives, MultiPolygonModelSelector } from "./MultiPolygonModel.base"
import { AddAnaesthesiaCriticalCareCaseLogPayloadModel, AddAnaesthesiaCriticalCareCaseLogPayloadModelType } from "./AddAnaesthesiaCriticalCareCaseLogPayloadModel"
import { addAnaesthesiaCriticalCareCaseLogPayloadModelPrimitives, AddAnaesthesiaCriticalCareCaseLogPayloadModelSelector } from "./AddAnaesthesiaCriticalCareCaseLogPayloadModel.base"
import { AddLogProfilePayloadModel, AddLogProfilePayloadModelType } from "./AddLogProfilePayloadModel"
import { addLogProfilePayloadModelPrimitives, AddLogProfilePayloadModelSelector } from "./AddLogProfilePayloadModel.base"
import { AddUserPayloadModel, AddUserPayloadModelType } from "./AddUserPayloadModel"
import { addUserPayloadModelPrimitives, AddUserPayloadModelSelector } from "./AddUserPayloadModel.base"
import { UpdateRotationPayloadModel, UpdateRotationPayloadModelType } from "./UpdateRotationPayloadModel"
import { updateRotationPayloadModelPrimitives, UpdateRotationPayloadModelSelector } from "./UpdateRotationPayloadModel.base"
import { UpdateUserPayloadModel, UpdateUserPayloadModelType } from "./UpdateUserPayloadModel"
import { updateUserPayloadModelPrimitives, UpdateUserPayloadModelSelector } from "./UpdateUserPayloadModel.base"
import { UpdatePublicationLogPayloadModel, UpdatePublicationLogPayloadModelType } from "./UpdatePublicationLogPayloadModel"
import { updatePublicationLogPayloadModelPrimitives, UpdatePublicationLogPayloadModelSelector } from "./UpdatePublicationLogPayloadModel.base"
import { UpdateThesisCasePayloadModel, UpdateThesisCasePayloadModelType } from "./UpdateThesisCasePayloadModel"
import { updateThesisCasePayloadModelPrimitives, UpdateThesisCasePayloadModelSelector } from "./UpdateThesisCasePayloadModel.base"
import { AddAdminWorkLogPayloadModel, AddAdminWorkLogPayloadModelType } from "./AddAdminWorkLogPayloadModel"
import { addAdminWorkLogPayloadModelPrimitives, AddAdminWorkLogPayloadModelSelector } from "./AddAdminWorkLogPayloadModel.base"
import { AnaesthesiaCaseLogAggregateResultModel, AnaesthesiaCaseLogAggregateResultModelType } from "./AnaesthesiaCaseLogAggregateResultModel"
import { anaesthesiaCaseLogAggregateResultModelPrimitives, AnaesthesiaCaseLogAggregateResultModelSelector } from "./AnaesthesiaCaseLogAggregateResultModel.base"
import { DeleteCustomCasePayloadModel, DeleteCustomCasePayloadModelType } from "./DeleteCustomCasePayloadModel"
import { deleteCustomCasePayloadModelPrimitives, DeleteCustomCasePayloadModelSelector } from "./DeleteCustomCasePayloadModel.base"
import { UpdateHospitalsPayloadModel, UpdateHospitalsPayloadModelType } from "./UpdateHospitalsPayloadModel"
import { updateHospitalsPayloadModelPrimitives, UpdateHospitalsPayloadModelSelector } from "./UpdateHospitalsPayloadModel.base"
import { UpdateOrthodonticsPreClinicalPayloadModel, UpdateOrthodonticsPreClinicalPayloadModelType } from "./UpdateOrthodonticsPreClinicalPayloadModel"
import { updateOrthodonticsPreClinicalPayloadModelPrimitives, UpdateOrthodonticsPreClinicalPayloadModelSelector } from "./UpdateOrthodonticsPreClinicalPayloadModel.base"
import { UpdateOrthopaedicsProcedureLogPayloadModel, UpdateOrthopaedicsProcedureLogPayloadModelType } from "./UpdateOrthopaedicsProcedureLogPayloadModel"
import { updateOrthopaedicsProcedureLogPayloadModelPrimitives, UpdateOrthopaedicsProcedureLogPayloadModelSelector } from "./UpdateOrthopaedicsProcedureLogPayloadModel.base"
import { ThesisCaseModel, ThesisCaseModelType } from "./ThesisCaseModel"
import { thesisCaseModelPrimitives, ThesisCaseModelSelector } from "./ThesisCaseModel.base"
import { FormLabelsModel, FormLabelsModelType } from "./FormLabelsModel"
import { formLabelsModelPrimitives, FormLabelsModelSelector } from "./FormLabelsModel.base"
import { AddOrthopaedicsCaseLogPayloadModel, AddOrthopaedicsCaseLogPayloadModelType } from "./AddOrthopaedicsCaseLogPayloadModel"
import { addOrthopaedicsCaseLogPayloadModelPrimitives, AddOrthopaedicsCaseLogPayloadModelSelector } from "./AddOrthopaedicsCaseLogPayloadModel.base"
import { AnaesthesiaChronicPainLogAggregateResultModel, AnaesthesiaChronicPainLogAggregateResultModelType } from "./AnaesthesiaChronicPainLogAggregateResultModel"
import { anaesthesiaChronicPainLogAggregateResultModelPrimitives, AnaesthesiaChronicPainLogAggregateResultModelSelector } from "./AnaesthesiaChronicPainLogAggregateResultModel.base"
import { ThesisLogAggregateResultModel, ThesisLogAggregateResultModelType } from "./ThesisLogAggregateResultModel"
import { thesisLogAggregateResultModelPrimitives, ThesisLogAggregateResultModelSelector } from "./ThesisLogAggregateResultModel.base"
import { RotationModel, RotationModelType } from "./RotationModel"
import { rotationModelPrimitives, RotationModelSelector } from "./RotationModel.base"
import { OrthopaedicsCaseLogAggregateResultModel, OrthopaedicsCaseLogAggregateResultModelType } from "./OrthopaedicsCaseLogAggregateResultModel"
import { orthopaedicsCaseLogAggregateResultModelPrimitives, OrthopaedicsCaseLogAggregateResultModelSelector } from "./OrthopaedicsCaseLogAggregateResultModel.base"
import { UpdateThesisLogPayloadModel, UpdateThesisLogPayloadModelType } from "./UpdateThesisLogPayloadModel"
import { updateThesisLogPayloadModelPrimitives, UpdateThesisLogPayloadModelSelector } from "./UpdateThesisLogPayloadModel.base"
import { DeleteAcademicLogPayloadModel, DeleteAcademicLogPayloadModelType } from "./DeleteAcademicLogPayloadModel"
import { deleteAcademicLogPayloadModelPrimitives, DeleteAcademicLogPayloadModelSelector } from "./DeleteAcademicLogPayloadModel.base"
import { FormLabelsAggregateResultModel, FormLabelsAggregateResultModelType } from "./FormLabelsAggregateResultModel"
import { formLabelsAggregateResultModelPrimitives, FormLabelsAggregateResultModelSelector } from "./FormLabelsAggregateResultModel.base"
import { UpdateFormLabelsPayloadModel, UpdateFormLabelsPayloadModelType } from "./UpdateFormLabelsPayloadModel"
import { updateFormLabelsPayloadModelPrimitives, UpdateFormLabelsPayloadModelSelector } from "./UpdateFormLabelsPayloadModel.base"
import { FieldsModel, FieldsModelType } from "./FieldsModel"
import { fieldsModelPrimitives, FieldsModelSelector } from "./FieldsModel.base"
import { OralRadiologyModel, OralRadiologyModelType } from "./OralRadiologyModel"
import { oralRadiologyModelPrimitives, OralRadiologyModelSelector } from "./OralRadiologyModel.base"
import { AddCustomCasePayloadModel, AddCustomCasePayloadModelType } from "./AddCustomCasePayloadModel"
import { addCustomCasePayloadModelPrimitives, AddCustomCasePayloadModelSelector } from "./AddCustomCasePayloadModel.base"
import { UpdateOralRadiologyPayloadModel, UpdateOralRadiologyPayloadModelType } from "./UpdateOralRadiologyPayloadModel"
import { updateOralRadiologyPayloadModelPrimitives, UpdateOralRadiologyPayloadModelSelector } from "./UpdateOralRadiologyPayloadModel.base"
import { DeleteUserFeedbackPayloadModel, DeleteUserFeedbackPayloadModelType } from "./DeleteUserFeedbackPayloadModel"
import { deleteUserFeedbackPayloadModelPrimitives, DeleteUserFeedbackPayloadModelSelector } from "./DeleteUserFeedbackPayloadModel.base"
import { UpdateAcademicLogPayloadModel, UpdateAcademicLogPayloadModelType } from "./UpdateAcademicLogPayloadModel"
import { updateAcademicLogPayloadModelPrimitives, UpdateAcademicLogPayloadModelSelector } from "./UpdateAcademicLogPayloadModel.base"
import { CustomLogModel, CustomLogModelType } from "./CustomLogModel"
import { customLogModelPrimitives, CustomLogModelSelector } from "./CustomLogModel.base"
import { AddAnaesthesiaChronicPainLogPayloadModel, AddAnaesthesiaChronicPainLogPayloadModelType } from "./AddAnaesthesiaChronicPainLogPayloadModel"
import { addAnaesthesiaChronicPainLogPayloadModelPrimitives, AddAnaesthesiaChronicPainLogPayloadModelSelector } from "./AddAnaesthesiaChronicPainLogPayloadModel.base"
import { DeleteCustomLogPayloadModel, DeleteCustomLogPayloadModelType } from "./DeleteCustomLogPayloadModel"
import { deleteCustomLogPayloadModelPrimitives, DeleteCustomLogPayloadModelSelector } from "./DeleteCustomLogPayloadModel.base"
import { HospitalsAggregateResultModel, HospitalsAggregateResultModelType } from "./HospitalsAggregateResultModel"
import { hospitalsAggregateResultModelPrimitives, HospitalsAggregateResultModelSelector } from "./HospitalsAggregateResultModel.base"
import { RotationAggregateResultModel, RotationAggregateResultModelType } from "./RotationAggregateResultModel"
import { rotationAggregateResultModelPrimitives, RotationAggregateResultModelSelector } from "./RotationAggregateResultModel.base"
import { DeletePublicationLogPayloadModel, DeletePublicationLogPayloadModelType } from "./DeletePublicationLogPayloadModel"
import { deletePublicationLogPayloadModelPrimitives, DeletePublicationLogPayloadModelSelector } from "./DeletePublicationLogPayloadModel.base"
import { AddThesisLogPayloadModel, AddThesisLogPayloadModelType } from "./AddThesisLogPayloadModel"
import { addThesisLogPayloadModelPrimitives, AddThesisLogPayloadModelSelector } from "./AddThesisLogPayloadModel.base"
import { OralMedicineAndRadiologyCaseLogModel, OralMedicineAndRadiologyCaseLogModelType } from "./OralMedicineAndRadiologyCaseLogModel"
import { oralMedicineAndRadiologyCaseLogModelPrimitives, OralMedicineAndRadiologyCaseLogModelSelector } from "./OralMedicineAndRadiologyCaseLogModel.base"
import { AddHospitalsPayloadModel, AddHospitalsPayloadModelType } from "./AddHospitalsPayloadModel"
import { addHospitalsPayloadModelPrimitives, AddHospitalsPayloadModelSelector } from "./AddHospitalsPayloadModel.base"
import { AddOralMedicineAndRadiologyCaseLogPayloadModel, AddOralMedicineAndRadiologyCaseLogPayloadModelType } from "./AddOralMedicineAndRadiologyCaseLogPayloadModel"
import { addOralMedicineAndRadiologyCaseLogPayloadModelPrimitives, AddOralMedicineAndRadiologyCaseLogPayloadModelSelector } from "./AddOralMedicineAndRadiologyCaseLogPayloadModel.base"


import { CustomCaseHasFilter } from "./CustomCaseHasFilterEnum"
import { AnaesthesiaChronicPainLogHasFilter } from "./AnaesthesiaChronicPainLogHasFilterEnum"
import { LogProfileHasFilter } from "./LogProfileHasFilterEnum"
import { OralRadiologyHasFilter } from "./OralRadiologyHasFilterEnum"
import { HttpMethod } from "./HttpMethodEnum"
import { CustomLogHasFilter } from "./CustomLogHasFilterEnum"
import { ThesisCaseHasFilter } from "./ThesisCaseHasFilterEnum"
import { FormLabelsOrderable } from "./FormLabelsOrderableEnum"
import { AnaesthesiaCriticalCareCaseLogOrderable } from "./AnaesthesiaCriticalCareCaseLogOrderableEnum"
import { UserOrderable } from "./UserOrderableEnum"
import { UserFeedbackHasFilter } from "./UserFeedbackHasFilterEnum"
import { AnaesthesiaCaseLogHasFilter } from "./AnaesthesiaCaseLogHasFilterEnum"
import { AnaesthesiaCaseLogOrderable } from "./AnaesthesiaCaseLogOrderableEnum"
import { ThesisLogOrderable } from "./ThesisLogOrderableEnum"
import { AcademicLogOrderable } from "./AcademicLogOrderableEnum"
import { AdminWorkLogHasFilter } from "./AdminWorkLogHasFilterEnum"
import { AnaesthesiaChronicPainLogOrderable } from "./AnaesthesiaChronicPainLogOrderableEnum"
import { AnaesthesiaCriticalCareCaseLogHasFilter } from "./AnaesthesiaCriticalCareCaseLogHasFilterEnum"
import { AdminWorkLogOrderable } from "./AdminWorkLogOrderableEnum"
import { OrthodonticsClinicalCaseLogOrderable } from "./OrthodonticsClinicalCaseLogOrderableEnum"
import { HospitalsOrderable } from "./HospitalsOrderableEnum"
import { OrthodonticsPreClinicalOrderable } from "./OrthodonticsPreClinicalOrderableEnum"
import { FormLabelsHasFilter } from "./FormLabelsHasFilterEnum"
import { OralRadiologyOrderable } from "./OralRadiologyOrderableEnum"
import { OrthodonticsClinicalCaseLogHasFilter } from "./OrthodonticsClinicalCaseLogHasFilterEnum"
import { DgraphIndex } from "./DgraphIndexEnum"
import { Gender } from "./GenderEnum"
import { UserHasFilter } from "./UserHasFilterEnum"
import { OrthopaedicsCaseLogHasFilter } from "./OrthopaedicsCaseLogHasFilterEnum"
import { OrthopaedicsProcedureLogHasFilter } from "./OrthopaedicsProcedureLogHasFilterEnum"
import { PublicationLogHasFilter } from "./PublicationLogHasFilterEnum"
import { FieldsOrderable } from "./FieldsOrderableEnum"
import { OrthopaedicsProcedureLogOrderable } from "./OrthopaedicsProcedureLogOrderableEnum"
import { UserFeedbackOrderable } from "./UserFeedbackOrderableEnum"
import { ThesisCaseOrderable } from "./ThesisCaseOrderableEnum"
import { RotationOrderable } from "./RotationOrderableEnum"
import { AcademicLogHasFilter } from "./AcademicLogHasFilterEnum"
import { CustomLogOrderable } from "./CustomLogOrderableEnum"
import { HospitalsHasFilter } from "./HospitalsHasFilterEnum"
import { LogProfileOrderable } from "./LogProfileOrderableEnum"
import { OralMedicineAndRadiologyCaseLogOrderable } from "./OralMedicineAndRadiologyCaseLogOrderableEnum"
import { CustomCaseOrderable } from "./CustomCaseOrderableEnum"
import { ThesisLogHasFilter } from "./ThesisLogHasFilterEnum"
import { PublicationLogOrderable } from "./PublicationLogOrderableEnum"
import { OrthodonticsPreClinicalHasFilter } from "./OrthodonticsPreClinicalHasFilterEnum"
import { UserStatus } from "./UserStatusEnum"
import { FieldsHasFilter } from "./FieldsHasFilterEnum"
import { FacultyOrderable } from "./FacultyOrderableEnum"
import { UserRole } from "./UserRoleEnum"
import { RotationHasFilter } from "./RotationHasFilterEnum"
import { OralMedicineAndRadiologyCaseLogHasFilter } from "./OralMedicineAndRadiologyCaseLogHasFilterEnum"
import { OrthopaedicsCaseLogOrderable } from "./OrthopaedicsCaseLogOrderableEnum"
import { FacultyHasFilter } from "./FacultyHasFilterEnum"
import { Mode } from "./ModeEnum"

export type MultiPolygonRef = {
  polygons: PolygonRef[]
}
export type AddOrthopaedicsProcedureLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  conduct?: (string | null)
  sites?: (string | null)
  procedure?: (string | null)[] | null
  procedureName?: (string | null)
  durationOfSurgeryHours?: (string | null)
  durationOfSurgeryMinutes?: (string | null)
  outcome?: (string | null)
  outcomeOther?: (string | null)
  complication?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type WithinFilter = {
  polygon: PolygonRef
}
export type AdminWorkLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  activity?: (string | null)
  otherActivity?: (string | null)
  position?: (string | null)
  organisation?: (string | null)
  academicLogType?: (string | null)
}
export type PublicationLogOrder = {
  asc?: (PublicationLogOrderable | null)
  desc?: (PublicationLogOrderable | null)
  then?: (PublicationLogOrder | null)
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
export type LogProfileFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  has?: (LogProfileHasFilter | null)[] | null
  and?: (LogProfileFilter | null)[] | null
  or?: (LogProfileFilter | null)[] | null
  not?: (LogProfileFilter | null)
}
export type CustomCaseFilter = {
  id?: string[] | null
  caseName?: (StringTermFilter | null)
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  has?: (CustomCaseHasFilter | null)[] | null
  and?: (CustomCaseFilter | null)[] | null
  or?: (CustomCaseFilter | null)[] | null
  not?: (CustomCaseFilter | null)
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
export type AddAnaesthesiaChronicPainLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type AddCustomCaseInput = {
  caseName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  fields?: (FieldsRef | null)[] | null
}
export type AdminWorkLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  has?: (AdminWorkLogHasFilter | null)[] | null
  and?: (AdminWorkLogFilter | null)[] | null
  or?: (AdminWorkLogFilter | null)[] | null
  not?: (AdminWorkLogFilter | null)
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
export type CustomLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  customName?: (string | null)
  formLabels?: (FormLabelsRef | null)[] | null
}
export type ThesisLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  thesisName?: (StringTermFilter | null)
  has?: (ThesisLogHasFilter | null)[] | null
  and?: (ThesisLogFilter | null)[] | null
  or?: (ThesisLogFilter | null)[] | null
  not?: (ThesisLogFilter | null)
}
export type GenerateMutationParams = {
  add?: (boolean | null)
  update?: (boolean | null)
  delete?: (boolean | null)
}
export type OrthopaedicsProcedureLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  conduct?: (string | null)
  sites?: (string | null)
  procedure?: (string | null)[] | null
  procedureName?: (string | null)
  durationOfSurgeryHours?: (string | null)
  durationOfSurgeryMinutes?: (string | null)
  outcome?: (string | null)
  outcomeOther?: (string | null)
  complication?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type UpdateOralMedicineAndRadiologyCaseLogInput = {
  filter: OralMedicineAndRadiologyCaseLogFilter
  set?: (OralMedicineAndRadiologyCaseLogPatch | null)
  remove?: (OralMedicineAndRadiologyCaseLogPatch | null)
}
export type AcademicLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  position?: (string | null)
  activities?: (string | null)[] | null
  title?: (string | null)
  organiser?: (string | null)
  supervision?: (string | null)[] | null
  academicLogType?: (string | null)
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
export type StringRegExpFilter = {
  regexp?: (string | null)
}
export type AnaesthesiaCriticalCareCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type HospitalsPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
}
export type FieldsOrder = {
  asc?: (FieldsOrderable | null)
  desc?: (FieldsOrderable | null)
  then?: (FieldsOrder | null)
}
export type UpdateAnaesthesiaCriticalCareCaseLogInput = {
  filter: AnaesthesiaCriticalCareCaseLogFilter
  set?: (AnaesthesiaCriticalCareCaseLogPatch | null)
  remove?: (AnaesthesiaCriticalCareCaseLogPatch | null)
}
export type AnaesthesiaCaseLogOrder = {
  asc?: (AnaesthesiaCaseLogOrderable | null)
  desc?: (AnaesthesiaCaseLogOrderable | null)
  then?: (AnaesthesiaCaseLogOrder | null)
}
export type LogProfileOrder = {
  asc?: (LogProfileOrderable | null)
  desc?: (LogProfileOrderable | null)
  then?: (LogProfileOrder | null)
}
export type ThesisCasePatch = {
  caseName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  fields?: (FieldsRef | null)[] | null
}
export type UpdateFieldsInput = {
  filter: FieldsFilter
  set?: (FieldsPatch | null)
  remove?: (FieldsPatch | null)
}
export type UpdateHospitalsInput = {
  filter: HospitalsFilter
  set?: (HospitalsPatch | null)
  remove?: (HospitalsPatch | null)
}
export type AnaesthesiaChronicPainLogOrder = {
  asc?: (AnaesthesiaChronicPainLogOrderable | null)
  desc?: (AnaesthesiaChronicPainLogOrderable | null)
  then?: (AnaesthesiaChronicPainLogOrder | null)
}
export type OralRadiologyFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  rotation?: (StringTermFilter | null)
  procedure?: (StringTermFilter | null)
  report?: (StringTermFilter | null)
  diagnosis?: (StringTermFilter | null)
  chiefComplaint?: (StringTermFilter | null)
  has?: (OralRadiologyHasFilter | null)[] | null
  and?: (OralRadiologyFilter | null)[] | null
  or?: (OralRadiologyFilter | null)[] | null
  not?: (OralRadiologyFilter | null)
}
export type PolygonRef = {
  coordinates: PointListRef[]
}
export type FormLabelsFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  label?: (StringTermFilter | null)
  has?: (FormLabelsHasFilter | null)[] | null
  and?: (FormLabelsFilter | null)[] | null
  or?: (FormLabelsFilter | null)[] | null
  not?: (FormLabelsFilter | null)
}
export type AddRotationInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  department?: (string | null)
  from?: (any | null)
  to?: (any | null)
}
export type NearFilter = {
  distance: number
  coordinate: PointRef
}
export type AddCustomLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  customName?: (string | null)
  formLabels?: (FormLabelsRef | null)[] | null
}
export type UpdatePublicationLogInput = {
  filter: PublicationLogFilter
  set?: (PublicationLogPatch | null)
  remove?: (PublicationLogPatch | null)
}
export type AnaesthesiaChronicPainLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type DateTimeRange = {
  min: any
  max: any
}
export type DgraphDefault = {
  value?: (string | null)
}
export type PointGeoFilter = {
  near?: (NearFilter | null)
  within?: (WithinFilter | null)
}
export type FormLabelsOrder = {
  asc?: (FormLabelsOrderable | null)
  desc?: (FormLabelsOrderable | null)
  then?: (FormLabelsOrder | null)
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
export type FormLabelsRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  label?: (string | null)
}
export type OralRadiologyPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  procedure?: (string | null)[] | null
  report?: (string | null)
  diagnosis?: (string | null)
  chiefComplaint?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type PublicationLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  publicationType?: (string | null)
  title?: (string | null)
  journalName?: (string | null)
  status?: (string | null)
  academicLogType?: (string | null)
}
export type UpdateFormLabelsInput = {
  filter: FormLabelsFilter
  set?: (FormLabelsPatch | null)
  remove?: (FormLabelsPatch | null)
}
export type AddOrthodonticsClinicalCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  complete?: (boolean | null)
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
export type UpdateRotationInput = {
  filter: RotationFilter
  set?: (RotationPatch | null)
  remove?: (RotationPatch | null)
}
export type AnaesthesiaCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type UpdateFacultyInput = {
  filter: FacultyFilter
  set?: (FacultyPatch | null)
  remove?: (FacultyPatch | null)
}
export type AddAnaesthesiaCriticalCareCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type UserFeedbackFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  title?: (StringTermFilter | null)
  description?: (StringTermFilter | null)
  userEmail?: (StringTermFilter | null)
  has?: (UserFeedbackHasFilter | null)[] | null
  and?: (UserFeedbackFilter | null)[] | null
  or?: (UserFeedbackFilter | null)[] | null
  not?: (UserFeedbackFilter | null)
}
export type AddOrthodonticsPreClinicalInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type OrthodonticsClinicalCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  complete?: (boolean | null)
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
export type UpdateLogProfileInput = {
  filter: LogProfileFilter
  set?: (LogProfilePatch | null)
  remove?: (LogProfilePatch | null)
}
export type UserOrder = {
  asc?: (UserOrderable | null)
  desc?: (UserOrderable | null)
  then?: (UserOrder | null)
}
export type AdminWorkLogOrder = {
  asc?: (AdminWorkLogOrderable | null)
  desc?: (AdminWorkLogOrderable | null)
  then?: (AdminWorkLogOrder | null)
}
export type CustomCaseOrder = {
  asc?: (CustomCaseOrderable | null)
  desc?: (CustomCaseOrderable | null)
  then?: (CustomCaseOrder | null)
}
export type RotationRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  department?: (string | null)
  from?: (any | null)
  to?: (any | null)
}
export type Int64Range = {
  min: any
  max: any
}
export type AddLogProfileInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  hospitals?: (HospitalsRef | null)[] | null
  faculties?: (FacultyRef | null)[] | null
  rotations?: (RotationRef | null)[] | null
}
export type LogProfilePatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  hospitals?: (HospitalsRef | null)[] | null
  faculties?: (FacultyRef | null)[] | null
  rotations?: (RotationRef | null)[] | null
}
export type UpdateCustomLogInput = {
  filter: CustomLogFilter
  set?: (CustomLogPatch | null)
  remove?: (CustomLogPatch | null)
}
export type PointListRef = {
  points: PointRef[]
}
export type HospitalsOrder = {
  asc?: (HospitalsOrderable | null)
  desc?: (HospitalsOrderable | null)
  then?: (HospitalsOrder | null)
}
export type ThesisCaseFilter = {
  id?: string[] | null
  caseName?: (StringTermFilter | null)
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  has?: (ThesisCaseHasFilter | null)[] | null
  and?: (ThesisCaseFilter | null)[] | null
  or?: (ThesisCaseFilter | null)[] | null
  not?: (ThesisCaseFilter | null)
}
export type AddThesisCaseInput = {
  caseName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  fields?: (FieldsRef | null)[] | null
}
export type CustomCasePatch = {
  caseName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  fields?: (FieldsRef | null)[] | null
}
export type OralMedicineAndRadiologyCaseLogOrder = {
  asc?: (OralMedicineAndRadiologyCaseLogOrderable | null)
  desc?: (OralMedicineAndRadiologyCaseLogOrderable | null)
  then?: (OralMedicineAndRadiologyCaseLogOrder | null)
}
export type ThesisLogOrder = {
  asc?: (ThesisLogOrderable | null)
  desc?: (ThesisLogOrderable | null)
  then?: (ThesisLogOrder | null)
}
export type UpdateAdminWorkLogInput = {
  filter: AdminWorkLogFilter
  set?: (AdminWorkLogPatch | null)
  remove?: (AdminWorkLogPatch | null)
}
export type PolygonGeoFilter = {
  near?: (NearFilter | null)
  within?: (WithinFilter | null)
  contains?: (ContainsFilter | null)
  intersects?: (IntersectsFilter | null)
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
export type OrthodonticsPreClinicalOrder = {
  asc?: (OrthodonticsPreClinicalOrderable | null)
  desc?: (OrthodonticsPreClinicalOrderable | null)
  then?: (OrthodonticsPreClinicalOrder | null)
}
export type UserFeedbackPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  title?: (string | null)
  description?: (string | null)
  userEmail?: (string | null)
}
export type FacultyOrder = {
  asc?: (FacultyOrderable | null)
  desc?: (FacultyOrderable | null)
  then?: (FacultyOrder | null)
}
export type FieldsPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  label?: (string | null)
  value?: (string | null)
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
export type CustomLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  customName?: (StringTermFilter | null)
  has?: (CustomLogHasFilter | null)[] | null
  and?: (CustomLogFilter | null)[] | null
  or?: (CustomLogFilter | null)[] | null
  not?: (CustomLogFilter | null)
}
export type UpdateOrthodonticsClinicalCaseLogInput = {
  filter: OrthodonticsClinicalCaseLogFilter
  set?: (OrthodonticsClinicalCaseLogPatch | null)
  remove?: (OrthodonticsClinicalCaseLogPatch | null)
}
export type AnaesthesiaCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type AddFieldsInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  label?: (string | null)
  value?: (string | null)
}
export type AddUserFeedbackInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  title?: (string | null)
  description?: (string | null)
  userEmail?: (string | null)
}
export type AdminWorkLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  activity?: (string | null)
  otherActivity?: (string | null)
  position?: (string | null)
  organisation?: (string | null)
  academicLogType?: (string | null)
}
export type UpdateOralRadiologyInput = {
  filter: OralRadiologyFilter
  set?: (OralRadiologyPatch | null)
  remove?: (OralRadiologyPatch | null)
}
export type FormLabelsPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  label?: (string | null)
}
export type ThesisCaseRef = {
  id?: (string | null)
  caseName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  fields?: (FieldsRef | null)[] | null
}
export type OrthodonticsPreClinicalPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
  oralMedicineAndRadiologyCaseLog?: (OralMedicineAndRadiologyCaseLogRef | null)[] | null
  oralRadiology?: (OralRadiologyRef | null)[] | null
  academicLog?: (AcademicLogRef | null)[] | null
  publicationLog?: (PublicationLogRef | null)[] | null
  adminWorkLog?: (AdminWorkLogRef | null)[] | null
  thesisLog?: (ThesisLogRef | null)[] | null
  customLog?: (CustomLogRef | null)[] | null
  thesisCases?: (ThesisCaseRef | null)[] | null
  customCases?: (CustomCaseRef | null)[] | null
  logProfile?: (LogProfileRef | null)
  imagePath?: (string | null)
  userFeedback?: (UserFeedbackRef | null)[] | null
  password?: (string | null)
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
export type PublicationLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  has?: (PublicationLogHasFilter | null)[] | null
  and?: (PublicationLogFilter | null)[] | null
  or?: (PublicationLogFilter | null)[] | null
  not?: (PublicationLogFilter | null)
}
export type UpdateOrthodonticsPreClinicalInput = {
  filter: OrthodonticsPreClinicalFilter
  set?: (OrthodonticsPreClinicalPatch | null)
  remove?: (OrthodonticsPreClinicalPatch | null)
}
export type AnaesthesiaCriticalCareCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type AuthRule = {
  and?: (AuthRule | null)[] | null
  or?: (AuthRule | null)[] | null
  not?: (AuthRule | null)
  rule?: (string | null)
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
  oralMedicineAndRadiologyCaseLog?: (OralMedicineAndRadiologyCaseLogRef | null)[] | null
  oralRadiology?: (OralRadiologyRef | null)[] | null
  academicLog?: (AcademicLogRef | null)[] | null
  publicationLog?: (PublicationLogRef | null)[] | null
  adminWorkLog?: (AdminWorkLogRef | null)[] | null
  thesisLog?: (ThesisLogRef | null)[] | null
  customLog?: (CustomLogRef | null)[] | null
  thesisCases?: (ThesisCaseRef | null)[] | null
  customCases?: (CustomCaseRef | null)[] | null
  logProfile?: (LogProfileRef | null)
  imagePath?: (string | null)
  userFeedback?: (UserFeedbackRef | null)[] | null
  password: string
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
export type AcademicLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  has?: (AcademicLogHasFilter | null)[] | null
  and?: (AcademicLogFilter | null)[] | null
  or?: (AcademicLogFilter | null)[] | null
  not?: (AcademicLogFilter | null)
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
export type ThesisLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  thesisName?: (string | null)
  formLabels?: (FormLabelsRef | null)[] | null
}
export type FieldsRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  label?: (string | null)
  value?: (string | null)
}
export type AddFormLabelsInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  label?: (string | null)
}
export type HospitalsRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
}
export type UpdateThesisCaseInput = {
  filter: ThesisCaseFilter
  set?: (ThesisCasePatch | null)
  remove?: (ThesisCasePatch | null)
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
export type StringFullTextFilter = {
  alloftext?: (string | null)
  anyoftext?: (string | null)
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
export type OralMedicineAndRadiologyCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  procedure?: (string | null)[] | null
  comorbidities?: (string | null)[] | null
  lesion?: (string | null)[] | null
  drugAllergyReaction?: (string | null)[] | null
  habitHistory?: (string | null)[] | null
  treatment?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type RotationPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  department?: (string | null)
  from?: (any | null)
  to?: (any | null)
}
export type GenderHash = {
  eq?: (Gender | null)
  in?: (Gender | null)[] | null
}
export type PublicationLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  publicationType?: (string | null)
  title?: (string | null)
  journalName?: (string | null)
  status?: (string | null)
  academicLogType?: (string | null)
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
export type UpdateAnaesthesiaCaseLogInput = {
  filter: AnaesthesiaCaseLogFilter
  set?: (AnaesthesiaCaseLogPatch | null)
  remove?: (AnaesthesiaCaseLogPatch | null)
}
export type AddOralMedicineAndRadiologyCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  procedure?: (string | null)[] | null
  comorbidities?: (string | null)[] | null
  lesion?: (string | null)[] | null
  drugAllergyReaction?: (string | null)[] | null
  habitHistory?: (string | null)[] | null
  treatment?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type OralRadiologyOrder = {
  asc?: (OralRadiologyOrderable | null)
  desc?: (OralRadiologyOrderable | null)
  then?: (OralRadiologyOrder | null)
}
export type OrthopaedicsCaseLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type AddAdminWorkLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  activity?: (string | null)
  otherActivity?: (string | null)
  position?: (string | null)
  organisation?: (string | null)
  academicLogType?: (string | null)
}
export type FieldsFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  label?: (StringTermFilter | null)
  value?: (StringTermFilter | null)
  has?: (FieldsHasFilter | null)[] | null
  and?: (FieldsFilter | null)[] | null
  or?: (FieldsFilter | null)[] | null
  not?: (FieldsFilter | null)
}
export type OralRadiologyRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  procedure?: (string | null)[] | null
  report?: (string | null)
  diagnosis?: (string | null)
  chiefComplaint?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type OrthodonticsClinicalCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  complete?: (boolean | null)
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
export type CustomCaseRef = {
  id?: (string | null)
  caseName?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  fields?: (FieldsRef | null)[] | null
}
export type RotationOrder = {
  asc?: (RotationOrderable | null)
  desc?: (RotationOrderable | null)
  then?: (RotationOrder | null)
}
export type ThesisCaseOrder = {
  asc?: (ThesisCaseOrderable | null)
  desc?: (ThesisCaseOrderable | null)
  then?: (ThesisCaseOrder | null)
}
export type UpdateUserFeedbackInput = {
  filter: UserFeedbackFilter
  set?: (UserFeedbackPatch | null)
  remove?: (UserFeedbackPatch | null)
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
  durationOfSurgeryHours?: (StringTermFilter | null)
  durationOfSurgeryMinutes?: (StringTermFilter | null)
  outcome?: (StringTermFilter | null)
  outcomeOther?: (StringTermFilter | null)
  complication?: (StringTermFilter | null)
  diagnosis?: (StringTermFilter | null)
  has?: (OrthopaedicsProcedureLogHasFilter | null)[] | null
  and?: (OrthopaedicsProcedureLogFilter | null)[] | null
  or?: (OrthopaedicsProcedureLogFilter | null)[] | null
  not?: (OrthopaedicsProcedureLogFilter | null)
}
export type ThesisLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  thesisName?: (string | null)
  formLabels?: (FormLabelsRef | null)[] | null
}
export type AddHospitalsInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  name?: (string | null)
}
export type OrthopaedicsCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
  oralMedicineAndRadiologyCaseLog?: (OralMedicineAndRadiologyCaseLogRef | null)[] | null
  oralRadiology?: (OralRadiologyRef | null)[] | null
  academicLog?: (AcademicLogRef | null)[] | null
  publicationLog?: (PublicationLogRef | null)[] | null
  adminWorkLog?: (AdminWorkLogRef | null)[] | null
  thesisLog?: (ThesisLogRef | null)[] | null
  customLog?: (CustomLogRef | null)[] | null
  thesisCases?: (ThesisCaseRef | null)[] | null
  customCases?: (CustomCaseRef | null)[] | null
  logProfile?: (LogProfileRef | null)
  imagePath?: (string | null)
  userFeedback?: (UserFeedbackRef | null)[] | null
  password?: (string | null)
}
export type AcademicLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  position?: (string | null)
  activities?: (string | null)[] | null
  title?: (string | null)
  organiser?: (string | null)
  supervision?: (string | null)[] | null
  academicLogType?: (string | null)
}
export type OrthodonticsPreClinicalRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  rotation?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type UpdateOrthopaedicsProcedureLogInput = {
  filter: OrthopaedicsProcedureLogFilter
  set?: (OrthopaedicsProcedureLogPatch | null)
  remove?: (OrthopaedicsProcedureLogPatch | null)
}
export type AddOralRadiologyInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  procedure?: (string | null)[] | null
  report?: (string | null)
  diagnosis?: (string | null)
  chiefComplaint?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type AnaesthesiaChronicPainLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type UserFeedbackOrder = {
  asc?: (UserFeedbackOrderable | null)
  desc?: (UserFeedbackOrderable | null)
  then?: (UserFeedbackOrder | null)
}
export type OrthopaedicsCaseLogOrder = {
  asc?: (OrthopaedicsCaseLogOrderable | null)
  desc?: (OrthopaedicsCaseLogOrderable | null)
  then?: (OrthopaedicsCaseLogOrder | null)
}
export type UpdateCustomCaseInput = {
  filter: CustomCaseFilter
  set?: (CustomCasePatch | null)
  remove?: (CustomCasePatch | null)
}
export type AddAcademicLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  position?: (string | null)
  activities?: (string | null)[] | null
  title?: (string | null)
  organiser?: (string | null)
  supervision?: (string | null)[] | null
  academicLogType?: (string | null)
}
export type OralMedicineAndRadiologyCaseLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  procedure?: (string | null)[] | null
  comorbidities?: (string | null)[] | null
  lesion?: (string | null)[] | null
  drugAllergyReaction?: (string | null)[] | null
  habitHistory?: (string | null)[] | null
  treatment?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type StringTermFilter = {
  allofterms?: (string | null)
  anyofterms?: (string | null)
}
export type OrthodonticsClinicalCaseLogOrder = {
  asc?: (OrthodonticsClinicalCaseLogOrderable | null)
  desc?: (OrthodonticsClinicalCaseLogOrderable | null)
  then?: (OrthodonticsClinicalCaseLogOrder | null)
}
export type OrthopaedicsProcedureLogOrder = {
  asc?: (OrthopaedicsProcedureLogOrderable | null)
  desc?: (OrthopaedicsProcedureLogOrderable | null)
  then?: (OrthopaedicsProcedureLogOrder | null)
}
export type LogProfileRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  hospitals?: (HospitalsRef | null)[] | null
  faculties?: (FacultyRef | null)[] | null
  rotations?: (RotationRef | null)[] | null
}
export type UpdateAnaesthesiaChronicPainLogInput = {
  filter: AnaesthesiaChronicPainLogFilter
  set?: (AnaesthesiaChronicPainLogPatch | null)
  remove?: (AnaesthesiaChronicPainLogPatch | null)
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
export type GenerateQueryParams = {
  get?: (boolean | null)
  query?: (boolean | null)
  password?: (boolean | null)
  aggregate?: (boolean | null)
}
export type AddOrthopaedicsCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type UserRoleExact = {
  eq?: (UserRole | null)
  in?: (UserRole | null)[] | null
  le?: (UserRole | null)
  lt?: (UserRole | null)
  ge?: (UserRole | null)
  gt?: (UserRole | null)
  between?: (UserRole | null)
}
export type UserStatusHash = {
  eq?: (UserStatus | null)
  in?: (UserStatus | null)[] | null
}
export type ContainsFilter = {
  point?: (PointRef | null)
  polygon?: (PolygonRef | null)
}
export type UpdateUserInput = {
  filter: UserFilter
  set?: (UserPatch | null)
  remove?: (UserPatch | null)
}
export type IntersectsFilter = {
  polygon?: (PolygonRef | null)
  multiPolygon?: (MultiPolygonRef | null)
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
export type StringHashFilter = {
  eq?: (string | null)
  in?: (string | null)[] | null
}
export type AnaesthesiaCriticalCareCaseLogOrder = {
  asc?: (AnaesthesiaCriticalCareCaseLogOrderable | null)
  desc?: (AnaesthesiaCriticalCareCaseLogOrderable | null)
  then?: (AnaesthesiaCriticalCareCaseLogOrder | null)
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
export type OralMedicineAndRadiologyCaseLogFilter = {
  id?: string[] | null
  createdOn?: (DateTimeFilter | null)
  updatedOn?: (DateTimeFilter | null)
  date?: (DateTimeFilter | null)
  hospital?: (StringTermFilter | null)
  rotation?: (StringTermFilter | null)
  procedure?: (StringTermFilter | null)
  comorbidities?: (StringTermFilter | null)
  lesion?: (StringTermFilter | null)
  drugAllergyReaction?: (StringTermFilter | null)
  habitHistory?: (StringTermFilter | null)
  treatment?: (StringTermFilter | null)
  diagnosis?: (StringTermFilter | null)
  has?: (OralMedicineAndRadiologyCaseLogHasFilter | null)[] | null
  and?: (OralMedicineAndRadiologyCaseLogFilter | null)[] | null
  or?: (OralMedicineAndRadiologyCaseLogFilter | null)[] | null
  not?: (OralMedicineAndRadiologyCaseLogFilter | null)
}
export type CustomLogRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  customName?: (string | null)
  formLabels?: (FormLabelsRef | null)[] | null
}
export type AcademicLogOrder = {
  asc?: (AcademicLogOrderable | null)
  desc?: (AcademicLogOrderable | null)
  then?: (AcademicLogOrder | null)
}
export type AddAnaesthesiaCaseLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  rotation?: (string | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
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
export type CustomLogOrder = {
  asc?: (CustomLogOrderable | null)
  desc?: (CustomLogOrderable | null)
  then?: (CustomLogOrder | null)
}
export type AddPublicationLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  publicationType?: (string | null)
  title?: (string | null)
  journalName?: (string | null)
  status?: (string | null)
  academicLogType?: (string | null)
}
export type IntRange = {
  min: number
  max: number
}
export type UpdateThesisLogInput = {
  filter: ThesisLogFilter
  set?: (ThesisLogPatch | null)
  remove?: (ThesisLogPatch | null)
}
export type OrthopaedicsProcedureLogPatch = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  date?: (any | null)
  hospital?: (string | null)
  faculty?: (string | null)
  complete?: (boolean | null)
  patientAge?: (string | null)
  patientSex?: (string | null)
  rotation?: (string | null)
  conduct?: (string | null)
  sites?: (string | null)
  procedure?: (string | null)[] | null
  procedureName?: (string | null)
  durationOfSurgeryHours?: (string | null)
  durationOfSurgeryMinutes?: (string | null)
  outcome?: (string | null)
  outcomeOther?: (string | null)
  complication?: (string | null)
  diagnosis?: (string | null)
  caseType?: (string | null)
  remarks?: (string | null)
}
export type UpdateAcademicLogInput = {
  filter: AcademicLogFilter
  set?: (AcademicLogPatch | null)
  remove?: (AcademicLogPatch | null)
}
export type UserFeedbackRef = {
  id?: (string | null)
  createdOn?: (any | null)
  updatedOn?: (any | null)
  title?: (string | null)
  description?: (string | null)
  userEmail?: (string | null)
}
export type AddThesisLogInput = {
  createdOn?: (any | null)
  updatedOn?: (any | null)
  thesisName?: (string | null)
  formLabels?: (FormLabelsRef | null)[] | null
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orthodonticsPreClinicals: ObservableMap<string, OrthodonticsPreClinicalModelType>,
  orthopaedicsCaseLogs: ObservableMap<string, OrthopaedicsCaseLogModelType>,
  hospitals: ObservableMap<string, HospitalsModelType>,
  publicationLogs: ObservableMap<string, PublicationLogModelType>,
  orthodonticsClinicalCaseLogs: ObservableMap<string, OrthodonticsClinicalCaseLogModelType>,
  anaesthesiaCaseLogs: ObservableMap<string, AnaesthesiaCaseLogModelType>,
  thesisLogs: ObservableMap<string, ThesisLogModelType>,
  customCases: ObservableMap<string, CustomCaseModelType>,
  academicLogs: ObservableMap<string, AcademicLogModelType>,
  anaesthesiaChronicPainLogs: ObservableMap<string, AnaesthesiaChronicPainLogModelType>,
  adminWorkLogs: ObservableMap<string, AdminWorkLogModelType>,
  anaesthesiaCriticalCareCaseLogs: ObservableMap<string, AnaesthesiaCriticalCareCaseLogModelType>,
  faculties: ObservableMap<string, FacultyModelType>,
  users: ObservableMap<string, UserModelType>,
  userFeedbacks: ObservableMap<string, UserFeedbackModelType>,
  orthopaedicsProcedureLogs: ObservableMap<string, OrthopaedicsProcedureLogModelType>,
  logProfiles: ObservableMap<string, LogProfileModelType>,
  thesisCases: ObservableMap<string, ThesisCaseModelType>,
  formLabels: ObservableMap<string, FormLabelsModelType>,
  rotations: ObservableMap<string, RotationModelType>,
  fields: ObservableMap<string, FieldsModelType>,
  oralRadiologies: ObservableMap<string, OralRadiologyModelType>,
  customLogs: ObservableMap<string, CustomLogModelType>,
  oralMedicineAndRadiologyCaseLogs: ObservableMap<string, OralMedicineAndRadiologyCaseLogModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryGetUser="queryGetUser",
queryCheckUserPassword="queryCheckUserPassword",
queryQueryUser="queryQueryUser",
queryAggregateUser="queryAggregateUser",
queryGetUserFeedback="queryGetUserFeedback",
queryQueryUserFeedback="queryQueryUserFeedback",
queryAggregateUserFeedback="queryAggregateUserFeedback",
queryGetThesisLog="queryGetThesisLog",
queryQueryThesisLog="queryQueryThesisLog",
queryAggregateThesisLog="queryAggregateThesisLog",
queryGetCustomLog="queryGetCustomLog",
queryQueryCustomLog="queryQueryCustomLog",
queryAggregateCustomLog="queryAggregateCustomLog",
queryGetFormLabels="queryGetFormLabels",
queryQueryFormLabels="queryQueryFormLabels",
queryAggregateFormLabels="queryAggregateFormLabels",
queryGetFields="queryGetFields",
queryQueryFields="queryQueryFields",
queryAggregateFields="queryAggregateFields",
queryGetThesisCase="queryGetThesisCase",
queryQueryThesisCase="queryQueryThesisCase",
queryAggregateThesisCase="queryAggregateThesisCase",
queryGetCustomCase="queryGetCustomCase",
queryQueryCustomCase="queryQueryCustomCase",
queryAggregateCustomCase="queryAggregateCustomCase",
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
queryGetOralMedicineAndRadiologyCaseLog="queryGetOralMedicineAndRadiologyCaseLog",
queryQueryOralMedicineAndRadiologyCaseLog="queryQueryOralMedicineAndRadiologyCaseLog",
queryAggregateOralMedicineAndRadiologyCaseLog="queryAggregateOralMedicineAndRadiologyCaseLog",
queryGetOralRadiology="queryGetOralRadiology",
queryQueryOralRadiology="queryQueryOralRadiology",
queryAggregateOralRadiology="queryAggregateOralRadiology",
queryGetAcademicLog="queryGetAcademicLog",
queryQueryAcademicLog="queryQueryAcademicLog",
queryAggregateAcademicLog="queryAggregateAcademicLog",
queryGetPublicationLog="queryGetPublicationLog",
queryQueryPublicationLog="queryQueryPublicationLog",
queryAggregatePublicationLog="queryAggregatePublicationLog",
queryGetAdminWorkLog="queryGetAdminWorkLog",
queryQueryAdminWorkLog="queryQueryAdminWorkLog",
queryAggregateAdminWorkLog="queryAggregateAdminWorkLog",
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
mutateAddUserFeedback="mutateAddUserFeedback",
mutateUpdateUserFeedback="mutateUpdateUserFeedback",
mutateDeleteUserFeedback="mutateDeleteUserFeedback",
mutateAddThesisLog="mutateAddThesisLog",
mutateUpdateThesisLog="mutateUpdateThesisLog",
mutateDeleteThesisLog="mutateDeleteThesisLog",
mutateAddCustomLog="mutateAddCustomLog",
mutateUpdateCustomLog="mutateUpdateCustomLog",
mutateDeleteCustomLog="mutateDeleteCustomLog",
mutateAddFormLabels="mutateAddFormLabels",
mutateUpdateFormLabels="mutateUpdateFormLabels",
mutateDeleteFormLabels="mutateDeleteFormLabels",
mutateAddFields="mutateAddFields",
mutateUpdateFields="mutateUpdateFields",
mutateDeleteFields="mutateDeleteFields",
mutateAddThesisCase="mutateAddThesisCase",
mutateUpdateThesisCase="mutateUpdateThesisCase",
mutateDeleteThesisCase="mutateDeleteThesisCase",
mutateAddCustomCase="mutateAddCustomCase",
mutateUpdateCustomCase="mutateUpdateCustomCase",
mutateDeleteCustomCase="mutateDeleteCustomCase",
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
mutateAddOralMedicineAndRadiologyCaseLog="mutateAddOralMedicineAndRadiologyCaseLog",
mutateUpdateOralMedicineAndRadiologyCaseLog="mutateUpdateOralMedicineAndRadiologyCaseLog",
mutateDeleteOralMedicineAndRadiologyCaseLog="mutateDeleteOralMedicineAndRadiologyCaseLog",
mutateAddOralRadiology="mutateAddOralRadiology",
mutateUpdateOralRadiology="mutateUpdateOralRadiology",
mutateDeleteOralRadiology="mutateDeleteOralRadiology",
mutateAddAcademicLog="mutateAddAcademicLog",
mutateUpdateAcademicLog="mutateUpdateAcademicLog",
mutateDeleteAcademicLog="mutateDeleteAcademicLog",
mutateAddPublicationLog="mutateAddPublicationLog",
mutateUpdatePublicationLog="mutateUpdatePublicationLog",
mutateDeletePublicationLog="mutateDeletePublicationLog",
mutateAddAdminWorkLog="mutateAddAdminWorkLog",
mutateUpdateAdminWorkLog="mutateUpdateAdminWorkLog",
mutateDeleteAdminWorkLog="mutateDeleteAdminWorkLog",
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
  .extend(configureStoreMixin([['CustomLogAggregateResult', () => CustomLogAggregateResultModel], ['PublicationLogAggregateResult', () => PublicationLogAggregateResultModel], ['DeleteOrthopaedicsProcedureLogPayload', () => DeleteOrthopaedicsProcedureLogPayloadModel], ['AddOralRadiologyPayload', () => AddOralRadiologyPayloadModel], ['AddRotationPayload', () => AddRotationPayloadModel], ['DeleteRotationPayload', () => DeleteRotationPayloadModel], ['OrthodonticsPreClinical', () => OrthodonticsPreClinicalModel], ['DeleteOrthodonticsClinicalCaseLogPayload', () => DeleteOrthodonticsClinicalCaseLogPayloadModel], ['AddThesisCasePayload', () => AddThesisCasePayloadModel], ['DeleteOrthopaedicsCaseLogPayload', () => DeleteOrthopaedicsCaseLogPayloadModel], ['ThesisCaseAggregateResult', () => ThesisCaseAggregateResultModel], ['OrthopaedicsCaseLog', () => OrthopaedicsCaseLogModel], ['AddOrthodonticsClinicalCaseLogPayload', () => AddOrthodonticsClinicalCaseLogPayloadModel], ['DeleteAnaesthesiaCaseLogPayload', () => DeleteAnaesthesiaCaseLogPayloadModel], ['UserAggregateResult', () => UserAggregateResultModel], ['Hospitals', () => HospitalsModel], ['UpdateUserFeedbackPayload', () => UpdateUserFeedbackPayloadModel], ['AcademicLogAggregateResult', () => AcademicLogAggregateResultModel], ['DeleteThesisCasePayload', () => DeleteThesisCasePayloadModel], ['PublicationLog', () => PublicationLogModel], ['DeleteAdminWorkLogPayload', () => DeleteAdminWorkLogPayloadModel], ['OrthodonticsClinicalCaseLog', () => OrthodonticsClinicalCaseLogModel], ['UpdateAdminWorkLogPayload', () => UpdateAdminWorkLogPayloadModel], ['UpdateOralMedicineAndRadiologyCaseLogPayload', () => UpdateOralMedicineAndRadiologyCaseLogPayloadModel], ['AnaesthesiaCaseLog', () => AnaesthesiaCaseLogModel], ['OralRadiologyAggregateResult', () => OralRadiologyAggregateResultModel], ['UpdateCustomLogPayload', () => UpdateCustomLogPayloadModel], ['FacultyAggregateResult', () => FacultyAggregateResultModel], ['AddFacultyPayload', () => AddFacultyPayloadModel], ['UpdateAnaesthesiaCaseLogPayload', () => UpdateAnaesthesiaCaseLogPayloadModel], ['DeleteFacultyPayload', () => DeleteFacultyPayloadModel], ['DeleteUserPayload', () => DeleteUserPayloadModel], ['DeleteFieldsPayload', () => DeleteFieldsPayloadModel], ['AddFormLabelsPayload', () => AddFormLabelsPayloadModel], ['FieldsAggregateResult', () => FieldsAggregateResultModel], ['AddCustomLogPayload', () => AddCustomLogPayloadModel], ['LogProfileAggregateResult', () => LogProfileAggregateResultModel], ['UpdateFieldsPayload', () => UpdateFieldsPayloadModel], ['DeleteHospitalsPayload', () => DeleteHospitalsPayloadModel], ['DeleteOralRadiologyPayload', () => DeleteOralRadiologyPayloadModel], ['DeleteOrthodonticsPreClinicalPayload', () => DeleteOrthodonticsPreClinicalPayloadModel], ['AddAnaesthesiaCaseLogPayload', () => AddAnaesthesiaCaseLogPayloadModel], ['AddFieldsPayload', () => AddFieldsPayloadModel], ['UpdateOrthopaedicsCaseLogPayload', () => UpdateOrthopaedicsCaseLogPayloadModel], ['ThesisLog', () => ThesisLogModel], ['OrthodonticsPreClinicalAggregateResult', () => OrthodonticsPreClinicalAggregateResultModel], ['DeleteAnaesthesiaChronicPainLogPayload', () => DeleteAnaesthesiaChronicPainLogPayloadModel], ['OrthodonticsClinicalCaseLogAggregateResult', () => OrthodonticsClinicalCaseLogAggregateResultModel], ['CustomCase', () => CustomCaseModel], ['AcademicLog', () => AcademicLogModel], ['AddOrthodonticsPreClinicalPayload', () => AddOrthodonticsPreClinicalPayloadModel], ['AddOrthopaedicsProcedureLogPayload', () => AddOrthopaedicsProcedureLogPayloadModel], ['AnaesthesiaCriticalCareCaseLogAggregateResult', () => AnaesthesiaCriticalCareCaseLogAggregateResultModel], ['AnaesthesiaChronicPainLog', () => AnaesthesiaChronicPainLogModel], ['Point', () => PointModel], ['AddPublicationLogPayload', () => AddPublicationLogPayloadModel], ['AdminWorkLog', () => AdminWorkLogModel], ['PointList', () => PointListModel], ['DeleteThesisLogPayload', () => DeleteThesisLogPayloadModel], ['AnaesthesiaCriticalCareCaseLog', () => AnaesthesiaCriticalCareCaseLogModel], ['Polygon', () => PolygonModel], ['UpdateAnaesthesiaChronicPainLogPayload', () => UpdateAnaesthesiaChronicPainLogPayloadModel], ['UpdateOrthodonticsClinicalCaseLogPayload', () => UpdateOrthodonticsClinicalCaseLogPayloadModel], ['UserFeedbackAggregateResult', () => UserFeedbackAggregateResultModel], ['Faculty', () => FacultyModel], ['CustomCaseAggregateResult', () => CustomCaseAggregateResultModel], ['UpdateCustomCasePayload', () => UpdateCustomCasePayloadModel], ['User', () => UserModel], ['UserFeedback', () => UserFeedbackModel], ['DeleteAnaesthesiaCriticalCareCaseLogPayload', () => DeleteAnaesthesiaCriticalCareCaseLogPayloadModel], ['DeleteFormLabelsPayload', () => DeleteFormLabelsPayloadModel], ['DeleteOralMedicineAndRadiologyCaseLogPayload', () => DeleteOralMedicineAndRadiologyCaseLogPayloadModel], ['UpdateLogProfilePayload', () => UpdateLogProfilePayloadModel], ['UpdateFacultyPayload', () => UpdateFacultyPayloadModel], ['OrthopaedicsProcedureLog', () => OrthopaedicsProcedureLogModel], ['LogProfile', () => LogProfileModel], ['AddAcademicLogPayload', () => AddAcademicLogPayloadModel], ['AddUserFeedbackPayload', () => AddUserFeedbackPayloadModel], ['OralMedicineAndRadiologyCaseLogAggregateResult', () => OralMedicineAndRadiologyCaseLogAggregateResultModel], ['UpdateAnaesthesiaCriticalCareCaseLogPayload', () => UpdateAnaesthesiaCriticalCareCaseLogPayloadModel], ['DeleteLogProfilePayload', () => DeleteLogProfilePayloadModel], ['AdminWorkLogAggregateResult', () => AdminWorkLogAggregateResultModel], ['OrthopaedicsProcedureLogAggregateResult', () => OrthopaedicsProcedureLogAggregateResultModel], ['MultiPolygon', () => MultiPolygonModel], ['AddAnaesthesiaCriticalCareCaseLogPayload', () => AddAnaesthesiaCriticalCareCaseLogPayloadModel], ['AddLogProfilePayload', () => AddLogProfilePayloadModel], ['AddUserPayload', () => AddUserPayloadModel], ['UpdateRotationPayload', () => UpdateRotationPayloadModel], ['UpdateUserPayload', () => UpdateUserPayloadModel], ['UpdatePublicationLogPayload', () => UpdatePublicationLogPayloadModel], ['UpdateThesisCasePayload', () => UpdateThesisCasePayloadModel], ['AddAdminWorkLogPayload', () => AddAdminWorkLogPayloadModel], ['AnaesthesiaCaseLogAggregateResult', () => AnaesthesiaCaseLogAggregateResultModel], ['DeleteCustomCasePayload', () => DeleteCustomCasePayloadModel], ['UpdateHospitalsPayload', () => UpdateHospitalsPayloadModel], ['UpdateOrthodonticsPreClinicalPayload', () => UpdateOrthodonticsPreClinicalPayloadModel], ['UpdateOrthopaedicsProcedureLogPayload', () => UpdateOrthopaedicsProcedureLogPayloadModel], ['ThesisCase', () => ThesisCaseModel], ['FormLabels', () => FormLabelsModel], ['AddOrthopaedicsCaseLogPayload', () => AddOrthopaedicsCaseLogPayloadModel], ['AnaesthesiaChronicPainLogAggregateResult', () => AnaesthesiaChronicPainLogAggregateResultModel], ['ThesisLogAggregateResult', () => ThesisLogAggregateResultModel], ['Rotation', () => RotationModel], ['OrthopaedicsCaseLogAggregateResult', () => OrthopaedicsCaseLogAggregateResultModel], ['UpdateThesisLogPayload', () => UpdateThesisLogPayloadModel], ['DeleteAcademicLogPayload', () => DeleteAcademicLogPayloadModel], ['FormLabelsAggregateResult', () => FormLabelsAggregateResultModel], ['UpdateFormLabelsPayload', () => UpdateFormLabelsPayloadModel], ['Fields', () => FieldsModel], ['OralRadiology', () => OralRadiologyModel], ['AddCustomCasePayload', () => AddCustomCasePayloadModel], ['UpdateOralRadiologyPayload', () => UpdateOralRadiologyPayloadModel], ['DeleteUserFeedbackPayload', () => DeleteUserFeedbackPayloadModel], ['UpdateAcademicLogPayload', () => UpdateAcademicLogPayloadModel], ['CustomLog', () => CustomLogModel], ['AddAnaesthesiaChronicPainLogPayload', () => AddAnaesthesiaChronicPainLogPayloadModel], ['DeleteCustomLogPayload', () => DeleteCustomLogPayloadModel], ['HospitalsAggregateResult', () => HospitalsAggregateResultModel], ['RotationAggregateResult', () => RotationAggregateResultModel], ['DeletePublicationLogPayload', () => DeletePublicationLogPayloadModel], ['AddThesisLogPayload', () => AddThesisLogPayloadModel], ['OralMedicineAndRadiologyCaseLog', () => OralMedicineAndRadiologyCaseLogModel], ['AddHospitalsPayload', () => AddHospitalsPayloadModel], ['AddOralMedicineAndRadiologyCaseLogPayload', () => AddOralMedicineAndRadiologyCaseLogPayloadModel]], ['OrthodonticsPreClinical', 'OrthopaedicsCaseLog', 'Hospitals', 'PublicationLog', 'OrthodonticsClinicalCaseLog', 'AnaesthesiaCaseLog', 'ThesisLog', 'CustomCase', 'AcademicLog', 'AnaesthesiaChronicPainLog', 'AdminWorkLog', 'AnaesthesiaCriticalCareCaseLog', 'Faculty', 'User', 'UserFeedback', 'OrthopaedicsProcedureLog', 'LogProfile', 'ThesisCase', 'FormLabels', 'Rotation', 'Fields', 'OralRadiology', 'CustomLog', 'OralMedicineAndRadiologyCaseLog'], "js"))
  .props({
    orthodonticsPreClinicals: types.optional(types.map(types.late((): any => OrthodonticsPreClinicalModel)), {}),
    orthopaedicsCaseLogs: types.optional(types.map(types.late((): any => OrthopaedicsCaseLogModel)), {}),
    hospitals: types.optional(types.map(types.late((): any => HospitalsModel)), {}),
    publicationLogs: types.optional(types.map(types.late((): any => PublicationLogModel)), {}),
    orthodonticsClinicalCaseLogs: types.optional(types.map(types.late((): any => OrthodonticsClinicalCaseLogModel)), {}),
    anaesthesiaCaseLogs: types.optional(types.map(types.late((): any => AnaesthesiaCaseLogModel)), {}),
    thesisLogs: types.optional(types.map(types.late((): any => ThesisLogModel)), {}),
    customCases: types.optional(types.map(types.late((): any => CustomCaseModel)), {}),
    academicLogs: types.optional(types.map(types.late((): any => AcademicLogModel)), {}),
    anaesthesiaChronicPainLogs: types.optional(types.map(types.late((): any => AnaesthesiaChronicPainLogModel)), {}),
    adminWorkLogs: types.optional(types.map(types.late((): any => AdminWorkLogModel)), {}),
    anaesthesiaCriticalCareCaseLogs: types.optional(types.map(types.late((): any => AnaesthesiaCriticalCareCaseLogModel)), {}),
    faculties: types.optional(types.map(types.late((): any => FacultyModel)), {}),
    users: types.optional(types.map(types.late((): any => UserModel)), {}),
    userFeedbacks: types.optional(types.map(types.late((): any => UserFeedbackModel)), {}),
    orthopaedicsProcedureLogs: types.optional(types.map(types.late((): any => OrthopaedicsProcedureLogModel)), {}),
    logProfiles: types.optional(types.map(types.late((): any => LogProfileModel)), {}),
    thesisCases: types.optional(types.map(types.late((): any => ThesisCaseModel)), {}),
    formLabels: types.optional(types.map(types.late((): any => FormLabelsModel)), {}),
    rotations: types.optional(types.map(types.late((): any => RotationModel)), {}),
    fields: types.optional(types.map(types.late((): any => FieldsModel)), {}),
    oralRadiologies: types.optional(types.map(types.late((): any => OralRadiologyModel)), {}),
    customLogs: types.optional(types.map(types.late((): any => CustomLogModel)), {}),
    oralMedicineAndRadiologyCaseLogs: types.optional(types.map(types.late((): any => OralMedicineAndRadiologyCaseLogModel)), {})
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
    queryGetUserFeedback(variables: { id: string }, resultSelector: string | ((qb: UserFeedbackModelSelector) => UserFeedbackModelSelector) = userFeedbackModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getUserFeedback: UserFeedbackModelType }>(`query getUserFeedback($id: ID!) { getUserFeedback(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UserFeedbackModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryUserFeedback(variables: { filter?: (UserFeedbackFilter | null), order?: (UserFeedbackOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: UserFeedbackModelSelector) => UserFeedbackModelSelector) = userFeedbackModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryUserFeedback: UserFeedbackModelType[] }>(`query queryUserFeedback($filter: UserFeedbackFilter, $order: UserFeedbackOrder, $first: Int, $offset: Int) { queryUserFeedback(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new UserFeedbackModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateUserFeedback(variables: { filter?: (UserFeedbackFilter | null) }, resultSelector: string | ((qb: UserFeedbackAggregateResultModelSelector) => UserFeedbackAggregateResultModelSelector) = userFeedbackAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateUserFeedback: UserFeedbackAggregateResultModelType }>(`query aggregateUserFeedback($filter: UserFeedbackFilter) { aggregateUserFeedback(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new UserFeedbackAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetThesisLog(variables: { id: string }, resultSelector: string | ((qb: ThesisLogModelSelector) => ThesisLogModelSelector) = thesisLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getThesisLog: ThesisLogModelType }>(`query getThesisLog($id: ID!) { getThesisLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ThesisLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryThesisLog(variables: { filter?: (ThesisLogFilter | null), order?: (ThesisLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: ThesisLogModelSelector) => ThesisLogModelSelector) = thesisLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryThesisLog: ThesisLogModelType[] }>(`query queryThesisLog($filter: ThesisLogFilter, $order: ThesisLogOrder, $first: Int, $offset: Int) { queryThesisLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new ThesisLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateThesisLog(variables: { filter?: (ThesisLogFilter | null) }, resultSelector: string | ((qb: ThesisLogAggregateResultModelSelector) => ThesisLogAggregateResultModelSelector) = thesisLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateThesisLog: ThesisLogAggregateResultModelType }>(`query aggregateThesisLog($filter: ThesisLogFilter) { aggregateThesisLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new ThesisLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetCustomLog(variables: { id: string }, resultSelector: string | ((qb: CustomLogModelSelector) => CustomLogModelSelector) = customLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCustomLog: CustomLogModelType }>(`query getCustomLog($id: ID!) { getCustomLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryCustomLog(variables: { filter?: (CustomLogFilter | null), order?: (CustomLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: CustomLogModelSelector) => CustomLogModelSelector) = customLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryCustomLog: CustomLogModelType[] }>(`query queryCustomLog($filter: CustomLogFilter, $order: CustomLogOrder, $first: Int, $offset: Int) { queryCustomLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateCustomLog(variables: { filter?: (CustomLogFilter | null) }, resultSelector: string | ((qb: CustomLogAggregateResultModelSelector) => CustomLogAggregateResultModelSelector) = customLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateCustomLog: CustomLogAggregateResultModelType }>(`query aggregateCustomLog($filter: CustomLogFilter) { aggregateCustomLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetFormLabels(variables: { id: string }, resultSelector: string | ((qb: FormLabelsModelSelector) => FormLabelsModelSelector) = formLabelsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFormLabels: FormLabelsModelType }>(`query getFormLabels($id: ID!) { getFormLabels(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new FormLabelsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryFormLabels(variables: { filter?: (FormLabelsFilter | null), order?: (FormLabelsOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: FormLabelsModelSelector) => FormLabelsModelSelector) = formLabelsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryFormLabels: FormLabelsModelType[] }>(`query queryFormLabels($filter: FormLabelsFilter, $order: FormLabelsOrder, $first: Int, $offset: Int) { queryFormLabels(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new FormLabelsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateFormLabels(variables: { filter?: (FormLabelsFilter | null) }, resultSelector: string | ((qb: FormLabelsAggregateResultModelSelector) => FormLabelsAggregateResultModelSelector) = formLabelsAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateFormLabels: FormLabelsAggregateResultModelType }>(`query aggregateFormLabels($filter: FormLabelsFilter) { aggregateFormLabels(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new FormLabelsAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetFields(variables: { id: string }, resultSelector: string | ((qb: FieldsModelSelector) => FieldsModelSelector) = fieldsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getFields: FieldsModelType }>(`query getFields($id: ID!) { getFields(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new FieldsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryFields(variables: { filter?: (FieldsFilter | null), order?: (FieldsOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: FieldsModelSelector) => FieldsModelSelector) = fieldsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryFields: FieldsModelType[] }>(`query queryFields($filter: FieldsFilter, $order: FieldsOrder, $first: Int, $offset: Int) { queryFields(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new FieldsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateFields(variables: { filter?: (FieldsFilter | null) }, resultSelector: string | ((qb: FieldsAggregateResultModelSelector) => FieldsAggregateResultModelSelector) = fieldsAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateFields: FieldsAggregateResultModelType }>(`query aggregateFields($filter: FieldsFilter) { aggregateFields(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new FieldsAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetThesisCase(variables: { id: string }, resultSelector: string | ((qb: ThesisCaseModelSelector) => ThesisCaseModelSelector) = thesisCaseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getThesisCase: ThesisCaseModelType }>(`query getThesisCase($id: ID!) { getThesisCase(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ThesisCaseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryThesisCase(variables: { filter?: (ThesisCaseFilter | null), order?: (ThesisCaseOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: ThesisCaseModelSelector) => ThesisCaseModelSelector) = thesisCaseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryThesisCase: ThesisCaseModelType[] }>(`query queryThesisCase($filter: ThesisCaseFilter, $order: ThesisCaseOrder, $first: Int, $offset: Int) { queryThesisCase(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new ThesisCaseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateThesisCase(variables: { filter?: (ThesisCaseFilter | null) }, resultSelector: string | ((qb: ThesisCaseAggregateResultModelSelector) => ThesisCaseAggregateResultModelSelector) = thesisCaseAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateThesisCase: ThesisCaseAggregateResultModelType }>(`query aggregateThesisCase($filter: ThesisCaseFilter) { aggregateThesisCase(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new ThesisCaseAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetCustomCase(variables: { id: string }, resultSelector: string | ((qb: CustomCaseModelSelector) => CustomCaseModelSelector) = customCaseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getCustomCase: CustomCaseModelType }>(`query getCustomCase($id: ID!) { getCustomCase(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomCaseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryCustomCase(variables: { filter?: (CustomCaseFilter | null), order?: (CustomCaseOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: CustomCaseModelSelector) => CustomCaseModelSelector) = customCaseModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryCustomCase: CustomCaseModelType[] }>(`query queryCustomCase($filter: CustomCaseFilter, $order: CustomCaseOrder, $first: Int, $offset: Int) { queryCustomCase(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomCaseModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateCustomCase(variables: { filter?: (CustomCaseFilter | null) }, resultSelector: string | ((qb: CustomCaseAggregateResultModelSelector) => CustomCaseAggregateResultModelSelector) = customCaseAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateCustomCase: CustomCaseAggregateResultModelType }>(`query aggregateCustomCase($filter: CustomCaseFilter) { aggregateCustomCase(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new CustomCaseAggregateResultModelSelector()).toString() : resultSelector}
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
    queryGetOralMedicineAndRadiologyCaseLog(variables: { id: string }, resultSelector: string | ((qb: OralMedicineAndRadiologyCaseLogModelSelector) => OralMedicineAndRadiologyCaseLogModelSelector) = oralMedicineAndRadiologyCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOralMedicineAndRadiologyCaseLog: OralMedicineAndRadiologyCaseLogModelType }>(`query getOralMedicineAndRadiologyCaseLog($id: ID!) { getOralMedicineAndRadiologyCaseLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OralMedicineAndRadiologyCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryOralMedicineAndRadiologyCaseLog(variables: { filter?: (OralMedicineAndRadiologyCaseLogFilter | null), order?: (OralMedicineAndRadiologyCaseLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: OralMedicineAndRadiologyCaseLogModelSelector) => OralMedicineAndRadiologyCaseLogModelSelector) = oralMedicineAndRadiologyCaseLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryOralMedicineAndRadiologyCaseLog: OralMedicineAndRadiologyCaseLogModelType[] }>(`query queryOralMedicineAndRadiologyCaseLog($filter: OralMedicineAndRadiologyCaseLogFilter, $order: OralMedicineAndRadiologyCaseLogOrder, $first: Int, $offset: Int) { queryOralMedicineAndRadiologyCaseLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new OralMedicineAndRadiologyCaseLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateOralMedicineAndRadiologyCaseLog(variables: { filter?: (OralMedicineAndRadiologyCaseLogFilter | null) }, resultSelector: string | ((qb: OralMedicineAndRadiologyCaseLogAggregateResultModelSelector) => OralMedicineAndRadiologyCaseLogAggregateResultModelSelector) = oralMedicineAndRadiologyCaseLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateOralMedicineAndRadiologyCaseLog: OralMedicineAndRadiologyCaseLogAggregateResultModelType }>(`query aggregateOralMedicineAndRadiologyCaseLog($filter: OralMedicineAndRadiologyCaseLogFilter) { aggregateOralMedicineAndRadiologyCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new OralMedicineAndRadiologyCaseLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetOralRadiology(variables: { id: string }, resultSelector: string | ((qb: OralRadiologyModelSelector) => OralRadiologyModelSelector) = oralRadiologyModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getOralRadiology: OralRadiologyModelType }>(`query getOralRadiology($id: ID!) { getOralRadiology(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OralRadiologyModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryOralRadiology(variables: { filter?: (OralRadiologyFilter | null), order?: (OralRadiologyOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: OralRadiologyModelSelector) => OralRadiologyModelSelector) = oralRadiologyModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryOralRadiology: OralRadiologyModelType[] }>(`query queryOralRadiology($filter: OralRadiologyFilter, $order: OralRadiologyOrder, $first: Int, $offset: Int) { queryOralRadiology(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new OralRadiologyModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateOralRadiology(variables: { filter?: (OralRadiologyFilter | null) }, resultSelector: string | ((qb: OralRadiologyAggregateResultModelSelector) => OralRadiologyAggregateResultModelSelector) = oralRadiologyAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateOralRadiology: OralRadiologyAggregateResultModelType }>(`query aggregateOralRadiology($filter: OralRadiologyFilter) { aggregateOralRadiology(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new OralRadiologyAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetAcademicLog(variables: { id: string }, resultSelector: string | ((qb: AcademicLogModelSelector) => AcademicLogModelSelector) = academicLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getAcademicLog: AcademicLogModelType }>(`query getAcademicLog($id: ID!) { getAcademicLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AcademicLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryAcademicLog(variables: { filter?: (AcademicLogFilter | null), order?: (AcademicLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: AcademicLogModelSelector) => AcademicLogModelSelector) = academicLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryAcademicLog: AcademicLogModelType[] }>(`query queryAcademicLog($filter: AcademicLogFilter, $order: AcademicLogOrder, $first: Int, $offset: Int) { queryAcademicLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new AcademicLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateAcademicLog(variables: { filter?: (AcademicLogFilter | null) }, resultSelector: string | ((qb: AcademicLogAggregateResultModelSelector) => AcademicLogAggregateResultModelSelector) = academicLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateAcademicLog: AcademicLogAggregateResultModelType }>(`query aggregateAcademicLog($filter: AcademicLogFilter) { aggregateAcademicLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new AcademicLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetPublicationLog(variables: { id: string }, resultSelector: string | ((qb: PublicationLogModelSelector) => PublicationLogModelSelector) = publicationLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getPublicationLog: PublicationLogModelType }>(`query getPublicationLog($id: ID!) { getPublicationLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PublicationLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryPublicationLog(variables: { filter?: (PublicationLogFilter | null), order?: (PublicationLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: PublicationLogModelSelector) => PublicationLogModelSelector) = publicationLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryPublicationLog: PublicationLogModelType[] }>(`query queryPublicationLog($filter: PublicationLogFilter, $order: PublicationLogOrder, $first: Int, $offset: Int) { queryPublicationLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new PublicationLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregatePublicationLog(variables: { filter?: (PublicationLogFilter | null) }, resultSelector: string | ((qb: PublicationLogAggregateResultModelSelector) => PublicationLogAggregateResultModelSelector) = publicationLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregatePublicationLog: PublicationLogAggregateResultModelType }>(`query aggregatePublicationLog($filter: PublicationLogFilter) { aggregatePublicationLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new PublicationLogAggregateResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetAdminWorkLog(variables: { id: string }, resultSelector: string | ((qb: AdminWorkLogModelSelector) => AdminWorkLogModelSelector) = adminWorkLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getAdminWorkLog: AdminWorkLogModelType }>(`query getAdminWorkLog($id: ID!) { getAdminWorkLog(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new AdminWorkLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryQueryAdminWorkLog(variables: { filter?: (AdminWorkLogFilter | null), order?: (AdminWorkLogOrder | null), first?: (number | null), offset?: (number | null) }, resultSelector: string | ((qb: AdminWorkLogModelSelector) => AdminWorkLogModelSelector) = adminWorkLogModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ queryAdminWorkLog: AdminWorkLogModelType[] }>(`query queryAdminWorkLog($filter: AdminWorkLogFilter, $order: AdminWorkLogOrder, $first: Int, $offset: Int) { queryAdminWorkLog(filter: $filter, order: $order, first: $first, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new AdminWorkLogModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryAggregateAdminWorkLog(variables: { filter?: (AdminWorkLogFilter | null) }, resultSelector: string | ((qb: AdminWorkLogAggregateResultModelSelector) => AdminWorkLogAggregateResultModelSelector) = adminWorkLogAggregateResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ aggregateAdminWorkLog: AdminWorkLogAggregateResultModelType }>(`query aggregateAdminWorkLog($filter: AdminWorkLogFilter) { aggregateAdminWorkLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new AdminWorkLogAggregateResultModelSelector()).toString() : resultSelector}
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
    mutateAddUserFeedback(variables: { input: AddUserFeedbackInput[] }, resultSelector: string | ((qb: AddUserFeedbackPayloadModelSelector) => AddUserFeedbackPayloadModelSelector) = addUserFeedbackPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addUserFeedback: AddUserFeedbackPayloadModelType }>(`mutation addUserFeedback($input: [AddUserFeedbackInput!]!) { addUserFeedback(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddUserFeedbackPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateUserFeedback(variables: { input: UpdateUserFeedbackInput }, resultSelector: string | ((qb: UpdateUserFeedbackPayloadModelSelector) => UpdateUserFeedbackPayloadModelSelector) = updateUserFeedbackPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateUserFeedback: UpdateUserFeedbackPayloadModelType }>(`mutation updateUserFeedback($input: UpdateUserFeedbackInput!) { updateUserFeedback(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateUserFeedbackPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteUserFeedback(variables: { filter: UserFeedbackFilter }, resultSelector: string | ((qb: DeleteUserFeedbackPayloadModelSelector) => DeleteUserFeedbackPayloadModelSelector) = deleteUserFeedbackPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteUserFeedback: DeleteUserFeedbackPayloadModelType }>(`mutation deleteUserFeedback($filter: UserFeedbackFilter!) { deleteUserFeedback(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteUserFeedbackPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddThesisLog(variables: { input: AddThesisLogInput[] }, resultSelector: string | ((qb: AddThesisLogPayloadModelSelector) => AddThesisLogPayloadModelSelector) = addThesisLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addThesisLog: AddThesisLogPayloadModelType }>(`mutation addThesisLog($input: [AddThesisLogInput!]!) { addThesisLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddThesisLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateThesisLog(variables: { input: UpdateThesisLogInput }, resultSelector: string | ((qb: UpdateThesisLogPayloadModelSelector) => UpdateThesisLogPayloadModelSelector) = updateThesisLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateThesisLog: UpdateThesisLogPayloadModelType }>(`mutation updateThesisLog($input: UpdateThesisLogInput!) { updateThesisLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateThesisLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteThesisLog(variables: { filter: ThesisLogFilter }, resultSelector: string | ((qb: DeleteThesisLogPayloadModelSelector) => DeleteThesisLogPayloadModelSelector) = deleteThesisLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteThesisLog: DeleteThesisLogPayloadModelType }>(`mutation deleteThesisLog($filter: ThesisLogFilter!) { deleteThesisLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteThesisLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddCustomLog(variables: { input: AddCustomLogInput[] }, resultSelector: string | ((qb: AddCustomLogPayloadModelSelector) => AddCustomLogPayloadModelSelector) = addCustomLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addCustomLog: AddCustomLogPayloadModelType }>(`mutation addCustomLog($input: [AddCustomLogInput!]!) { addCustomLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddCustomLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCustomLog(variables: { input: UpdateCustomLogInput }, resultSelector: string | ((qb: UpdateCustomLogPayloadModelSelector) => UpdateCustomLogPayloadModelSelector) = updateCustomLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCustomLog: UpdateCustomLogPayloadModelType }>(`mutation updateCustomLog($input: UpdateCustomLogInput!) { updateCustomLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateCustomLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteCustomLog(variables: { filter: CustomLogFilter }, resultSelector: string | ((qb: DeleteCustomLogPayloadModelSelector) => DeleteCustomLogPayloadModelSelector) = deleteCustomLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCustomLog: DeleteCustomLogPayloadModelType }>(`mutation deleteCustomLog($filter: CustomLogFilter!) { deleteCustomLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteCustomLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddFormLabels(variables: { input: AddFormLabelsInput[] }, resultSelector: string | ((qb: AddFormLabelsPayloadModelSelector) => AddFormLabelsPayloadModelSelector) = addFormLabelsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addFormLabels: AddFormLabelsPayloadModelType }>(`mutation addFormLabels($input: [AddFormLabelsInput!]!) { addFormLabels(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddFormLabelsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFormLabels(variables: { input: UpdateFormLabelsInput }, resultSelector: string | ((qb: UpdateFormLabelsPayloadModelSelector) => UpdateFormLabelsPayloadModelSelector) = updateFormLabelsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFormLabels: UpdateFormLabelsPayloadModelType }>(`mutation updateFormLabels($input: UpdateFormLabelsInput!) { updateFormLabels(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateFormLabelsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteFormLabels(variables: { filter: FormLabelsFilter }, resultSelector: string | ((qb: DeleteFormLabelsPayloadModelSelector) => DeleteFormLabelsPayloadModelSelector) = deleteFormLabelsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteFormLabels: DeleteFormLabelsPayloadModelType }>(`mutation deleteFormLabels($filter: FormLabelsFilter!) { deleteFormLabels(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteFormLabelsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddFields(variables: { input: AddFieldsInput[] }, resultSelector: string | ((qb: AddFieldsPayloadModelSelector) => AddFieldsPayloadModelSelector) = addFieldsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addFields: AddFieldsPayloadModelType }>(`mutation addFields($input: [AddFieldsInput!]!) { addFields(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddFieldsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateFields(variables: { input: UpdateFieldsInput }, resultSelector: string | ((qb: UpdateFieldsPayloadModelSelector) => UpdateFieldsPayloadModelSelector) = updateFieldsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateFields: UpdateFieldsPayloadModelType }>(`mutation updateFields($input: UpdateFieldsInput!) { updateFields(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateFieldsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteFields(variables: { filter: FieldsFilter }, resultSelector: string | ((qb: DeleteFieldsPayloadModelSelector) => DeleteFieldsPayloadModelSelector) = deleteFieldsPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteFields: DeleteFieldsPayloadModelType }>(`mutation deleteFields($filter: FieldsFilter!) { deleteFields(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteFieldsPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddThesisCase(variables: { input: AddThesisCaseInput[] }, resultSelector: string | ((qb: AddThesisCasePayloadModelSelector) => AddThesisCasePayloadModelSelector) = addThesisCasePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addThesisCase: AddThesisCasePayloadModelType }>(`mutation addThesisCase($input: [AddThesisCaseInput!]!) { addThesisCase(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddThesisCasePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateThesisCase(variables: { input: UpdateThesisCaseInput }, resultSelector: string | ((qb: UpdateThesisCasePayloadModelSelector) => UpdateThesisCasePayloadModelSelector) = updateThesisCasePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateThesisCase: UpdateThesisCasePayloadModelType }>(`mutation updateThesisCase($input: UpdateThesisCaseInput!) { updateThesisCase(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateThesisCasePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteThesisCase(variables: { filter: ThesisCaseFilter }, resultSelector: string | ((qb: DeleteThesisCasePayloadModelSelector) => DeleteThesisCasePayloadModelSelector) = deleteThesisCasePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteThesisCase: DeleteThesisCasePayloadModelType }>(`mutation deleteThesisCase($filter: ThesisCaseFilter!) { deleteThesisCase(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteThesisCasePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddCustomCase(variables: { input: AddCustomCaseInput[] }, resultSelector: string | ((qb: AddCustomCasePayloadModelSelector) => AddCustomCasePayloadModelSelector) = addCustomCasePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addCustomCase: AddCustomCasePayloadModelType }>(`mutation addCustomCase($input: [AddCustomCaseInput!]!) { addCustomCase(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddCustomCasePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateCustomCase(variables: { input: UpdateCustomCaseInput }, resultSelector: string | ((qb: UpdateCustomCasePayloadModelSelector) => UpdateCustomCasePayloadModelSelector) = updateCustomCasePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateCustomCase: UpdateCustomCasePayloadModelType }>(`mutation updateCustomCase($input: UpdateCustomCaseInput!) { updateCustomCase(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateCustomCasePayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteCustomCase(variables: { filter: CustomCaseFilter }, resultSelector: string | ((qb: DeleteCustomCasePayloadModelSelector) => DeleteCustomCasePayloadModelSelector) = deleteCustomCasePayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteCustomCase: DeleteCustomCasePayloadModelType }>(`mutation deleteCustomCase($filter: CustomCaseFilter!) { deleteCustomCase(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteCustomCasePayloadModelSelector()).toString() : resultSelector}
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
    mutateAddOralMedicineAndRadiologyCaseLog(variables: { input: AddOralMedicineAndRadiologyCaseLogInput[] }, resultSelector: string | ((qb: AddOralMedicineAndRadiologyCaseLogPayloadModelSelector) => AddOralMedicineAndRadiologyCaseLogPayloadModelSelector) = addOralMedicineAndRadiologyCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addOralMedicineAndRadiologyCaseLog: AddOralMedicineAndRadiologyCaseLogPayloadModelType }>(`mutation addOralMedicineAndRadiologyCaseLog($input: [AddOralMedicineAndRadiologyCaseLogInput!]!) { addOralMedicineAndRadiologyCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddOralMedicineAndRadiologyCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOralMedicineAndRadiologyCaseLog(variables: { input: UpdateOralMedicineAndRadiologyCaseLogInput }, resultSelector: string | ((qb: UpdateOralMedicineAndRadiologyCaseLogPayloadModelSelector) => UpdateOralMedicineAndRadiologyCaseLogPayloadModelSelector) = updateOralMedicineAndRadiologyCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOralMedicineAndRadiologyCaseLog: UpdateOralMedicineAndRadiologyCaseLogPayloadModelType }>(`mutation updateOralMedicineAndRadiologyCaseLog($input: UpdateOralMedicineAndRadiologyCaseLogInput!) { updateOralMedicineAndRadiologyCaseLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateOralMedicineAndRadiologyCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOralMedicineAndRadiologyCaseLog(variables: { filter: OralMedicineAndRadiologyCaseLogFilter }, resultSelector: string | ((qb: DeleteOralMedicineAndRadiologyCaseLogPayloadModelSelector) => DeleteOralMedicineAndRadiologyCaseLogPayloadModelSelector) = deleteOralMedicineAndRadiologyCaseLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOralMedicineAndRadiologyCaseLog: DeleteOralMedicineAndRadiologyCaseLogPayloadModelType }>(`mutation deleteOralMedicineAndRadiologyCaseLog($filter: OralMedicineAndRadiologyCaseLogFilter!) { deleteOralMedicineAndRadiologyCaseLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteOralMedicineAndRadiologyCaseLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddOralRadiology(variables: { input: AddOralRadiologyInput[] }, resultSelector: string | ((qb: AddOralRadiologyPayloadModelSelector) => AddOralRadiologyPayloadModelSelector) = addOralRadiologyPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addOralRadiology: AddOralRadiologyPayloadModelType }>(`mutation addOralRadiology($input: [AddOralRadiologyInput!]!) { addOralRadiology(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddOralRadiologyPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateOralRadiology(variables: { input: UpdateOralRadiologyInput }, resultSelector: string | ((qb: UpdateOralRadiologyPayloadModelSelector) => UpdateOralRadiologyPayloadModelSelector) = updateOralRadiologyPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateOralRadiology: UpdateOralRadiologyPayloadModelType }>(`mutation updateOralRadiology($input: UpdateOralRadiologyInput!) { updateOralRadiology(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateOralRadiologyPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteOralRadiology(variables: { filter: OralRadiologyFilter }, resultSelector: string | ((qb: DeleteOralRadiologyPayloadModelSelector) => DeleteOralRadiologyPayloadModelSelector) = deleteOralRadiologyPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteOralRadiology: DeleteOralRadiologyPayloadModelType }>(`mutation deleteOralRadiology($filter: OralRadiologyFilter!) { deleteOralRadiology(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteOralRadiologyPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddAcademicLog(variables: { input: AddAcademicLogInput[] }, resultSelector: string | ((qb: AddAcademicLogPayloadModelSelector) => AddAcademicLogPayloadModelSelector) = addAcademicLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addAcademicLog: AddAcademicLogPayloadModelType }>(`mutation addAcademicLog($input: [AddAcademicLogInput!]!) { addAcademicLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddAcademicLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAcademicLog(variables: { input: UpdateAcademicLogInput }, resultSelector: string | ((qb: UpdateAcademicLogPayloadModelSelector) => UpdateAcademicLogPayloadModelSelector) = updateAcademicLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAcademicLog: UpdateAcademicLogPayloadModelType }>(`mutation updateAcademicLog($input: UpdateAcademicLogInput!) { updateAcademicLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAcademicLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteAcademicLog(variables: { filter: AcademicLogFilter }, resultSelector: string | ((qb: DeleteAcademicLogPayloadModelSelector) => DeleteAcademicLogPayloadModelSelector) = deleteAcademicLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAcademicLog: DeleteAcademicLogPayloadModelType }>(`mutation deleteAcademicLog($filter: AcademicLogFilter!) { deleteAcademicLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteAcademicLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddPublicationLog(variables: { input: AddPublicationLogInput[] }, resultSelector: string | ((qb: AddPublicationLogPayloadModelSelector) => AddPublicationLogPayloadModelSelector) = addPublicationLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addPublicationLog: AddPublicationLogPayloadModelType }>(`mutation addPublicationLog($input: [AddPublicationLogInput!]!) { addPublicationLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddPublicationLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdatePublicationLog(variables: { input: UpdatePublicationLogInput }, resultSelector: string | ((qb: UpdatePublicationLogPayloadModelSelector) => UpdatePublicationLogPayloadModelSelector) = updatePublicationLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updatePublicationLog: UpdatePublicationLogPayloadModelType }>(`mutation updatePublicationLog($input: UpdatePublicationLogInput!) { updatePublicationLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdatePublicationLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeletePublicationLog(variables: { filter: PublicationLogFilter }, resultSelector: string | ((qb: DeletePublicationLogPayloadModelSelector) => DeletePublicationLogPayloadModelSelector) = deletePublicationLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deletePublicationLog: DeletePublicationLogPayloadModelType }>(`mutation deletePublicationLog($filter: PublicationLogFilter!) { deletePublicationLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeletePublicationLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateAddAdminWorkLog(variables: { input: AddAdminWorkLogInput[] }, resultSelector: string | ((qb: AddAdminWorkLogPayloadModelSelector) => AddAdminWorkLogPayloadModelSelector) = addAdminWorkLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ addAdminWorkLog: AddAdminWorkLogPayloadModelType }>(`mutation addAdminWorkLog($input: [AddAdminWorkLogInput!]!) { addAdminWorkLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new AddAdminWorkLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateUpdateAdminWorkLog(variables: { input: UpdateAdminWorkLogInput }, resultSelector: string | ((qb: UpdateAdminWorkLogPayloadModelSelector) => UpdateAdminWorkLogPayloadModelSelector) = updateAdminWorkLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ updateAdminWorkLog: UpdateAdminWorkLogPayloadModelType }>(`mutation updateAdminWorkLog($input: UpdateAdminWorkLogInput!) { updateAdminWorkLog(input: $input) {
        ${typeof resultSelector === "function" ? resultSelector(new UpdateAdminWorkLogPayloadModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateDeleteAdminWorkLog(variables: { filter: AdminWorkLogFilter }, resultSelector: string | ((qb: DeleteAdminWorkLogPayloadModelSelector) => DeleteAdminWorkLogPayloadModelSelector) = deleteAdminWorkLogPayloadModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ deleteAdminWorkLog: DeleteAdminWorkLogPayloadModelType }>(`mutation deleteAdminWorkLog($filter: AdminWorkLogFilter!) { deleteAdminWorkLog(filter: $filter) {
        ${typeof resultSelector === "function" ? resultSelector(new DeleteAdminWorkLogPayloadModelSelector()).toString() : resultSelector}
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
