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
    task: string;
    source: string;
    destination: string;
    isFolder?: boolean;
}

const copyTheme = async ({
    task,
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

    console.log(`✅ ${task} copied`);
};

const init = async () => {
    try {
        const containsValidation = repository.name === repositoryConfig.portal.name || repository.name === repositoryConfig.community.name;

        // Define arrays for parallel tasks
        const parallelTasksInitial = [
            {
                task: 'theme-toggle.min.js',
                source: `${repositoryConfig.theme.js}theme-toggle.min.js`,
                destination: `${repository.js}theme-toggle.min.js`,
                isFolder: false
            },
            {
                task: `${repository.name}.min.js`,
                source: `${repositoryConfig.theme.js}${repository.name}.min.js`,
                destination: `${repository.js}${repository.name}.min.js`,
                isFolder: false
            },
            {
                task: 'Partials',
                source: `${repositoryConfig.theme.partials}${repository.language}/`,
                destination: repository.partials
            },
            {
                task: `${repository.name}.min.css`,
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
                    task: 'community-packages.min.js',
                    source: `${repositoryConfig.theme.js}community-packages.min.js`,
                    destination: `${repository.js}community-packages.min.js`,
                    isFolder: false
                },
                {
                    task: 'community-package-differ.min.js',
                    source: `${repositoryConfig.theme.js}community-package-differ.js`,
                    destination: `${repository.js}community-package-differ.min.js`,
                    isFolder: false
                },
                {
                    task: 'community-package-stats.min.js',
                    source: `${repositoryConfig.theme.js}community-package-stats.js`,
                    destination: `${repository.js}community-package-stats.min.js`,
                    isFolder: false
                }
            );
        }

        // Disqus
        if (repository.name === repositoryConfig.community.name || repository.name === repositoryConfig.blog.name) {
            parallelTasksInitial.push(
                {
                    task: 'disqus.min.js',
                    source: `${repositoryConfig.theme.js}disqus.min.js`,
                    destination: `${repository.js}disqus.min.js`,
                    isFolder: false
                }
            );
        }

        // atcb-override css
        if (repository.name === repositoryConfig.org.name) {
            parallelTasksInitial.push(
                {
                    task: 'atcb-overrides.min.css',
                    source: `${repositoryConfig.theme.css}atcb-overrides.min.css`,
                    destination: `${repository.css}atcb-overrides.min.css`,
                    isFolder: false
                }
            );
        }

        // Playwright
        if (repository.playwright) {
            parallelTasksInitial.push(
                {
                    task: 'Playwright tests - general',
                    source: `${repositoryConfig.theme.playwright}tests/general/`,
                    destination: `${repository.playwright}general/`
                }
            );

            if (repository.name === repositoryConfig.org.name) {
                parallelTasksInitial.push(
                    {
                        task: 'Playwright tests - pricing calculator',
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
                    task: 'Favicons',
                    source: repositoryConfig.theme.favicons,
                    destination: repository.favicons
                }
            );
        }

        // Font Awesome
        if (repository.name !== repositoryConfig.zendesk.name) {
            parallelTasksInitial.push(
                {
                    task: 'Font Awesome',
                    source: repositoryConfig.theme.fontAwesome,
                    destination: repository.fontAwesome
                }
            );
        }

        // Images
        if (repository.name !== repositoryConfig.zendesk.name) {
            parallelTasksInitial.push(
                {
                    task: 'Images',
                    source: repositoryConfig.theme.images,
                    destination: repository.images
                }
            );
        }

        // ESLint and tsconfig - needed if repository contains it's own assets along with choco-theme
        if (repository.name === repositoryConfig.portal.name) {
            parallelTasksInitial.push(
                {
                    task: '.eslintrc.js',
                    source: `${repositoryConfig.theme.root}.eslintrc.js`,
                    destination: `${repository.root}.eslintrc.js`,
                    isFolder: false
                }
            );
        }

        // Validation
        if (containsValidation) {
            parallelTasksInitial.push(
                {
                    task: 'validation.min.js',
                    source: `${repositoryConfig.theme.js}validation.min.js`,
                    destination: `${repository.js}validation.min.js`,
                    isFolder: false
                }
            );
        }

        // Execute initial tasks in parallel
        console.log('🚀 Starting choco-theme...');
        console.log('🚀 Copying choco-theme...');
        await Promise.all(parallelTasksInitial.map(({ task, source, destination, isFolder }) => {
            return copyTheme({ task, source, destination, isFolder });
        }));
        console.log('✅ Copying of choco-theme complete');

        // If blog repository, update Program.cs
        if (repository.name === repositoryConfig.blog.name) {
            console.log('🚀 Updating Program.cs with AlertText.html...');
            await updateContent({
                destination: `${repositoryConfig.theme.root}partials/`,
                targetFile: 'Program.cs',
                targetFileDestination: repository.root,
                targetFileContentToReplace: '"TopNoticeText", ""',
                replaceWithContent: 'AlertText.html',
                replacementContentIsFile: true,
                replacementTemplate: '"TopNoticeText", "{0}"'
            });
            console.log('✅ Program.cs updated');
        }

        // Change CSS content
        // Font Awesome
        if (repository.name === repositoryConfig.portal.name || repository.language === 'astro') {
            console.log('🚀 Updating Font Awesome font path...');
            await updateContent({
                destination: repository.css,
                targetFile: `${repository.name}.min.css`,
                targetFileDestination: repository.css,
                targetFileContentToReplace: '/assets/fonts/fontawesome-free',
                replaceWithContent: '/fonts/fontawesome-free',
                replacementContentIsFile: false
            });
            console.log('✅ Font Awesome font path updated');
        }

        if (repository.name === repositoryConfig.community.name) {
            // Font Awesome
            console.log('🚀 Updating Font Awesome font path...');
            await updateContent({
                destination: repository.css,
                targetFile: `${repository.name}.min.css`,
                targetFileDestination: repository.css,
                targetFileContentToReplace: '/assets/fonts/fontawesome-free',
                replaceWithContent: '/Content/fonts/fontawesome-free',
                replacementContentIsFile: false
            });
            console.log('✅ Font Awesome font path updated');

            // Images for headers
            console.log('🚀 Updating image paths for headers...');
            await updateContent({
                destination: repository.css,
                targetFile: `${repository.name}.min.css`,
                targetFileDestination: repository.css,
                targetFileContentToReplace: '/assets/images',
                replaceWithContent: '/Content/images',
                replacementContentIsFile: false
            });
            console.log('✅ Image paths for headers updated');
        }

        // PurgeCSS
        if (repository.name !== repositoryConfig.portal.name) {
            await purgeCss({
                source: `${repository.css}${repository.name}.min.css`,
                repository: repository
            });
        }

        console.log('🎉 choco-theme complete');
    } catch (error) {
        console.error(error);
    }
};

init();
