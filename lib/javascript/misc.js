export default {
	/**
	 * Disallow strict mode directives
	 * @see https://eslint.org/docs/v8.x/rules/strict
	 */
	strict: ['error', 'never'],
	
	/**
	 * [eslint:recommended] Disallow with statements
	 * @see https://eslint.org/docs/v8.x/rules/no-with
	 */
	'no-with': 'error',

	/**
	 * [eslint:recommended] Disallow confusing multiline expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-unexpected-multiline
	 */
	'no-unexpected-multiline': 'error',
	/**
	 * [eslint:recommended] Disallow irregular whitespace
	 * @see https://eslint.org/docs/v8.x/rules/no-irregular-whitespace}
	 *
	 * By default, strings are not checked
	 */
	'no-irregular-whitespace': 'error',

	/**
	 * [eslint:recommended] Disallow the use of debugger
	 * @see https://eslint.org/docs/v8.x/rules/no-debugger
	 */
	'no-debugger': 'error',
	/**
	 * Disallow the use of console
	 * @see https://eslint.org/docs/v8.x/rules/no-console
	 */
	'no-console': 'warn',
	/**
	 * Disallow specified warning terms in comments
	 * @see https://eslint.org/docs/v8.x/rules/no-warning-comments
	 */
	'no-warning-comments': 'warn',

	/**
	 * Disallow the use of eval()
	 * @see https://eslint.org/docs/v8.x/rules/no-eval
	 */
	'no-eval': 'error',
	/**
	 * Disallow the use of eval()-like methods
	 * @see https://eslint.org/docs/v8.x/rules/no-implied-eval
	 */
	'no-implied-eval': 'error',

	/**
	 * Disallow javascript: urls
	 * @see https://eslint.org/docs/v8.x/rules/no-script-url
	 */
	'no-script-url': 'error',

	/**
	 * Disallow the use of alert, confirm, and prompt
	 * @see https://eslint.org/docs/v8.x/rules/no-alert
	 */
	'no-alert': 'off',
	
};
