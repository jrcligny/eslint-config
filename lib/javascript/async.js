export default {
	/**
	 * [eslint:recommended] Disallow using an async function as a Promise executor
	 * @see https://eslint.org/docs/v8.x/rules/no-async-promise-executor
	 */
	'no-async-promise-executor': 'error',
	/**
	 * Disallow returning values from Promise executor functions
	 * @see https://eslint.org/docs/v8.x/rules/no-promise-executor-return
	 */
	'no-promise-executor-return': 'error',
	/**
	 * Disallow assignments that can lead to race conditions due to usage of await or yield
	 * @see https://eslint.org/docs/v8.x/rules/require-atomic-updates}
	 *
	 * not enabled because it is very buggy
	 */
	'require-atomic-updates': 'off',

	/**
	 * Allow async functions which have no await expression
	 * @see https://eslint.org/docs/v8.x/rules/require-await
	 */
	'require-await': 'off',

	/**
	 * Disallow await inside of loops
	 * @see https://eslint.org/docs/v8.x/rules/no-await-in-loop
	 *
	 * In many cases the iterations of a loop are not actually independent of each-other.
	 * For example, the output of one iteration might be used as the input to another.
	 * Or, loops may be used to retry asynchronous operations that were unsuccessful.
	 * Or, loops may be used to prevent your code from sending an excessive amount of requests in parallel.
	 * In such cases it makes sense to use await within a loop and it is recommended to disable the rule via a standard ESLint disable comment.
	 */
	'no-await-in-loop': 'error',
};
