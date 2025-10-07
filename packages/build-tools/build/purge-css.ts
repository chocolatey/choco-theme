#!/usr/bin/env tsx

/*!
 * Script to purge unused CSS.
 */

import * as process from 'process';
import * as fs from 'node:fs';
import { PurgeCSS } from 'purgecss';
import { repositoryConfig } from './data/repository-config';

const packageNameRequested: string = process.argv.slice(2)[0];
const repositoryInfo = repositoryConfig[packageNameRequested];
const source = `${repositoryInfo.css}${repositoryInfo.name}.min.css`;

console.log('🚀 Purging CSS with PurgeCSS...');

// Copy non purged CSS and add a temp extension
fs.cpSync(source, `${repositoryInfo.css}${repositoryInfo.name}.min.temp.css`, { force: true });

const init = async () => {
    await new PurgeCSS().purge({
        content: repositoryInfo.purgeCss.content,
        safelist: repositoryInfo.purgeCss.safelist,
        // fontFace: true, // Note: This is disabled because it was removing Font Awesome fonts
        keyframes: true,
        // variables: true, // Note: This is stripping out too many CSS variables that are actually in use
        css: [source]
    }).then(result => {
        // Write purged content back to the file
        fs.writeFileSync(source, result[0].css);

        // Update file name
        fs.renameSync(source, `${repositoryInfo.css}${repositoryInfo.name}.min.purged.css`);

        // Change temp extension of non purged CSS back to original
        fs.renameSync(`${repositoryInfo.css}${repositoryInfo.name}.min.temp.css`, source);

        console.log('✅ PurgeCSS complete');
    });
};

init().catch(error => {
    console.error('❌ An error occurred during PurgeCSS processing:', error);
    process.exit(1);
});