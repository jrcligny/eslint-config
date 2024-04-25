export default {
	/**
	 * [eslint:recommended] Disallow unreachable code after return, throw, continue, and break statements
	 * @see https://eslint.org/docs/v8.x/rules/no-unreachable
	 */
	'no-unreachable': 'error',

	/**
	 * [control-flow]
	 * [eslint:recommended] Disallow duplicate conditions in if-else-if chains
	 * @see https://eslint.org/docs/v8.x/rules/no-dupe-else-if
	 */
	'no-dupe-else-if': 'error',
	/**
	 * Disallow if statements as the only statement in else blocks
	 * @see https://eslint.org/docs/v8.x/rules/no-lonely-if
	 */
	'no-lonely-if': 'error',
	/**
	 * Disallow else blocks after return statements in if statements
	 * @see https://eslint.org/docs/v8.x/rules/no-else-return
	 */
	'no-else-return': ['error', { allowElseIf: false }],

	/**
	 * [eslint:recommended] Enforce "for" loop update clause moving the counter in the right direction
	 * @see https://eslint.org/docs/v8.x/rules/for-direction
	 */
	'for-direction': 'error',
	/**
	 * Disallow unmodified loop conditions
	 * @see https://eslint.org/docs/v8.x/rules/no-unmodified-loop-condition
	 */
	'no-unmodified-loop-condition': 'error',
	/**
	 * Disallow loops with a body that allows only one iteration
	 * @see https://eslint.org/docs/v8.x/rules/no-unreachable-loop
	 */
	'no-unreachable-loop': 'error',
	/**
	 * Require for-in loops to include an if statement
	 * @see https://eslint.org/docs/v8.x/rules/guard-for-in
	 */
	'guard-for-in': 'error',

	/**
	 * Disallow throwing literals as exceptions
	 * @see https://eslint.org/docs/v8.x/rules/no-throw-literal
	 */
	'no-throw-literal': 'error',
	/**
	 * [eslint:recommended] Disallow control flow statements in finally blocks
	 * @see https://eslint.org/docs/v8.x/rules/no-unsafe-finally
	 */
	'no-unsafe-finally': 'error',
	/**
	 * [eslint:recommended] Disallow reassigning exceptions in catch clauses
	 * @see https://eslint.org/docs/v8.x/rules/no-ex-assign
	 */
	'no-ex-assign': 'error',
	/**
	 * [eslint:recommended] Disallow unnecessary catch clauses
	 * @see https://eslint.org/docs/v8.x/rules/no-useless-catch
	 */
	'no-useless-catch': 'error',

	/**
	 * Require default cases in switch statements
	 * @see https://eslint.org/docs/v8.x/rules/default-case
	 */
	'default-case': ['error', { commentPattern: '^no default$' }],
	/**
	 * [eslint:recommended] Disallow lexical declarations in case clauses
	 * @see https://eslint.org/docs/v8.x/rules/no-case-declarations
	 */
	'no-case-declarations': 'error',
	/**
	 * Enforce default clauses in switch statements to be last
	 * @see https://eslint.org/docs/v8.x/rules/default-case-last
	 */
	'default-case-last': 'error',

	/**
	 * Disallow continue statements
	 * @see https://eslint.org/docs/v8.x/rules/no-continue
	 */
	'no-continue': 'error',

	/**
	 * Disallow specified syntax
	 * @see https://eslint.org/docs/v8.x/rules/no-restricted-syntax
	 */
	'no-restricted-syntax': [
		'error',
		{
			selector: 'ForInStatement',
			message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
		},
		{
			selector: 'ForOfStatement',
			message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
		},
		{
			selector: 'LabeledStatement',
			message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
		},
		{
			selector: 'WithStatement',
			message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
		},
	],

	/**
	 * [eslint:recommended] Disallow unused labels
	 * @see https://eslint.org/docs/v8.x/rules/no-unused-labels
	 */
	'no-unused-labels': 'error',
	/**
	 * Disallow unnecessary labels
	 * @see https://eslint.org/docs/v8.x/rules/no-extra-label
	 */
	'no-extra-label': 'error',
	/**
	 * Disallow labeled statements
	 * @see https://eslint.org/docs/v8.x/rules/no-labels
	 */
	'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
	/**
	 * Disallow labels that share a name with a variable
	 * @see https://eslint.org/docs/v8.x/rules/no-label-var
	 */
	'no-label-var': 'error',
};
