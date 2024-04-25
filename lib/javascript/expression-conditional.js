export default {
	/**
	 * Disallow null comparisons without type-checking operators
	 * @see https://eslint.org/docs/v8.x/rules/no-eq-null
	 *
	 * Use eqeqeq instead
	 */
	'no-eq-null': 'off',
	/**
	 * Enforce strict equality except when comparing with the null literal.
	 * @see https://eslint.org/docs/v8.x/rules/eqeqeq
	 */
	eqeqeq: ['error', 'always', {
		null: 'ignore',
	}],

	/**
	 * Disallow "Yoda" conditions
	 * @see https://eslint.org/docs/v8.x/rules/yoda
	 */
	yoda: 'error',
	/**
	 * Disallow negated conditions
	 * @see https://eslint.org/docs/v8.x/rules/no-negated-condition
	 */
	'no-negated-condition': 'error',

	/**
	 * [eslint:recommended] Disallow negating the left operand of relational operators
	 * By default the operators are: in and instanceof operator.
	 * @see https://eslint.org/docs/v8.x/rules/no-unsafe-negation
	 *
	 * (error check) Disallow negating the left operand of these
	 * ordering relational operators: <, >, <=, and >=
	 * 
	 * Should be disabled for TypeScript
	 */
	'no-unsafe-negation': ['error', {
		enforceForOrderingRelations: true,
	}],
	/**
	 * [eslint:recommended] Disallow comparing against -0
	 * @see https://eslint.org/docs/v8.x/rules/no-compare-neg-zero
	 */
	'no-compare-neg-zero': 'error',
	/**
	 * Disallow expressions where the operation doesn't affect the value
	 * @see https://eslint.org/docs/v8.x/rules/no-constant-binary-expression
	 */
	'no-constant-binary-expression': 'error',
	/**
	 * Disallow comparisons where both sides are exactly the same
	 * @see https://eslint.org/docs/v8.x/rules/no-self-compare
	 */
	'no-self-compare': 'error',
	/**
	 * [eslint:recommended] Disallow assignment operators in conditional expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-cond-assign
	 *
	 * (consistency) Disallows assignments in test conditions when they are enclosed in parentheses
	 * (for example, to allow reassigning a variable in the test of a while or do...while loop)
	 */
	'no-cond-assign': ['error', 'always'],
	/**
	 * [eslint:recommended] Enforce comparing typeof expressions against valid strings
	 * @see https://eslint.org/docs/v8.x/rules/valid-typeof
	 *
	 * (error check) Requires typeof expressions to only be compared to string literals
	 * or other typeof expressions, and disallows comparisons to any other value.
	 * 
	 * Should be disabled for TypeScript
	 */
	'valid-typeof': ['error', {
		requireStringLiterals: true,
	}],
	/**
	 * [eslint:recommended] Require calls to isNaN() when checking for NaN
	 * @see https://eslint.org/docs/v8.x/rules/use-isnan}
	 *
	 * (error check) Disallow the use of indexOf and lastIndexOf methods with NaN
	 */
	'use-isnan': ['error', {
		enforceForIndexOf: true,
	}],

	/**
	 * Disallow nested ternary expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-nested-ternary
	 */
	'no-nested-ternary': 'error',
	/**
	 * Disallow ternary operators
	 * @see https://eslint.org/docs/v8.x/rules/no-ternary
	 */
	'no-ternary': 'off',
	/**
	 * Disallow ternary operators when simpler alternatives exist
	 * @see https://eslint.org/docs/v8.x/rules/no-unneeded-ternary
	 */
	'no-unneeded-ternary': ['error', { defaultAssignment: false }],

	/**
	 * [eslint:recommended] Disallow use of optional chaining (`?`) in contexts where
	 * the undefined value is not allowed
	 * @see https://eslint.org/docs/v8.x/rules/no-unsafe-optional-chaining
	 *
	 * (error check) Disallow arithmetic operations (+, -, /, *, %, **) on optional chaining expressions,
	 * which possibly result in NaN.
	 *
	 * Should be disabled for TypeScript
	 */
	'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
};
