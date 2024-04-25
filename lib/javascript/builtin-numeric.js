export default {
	/**
	 * Disallow magic numbers
	 * @see https://eslint.org/docs/v8.x/rules/no-magic-numbers
	 */
	'no-magic-numbers': 'off',

	/**
	 * [eslint:recommended] Disallow literal numbers that lose precision
	 * @see https://eslint.org/docs/v8.x/rules/no-loss-of-precision
	 */
	'no-loss-of-precision': 'error',

	/**
	 * [eslint:recommended] Disallow octal literals
	 * @see https://eslint.org/docs/v8.x/rules/no-octal
	 */
	'no-octal': 'error',

	/**
	 * Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
	 * @see https://eslint.org/docs/v8.x/rules/prefer-numeric-literals
	 */
	'prefer-numeric-literals': 'error',

	/**
	 * Enforce the consistent use of the radix argument when using parseInt()
	 * @see https://eslint.org/docs/v8.x/rules/radix
	 */
	radix: 'error',
};
