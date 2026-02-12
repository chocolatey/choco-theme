#!/usr/bin/env tsx

/*!
 * Script to update, compile, and minify scripts.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as esbuild from 'esbuild';
import { getPackageNamesRequested } from './functions/get-package-names-requested';
import { repositoryConfig } from '../packages/build-tools/build/data/repository-config';

const packageNamesRequested = getPackageNamesRequested([
    'assets',
    'astro',
    'build-tools',
    'core',
    'feed-tools',
    'playwright',
    'test-tools'
]);
const containsValidation = [repositoryConfig.ccr.name, repositoryConfig.licensing.name];
const containsDisqus = [repositoryConfig.ccr.name, repositoryConfig.blog.name];
const packageNamesRequestedValidation = containsValidation.filter(item => packageNamesRequested.includes(item));
const packageNamesRequestedDisqus = containsDisqus.filter(item => packageNamesRequested.includes(item));

if (packageNamesRequested.length === 0) {
    process.exit(0);
}

const esbuildOptions = {
    target: 'es2015',
    bundle: true
};

const esbuildMinifyOptions = {
    minify: true,
    outExtension: { '.js': '.min.js' }
};

const tempOutputDir = 'temp/scripts/';

packageNamesRequested.forEach(workspace => {
    const distPath = `packages/${workspace}/dist/scripts/`;

    // Main package scripts
    esbuild.build({
        ...esbuildOptions,
        entryPoints: [`src/scripts/packages/${workspace}/*.js`],
        outdir: distPath
    }).then(() => {
        console.log(`✅ Compiled package scripts for ${workspace}`);

        return esbuild.build({
            ...esbuildOptions,
            entryPoints: ['src/scripts/packages/theme-toggle.js'],
            outdir: distPath
        });
    }).then(() => {
        console.log(`✅ Compiled theme-toggle.js for ${workspace}`);

        const pipelineScripts = fs.readdirSync(distPath)
            .filter(name => name.endsWith('.js') && !name.endsWith('.min.js'))
            .map(name => `${distPath}${name}`);

        return esbuild.build({
            ...esbuildOptions,
            ...esbuildMinifyOptions,
            entryPoints: pipelineScripts,
            outdir: distPath
        });
    }).then(() => {
        console.log(`✅ Minified scripts for ${workspace}`);
    }).catch(error => {
        console.error(`Build error for ${workspace}:`, error);
    });
});

if (packageNamesRequestedValidation.length > 0) {
    const fileName = 'validation.js';

    esbuild.build({
        ...esbuildOptions,
        entryPoints: [`src/scripts/packages/${fileName}`],
        outfile: `${tempOutputDir}${fileName}`
    }).then(() => {
        console.log(`✅ Compiled ${fileName}`);
        // console.log(`Updating ${fileName}`);

        const content = fs.readFileSync(`${tempOutputDir}${fileName}`, 'utf-8');
        const targetPath = path.join(tempOutputDir, fileName);
        const updatedContent = content
            .replaceAll('input-validation-error', 'input-validation-error is-invalid')
            .replaceAll('field-validation-error', 'field-validation-error invalid-feedback')
            .replaceAll('.field-validation-error invalid-feedback', '.field-validation-error.invalid-feedback');


        fs.writeFileSync(targetPath, updatedContent, 'utf-8');
    }).then(() => {
        console.log(`✅ Updated content for ${fileName}`);
        // console.log(`Minifying scripts for ${fileName}`);

        return esbuild.build({
            ...esbuildOptions,
            ...esbuildMinifyOptions,
            entryPoints: [`${tempOutputDir}${fileName}`],
            outdir: tempOutputDir
        });
    }).then(() => {
        console.log(`✅ Minified ${fileName}`);
        // console.log(`Copying ${fileName} and validation.min.js to ${packageNamesRequestedValidation.join(', ')}`);

        packageNamesRequestedValidation.forEach(workspace => {
            const distPath = `packages/${workspace}/dist/scripts/`;

            fs.mkdirSync(distPath, { recursive: true });
            fs.copyFileSync(`${tempOutputDir}${fileName}`, `${distPath}${fileName}`);
            fs.copyFileSync(`${tempOutputDir}validation.min.js`, `${distPath}validation.min.js`);

            console.log(`✅ Copied ${fileName} and validation.min.js to ${workspace}`);
        });
    }).catch(error => {
        console.error(`Build error for ${fileName}:`, error);
    });
}

if (packageNamesRequestedDisqus.length > 0) {
    const fileName = 'disqus.js';

    esbuild.build({
        ...esbuildOptions,
        entryPoints: [`src/scripts/packages/${fileName}`],
        outdir: tempOutputDir
    }).then(() => {
        console.log(`✅ Compiled ${fileName}`);
        // console.log(`Minifying ${fileName}`);

        return esbuild.build({
            ...esbuildOptions,
            ...esbuildMinifyOptions,
            entryPoints: [`${tempOutputDir}${fileName}`],
            outdir: tempOutputDir
        });
    }).then(() => {
        console.log(`✅ Minified ${fileName}`);
        // console.log(`Copying ${fileName} and disqus.min.js to ${packageNamesRequestedDisqus.join(', ')}`);

        packageNamesRequestedDisqus.forEach(workspace => {
            const distPath = `packages/${workspace}/dist/scripts/`;

            fs.mkdirSync(distPath, { recursive: true });
            fs.copyFileSync(`${tempOutputDir}${fileName}`, `${distPath}${fileName}`);
            fs.copyFileSync(`${tempOutputDir}disqus.min.js`, `${distPath}disqus.min.js`);

            console.log(`✅ Copied ${fileName} and disqus.min.js to ${workspace}`);
        });
    }).catch(error => {
        console.error(`Build error for ${fileName}:`, error);
    });
}
