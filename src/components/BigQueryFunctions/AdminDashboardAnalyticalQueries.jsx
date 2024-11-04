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

// Helper function to remove null or undefined values
const removeNullValues = (obj) => {
	return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
};

// const captureCurrentActiveUsers = (tableName, userId, lastActivity) => {
// 	const dateTime = getCurrentDateTime();
// 	return {
// 		dataset: "admin_reports",
// 		tableName: tableName,
// 		data: removeNullValues({
// 			user_id: userId,
// 			last_activity: lastActivity,
// 			...dateTime,
// 		}),
// 	};
// };

// const captureLastLoginDate = (tableName, userId, lastActivityDateTime) => {
// 	const dateTime = getCurrentDateTime();
// 	return {
// 		dataset: "admin_reports",
// 		tableName: tableName,
// 		data: removeNullValues({
// 			user_id: userId,
// 			last_activity_date_and_time: lastActivityDateTime,
// 			...dateTime,
// 		}),
// 	};
// };

// const captureRetentionRateDate = (tableName, userId, lastActivityDateTime) => {
// 	const dateTime = getCurrentDateTime();
// 	return {
// 		dataset: "admin_reports",
// 		tableName: tableName,
// 		data: removeNullValues({
// 			user_id: userId,
// 			last_activity_date_and_time: lastActivityDateTime,
// 			...dateTime,
// 		}),
// 	};
// };

// const captureReturningUserDate = (tableName, userId, lastActivityDateTime) => {
// 	const dateTime = getCurrentDateTime();
// 	return {
// 		dataset: "admin_reports",
// 		tableName: tableName,
// 		data: removeNullValues({
// 			user_id: userId,
// 			last_activity_date_and_time: lastActivityDateTime,
// 			...dateTime,
// 		}),
// 	};
// };

const sendLiveUserStatusDataToBigQueryForAdminAnalytics = () => {
	const dateTime = getCurrentDateTime();
	return {
		dataset: "admin_reports",
		tableName: "user_activity_data",
		data: removeNullValues({
			user_id: appStoreInstance.UserId,
			status: "online",
			...dateTime,
		}),
	};
};

const sendUserSessionDataToBigQueryForAdminAnalytics = (startTime, endTime) => {
	const dateTime = getCurrentDateTime();
	return {
		dataset: "admin_reports",
		tableName: "user_session_data",
		data: removeNullValues({
			user_id: appStoreInstance.UserId,
			status: "offline",
			sessionDuration: (new Date(endTime) - new Date(startTime)) / 1000,
			...dateTime,
		}),
	};
};

const sendRegistrationDataToBigQueryForAdminAnalytics = (data) => {
	const dateTime = getCurrentDateTime();
	return {
		dataset: "admin_reports",
		tableName: "user_registration_data",
		data: removeNullValues({
			user_id: appStoreInstance.UserId,
			userName: data.userName,
			user_role: data.designation,
			designation: data.designation,
			specialty: data.specialty,
			workplace: data.workplace,
			institution: data.workplace,
			registrationDate: data.createdOn,
			city: data.city,
			channel: data.link,
			specialization: data.specialty,
			...dateTime,
		}),
	};
};

const sendFeatureUsageDataToBigQueryForAdminAnalytics = (featureName, startTime, endTime) => {
	const dateTime = getCurrentDateTime();
	return {
		dataset: "admin_reports",
		tableName: "app_feature_data",
		data: removeNullValues({
			user_id: appStoreInstance.UserId,
			featureName: featureName,
			sessionDuration: (new Date(endTime) - new Date(startTime)) / 1000,
			...dateTime,
		}),
	};
};

const sendCaseLogDataToBigQueryForAdminAnalytics = (data, startTime, endTime) => {
	const dateTime = getCurrentDateTime();
	return {
		dataset: "admin_reports",
		tableName: "case_log_data",
		data: removeNullValues({
			user_id: appStoreInstance.UserId,
			caseLogId: data.id,
			caseType: data.caseType,
			contributionType: data.conduct,
			caseLogSessionDuration: (new Date(endTime) - new Date(startTime)) / 1000,
			specialization: appStoreInstance.UserBroadSpecialty,
			...dateTime,
		}),
	};
};

export {
	// captureCurrentActiveUsers,
	// captureLastLoginDate,
	// captureRetentionRateDate,
	// captureReturningUserDate,
	sendLiveUserStatusDataToBigQueryForAdminAnalytics,
	sendUserSessionDataToBigQueryForAdminAnalytics,
	sendRegistrationDataToBigQueryForAdminAnalytics,
	sendFeatureUsageDataToBigQueryForAdminAnalytics,
	sendCaseLogDataToBigQueryForAdminAnalytics,
};
