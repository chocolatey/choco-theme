import js from '@eslint/js';
import globals from 'globals';
import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';

const varsIgnorePattern = 'Alert|Button|Carousel|Collapse|Dropdown|Modal|Offcanvas|Tab';
const commonRules = {
    // Stylistic rules from @stylistic
    '@stylistic/indent': ['error', 4, { SwitchCase: 1 }],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/member-delimiter-style': ['error', {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: true },
    }],

    // Best-practice and logic rules (not stylistic)
    'func-style': ['error', 'expression'],
    'no-var': 'error',
    'object-shorthand': ['error', 'consistent-as-needed'],
    'one-var': ['error', 'never'],
    'prefer-template': 'error',
    'prefer-arrow-callback': ['error'],
    'eqeqeq': 'off',
};

export default defineConfig([
    // Ignore patterns
    globalIgnores([
        'js/src/lib/*',
        '**/dist/*',
        '**/node_modules/*',
        '**/*.min.js',
        '.astro/*'
    ]),

    // JS files only
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: {
            js: js,
            '@stylistic': stylistic,
        },
        extends: [
            'js/recommended'
        ],
        rules: {
            ...commonRules,

            // JS-specific rules
            'no-unused-vars': ['error', {
                varsIgnorePattern
            }],
        }
    },

    // TS files only
    {
        files: ['**/*.ts'],
        plugins: {
            js: js,
            '@typescript-eslint': tseslint.plugin,
            '@stylistic': stylistic,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: 'tsconfig.json',
            },
        },
        extends: [
            ...tseslint.configs.stylistic,
            ...tseslint.configs.recommended,
            tseslint.configs.eslintRecommended,
        ],
        rules: {
            ...commonRules,

            // TS-specific rules
            '@typescript-eslint/no-floating-promises': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {
                varsIgnorePattern
            }]
        }
    },

    // Shared globals for all JS/TS files
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                Prism: 'readonly',
                bootstrap: 'readonly'
            }
        }
    },

    // Playwright-specific config
    {
        ...playwright.configs['flat/recommended'],
        files: ['playwright/**/*.ts'],
        rules: {
            ...playwright.configs['flat/recommended'].rules,
            'playwright/expect-expect': 'off',
            'playwright/no-conditional-expect': 'off',
            'playwright/no-conditional-in-test': 'off',
            'playwright/no-wait-for-timeout': 'off'
        }
    }
]);
