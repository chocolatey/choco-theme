module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    ignorePatterns: ['js/lib', 'node_modules', 'wwwroot/js/*.min.js', 'input/assets/js/*.min.js', 'Scripts/*.min.js'],
    globals: {
        Prism: 'readonly'
    },
    extends: 'standard',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    overrides: [
        {
            files: ['js/ts/**/*.ts', 'playwright/**/*.ts'],
            extends: [
                'standard',
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended'
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: 'tsconfig.json'
            },
            plugins: [
                '@typescript-eslint'
            ]
        },
        {
            files: ['playwright/**/*.ts'],
            extends: [
                'plugin:playwright/recommended'
            ],
            parserOptions: {
                project: 'playwright/tsconfig.json'
            },
            rules: {
                'playwright/no-conditional-in-test': 0
            }
        },
        {
            files: ['.eslintrc.js', 'js/**/*.*', 'getting-started/*.js', 'playwright/**/*.ts'],
            rules: {
                semi: ['error', 'always'],
                quotes: ['error', 'single'],
                indent: ['error', 4, { SwitchCase: 1 }],
                'no-var': 'error',
                'one-var': ['error', 'never'],
                'one-var-declaration-per-line': ['error', 'always'],
                'no-unused-vars': ['error', { varsIgnorePattern: 'Alert|Button|Carousel|Collapse|Dropdown|Modal|Offcanvas|Tab' }],
                'prefer-template': 'error',
                'prefer-arrow-callback': ['error'],
                'func-style': ['error', 'expression'],
                'arrow-parens': ['error', 'as-needed'],
                eqeqeq: 0
            }
        }
    ]
};
