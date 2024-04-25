export default {
	/**
	 * Disallow template literal placeholder syntax in regular strings
	 * @see https://eslint.org/docs/v8.x/rules/no-template-curly-in-string
	 */
	'no-template-curly-in-string': 'error',

	/**
	 * Disallow unnecessary concatenation of literals or template literals
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-concat
	 */
	'no-useless-concat': 'error',
	/**
	 * Require template literals instead of string concatenation
	 * @see https://eslint.org/docs/v8.x/rules/prefer-template
	 */
	'prefer-template': 'error',
	
	/**
	 * Disallow multiline strings
	 * @see https://eslint.org/docs/v8.x/rules/no-multi-str
	 */
	'no-multi-str': 'off',

	/**
	 * [eslint:recommended] Disallow \8 and \9 escape sequences in string literals
	 * @see https://eslint.org/docs/v8.x/rules/no-nonoctal-decimal-escape
	 */
	'no-nonoctal-decimal-escape': 'error',
	/**
	 * Disallow octal escape sequences in string literals
	 * @see https://eslint.org/docs/v8.x/rules/no-octal-escape
	 */
	'no-octal-escape': 'error',

	/**
	 * [eslint:recommended] Disallow unnecessary escape characters
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-escape
	 */
	'no-useless-escape': 'error',
};
