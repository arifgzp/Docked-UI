class FormValidation {
	static validateEmail(data) {
		//Email Field validation
		const emailCheckRegex =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const isEmailValid = emailCheckRegex.test(data);
		return isEmailValid;
	}

	static validatePassword(data) {
		//Email Field validation
		const passWordLengthCheckRegex = /^.{6,}$/;
		const isPasswordValid = passWordLengthCheckRegex.test(data);
		return isPasswordValid;
	}

	static validateMobileNo(mobileNumber) {
		const mobileNumberCheckRegex = /^\d{10}$/;
		const isMobileNumberValid = mobileNumberCheckRegex.test(mobileNumber);
		return isMobileNumberValid;
	}

	static validateNumberField(value) {
		const numberCheckRegex = /^[1-9]\d*$/;
		const isNumberFieldValid = numberCheckRegex.test(value);
		return isNumberFieldValid;
	}

	static validatePatientIDField(value) {
		const numberCheckRegex = /^[0-9]{14}$/;
		const isPatientIDFieldValid = numberCheckRegex.test(value);
		return isPatientIDFieldValid;
	}

	static validateAddPatientForm(formData) {
		let errorInfo = {};
		let isFormValid = true;

		// if (!formData['patientID'] || !FormValidation.validatePatientIDField(formData['patientID'])) {
		// 	errorInfo['patientID'] = {
		// 		isEmpty: true,
		// 		msg: 'Please enter a valid 14-digit (Aabha Id) !',
		// 	};
		// 	isFormValid = false;
		// } else {
		// 	errorInfo['patientID'] = {
		// 		isEmpty: false,
		// 		msg: '',
		// 	};
		// }

		if (!formData["name"]) {
			errorInfo["name"] = {
				isEmpty: true,
				msg: "Please enter a name !",
			};
			isFormValid = false;
		} else {
			errorInfo["name"] = {
				isEmpty: false,
				msg: "",
			};
		}
		if (!formData["address"]) {
			errorInfo["address"] = {
				isEmpty: true,
				msg: "Please enter a address !",
			};
			isFormValid = false;
		} else {
			errorInfo["address"] = {
				isEmpty: false,
				msg: "",
			};
		}
		// if (!formData['landmark']) {
		// 	errorInfo['landmark'] = {
		// 		isEmpty: true,
		// 		msg: 'Please enter a landmark !',
		// 	};
		// 	isFormValid = false;
		// } else {
		// 	errorInfo['landmark'] = {
		// 		isEmpty: false,
		// 		msg: '',
		// 	};
		// }
		if (!formData["city"]) {
			errorInfo["city"] = {
				isEmpty: true,
				msg: "Please enter a city !",
			};
			isFormValid = false;
		} else {
			errorInfo["city"] = {
				isEmpty: false,
				msg: "",
			};
		}
		if (!formData["state"]) {
			errorInfo["state"] = {
				isEmpty: true,
				msg: "Please enter a state !",
			};
			isFormValid = false;
		} else {
			errorInfo["state"] = {
				isEmpty: false,
				msg: "",
			};
		}
		if (!formData["pinCode"] || formData["pinCode"].length < 6) {
			errorInfo["pinCode"] = {
				isEmpty: true,
				msg: "Please enter a valid pinCode !",
			};
			isFormValid = false;
		} else {
			errorInfo["pinCode"] = {
				isEmpty: false,
				msg: "",
			};
		}

		if (!formData["mobileNo"] || !FormValidation.validateMobileNo(formData["mobileNo"])) {
			errorInfo["mobileNo"] = {
				isInValid: true,
				msg: "Please enter a valid mobile number !",
			};
			isFormValid = false;
		} else {
			errorInfo["mobileNo"] = {
				isInValid: false,
				msg: "",
			};
		}
		// if (!formData['altMobileNo'] || !FormValidation.validateMobileNo(formData['altMobileNo'])) {
		// 	errorInfo['altMobileNo'] = {
		// 		isInValid: true,
		// 		msg: 'Please enter a valid mobile number !',
		// 	};
		// 	isFormValid = false;
		// } else {
		// 	errorInfo['altMobileNo'] = {
		// 		isInValid: false,
		// 		msg: '',
		// 	};
		// }

		if (!formData["gender"]) {
			errorInfo["gender"] = {
				isEmpty: true,
				msg: "Please choose a gender !",
			};
			isFormValid = false;
		} else {
			errorInfo["gender"] = {
				isEmpty: false,
				msg: "",
			};
		}

		if (!formData["maskType"]) {
			errorInfo["maskType"] = {
				isEmpty: true,
				msg: "Please choose a maskType !",
			};
			isFormValid = false;
		} else {
			errorInfo["maskType"] = {
				isEmpty: false,
				msg: "",
			};
		}

		if (!formData["deviceName"]) {
			errorInfo["deviceName"] = {
				isEmpty: true,
				msg: "Please choose a deviceName !",
			};
			isFormValid = false;
		} else {
			errorInfo["deviceName"] = {
				isEmpty: false,
				msg: "",
			};
		}

		if (!formData["dateOfBirth"]) {
			errorInfo["dateOfBirth"] = {
				isInValid: true,
				msg: " Please Select Patient's Date of birth !",
			};
			isFormValid = false;
		} else {
			errorInfo["dateOfBirth"] = {
				isInValid: false,
				msg: "",
			};
		}

		// if (!formData['height'] || !FormValidation.validateNumberField(formData['height'])) {
		// 	errorInfo['height'] = {
		// 		isInValid: true,
		// 		msg: 'Please enter valid height !',
		// 	};
		// 	isFormValid = false;
		// } else {
		// 	errorInfo['height'] = {
		// 		isInValid: false,
		// 		msg: '',
		// 	};
		// }

		// if (!formData['weight'] || !FormValidation.validateNumberField(formData['weight'])) {
		// 	errorInfo['weight'] = {
		// 		isInValid: true,
		// 		msg: 'Please enter valid weight !',
		// 	};
		// 	isFormValid = false;
		// } else {
		// 	errorInfo['weight'] = {
		// 		isInValid: false,
		// 		msg: '',
		// 	};
		// }

		return { error: errorInfo, isFormValid: isFormValid };
	}

	static validateAddUserForm(formData, userType, distributorId, hcpId) {
		let errorInfo = {};
		let isFormValid = true;
		if (userType == "PHYSICIANS") {
			if (!formData["dateOfBirth"]) {
				errorInfo["dateOfBirth"] = {
					isEmpty: true,
					msg: "Please enter a date Of Birth !",
				};
				isFormValid = false;
			}
			if (!distributorId) {
				errorInfo["distributorId"] = {
					isEmpty: true,
					msg: "Please Select a distributor !",
				};
				isFormValid = false;
			}

			if (!hcpId) {
				errorInfo["hcpId"] = {
					isEmpty: true,
					msg: "Please Select a HCP !",
				};
				isFormValid = false;
			}
		}
		if (userType == "HELATHCAREPROVIDER") {
			if (!distributorId) {
				errorInfo["distributorId"] = {
					isEmpty: true,
					msg: "Please Select a distributor !",
				};
				isFormValid = false;
			}
		}

		if (!formData["email"] || !FormValidation.validateEmail(formData["email"])) {
			errorInfo["email"] = {
				isEmpty: true,
				msg: "Please enter a email !",
			};
			isFormValid = false;
		} else {
			errorInfo["email"] = {
				isEmpty: false,
				msg: "",
			};
		}

		if (!formData["name"]) {
			errorInfo["name"] = {
				isEmpty: true,
				msg: "Please enter a name !",
			};
			isFormValid = false;
		} else {
			errorInfo["name"] = {
				isEmpty: false,
				msg: "",
			};
		}
		if (!formData["address"]) {
			errorInfo["address"] = {
				isEmpty: true,
				msg: "Please enter a address !",
			};
			isFormValid = false;
		} else {
			errorInfo["address"] = {
				isEmpty: false,
				msg: "",
			};
		}
		if (!formData["city"]) {
			errorInfo["city"] = {
				isEmpty: true,
				msg: "Please enter a city !",
			};
			isFormValid = false;
		} else {
			errorInfo["city"] = {
				isEmpty: false,
				msg: "",
			};
		}
		if (!formData["state"]) {
			errorInfo["state"] = {
				isEmpty: true,
				msg: "Please enter a state !",
			};
			isFormValid = false;
		} else {
			errorInfo["state"] = {
				isEmpty: false,
				msg: "",
			};
		}
		if (!formData["pinCode"] || formData["pinCode"].length < 6) {
			errorInfo["pinCode"] = {
				isEmpty: true,
				msg: "Please enter a valid pinCode !",
			};
			isFormValid = false;
		} else {
			errorInfo["pinCode"] = {
				isEmpty: false,
				msg: "",
			};
		}

		if (!formData["mobileNo"] || !FormValidation.validateMobileNo(formData["mobileNo"])) {
			errorInfo["mobileNo"] = {
				isInValid: true,
				msg: "Please enter a valid mobile number !",
			};
			isFormValid = false;
		} else {
			errorInfo["mobileNo"] = {
				isInValid: false,
				msg: "",
			};
		}

		return { error: errorInfo, isFormValid: isFormValid };
	}
}

export default FormValidation;
