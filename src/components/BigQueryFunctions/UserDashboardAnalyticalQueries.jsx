import appStoreInstance from "../../stores/AppStore";

const getCurrentDateTime = () => {
	// Create a date object in IST
	const now = new Date();
	const istOptions = { timeZone: "Asia/Kolkata" };

	const year = now.toLocaleString("en-US", { ...istOptions, year: "numeric" });
	const month = now.toLocaleString("en-US", { ...istOptions, month: "2-digit" });
	const day = now.toLocaleString("en-US", { ...istOptions, day: "2-digit" });

	const weekNumber = getWeekNumber(now);
	const quarter = Math.floor((parseInt(month) + 2) / 3);

	const dateYear = `${day} ${now.toLocaleString("en-US", { ...istOptions, month: "short" })} ${year}`;
	const dayWeekYear = `${now.toLocaleString("en-US", { ...istOptions, weekday: "short" })}-WK${weekNumber}-${year}`;

	return {
		dateAndTime: now.toISOString(),
		year: year,
		weekYear: `WK${weekNumber}-${year}`,
		monthYear: `${month}-${year}`,
		quarterYear: `Q${quarter}-${year}`,
		dateYear: dateYear,
		dayWeekYear: dayWeekYear,
	};
};

const getWeekNumber = (d) => {
	d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
	const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
	return String(weekNo).padStart(2, "0");
};

const camelCaseToSpacedWords = (str) => {
	return str.replace(/([A-Z])(?=[A-Z][a-z])|([a-z])(?=[A-Z])/g, "$1$2 ").trim();
};

const processAnesthesiaTypes = (arr) => {
	return arr.map((item) => {
		if (item.includes("Regional")) {
			return "Regional";
		} else {
			return camelCaseToSpacedWords(item.split("/").pop());
		}
	});
};

const extractLastLevelOfRegionalTechniques = (entry) => {
	if (entry.includes("DrugsUsed") || entry.includes("Technique1")) {
		return null;
	}
	const parts = entry.split("/");
	if (parts.includes("Spinal")) return "Spinal";
	if (parts.includes("Epidural")) return "Epidural";
	if (parts.includes("LabourAnalgesia")) return camelCaseToSpacedWords(parts[parts.indexOf("LabourAnalgesia")]);
	let lastPart = parts[parts.length - 1];
	const hashIndex = lastPart.indexOf("#V#");
	if (hashIndex !== -1) {
		lastPart = lastPart.substring(0, hashIndex);
	}
	return camelCaseToSpacedWords(lastPart);
};

const extractLastLevelOfIntervention = (entry) => {
	const parts = entry.split("/");
	if (parts.includes("BotulinumInjection")) {
		return "Botulinum Injection";
	}
	let lastPart = parts[parts.length - 1];
	const hashIndex = lastPart.indexOf("#V#");
	if (hashIndex !== -1) {
		lastPart = lastPart.substring(0, hashIndex);
	}
	return camelCaseToSpacedWords(lastPart);
};

const extractArterialAndCentralVenousLine = (entry) => {
	const parts = entry.split("/");
	if (parts.includes("ArterialLine")) return "Arterial Line";
	if (parts.includes("CentralVenousLine")) return "Central Venous Line";
	return null;
};

export function requestConductDataFromBigQuery() {
	return {
		parameters: {
			user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "SummarizeConductEntries",
	};
}

export function requestTypesOfAnesthesiaDataFromBigQuery() {
	return {
		parameters: {
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_anesthesia_type_counts",
	};
}

export function requestOrthopaedicsConductDataFromBigQuery() {
	return {
		parameters: {
			user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "count_conduct_occurrences",
	};
}

export function requestASAGradeDailyDataFromBigQuery() {
	return {
		parameters: {
			in_time_range: "day",
			in_count: 7,
			user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_asa_grade_counts",
	};
}

export function requestASAGradeWeeklyDataFromBigQuery() {
	return {
		parameters: {
			in_time_range: "week",
			in_count: 4,
			user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_asa_grade_counts",
	};
}

export function requestASAGradeMonthlyDataFromBigQuery() {
	return {
		parameters: {
			in_time_range: "month",
			in_count: 6,
			user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_asa_grade_counts",
	};
}

export function requestReginoalTechniquesDailyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "daily",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_regional_techniques",
	};
}

export function requestReginoalTechniquesWeeklyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "weekly",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_regional_techniques",
	};
}

export function requestReginoalTechniquesMonthlyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "monthly",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_regional_techniques",
	};
}

export function requestInterventionsDailyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "daily",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_top_interventions",
	};
}

export function requestInterventionsWeeklyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "weekly",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_top_interventions",
	};
}

export function requestInterventionsMonthlyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "monthly",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_top_interventions",
	};
}

export function requestProceduresDailyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "daily",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_top_procedures",
	};
}

export function requestProceduresWeeklyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "weekly",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_top_procedures",
	};
}

export function requestProceduresMonthlyDataFromBigQuery() {
	return {
		parameters: {
			time_frame: "monthly",
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "get_top_procedures",
	};
}

export function requestAggerateCaseLogDataOfDailyForAnesthesia() {
	return {
		parameters: {
			in_time_range: "daily",
			in_count: 7,
			user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "aggregate_log_data",
	};
}

export function requestAggerateCaseLogDataOfWeeklyForAnesthesia() {
	return {
		parameters: {
			in_time_range: "weekly",
			in_count: 4,
			user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "aggregate_log_data",
	};
}

export function requestAggerateCaseLogDataOfMonthlyForAnesthesia() {
	return {
		parameters: {
			in_time_range: "monthly",
			in_count: 6,
			user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "aggregate_log_data",
	};
}

export function requestAggerateCaseLogDataOfDailyForOrthopaedics() {
	return {
		parameters: {
			view_type: "daily",
			input_user_id: appStoreInstance.UserId,
			range_count: 7,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_case_logs",
	};
}

export function requestAggerateCaseLogDataOfWeeklyForOrthopaedics() {
	return {
		parameters: {
			view_type: "weekly",
			input_user_id: appStoreInstance.UserId,
			range_count: 3,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_case_logs",
	};
}

export function requestAggerateCaseLogDataOfMonthlyForOrthopaedics() {
	return {
		parameters: {
			view_type: "monthly",
			input_user_id: appStoreInstance.UserId,
			range_count: 5,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_case_logs",
	};
}

export function requestAggeratProcedureDurationDataOfDailyForOrthopaedics() {
	return {
		parameters: {
			view_type: "daily",
			input_user_id: appStoreInstance.UserId,
			range_count: 7,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_procedure_duration",
	};
}

export function requestAggerateProcedureDurationDataOfWeeklyForOrthopaedics() {
	return {
		parameters: {
			view_type: "weekly",
			input_user_id: appStoreInstance.UserId,
			range_count: 3,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_procedure_duration",
	};
}

export function requestAggerateProcedureDurationDataOfMonthlyForOrthopaedics() {
	return {
		parameters: {
			view_type: "monthly",
			input_user_id: appStoreInstance.UserId,
			range_count: 6,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_procedure_duration",
	};
}

export function requestAggerateProcedureLogDataOfDailyForOrthopaedics() {
	return {
		parameters: {
			view_type: "daily",
			input_user_id: appStoreInstance.UserId,
			range_count: 7,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_procedure_logs",
	};
}

export function requestAggerateProcedureLogDataOfWeeklyForOrthopaedics() {
	return {
		parameters: {
			view_type: "weekly",
			input_user_id: appStoreInstance.UserId,
			range_count: 4,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_procedure_logs",
	};
}

export function requestAggerateProcedureLogDataOfMonthlyForOrthopaedics() {
	return {
		parameters: {
			view_type: "monthly",
			user_id: appStoreInstance.UserId,
			range_count: 6,
		},
		dataset: "reports",
		procedureName: "analyze_orthopaedics_procedure_logs",
	};
}

export function requestAggerateTotalHoursOfSurgeryForOrthopaedics() {
	return {
		parameters: {
			in_user_id: appStoreInstance.UserId,
		},
		dataset: "reports",
		procedureName: "calculate_user_orthopaedics_duration",
	};
}

export function sendAnesthesiaCaseLogDataToBigQuery(data) {
	const dateTime = getCurrentDateTime();
	const typeOfAnaesthesia = data?.typeOfAnaesthesia ? processAnesthesiaTypes(data.typeOfAnaesthesia) : null;

	const regionalTechniques = data?.regionalTechniques
		? Array.from(new Set(data.regionalTechniques.map(extractLastLevelOfRegionalTechniques).filter(Boolean)))
		: [];

	const AnesthesiaCaseLogDataForBigQuery = {
		tableName: "anesthesia_case_logs2",
		dataset: "reports",
		data: {
			caseLogId: data.id,
			user_id: appStoreInstance.UserId,
			logType: "CaseLog",
			...dateTime,
		},
	};

	// Process conduct
	if (data.conduct) {
		switch (data.conduct) {
			case "Performed under supervision":
			case "Performed independently":
				AnesthesiaCaseLogDataForBigQuery.data.conduct = "Performed";
				break;
			default:
				AnesthesiaCaseLogDataForBigQuery.data.conduct = camelCaseToSpacedWords(data.conduct);
		}
	}

	// Add optional fields if they exist
	if (data.asaGrade) AnesthesiaCaseLogDataForBigQuery.data.asaGrade = data.asaGrade;
	if (typeOfAnaesthesia) AnesthesiaCaseLogDataForBigQuery.data.typeOfAnaesthesia = typeOfAnaesthesia;
	if (regionalTechniques.length > 0) AnesthesiaCaseLogDataForBigQuery.data.regionalTechniques = regionalTechniques;

	return AnesthesiaCaseLogDataForBigQuery;
}

export function sendAnesthesiaChronicPainLogDataToBigQuery(data) {
	const dateTime = getCurrentDateTime();
	const intervention = data?.intervention ? Array.from(new Set(data.intervention.map(extractLastLevelOfIntervention))) : [];

	const AnesthesiaChronicPainDataForBigQuery = {
		tableName: "anesthesia_chronic_pain2",
		dataset: "reports",
		data: {
			caseLogId: data.id,
			user_id: appStoreInstance.UserId,
			logType: "ChronicPainLog",
			...dateTime,
		},
	};
	if (data.conduct) {
		switch (data.conduct) {
			case "Performed under supervision":
			case "Performed independently":
				AnesthesiaChronicPainDataForBigQuery.data.conduct = "Performed";
				break;
			default:
				AnesthesiaChronicPainDataForBigQuery.data.conduct = camelCaseToSpacedWords(data.conduct);
		}
	}

	if (intervention) AnesthesiaChronicPainDataForBigQuery.data.intervention = intervention;

	return AnesthesiaChronicPainDataForBigQuery;
}

export function sendAnesthesiaCriticalCareCaseLogDataToBigQuery(data) {
	const dateTime = getCurrentDateTime();
	const procedures = data?.procedures ? Array.from(new Set(data.procedures.map(extractArterialAndCentralVenousLine).filter(Boolean))) : [];

	const AnesthesiaCriticalCareCaseLogDataForBigQuery = {
		tableName: "anesthesia_critical_care_case2",
		dataset: "reports",
		data: {
			caseLogId: data.id,
			user_id: appStoreInstance.UserId,
			logType: "CriticalCareCaseLog",
			...dateTime,
		},
	};

	if (data.conduct) {
		switch (data.conduct) {
			case "Performed under supervision":
			case "Performed independently":
				AnesthesiaCriticalCareCaseLogDataForBigQuery.data.conduct = "Performed";
				break;
			default:
				AnesthesiaCriticalCareCaseLogDataForBigQuery.data.conduct = camelCaseToSpacedWords(data.conduct);
		}
	}

	if (procedures) AnesthesiaCriticalCareCaseLogDataForBigQuery.data.procedures = procedures;

	return AnesthesiaCriticalCareCaseLogDataForBigQuery;
}

export function sendOrthopaedicsProcedureLogDataToBigQuery(data) {
	const dateTime = getCurrentDateTime();
	const OrthopaedicsProcedureLogDataToBigQuery = {
		tableName: "orthopaedics_procedure_log",
		dataset: "reports",
		data: {
			caseLogId: data.id,
			user_id: appStoreInstance.UserId,
			logType: "ProcedureLog",
			...dateTime,
		},
	};

	if (data.conduct) {
		switch (data.conduct) {
			case "Performed under supervision":
			case "Performed independently":
				OrthopaedicsProcedureLogDataToBigQuery.data.conduct = "Performed";
				break;
			default:
				OrthopaedicsProcedureLogDataToBigQuery.data.conduct = camelCaseToSpacedWords(data.conduct);
		}
	}

	if (data.durationOfSurgeryHours) OrthopaedicsProcedureLogDataToBigQuery.data.durationOfSurgeryHours = data.durationOfSurgeryHours;
	if (data.durationOfSurgeryMinutes) OrthopaedicsProcedureLogDataToBigQuery.data.durationOfSurgeryMinutes = data.durationOfSurgeryMinutes;

	return OrthopaedicsProcedureLogDataToBigQuery;
}

export function sendOrthopaedicsCaseLogDataToBigQuery(data) {
	const dateTime = getCurrentDateTime();
	const OrthopaedicsCaseLogDataToBigQuery = {
		tableName: "orthopaedics_case_log",
		dataset: "reports",
		data: {
			caseLogId: data.id,
			user_id: appStoreInstance.UserId,
			logType: "CaseLog",
			...dateTime,
		},
	};
	if (data.conduct) {
		switch (data.conduct) {
			case "Performed under supervision":
			case "Performed independently":
				OrthopaedicsCaseLogDataToBigQuery.data.conduct = "Performed";
				break;
			default:
				OrthopaedicsCaseLogDataToBigQuery.data.conduct = camelCaseToSpacedWords(data.conduct);
		}
	}

	return OrthopaedicsCaseLogDataToBigQuery;
}

export function sendCaseLogDataToBigQueryForUserDashboard(caseLogType, data) {
	switch (caseLogType) {
		case "CaseLog":
			return sendAnesthesiaCaseLogDataToBigQuery(data);
		case "ChronicPain":
			return sendAnesthesiaChronicPainLogDataToBigQuery(data);
		case "CriticalCareCaseLog":
			return sendAnesthesiaCriticalCareCaseLogDataToBigQuery(data);
		case "OrthopaedicsCaseLog":
			return sendOrthopaedicsCaseLogDataToBigQuery(data);
		case "OrthopaedicsProcedureLog":
			return sendOrthopaedicsProcedureLogDataToBigQuery(data);
		default:
			console.log("No BigQuery function for this case log type");
			return null;
	}
}
