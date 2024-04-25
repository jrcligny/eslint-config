export default {
	/**
	 * Require or disallow logical assignment operator shorthand
	 * @see https://eslint.org/docs/v8.x/rules/logical-assignment-operators
	 */
	'logical-assignment-operators': 'error',
	/**
	 * Require assignment operator shorthand where possible
	 * @see https://eslint.org/docs/v8.x/rules/operator-assignment
	 */
	'operator-assignment': ['error', 'always'],
	/**
	 * Disallow shorthand type conversions
	 * @see https://eslint.org/docs/v8.x/rules/no-implicit-coercion
	 */
	'no-implicit-coercion': 'off',
	/**
	 * [eslint:recommended] Disallow unnecessary boolean casts
	 * @see https://eslint.org/docs/v8.x/rules/no-extra-boolean-cast
	 */
	'no-extra-boolean-cast': 'error',
	/**
	 * Disallow the unary operators ++ and --
	 * @see https://eslint.org/docs/v8.x/rules/no-plusplus
	 */
	'no-plusplus': 'error',
	/**
	 * Disallow comma operators
	 * @see https://eslint.org/docs/v8.x/rules/no-sequences
	 */
	'no-sequences': 'error',

	/**
	 * Require destructuring from arrays and/or objects
	 * @see https://eslint.org/docs/v8.x/rules/prefer-destructuring
	 */
	'prefer-destructuring': ['error', {
		VariableDeclarator: {
			array: false,
			object: true,
		},
		AssignmentExpression: {
			array: true,
			object: false,
		},
	}, {
		enforceForRenamedProperties: false,
	}],
	/**
	 * [eslint:recommended] Disallow empty destructuring patterns
	 * @see https://eslint.org/docs/v8.x/rules/no-empty-pattern
	 */
	'no-empty-pattern': 'error',
	/**
	 * Disallow renaming import, export, and destructured assignments to the same name
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-rename
	 */
	'no-useless-rename': 'error',

	/**
	 * Disallow unused expressions
	 * @see https://eslint.org/docs/v8.x/rules/no-unused-expressions
	 */
	'no-unused-expressions': ['error', {
		allowShortCircuit: false,
		allowTernary: false,
		allowTaggedTemplates: false,
	}],
	
	/**
	 * Disallow the use of Math.pow in favor of the ** operator
	 * @see https://eslint.org/docs/v8.x/rules/prefer-exponentiation-operator
	 */
	'prefer-exponentiation-operator': 'error',

	/**
	 * Disallow bitwise operators
	 * @see https://eslint.org/docs/v8.x/rules/no-bitwise
	 */
	'no-bitwise': 'error',
};
