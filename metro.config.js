// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const defaultConfig = getDefaultConfig(__dirname);

const sourceExts = ["jsx", "js", "ts", "tsx", "cjs"];
defaultConfig.resolver.sourceExts.push(...sourceExts);

//Added for module 'graphql-request' STARTS
defaultConfig.resolver.resolverMainFields = ["react-native", "browser", "main"];
defaultConfig.resolver.unstable_enablePackageExports = true;
defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
	if (moduleName === "graphql-request") {
		const sourceFilePath = require.resolve(moduleName);
		return {
			filePath: sourceFilePath,
			type: "sourceFile",
		};
	}
	/*if (moduleName === "cross-fetch") {
		let sourceFilePath = require.resolve(moduleName);
		sourceFilePath = path.resolve(sourceFilePath, "../react-native-ponyfill.js");
		console.log("========================");
		console.log("===== cross-fetch ======");
		console.log("========================");
		console.log(sourceFilePath);
		return {
			filePath: sourceFilePath,
			type: "sourceFile",
		};
	}*/
	// Optionally, chain to the standard Metro resolver.
	return context.resolveRequest(context, moduleName, platform);
};
//Added for module 'graphql-request' ENDS

module.exports = defaultConfig;
