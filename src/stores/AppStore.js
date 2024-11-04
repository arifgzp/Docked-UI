import { flow, types } from "mobx-state-tree";
import { UserRole, UserStatus, useQuery } from "../models";
import NetworkUtils from "../utils/NetworkUtils";
import rootStore from "./MobXRootStore";
import * as SecureStore from "expo-secure-store";
import { sendUserSessionDataToBigQueryForAdminAnalytics } from "../components/BigQueryFunctions/AdminDashboardAnalyticalQueries";

export const SecureStoreEnum = Object.freeze({
	TOKEN: Symbol("token"),
	USER: Symbol("user"),
});

const execute = async (url, data, token, notifyError = true) => {
	const serverURL = NetworkUtils.getServerAPIURL();
	const requestURL = `${serverURL}/${url}`;

	console.log("Rest URL : ", requestURL);
	let requestHeader = {
		Accept: "application/json",
		"Content-Type": "application/json",
	};
	if (token) {
		requestHeader["sessionKey"] = token;
	}

	try {
		const response = await fetch(requestURL, {
			method: "POST",
			headers: requestHeader,
			body: JSON.stringify(data),
		});

		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.log("error", error);
		if (notifyError) appStoreInstance.setAPIError(error);
	}
};

function removeBeforeLastSlash(str) {
	// Find the position of the last slash
	const lastSlashIndex = str.lastIndexOf("/");

	// If there is no slash in the string, return the original string
	if (lastSlashIndex === -1) {
		return str;
	}

	// Return the substring after the last slash
	return str.substring(lastSlashIndex + 1);
}

const uploadImage = async (imageInput, UserId, token) => {
	const serverURL = NetworkUtils.getServerURL();
	const file = imageInput[0];
	console.log("user id hai", UserId);
	console.log("user token hai", token);
	const fileExtenstion = removeBeforeLastSlash(file.mimeType);
	const requestURL = `${serverURL}/upload/profilePhoto:${UserId}/${UserId}.${fileExtenstion}/upload`;

	console.log("Rest URL : ", requestURL);
	const formdata = new FormData();

	formdata.append("uploaded_file", {
		uri: file.uri,
		name: `${UserId}.${fileExtenstion}`,
		type: file.mimeType,
	});

	console.log("fileInput", imageInput, "formData", formdata);
	const requestHeader = {
		Accept: "/",
		"Content-Type": "multipart/form-data",
	};

	if (token) {
		requestHeader["sessionKey"] = token;
	}

	console.log("header", requestHeader);
	try {
		const response = await fetch(requestURL, {
			method: "POST",
			headers: requestHeader,
			body: formdata,
		});

		const responseData = await response.json();

		return responseData;
	} catch (error) {
		console.log(error);
		this.setAPIError(error);
	}
};

const executeUpload = async (url, formData, token) => {
	const serverURL = NetworkUtils.getServerURL();
	const requestURL = `${serverURL}/${url}`;

	console.log("Rest URL : ", requestURL);
	let requestHeader = {
		Accept: "application/json",
		"Content-Type": "multipart/form-data",
	};
	if (token) {
		requestHeader["sessionKey"] = token;
	}

	try {
		const response = await fetch(requestURL, {
			method: "POST",
			headers: requestHeader,
			body: formData,
		});

		const responseData = await response.json();
		return responseData;
	} catch (error) {
		appStoreInstance.setAPIError(error);
	}
};

const executeAPI = async (url, data) => {
	const serverURL = NetworkUtils.getServerAPIURL();
	const requestURL = `${serverURL}/${url}`;
	return execute(requestURL, data);
};

const APIErrorType = types.model("APIError", {
	name: types.string,
	message: types.string,
});

const ConductEntry = types.model("ConductEntry", {
	table_name: types.string,
	conduct: types.string,
	count: types.number,
});

const AppStore = types
	.model("AppStore", {
		_isLoading: false,
		_isLoading_concludeCamp: false,
		_isLoading_approveCampReport: false,
		_isLoading_denyCampReport: false,
		_isLoading_Camp: false,
		_isLoading_deleteCamp: false,
		_isLoading_deleteDoctor: false,
		_isLoading_deleteUser: false,
		_isLoading_addUser: false,
		_isLoading_uploadCampImage: false,
		_isSignedIn: false,
		_userToken: types.maybeNull(types.string),
		_selectionMode: types.maybeNull(types.string),
		_selectedCampImage: types.maybeNull(types.string),
		_userName: types.maybeNull(types.string),
		_name: types.maybeNull(types.string),
		_superSpecialty: types.maybeNull(types.string),
		_subSpecialty: types.maybeNull(types.string),
		_designation: types.maybeNull(types.string),
		_designationOthers: types.maybeNull(types.string),
		_workPlace: types.maybeNull(types.string),
		_city: types.maybeNull(types.string),
		_medicalCouncilName: types.maybeNull(types.string),
		_yearOfRegistration: types.maybeNull(types.string),
		_medicalRegistrationNumber: types.maybeNull(types.string),
		_verifiedMedicalRegistrationNumber: types.maybeNull(types.string),
		_userRole: types.maybeNull(types.string),
		_pharmaID: types.maybeNull(types.string),
		_campAdminID: types.maybeNull(types.string),
		_alert: types.maybeNull(types.boolean),
		_silentNotification: types.maybeNull(types.boolean),
		_isPasswordResetRequired: false,
		_broadSpecialty: types.maybeNull(types.string),
		_apiError: types.maybeNull(APIErrorType),
		_userStatus: types.maybeNull(types.string),
		_userPassword: types.maybeNull(types.string),
		_buttonPressed: types.maybeNull(types.boolean),
		_isFormDirty: types.maybeNull(types.boolean),
		_imagePath: types.maybeNull(types.string),
		_caseLogFormToGet: types.maybeNull(types.string),
		_userStatus: types.maybeNull(types.string),
		_resetDate: types.maybeNull(types.boolean),
		_caseLogNumbers: types.maybeNull(types.integer),
		_lastCaseLogged: types.maybeNull(types.string),
		_notificationToken: types.maybeNull(types.string),
		_startTimeOfApp: types.maybeNull(types.string),
		_isTabBarVisible: false,
		_conduct: types.array(ConductEntry),
		_observedAnalyticsCount: types.maybeNull(types.integer),
		_assistedAnalyticsCount: types.maybeNull(types.integer),
		_performedAnalyticsCount: types.maybeNull(types.integer),
		_generalAnesthesiaAnalyticsCount: types.maybeNull(types.integer),
		_regionalAnesthesiaAnalyticsCount: types.maybeNull(types.integer),
		_TIVAAnalyticsCount: types.maybeNull(types.integer),
		_montioredAnesthesiaCareAnalyticsCount: types.maybeNull(types.integer),
		_totalHoursOfSurgeriesPerformed: "0 hours",
		_selectedCustomLogId: types.maybeNull(types.string),
	})
	.views((self) => ({
		get IsTabBarVisible() {
			return self._isTabBarVisible;
		},

		get SelectedCustomLogId() {
			return self._selectedCustomLogId;
		},

		get TotalHoursOfSurgeriesPerformed() {
			return self.__totalHoursOfSurgeriesPerformed;
		},

		get GeneralAnesthesiaAnalyticsCount() {
			return self._generalAnesthesiaAnalyticsCount;
		},

		get RegionalAnesthesiaAnalyticsCount() {
			return self._regionalAnesthesiaAnalyticsCount;
		},

		get TIVAAnalyticsCount() {
			return self._TIVAAnalyticsCount;
		},

		get MontioredAnesthesiaCareAnalyticsCount() {
			return self._montioredAnesthesiaCareAnalyticsCount;
		},

		get ObservedAnalyticsCount() {
			return self._observedAnalyticsCount;
		},

		get AssistedAnalyticsCount() {
			return self._assistedAnalyticsCount;
		},

		get PerformedAnalyticsCount() {
			return self._performedAnalyticsCount;
		},

		get ConductValues() {
			return self._conduct;
		},

		get UserId() {
			return self._userId;
		},

		get StartTimeOfTheApp() {
			return self._startTimeOfApp;
		},

		get ResetDate() {
			return self._resetDate;
		},

		get LastCaseLogged() {
			return self._lastCaseLogged;
		},

		get CaseLogNumbers() {
			return self._caseLogNumbers;
		},

		get UserStatus() {
			return self._userStatus;
		},

		get CaseLogFormToGet() {
			return self._caseLogFormToGet;
		},

		get ImagePath() {
			return self._imagePath;
		},

		get IsformDirty() {
			return self._isFormDirty;
		},

		get ButtonPressed() {
			return self._buttonPressed;
		},

		get UserBroadSpecialty() {
			return self._broadSpecialty;
		},

		get UserLogProfile() {
			return self._logProfile;
		},

		get isUserSignedIn() {
			return self._isSignedIn && self._userToken != null;
		},

		get isNotificationSilent() {
			return self._silentNotification || false;
		},

		get Alert() {
			return self._alert || false;
		},

		get isPasswordResetRequired() {
			return self._isPasswordResetRequired;
		},

		get UserToken() {
			return self._userToken;
		},

		get UserName() {
			return self._userName;
		},

		get UserPassword() {
			return self._userPassword;
		},

		get Name() {
			return self._name;
		},

		get SuperSpecialty() {
			return self._superSpecialty;
		},

		get SubSpecialty() {
			return self._subSpecialty;
		},

		get Designation() {
			return self._designation;
		},

		get DesignationOthers() {
			return self._designationOthers;
		},

		get Workplace() {
			return self._workPlace;
		},

		get City() {
			return self._city;
		},

		get MedicalCouncilName() {
			return self._medicalCouncilName;
		},

		get YearOfRegistration() {
			return self._yearOfRegistration;
		},

		get MedicalRegistrationNumber() {
			return self._medicalRegistrationNumber;
		},

		get VerifiedMedicalRegistrationNumber() {
			return self._verifiedMedicalRegistrationNumber;
		},

		get UserRole() {
			return self._userRole;
		},

		get PharmaID() {
			return self._pharmaID;
		},

		get CampAdminID() {
			return self._campAdminID;
		},

		get SelectionMode() {
			return self._selectionMode;
		},

		get isLoading() {
			return self._isLoading;
		},

		get CampImage() {
			return self._selectedCampImage;
		},

		get isConcludeCampLoading() {
			return self._isLoading_concludeCamp;
		},

		get isReviewCampLoading() {
			return self._isLoading_approveCampReport || self._isLoading_denyCampReport;
		},

		get isDeleteCampLoading() {
			return self._isLoading_deleteCamp;
		},

		get isDeleteDoctorLoading() {
			return self._isLoading_deleteDoctor;
		},

		get isDeleteUserLoading() {
			return self._isLoading_deleteUser;
		},

		get isAddUserLoading() {
			return self._isLoading_addUser;
		},

		get APIError() {
			return self._apiError;
		},

		get NotificationToken() {
			return self._notificationToken;
		},
	}))
	.actions((self) => ({
		setIsTabBarVisble(isTabBarVisble) {
			self._isTabBarVisible = isTabBarVisble;
		},

		setSelectedCustomLogId(selectedCustomLogId) {
			self._selectedCustomLogId = selectedCustomLogId;
		},

		setTotalHoursOfSurgeriesPerformed(totalHoursOfSurgeriesPerformed) {
			self._totalHoursOfSurgeriesPerformed = totalHoursOfSurgeriesPerformed;
		},

		setGeneralAnesthesiaAnalyticsCount(GeneralAnesthesiaAnalyticsCount) {
			self._generalAnesthesiaAnalyticsCount = GeneralAnesthesiaAnalyticsCount;
		},

		setRegionalAnesthesiaAnalyticsCount(RegionalAnesthesiaAnalyticsCount) {
			self._regionalAnesthesiaAnalyticsCount = RegionalAnesthesiaAnalyticsCount;
		},

		setTIVAAnalyticsCount(TIVAAnalyticsCount) {
			self._TIVAAnalyticsCount = TIVAAnalyticsCount;
		},

		setMontioredAnesthesiaCareAnalyticsCount(MontioredAnesthesiaCareAnalyticsCount) {
			self._montioredAnesthesiaCareAnalyticsCount = MontioredAnesthesiaCareAnalyticsCount;
		},

		setObservedAnalyticsCount(ObservedAnalyticsCount) {
			self._observedAnalyticsCount = ObservedAnalyticsCount;
		},

		setAssistedAnalyticsCount(AssistedAnalyticsCount) {
			self._assistedAnalyticsCount = AssistedAnalyticsCount;
		},

		setPerformedAnalyticsCount(PerformedAnalyticsCount) {
			self._performedAnalyticsCount = PerformedAnalyticsCount;
		},

		setConductValues(conduct) {
			self._conduct = conduct;
		},

		setNotificationToken(notificationToken) {
			self._notificationToken = notificationToken;
		},

		setStartTimeOfApp(startTime) {
			self._startTimeOfApp = startTime;
		},

		setUserId(userId) {
			self._userId = userId;
		},

		setResetDate(resetDate) {
			self._resetDate = resetDate;
		},

		setLastCaseLogged(lastCaseLogged) {
			self._lastCaseLogged = lastCaseLogged;
		},

		setCaseLogNumbers(caseLogNumbers) {
			self._caseLogNumbers = caseLogNumbers;
		},

		setUserStatus(userStatus) {
			self._userStatus = userStatus;
		},

		setCaseLogFormToGet(caseLogFormToGet) {
			self._caseLogFormToGet = caseLogFormToGet;
		},

		setImagePath(imagePath) {
			self._imagePath = imagePath;
		},

		setIsFormDirty(isFormDirty) {
			self._isFormDirty = isFormDirty;
		},

		setButtonPressed(pressed) {
			self._buttonPressed = pressed;
		},

		setName(name) {
			self._name = name;
		},

		setUserName(userName) {
			self._userName = userName;
		},

		setUserPassword(password) {
			self._userPassword = password;
		},

		setBroadSpecialty(broadSpecialty) {
			self._broadSpecialty = broadSpecialty;
		},

		setSuperSpecialty(superSpecialty) {
			self._superSpecialty = superSpecialty;
		},

		setSubSpecialty(subSpecialty) {
			self._subSpecialty = subSpecialty;
		},

		setDesignation(designation) {
			self._designation = designation;
		},

		setDesignationOthers(otherDesignation) {
			self._designationOthers = otherDesignation;
		},

		setWorkPlace(workPlace) {
			self._workPlace = workPlace;
		},

		setCity(city) {
			self._city = city;
		},

		setMedicalCouncilName(medicalCouncilName) {
			self._medicalCouncilName = medicalCouncilName;
		},

		setYearOfRegistration(yearOfRegistration) {
			self._yearOfRegistration = yearOfRegistration;
		},

		setMedicalRegistrationNumber(medicalRegistrationNumber) {
			self._medicalRegistrationNumber = medicalRegistrationNumber;
		},

		setSpecialty(specialtyValue) {
			self._specialty = specialtyValue;
		},

		setLogProfile(logProfile) {
			self._logProfile = logProfile;
		},

		notificationTokenCall: flow(function* notificationTokenCall(formData) {
			try {
				self._isLoading = true;
				yield execute("/createSignInSchedule", formData, self._userToken);
				return true;
			} catch (error) {
				console.error("AppStore > notificationTokenCall ", error);
			} finally {
				self._isLoading = false;
			}
		}),
		markUserSignedIn(
			token,
			id,
			userName,
			name,
			role,
			broadSpecialty,
			superSpecialty,
			subSpecialty,
			designation,
			designationOthers,
			workPlace,
			city,
			medicalCouncilName,
			yearOfRegistration,
			medicalRegistrationNumber
		) {
			self._isSignedIn = true;
			self._userToken = token;
			self._userName = userName;
			(self._name = name), (self._userRole = role);
			self._userId = id;
			self._broadSpecialty = broadSpecialty;
			self._superSpecialty = superSpecialty;
			self._subSpecialty = subSpecialty;
			self._designation = designation;
			self._designationOthers = designationOthers;
			self._workPlace = workPlace;
			self._city = city;
			self._medicalCouncilName = medicalCouncilName;
			self._yearOfRegistration = yearOfRegistration;
			self._medicalRegistrationNumber = medicalRegistrationNumber;

			SecureStore.setItemAsync(
				SecureStoreEnum.USER.description,
				JSON.stringify({
					userRole: role,
					userName: userName,
					name: name,
					id,
					broadSpecialty,
					superSpecialty: superSpecialty,
					subSpecialty: subSpecialty,
					designation: designation,
					workPlace: workPlace,
					city: city,
					medicalCouncilName: medicalCouncilName,
					yearOfRegistration: yearOfRegistration,
					medicalRegistrationNumber: medicalRegistrationNumber,
				})
			);
		},

		markUserSignedOut() {
			self._isLoading = false;
			self._isLoading_concludeCamp = false;
			self._isLoading_approveCampReport = false;
			self._isLoading_denyCampReport = false;
			self._isLoading_Camp = false;
			self._isLoading_deleteCamp = false;
			self._isLoading_deleteDoctor = false;
			self._isLoading_deleteUser = false;
			self._isLoading_addUser = false;
			self._isLoading_uploadCampImage = false;
			self._isSignedIn = false;
			self._userToken = null;
			self._selectionMode = null;
			self._selectedCampImage = null;
			self._userName = null;
			self._name = null;
			self._superSpecialty = null;
			self._subSpecialty = null;
			self._designation = null;
			self._designationOthers = null;
			self._workPlace = null;
			self._city = null;
			self._medicalCouncilName = null;
			self._yearOfRegistration = null;
			self._medicalRegistrationNumber = null;
			self._verifiedMedicalRegistrationNumber = null;
			self._userRole = null;
			self._pharmaID = null;
			self._campAdminID = null;
			self._alert = null;
			self._silentNotification = null;
			self._isPasswordResetRequired = false;
			self._broadSpecialty = null;
			self._apiError = null;
			self._userStatus = null;
			self._userPassword = null;
			self._buttonPressed = null;
			self._isFormDirty = null;
			self._imagePath = null;
			self._caseLogFormToGet = null;
			self._resetDate = null;
			self._caseLogNumbers = null;
			self._lastCaseLogged = null;
			self._notificationToken = null;
			self._startTimeOfApp = null;
			self._isTabBarVisible = false;
			self._conduct = [];
			self._observedAnalyticsCount = null;
			self._assistedAnalyticsCount = null;
			self._performedAnalyticsCount = null;
			self._generalAnesthesiaAnalyticsCount = null;
			self._regionalAnesthesiaAnalyticsCount = null;
			self._TIVAAnalyticsCount = null;
			self._montioredAnesthesiaCareAnalyticsCount = null;
			self._totalHoursOfSurgeriesPerformed = null;
		},

		validateUserToken: flow(function* validateUserToken() {
			try {
				const userToken = yield SecureStore.getItemAsync(SecureStoreEnum.TOKEN.description);
				if (userToken) {
					console.log("User Token Found !!!!!!!!");
					NetworkUtils.setTokenInHeader(userToken);
					const userInfoString = yield SecureStore.getItemAsync(SecureStoreEnum.USER.description);
					const userInfo = JSON.parse(userInfoString) || {};
					self.markUserSignedIn(
						userToken,
						userInfo.id,
						userInfo.userName,
						userInfo.name,
						userInfo.userRole,
						userInfo.broadSpecialty,
						userInfo.superSpecialty,
						userInfo.subSpecialty,
						userInfo.designation,
						userInfo.workPlace,
						userInfo.city,
						userInfo.medicalCouncilName,
						userInfo.yearOfRegistration,
						userInfo.medicalRegistrationNumber,
						userInfo.verifiedMedicalRegistrationNumber
					);
				} else {
					self.markUserSignedOut();
				}
			} catch (error) {
				console.error("AppStore > validateUserToken ");
				console.log(error.stack);
				self.markUserSignedOut();
			}
		}),

		executeForgotPassword: flow(function* executeForgotPassword(data, navigation) {
			try {
				self._isLoading = true;
				const response = yield execute("forgotPassword", data);
				if (response) {
					console.log(response);
					navigation.navigate("ResetPasswordScreen", { enteredMail: data.User.userName });
					return response;
				} else {
					console.log(response.error);
				}
			} catch (error) {
				console.log(error);
			} finally {
				self._isLoading = false;
			}
		}),

		sendDataToBigQuery: flow(function* sendDataToBigQuery(data) {
			try {
				self._isLoading = true;
				const response = yield execute("sendDataToBigQuery", data, self._userToken);
				if (response) {
					console.log("is this the response for the bigQuery API", response);
					return response;
				} else {
					console.log(response.error);
				}
			} catch (error) {
				console.log(error);
			} finally {
				self._isLoading = false;
			}
		}),

		requestDataFromBigQuery: flow(function* requestDataFromBigQuery(data) {
			try {
				self._isLoading = true;
				const response = yield execute("callStoredProcedure", data, self._userToken);

				if (response && !response.error) {
					return response;
				} else {
					console.error("Error in bigQuery API response:", response?.error || "Unknown error");
					throw new Error(response?.error || "Unknown error");
				}
			} catch (error) {
				console.error("Error in requestDataFromBigQuery:", error);
				throw error; // Re-throw the error so it can be handled by the caller
			} finally {
				self._isLoading = false;
			}
		}),

		executePasswordReset: flow(function* executePasswordReset(data, navigation, errorHandler) {
			try {
				self._isLoading = false;
				const response = yield execute("resetPassword", data);
				if (response) {
					console.log(response);
					if (response.message == "InvalidOTPException") {
						errorHandler();
					} else {
						navigation.navigate("Login Page");
					}
					return response;
				} else {
					console.log(response.error);
				}
			} catch (error) {
				console.log(error);
			} finally {
				self._isLoading = false;
			}
		}),

		register: flow(function* register(formData) {
			let result = {};
			try {
				self._isLoading = true;
				let data = {
					User: formData,
					isUserVerificationRequired: true,
				};
				console.log("Register FORM Data", data);
				const responseData = yield execute("/register", data);
				console.log("responseData for registeration", responseData);
				if (responseData.message === "UserAlreadyExistsException") {
					result = {
						status: "FAILED",
						data: {
							reason: "User already registered.",
						},
					};
				} else if (responseData.data) {
					result = {
						status: "SUCCESS",
						data: responseData.data,
					};
				} else {
					result = {
						status: "ERROR",
						data: {
							reason: "We're sorry, but we're having trouble processing your request. Please try again later.",
						},
					};
				}
			} catch (error) {
				console.error("AppStore > Register ", error);
				result = {
					status: "ERROR",
					data: {
						reason: "We're sorry, but we're having trouble processing your request. Please try again later.",
					},
				};
			} finally {
				self._isLoading = false;
				return result;
			}
		}),

		VerifyAccount: flow(function* VerifyAccount(formData) {
			let status = "unknown";
			try {
				self._isLoading = true;
				let data = {
					User: formData,
					isUserVerificationRequired: true,
				};
				console.log("Verify Account Form", data);
				const responseData = yield execute("/verifyAccount", data);

				console.log("responseData for OTP", responseData);
				if (responseData.message === "InvalidOTPException") {
					status = "FAILED";
				} else {
					status = "SUCCESS";
				}
			} catch (error) {
				console.error("AppStore > Register ", error);
				status = "ERROR";
			} finally {
				self._isLoading = false;
				return status;
			}
		}),

		SendVerificationCode: flow(function* SendVerificationCode(formData) {
			let status = "unknown";
			try {
				self._isLoading = true;
				console.log("Verify Account Form", formData);
				const responseData = yield execute("/sendVerificationCode", formData);

				console.log("SendVerificationCode for OTP", responseData);
				if (responseData.message === "InvalidOTPException") {
					status = "FAILED";
				} else {
					status = "SUCCESS";
				}
			} catch (error) {
				console.error("AppStore > SendVerificationCode ", error);
				status = "ERROR";
			} finally {
				self._isLoading = false;
				return status;
			}
		}),

		SignIn: flow(function* SignIn(formData, skipPostLogin = false) {
			try {
				self._isLoading = true;
				const response = yield execute("/login", formData);
				console.log("SIGN in", response);
				//const userToken = yield Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, "betic.qms");
				const userToken = response?.sessionKey;
				console.log("userToken : ", userToken);
				self._userToken = userToken;
				console.log("self._userToken", self._userToken);
				console.log("user response : ", response);
				if (userToken) {
					NetworkUtils.setTokenInHeader(userToken);

					if (!skipPostLogin) {
						yield SecureStore.setItemAsync(SecureStoreEnum.TOKEN.description, userToken);
						self._isPasswordResetRequired = response?.userStatus === UserStatus.RESET_PASSWORD_REQUIRED;
						const userRole = response?.role;
						const userName = response?.userName;
						const name = response?.name;
						const broadSpecialty = response?.broadSpecialty;
						const superSpecialty = response?.superSpecialty;
						const subSpecialty = response?.subSpecialty;
						const designation = response?.designation;
						const workPlace = response?.workPlace;
						const city = response?.city;
						const medicalCouncilName = response?.medicalCouncilName;
						const yearOfRegistration = response?.yearOfRegistration;
						const medicalRegistrationNumber = response?.medicalRegistrationNumber;

						self.markUserSignedIn(
							userToken,
							response.id,
							userName,
							name,
							userRole,
							broadSpecialty,
							superSpecialty,
							subSpecialty,
							designation,
							workPlace,
							city,
							medicalCouncilName,
							yearOfRegistration,
							medicalRegistrationNumber
						);
					}

					return response;
				} else {
					return false;
				}
			} catch (error) {
				console.error("AppStore > SignIn ", error);
			} finally {
				self._isLoading = false;
			}
		}),

		UploadImage: flow(function* UploadImage(imageInput) {
			try {
				console.log("IMage INPUTEnnnnnn", imageInput);
				self._isLoading = true;
				const userId = self._userId;
				const response = yield uploadImage(imageInput, userId, self._userToken);
				//const userToken = yield Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, "betic.qms");
				const userToken = self._userToken;
				console.log("userToken : ", self._userToken);
				console.log("user response : ", response);
				if (self._userToken) {
					NetworkUtils.setTokenInHeader(self._userToken);
					return response;
				} else {
					return false;
				}
			} catch (error) {
				console.error("AppStore > Upload Image Error ", error);
			} finally {
				self._isLoading = false;
			}
		}),

		ForgotPassword: flow(function* ForgotPassword(formData) {
			try {
				self._isLoading = true;
				yield execute("/forgotPassword", formData);
				return true;
			} catch (error) {
				console.error("AppStore > ForgotPassword ", error);
			} finally {
				self._isLoading = false;
			}
		}),

		ResetPassword: flow(function* ResetPassword(formData) {
			try {
				self._isLoading = true;

				const responseData = yield execute("/resetPassword", formData);
				if (responseData.message) {
					return responseData.message;
				} else {
					return "success";
				}
			} catch (error) {
				console.error("AppStore > resetPassword ", error);
			} finally {
				self._isLoading = false;
			}
		}),

		SignOut: flow(function* SignOut(navigation) {
			try {
				self._isLoading = true;
				const sendUserSessionData = sendUserSessionDataToBigQueryForAdminAnalytics(this._startTimeOfApp, new Date().toISOString());
				console.log("sendUserSessionData", sendUserSessionData);

				yield SecureStore.deleteItemAsync(SecureStoreEnum.TOKEN.description);
				yield SecureStore.deleteItemAsync(SecureStoreEnum.USER.description);
				self.markUserSignedOut();
				rootStore.resetAllData();
				navigation.navigate("Login Page");
			} catch (error) {
				console.error("AppStore > SignOut ", error);
			} finally {
				self._isLoading = false;
			}
		}),

		setAPIError(error) {
			self._apiError = APIErrorType.create({
				name: error.name,
				message: error.message,
				type: error.type,
			});
		},
	}));

const appStoreInstance = AppStore.create();
export default appStoreInstance;
