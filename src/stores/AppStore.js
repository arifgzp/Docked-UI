import { flow, types } from "mobx-state-tree";
import { UserRole, UserStatus, useQuery } from "../models";
import NetworkUtils from "../utils/NetworkUtils";
import rootStore from "./MobXRootStore";

export const SelectionModeEnum = Object.freeze({
	CAMP: Symbol("campMode"),
	CLINIC: Symbol("clinicMode"),
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
		if (notifyError) appStoreInstance.setAPIError(error);
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
		_apiError: types.maybeNull(APIErrorType),
	})
	.views((self) => ({
		get UserId() {
			return self._userId;
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
		markUserSignedIn(token, id, userName, role) {
			self._isSignedIn = true;
			self._userToken = token;
			self._userName = userName;
			self._userRole = role;
			self._userId = id;
		},

		markUserSignedOut() {
			self._isSignedIn = false;
			self._userToken = null;
			self._selectionMode = null;
			self._userName = null;
			self._userRole = null;
			self._pharmaID = null;
			self._campAdminID = null;
			self._alert = false;
			self._silentNotification = false;
			self._userId = null;
		},

		Register: flow(function* Register(formData) {
			try {
				self._isLoading = true;
				console.log(formData);
				const responseData = yield execute("/register", formData);
				if (responseData.data) {
					return "success";
				} else if (responseData.message) {
					return responseData.message;
				} else {
					return false;
				}
			} catch (error) {
				console.error("AppStore > Register ", error);
			} finally {
				self._isLoading = false;
			}
		}),

		SignIn: flow(function* SignIn(formData) {
			try {
				self._isLoading = true;
				const response = yield execute("/login", formData);
				//const userToken = yield Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.MD5, "betic.qms");
				const userToken = response?.sessionKey;
				console.log("userToken : ", userToken);
				if (userToken) {
					NetworkUtils.setTokenInHeader(userToken);
					self._isPasswordResetRequired = response?.userStatus === UserStatus.RESET_PASSWORD_REQUIRED;
					const userRole = response?.role;
					const userName = response?.userName;

					self.markUserSignedIn(userToken, response.id, userName, userRole);

					return true;
				} else {
					return false;
				}
			} catch (error) {
				console.error("AppStore > SignIn ", error);
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
