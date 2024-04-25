export default {
	/**
	 * [eslint:recommended] Disallow reassigning class members
	 * @see https://eslint.org/docs/v8.x/rules/no-class-assign
	 */
	'no-class-assign': 'error',

	/**
	 * [eslint:recommended] Disallow duplicate class members
	 * @see https://eslint.org/docs/v8.x/rules/no-dupe-class-members
	 */
	'no-dupe-class-members': 'error',

	/**
	 * [eslint:recommended] Enforce return statements in getters
	 * @see https://eslint.org/docs/v8.x/rules/getter-return
	 *
	 * (keep code concise) Allows implicitly returning undefined with a return statement.
	 */
	'getter-return': ['error', { allowImplicit: true }],
	/**
	 * [eslint:recommended] Disallow returning values from setters
	 * @see https://eslint.org/docs/v8.x/rules/no-setter-return
	 */
	'no-setter-return': 'error',

	/**
	 * Require grouped accessor pairs in object literals and classes
	 * @see https://eslint.org/docs/v8.x/rules/grouped-accessor-pairs
	 */
	'grouped-accessor-pairs': 'error',
	/**
	 * Enforce getter and setter pairs in objects and classes for properties with setter
	 * @see https://eslint.org/docs/v8.x/rules/accessor-pairs
	 */
	'accessor-pairs': 'error',

	/**
	 * [eslint:recommended] Require super() calls in constructors
	 * @see https://eslint.org/docs/v8.x/rules/constructor-super
	 */
	'constructor-super': 'error',
	/**
	 * [eslint:recommended] Disallow this/super before calling super() in constructors
	 * @see https://eslint.org/docs/v8.x/rules/no-this-before-super
	 */
	'no-this-before-super': 'error',
	/**
	 * Disallow returning value from constructor
	 * Note that returning nothing with flow control is allowed
	 * @see https://eslint.org/docs/v8.x/rules/no-constructor-return
	 */
	'no-constructor-return': 'error',
	/**
	 * Disallow unnecessary constructors
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-constructor
	 */
	'no-useless-constructor': 'error',

	/**
	 * Enforce that class methods utilize this
	 * @see https://eslint.org/docs/v8.x/rules/class-methods-use-this
	 */
	'class-methods-use-this': 'off',

	/**
	 * Disallow unused private class members
	 * @see https://eslint.org/docs/v8.x/rules/no-unused-private-class-members
	 */
	'no-unused-private-class-members': 'error',
	/**
	 * Disallow empty static blocks
	 * @see https://eslint.org/docs/v8.x/rules/no-empty-static-block
	 */
	'no-empty-static-block': 'error',
};
