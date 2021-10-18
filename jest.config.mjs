/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
	extensionsToTreatAsEsm: [".ts"],
	coverageProvider: "v8",
	globals: {
		"ts-jest": {
			useESM: true,
		},
	},
	moduleNameMapper: {
		"^(\\.{1,2}/.*)\\.js$": "$1",
	},
	
	preset: "ts-jest/presets/js-with-ts-esm",
	rootDir: "src",
};
