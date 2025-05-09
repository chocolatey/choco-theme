#!/usr/bin/env ts-node

/*!
 * Script to watch choco-theme for changes and place the built changes in the specified folders.
 * Copyright 2020-2024 Chocolatey Software
 * Licensed under Apache License (https://github.com/chocolatey/choco-theme/blob/main/LICENSE)
 */

import { spawn } from 'child_process';
import { folderMapping } from './data/preview-config';

const init = async () => {
    // Parse command-line arguments
    let args = process.argv.slice(2);

    if (args[0] === '--all') {
        args = Object.keys(folderMapping);
    }

    const foldersToRun = args.filter(arg => folderMapping[arg]);

    if (foldersToRun.length === 0) {
        console.error('Please specify at least one valid option.');
        process.exit(1);
    } else {
        console.log('🚀 Running yarn watch and yarn choco-theme on folders...');
    }

    try {
        const childProcess = spawn('yarn watch', [], {
            // stdio: 'inherit',
            shell: true
        });

        let scriptStarted = false;

        childProcess.stdout.on('data', data => {
            const output = data.toString().trim();
            console.log(output);
            if (output.includes('CSS minified')) {
                scriptStarted = true;
            }

            if ((scriptStarted && output.includes('CSS minified')) ||
                (scriptStarted && output.includes('Content for validation.min.js updated')) ||
                (scriptStarted && output.includes('Partials built'))) {
                const childProcessTwo = spawn(`yarn preview-choco-theme ${args.join(' ')}`, [], {
                    stdio: 'inherit',
                    shell: true
                });

                childProcessTwo.on('close', data => {
                    if (data === 0) {
                        console.log('🤖 Listening for changes to choco-theme...');
                    }
                });

                childProcessTwo.on('exit', code => {
                    if (code !== 0) {
                        console.error(`⛔ choco-theme not ran and existed with error code ${code}`);
                    }
                });
            }
        });

        childProcess.on('error', error => {
            console.error(`⛔ yarn watch did not complete. Error: ${error}`);
        });
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

init().catch(error => {
    console.error(error);
    process.exit(1);
});
