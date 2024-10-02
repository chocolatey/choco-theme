import globals from "globals";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "js/src/lib",
        "**/node_modules",
        "wwwroot/js/**/*.min.js",
        "input/assets/js/*.min.js",
        "Scripts/*.min.js",
    ],
}, ...compat.extends("standard"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            Prism: "readonly",
            bootstrap: "readonly",
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },
}, ...compat.extends(
    "standard",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
).map(config => ({
    ...config,
    files: ["js/src/ts/**/*.ts", "playwright/**/*.ts", "build/**/*.ts"],
})), {
    files: ["js/src/ts/**/*.ts", "playwright/**/*.ts", "build/**/*.ts"],

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "tsconfig.json",
        },
    },
}, ...compat.extends("plugin:playwright/recommended").map(config => ({
    ...config,
    files: ["playwright/**/*.ts"],
})), {
    files: ["playwright/**/*.ts"],

    languageOptions: {
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "playwright/tsconfig.json",
        },
    },

    rules: {
        "playwright/no-conditional-in-test": 0,
        "playwright/expect-expect": 0,
    },
}, {
    files: [
        "**/eslint.config.mjs",
        "**/postcss.config.js",
        "js/**/**/*.*",
        "getting-started/*.js",
        "playwright/**/*.ts",
        "wwwroot/js/src/**/*.js",
        "build/**/*.*",
    ],

    rules: {
        semi: ["error", "always"],
        quotes: ["error", "single"],

        indent: ["error", 4, {
            SwitchCase: 1,
        }],

        "no-var": "error",
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": ["error", "always"],

        "no-unused-vars": ["error", {
            varsIgnorePattern: "Alert|Button|Carousel|Collapse|Dropdown|Modal|Offcanvas|Tab",
        }],

        "prefer-template": "error",
        "prefer-arrow-callback": ["error"],
        "func-style": ["error", "expression"],
        "arrow-parens": ["error", "as-needed"],
        "object-shorthand": ["error", "consistent-as-needed"],
        eqeqeq: 0,
    },
}];