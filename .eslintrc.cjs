/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
        'airbnb-base',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            // Parse the `<script>` in `.svelte` as TypeScript by adding the following configuration.
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.svelte'], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
    },
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        '@typescript-eslint/quotes': 'off',
        'arrow-body-style': 'off',
        'no-unused-vars': 'off',
        // "prettier/prettier": "error",
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-use-before-define': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-shadow': 'off',
    },
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },
};
