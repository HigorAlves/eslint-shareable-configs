module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['standard', 'plugin:prettier/recommended', "plugin:import/recommended"],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'promise', 'import'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				tabWidth: 2,
				singleQuote: true,
				trailingComma: 'all',
				arrowParens: 'always',
				semi: false,
			},
		],
		"import/order": [
			"error",
			{
				groups: ["builtin", "external", "internal"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true
				}
			}
		]
	},
	settings: {
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
			[require.resolve('plugin:import/typescript')]: ['.ts', '.tsx', '.d.ts'],
		},
	},
}