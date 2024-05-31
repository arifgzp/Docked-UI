import { types } from "mobx-state-tree";
import { RootStore } from "../models";
//import { fetch as nativeFetch } from "react-native-fetch-api";
//import { polyfill as polyfillFetch } from "react-native-polyfill-globals/src/fetch";
//import { polyfill as polyfillEncoding } from "react-native-polyfill-globals/src/encoding";
//import { polyfill as polyfillReadableStream } from "react-native-polyfill-globals/src/readable-stream";
import NetworkUtils from "../utils/NetworkUtils";

const customJSONParser = (data) => {
	console.log("====== RESPONSE STARTS ======== ");
	//console.log(data);
	const jsonData = JSON.parse(data);
	console.log(jsonData);
	console.log("====== RESPONSE ENDS ======== ");
	return jsonData;
};

//polyfillFetch();
//polyfillEncoding();
//polyfillReadableStream();

const requestConfig = {
	jsonSerializer: {
		parse: customJSONParser,
		stringify: JSON.stringify,
	},
	headers: {
		"Content-Type": "application/json",
	},
	//fetch: nativeFetch,
};

const rootStore = RootStore.create(undefined, {
	gqlHttpClient: NetworkUtils.getGraphQLHTTPClient(requestConfig),
});

export default rootStore;
