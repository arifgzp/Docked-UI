import { createHttpClient } from "mst-gql";
import Constants from "expo-constants";

//const DEV_SERVER_URL = "localhost:6062";
const DEV_SERVER_URL = "164.52.218.115:6062";
const PROD_SERVER_URL = "164.52.218.115:6062";

let _gqlHttpClient = null;

function getProtocol() {
	if (process.env.REACT_NATIVE_MODE === "PRODUCTION") {
		return `http`;
	} else {
		return `http`;
	}
}

function getServerIP() {
	if (process.env.REACT_NATIVE_MODE === "PRODUCTION") {
		return `${PROD_SERVER_URL}`;
	} else {
		return `${DEV_SERVER_URL}`;
	}
}

function getServerURL() {
	return `${getProtocol()}://${getServerIP()}`;
}

function getServerAPIURL() {
	return `${getProtocol()}://${getServerIP()}/api`;
}

function getGraphQLServerURL() {
	return `${getProtocol()}://${getServerIP()}/api/graphql`;
}

function getGraphQLHTTPClient(requestConfig = {}) {
	if (!_gqlHttpClient) {
		_gqlHttpClient = createHttpClient(getGraphQLServerURL(), requestConfig);
	}
	return _gqlHttpClient;
}

function setTokenInHeader(token) {
	getGraphQLHTTPClient().setHeader("sessionKey", token);
}

console.log("======================== Network Utils ========================");
console.log(`Server REACT_NATIVE_MODE = ${process.env.REACT_NATIVE_MODE}`);
console.log(`Server NODE_ENV = ${process.env.NODE_ENV}`);
console.log(getServerURL());
console.log("======================== Network Utils ========================");

export default {
	getProtocol,
	getServerIP,
	getServerURL,
	getServerAPIURL,
	getGraphQLServerURL,
	getGraphQLHTTPClient,
	setTokenInHeader,
};
