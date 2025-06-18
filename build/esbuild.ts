#!/usr/bin/env ts-node

/*!
 * Script to build TS and JS with esbuild.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as process from 'process';
import * as esbuild from 'esbuild';

const init = async () => {
    const minify = process.argv.includes('--minify');

    const banner = `/*!
  * choco-theme v1.2.2 (https://github.com/chocolatey/choco-theme#readme)
  * Copyright 2020-2024 Chocolatey Software
  * Licensed under MIT (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
*/`;

    const esbuildOptions: esbuild.BuildOptions = {
        entryPoints: ['js/*.js'],
        target: 'es2015',
        bundle: true,
        banner: {
            js: banner
        },
        outdir: 'dist/js'
    };

    if (minify) {
        console.log('🚀 Minifying JS...');
        await esbuild.build({
            ...esbuildOptions,
            minify: true,
            outExtension: { '.js': '.min.js' }
        }).then(() => {
            console.log('✅ JS minified');
        });
    } else {
        console.log('🚀 Compiling JS and TS...');
        await esbuild.build({
            ...esbuildOptions
        }).then(() => {
            console.log('✅ JS and TS compiled');
        });
    }
};

init().catch(error => {
    console.error(error);
    process.exit(1);
});
