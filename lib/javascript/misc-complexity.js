export default {
	/**
	 * [obsolete] [eslint:recommended] Disallow variable or function declarations in nested blocks
	 * @see https://eslint.org/docs/v8.x/rules/no-inner-declarations
	 */
	'no-inner-declarations': 'error',
	/**
	 * Enforce a maximum number of lines per file
	 * @see https://eslint.org/docs/v8.x/rules/max-lines
	 */
	'max-lines': ['error', 300],

	/**
	 * Enforce a maximum cyclomatic complexity allowed in a program
	 * @see https://eslint.org/docs/v8.x/rules/complexity
	 */
	complexity: ['error', 20],
	/**
	 * Enforce a maximum depth that blocks can be nested
	 * @see https://eslint.org/docs/v8.x/rules/max-depth
	 */
	'max-depth': ['error', 4],

	/**
	 * Disallow unnecessary nested blocks
	 * @see https://eslint.org/docs/v8.x/rules/no-lone-blocks
	 */
	'no-lone-blocks': 'error',
	/**
	 * [eslint:recommended] Disallow empty block statements
	 * @see https://eslint.org/docs/v8.x/rules/no-empty
	 */
	'no-empty': 'error',

	/**
	 * Disallow function declarations that contain unsafe references inside loop statements
	 * @see https://eslint.org/docs/v8.x/rules/no-loop-func
	 */
	'no-loop-func': 'error',

	/**
	 * Enforce a maximum number of lines of code in a function
	 * @see https://eslint.org/docs/v8.x/rules/max-lines-per-function
	 */
	'max-lines-per-function': 'off',
	/**
	 * Enforce a maximum depth that callbacks can be nested
	 * @see https://eslint.org/docs/v8.x/rules/max-nested-callbacks
	 */
	'max-nested-callbacks': 'off',
	/**
	 * Enforce a maximum number of parameters in function definitions
	 * @see https://eslint.org/docs/v8.x/rules/max-params
	 */
	'max-params': 'off',
	/**
	 * Enforce a maximum number of statements allowed in function blocks
	 * @see https://eslint.org/docs/v8.x/rules/max-statements
	 */
	'max-statements': 'off',

	/**
	 * Enforce a maximum number of classes per file
	 * @see https://eslint.org/docs/v8.x/rules/max-classes-per-file
	 */
	'max-classes-per-file': ['error', 1],
};
