module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'standard',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    ignorePatterns: ['js/lib', 'node_modules', 'wwwroot/js/*.min.js', 'input/assets/js/*.min.js', 'Scripts/*.min.js'],
    globals: {
        Prism: 'readonly'
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'no-unused-vars': ['error', { varsIgnorePattern: 'Alert|Button|Carousel|Collapse|Dropdown|Modal|Tab' }],
        'prefer-template': 'error',
        'prefer-arrow-callback': ['error'],
        'func-style': ['error', 'expression'],
        'arrow-parens': ['error', 'as-needed'],
        eqeqeq: 0
    }
};
