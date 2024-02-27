#!/usr/bin/env ts-node

/*!
 * Script to copy assets and set up choco-theme on an external website.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import * as process from 'process';
import { repositoryConfig } from './data/repository-config';
import { purgeCss } from './functions/purge-css';
import { updateContent } from './functions/update-content';

// Process args
const params: Record<string, string> = {};
process.argv.slice(2).forEach(val => {
    const [key, value] = val.split('=');

    if (key.startsWith('--')) {
        params[key.slice(2)] = value;
    }
});

// Determine repository information
let repository = repositoryConfig.default;
if (params.repository && repositoryConfig[params.repository]) {
    repository = repositoryConfig[params.repository];
    console.log('Using repository information:', repository);
}

// Determine source CSS name
let sourceCss: string;
switch (repository.name) {
    case repositoryConfig.zendesk.name:
    case repositoryConfig.boxstarter.name:
        sourceCss = repository.name;
        break;
    default:
        sourceCss = 'chocolatey';
        break;
}

interface CopyTheme {
    source: string;
    destination: string;
    isFolder?: boolean;
}

const copyTheme = async ({
    source,
    destination,
    isFolder = true
}: CopyTheme): Promise<void> => {
    // Clean destination
    if (destination !== repository.favicons) {
        await fs.rm(destination, { force: true, recursive: isFolder });
    }

    // Copy theme
    await fs.cp(source, destination, { recursive: isFolder });
};

const init = async () => {
    try {
        const containsValidation = repository.name === repositoryConfig.portal.name || repository.name === repositoryConfig.community.name;

        // Define arrays for parallel tasks
        const parallelTasksInitial = [
            {
                task: 'Copying head JS',
                source: `${repositoryConfig.theme.js}theme-toggle.min.js`,
                destination: `${repository.js}theme-toggle.min.js`,
                isFolder: false
            },
            {
                task: 'Copying JS',
                source: `${repositoryConfig.theme.js}${repository.name}.min.js`,
                destination: `${repository.js}${repository.name}.min.js`,
                isFolder: false
            },
            {
                task: 'Copying Partials',
                source: `${repositoryConfig.theme.partials}${repository.language}/`,
                destination: repository.partials
            },
            {
                task: 'Copying CSS',
                source: `${repositoryConfig.theme.css}${sourceCss}.min.css`,
                destination: `${repository.css}${repository.name}.min.css`,
                isFolder: false
            }
        ];

        // Conditional tasks
        // Community only scripts
        if (repository.name === repositoryConfig.community.name) {
            parallelTasksInitial.push(
                {
                    task: 'Copying community-packages.min.js',
                    source: `${repositoryConfig.theme.js}community-packages.min.js`,
                    destination: `${repository.js}community-packages.min.js`,
                    isFolder: false
                },
                {
                    task: 'Copying community-package-differ.min.js',
                    source: `${repositoryConfig.theme.js}community-package-differ.js`,
                    destination: `${repository.js}community-package-differ.min.js`,
                    isFolder: false
                },
                {
                    task: 'Copying community-package-stats.min.js',
                    source: `${repositoryConfig.theme.js}community-package-stats.js`,
                    destination: `${repository.js}community-package-stats.min.js`,
                    isFolder: false
                }
            );
        }

        // Playwright
        if (repository.playwright) {
            parallelTasksInitial.push(
                {
                    task: 'Copying playwright.config.ts',
                    source: `${repositoryConfig.theme.root}playwright.config.ts`,
                    destination: `${repository.root}playwright.config.ts`,
                    isFolder: false
                }
            );

            if (repository.name === repositoryConfig.org.name) {
                parallelTasksInitial.push(
                    {
                        task: 'Copying Playwright Tests',
                        source: `${repositoryConfig.theme.playwright}tests/pricing-calculator/`,
                        destination: `${repository.playwright}pricing-calculator/`
                    }
                );
            }
        }

        // Favicons
        if (repository.name !== repositoryConfig.boxstarter.name) {
            parallelTasksInitial.push(
                {
                    task: 'Copying Favicons',
                    source: repositoryConfig.theme.favicons,
                    destination: repository.favicons
                }
            );
        }

        // Font Awesome
        if (repository.name !== repositoryConfig.zendesk.name) {
            parallelTasksInitial.push(
                {
                    task: 'Copying Font Awesome',
                    source: repositoryConfig.theme.fontAwesome,
                    destination: repository.fontAwesome
                }
            );
        }

        // Images
        if (repository.name !== repositoryConfig.zendesk.name) {
            parallelTasksInitial.push(
                {
                    task: 'Copying Images',
                    source: repositoryConfig.theme.images,
                    destination: repository.images
                }
            );
        }

        // ESLint and tsconfig - needed if repository contains it's own assets along with choco-theme
        if (repository.playwright || repository.name === repositoryConfig.portal.name) {
            parallelTasksInitial.push(
                {
                    task: 'Copying .eslintrc.js',
                    source: `${repositoryConfig.theme.root}.eslintrc.js`,
                    destination: `${repository.root}.eslintrc.js`,
                    isFolder: false
                },
                {
                    task: 'Copying tsconfig.json',
                    source: `${repositoryConfig.theme.root}tsconfig.json`,
                    destination: `${repository.root}tsconfig.json`,
                    isFolder: false
                }
            );
        }

        // Validation
        if (containsValidation) {
            parallelTasksInitial.push(
                {
                    task: 'Copying validation.min.js',
                    source: `${repositoryConfig.theme.js}validation.min.js`,
                    destination: `${repository.js}validation.min.js`,
                    isFolder: false
                }
            );
        }

        // Execute initial tasks in parallel
        await Promise.all(parallelTasksInitial.map(({ task, source, destination, isFolder }) => {
            return copyTheme({ source, destination, isFolder }).then(() => console.log(`✅ Task for ${task} complete`));
        }));

        // If blog repository, update Program.cs
        if (repository.name === repositoryConfig.blog.name) {
            await updateContent({
                destination: `${repositoryConfig.theme.root}partials/`,
                targetFile: 'Program.cs',
                targetFileDestination: repository.root,
                targetFileContentToReplace: '"TopNoticeText", ""',
                replaceWithContent: 'AlertText.html',
                replacementContentIsFile: true,
                replacementTemplate: '"TopNoticeText", "{0}"'
            });
        }

        // Change CSS content
        // Font Awesome
        if (repository.name === repositoryConfig.portal.name) {
            await updateContent({
                destination: repository.css,
                targetFile: `${repository.name}.min.css`,
                targetFileDestination: repository.css,
                targetFileContentToReplace: '/assets/fonts/fontawesome-free',
                replaceWithContent: '/fonts/fontawesome-free',
                replacementContentIsFile: false
            });
        }

        if (repository.name === repositoryConfig.community.name) {
            // Font Awesome
            await updateContent({
                destination: repository.css,
                targetFile: `${repository.name}.min.css`,
                targetFileDestination: repository.css,
                targetFileContentToReplace: '/assets/fonts/fontawesome-free',
                replaceWithContent: '/Content/fonts/fontawesome-free',
                replacementContentIsFile: false
            });

            // Images for headers
            await updateContent({
                destination: repository.css,
                targetFile: `${repository.name}.min.css`,
                targetFileDestination: repository.css,
                targetFileContentToReplace: '/assets/images',
                replaceWithContent: '/Content/images',
                replacementContentIsFile: false
            });
        }

        // Purge CSS
        if (repository.name !== repositoryConfig.portal.name) {
            await purgeCss({
                source: `${repository.css}${repository.name}.min.css`,
                repository: repository
            });
        }
    } catch (error) {
        console.error(error);
    }
};

// Call the main function
init();
