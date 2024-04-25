export default {
	/**
	 * Enforce camelcase naming convention
	 * @see https://eslint.org/docs/v8.x/rules/camelcase
	 */
	camelcase: 'error',

	/**
	 * Enforce consistent brace style for all control statements
	 * @see https://eslint.org/docs/v8.x/rules/curly
	 */
	curly: ['error', 'all'],

	/**
	 * Enforce the consistent use of either function declarations or expressions
	 * @see https://eslint.org/docs/v8.x/rules/func-style
	 */
	'func-style': ['error', 'expression'],
	/**
	 * Require braces around arrow function bodies only when needed
	 * @see https://eslint.org/docs/v8.x/rules/arrow-body-style
	 */
	'arrow-body-style': ['error', 'as-needed'],

	/**
	 * Enforce or disallow capitalization of the first letter of a comment
	 * @see https://eslint.org/docs/v8.x/rules/capitalized-comments
	 */
	'capitalized-comments': ['error', 'always'],
	/**
	 * Enforce a particular style for multiline comments
	 * @see https://eslint.org/docs/v8.x/rules/multiline-comment-style
	 */
	'multiline-comment-style': ['error', 'starred-block'],
	/**
	 * Disallow inline comments after code
	 * @see https://eslint.org/docs/v8.x/rules/no-inline-comments
	 */
	'no-inline-comments': 'error',
};
