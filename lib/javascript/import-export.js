export default {
	/**
	 * [eslint:recommended] Disallow assigning to imported bindings
	 * @see https://eslint.org/docs/v8.x/rules/no-import-assign
	 */
	'no-import-assign': 'error',
	/**
	 * Disallow duplicate module imports
	 * @see https://eslint.org/docs/v8.x/rules/no-duplicate-imports}
	 */
	'no-duplicate-imports': 'error',
	/**
	 * Disallow specified modules when loaded by import
	 * @see https://eslint.org/docs/v8.x/rules/no-restricted-imports
	 */
	'no-restricted-imports': 'off',
	/**
	 * Enforce sorted import declarations within modules
	 * @see https://eslint.org/docs/v8.x/rules/sort-imports
	 */
	'sort-imports': 'error',

	/**
	 * Disallow specified names in exports
	 * @see https://eslint.org/docs/v8.x/rules/no-restricted-exports
	 */
	'no-restricted-exports': ['error', {
		restrictedNamedExports: [
			// Use `export default` to provide a default export
			'default',
			// This will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
			'then',
		],
	}],
};
