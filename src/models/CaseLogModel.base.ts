/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AnaesthesiaCaseLogModel, AnaesthesiaCaseLogModelType } from "./AnaesthesiaCaseLogModel"
import { AnaesthesiaCaseLogModelSelector } from "./AnaesthesiaCaseLogModel.base"
import { AnaesthesiaChronicPainLogModel, AnaesthesiaChronicPainLogModelType } from "./AnaesthesiaChronicPainLogModel"
import { AnaesthesiaChronicPainLogModelSelector } from "./AnaesthesiaChronicPainLogModel.base"
import { AnaesthesiaCriticalCareCaseLogModel, AnaesthesiaCriticalCareCaseLogModelType } from "./AnaesthesiaCriticalCareCaseLogModel"
import { AnaesthesiaCriticalCareCaseLogModelSelector } from "./AnaesthesiaCriticalCareCaseLogModel.base"
import { CaseLogStatusEnumType } from "./CaseLogStatusEnum"
import { OralMedicineCaseLogModel, OralMedicineCaseLogModelType } from "./OralMedicineCaseLogModel"
import { OralMedicineCaseLogModelSelector } from "./OralMedicineCaseLogModel.base"
import { OralRadiologyModel, OralRadiologyModelType } from "./OralRadiologyModel"
import { OralRadiologyModelSelector } from "./OralRadiologyModel.base"
import { OrthodonticsClinicalCaseLogModel, OrthodonticsClinicalCaseLogModelType } from "./OrthodonticsClinicalCaseLogModel"
import { OrthodonticsClinicalCaseLogModelSelector } from "./OrthodonticsClinicalCaseLogModel.base"
import { OrthodonticsPreClinicalModel, OrthodonticsPreClinicalModelType } from "./OrthodonticsPreClinicalModel"
import { OrthodonticsPreClinicalModelSelector } from "./OrthodonticsPreClinicalModel.base"
import { OrthopaedicsCaseLogModel, OrthopaedicsCaseLogModelType } from "./OrthopaedicsCaseLogModel"
import { OrthopaedicsCaseLogModelSelector } from "./OrthopaedicsCaseLogModel.base"
import { OrthopaedicsProcedureLogModel, OrthopaedicsProcedureLogModelType } from "./OrthopaedicsProcedureLogModel"
import { OrthopaedicsProcedureLogModelSelector } from "./OrthopaedicsProcedureLogModel.base"
import { AnaesthesiaCaseLogFilter, AnaesthesiaChronicPainLogFilter, AnaesthesiaCriticalCareCaseLogFilter, OralMedicineCaseLogFilter, OralRadiologyFilter, OrthodonticsClinicalCaseLogFilter, OrthodonticsPreClinicalFilter, OrthopaedicsCaseLogFilter, OrthopaedicsProcedureLogFilter, UserFilter } from "./RootStore.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  createdBy: UserModelType;
  approver: UserModelType;
  anaesthesiaCaseLog: AnaesthesiaCaseLogModelType;
  anaesthesiaChronicPainLog: AnaesthesiaChronicPainLogModelType;
  anaesthesiaCriticalCareCaseLog: AnaesthesiaCriticalCareCaseLogModelType;
  orthodonticsClinicalCaseLog: OrthodonticsClinicalCaseLogModelType;
  orthodonticsPreClinical: OrthodonticsPreClinicalModelType;
  orthopaedicsCaseLog: OrthopaedicsCaseLogModelType;
  orthopaedicsProcedureLog: OrthopaedicsProcedureLogModelType;
  oralMedicineCaseLog: OralMedicineCaseLogModelType;
  oralRadiology: OralRadiologyModelType;
}

/**
 * CaseLogBase
 * auto generated base class for the model CaseLogModel.
 */
export const CaseLogModelBase = withTypedRefs<Refs>()(ModelBase
  .named('CaseLog')
  .props({
    __typename: types.optional(types.literal("CaseLog"), "CaseLog"),
    id: types.identifier,
    createdOn: types.union(types.undefined, types.null, types.frozen()),
    updatedOn: types.union(types.undefined, types.null, types.frozen()),
    createdBy: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    approver: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
    logType: types.union(types.undefined, types.null, types.string),
    rejectionMessage: types.union(types.undefined, types.null, types.string),
    complete: types.union(types.undefined, types.null, types.boolean),
    caseLogStatus: types.union(types.undefined, types.null, CaseLogStatusEnumType),
    rotation: types.union(types.undefined, types.null, types.string),
    hospital: types.union(types.undefined, types.null, types.string),
    anaesthesiaCaseLog: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnaesthesiaCaseLogModel))),
    anaesthesiaChronicPainLog: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnaesthesiaChronicPainLogModel))),
    anaesthesiaCriticalCareCaseLog: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => AnaesthesiaCriticalCareCaseLogModel))),
    orthodonticsClinicalCaseLog: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OrthodonticsClinicalCaseLogModel))),
    orthodonticsPreClinical: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OrthodonticsPreClinicalModel))),
    orthopaedicsCaseLog: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OrthopaedicsCaseLogModel))),
    orthopaedicsProcedureLog: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OrthopaedicsProcedureLogModel))),
    oralMedicineCaseLog: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OralMedicineCaseLogModel))),
    oralRadiology: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => OralRadiologyModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CaseLogModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get createdOn() { return this.__attr(`createdOn`) }
  get updatedOn() { return this.__attr(`updatedOn`) }
  get logType() { return this.__attr(`logType`) }
  get rejectionMessage() { return this.__attr(`rejectionMessage`) }
  get complete() { return this.__attr(`complete`) }
  get caseLogStatus() { return this.__attr(`caseLogStatus`) }
  get rotation() { return this.__attr(`rotation`) }
  get hospital() { return this.__attr(`hospital`) }
  createdBy(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined, args?: { filter?: (UserFilter | null) }) { return this.__child(`createdBy`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserModelSelector, builder) }
  approver(builder: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector) | undefined, args?: { filter?: (UserFilter | null) }) { return this.__child(`approver`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), UserModelSelector, builder) }
  anaesthesiaCaseLog(builder: string | AnaesthesiaCaseLogModelSelector | ((selector: AnaesthesiaCaseLogModelSelector) => AnaesthesiaCaseLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaCaseLogFilter | null) }) { return this.__child(`anaesthesiaCaseLog`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCaseLogModelSelector, builder) }
  anaesthesiaChronicPainLog(builder: string | AnaesthesiaChronicPainLogModelSelector | ((selector: AnaesthesiaChronicPainLogModelSelector) => AnaesthesiaChronicPainLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaChronicPainLogFilter | null) }) { return this.__child(`anaesthesiaChronicPainLog`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaChronicPainLogModelSelector, builder) }
  anaesthesiaCriticalCareCaseLog(builder: string | AnaesthesiaCriticalCareCaseLogModelSelector | ((selector: AnaesthesiaCriticalCareCaseLogModelSelector) => AnaesthesiaCriticalCareCaseLogModelSelector) | undefined, args?: { filter?: (AnaesthesiaCriticalCareCaseLogFilter | null) }) { return this.__child(`anaesthesiaCriticalCareCaseLog`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), AnaesthesiaCriticalCareCaseLogModelSelector, builder) }
  orthodonticsClinicalCaseLog(builder: string | OrthodonticsClinicalCaseLogModelSelector | ((selector: OrthodonticsClinicalCaseLogModelSelector) => OrthodonticsClinicalCaseLogModelSelector) | undefined, args?: { filter?: (OrthodonticsClinicalCaseLogFilter | null) }) { return this.__child(`orthodonticsClinicalCaseLog`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsClinicalCaseLogModelSelector, builder) }
  orthodonticsPreClinical(builder: string | OrthodonticsPreClinicalModelSelector | ((selector: OrthodonticsPreClinicalModelSelector) => OrthodonticsPreClinicalModelSelector) | undefined, args?: { filter?: (OrthodonticsPreClinicalFilter | null) }) { return this.__child(`orthodonticsPreClinical`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthodonticsPreClinicalModelSelector, builder) }
  orthopaedicsCaseLog(builder: string | OrthopaedicsCaseLogModelSelector | ((selector: OrthopaedicsCaseLogModelSelector) => OrthopaedicsCaseLogModelSelector) | undefined, args?: { filter?: (OrthopaedicsCaseLogFilter | null) }) { return this.__child(`orthopaedicsCaseLog`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsCaseLogModelSelector, builder) }
  orthopaedicsProcedureLog(builder: string | OrthopaedicsProcedureLogModelSelector | ((selector: OrthopaedicsProcedureLogModelSelector) => OrthopaedicsProcedureLogModelSelector) | undefined, args?: { filter?: (OrthopaedicsProcedureLogFilter | null) }) { return this.__child(`orthopaedicsProcedureLog`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OrthopaedicsProcedureLogModelSelector, builder) }
  oralMedicineCaseLog(builder: string | OralMedicineCaseLogModelSelector | ((selector: OralMedicineCaseLogModelSelector) => OralMedicineCaseLogModelSelector) | undefined, args?: { filter?: (OralMedicineCaseLogFilter | null) }) { return this.__child(`oralMedicineCaseLog`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralMedicineCaseLogModelSelector, builder) }
  oralRadiology(builder: string | OralRadiologyModelSelector | ((selector: OralRadiologyModelSelector) => OralRadiologyModelSelector) | undefined, args?: { filter?: (OralRadiologyFilter | null) }) { return this.__child(`oralRadiology`+ (args ? '('+['filter'].map((argName) => ((args as any)[argName] ? `${argName}: ${JSON.stringify((args as any)[argName])}` : null) ).filter((v) => v!=null).join(', ') + ')': ''), OralRadiologyModelSelector, builder) }
}
export function selectFromCaseLog() {
  return new CaseLogModelSelector()
}

export const caseLogModelPrimitives = selectFromCaseLog().createdOn.updatedOn.logType.rejectionMessage.complete.caseLogStatus.rotation.hospital
