/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AnaesthesiaCaseLogBase
 * auto generated base class for the model AnaesthesiaCaseLogModel.
 */
export const AnaesthesiaCaseLogModelBase = ModelBase
  .named('AnaesthesiaCaseLog')
  .props({
    __typename: types.optional(types.literal("AnaesthesiaCaseLog"), "AnaesthesiaCaseLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    date: types.union(types.undefined, types.null, types.frozen()),
    rotation: types.union(types.undefined, types.null, types.string),
    hospital: types.union(types.undefined, types.null, types.string),
    faculty: types.union(types.undefined, types.null, types.string),
    patientAge: types.union(types.undefined, types.null, types.string),
    patientSex: types.union(types.undefined, types.null, types.string),
    weight: types.union(types.undefined, types.null, types.string),
    height: types.union(types.undefined, types.null, types.string),
    diagnosis: types.union(types.undefined, types.null, types.string),
    surgicalProcedure: types.union(types.undefined, types.null, types.string),
    speciality: types.union(types.undefined, types.null, types.string),
    asaGrade: types.union(types.undefined, types.null, types.string),
    typeOfSurgery: types.union(types.undefined, types.null, types.string),
    npo: types.union(types.undefined, types.null, types.string),
    comorbidity: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    examination: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    laboratoryFindings: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    medicalRegistrationNumber: types.union(types.undefined, types.null, types.string),
    typeOfAnaesthesia: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    drugsUsed: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    airManagement: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    regionalTechniques: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    interventionalProcedures: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    monitoring: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    complications: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    outcome: types.union(types.undefined, types.null, types.string),
    caseType: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AnaesthesiaCaseLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get date() { return this.__attr(`date`) }
  get rotation() { return this.__attr(`rotation`) }
  get hospital() { return this.__attr(`hospital`) }
  get faculty() { return this.__attr(`faculty`) }
  get patientAge() { return this.__attr(`patientAge`) }
  get patientSex() { return this.__attr(`patientSex`) }
  get weight() { return this.__attr(`weight`) }
  get height() { return this.__attr(`height`) }
  get diagnosis() { return this.__attr(`diagnosis`) }
  get surgicalProcedure() { return this.__attr(`surgicalProcedure`) }
  get speciality() { return this.__attr(`speciality`) }
  get asaGrade() { return this.__attr(`asaGrade`) }
  get typeOfSurgery() { return this.__attr(`typeOfSurgery`) }
  get npo() { return this.__attr(`npo`) }
  get comorbidity() { return this.__attr(`comorbidity`) }
  get examination() { return this.__attr(`examination`) }
  get laboratoryFindings() { return this.__attr(`laboratoryFindings`) }
  get medicalRegistrationNumber() { return this.__attr(`medicalRegistrationNumber`) }
  get typeOfAnaesthesia() { return this.__attr(`typeOfAnaesthesia`) }
  get drugsUsed() { return this.__attr(`drugsUsed`) }
  get airManagement() { return this.__attr(`airManagement`) }
  get regionalTechniques() { return this.__attr(`regionalTechniques`) }
  get interventionalProcedures() { return this.__attr(`interventionalProcedures`) }
  get monitoring() { return this.__attr(`monitoring`) }
  get complications() { return this.__attr(`complications`) }
  get outcome() { return this.__attr(`outcome`) }
  get caseType() { return this.__attr(`caseType`) }
}
export function selectFromAnaesthesiaCaseLog() {
  return new AnaesthesiaCaseLogModelSelector()
}

export const anaesthesiaCaseLogModelPrimitives = selectFromAnaesthesiaCaseLog().createdOn.updatedOn.date.rotation.hospital.faculty.patientAge.patientSex.weight.height.diagnosis.surgicalProcedure.speciality.asaGrade.typeOfSurgery.npo.comorbidity.examination.laboratoryFindings.medicalRegistrationNumber.typeOfAnaesthesia.drugsUsed.airManagement.regionalTechniques.interventionalProcedures.monitoring.complications.outcome.caseType
