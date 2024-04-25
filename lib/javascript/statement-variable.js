export default {
	/**
	 * Require variables within the same declaration block to be sorted
	 * @see https://eslint.org/docs/v8.x/rules/sort-vars
	 */
	'sort-vars': 'off',
	/**
	 * Require var declarations be placed at the top of their containing scope
	 * @see https://eslint.org/docs/v8.x/rules/vars-on-top
	 */
	'vars-on-top': 'error',

	/**
	 * Require let or const instead of var
	 * @see https://eslint.org/docs/v8.x/rules/no-var
	 */
	'no-var': 'error',
	/**
	 * Require const declarations for variables that are never reassigned after declared
	 * @see https://eslint.org/docs/v8.x/rules/prefer-const
	 */
	'prefer-const': ['error', {
		destructuring: 'any',
	}],

	/**
	 * [eslint:recommended] Disallow unused variables
	 * @see https://eslint.org/docs/v8.x/rules/no-unused-vars
	 */
	'no-unused-vars': 'error',

	/**
	 * Enforce variables to be declared either together or separately in functions
	 * @see https://eslint.org/docs/v8.x/rules/one-var
	 */
	'one-var': ['error', 'never'],
	/**
	 * Disallow use of chained assignment expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-multi-assign
	 */
	'no-multi-assign': ['error'],

	/**
	 * Require or disallow initialization in variable declarations
	 * @see https://eslint.org/docs/v8.x/rules/init-declarations
	 */
	'init-declarations': 'off',
	/**
	 * Disallow initializing variables to undefined
	 * @see https://eslint.org/docs/v8.x/rules/no-undef-init
	 */
	'no-undef-init': 'error',
	/**
	 * [eslint:recommended] Disallow reassigning const variables
	 * @see https://eslint.org/docs/v8.x/rules/no-const-assign
	 */
	'no-const-assign': 'error',
	/**
	 * [eslint:recommended] Disallow assignments where both sides are exactly the same
	 * @see https://eslint.org/docs/v8.x/rules/no-self-assign
	 */
	'no-self-assign': 'error',

	/**
	 * Disallow variable declarations from shadowing variables declared in the outer scope
	 * @see https://eslint.org/docs/v8.x/rules/no-shadow
	 */
	'no-shadow': 'error',
	/**
	 * [eslint:recommended] Disallow variable redeclaration
	 * @see https://eslint.org/docs/v8.x/rules/no-redeclare
	 */
	'no-redeclare': 'error',
	
	/**
	 * [eslint:recommended] Disallow deleting variables
	 * @see https://eslint.org/docs/v8.x/rules/no-delete-var
	 */
	'no-delete-var': 'error',

	/**
	 * Enforce the use of variables within the scope they are defined
	 * @see https://eslint.org/docs/v8.x/rules/block-scoped-var
	 */
	'block-scoped-var': 'error',
	/**
	 * Disallow the use of variables before they are defined
	 * @see https://eslint.org/docs/v8.x/rules/no-use-before-define
	 */
	'no-use-before-define': 'error',

	/**
	 * [eslint:recommended] Disallow the use of undeclared variables unless mentioned in global comments
	 * @see https://eslint.org/docs/v8.x/rules/no-undef
	 *
	 * For convenience, ESLint provides shortcuts that pre-define global variables exposed by popular
	 * libraries and runtime environments. This rule supports these environments: browser, node.
	 */
	'no-undef': 'error',
	/**
	 * Disallow declarations in the global scope
	 * @see https://eslint.org/docs/v8.x/rules/no-implicit-globals
	 */
	'no-implicit-globals': 'off',
};
