const vitest = require("eslint-plugin-vitest")

module.exports = {
	global: { ...vitest.default.environments.env.globals },
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:vitest/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"no-unused-vars": "warn", // warning, not error
		"vitest/expect-expect": "off", // eliminate distracting red squiggles while writing tests
		"react/prop-types": "off", // turn off props validation
	},
}
