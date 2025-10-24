#!/usr/bin/env tsx

/*!
 * Script to clean dist folders before build.
 */

import * as fs from 'node:fs';
import { getPackageNamesRequested } from './functions/get-package-names-requested';

const packageNamesRequested = getPackageNamesRequested([
    'assets',
    'astro',
    'build-tools',
    'core',
    'feed-tools',
    'playwright',
    'dist',
    'temp'
]);
const processRequested: string[] = process.argv.slice(2);

if (processRequested.includes('dist')) {
    packageNamesRequested.forEach(workspace => {
        const distPath = `packages/${workspace}/dist`;

        fs.rmSync(distPath, { recursive: true, force: true });

        console.log(`✅ Dist cleaned for ${workspace}`);

        // Ensure the main dist and temp directory exists
        fs.mkdirSync(distPath, { recursive: true });
    });
}

if (processRequested.includes('temp')) {
    fs.rmSync('temp', { recursive: true, force: true });
    console.log('✅ Temp cleaned');
}
