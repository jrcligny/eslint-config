import js from "@eslint/js";

export default [
	{
		files: ["**/*.ts", "**/*.js"],
		rules: js.configs.recommended.rules,
	}
];
