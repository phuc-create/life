module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: 'off',
        'template-curly-spacing': 'off',
        camelcase: 'off',
        'no-return-assign': 'off',
        'one-var': 'off',
        'no-prototype-builtins': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'space-unary-ops': 2,
        'react/prop-types': 'off',
        'no-undef': 'off',
        'func-names': 'off',
        'no-console': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
}
