#!/usr/bin/env ts-node

/*!
 * Script to update version number references in the project.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import * as fs from 'fs/promises';
import * as process from 'process';

// These are the files we only care about replacing the version
const FILES: string[] = [
    'README.md',
    'package.json',
    'scss/mixins/_banner.scss',
    'build/esbuild.ts'
];

// Blame TC39... https://github.com/benjamingr/RegExp.escape/issues/37
const regExpQuote = (string: string): string => string.replace(/[$()*+-.?[\\\]^{|}]/g, '\\$&');
const regExpQuoteReplacement = (string: string): string => string.replace(/\$/g, '$$');

const replaceRecursively = async (file: string, oldVersion: string, newVersion: string): Promise<void> => {
    const originalString: string = await fs.readFile(file, 'utf-8');
    const newString: string = originalString
        .replace(
            new RegExp(regExpQuote(oldVersion), 'g'),
            regExpQuoteReplacement(newVersion)
        );

    // No need to move any further if the strings are identical
    if (originalString === newString) {
        return;
    }

    await fs.writeFile(file, newString, 'utf-8');
};

const showUsage = (args: string[]): void => {
    console.error('USAGE: change-version old_version new_version');
    console.error('Got arguments:', args);
    process.exit(1);
};

const init = async (args: string[]): Promise<void> => {
    let [oldVersion, newVersion] = args;

    if (!oldVersion || !newVersion) {
        showUsage(args);
    }

    // Strip any leading `v` from arguments because
    // otherwise we will end up with duplicate `v`s
    [oldVersion, newVersion] = [oldVersion, newVersion].map(arg => {
        return arg.startsWith('v') ? arg.slice(1) : arg;
    });

    if (oldVersion === newVersion) {
        showUsage(args);
    }

    try {
        console.log(`🚀 Changing version from ${oldVersion} to ${newVersion}...`);
        await Promise.all(
            FILES.map(file => replaceRecursively(file, oldVersion, newVersion))
        );
        console.log('✅ Version changed');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

init(process.argv.slice(2)).catch(error => {
    console.error(error);
    process.exit(1);
});
