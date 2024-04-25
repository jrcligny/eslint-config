import javascript from "./lib/javascript/index.js";

const defaultOptions = {
	files: ["**/*.js"],
	languageOptions: {
		ecmaVersion: 2022,
	},
};

export const javascriptConfig = {
	...defaultOptions,
	rules: {
		...javascript,
	}
};

export default [
	javascriptConfig,
];
