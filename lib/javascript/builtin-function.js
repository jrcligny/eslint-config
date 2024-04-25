export default {
	/**
	 * [eslint:recommended] Disallow reassigning function declarations
	 * @see https://eslint.org/docs/v8.x/rules/no-func-assign
	 * 
	 * Handled by TypeScript
	 */
	'no-func-assign': 'error',

	/**
	 * Disallow new operators with the Function object
	 * @see https://eslint.org/docs/v8.x/rules/no-new-func
	 */
	'no-new-func': 'error',

	/**
	 * [eslint:recommended] Disallow duplicate arguments in function definitions
	 * @see https://eslint.org/docs/v8.x/rules/no-dupe-args
	 * 
	 * Handled by TypeScript
	 */
	'no-dupe-args': 'error',
	/**
	 * Enforce default parameters to be last
	 * @see https://eslint.org/docs/v8.x/rules/default-param-last
	 */
	'default-param-last': 'error',
	/**
	 * Disallow reassigning function parameters
	 * @see https://eslint.org/docs/v8.x/rules/no-param-reassign
	 */
	'no-param-reassign': ['error', {
		props: true,
		ignorePropertyModificationsFor: [
			// For reduce accumulators
			'acc',
			'accumulator',
			// For e.returnvalue
			'e',
			// For Koa routing
			'ctx',
			'context',
			// For Express
			'req',
			'request',
			'res',
			'response',
			// For ReactRouter context
			'staticContext',
		],
	}],
	/**
	 * Disallow the use of arguments.caller or arguments.callee
	 * @see https://eslint.org/docs/v8.x/rules/no-caller
	 */
	'no-caller': 'error',
	/**
	 * Require rest parameters instead of arguments
	 * @see https://eslint.org/docs/v8.x/rules/prefer-rest-params
	 */
	'prefer-rest-params': 'error',

	/**
	 * Require return statements to either always or never specify values
	 * @see https://eslint.org/docs/v8.x/rules/consistent-return
	 */
	'consistent-return': 'error',
	/**
	 * Disallow redundant return statements
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-return
	 */
	'no-useless-return': 'error',
	/**
	 * Disallow assignment operators in return statements
	 * @see https://eslint.org/docs/v8.x/rules/no-return-assign
	 */
	'no-return-assign': ['error', 'always'],

	/**
	 * [strict-mode] Disallow use of this in contexts where the value of this is undefined
	 * @see https://eslint.org/docs/v8.x/rules/no-invalid-this
	 */
	'no-invalid-this': 'error',

	/**
	 * Enforce consistent naming when capturing the current execution context
	 * Prevent from capturing nested context
	 * @see https://eslint.org/docs/v8.x/rules/consistent-this
	 */
	'consistent-this': ['error', 'that'],

	/**
	 * Disallow unnecessary calls to .call() and .apply()
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-call
	 */
	'no-useless-call': 'error',
	/**
	 * Require spread operators instead of .apply()
	 * @see https://eslint.org/docs/v8.x/rules/prefer-spread
	 */
	'prefer-spread': 'error',
	/**
	 * Disallow unnecessary calls to .bind()
	 * @see https://eslint.org/docs/v8.x/rules/no-extra-bind
	 */
	'no-extra-bind': 'error',

	/**
	 * Require using arrow functions for callbacks
	 * @see https://eslint.org/docs/v8.x/rules/prefer-arrow-callback
	 *
	 * Allows function expressions containing this to be used as callbacks,
	 * as long as the function has not been explicitly bound.
	 */
	'prefer-arrow-callback': ['error', {
		allowUnboundThis: true,
	}],

	/**
	 * Require function names to match the name of the variable or property to which they are assigned
	 * @see https://eslint.org/docs/v8.x/rules/func-name-matching
	 */
	'func-name-matching': 'error',
	/**
	 * Enforce named function expressions to aid in debugging.
	 * @see https://eslint.org/docs/v8.x/rules/func-names
	 *
	 * Use ECMAScript 6 a name property
	 */
	'func-names': ['error', 'as-needed'],

	/**
	 * [eslint:recommended] Require generator functions to contain yield
	 * @see https://eslint.org/docs/v8.x/rules/require-yield
	 */
	'require-yield': 'error',
};
