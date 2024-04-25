export default {
	/**
	 * Disallow new operators with global non-constructor functions
	 * These functions are: Symbol and BigInt
	 * @see https://eslint.org/docs/v8.x/rules/no-new-native-nonconstructor
	 */
	'no-new-native-nonconstructor': 'error',
	/**
	 * [eslint:recommended] Disallow new operators with the Symbol object
	 * @see https://eslint.org/docs/v8.x/rules/no-new-symbol}
	 *
	 * Use 'no-new-native-nonconstructor'
	 */
	'no-new-symbol': 'off',
	/**
	 * Disallow new operators with the String, Number, and Boolean objects
	 * @see https://eslint.org/docs/v8.x/rules/no-new-wrappers
	 */
	'no-new-wrappers': 'error',
	/**
	 * Disallow new operators outside of assignments or comparisons
	 * @see https://eslint.org/docs/v8.x/rules/no-new
	 */
	'no-new': 'error',

	/**
	 * Require constructor names to begin with a capital letter
	 * @see https://eslint.org/docs/v8.x/rules/new-cap
	 */
	'new-cap': ['error', {
		newIsCap: true,
		newIsCapExceptions: [],
		capIsNew: false,
		capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
	}],

	/**
	 * Disallow extending native types
	 * @see https://eslint.org/docs/v8.x/rules/no-extend-native
	 */
	'no-extend-native': 'error',
	
	/**
	 * [eslint:recommended] Disallow assignments to native objects or read-only global variables
	 * @see https://eslint.org/docs/v8.x/rules/no-global-assign
	 */
	'no-global-assign': ['error', { exceptions: [] }],
	/**
	 * Disallow the use of undefined as an identifier
	 * @see https://eslint.org/docs/v8.x/rules/no-undefined
	 *
	 * Use no-shadow-restricted-names and no-global-assign instead of this rule.
	 */
	'no-undefined': 'off',
	/**
	 * [eslint:recommended] Disallow identifiers from shadowing restricted names
	 * @see https://eslint.org/docs/v8.x/rules/no-shadow-restricted-names
	 */
	'no-shadow-restricted-names': 'error',
	
	/**
	 * Disallow specified global variables
	 * @see https://eslint.org/docs/v8.x/rules/no-restricted-globals
	 */
	'no-restricted-globals': 'off',
	/**
	 * [eslint:recommended] Disallow calling global object properties as functions
	 * These objects are: Math, JSON, Reflect, Atomics and Intl)
	 * @see https://eslint.org/docs/v8.x/rules/no-obj-calls
	 */
	'no-obj-calls': 'error',
	/**
	 * Disallow certain properties on certain objects
	 * @see https://eslint.org/docs/v8.x/rules/no-restricted-properties
	 */
	'no-restricted-properties': ['error', {
		object: 'arguments',
		property: 'callee',
		message: 'arguments.callee is deprecated',
	}, {
		object: 'global',
		property: 'isFinite',
		message: 'Please use Number.isFinite instead',
	}, {
		object: 'self',
		property: 'isFinite',
		message: 'Please use Number.isFinite instead',
	}, {
		object: 'window',
		property: 'isFinite',
		message: 'Please use Number.isFinite instead',
	}, {
		object: 'global',
		property: 'isNaN',
		message: 'Please use Number.isNaN instead',
	}, {
		object: 'self',
		property: 'isNaN',
		message: 'Please use Number.isNaN instead',
	}, {
		object: 'window',
		property: 'isNaN',
		message: 'Please use Number.isNaN instead',
	}, {
		property: '__defineGetter__',
		message: 'Please use Object.defineProperty instead.',
	}, {
		property: '__defineSetter__',
		message: 'Please use Object.defineProperty instead.',
	}, {
		object: 'Math',
		property: 'pow',
		message: 'Use the exponentiation operator (**) instead.',
	}],

	/**
	 * Disallow void operators
	 * @see https://eslint.org/docs/v8.x/rules/no-void
	 */
	'no-void': 'error',

	/**
	 * Require symbol descriptions
	 * @see https://eslint.org/docs/v8.x/rules/symbol-description
	 */
	'symbol-description': 'error',	
};