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
    community: {
        ...defaultRepositoryConfig,
        name: 'community',
        css: 'Content/css/',
        js: 'Scripts/',
        favicons: './',
        fontAwesome: 'Content/fonts/fontawesome-free/',
        images: 'Content/Images/global-shared/',
        partials: 'Views/GlobalPartials/'
    },
    design: {
        ...defaultRepositoryConfig,
        name: 'design'
    },
    docs: {
        ...defaultRepositoryConfig,
        name: 'docs'
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
        images: 'wwwroot/images/global-shared/',
        partials: 'Pages/Global/'
    },
    theme: {
        name: 'choco-theme',
        css: 'node_modules/choco-theme/dist/css/',
        js: 'node_modules/choco-theme/dist/js/',
        favicons: 'node_modules/choco-theme/images/favicons/',
        fontAwesome: 'node_modules/@fortawesome/fontawesome-free/webfonts/',
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
        partials: 'global-partials/',
        language: 'hbs'
    }
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
