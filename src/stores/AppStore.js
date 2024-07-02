import { flow, types } from "mobx-state-tree";
import { UserRole, UserStatus, useQuery } from "../models";
import NetworkUtils from "../utils/NetworkUtils";
import rootStore from "./MobXRootStore";
import * as SecureStore from "expo-secure-store";

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

const APIErrorType = types.model("APIError", {
	name: types.string,
	message: types.string,
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
		_userRole: types.maybeNull(types.string),
		_pharmaID: types.maybeNull(types.string),
		_campAdminID: types.maybeNull(types.string),
		_alert: types.maybeNull(types.boolean),
		_silentNotification: types.maybeNull(types.boolean),
		_isPasswordResetRequired: false,
		_broadSpecialty: types.maybeNull(types.string),
		_apiError: types.maybeNull(APIErrorType),
	})
	.views((self) => ({
		get UserId() {
			return self._userId;
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
	}))
	.actions((self) => ({
		setUserId(userId) {
			self._userId = userId;
		},

		setBroadSpecialty(broadSpecialty) {
			self._broadSpecialty = broadSpecialty;
		},

		setSpecialty(specialtyValue) {
			self._specialty = specialtyValue;
		},

		setLogProfile(logProfile) {
			self._logProfile = logProfile;
		},

		markUserSignedIn(token, id, userName, role, broadSpecialty) {
			self._isSignedIn = true;
			self._userToken = token;
			self._userName = userName;
			self._userRole = role;
			self._userId = id;
			self._broadSpecialty = broadSpecialty;
			SecureStore.setItemAsync(SecureStoreEnum.USER.description, JSON.stringify({ userRole: role, userName: userName, id, broadSpecialty }));
		},

		markUserSignedOut() {
			self._isSignedIn = false;
			self._userToken = null;
			self._selectionMode = null;
			self._userName = null;
			self._userRole = null;
			self._alert = false;
			self._silentNotification = false;
			self._userId = null;
			self._broadSpecialty = null;
		},

		validateUserToken: flow(function* validateUserToken() {
			try {
				const userToken = yield SecureStore.getItemAsync(SecureStoreEnum.TOKEN.description);
				if (userToken) {
					console.log("User Token Found !!!!!!!!");
					NetworkUtils.setTokenInHeader(userToken);
					const userInfoString = yield SecureStore.getItemAsync(SecureStoreEnum.USER.description);
					const userInfo = JSON.parse(userInfoString) || {};
					self.markUserSignedIn(userToken, userInfo.id, userInfo.userName, userInfo.userRole, userInfo.broadSpecialty);
				} else {
					self.markUserSignedOut();
				}
			} catch (error) {
				console.error("AppStore > validateUserToken ");
				console.log(error.stack);
				self.markUserSignedOut();
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

		SignIn: flow(function* SignIn(formData, skipPostLogin = false) {
			try {
				self._isLoading = true;
				const response = yield execute("/login", formData);
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
						const broadSpecialty = response?.broadSpecialty;
						self.markUserSignedIn(userToken, response.id, userName, userRole, broadSpecialty);
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

		SignOut: flow(function* SignOut() {
			try {
				self._isLoading = true;
				yield SecureStore.deleteItemAsync(SecureStoreEnum.TOKEN.description);
				yield SecureStore.deleteItemAsync(SecureStoreEnum.USER.description);
				self.markUserSignedOut();
				rootStore.resetAllData();
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
