module.exports = {
		env: {
				browser: true,
				es6: true,
				jest: true
		},
		extends: [
				"eslint:recommended",
				"plugin:react/recommended",
				"plugin:@typescript-eslint/recommended",
				"airbnb",
				"prettier/react",
				"prettier",
				"prettier/@typescript-eslint"
		],
		globals: {
				"Atomics": "readonly",
				"SharedArrayBuffer": "readonly"
		},
		parser: "@typescript-eslint/parser",
		parserOptions: {
				ecmaFeatures: {
						jsx: true
				},
				ecmaVersion: 2018,
				sourceType: "module"
		},
		plugins: [
				"react",
				"@typescript-eslint",
				"prettier",
				"react-hooks",
				"eslint-plugin-import-helpers"
		],
		rules: {
			indent: ["error", "tab", { "SwitchCase": 1 }],
			"import/no-unresolved": "off",
			"linebreak-style": ["error", "unix"],
			"quotes": ["error", "single"],
			"semi": ["error", "always"],
			"prettier/prettier": "warn",
			"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
			"react/jsx-indent": [2, "tab"],
			"react/jsx-indent-props": "off",
			"jsx-quotes":"off",
			"import/extensions": "off",
			"max-len": "off",
			"@typescript-eslint/no-explicit-any": "error",
			"no-tabs": "off",
			"comma-dangle":"off",
			"no-console":"warn",
			'import-helpers/order-imports': [
				'warn',
				{
					newlinesBetween: "always",
					groups: ["/react/", "/ˆreact/", "module","/ˆ@/", "/^Assets/", "/^Views/", "/^Containers/", "/^Components/","/^Store/", "/^Lib/", ["parent", "sibling", "index"]],
					alphabetize: { "order": "asc", "ignoreCase": true }
				}
			]
		}
}