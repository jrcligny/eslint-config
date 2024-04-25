export default {
	/**
	 * Disallow Array constructors
	 * @see https://eslint.org/docs/v8.x/rules/no-array-constructor
	 */
	'no-array-constructor': 'error',

	/**
	 * [eslint:recommended] Enforce return statements in callbacks of array methods
	 * @see https://eslint.org/docs/v8.x/rules/array-callback-return
	 *
	 * (keep code concise) Allows callbacks of methods that require a return value to implicitly return undefined
	 * with a return statement containing no expression.
	 */
	'array-callback-return': ['error', { allowImplicit: true }],

	/**
	 * [eslint:recommended] Disallow sparse arrays
	 * @see https://eslint.org/docs/v8.x/rules/no-sparse-arrays
	 */
	'no-sparse-arrays': 'error',
};
