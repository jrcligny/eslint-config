export default {
	/**
	 * Disallow calls to the Object constructor without an argument
	 * @see https://eslint.org/docs/v8.x/rules/no-object-constructor
	 */
	'no-object-constructor': 'error',

	/**
	 * Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
	 * @see https://eslint.org/docs/v8.x/rules/prefer-object-has-own
	 */
	'prefer-object-has-own': 'error',

	/**
	 * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
	 * @see https://eslint.org/docs/v8.x/rules/prefer-object-spread
	 */
	'prefer-object-spread': 'error',
	/**
	 * Require method and property shorthand syntax for object literals
	 * @see https://eslint.org/docs/v8.x/rules/object-shorthand
	 *
	 * avoidQuotes: long-form syntax is preferred whenever the object key is a string literal
	 */
	'object-shorthand': ['error', 'always', {
		ignoreConstructors: false,
		avoidQuotes: true,
	}],
	/**
	 * Enforce dot notation whenever possible
	 * @see https://eslint.org/docs/v8.x/rules/dot-notation
	 */
	'dot-notation': 'error',

	/**
	 * Require object keys to be sorted
	 * @see https://eslint.org/docs/v8.x/rules/sort-keys
	 */
	'sort-keys': 'off',
	/**
	 * [eslint:recommended] Disallow duplicate keys in object literals
	 * @see https://eslint.org/docs/v8.x/rules/no-dupe-keys
	 */
	'no-dupe-keys': 'error',

	/**
	 * [eslint:recommended] Disallow calling some Object.prototype methods directly on objects
	 * @see https://eslint.org/docs/v8.x/rules/no-prototype-builtins
	 */
	'no-prototype-builtins': 'error',
	/**
	 * Disallow the use of the __iterator__ property
	 * @see https://eslint.org/docs/v8.x/rules/no-iterator
	 */
	'no-iterator': 'error',
	/**
	 * Disallow the use of the __proto__ property
	 * @see https://eslint.org/docs/v8.x/rules/no-proto
	 */
	'no-proto': 'error',

	/**
	 * Disallow unnecessary computed property keys in objects and classes
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-computed-key
	 */
	'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
};
