module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
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
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'yaml', 'prettier'],
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
    overrides: [
        {
            files: ['**/*.yml'],
            rules: {
                indent: ['error', 2],
                quotes: ['error', 'single'],
                semi: ['error', 'never'],
            },
        },
    ],
    ignorePatterns: ['test/**/*'],
};
