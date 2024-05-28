#!/usr/bin/env ts-node

/*!
 * Script to build additional assets for a repository.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as esbuild from 'esbuild';
import { purgeCss } from './functions/purge-css';
import { repository } from './functions/determine-repository';

const init = async () => {
    console.log('🚀 Compiling and minifying repository JS...');

    await esbuild.build({
        entryPoints: [`${repository.js}src/banners/*.js`],
        target: 'es2015',
        bundle: true,
        outdir: repository.js,
        minify: true,
        outExtension: { '.js': '.min.js' }
    }).then(async () => {
        console.log('✅ Repository JS compiled and minified');

        // PurgeCSS
        await purgeCss({
            source: `${repository.css}${repository.name}.min.css`,
            repository: repository
        });
    });
};

init();
