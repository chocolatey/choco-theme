#!/usr/bin/env tsx

/*!
 * Script to update, compile, and minify scripts.
 */

import * as process from 'process';
import { repositoryConfig } from './data/repository-config';
import { copyAssets } from './functions/copy-assets';
import type { CopyAssets } from './functions/copy-assets';

const packageNameRequested: string = process.argv.slice(2)[0];
const repositoryInfo = repositoryConfig[packageNameRequested];

// Define array for parallel tasks
const parallelTasksInitial: CopyAssets[] = [];
const packageSource = `node_modules/@chocolatey-software/${repositoryInfo.name}/dist/`;
const assetsSource = 'node_modules/@chocolatey-software/assets/';

parallelTasksInitial.push(
    {
        task: 'CSS',
        source: `${packageSource}css/`,
        destination: repositoryInfo.css,
        isFolder: true
    },
    {
        task: 'Scripts',
        source: `${packageSource}scripts/`,
        destination: repositoryInfo.js,
        isFolder: true
    }
);

if (repositoryInfo.partials) {
    parallelTasksInitial.push(
        {
            task: 'Partials',
            source: `${packageSource}partials/`,
            destination: repositoryInfo.partials,
            isFolder: true
        }
    );
}

if (repositoryInfo.name !== repositoryConfig.ccm.name) {
    parallelTasksInitial.push(
        {
            task: 'Bootstrap',
            source: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            destination: `${repositoryInfo.js}bootstrap.bundle.min.js`,
            isFolder: false
        }
    );
}

if (repositoryInfo.ptSans) {
    parallelTasksInitial.push(
        {
            task: 'PT Sans',
            source: `${assetsSource}fonts/PT_Sans/`,
            destination: repositoryInfo.ptSans,
            isFolder: true
        }
    );
}

if (repositoryInfo.fontAwesome) {
    parallelTasksInitial.push(
        {
            task: 'Font Awesome',
            source: 'node_modules/@fortawesome/fontawesome-free/webfonts/',
            destination: repositoryInfo.fontAwesome,
            isFolder: true
        }
    );
}

if (repositoryInfo.images) {
    parallelTasksInitial.push(
        {
            task: 'Images',
            source: `${assetsSource}images/global-shared/`,
            destination: repositoryInfo.images,
            isFolder: true
        }
    );
}

if (repositoryInfo.eslintConfig) {
    parallelTasksInitial.push(
        {
            task: 'ESLint config',
            source: `${packageSource}configs/eslint.config.mjs`,
            destination: repositoryInfo.eslintConfig,
            isFolder: false
        }
    );
}

try {
    parallelTasksInitial.forEach(({ task, source, destination, isFolder }) => {
        copyAssets({ task, source, destination, isFolder });
    });
} catch (error) {
    console.error('Error during copy tasks:', error);
}
