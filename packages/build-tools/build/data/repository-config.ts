#!/usr/bin/env tsx

/*!
 * Configuration for repositories.
 */

export interface RepositoryConfig {
    name: string;
    css: string;
    js: string;
    fontAwesome?: string;
    ptSans?: string;
    images?: string;
    partials: string;
    root: string;
    language: string;
    eslintConfig?: string;
    purgeCss?: {
        content: string[];
        safelist: (string | RegExp)[];
    };
}

export const defaultRepositoryConfig = {
    css: 'input/assets/css/',
    js: 'input/assets/js/',
    fontAwesome: 'input/assets/fonts/fontawesome-free/',
    ptSans: 'input/assets/fonts/PT_Sans/',
    partials: 'input/global-partials/',
    language: 'cshtml',
    purgeCss: {
        content: [
            'input/**/*.cshtml',
            'input/**/*.html',
            'input/**/*.txt',
            'input/**/*.md',
            'input/**/*.hbs',
            'input/**/*.js'
        ],
        safelist: [
            '::-webkit-scrollbar',
            '::-webkit-scrollbar-thumb',
            /^fa-(check|triangle-exclamation|info|xmark)/,
            /^text-bg-(info|warning|danger|success)/,
            /^data-bs-popper/
        ]
    },
    root: './'
};

export const astroRepositoryConfig = {
    css: 'public/styles/',
    js: 'public/scripts/',
    fontAwesome: 'public/fonts/fontawesome-free/',
    ptSans: 'public/fonts/PT_Sans/',
    partials: 'src/components/global/',
    images: '',
    language: 'astro',
    eslintConfig: 'eslint.config.mjs',
    purgeCss: {
        content: [
            'src/**/*.astro',
            'src/**/*.html',
            'src/**/*.txt',
            'src/**/*.md',
            'src/**/*.mdx',
            'src/**/*.js',
            'src/**/*.ts',
            'src/**/*.json',
            'public/**/*.js',
            'node_modules/@chocolatey-software/astro/src/**/*.astro',
            'node_modules/@chocolatey-software/astro/src/**/*.ts'
        ],
        safelist: [
            '::-webkit-scrollbar',
            '::-webkit-scrollbar-thumb',
            /^fa-(check|triangle-exclamation|info|xmark)/,
            /^text-bg-/,
            /^data-bs-popper/,
            /^ratio-/,
            /^callout-/,
            /^btn-(primary|danger|success)/
        ]
    },
    root: './'
};

export const repositoryConfig: Record<string, RepositoryConfig> = {
    blog: {
        ...astroRepositoryConfig,
        name: 'blog'
    },
    boxstarter: {
        ...defaultRepositoryConfig,
        name: 'boxstarter'
    },
    ccm: {
        ...defaultRepositoryConfig,
        name: 'ccm',
        css: 'wwwroot/css/',
        js: 'wwwroot/js/dist/',
        fontAwesome: 'wwwroot/fonts/fontawesome-free/',
        ptSans: 'wwwroot/fonts/PT_Sans/',
        partials: '',
        eslintConfig: 'eslint.config.mjs'
    },
    ccr: {
        ...defaultRepositoryConfig,
        name: 'ccr',
        css: 'Content/css/',
        js: 'Scripts/',
        fontAwesome: 'Content/fonts/fontawesome-free/',
        ptSans: 'Content/fonts/PT_Sans/',
        partials: 'Views/GlobalPartials/',
        eslintConfig: 'eslint.config.mjs'
    },
    credits: {
        ...astroRepositoryConfig,
        name: 'credits',
    },
    design: {
        ...defaultRepositoryConfig,
        name: 'design',
        images: 'input/assets/images/global-shared/',
    },
    docs: {
        ...astroRepositoryConfig,
        name: 'docs'
    },
    fest: {
        ...defaultRepositoryConfig,
        name: 'fest'
    },
    org: {
        ...defaultRepositoryConfig,
        name: 'org',
        images: 'input/assets/images/global-shared/'
    },
    licensing: {
        ...defaultRepositoryConfig,
        name: 'licensing',
        css: 'wwwroot/css/',
        js: 'wwwroot/js/',
        fontAwesome: 'wwwroot/fonts/fontawesome-free/',
        ptSans: 'wwwroot/fonts/PT_Sans/',
        partials: 'Pages/Global/',
        eslintConfig: 'eslint.config.mjs'
    },
    zendesk: {
        ...defaultRepositoryConfig,
        name: 'zendesk',
        css: 'assets/',
        js: 'assets/',
        fontAwesome: '',
        ptSans: '',
        partials: 'global-partials/',
        language: 'hbs'
    }
};

// Merge purgeCss section into the licensing configuration
repositoryConfig.ccm.purgeCss = {
    content: [
        `${repositoryConfig.ccm.js}**/*.js`,
        'Areas/**/*.*',
        'Views/**/*.*',
        'TagHelpers/**/*.*',
        'playwright/**/*.*',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    ],
    safelist: [
        ...defaultRepositoryConfig.purgeCss.safelist,
        'playwright',
        /^playwright-/,
        'tooltip',
        /^tooltip-/,
        /^code-toolbar/,
        /^text-bg-(blue|pink|purple|green|red|yellow|orange)/,
        /^fill-(blue|pink|purple|green|red|yellow|orange|success|danger|info|primary)/,
        /^selected/,
        /^dt-column-header/
    ]
};

// Merge purgeCss section into the design configuration
repositoryConfig.design.purgeCss = {
    ...defaultRepositoryConfig.purgeCss,
    safelist: [
        ...defaultRepositoryConfig.purgeCss.safelist,
        /^text-bg-(blue|pink|purple|green|red|yellow|orange)(-[0-9]{1,3})?$/
    ]
};

// Merge purgeCss section into the ccr configuration
repositoryConfig.ccr.purgeCss = {
    content: [
        `${repositoryConfig.ccr.js}*.js`,
        `${repositoryConfig.ccr.partials}*.cshtml`,
        'App_Code/**/*.cshtml',
        'Errors/**/*.*',
        'Views/**/*.*'
    ],
    safelist: [
        ...defaultRepositoryConfig.purgeCss.safelist,
        /^status-/,
        'tt-dataset-0',
        /^autoComplete/,
        /^EasyMDEContainer/,
        /^CodeMirror/,
        /^cm-spell-error/
    ]
};

// Merge purgeCss section into the org configuration
repositoryConfig.org.purgeCss = {
    content: [
        ...defaultRepositoryConfig.purgeCss.content
    ],
    safelist: [
        ...defaultRepositoryConfig.purgeCss.safelist,
        'is-initialized',
        'is-rendered',
        /^splide/,
        /^noUi-/
    ]
};

// Merge purgeCss section into the licensing configuration
repositoryConfig.licensing.purgeCss = {
    content: [
        `${repositoryConfig.licensing.js}*.js`,
        'Areas/**/*.cshtml',
        'Pages/**/*.cshtml'
    ],
    safelist: [
        ...defaultRepositoryConfig.purgeCss.safelist,
        /^ct-series-/,
        /^ct-legend-/,
        /^bg-(secondary|danger|success)/,
        /^callout-(danger|success)/,
        'ct-legend',
        'ct-series',
        'data-license-type',
        'Architect',
        'ManagedServiceProvider',
        'Professional',
        'Business',
        'Trial',
        /^dt-column-header/,
        /^stroke-(blue|pink|purple|green|red|yellow|orange|success|danger|info|primary)/
    ]
};

// Merge purgeCss section into the zendesk configuration
repositoryConfig.zendesk.purgeCss = {
    content: [
        `${repositoryConfig.zendesk.js}*.js`,
        `${repositoryConfig.zendesk.partials}*.hbs`,
        'templates/**/*.hbs'
    ],
    safelist: [
        ...defaultRepositoryConfig.purgeCss.safelist,
        /^fa-(check|triangle-exclamation|info|xmark)/,
        /^bg-(secondary|danger|success)/,
        /^callout-(danger|success)/,
        'main',
        'table-bordered',
        'table-striped',
        'table-responsive-sm',
        'table-responsive',
        'clear-button',
        'recent-activity-item-meta',
        'chocolatey-zendesk',
        'article-body',
        'pre'
    ]
};
