#!/usr/bin/env tsx

/*!
 * Script to update, compile, and minify scripts.
 */

import * as process from 'process';
import { getPackageNamesRequested } from './functions/get-package-names-requested';
import { copyAssets } from '../packages/build-tools/build/functions/copy-assets';
import type { CopyAssets } from '../packages/build-tools/build/functions/copy-assets';

const packageNamesRequestedConfigs = getPackageNamesRequested([
    'assets',
    'astro',
    'boxstarter',
    'build-tools',
    'core',
    'design',
    'feed-tools',
    'fest',
    'org',
    'playwright',
    'test-tools',
    'zendesk'
]);

if (packageNamesRequestedConfigs.length === 0) {
    process.exit(0);
}

const parallelTasksInitial: CopyAssets[] = [];

packageNamesRequestedConfigs.forEach(workspace => {
    parallelTasksInitial.push(
        {
            task: `ESLint config for ${workspace}`,
            source: 'eslint.config.mjs',
            destination: `packages/${workspace}/dist/configs/eslint.config.mjs`,
            isFolder: false
        }
    );
});

try {
    parallelTasksInitial.forEach(({ task, source, destination, isFolder }) => {
        copyAssets({ task, source, destination, isFolder });
    });
} catch (error) {
    console.error('Error during copy tasks:', error);
}