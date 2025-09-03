#!/usr/bin/env ts-node

/*!
 * Script to copy assets and set up choco-theme on an external website.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import { repository } from './functions/determine-repository';
import { repositoryConfig } from './data/repository-config';
import { purgeCss } from './functions/purge-css';
import { updateContent } from './functions/update-content';

if (repository.name !== repositoryConfig.playwright.name) {
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
    await fs.cp(source, destination, { force: true, recursive: isFolder });

    console.log(`✅ ${task} copied`);
};

const init = async () => {
    try {
        const containsValidation = repository.name === repositoryConfig.portal.name || repository.name === repositoryConfig.community.name;

        // Define array for parallel tasks
        const parallelTasksInitial: CopyTheme[] = [];

        if (repository.name !== repositoryConfig.playwright.name) {
            parallelTasksInitial.push(
                {
                    task: `${repository.name}.min.css`,
                    source: `${repositoryConfig.theme.css}${sourceCss}.min.css`,
                    destination: `${repository.css}${repository.name}.min.css`,
                    isFolder: false
                }
            );

            // Not CCM scripts
            if (repository.name !== repositoryConfig.ccm.name) {
                parallelTasksInitial.push(
                    {
                        task: 'theme-toggle.min.js',
                        source: `${repositoryConfig.theme.js}theme-toggle.min.js`,
                        destination: `${repository.js}theme-toggle.min.js`,
                        isFolder: false
                    },
                    {
                        task: 'bootstrap.bundle.min.js',
                        source: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                        destination: `${repository.js}bootstrap.bundle.min.js`,
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
                        destination: repository.partials,
                        isFolder: true
                    }
                );
            }

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

            // jstree css
            if (repository.name === repositoryConfig.ccm.name) {
                parallelTasksInitial.push(
                    {
                        task: 'jstree.min.css',
                        source: `${repositoryConfig.theme.css}jstree.min.css`,
                        destination: `${repository.css}jstree.min.css`,
                        isFolder: false
                    }
                );
            }

            // vendors css
            if (repository.name === repositoryConfig.ccm.name) {
                parallelTasksInitial.push(
                    {
                        task: 'vendors.min.css',
                        source: `${repositoryConfig.theme.css}vendors.min.css`,
                        destination: `${repository.css}vendors.min.css`,
                        isFolder: false
                    }
                );
            }

            // tempus-dominus css
            if (repository.name === repositoryConfig.ccm.name) {
                parallelTasksInitial.push(
                    {
                        task: 'tempus-dominus.min.css',
                        source: `${repositoryConfig.theme.css}tempus-dominus.min.css`,
                        destination: `${repository.css}tempus-dominus.min.css`,
                        isFolder: false
                    }
                );
            }

            // Font Awesome and PT Sans
            if (repository.name !== repositoryConfig.zendesk.name) {
                parallelTasksInitial.push(
                    {
                        task: 'Font Awesome',
                        source: repositoryConfig.theme.fontAwesome,
                        destination: repository.fontAwesome,
                        isFolder: true
                    },
                    {
                        task: 'PT Sans',
                        source: repositoryConfig.theme.ptSans,
                        destination: repository.ptSans,
                        isFolder: true
                    }
                );
            }

            // Images
            if (repository.images) {
                parallelTasksInitial.push(
                    {
                        task: 'Images',
                        source: repositoryConfig.theme.images,
                        destination: repository.images,
                        isFolder: true
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
        }

        // ESLint - needed if repository contains it's own assets along with choco-theme
        if (repository.name === repositoryConfig.portal.name || repository.name === repositoryConfig.ccm.name || repository.name === repositoryConfig.playwright.name || repository.name === repositoryConfig.credits.name) {
            parallelTasksInitial.push(
                {
                    task: 'eslint.config.mjs',
                    source: `${repositoryConfig.theme.root}eslint.config.mjs`,
                    destination: `${repository.root}eslint.config.mjs`,
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

        if (repository.name !== repositoryConfig.playwright.name) {
            // Change CSS content
            // Font Awesome
            if (repository.name === repositoryConfig.portal.name || repository.name === repositoryConfig.ccm.name ||  repository.language === 'astro') {
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
            }

            if (repository.name === repositoryConfig.ccm.name) {
                console.log('🚀 Updating jstree image paths...');
                await updateContent({
                    destination: repository.css,
                    targetFile: 'jstree.min.css',
                    targetFileDestination: repository.css,
                    targetFileContentToReplace: 'url(32px.png)',
                    replaceWithContent: 'var(--jstree-image-checkbox-path)',
                    replacementContentIsFile: false
                });
                console.log('✅ jstree image paths updated');
            }

            // PurgeCSS
            if (repository.name !== repositoryConfig.portal.name && repository.name !== repositoryConfig.ccm.name) {
                await purgeCss({
                    source: `${repository.css}${repository.name}.min.css`,
                    repository: repository
                });
            }
        }

        if (repository.name === repositoryConfig.ccm.name || repository.name === repositoryConfig.portal.name) {
            console.log('🚀 Updating ESLint project path...');
            await updateContent({
                destination: repository.root,
                targetFile: 'eslint.config.mjs',
                targetFileDestination: repository.root,
                targetFileContentToReplace: 'project: \'tsconfig.json\'',
                replaceWithContent: 'project: \'playwright/tsconfig.json\'',
                replacementContentIsFile: false
            });
            console.log('✅ ESLint project path updated');
        }

        console.log('🎉 choco-theme complete');
    } catch (error) {
        console.error(error);
    }
};

init().catch(error => {
    console.error(error);
    process.exit(1);
});
