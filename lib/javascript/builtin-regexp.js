export default {
	/**
	 * [eslint:recommended] Disallow control characters in regular expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-control-regex
	 */
	'no-control-regex': 'error',
	/**
	 * [eslint:recommended] Disallow empty character classes in regular expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-empty-character-class
	 */
	'no-empty-character-class': 'error',
	/**
	 * [eslint:recommended] Disallow invalid regular expression strings in RegExp constructors
	 * @see https://eslint.org/docs/v8.x/rules/no-invalid-regexp
	 */
	'no-invalid-regexp': 'error',
	/**
	 * [eslint:recommended] Disallow characters which are made with multiple code points in character class syntax in RegExp
	 * @see https://eslint.org/docs/v8.x/rules/no-misleading-character-class
	 */
	'no-misleading-character-class': 'error',

	/**
	 * [eslint:recommended] Disallow useless backreferences in regular expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-backreference
	 */
	'no-useless-backreference': 'error',
	/**
	 * Disallow equal signs explicitly at the beginning of regular expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-div-regex
	 */
	'no-div-regex': 'error',
	/**
	 * [eslint:recommended] Disallow multiple spaces in regular expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-regex-spaces
	 */
	'no-regex-spaces': 'error',
	
	/**
	 * Enforce using named capture group in regular expression
	 * @see https://eslint.org/docs/v8.x/rules/prefer-named-capture-group
	 */
	'prefer-named-capture-group': 'warn',
	/**
	 * Disallow use of the RegExp constructor in favor of regular expression literals
	 * @see https://eslint.org/docs/v8.x/rules/prefer-regex-literals
	 */
	'prefer-regex-literals': ['error', {
		disallowRedundantWrapping: true,
	}],
	
	/**
	 * Enforce the use of u or v flag on RegExp
	 * @see https://eslint.org/docs/v8.x/rules/require-unicode-regexp
	 */
	'require-unicode-regexp': 'off',
};
