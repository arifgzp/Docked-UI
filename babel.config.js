module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"transform-inline-environment-variables",
				{
					include: ["NODE_ENV", "REACT_NATIVE_MODE"],
				},
			],
			"react-native-reanimated/plugin", //Reanimated plugin has to be listed last.
		],
	};
};
