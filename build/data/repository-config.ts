#!/usr/bin/env ts-node

/*!
 * Configuration for repositories.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

export interface RepositoryConfig {
    name: string;
    css: string;
    js: string;
    favicons: string;
    fontAwesome: string;
    ptSans: string;
    images: string;
    partials: string;
    root: string;
    language: string;
    purgeCss?: {
        content: string[];
        safelist: Array<string | RegExp>;
    };
    playwright?: string | null;
}

export const defaultRepositoryConfig = {
    css: 'input/assets/css/',
    js: 'input/assets/js/',
    favicons: 'input/',
    fontAwesome: 'input/assets/fonts/fontawesome-free/',
    ptSans: 'input/assets/fonts/PT_Sans/',
    images: 'input/assets/images/global-shared/',
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
    favicons: 'public/',
    fontAwesome: 'public/fonts/fontawesome-free/',
    ptSans: 'public/fonts/fonts/PT_Sans/',
    images: 'public/images/global-shared/',
    partials: 'src/components/global/',
    language: 'astro',
    purgeCss: {
        content: [
            'src/**/*.astro',
            'src/**/*.html',
            'src/**/*.txt',
            'src/**/*.md',
            'src/**/*.mdx',
            'src/**/*.js',
            'src/**/*.ts',
            'public/**/*.js',
            'node_modules/choco-astro/src/**/*.astro',
            'node_modules/choco-astro/src/**/*.ts'
        ],
        safelist: [
            '::-webkit-scrollbar',
            '::-webkit-scrollbar-thumb',
            /^fa-(check|triangle-exclamation|info|xmark)/,
            /^text-bg-(info|warning|danger|success)/,
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
        ...defaultRepositoryConfig,
        name: 'blog',
        language: 'hbs'
    },
    boxstarter: {
        ...defaultRepositoryConfig,
        name: 'boxstarter'
    },
    ccm: {
        ...defaultRepositoryConfig,
        name: 'ccm',
        favicons: 'wwwroot/',
        css: 'wwwroot/css/',
        js: 'wwwroot/js/',
        fontAwesome: 'wwwroot/fonts/fontawesome-free/',
        ptSans: 'wwwroot/fonts/PT_Sans/',
        images: 'wwwroot/images/global-shared/',
        partials: 'Areas/Admin/Views/Global/'
    },
    community: {
        ...defaultRepositoryConfig,
        name: 'community',
        css: 'Content/css/',
        js: 'Scripts/',
        favicons: './',
        fontAwesome: 'Content/fonts/fontawesome-free/',
        ptSans: 'Content/fonts/PT_Sans/',
        images: 'Content/Images/global-shared/',
        partials: 'Views/GlobalPartials/'
    },
    design: {
        ...defaultRepositoryConfig,
        name: 'design'
    },
    docs: {
        ...astroRepositoryConfig,
        name: 'docs',
        playwright: 'src/tests/'
    },
    fest: {
        ...defaultRepositoryConfig,
        name: 'fest'
    },
    org: {
        ...defaultRepositoryConfig,
        name: 'org',
        playwright: 'tests/'
    },
    portal: {
        ...defaultRepositoryConfig,
        name: 'portal',
        favicons: 'wwwroot/',
        css: 'wwwroot/css/',
        js: 'wwwroot/js/',
        fontAwesome: 'wwwroot/fonts/fontawesome-free/',
        ptSans: 'wwwroot/fonts/PT_Sans/',
        images: 'wwwroot/images/global-shared/',
        partials: 'Pages/Global/'
    },
    theme: {
        name: 'choco-theme',
        css: 'node_modules/choco-theme/dist/css/',
        js: 'node_modules/choco-theme/dist/js/',
        favicons: 'node_modules/choco-theme/images/favicons/',
        fontAwesome: 'node_modules/@fortawesome/fontawesome-free/webfonts/',
        ptSans: 'node_modules/choco-theme/fonts/PT_Sans/',
        images: 'node_modules/choco-theme/images/global-shared/',
        partials: 'node_modules/choco-theme/dist/partials/',
        playwright: 'node_modules/choco-theme/playwright/',
        language: 'mixed',
        root: 'node_modules/choco-theme/'
    },
    zendesk: {
        ...defaultRepositoryConfig,
        name: 'zendesk',
        css: 'assets/',
        js: 'assets/',
        favicons: 'assets/',
        ptSans: 'assets/fonts/PT_Sans/',
        partials: 'global-partials/',
        language: 'hbs'
    }
};

// Merge purgeCss section into the portal configuration
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
        /^fill-(blue|pink|purple|green|red|yellow|orange|success|danger|info|primary)/
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

// Merge purgeCss section into the community configuration
repositoryConfig.community.purgeCss = {
    content: [
        `${repositoryConfig.community.js}*.js`,
        `${repositoryConfig.community.partials}*.cshtml`,
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

// Merge purgeCss section into the portal configuration
repositoryConfig.portal.purgeCss = {
    content: [
        `${repositoryConfig.portal.js}*.js`,
        'Areas/**/*.cshtml',
        'Pages/**/*.cshtml'
    ],
    safelist: [
        ...defaultRepositoryConfig.purgeCss.safelist,
        /^ct-series-/,
        /^bg-(secondary|danger|success)/,
        /^callout-(danger|success)/,
        'data-license-type',
        'Architect',
        'ManagedServiceProvider',
        'Professional',
        'Business',
        'Trial'
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
