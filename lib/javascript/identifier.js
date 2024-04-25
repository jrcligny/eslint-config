export default {
	/**
	 * Enforce minimum and maximum identifier lengths
	 * @see https://eslint.org/docs/v8.x/rules/id-length
	 */
	/**
	 * Disallow specified identifiers
	 * @see https://eslint.org/docs/v8.x/rules/id-denylist
	 */
	/**
	 * Require identifiers to match a specified regular expression
	 * @see https://eslint.org/docs/v8.x/rules/id-match
	 */
	/**
	 * Disallow dangling underscores in identifiers
	 * @see https://eslint.org/docs/v8.x/rules/no-underscore-dangle
	 */
	'no-underscore-dangle': ['error', {
		allow: [],
		allowAfterThis: false,
		allowAfterSuper: false,
		enforceInMethodNames: true,
		enforceInClassFields: false,
	}],
};
