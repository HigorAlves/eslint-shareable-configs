module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"plugin:import/recommended",
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		"plugin:import/typescript",
		"plugin:storybook/recommended",
		'standard',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'jsx-a11y',
		'@typescript-eslint',
		'promise',
		'import',
		'testing-library'
	],
	rules: {
		'prettier/prettier': ["error", {
			'printWidth': 80,
			'tabWidth': 2,
			'singleQuote': true,
			'trailingComma': 'all',
			'arrowParens': 'always',
			'semi': false,
			'endOfLine': 'auto',
		}],
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'jsx-a11y/alt-text': [
			'warn',
			{
				elements: ['img'],
				img: ['Image'],
			},
		],
		'jsx-a11y/aria-props': 'warn',
		'jsx-a11y/aria-proptypes': 'warn',
		'jsx-a11y/aria-unsupported-elements': 'warn',
		'jsx-a11y/role-has-required-aria-props': 'warn',
		'jsx-a11y/role-supports-aria-props': 'warn',
		"import/order": [
			"error",
			{
				"groups": ["builtin", "external", "internal"],
				"pathGroups": [
					{
						"pattern": "react",
						"group": "external",
						"position": "before"
					},
					{
						"pattern": "next",
						"group": "external",
						"position": "before"
					}
				],
				"pathGroupsExcludedImportTypes": ["react"],
				"newlines-between": "always",
				"alphabetize": {
					"order": "asc",
					"caseInsensitive": true
				}
			}
		]
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
		},
	}
}